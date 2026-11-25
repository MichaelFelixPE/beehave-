import { useCallback, useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { supabase } from './supabase';
import type { Papel, Perfil } from './supabase';
import { btnCls, btnSecCls, cardCls, fmtDataHora, inputCls, labelCls, obterPosicao, paraInputLocal } from './util';

type Aba = 'atendimentos' | 'aplicadores' | 'criancas' | 'atribuicoes';

export default function AdminPanel({ perfil }: { perfil: Perfil }) {
  const leitura = perfil.papel === 'medico';
  const abas: { id: Aba; nome: string }[] = leitura
    ? [{ id: 'atendimentos', nome: 'Atendimentos' }]
    : [
        { id: 'atendimentos', nome: 'Atendimentos' },
        { id: 'aplicadores', nome: 'Aplicadores' },
        { id: 'criancas', nome: 'Aprendentes e locais' },
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