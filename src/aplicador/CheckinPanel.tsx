import { useCallback, useEffect, useState } from 'react';
import { supabase } from './supabase';
import type { Perfil } from './supabase';
import Camera from './Camera';
import { btnCls, btnDangerCls, cardCls, fmtDataHora, fmtDuracao, msgErro, obterPosicao } from './util';

interface LocalOpcao {
  id: number;
  descricao: string;
  endereco: string;
  aplicador_criancas: { nome: string } | null;
}
interface Sessao {
  id: number;
  checkin_em: string;
  checkin_no_local: boolean | null;
  aplicador_locais: { descricao: string; aplicador_criancas: { nome: string } | null } | null;
}
interface Feito {
  id: number;
  checkin_em: string;
  checkout_em: string | null;
  duracao_min: number | null;
  status: string;
  resumo: string | null;
  aplicador_locais: { descricao: string; aplicador_criancas: { nome: string } | null } | null;
}

export default function CheckinPanel({ perfil }: { perfil: Perfil }) {
  const [locais, setLocais] = useState<LocalOpcao[]>([]);
  const [sessao, setSessao] = useState<Sessao | null>(null);
  const [feitos, setFeitos] = useState<Feito[]>([]);
  const [localSel, setLocalSel] = useState<number | null>(null);
  const [camera, setCamera] = useState<null | 'in' | 'out'>(null);
  const [resumo, setResumo] = useState('');
  const [busy, setBusy] = useState(false);
  const [info, setInfo] = useState('');
  const [erro, setErro] = useState('');
  const [agora, setAgora] = useState(Date.now());

  const carregar = useCallback(async () => {
    const inicioDia = new Date();
    inicioDia.setHours(0, 0, 0, 0);
    const [l, s, f] = await Promise.all([
      supabase.from('aplicador_locais').select('id, descricao, endereco, aplicador_criancas(nome)').order('descricao'),
      supabase
        .from('aplicador_atendimentos')
        .select('id, checkin_em, checkin_no_local, aplicador_locais(descricao, aplicador_criancas(nome))')
        .eq('aplicador_id', perfil.id)
        .eq('status', 'em_andamento')
        .maybeSingle(),
      supabase
        .from('aplicador_atendimentos')
        .select('id, checkin_em, checkout_em, duracao_min, status, resumo, aplicador_locais(descricao, aplicador_criancas(nome))')
        .eq('aplicador_id', perfil.id)
        .neq('status', 'em_andamento')
        .gte('checkin_em', inicioDia.toISOString())
        .order('checkin_em', { ascending: false }),
    ]);
    setLocais((l.data ?? []) as unknown as LocalOpcao[]);
    setSessao((s.data ?? null) as unknown as Sessao | null);
    setFeitos((f.data ?? []) as unknown as Feito[]);
  }, [perfil.id]);

  useEffect(() => {
    carregar();
  }, [carregar]);

  useEffect(() => {
    if (!sessao) return;
    const t = setInterval(() => setAgora(Date.now()), 1000);
    return () => clearInterval(t);
  }, [sessao]);

  async function enviarFoto(foto: Blob, tipo: 'checkin' | 'checkout'): Promise<string> {
    const caminho = `${perfil.id}/${Date.now()}_${tipo}.jpg`;
    const { error } = await supabase.storage.from('aplicador-fotos').upload(caminho, foto, { contentType: 'image/jpeg' });
    if (error) throw new Error('Falha ao enviar a foto: ' + error.message);
    return caminho;
  }

  async function fazerCheckin(foto: Blob) {
    if (localSel === null) return;
    setBusy(true);
    setErro('');
    setInfo('Obtendo localização…');
    try {
      const pos = await obterPosicao();
      setInfo('Enviando foto…');
      const caminho = await enviarFoto(foto, 'checkin');
      setInfo('Registrando chegada…');
      const { data, error } = await supabase.rpc('aplicador_checkin', {
        p_local_id: localSel, p_lat: pos.lat, p_lng: pos.lng, p_prec: pos.prec, p_foto: caminho,
      });
      if (error) throw new Error(error.message);
      const dentro = (data as { checkin_no_local: boolean }).checkin_no_local;
      setInfo(dentro ? 'Chegada registrada. Presença validada no local.' : 'Chegada registrada, mas você está fora do local cadastrado. O atendimento será sinalizado para revisão.');
      setLocalSel(null);
      await carregar();
    } catch (e) {
      setInfo('');
      setErro(msgErro(e));
    } finally {
      setCamera(null);
      setBusy(false);
    }
  }

  async function fazerCheckout(foto: Blob) {
    setBusy(true);
    setErro('');
    setInfo('Obtendo localização…');
    try {
      const pos = await obterPosicao();
      setInfo('Enviando foto…');
      const caminho = await enviarFoto(foto, 'checkout');
      setInfo('Finalizando atendimento…');
      const { error } = await supabase.rpc('aplicador_checkout', {
        p_lat: pos.lat, p_lng: pos.lng, p_prec: pos.prec, p_foto: caminho, p_resumo: resumo,
      });
      if (error) throw new Error(error.message);
      setResumo('');
      setInfo('Atendimento finalizado. Obrigado!');
      await carregar();
    } catch (e) {
      setInfo('');
      setErro(msgErro(e)); // o resumo continua na tela para tentar de novo
    } finally {
      setCamera(null);
      setBusy(false);
    }
  }

  function pedirCheckout() {
    if (resumo.trim().length < 10) {
      setErro('Escreva o resumo da sessão (mínimo de 10 caracteres).');
      return;
    }
    setErro('');
    setCamera('out');
  }

  const segundos = sessao ? Math.max(0, Math.floor((agora - Date.parse(sessao.checkin_em)) / 1000)) : 0;

  return (
    <div className="space-y-5">
      {erro && <div role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{erro}</div>}
      {info && <div role="status" className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">{info}</div>}

      {busy ? (
        <div className={`${cardCls} text-center text-gray-600`}>Processando… não feche a página.</div>
      ) : camera === 'in' ? (
        <Camera titulo="Selfie de chegada" onCapturar={fazerCheckin} onCancelar={() => setCamera(null)} />
      ) : camera === 'out' ? (
        <Camera titulo="Selfie de saída" onCapturar={fazerCheckout} onCancelar={() => setCamera(null)} />
      ) : sessao ? (
        <div className={cardCls}>
          <h2 className="text-lg font-bold text-gray-900">
            {sessao.aplicador_locais?.aplicador_criancas?.nome ?? 'Atendimento'} · {sessao.aplicador_locais?.descricao}
          </h2>
          <p className="text-sm text-gray-500">Chegada às {fmtDataHora(sessao.checkin_em)}</p>
          <p className="my-4 text-center font-mono text-5xl font-bold text-gray-900" aria-live="off">{fmtDuracao(segundos)}</p>
          <label htmlFor="resumo" className="mb-1 block text-sm font-medium text-gray-700">Resumo da sessão (3 a 4 linhas)</label>
          <textarea id="resumo" rows={5} maxLength={400} value={resumo} onChange={(e) => setResumo(e.target.value)}
            placeholder="O que foi trabalhado e como a criança respondeu."
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
          <p className="mb-3 text-right text-xs text-gray-500">{resumo.length}/400</p>
          <button className={`${btnDangerCls} w-full`} onClick={pedirCheckout}>Finalizar atendimento</button>
        </div>
      ) : (
        <div className={cardCls}>
          <h2 className="mb-3 text-lg font-bold text-gray-900">Novo atendimento</h2>
          {locais.length === 0 ? (
            <p className="text-sm text-gray-600">Nenhuma criança atribuída a você ainda. Fale com o administrador.</p>
          ) : (
            <div className="space-y-2">
              {locais.map((l) => (
                <button key={l.id} type="button" onClick={() => setLocalSel(l.id)}
                  className={`block w-full rounded-xl border-2 p-3 text-left ${localSel === l.id ? 'border-amber-500 bg-amber-50' : 'border-gray-200 bg-white'}`}>
                  <span className="font-semibold text-gray-900">{l.aplicador_criancas?.nome}</span>
                  <span className="block text-sm text-gray-500">{l.descricao} · {l.endereco}</span>
                </button>
              ))}
              <button className={`${btnCls} mt-2 w-full`} disabled={localSel === null} onClick={() => { setErro(''); setInfo(''); setCamera('in'); }}>
                Cheguei ao local
              </button>
            </div>
          )}
        </div>
      )}

      <div className={cardCls}>
        <h2 className="mb-2 text-lg font-bold text-gray-900">Realizados hoje</h2>
        {feitos.length === 0 ? (
          <p className="text-sm text-gray-500">Nenhum atendimento finalizado hoje.</p>
        ) : (
          feitos.map((f) => (
            <div key={f.id} className="border-t border-gray-100 py-3 first:border-0">
              <div className="flex items-center justify-between gap-2">
                <strong className="text-gray-900">{f.aplicador_locais?.aplicador_criancas?.nome} · {f.aplicador_locais?.descricao}</strong>
                <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${f.status === 'finalizado' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {f.status === 'finalizado' ? 'Validado' : 'Revisar'}
                </span>
              </div>
              <p className="text-sm text-gray-500">{fmtDataHora(f.checkin_em)} até {fmtDataHora(f.checkout_em)} ({f.duracao_min} min)</p>
              <p className="mt-1 text-sm text-gray-700">{f.resumo}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}