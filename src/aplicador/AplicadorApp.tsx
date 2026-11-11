import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';
import type { Session } from '@supabase/supabase-js';

// ARQUIVO ÚNICO: contém toda a área do aplicador (login, check-in, painel do admin).
// Para trocar o logo, altere a linha CAMINHO_LOGO mais abaixo.

// ===== supabase.ts =====
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Se as variáveis não existirem, o site NÃO quebra: só a área do aplicador avisa.
const supabaseConfigurado = Boolean(url && key);

const supabase = createClient(
  url || 'https://placeholder.supabase.co',
  key || 'placeholder-key',
  { auth: { storageKey: 'behave-aplicador-auth' } }
);

type Papel = 'admin' | 'aplicador' | 'medico';

interface Perfil {
  id: string;
  nome: string;
  email: string | null;
  papel: Papel;
  ativo: boolean;
}

// ===== util.ts =====
const inputCls =
  'w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400';
const btnCls =
  'rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-50';
const btnSecCls =
  'rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50';
const btnDangerCls =
  'rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50';
const cardCls = 'rounded-2xl border border-gray-200 bg-white p-5 shadow-sm';
const labelCls = 'mb-1 block text-sm font-medium text-gray-700';

interface Posicao {
  lat: number;
  lng: number;
  prec: number;
}

function obterPosicao(): Promise<Posicao> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Este aparelho não oferece localização.'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (p) => resolve({ lat: p.coords.latitude, lng: p.coords.longitude, prec: p.coords.accuracy }),
      (e) =>
        reject(
          new Error(
            e.code === 1
              ? 'Permissão de localização negada. Ative a localização no navegador e tente de novo.'
              : 'Não foi possível obter a localização. Tente em um local aberto.'
          )
        ),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
    );
  });
}

function fmtDataHora(iso: string | null): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function fmtDuracao(seg: number): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${p(Math.floor(seg / 3600))}:${p(Math.floor((seg % 3600) / 60))}:${p(seg % 60)}`;
}

function paraInputLocal(iso: string | null): string {
  if (!iso) return '';
  const d = new Date(iso);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
}

function msgErro(e: unknown): string {
  return e instanceof Error ? e.message : 'Erro inesperado. Tente novamente.';
}

// ===== LogoAbelha.tsx =====
interface LogoAbelhaProps {
  size?: number;
  className?: string;
}

// Para trocar a imagem, altere só o caminho abaixo.
// O arquivo precisa estar na pasta "public" do projeto.
const CAMINHO_LOGO = '/logo-aplicador.jpg';

function LogoAbelha({ size = 24, className = '' }: LogoAbelhaProps) {
  return (
    <img
      src={CAMINHO_LOGO}
      alt="Behave"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      onError={(e) => {
        e.currentTarget.style.display = 'none';
      }}
    />
  );
}

// ===== Camera.tsx =====
interface Props {
  titulo: string;
  onCapturar: (foto: Blob) => void;
  onCancelar: () => void;
}

function Camera({ titulo, onCapturar, onCancelar }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [erro, setErro] = useState('');
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    let cancelado = false;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setErro('Este navegador não permite abrir a câmera. Use o Chrome ou o Safari atualizado, com o site em HTTPS.');
      return;
    }
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'user' }, audio: false })
      .then((stream) => {
        if (cancelado) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
        setPronto(true);
      })
      .catch(() => setErro('Não foi possível abrir a câmera. Permita o acesso à câmera no navegador e tente de novo.'));
    return () => {
      cancelado = true;
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  function capturar() {
    const v = videoRef.current;
    if (!v || !v.videoWidth) return;
    const escala = Math.min(1, 800 / v.videoWidth);
    const c = document.createElement('canvas');
    c.width = Math.round(v.videoWidth * escala);
    c.height = Math.round(v.videoHeight * escala);
    c.getContext('2d')?.drawImage(v, 0, 0, c.width, c.height);
    c.toBlob((b) => { if (b) onCapturar(b); }, 'image/jpeg', 0.7);
  }

  return (
    <div className={cardCls}>
      <h2 className="mb-3 text-lg font-bold text-gray-900">{titulo}</h2>
      {erro ? (
        <p role="alert" className="mb-3 rounded-lg bg-red-50 p-3 text-sm text-red-700">{erro}</p>
      ) : (
        <video ref={videoRef} autoPlay playsInline muted className="mb-3 w-full rounded-xl bg-black" />
      )}
      <div className="flex gap-2">
        {!erro && (
          <button type="button" className={`${btnCls} flex-1`} disabled={!pronto} onClick={capturar}>
            Tirar foto e confirmar
          </button>
        )}
        <button type="button" className={btnSecCls} onClick={onCancelar}>Cancelar</button>
      </div>
    </div>
  );
}

// ===== AplicadorLogin.tsx =====
function AplicadorLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [busy, setBusy] = useState(false);

  async function entrar(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErro('');
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password: senha });
    if (error) setErro('E-mail ou senha incorretos.');
    setBusy(false);
  }

  return (
    <div className={`${cardCls} mx-auto max-w-sm`}>
      <div className="mb-4 flex items-center gap-3">
        <LogoAbelha size={40} />
        <div>
          <h1 className="text-xl font-bold text-gray-900">Área do aplicador</h1>
          <p className="text-sm text-gray-500">Acesso restrito à equipe Behave</p>
        </div>
      </div>
      <form onSubmit={entrar} className="space-y-3">
        <div>
          <label htmlFor="ap-email" className={labelCls}>E-mail</label>
          <input id="ap-email" type="email" required autoComplete="username" className={inputCls}
            value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="ap-senha" className={labelCls}>Senha</label>
          <input id="ap-senha" type="password" required autoComplete="current-password" className={inputCls}
            value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        {erro && <p role="alert" className="text-sm text-red-600">{erro}</p>}
        <button type="submit" disabled={busy} className={`${btnCls} w-full`}>
          {busy ? 'Entrando…' : 'Entrar'}
        </button>
        <p className="text-center text-xs text-gray-500">
          Esqueceu a senha? Peça ao administrador da Behave para redefinir.
        </p>
      </form>
    </div>
  );
}

// ===== CheckinPanel.tsx =====
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

function CheckinPanel({ perfil }: { perfil: Perfil }) {
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

// ===== AdminPanel.tsx =====
type Aba = 'atendimentos' | 'aplicadores' | 'criancas' | 'atribuicoes';

function AdminPanel({ perfil }: { perfil: Perfil }) {
  const leitura = perfil.papel === 'medico';
  const abas: { id: Aba; nome: string }[] = leitura
    ? [{ id: 'atendimentos', nome: 'Atendimentos' }]
    : [
        { id: 'atendimentos', nome: 'Atendimentos' },
        { id: 'aplicadores', nome: 'Aplicadores' },
        { id: 'criancas', nome: 'Crianças e locais' },
        { id: 'atribuicoes', nome: 'Atribuições' },
      ];
  const [aba, setAba] = useState<Aba>('atendimentos');

  return (
    <div>
      <nav className="mb-5 flex flex-wrap gap-2" aria-label="Seções">
        {abas.map((a) => (
          <button key={a.id} onClick={() => setAba(a.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${aba === a.id ? 'bg-amber-500 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}>
            {a.nome}
          </button>
        ))}
      </nav>
      {aba === 'atendimentos' && <AbaAtendimentos leitura={leitura} />}
      {aba === 'aplicadores' && <AbaAplicadores meuId={perfil.id} />}
      {aba === 'criancas' && <AbaCriancas />}
      {aba === 'atribuicoes' && <AbaAtribuicoes />}
    </div>
  );
}

/* ====================== ATENDIMENTOS ====================== */
interface Linha {
  id: number;
  checkin_em: string;
  checkout_em: string | null;
  duracao_min: number | null;
  status: string;
  checkin_no_local: boolean | null;
  checkout_no_local: boolean | null;
  checkin_dist_m: number | null;
  checkout_dist_m: number | null;
  resumo: string | null;
  observacao_admin: string | null;
  checkin_foto: string | null;
  checkout_foto: string | null;
  aplicador_usuarios: { nome: string } | null;
  aplicador_criancas: { nome: string } | null;
  aplicador_locais: { descricao: string } | null;
}
interface Edicao {
  id: number;
  status: string;
  observacao: string;
  resumo: string;
  checkin_em: string;
  checkout_em: string;
}
interface Opcao { id: string | number; nome: string }

const POR_PAGINA = 15;
const SEL = '*, aplicador_usuarios(nome), aplicador_criancas(nome), aplicador_locais(descricao)';

function AbaAtendimentos({ leitura }: { leitura: boolean }) {
  const [linhas, setLinhas] = useState<Linha[]>([]);
  const [total, setTotal] = useState(0);
  const [pagina, setPagina] = useState(0);
  const [fAplicador, setFAplicador] = useState('');
  const [fCrianca, setFCrianca] = useState('');
  const [fDe, setFDe] = useState('');
  const [fAte, setFAte] = useState('');
  const [fStatus, setFStatus] = useState('');
  const [aplicadores, setAplicadores] = useState<Opcao[]>([]);
  const [criancas, setCriancas] = useState<Opcao[]>([]);
  const [ed, setEd] = useState<Edicao | null>(null);
  const [fotos, setFotos] = useState<string[]>([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    supabase.from('aplicador_usuarios').select('id, nome').eq('papel', 'aplicador').order('nome')
      .then(({ data }) => setAplicadores((data ?? []) as Opcao[]));
    supabase.from('aplicador_criancas').select('id, nome').order('nome')
      .then(({ data }) => setCriancas((data ?? []) as Opcao[]));
  }, []);

  const montar = useCallback(() => {
    let q = supabase.from('aplicador_atendimentos').select(SEL, { count: 'exact' });
    if (fAplicador) q = q.eq('aplicador_id', fAplicador);
    if (fCrianca) q = q.eq('crianca_id', fCrianca);
    if (fStatus) q = q.eq('status', fStatus);
    if (fDe) q = q.gte('checkin_em', new Date(fDe + 'T00:00:00').toISOString());
    if (fAte) q = q.lte('checkin_em', new Date(fAte + 'T23:59:59').toISOString());
    return q.order('checkin_em', { ascending: false });
  }, [fAplicador, fCrianca, fStatus, fDe, fAte]);

  const carregar = useCallback(async () => {
    const { data, count, error } = await montar().range(pagina * POR_PAGINA, pagina * POR_PAGINA + POR_PAGINA - 1);
    if (error) { setMsg(error.message); return; }
    setLinhas((data ?? []) as unknown as Linha[]);
    setTotal(count ?? 0);
  }, [montar, pagina]);

  useEffect(() => { carregar(); }, [carregar]);

  async function verFotos(l: Linha) {
    const urls: string[] = [];
    for (const caminho of [l.checkin_foto, l.checkout_foto]) {
      if (!caminho) continue;
      const { data } = await supabase.storage.from('aplicador-fotos').createSignedUrl(caminho, 300);
      if (data?.signedUrl) urls.push(data.signedUrl);
    }
    setFotos(urls);
  }

  function abrirEdicao(l: Linha) {
    setEd({
      id: l.id, status: l.status, observacao: l.observacao_admin ?? '', resumo: l.resumo ?? '',
      checkin_em: paraInputLocal(l.checkin_em), checkout_em: paraInputLocal(l.checkout_em),
    });
  }

  async function salvarEdicao() {
    if (!ed) return;
    const { error } = await supabase.from('aplicador_atendimentos').update({
      status: ed.status,
      observacao_admin: ed.observacao || null,
      resumo: ed.resumo || null,
      checkin_em: new Date(ed.checkin_em).toISOString(),
      checkout_em: ed.checkout_em ? new Date(ed.checkout_em).toISOString() : null,
    }).eq('id', ed.id);
    if (error) { setMsg(error.message); return; }
    setMsg('Alteração salva (e registrada na auditoria).');
    setEd(null);
    carregar();
  }

  async function exportarCsv() {
    const { data, error } = await montar().limit(2000);
    if (error) { setMsg(error.message); return; }
    const esc = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""').replace(/\r?\n/g, ' ')}"`;
    const cab = ['Data', 'Aplicador', 'Criança', 'Local', 'Chegada', 'Saída', 'Duração (min)', 'Presença na chegada', 'Presença na saída', 'Status', 'Resumo'];
    const rows = ((data ?? []) as unknown as Linha[]).map((l) => [
      fmtDataHora(l.checkin_em).slice(0, 8), l.aplicador_usuarios?.nome, l.aplicador_criancas?.nome, l.aplicador_locais?.descricao,
      fmtDataHora(l.checkin_em), fmtDataHora(l.checkout_em), l.duracao_min,
      l.checkin_no_local ? 'Sim' : 'Não', l.checkout_no_local ? 'Sim' : 'Não', l.status, l.resumo,
    ].map(esc).join(';'));
    const csv = '\uFEFF' + [cab.map(esc).join(';'), ...rows].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    a.download = 'atendimentos.csv';
    a.click();
    URL.revokeObjectURL(a.href);
    supabase.rpc('aplicador_registrar', { p_acao: 'exportou_csv', p_detalhe: { linhas: rows.length } });
  }

  const paginas = Math.max(1, Math.ceil(total / POR_PAGINA));

  return (
    <div className="space-y-4">
      <div className={`${cardCls} grid gap-3 sm:grid-cols-2 lg:grid-cols-5`}>
        <div>
          <label className={labelCls} htmlFor="f-ap">Aplicador</label>
          <select id="f-ap" className={inputCls} value={fAplicador} onChange={(e) => { setPagina(0); setFAplicador(e.target.value); }}>
            <option value="">Todos</option>
            {aplicadores.map((o) => <option key={o.id} value={o.id}>{o.nome}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="f-cr">Criança</label>
          <select id="f-cr" className={inputCls} value={fCrianca} onChange={(e) => { setPagina(0); setFCrianca(e.target.value); }}>
            <option value="">Todas</option>
            {criancas.map((o) => <option key={o.id} value={o.id}>{o.nome}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="f-de">De</label>
          <input id="f-de" type="date" className={inputCls} value={fDe} onChange={(e) => { setPagina(0); setFDe(e.target.value); }} />
        </div>
        <div>
          <label className={labelCls} htmlFor="f-ate">Até</label>
          <input id="f-ate" type="date" className={inputCls} value={fAte} onChange={(e) => { setPagina(0); setFAte(e.target.value); }} />
        </div>
        <div>
          <label className={labelCls} htmlFor="f-st">Status</label>
          <select id="f-st" className={inputCls} value={fStatus} onChange={(e) => { setPagina(0); setFStatus(e.target.value); }}>
            <option value="">Todos</option>
            <option value="finalizado">Validado</option>
            <option value="revisar">Revisar</option>
            <option value="em_andamento">Em andamento</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">{total} atendimento(s)</p>
        <button className={btnSecCls} onClick={exportarCsv}>Exportar CSV</button>
      </div>
      {msg && <p role="status" className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">{msg}</p>}

      {fotos.length > 0 && (
        <div className={cardCls}>
          <div className="mb-2 flex justify-between"><strong>Fotos</strong><button className={btnSecCls} onClick={() => setFotos([])}>Fechar</button></div>
          <div className="flex flex-wrap gap-3">
            {fotos.map((u) => <img key={u} src={u} alt="Foto do atendimento" className="h-56 rounded-lg" />)}
          </div>
          <p className="mt-2 text-xs text-gray-500">Os links das fotos expiram em 5 minutos.</p>
        </div>
      )}

      {linhas.map((l) => (
        <div key={l.id} className={cardCls}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <strong className="text-gray-900">{l.aplicador_criancas?.nome} · {l.aplicador_locais?.descricao}</strong>
            <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${l.status === 'finalizado' ? 'bg-green-100 text-green-800' : l.status === 'revisar' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
              {l.status === 'finalizado' ? 'Validado' : l.status === 'revisar' ? 'Revisar' : 'Em andamento'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {l.aplicador_usuarios?.nome ?? 'Aplicador'} · {fmtDataHora(l.checkin_em)} até {fmtDataHora(l.checkout_em)}
            {l.duracao_min !== null && ` (${l.duracao_min} min)`}
          </p>
          <p className="text-xs text-gray-500">
            Chegada: {l.checkin_no_local ? 'no local' : 'fora do local'}{l.checkin_dist_m !== null && ` (${Math.round(l.checkin_dist_m)} m)`} ·
            Saída: {l.checkout_no_local === null ? '—' : l.checkout_no_local ? 'no local' : 'fora do local'}{l.checkout_dist_m !== null && ` (${Math.round(l.checkout_dist_m)} m)`}
          </p>
          {l.resumo && <p className="mt-2 text-sm text-gray-800">{l.resumo}</p>}
          {l.observacao_admin && <p className="mt-1 text-sm italic text-gray-500">Obs. admin: {l.observacao_admin}</p>}
          {!leitura && (
            <div className="mt-3 flex gap-2">
              <button className={btnSecCls} onClick={() => verFotos(l)}>Ver fotos</button>
              <button className={btnSecCls} onClick={() => abrirEdicao(l)}>Editar</button>
            </div>
          )}
          {ed && ed.id === l.id && (
            <div className="mt-3 space-y-3 rounded-xl bg-gray-50 p-3">
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <label className={labelCls} htmlFor="e-st">Status</label>
                  <select id="e-st" className={inputCls} value={ed.status} onChange={(e) => setEd({ ...ed, status: e.target.value })}>
                    <option value="finalizado">Validado</option>
                    <option value="revisar">Revisar</option>
                    <option value="em_andamento">Em andamento</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls} htmlFor="e-in">Chegada</label>
                  <input id="e-in" type="datetime-local" className={inputCls} value={ed.checkin_em} onChange={(e) => setEd({ ...ed, checkin_em: e.target.value })} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="e-out">Saída</label>
                  <input id="e-out" type="datetime-local" className={inputCls} value={ed.checkout_em} onChange={(e) => setEd({ ...ed, checkout_em: e.target.value })} />
                </div>
              </div>
              <div>
                <label className={labelCls} htmlFor="e-res">Resumo (máx. 400)</label>
                <textarea id="e-res" rows={3} maxLength={400} className={inputCls} value={ed.resumo} onChange={(e) => setEd({ ...ed, resumo: e.target.value })} />
              </div>
              <div>
                <label className={labelCls} htmlFor="e-obs">Observação do administrador</label>
                <input id="e-obs" className={inputCls} value={ed.observacao} onChange={(e) => setEd({ ...ed, observacao: e.target.value })} />
              </div>
              <div className="flex gap-2">
                <button className={btnCls} onClick={salvarEdicao}>Salvar</button>
                <button className={btnSecCls} onClick={() => setEd(null)}>Cancelar</button>
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="flex items-center justify-center gap-3">
        <button className={btnSecCls} disabled={pagina === 0} onClick={() => setPagina(pagina - 1)}>Anterior</button>
        <span className="text-sm text-gray-600">Página {pagina + 1} de {paginas}</span>
        <button className={btnSecCls} disabled={pagina + 1 >= paginas} onClick={() => setPagina(pagina + 1)}>Próxima</button>
      </div>
    </div>
  );
}

/* ====================== APLICADORES ====================== */
interface Usuario { id: string; nome: string; email: string | null; papel: Papel; ativo: boolean }

function AbaAplicadores({ meuId }: { meuId: string }) {
  const [lista, setLista] = useState<Usuario[]>([]);
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [papel, setPapel] = useState<Papel>('aplicador');
  const [msg, setMsg] = useState('');

  const carregar = useCallback(async () => {
    const { data } = await supabase.from('aplicador_usuarios').select('*').order('nome');
    setLista((data ?? []) as Usuario[]);
  }, []);
  useEffect(() => { carregar(); }, [carregar]);

  async function vincular(e: FormEvent) {
    e.preventDefault();
    const { error } = await supabase.rpc('aplicador_admin_vincular', { p_email: email, p_nome: nome, p_papel: papel });
    setMsg(error ? error.message : 'Acesso liberado.');
    if (!error) { setEmail(''); setNome(''); carregar(); }
  }

  async function atualizar(id: string, campos: Partial<Pick<Usuario, 'papel' | 'ativo'>>) {
    const { error } = await supabase.from('aplicador_usuarios').update(campos).eq('id', id);
    if (error) setMsg(error.message);
    carregar();
  }

  return (
    <div className="space-y-4">
      <form onSubmit={vincular} className={`${cardCls} space-y-3`}>
        <h2 className="text-lg font-bold text-gray-900">Liberar acesso</h2>
        <p className="text-sm text-gray-600">
          Primeiro crie o usuário (e-mail e senha) no Supabase, em Authentication &gt; Users &gt; Add user. Depois digite aqui o mesmo e-mail.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div><label className={labelCls} htmlFor="v-nome">Nome</label>
            <input id="v-nome" required className={inputCls} value={nome} onChange={(e) => setNome(e.target.value)} /></div>
          <div><label className={labelCls} htmlFor="v-email">E-mail</label>
            <input id="v-email" type="email" required className={inputCls} value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div><label className={labelCls} htmlFor="v-papel">Papel</label>
            <select id="v-papel" className={inputCls} value={papel} onChange={(e) => setPapel(e.target.value as Papel)}>
              <option value="aplicador">Aplicador</option><option value="medico">Médico</option><option value="admin">Administrador</option>
            </select></div>
        </div>
        <button type="submit" className={btnCls}>Liberar acesso</button>
        {msg && <p role="status" className="text-sm text-amber-900">{msg}</p>}
      </form>

      <div className={cardCls}>
        <h2 className="mb-2 text-lg font-bold text-gray-900">Pessoas com acesso</h2>
        {lista.map((u) => (
          <div key={u.id} className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 py-3 first:border-0">
            <div>
              <p className="font-semibold text-gray-900">{u.nome}</p>
              <p className="text-xs text-gray-500">{u.email}</p>
            </div>
            <div className="flex items-center gap-3">
              <select aria-label={`Papel de ${u.nome}`} className={inputCls + ' !w-auto'} value={u.papel} disabled={u.id === meuId}
                onChange={(e) => atualizar(u.id, { papel: e.target.value as Papel })}>
                <option value="aplicador">Aplicador</option><option value="medico">Médico</option><option value="admin">Administrador</option>
              </select>
              <label className="flex items-center gap-1 text-sm text-gray-700">
                <input type="checkbox" checked={u.ativo} disabled={u.id === meuId} onChange={(e) => atualizar(u.id, { ativo: e.target.checked })} /> Ativo
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ====================== CRIANÇAS E LOCAIS ====================== */
interface Crianca { id: number; nome: string; medico_id: string | null }
interface LocalLinha { id: number; crianca_id: number; descricao: string; endereco: string; latitude: number; longitude: number; raio_metros: number }

function AbaCriancas() {
  const [criancas, setCriancas] = useState<Crianca[]>([]);
  const [locais, setLocais] = useState<LocalLinha[]>([]);
  const [medicos, setMedicos] = useState<Opcao[]>([]);
  const [nome, setNome] = useState('');
  const [medico, setMedico] = useState('');
  const [lCrianca, setLCrianca] = useState('');
  const [lDesc, setLDesc] = useState('');
  const [lEnd, setLEnd] = useState('');
  const [lLat, setLLat] = useState('');
  const [lLng, setLLng] = useState('');
  const [lRaio, setLRaio] = useState('200');
  const [msg, setMsg] = useState('');

  const carregar = useCallback(async () => {
    const [c, l, m] = await Promise.all([
      supabase.from('aplicador_criancas').select('id, nome, medico_id').order('nome'),
      supabase.from('aplicador_locais').select('*').order('descricao'),
      supabase.from('aplicador_usuarios').select('id, nome').eq('papel', 'medico').order('nome'),
    ]);
    setCriancas((c.data ?? []) as Crianca[]);
    setLocais((l.data ?? []) as LocalLinha[]);
    setMedicos((m.data ?? []) as Opcao[]);
  }, []);
  useEffect(() => { carregar(); }, [carregar]);

  async function addCrianca(e: FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from('aplicador_criancas').insert({ nome: nome.trim(), medico_id: medico || null });
    setMsg(error ? error.message : 'Criança cadastrada.');
    if (!error) { setNome(''); setMedico(''); carregar(); }
  }

  async function usarMinhaLocalizacao() {
    try {
      const p = await obterPosicao();
      setLLat(p.lat.toFixed(6));
      setLLng(p.lng.toFixed(6));
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Erro ao obter a localização.');
    }
  }

  async function addLocal(e: FormEvent) {
    e.preventDefault();
    const lat = Number(lLat.replace(',', '.'));
    const lng = Number(lLng.replace(',', '.'));
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) { setMsg('Latitude e longitude inválidas.'); return; }
    const { error } = await supabase.from('aplicador_locais').insert({
      crianca_id: Number(lCrianca), descricao: lDesc.trim(), endereco: lEnd.trim(),
      latitude: lat, longitude: lng, raio_metros: Number(lRaio) || 200,
    });
    setMsg(error ? error.message : 'Local cadastrado.');
    if (!error) { setLDesc(''); setLEnd(''); setLLat(''); setLLng(''); carregar(); }
  }

  async function removerLocal(id: number) {
    if (!window.confirm('Remover este local?')) return;
    const { error } = await supabase.from('aplicador_locais').delete().eq('id', id);
    setMsg(error ? 'Não foi possível remover (já existem atendimentos neste local).' : 'Local removido.');
    carregar();
  }

  return (
    <div className="space-y-4">
      {msg && <p role="status" className="rounded-lg bg-amber-50 p-3 text-sm text-amber-900">{msg}</p>}

      <form onSubmit={addCrianca} className={`${cardCls} space-y-3`}>
        <h2 className="text-lg font-bold text-gray-900">Nova criança</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div><label className={labelCls} htmlFor="c-nome">Nome (ou iniciais)</label>
            <input id="c-nome" required className={inputCls} value={nome} onChange={(e) => setNome(e.target.value)} /></div>
          <div><label className={labelCls} htmlFor="c-med">Médico responsável (opcional)</label>
            <select id="c-med" className={inputCls} value={medico} onChange={(e) => setMedico(e.target.value)}>
              <option value="">—</option>
              {medicos.map((m) => <option key={m.id} value={m.id}>{m.nome}</option>)}
            </select></div>
        </div>
        <button type="submit" className={btnCls}>Cadastrar criança</button>
      </form>

      <form onSubmit={addLocal} className={`${cardCls} space-y-3`}>
        <h2 className="text-lg font-bold text-gray-900">Novo local de atendimento</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div><label className={labelCls} htmlFor="l-cr">Criança</label>
            <select id="l-cr" required className={inputCls} value={lCrianca} onChange={(e) => setLCrianca(e.target.value)}>
              <option value="">Selecione</option>
              {criancas.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}
            </select></div>
          <div><label className={labelCls} htmlFor="l-desc">Descrição (Casa, Colégio X…)</label>
            <input id="l-desc" required className={inputCls} value={lDesc} onChange={(e) => setLDesc(e.target.value)} /></div>
          <div className="sm:col-span-2"><label className={labelCls} htmlFor="l-end">Endereço</label>
            <input id="l-end" required className={inputCls} value={lEnd} onChange={(e) => setLEnd(e.target.value)} /></div>
          <div><label className={labelCls} htmlFor="l-lat">Latitude</label>
            <input id="l-lat" required className={inputCls} value={lLat} onChange={(e) => setLLat(e.target.value)} placeholder="-9.389100" /></div>
          <div><label className={labelCls} htmlFor="l-lng">Longitude</label>
            <input id="l-lng" required className={inputCls} value={lLng} onChange={(e) => setLLng(e.target.value)} placeholder="-40.502700" /></div>
          <div><label className={labelCls} htmlFor="l-raio">Raio de tolerância (metros)</label>
            <input id="l-raio" type="number" min={50} className={inputCls} value={lRaio} onChange={(e) => setLRaio(e.target.value)} /></div>
        </div>
        <p className="text-xs text-gray-500">
          Dica: no Google Maps, clique com o botão direito no local e copie as coordenadas. Ou, estando no local, use o botão abaixo.
        </p>
        <div className="flex gap-2">
          <button type="button" className={btnSecCls} onClick={usarMinhaLocalizacao}>Usar minha localização atual</button>
          <button type="submit" className={btnCls}>Cadastrar local</button>
        </div>
      </form>

      <div className={cardCls}>
        <h2 className="mb-2 text-lg font-bold text-gray-900">Crianças e locais</h2>
        {criancas.length === 0 && <p className="text-sm text-gray-500">Nenhuma criança cadastrada.</p>}
        {criancas.map((c) => (
          <div key={c.id} className="border-t border-gray-100 py-3 first:border-0">
            <p className="font-semibold text-gray-900">{c.nome}</p>
            {locais.filter((l) => l.crianca_id === c.id).map((l) => (
              <div key={l.id} className="mt-1 flex items-center justify-between gap-2 text-sm text-gray-600">
                <span>{l.descricao} · {l.endereco} · raio {l.raio_metros} m</span>
                <button className="text-red-600 underline" onClick={() => removerLocal(l.id)}>Remover</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ====================== ATRIBUIÇÕES ====================== */
interface Atr {
  aplicador_id: string;
  crianca_id: number;
  aplicador_usuarios: { nome: string } | null;
  aplicador_criancas: { nome: string } | null;
}

function AbaAtribuicoes() {
  const [lista, setLista] = useState<Atr[]>([]);
  const [aplicadores, setAplicadores] = useState<Opcao[]>([]);
  const [criancas, setCriancas] = useState<Opcao[]>([]);
  const [ap, setAp] = useState('');
  const [cr, setCr] = useState('');
  const [msg, setMsg] = useState('');

  const carregar = useCallback(async () => {
    const [a, u, c] = await Promise.all([
      supabase.from('aplicador_atribuicoes').select('aplicador_id, crianca_id, aplicador_usuarios(nome), aplicador_criancas(nome)'),
      supabase.from('aplicador_usuarios').select('id, nome').eq('papel', 'aplicador').eq('ativo', true).order('nome'),
      supabase.from('aplicador_criancas').select('id, nome').order('nome'),
    ]);
    setLista((a.data ?? []) as unknown as Atr[]);
    setAplicadores((u.data ?? []) as Opcao[]);
    setCriancas((c.data ?? []) as Opcao[]);
  }, []);
  useEffect(() => { carregar(); }, [carregar]);

  async function adicionar(e: FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from('aplicador_atribuicoes').insert({ aplicador_id: ap, crianca_id: Number(cr) });
    setMsg(error ? 'Essa atribuição já existe ou não pôde ser criada.' : 'Atribuição criada.');
    if (!error) carregar();
  }

  async function remover(a: Atr) {
    await supabase.from('aplicador_atribuicoes').delete().eq('aplicador_id', a.aplicador_id).eq('crianca_id', a.crianca_id);
    carregar();
  }

  return (
    <div className="space-y-4">
      <form onSubmit={adicionar} className={`${cardCls} space-y-3`}>
        <h2 className="text-lg font-bold text-gray-900">Atribuir aplicador a uma criança</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div><label className={labelCls} htmlFor="a-ap">Aplicador</label>
            <select id="a-ap" required className={inputCls} value={ap} onChange={(e) => setAp(e.target.value)}>
              <option value="">Selecione</option>
              {aplicadores.map((o) => <option key={o.id} value={o.id}>{o.nome}</option>)}
            </select></div>
          <div><label className={labelCls} htmlFor="a-cr">Criança</label>
            <select id="a-cr" required className={inputCls} value={cr} onChange={(e) => setCr(e.target.value)}>
              <option value="">Selecione</option>
              {criancas.map((o) => <option key={o.id} value={o.id}>{o.nome}</option>)}
            </select></div>
        </div>
        <button type="submit" className={btnCls}>Atribuir</button>
        {msg && <p role="status" className="text-sm text-amber-900">{msg}</p>}
      </form>

      <div className={cardCls}>
        <h2 className="mb-2 text-lg font-bold text-gray-900">Atribuições atuais</h2>
        {lista.length === 0 && <p className="text-sm text-gray-500">Nenhuma atribuição.</p>}
        {lista.map((a) => (
          <div key={a.aplicador_id + '-' + a.crianca_id} className="flex items-center justify-between border-t border-gray-100 py-2 first:border-0">
            <span className="text-sm text-gray-800">{a.aplicador_usuarios?.nome} → {a.aplicador_criancas?.nome}</span>
            <button className="text-sm text-red-600 underline" onClick={() => remover(a)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== AplicadorApp =====
const NOME_PAPEL = { admin: 'Administrador', aplicador: 'Aplicador', medico: 'Médico' } as const;

export default function AplicadorApp() {
  const [session, setSession] = useState<Session | null>(null);
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (!supabaseConfigurado) {
      setCarregando(false);
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (!data.session) setCarregando(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_evento, s) => {
      setSession(s);
      if (!s) {
        setPerfil(null);
        setCarregando(false);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const uid = session?.user.id;

  useEffect(() => {
    if (!uid) return;
    let ativo = true;
    supabase
      .from('aplicador_usuarios')
      .select('*')
      .eq('id', uid)
      .maybeSingle()
      .then(({ data }) => {
        if (!ativo) return;
        setPerfil((data as Perfil | null) ?? null);
        setCarregando(false);
      });
    return () => {
      ativo = false;
    };
  }, [uid]);

  let conteudo;
  if (!supabaseConfigurado) {
    conteudo = (
      <div className={`${cardCls} mx-auto max-w-md text-sm text-gray-700`}>
        A área do aplicador ainda não está configurada (faltam as variáveis VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY).
      </div>
    );
  } else if (carregando) {
    conteudo = <p className="text-center text-gray-500">Carregando…</p>;
  } else if (!session) {
    conteudo = <AplicadorLogin />;
  } else if (!perfil || !perfil.ativo) {
    conteudo = (
      <div className={`${cardCls} mx-auto max-w-md text-center`}>
        <p className="mb-3 text-sm text-gray-700">
          Seu acesso ainda não foi liberado pela Behave. Fale com o administrador.
        </p>
        <button className={btnSecCls} onClick={() => supabase.auth.signOut()}>Sair</button>
      </div>
    );
  } else {
    conteudo = (
      <>
        <header className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <LogoAbelha size={36} />
            <div>
              <p className="font-bold text-gray-900">Olá, {perfil.nome.split(' ')[0]}</p>
              <p className="text-xs text-gray-500">{NOME_PAPEL[perfil.papel]}</p>
            </div>
          </div>
          <button className={btnSecCls} onClick={() => supabase.auth.signOut()}>Sair</button>
        </header>
        {perfil.papel === 'aplicador' ? <CheckinPanel perfil={perfil} /> : <AdminPanel perfil={perfil} />}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50/40 px-4 pb-12 pt-28">
      <div className="mx-auto max-w-5xl">{conteudo}</div>
    </div>
  );
}