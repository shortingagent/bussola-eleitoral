// ─── PRESIDENTIAL CANDIDATES DATABASE ────────────────────────────────────────
// Scores per topic: -100 (far left/progressive) to +100 (far right/conservative)
// Economic axis: -100 = state intervention / +100 = free market
// Social axis:   -100 = progressive / +100 = conservative
// Each topic score is on the same -100 to +100 scale
// Sources: party platforms, public statements, voting records, interviews 2024-2026

const CANDIDATES = [
  {
    id: 'lula',
    name: 'Lula',
    fullName: 'Luiz Inácio Lula da Silva',
    party: 'PT',
    partyColor: '#C0392B',
    status: 'confirmed',
    description: 'Presidente em exercício buscando reeleição. Líder histórico da esquerda brasileira, fundador do PT.',
    url: 'https://pt.org.br',
    // 2D compass position (economic: left=-100, right=+100 / social: progressive=-100, conservative=+100)
    economic: -60,
    social: -40,
    // Per-topic scores
    topics: {
      economia:   -65,  // Estado ativo, Petrobras, salário mínimo real, Bolsa Família
      fiscal:     -50,  // Defende gastos sociais, arcabouço com flexibilidade, IR até 5k isento
      ambiente:   -75,  // Desmatamento zero, COP30, energias renováveis, anti-Margem Equatorial
      seguranca:  -40,  // Controle de armas, anti-confronto direto, prevenção social
      saude:      -70,  // SUS robusto, regulação planos privados, cannabis medicinal
      educacao:   -55,  // Anti-mensalidade pública, cotas, educação sexual nas escolas
      direitos:   -70,  // Trabalhistas, cotas raciais, LGBTQIA+, 6x1, anti-aborto (posição ambígua)
      politica:   -60,  // BRICS, Sul Global, mediação conflitos, Mercosul
      democracia: -80,  // Pro-STF, anti-anistia 8/1, regulação redes sociais, voto obrigatório
    }
  },
  {
    id: 'flavio',
    name: 'Flávio Bolsonaro',
    fullName: 'Flávio Bolsonaro',
    party: 'PL',
    partyColor: '#002776',
    status: 'confirmed',
    description: 'Senador pelo Rio de Janeiro. Candidato escolhido pelo pai Jair Bolsonaro para continuar o projeto bolsonarista.',
    url: 'https://pl.org.br',
    economic: +55,
    social: +80,
    topics: {
      economia:   +60,  // Privatizações, anti-Bolsa Família, anti-intervenção estatal
      fiscal:     +70,  // Corte de gastos, anti-IR isento 5k (custo fiscal), mínimos constitucionais flexíveis
      ambiente:   +65,  // Pro-agro, Margem Equatorial, anti-regulação ambiental
      seguranca:  +85,  // Armamento civil, confronto direto, penas maiores, Forças Armadas segurança
      saude:      +40,  // Anti-SUS robusto, planos privados sem controle, anti-cannabis
      educacao:   +75,  // Homeschooling, currículo conservador, anti-educação sexual
      direitos:   +85,  // Anti-cotas, anti-LGBTQIA+, anti-aborto, anti-6x1, anti-trabalhistas
      politica:   +60,  // Pro-EUA, anti-BRICS, alinhamento ocidental, anti-Venezuela/Cuba
      democracia: +90,  // Anistia 8/1, anti-STF, anti-regulação redes, questiona TSE
    }
  },
  {
    id: 'caiado',
    name: 'Caiado',
    fullName: 'Ronaldo Caiado',
    party: 'PSD',
    partyColor: '#8E44AD',
    status: 'confirmed',
    description: 'Ex-governador de Goiás. Centro-direita institucionalista. Forte no agronegócio e segurança pública.',
    url: 'https://psd.org.br',
    economic: +35,
    social: +55,
    topics: {
      economia:   +40,  // Privatizações moderadas, anti-intervenção excessiva, pro-agronegócio
      fiscal:     +55,  // Equilíbrio fiscal, corte de gastos seletivo, responsabilidade orçamentária
      ambiente:   +30,  // Pro-agro com sustentabilidade, Margem Equatorial sim, desmatamento moderado
      seguranca:  +70,  // Confronto direto ao crime, penas maiores, Forças Armadas segurança
      saude:      +20,  // SUS com eficiência, espaço para privados, anti-cannabis recreativa
      educacao:   +45,  // Homeschooling, ensino técnico, currículo com valores
      direitos:   +60,  // Anti-cotas por raça, anti-LGBTQIA+ expansão, trabalhistas moderado
      politica:   +15,  // Equilíbrio EUA/BRICS, pragmatismo, Mercosul sim
      democracia: +20,  // Pro-instituições, anti-anistia 8/1, STF com limites, voto obrigatório
    }
  },
  {
    id: 'zema',
    name: 'Zema',
    fullName: 'Romeu Zema',
    party: 'NOVO',
    partyColor: '#E74C3C',
    status: 'confirmed',
    description: 'Governador de Minas Gerais. Liberal econômico radical. Defende Estado mínimo e privatizações totais.',
    url: 'https://novo.org.br',
    economic: +90,
    social: +50,
    topics: {
      economia:   +90,  // Privatização total incluindo Petrobras, Estado mínimo, anti-Bolsa Família
      fiscal:     +90,  // Corte drástico de gastos, mínimos constitucionais flexíveis, anti-IR isento
      ambiente:   +50,  // Margem Equatorial sim, agro sem restrições, anti-regulação ambiental
      seguranca:  +55,  // Armamento civil, confronto moderado, penas maiores
      saude:      +30,  // Planos privados sem regulação, SUS eficiente não ampliado
      educacao:   +60,  // Mensalidade universidades públicas, homeschooling, ensino técnico
      direitos:   +50,  // Anti-cotas raciais, trabalhistas flexíveis, social moderadamente conservador
      politica:   +40,  // Pro-livre comércio, anti-BRICS ideológico, acordos bilaterais
      democracia: +10,  // Pro-instituições, neutro anistia, anti-regulação redes (liberdade)
    }
  },
  {
    id: 'leite',
    name: 'Eduardo Leite',
    fullName: 'Eduardo Leite',
    party: 'PSD',
    partyColor: '#2980B9',
    status: 'likely',
    description: 'Ex-governador do Rio Grande do Sul. Centro moderado. Primeiro governador abertamente gay do Brasil.',
    url: 'https://psd.org.br',
    economic: +30,
    social: -10,
    topics: {
      economia:   +35,  // Privatizações moderadas, equilíbrio fiscal, espaço para mercado
      fiscal:     +45,  // Responsabilidade fiscal, cortes seletivos, anti-populismo orçamentário
      ambiente:   +10,  // Reconstrução RS pós-enchentes, renovável sim, agro regulado
      seguranca:  +30,  // Segurança eficiente, anti-radicalismo repressivo
      saude:      +10,  // SUS eficiente, planos regulados, moderado
      educacao:   +20,  // Ensino técnico, universidade com critérios, moderado
      direitos:   -20,  // LGBTQIA+ (abertamente gay), trabalhistas moderados, cotas por renda
      politica:   +10,  // Equilíbrio, multilateralismo pragmático
      democracia: -30,  // Pro-instituições, anti-anistia 8/1, crítico de Bolsonaro e Lula
    }
  },
  {
    id: 'tebet',
    name: 'Tebet',
    fullName: 'Simone Tebet',
    party: 'MDB',
    partyColor: '#E67E22',
    status: 'possible',
    description: 'Ministra do Planejamento no governo Lula. Terceiro lugar em 2022. Centro pragmático.',
    url: 'https://mdb.org.br',
    economic: -10,
    social: -15,
    topics: {
      economia:   -15,  // Centro, alguma intervenção estatal, pro-mercado moderado
      fiscal:     +20,  // Responsabilidade fiscal, arcabouço, anti-populismo
      ambiente:   -30,  // Pro-ambiente, COP30, renovável, agro sustentável
      seguranca:  +10,  // Segurança com direitos, moderado
      saude:      -20,  // SUS fortalecido com eficiência, regulação planos
      educacao:   +10,  // Moderado, ensino técnico, universidade com critérios
      direitos:   -25,  // Progressista moderada, LGBTQIA+ sim, cotas por renda/raça
      politica:   -10,  // Multilateralismo, equilíbrio BRICS/ocidente
      democracia: -40,  // Fortemente pro-instituições, anti-anistia, pro-STF
    }
  },
];

// ─── PARTY SPECTRUM (for left-right scale) ───────────────────────────────────
// economic: -100 (far left) to +100 (far right)
// social:   -100 (progressive) to +100 (conservative)

const PARTY_SPECTRUM = [
  { name: 'PSOL',  economic: -90, social: -85, label: 'Extrema-esquerda' },
  { name: 'PCdoB', economic: -85, social: -60, label: 'Extrema-esquerda' },
  { name: 'PT',    economic: -60, social: -40, label: 'Esquerda' },
  { name: 'PDT',   economic: -45, social: -35, label: 'Centro-esquerda' },
  { name: 'PSB',   economic: -40, social: -30, label: 'Centro-esquerda' },
  { name: 'REDE',  economic: -35, social: -50, label: 'Centro-esquerda' },
  { name: 'MDB',   economic: -10, social: -15, label: 'Centro' },
  { name: 'PSD',   economic: +30, social: +30, label: 'Centro-direita' },
  { name: 'PSDB',  economic: +25, social: +10, label: 'Centro' },
  { name: 'União', economic: +40, social: +45, label: 'Centro-direita' },
  { name: 'PP',    economic: +35, social: +50, label: 'Centro-direita' },
  { name: 'Repub', economic: +45, social: +55, label: 'Direita' },
  { name: 'PL',    economic: +55, social: +80, label: 'Direita' },
  { name: 'NOVO',  economic: +90, social: +50, label: 'Direita liberal' },
  { name: 'PL/B',  economic: +65, social: +90, label: 'Extrema-direita' },
];

module.exports = { CANDIDATES, PARTY_SPECTRUM };
