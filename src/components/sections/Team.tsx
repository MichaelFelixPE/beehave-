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
      'Graduação em Psicologia (UNIVASF)',
      'Graduação em Língua Inglesa (UPE)',
      'Mestrado em Teoria e Pesquisa do Comportamento (UFPA)'
    ],
    bio: 'Olá! Me chamo Jacqueline Iukisa. Sou formada em Psicologia pela Univasf e em Língua Inglesa pela UPE. Tenho mestrado em Teoria e Pesquisa do Comportamento pela UFPA, e atuo na área de desenvolvimento atípico há mais de 13 anos. Enquanto professora de formação, minha paixão é a educação. E é através do ensino que baseio meu trabalho. Desde o lecionar, até o planejamento de ensino de habilidades para pessoas com desenvolvimento atípico através do meu trabalho de Supervisora em ABA. Atualmente desenvolvo meu trabalho dentro da Beehave, a qual idealizei e sou uma das sócias-fundadoras.',
    children: [
      {
        name: 'Dra. Thais Guimarães',
        role: 'Sócia | Diretora de Marketing e Operações',
        image: 'https://i.imgur.com/fN975T0.jpeg',
        level: 'B',
        crm: 'CRP-02/15644',
        formations: [
          'Certificação Internacional de Instrutora em PCM (Professional Crisis Management)',
          'Formação no Protocolo IGLR (Inventário de Repertórios de um Bom Aprendiz)',
          'Formação em Seletividade Alimentar com intervenção baseada em ABA',
          'Formação em Sistema de Comunicação por Troca de Figuras (PECS)',
          'Capacitação para Supervisão de Intervenção Comportamental em ABA',
          'Formação em Produção de Materiais e Currículos Adaptados para Inclusão Escolar',
          'Formação em Avaliação Transdisciplinar em ABA com foco no VB-MAPP',
          'Formação Introdutória em ABLLS',
          'Currículo Lattes: http://lattes.cnpq.br/4041324592265957'
        ],
        bio: 'Olá! Eu sou Thais Maria Monteiro Guimarães, estou feliz em poder contar um tinquim da minha trajetória acadêmica e profissional. Tal trajetória me traz ferramentas para seguir (devargazinho) com um objetivo de vida, que talvez seja ambicioso: ajudar a melhorar a vida das pessoas e da sociedade por meio da Ciência Analítico-comportamental.Tenho Doutorado e Mestrado em Teoria e Pesquisa do Comportamento pela Universidade Federal do Pará (UFPA). Em meu Doutorado, fiz Estágio na Universidade Metropolitana de Oslo (Oslo Metropolitan University) em Oslo-Noruega. Tenho bacharel em Psicologia pela Universidade Federal do Vale do São Francisco (Univasf). Estou concluindo a Pós-gradução em ABA pela ABAEdu e em processo para retirar da Certificação Internacional em Analista do Comportamento Qualificado (sigla do inglês QBA, Qualified Behavior Analyst).Atuo como Pesquisadora, Docente e Analista do Comportamento Supervisora nas áreas de desenvolvimento atípico/TEA, escolar e de práticas culturais de cooperação; Psicóloga (CRP 02/15644).; e Sócia e Diretora de Operações e Marketing da Beehave: Soluções comportamentais.Possuo publicações nacionais e internacionais sobre comportamento social, seleção cultural, controle aversivo e autocontrole ético; apresentações em congressos, como no Encontro da Associação Brasileira de Ciências do Comportamentos (ABPMC).Presto serviços em ABA de: Supervisão técnica para Coordenadora(dor) e Supervisora(sor) de intervenção em ABA ao Desenvolvimento atípico; elaboração e adaptação de protocolos, currículos e materiais individualizados. Supervisão técnica para candidatas(os) à Certificação IBA (sigla do inglês, Analista do Comportamento Internacional).',
        children: [
          {
            name: 'Me. Luiz Felipe Alves',
            role: 'Sócio ',
            image: 'https://i.imgur.com/BU6tqCO.jpeg',
            level: 'C',
            crm: 'CRP-02/20334',
            formations: [
              'Graduação em Psicologia (UNIVASF)',
              'Mestrado em Teoria e Pesquisa do Comportamento (UFPA)',
              'Doutorado em andamento em Teoria e Pesquisa do Comportamento (UFPA)'
            ],
            bio: 'Oi! Eu sou o Luiz Felipe Alves. Sou psicólogo formado pela Univasf, mestre e doutorando em Teoria e Pesquisa do Comportamento pela UFPA. Sou professor de Psicologia desde 2017 e, atualmente, coordeno o curso de Psicologia da Facesp, em Petrolina.Também atuo na Beehave, na qual sou um dos idealizadores e sócio-fundador. Há 8 anos trabalho como supervisor em Análise do Comportamento Aplicada ao Autismo, conciliando a atuação clínica com o ensino, tanto em universidades quanto dentro da própria Beehave, desenvolvendo formações, treinamentos e acompanhando a prática de profissionais e estudantes em desenvolvimento.Hoje, tenho a alegria de trabalhar ao lado de pessoas que ajudei a formar e que fazem parte da construção diária da Beehave.',
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
              'Graduação em História (Universidade de Pernambuco – UPE)',
              'Pós-graduação em Intervenção ABA para Autismo e Deficiência Intelectual (CBI of Miami)',
              'Mestrado em Psicologia (UNIVASF)'
            ],
            bio: 'Olá! Me chamo Thamires Iukisa e sou Historiadora pela Universidade de Pernambuco, com Pós-graduação em Intervenção ABA para Autismo e Deficiência Intelectual pelo CBI of Miami e Mestrado em Psicologia pela Univasf.Trabalho com Análise do Comportamento há 8 anos, iniciando a carreira primeiramente como Aplicadora ABA, logo depois como Coordenadora, e atualmente sou Supervisora em ABA na Beehave.',
          },
          {
            name: 'Dra. Thais Guimarães',
            image: 'https://i.imgur.com/fN975T0.jpeg',
            level: 'C',
            crm: 'CRP-02/15644',
            formations: ['Certificação Internacional de Instrutora em PCM (Professional Crisis Management)',
          'Formação no Protocolo IGLR (Inventário de Repertórios de um Bom Aprendiz)',
          'Formação em Seletividade Alimentar com intervenção baseada em ABA',
          'Formação em Sistema de Comunicação por Troca de Figuras (PECS)',
          'Capacitação para Supervisão de Intervenção Comportamental em ABA',
          'Formação em Produção de Materiais e Currículos Adaptados para Inclusão Escolar',
          'Formação em Avaliação Transdisciplinar em ABA com foco no VB-MAPP',
          'Formação Introdutória em ABLLS',
          'Currículo Lattes: http://lattes.cnpq.br/4041324592265957'
            ],
            bio: 'Olá! Eu sou Thais Maria Monteiro Guimarães, estou feliz em poder contar um tinquim da minha trajetória acadêmica e profissional. Tal trajetória me traz ferramentas para seguir (devargazinho) com um objetivo de vida, que talvez seja ambicioso: ajudar a melhorar a vida das pessoas e da sociedade por meio da Ciência Analítico-comportamental.Tenho Doutorado e Mestrado em Teoria e Pesquisa do Comportamento pela Universidade Federal do Pará (UFPA). Em meu Doutorado, fiz Estágio na Universidade Metropolitana de Oslo (Oslo Metropolitan University) em Oslo-Noruega. Tenho bacharel em Psicologia pela Universidade Federal do Vale do São Francisco (Univasf). Estou concluindo a Pós-gradução em ABA pela ABAEdu e em processo para retirar da Certificação Internacional em Analista do Comportamento Qualificado (sigla do inglês QBA, Qualified Behavior Analyst).Atuo como Pesquisadora, Docente e Analista do Comportamento Supervisora nas áreas de desenvolvimento atípico/TEA, escolar e de práticas culturais de cooperação; Psicóloga (CRP 02/15644).; e Sócia e Diretora de Operações e Marketing da Beehave: Soluções comportamentais.Possuo publicações nacionais e internacionais sobre comportamento social, seleção cultural, controle aversivo e autocontrole ético; apresentações em congressos, como no Encontro da Associação Brasileira de Ciências do Comportamentos (ABPMC).Presto serviços em ABA de: Supervisão técnica para Coordenadora(dor) e Supervisora(sor) de intervenção em ABA ao Desenvolvimento atípico; elaboração e adaptação de protocolos, currículos e materiais individualizados. Supervisão técnica para candidatas(os) à Certificação IBA (sigla do inglês, Analista do Comportamento Internacional).',
          },
          {
            name: 'Ma. Jacqueline Iukisa',
            image: 'https://i.imgur.com/ZEhbVZI.jpeg',
            level: 'C',
            crm: 'CRP-02/17658',
            formations: [
              'Graduação em Psicologia (UNIVASF)',
              'Graduação em Língua Inglesa (UPE)',
              'Mestrado em Teoria e Pesquisa do Comportamento (UFPA)'
            ],
            bio: 'Olá! Me chamo Jacqueline Iukisa. Sou formada em Psicologia pela Univasf e em Língua Inglesa pela UPE. Tenho mestrado em Teoria e Pesquisa do Comportamento pela UFPA, e atuo na área de desenvolvimento atípico há mais de 13 anos. Enquanto professora de formação, minha paixão é a educação. E é através do ensino que baseio meu trabalho. Desde o lecionar, até o planejamento de ensino de habilidades para pessoas com desenvolvimento atípico através do meu trabalho de Supervisora em ABA. Atualmente desenvolvo meu trabalho dentro da Beehave, a qual idealizei e sou uma das sócias-fundadoras.',
          },
          {
            name: 'Me. Álex Rosas',
            image: 'https://i.imgur.com/57Xr5pn.jpeg',
            level: 'C',
            crm: 'CRP-02/26874',
            formations: [
              'Graduação em Psicologia (UNIVASF)',
              'Mestrado em Psicologia',
              'Especialização em Análise do Comportamento Aplicada (ABA)'
            ],
            bio: 'Me chamo Álex Jonatas dos Santos Rosas, sou Psicólogo formado na Univasf, mestre em Psicologia e especialista em Análise do Comportamento Aplicada (ABA). Atuo como supervisor de intervenção ABA na Beehave, conduzindo planejamento e acompanhamento técnico de programas de intervenção.',
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
              'Graduação em Psicologia',
              'Graduação em Pedagogia / Formação em Magistério (professora de formação)',
              'Especialização em Análise do Comportamento Aplicada (ABA)'
            ],
            bio: 'Olá, me chamo Erica Tamires, mãe de Tiago e Valentina e apaixonada pela infância e desenvolvimento infantil. Sou professora de formação, tendo atuado por 4 anos no município de Petrolina na Educação Infantil.Psicóloga especialista em ABA, com experiência em Psicoterapia clínica de crianças típicas e atípicas na Beehave. Integrante de equipe ABA, desde 2021 como aplicadora escolar e domiciliar, e, atualmente, como Analista do Comportamento Coordenadora de equipe ABA na Beehave.',
          },
          {
            name: ' Esp. Gabriel Barão',
            image: 'https://i.imgur.com/S2TGn6d.jpeg',
            level: 'D',
            crm: 'CRP-02/30450',
            formations: [
              'Graduação em Psicologia (UNIVASF)',
              'Pós-graduação em andamento em Intervenção ABA para Autismo e Deficiência Intelectual (CBI of Miami)',
              'Formação em Gerenciamento Profissional de Crises – PCM (P1)',
              'Cursos em Protocolos de Avaliação Comportamental (VB-MAPP) (ABLLS-R) (AFLLS)'
            ],
            bio: 'Sou Gabriel Barão, sou psicólogo formado pela Univasf; Pós-graduando em Intervenção ABA para Autismo e Deficiência Intelectual pelo CBI of Miami; sou P1 em Gerenciamento Profissional de Crises (PCM; do inglês Professional Crisis Management ); tenho cursos em protocolos de avaliação comportamental, como VB-MAPP, ABLLS-R e AFLLS.Tive experiência como Aplicador entre 2022 e 2025. Atualmente, sou Analista do Comportamento Coordenador pela Beehave.',
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
            bio: 'Me chamo Joyce Maria da Silva Ribeiro, sou Psicóloga, pós-graduada em Análise do Comportamento Aplicada (ABA) e atualmente pós-graduanda em ABA com foco em TEA e DI. Tenho experiência na psicoterapia de crianças atípicas, atuando com intervenções baseadas na Análise do Comportamento. Hoje, sou Coordenadora em ABA na Beehave Soluções Comportamentais e será um prazer acompanhar você por aqui.',
          },
          {
            name: ' Esp. Nayara Queiroz',
            image: 'https://i.imgur.com/W6FVLyd.jpeg',
            level: 'D',
            crm: 'CRP 02/28286',
            formations: [
              'Licenciatura em Artes Visuais',
              'Graduação em Psicologia',
              'Pós-graduação em Análise do Comportamento Aplicada a pessoas com TEA',
              'Formação em Gerenciamento Profissional de Crises (PCM)',
              'Formação em Picture Exchange Communication System (PECS)'
            ],
            bio: 'Olá, sou Nayara Queiroz. Licenciada em Artes Visuais; Graduada em Psicologia; Pós-graduada em Analise do Comportamento aplicada a pessoas com TEA;  AC Coordenadora de Equipes ABA; Formação profissional para gerenciamento de crises - PCM; Formação Picture Exchange Communication System - PECS. Genuinamente apaixonada pela potencia da infância, inicie minha jornada na sala de aula com atuação voltada para uma educação inclusiva e respeitosa  onde aprendi que olhar para além do óbvio também é proteção à infância; Na caminhada, formei como Psicóloga infantil e de gênero, atuei como aplicadora ABA, atualmente atuo como coordenadora parceira da Beehave.Com ciência, afeto e atravessa da pela vivência do feminismo,  acredito numa prática clínica de cuidado ampliado comprometida com promoção de mudanças sociais e coletivas, na construção de uma sociedade equânime, com olhar sensível para o acolhimento de mulheres mães, acreditando que cuidar da infância exige, necessariamente, acolher quem cuida e com respeito inegociável as existências humanas',
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
              'Graduação em Psicologia (Faculdade Uninassau João Pessoa)',
              'Especialização em Intervenção ABA aplicada ao Transtorno do Espectro Autista (TEA)',
              'Formação em Aplicação ABA'
            ],
            bio: 'Sou Aline Rodrigues, Psicóloga formada pela Faculdade Uninassau João Pessoa, com atuação voltada para o público infantil. Tenho especialização em Intervenção ABA aplicada ao Transtorno do Espectro Autista (TEA)  e Aplicação ABA . Tenho experiência como aplicadora ABA (contexto escolar e casa) e em psicoterapia. Minha escolha pela área infantil se baseou nas minhas experiências, olhar e paixão pela infância e como ela acontece. E ao longo da graduação fui caminhando para me aprimorar no desenvolvimento De crianças atípicas.Minha atuação é baseada na Análise do Comportamento, uma ciência que busca compreender as interações entre o indivíduo e o ambiente, promovendo mudanças significativas por meio de intervenções individualizadas e sempre pautadas na ética e no respeito.Nos atendimentos infantis, especialmente com crianças em desenvolvimento atípico, o lúdico é utilizado como ferramenta central para a formação do vínculo terapêutico e para a implementação de estratégias personalizadas, respeitando o ritmo individual de cada criança.',
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
            crm: '',
            formations: [
              'Graduação em Psicologia (UNINASSAU)',
              'Pós-graduação em andamento em Análise do Comportamento Aplicada ao TEA',
            ],
            bio: 'Meu nome é Abdiel Oliveira Ferreira, sou Psicólogo formado pela UNINASSAU, pós-graduando em Análise do Comportamento Aplicada ao TEA, aplicador ABA com mais de 3 anos de experiência e vivência em avaliação comportamental.',
          },
          {
            name: 'Brenda Souza',
            image: 'https://i.imgur.com/DcKJBzc.jpeg',
            level: 'E-EVAL',
            crm: '',
            formations: [
              'Graduação em Psicologia',
              'Graduação em Psicologia',
              'Graduação em Psicologia'
            ],
            bio: 'Me chamo Brenda Souza, sou Bacharela em Psicologia pela UNINASSAU-PETROLINA (2025.2). Cofundadora da Liga Acadêmica de Análise do Comportamento (LAAC). Possuo formação em Análise do Comportamento Aplicada (ABA) pelo Instituto Fratelli e curso de Aplicadora ABA voltado ao desenvolvimento atípico/TEA pela Beehave Soluções Comportamentais. Com experiência na atuação como aplicadora ABA entre 2023 a 2025, e coleta de dados/aplicação de avaliações por meio dos protocolos VB-MAPP e ABLLS, tendo integrado a equipe de avaliação da Beehave no ano de 2025.',
          },
          {
            name: 'Luégina Sena',
            image: 'https://i.imgur.com/4RpCe4h.jpeg',
            level: 'E-EVAL',
            crm: '',
            formations: [
              'Curso de Sistema de Comunicação por troca de Figuras (PECS), nível 1',
              'Curso de Aplicadora ABA, pela Beehave',
              'Aprimoramento interno do Modelo de Serviços da Beehave em Análise do Comportamento Aplicada ABA para pessoas com desenvolvimento atípico/TEA',
              'Curso VB-MAPP'
            ],
            bio: 'Sou Luégina de Sena Dias, tenho graduação em Pedagogia pela Universidade do Estado da Bahia ( UNEB); Pós - graduada em Intervenção em ABA e Deficiência Intelectual pela CBI of Maiami; Pós-Graduanda em Psipedagoga Institucional e Clínica pela FAVENI. Atuo como aplicadora ABA (escola e casa) há quase 4 anos, atualmente, estou no ambiente escolar. Atuo também como Aplicadora da Equipe de Avaliação da Beehave, em que coleto dados por meio de Protocolos de Avaliação baseados em ABA. Atuo com ética e comprometimento, buscando sempre me atualizar para que meu Aprendente consiga adquirir todas habilidades para a sua maior qualidade de visa.',
          },
          {
            name: 'Patrícia Matos',
            image: 'https://i.imgur.com/TxZAhzt.jpeg',
            level: 'E-EVAL',
            crm: '',
            formations: [
              'ABA na escola',
              'ABA na prática - guia prático para a Construção de Programas ABA e coleta de dados',
              'Protocolo de avaliação VB-MAPP',
              'Leitura e análise de gráficos em ABA',
              'Brincar para variar',
              'Entendendo o comportamento',
              'GCurso prático de operacionalização e registro de comportamentos',
            ],
            bio: 'Olá, me chamo Patrícia Matos Oliveira, e sou graduada em Serviço Social pela Universidade Federal da Bahia (UFBA), Pós-graduada em Intervenção ABA e Deficiência Intelectual pela CBI of Miami, e tenho formação como Aplicadora ABA pela Beehave.',
          },
          {
            name: 'Waleska Oliveira',
            image: 'https://i.imgur.com/sT3ZMfi.jpeg',
            level: 'E-EVAL',
            crm: '',
            formations: [
              'ABA e Autismo (Beehave)',
              'VB-MAPP Descomplicado (Beehave)',
              'Workshop de Inovação Terapêutica com IA aplicada à ABA (Regina Bergamo Academy)'
            ],
            bio: 'Sou Waleska Oliveira, estudante de Fonoaudiologia e atuo como aplicadora ABA há mais de 2 anos. Minha atuação é voltada ao Transtorno do Espectro Autista (TEA).',
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
        </div>
      </div>
    </section>
    </>
  );
};

export default Team;
