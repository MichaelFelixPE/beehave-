import { Users } from 'lucide-react';
import { useState } from 'react';
import Modal from '../ui/Modal';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  level: string;
  crm?: string;
  formations?: string[];
  bio?: string;
  children?: TeamMember[];
}

const teamHierarchy: TeamMember[] = [
  {
    name: 'Ma. Jacqueline Iukisa',
    role: 'Sócia | Diretora de Finanças e RH',
    image: 'https://i.imgur.com/ZEhbVZI.jpeg',
    level: 'A',
    crm: 'CRP-02/17658',
    formations: [
      'Mestrado em Psicologia',
      'Especialização em Gestão de Pessoas',
      'Graduação em Psicologia'
    ],
    bio: 'Profissional com ampla experiência em gestão de recursos humanos e finanças.',
    children: [
      {
        name: 'Dra. Thais Guimarães',
        role: 'Sócia | Diretora de Marketing e Operações',
        image: 'https://i.imgur.com/fN975T0.jpeg',
        level: 'B',
        crm: 'CRP-02/15644',
        formations: [
          'Certificação internacional QBA (Analista do Comportamento Qualificada) - em andamento',
          'Certificação internacional de Instrutora PCM (Sistema Profissional de Gerenciamento de Crises)',
          'Doutora e Mestra em Teoria e Pesquisa do Comportamento pela Universidade Federal do Pará (UFPA)',
          'Doutorado com Estágio na Universidade Metropolitana de Oslo (Oslo Metropolitan University) em Oslo-Noruega',
          'Bacharel em Psicologia pela Universidade Federal do Vale do São Francisco (Univasf)',
          'Instrutora PCM',
          'Capacitação para Supervisão de Intervenção Comportamental em Análise do Comportamento Aplicada (ABA)',
          'Produção de materiais e currículos adaptados no contexto de inclusão escolar',
          'Avaliação transdisciplinar em Análise do Comportamento Aplicada ao autismo, foco VB-MAPP',
          'Introdução ao ABLLS (Assessment of basic language and learning skills)',
          'Sistema de Comunicação por Troca de Figuras (Pecs)',
          'Seletividade alimentar e intervenção baseada em ABA',
          'Currículo Lattes: http://lattes.cnpq.br/4041324592265957'
        ],
        bio: 'Sócia e Diretora de Operações da Beehave: Soluções comportamentais. Atua como Pesquisadora, Docente e Analista do Comportamento Supervisora nas áreas de desenvolvimento atípico/TEA, escolar e de práticas culturais de cooperação. Possui publicações nacionais e internacionais sobre comportamento social, seleção cultural, controle aversivo e autocontrole ético. Presta serviços em ABA de: Supervisão técnica para Coordenadora(dor) e Supervisora(sor) de intervenção em ABA ao desenvolvimento atípico; elaboração e adaptação de protocolos, currículos e materiais individualizados. Supervisão técnica para candidatas(os) à IBA (Analista do Comportamento Internacional).',
        children: [
          {
            name: 'Me. Luiz Felipe Alves',
            role: 'Sócio ',
            image: 'https://i.imgur.com/BU6tqCO.jpeg',
            level: 'C',
            crm: 'CRP-02/20334',
            formations: [
              'Mestrado em Psicologia',
              'Especialização em Análise do Comportamento',
              'Graduação em Psicologia'
            ],
            bio: 'Supervisor com experiência em análise comportamental aplicada.',
          },
          {
            name: 'Me. Murilo da Cruz',
            image: 'https://i.imgur.com/DJR131G.jpeg',
            level: 'C',
            crm: 'CRP-02/21135',
            formations: [
              'Mestrado em Psicologia',
              'Especialização em Terapia Cognitivo-Comportamental',
              'Graduação em Psicologia'
            ],
            bio: 'Supervisor especializado em intervenções cognitivo-comportamentais.',
          },
          {
            name: 'Me. Rafael Alves',
            image: 'https://i.imgur.com/Qz9WLJ6.jpeg',
            level: 'C',
            crm: 'CRP-02/26926',
            formations: [
              'Mestrado em Processos Cognitivos e Comportamentais pela Universidade Federal do Vale do São Francisco (UNIVASF)',
              'Graduação em Psicologia pela UNIVASF',
              'Especialista em Análise do Comportamento Aplicada (ABA)',
              'Especialista em ABA para Autismo e Deficiência Intelectual',
              'Formação em manejo de crises agressivas',
              'Formação em comunicação alternativa',
              'Membro do grupo de pesquisa Comportamento, Cooperação e Cultura (3C) da UNIVASF',
              'Membro do Laboratório de Comportamento Social e Seleção Cultural (LACS) da UFPA'
            ],
            bio: 'Sou Rafael Alves Rodrigues, mestre em Processos Cognitivos e Comportamentais pela Universidade Federal do Vale do São Francisco (UNIVASF), onde também me formei em Psicologia.Além disso, sou especialista em Análise do Comportamento Aplicada (ABA) e em ABA para Autismo e Deficiência Intelectual; membro do grupo de pesquisa Comportamento, Cooperação e Cultura (3C) da UNIVASF e do Laboratório de Comportamento Social e Seleção Cultural (LACS) da UFPA.Também possuo formações em áreas como manejo de crises agressivas e comunicação alternativa, e atualmente, atuo como supervisor parceiro da Beehave Soluções Comportamentais.',
          },
          {
            name: 'Ma. Thamires Iukisa',
            image: 'https://i.imgur.com/8082mo0.jpeg',
            level: 'C',
            crm: 'CFEP-19002082',
            formations: [
              'Mestrado em Psicologia',
              'Especialização em Análise do Comportamento',
              'Graduação em Psicologia'
            ],
            bio: 'Supervisora com experiência em análise comportamental e supervisão clínica.',
          },
          {
            name: 'Dra. Thais Guimarães',
            image: 'https://i.imgur.com/fN975T0.jpeg',
            level: 'C',
            crm: 'CRP-02/15644',
            formations: [
              'Doutorado em Psicologia',
              'Mestrado em Psicologia Clínica',
              'Graduação em Psicologia'
            ],
            bio: 'Especialista em marketing e operações clínicas.',
          },
          {
            name: 'Ma. Jacqueline Iukisa',
            image: 'https://i.imgur.com/ZEhbVZI.jpeg',
            level: 'C',
            crm: 'CRP-02/17658',
            formations: [
              'Mestrado em Psicologia',
              'Especialização em Gestão de Pessoas',
              'Graduação em Psicologia'
            ],
            bio: 'Profissional com ampla experiência em gestão de recursos humanos e finanças.',
          },
          {
            name: 'Me. Álex Rosas',
            image: 'https://i.imgur.com/57Xr5pn.jpeg',
            level: 'C',
            crm: 'CRP-02/26874',
            formations: [
              'Especialização em Terapia Cognitivo-Comportamental',
              'Graduação em Psicologia'
            ],
            bio: 'Supervisora especializada em processos terapêuticos e gestão de casos.',
          },
          {
            name: 'Ma. Joiria Cerqueira',
            image: 'https://i.imgur.com/zJGPMaX.jpg',
            level: 'C',
            crm: 'CRP-03/15556',
            formations: [
              'Graduação em Psicologia (Universidade Federal do Vale do São Francisco – UNIVASF, 2015)',
              'Pós-graduação em Análise do Comportamento Aplicada ao Transtorno do Espectro do Autismo(Instituto de Educação e Pesquisa em Saúde e Inclusão Social, 2020)',
              'Mestrado em Psicologia (UNIVASF, 2023)',
            ],
            bio: 'Sou graduada em Psicologia, na Universidade Federal do Vale do São Francisco (UNIVASF), em 2015. Pós-graduada em Análise do Comportamento Aplicada ao Transtorno do Espectro do Autismo, no Instituto de Educação e Pesquisa em Saúde e Inclusão Social, em 2020. Mestre em Psicologia (UNIVASF), em 2023. Atuo como Psicóloga (CRP 03/15556) supervisora no Instituto Tacto - Instituto de Intervenções e estudos do comportamento.',
          },
          {
            name: ' Esp. Andrea Teixeira',
            image: 'https://i.imgur.com/bPV6yn9.jpeg',
            level: 'D',
            crm: 'CRP-02/25615',
            formations: [
              'Graduação em Psicologia (FACESF)',
              'Pós-graduação em Neuropsicologia',
              'Pós-graduação em Análise do Comportamento Aplicada (ABA) ao TEA',
              'Formação em Análise do Comportamento Clínica (FAT)'
            ],
            bio: 'Sou Andrea Teixeira, psicóloga formada pela FACESF, com uma trajetória de 4 anos dedicada à intervenção ABA. Minha prática clínica é fundamentada em uma formação sólida: sou pós-graduada em Neuropsicologia e em ABA aplicada ao TEA, além de possuir formação em Análise do Comportamento Clínica pela FAT.',
          },
          {
            name: ' Esp. Erica Tamires',
            image: 'https://i.imgur.com/EGe56gz.jpeg',
            level: 'D',
            crm: 'CRP-02/264110',
            formations: [
              'Especialização em Terapia Cognitivo-Comportamental',
              'Graduação em Psicologia'
            ],
            bio: 'Coordenadora especializada em processos terapêuticos e gestão de casos.',
          },
          {
            name: ' Esp. Gabriel Barão',
            image: 'https://i.imgur.com/S2TGn6d.jpeg',
            level: 'D',
            crm: 'CRP-02/30450',
            formations: [
              'Especialização em Análise do Comportamento',
              'Graduação em Psicologia'
            ],
            bio: 'Coordenador com experiência em análise comportamental e coordenação de equipes.',
          },
          {
            name: ' Esp. Jamille Mota',
            image: 'https://i.imgur.com/RltbllC.jpeg',
            level: 'D',
            crm: 'CRP-03/19674',
            formations: [
              'Especialização em Psicologia Organizacional',
              'Graduação em Psicologia'
            ],
            bio: 'Coordenadora com foco em processos organizacionais e desenvolvimento de equipes.',
          },
          {
            name: ' Esp. Joice Izabela',
            image: 'https://i.imgur.com/5kDExFR.jpeg',
            level: 'D',
            crm: 'CRP-02/26606',
            formations: [
              'Graduação em Psicologia (Universidade Federal do Vale do São Francisco – UNIVASF)',
              'Especialização em Análise do Comportamento Aplicada (ABA) para TEA e Deficiência Intelectual (CBI of Miami)',
              'Formação em Gerenciamento Profissional de Crises – Praticante Nível 2',
            ],
            bio: 'Meu nome é Joice Izabela, sou psicóloga formada pela Universidade Federal do Vale do São Francisco (UNIVASF). Sou especialista em Análise do Comportamento Aplicada (ABA) para o Transtorno do Espectro Autista (TEA) e Deficiência Intelectual, com formação pela CBI of Miami. Atuo como Coordenadora em ABA há mais de três anos na Beehave Soluções Comportamentais, onde desenvolvo, acompanho e oriento intervenções individualizadas. Tenho um carinho especial por trabalhar com o público infantil, buscando promover o desenvolvimento de habilidades de forma respeitosa e significativa. Minha prática profissional é baseada em evidências científicas, conduzida de maneira humanizada e ética, sempre priorizando o bem-estar da criança, o envolvimento da família e o manejo seguro das intervenções. Também sou Praticante Nível 2 em Gerenciamento Profissional de Crises, o que contribui para uma atuação responsável e qualificada em diferentes contextos.',
          },
          {
            name: ' Esp. Fernando Costa',
            image: 'https://i.imgur.com/JsbcOvA.jpeg',
            level: 'D',
            crm: 'CRP-02/26753',
            formations: [
              'Graduação em Psicologia (Faculdade FTC)',
              'Especialização em Análise do Comportamento Aplicada (ABA)'
            ],
            bio: 'Sou Fernando Costa, psicólogo formado pela Faculdade FTC e coordenador ABA, com atuação voltada ao Transtorno do Espectro Autista (TEA) nível 3 de suporte. Sou especializado em ABA aplicada ao TEA e atuo há mais de 6 anos na área, tendo iniciado minha trajetória ainda na graduação, como estagiário desde o 4º período. Minha escolha pelo público nível 3 de suporte não é apenas profissional, mas também pessoal: sou irmão de uma pessoa com TEA nível 3 e conheço de perto as dificuldades, a escassez de profissionais e a falta de acolhimento que muitas famílias enfrentam. Minha prática é fundamentada na Análise do Comportamento, com foco no desenvolvimento individualizado, na promoção de saúde, qualidade de vida e esperança para cada família acolhida. Acredito em uma intervenção que una o técnico ao lúdico, valorizando a diversão, o vínculo e o bem-estar dos aprendentes. Também compreendo a importância da saúde física aliada à saúde mental, buscando rotinas saudáveis que favoreçam o desenvolvimento global. Escolhi me especializar e atuar prioritariamente com o nível 3 de suporte por reconhecer a urgência e a carência de atendimento qualificado para esse público. Por isso, acolho com responsabilidade e compromisso cada demanda que chega até mim. Você não precisa enfrentar isso sozinho.',
          },
          {
            name: ' Esp. Joyce Ribeiro',
            image: 'https://i.imgur.com/veAEOsy.jpeg',
            level: 'D',
            crm: 'CRP-02/26518',
            formations: [
              'Graduação em Psicologia',
              'Pós-graduação em Análise do Comportamento Aplicada (ABA)',
              'Pós-graduação em andamento em ABA com foco em TEA e DI'
            ],
            bio: 'Me chamo Joyce Maria da Silva Ribeiro, e sou psicóloga pós-graduada em Análise do Comportamento Aplicada (ABA) e atualmente pós-graduanda em ABA com foco em TEA (Transtorno do Espectro Autista) e DI (Deficiência Intelectual). Atuei na psicoterapia de crianças atípicas, com intervenções baseadas na Análise do Comportamento, e atualmente exerço a função de coordenadora em ABA pela Beehave.',
          },
          {
            name: ' Esp. Nayara Queiroz',
            image: 'https://i.imgur.com/W6FVLyd.jpeg',
            level: 'D',
            crm: 'CRP 02/28286',
            formations: [
              'Especialização em Psicologia Clínica',
              'Graduação em Psicologia'
            ],
            bio: 'Coordenadora especializada em processos clínicos e gestão de equipes.',
          },
          {
            name: 'Esp. Carlane Machado',
            image: 'https://i.imgur.com/9ekDBk6.jpg',
            level: 'D',
            crm: 'CRP 00/00000',
            formations: [
              'Graduação em Psicologia'
            ],
            bio: 'Analista do Comportamentos Coordenadora.',
          },
          {
            name: 'Aline Rodrigues',
            image: 'https://i.imgur.com/vrqMI2m.jpeg',
            level: 'E',
            crm: 'CRP-02/23629',
            formations: [
              'Graduação em Psicologia',
              'Formação em Terapia Cognitivo-Comportamental'
            ],
            bio: 'Psicoterapeuta dedicada ao atendimento clínico individual.',
          },
          {
            name: 'Gutemberg dos Santos',
            image: 'https://i.imgur.com/luGPgKa.jpeg',
            level: 'E',
            crm: 'CRP-02/20367',
            formations: [
              'Graduação em Psicologia pela Universidade Federal do Vale do São Francisco',
              'Pós-graduando em ABA (Análise do Comportamento Aplicada) pela Facuminas'
            ],
            bio: 'Sou Gutemberg Santos, Psicólogo formado pela Universidade Federal do Vale do São Francisco, com atuação voltada para o público infanto juvenil. Sou pós-graduando em ABA (Análise do Comportamento Aplicada) pela Facuminas. Trabalho desde de 2022 com crianças e adolescentes típicos e atípicos; dentro deste contexto, priorizo as intervenções que utilizam o lúdico enquanto recurso terapêutico, tornando as sessões de terapia mais aprazíveis para que os objetivos terapêuticos sejam alcançados de maneira menos aversiva e que possam sobretudo trazer bem estar à criança ou adolescente. Meu trabalho também envolve instigar a família a participar mais ativamente do processo de alcance dos objetivos terapêuticos a partir de orientações parentais. Vale ressaltar que o acolhimento às famílias e o respeito ao perfil de cada criança são de extrema importância nesse processo, visto que cada um é um sujeito dotado de características diferentes e isso deve ser base para a intervenção de maneira individualizada.',
          },
          {
            name: 'Núbia Costa',
            image: 'https://i.imgur.com/nD3QWnm.jpeg',
            level: 'E',
            crm: 'CRP-03/18294',
            formations: [
              'Bacharelado em Psicologia pela Univasf (2015)',
              'Pós-graduanda em Psicopedagogia pela UPE',
              'Pós-graduação em Intervenção ABA para Autismo e Deficiência Intelectual pelo CBI of Miami'
            ],
            bio: 'Sou Núbia de Sousa, tenho Bacharelado em Psicologia pela Univasf, em 2015; Pós-graduação em Intervenção ABA para Autismo e Deficiência  Intelectual  pelo  CBI of Miami; e sou Pós-graduanda em Psicopedagogia pela  UPE.Tive experiência como Aplicadora entre 2019 e 2021; e Analista do Comportamento Coordenadora entre 2022 e 2024.Atualmente, sou Psicóloga pela Beehave.',
          },
          {
            name: 'Renata Dantas',
            image: 'https://i.imgur.com/TGufhH3.jpeg',
            level: 'E',
            crm: 'CRP-02/30345',
            formations: [
              'Graduação em Psicologia pela Faculdade Uninassau',
              'Especialização em Intervenção ABA aplicada ao Transtorno do Espectro Autista (TEA)',
              'Formação em Terapias Contextuais'
            ],
            bio: 'Sou Renata Dantas, Psicóloga formada pela Faculdade Uninassau, com atuação voltada para o público infantil. Tenho especialização em Intervenção ABA aplicada ao Transtorno do Espectro Autista (TEA) e formação em Terapias Contextuais. Minha escolha pela área infantil, especialmente no acompanhamento de crianças com TEA, foi motivada por uma experiência pessoal que me permitiu vivenciar, de perto, os impactos positivos da intervenção precoce no desenvolvimento infantil. Minha atuação é fundamentada na Análise do Comportamento, uma abordagem científica que busca compreender e promover mudanças significativas no comportamento por meio de intervenções individualizadas, planejadas de forma ética e cuidadosa, sempre com o objetivo de melhorar a qualidade de vida do indivíduo. No trabalho com crianças, especialmente aquelas com desenvolvimento atípico, o lúdico é utilizado como ferramenta central para a construção do vínculo, além da aplicação de estratégias que respeitam o tempo, as necessidades e o contexto de cada uma, favorecendo a aquisição de habilidades sociais, cognitivas, comunicativas e emocionais. Acredito em uma prática que une conhecimento técnico e acolhimento, criando um espaço seguro para que cada criança possa se desenvolver com confiança, autonomia e respeitando sua singularidade.',
          },
          {
            name: 'Adson Raul',
            image: 'https://i.imgur.com/Cc4mOuy.jpeg',
            level: 'E-EVAL',
            crm: 'CRP 00/00000',
            formations: [
              'Graduação em Psicologia (UNINASSAU)'
              'Pós-graduação em andamento em Análise do Comportamento Aplicada ao TEA',
            ],
            bio: 'Meu nome é Abdiel Oliveira Ferreira, sou Psicólogo formado pela UNINASSAU, pós-graduando em Análise do Comportamento Aplicada ao TEA, aplicador ABA com mais de 3 anos de experiência e vivência em avaliação comportamental.',
          },
          {
            name: 'Brenda Souza',
            image: 'https://i.imgur.com/DcKJBzc.jpeg',
            level: 'E-EVAL',
            crm: 'CRP 00/00000',
            formations: [
              'Graduação em Psicologia'
            ],
            bio: 'Membro da equipe de avaliação especializado em análise comportamental.',
          },
          {
            name: 'Luégina Sena',
            image: 'https://i.imgur.com/4RpCe4h.jpeg',
            level: 'E-EVAL',
            crm: 'CRP 00/00000',
            formations: [
              'Graduação em Psicologia'
            ],
            bio: 'Membro da equipe de avaliação especializado em análise comportamental.',
          },
          {
            name: 'Patrícia Matos',
            image: 'https://i.imgur.com/TxZAhzt.jpeg',
            level: 'E-EVAL',
            crm: 'CRP 00/00000',
            formations: [
              'Graduação em Psicologia'
            ],
            bio: 'Membro da equipe de avaliação especializado em análise comportamental.',
          },
          {
            name: 'Waleska Oliveira',
            image: 'https://i.imgur.com/sT3ZMfi.jpeg',
            level: 'E-EVAL',
            crm: 'CRP 00/00000',
            formations: [
              'Graduação em Psicologia'
            ],
            bio: 'Membro da equipe de avaliação especializado em análise comportamental.',
          },
        ],
      },
    ],
  },
];

const HexagonMember = ({ member, onClick }: { member: TeamMember; onClick: () => void }) => {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      <div className="hexagon-wrapper">
        <div className="hexagon bg-gradient-to-br from-yellow-400 to-amber-500 p-0.5">
          <div className="hexagon-inner bg-white">
            <img
              src={member.image}
              alt={member.name}
              className="hexagon-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://via.placeholder.com/200x200/FCD34D/1F2937?text=' + encodeURIComponent(member.name.split(' ')[0]);
              }}
              loading="lazy"
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <h4 className="text-sm font-semibold text-gray-900">{member.name}</h4>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

const MemberModal = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="p-8">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-400 mb-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://via.placeholder.com/400x400/FCD34D/1F2937?text=' + encodeURIComponent(member.name.split(' ')[0]);
              }}
              crossOrigin="anonymous"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h2>
          <p className="text-xl text-yellow-600 font-semibold mb-4">{member.role}</p>

          {member.crm && (
            <p className="text-lg text-gray-700 mb-6">{member.crm}</p>
          )}

          {member.bio && (
            <p className="text-gray-600 text-center mb-6 max-w-xl">{member.bio}</p>
          )}

          {member.formations && member.formations.length > 0 && (
            <div className="w-full max-w-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Formações</h3>
              <ul className="space-y-2">
                {member.formations.map((formation, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{formation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const directors = teamHierarchy;
  const subDirectors = directors[0]?.children || [];
  const supervisors = subDirectors[0]?.children?.filter(m => m.level === 'C') || [];
  const coordinators = subDirectors[0]?.children?.filter(m => m.level === 'D') || [];
  const evaluationTeam = subDirectors[0]?.children?.filter(m => m.level === 'E-EVAL') || [];
  const therapists = subDirectors[0]?.children?.filter(m => m.level === 'E') || [];

  return (
    <>
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-x-auto">
      <style>{`
        .hexagon-wrapper {
          width: 120px;
          height: 120px;
          margin: 0 auto;
        }

        .hexagon {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: transform 0.3s ease;
        }

        .hexagon:hover {
          transform: scale(1.1);
        }

        .hexagon-inner {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hexagon-image {
          width: 120%;
          height: 120%;
          object-fit: cover;
          object-position: center;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        .hexagon-image[src*="andrea"] {
          width: 100%;
          height: 100%;
        }

        .hexagon-image[src*="JsbcOvA"] {
          width: 98%;
          height: 98%;
        }

        .hexagon-image[src*="BU6tqCO"] {
          width: 112%;
          height: 112%;
        }

        .connector-line {
          position: absolute;
          background: linear-gradient(to bottom, #fbbf24, #f59e0b);
          z-index: -1;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-yellow-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa BeeEquipe </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          </p>
        </div>

        <div className="relative flex flex-col items-center space-y-8">
          <div className="text-center w-full">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Diretorias</h3>
          </div>
          <div className="flex justify-center gap-12 mb-8">
            {directors.map((director, idx) => (
              <HexagonMember key={idx} member={director} onClick={() => setSelectedMember(director)} />
            ))}
            {subDirectors.length > 0 && subDirectors.map((subDir, idx) => (
              <HexagonMember key={idx} member={subDir} onClick={() => setSelectedMember(subDir)} />
            ))}
          </div>

          {supervisors.length > 0 && (
            <>
              <div className="text-center w-full">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Analistas do Comportamento Supervisoras(es)</h3>
              </div>
              <div className="flex justify-center gap-6 flex-wrap max-w-4xl">
                {supervisors.map((supervisor, idx) => (
                  <HexagonMember key={idx} member={supervisor} onClick={() => setSelectedMember(supervisor)} />
                ))}
              </div>
            </>
          )}

          {coordinators.length > 0 && (
            <>
              <div className="text-center w-full">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Analista do Comportamentos Coordenadoras(es)</h3>
              </div>
              <div className="flex justify-center gap-6 flex-wrap max-w-5xl">
                {coordinators.map((coordinator, idx) => (
                  <HexagonMember key={idx} member={coordinator} onClick={() => setSelectedMember(coordinator)} />
                ))}
              </div>
            </>
          )}

          {evaluationTeam.length > 0 && (
            <>
              <div className="text-center w-full">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Equipe de Avaliação</h3>
              </div>
              <div className="flex justify-center gap-6 flex-wrap max-w-5xl">
                {evaluationTeam.map((member, idx) => (
                  <HexagonMember key={idx} member={member} onClick={() => setSelectedMember(member)} />
                ))}
              </div>
            </>
          )}

          {therapists.length > 0 && (
            <>
              <div className="text-center w-full">
                <h3 className="text-lg font-bold text-gray-700 mb-4">Psicoterapeutas</h3>
              </div>
              <div className="flex justify-center gap-6 flex-wrap max-w-4xl">
                {therapists.map((therapist, idx) => (
                  <HexagonMember key={idx} member={therapist} onClick={() => setSelectedMember(therapist)} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default Team;
