import { Prediction, Subscriber, SubscriberDetail, StatisticsData, ChurnTrend } from '../types';

// Mock data para o histórico de previsões
export const predictionsMock: Prediction[] = [
  {
    id: '1',
    name: 'Previsão 1',
    date: '01/01/2024',
    status: 'Sucesso',
    access: ['Utilizador', 'Editor'],
  },
  {
    id: '2',
    name: 'Previsão 2',
    date: '01/02/2024',
    status: 'Sucesso',
    access: ['Utilizador', 'Editor'],
  },
  {
    id: '3',
    name: 'Previsão 3',
    date: '01/03/2024',
    status: 'Sucesso',
    access: ['Utilizador'],
  },
  {
    id: '4',
    name: 'Previsão 4',
    date: '01/04/2024',
    status: 'Sucesso',
    access: ['Utilizador', 'Editor'],
  },
  {
    id: '5',
    name: 'Previsão 5',
    date: '01/05/2024',
    status: 'Pendente',
    access: ['Utilizador'],
  },
  {
    id: '6',
    name: 'Previsão 6',
    date: '01/06/2024',
    status: 'Sucesso',
    access: ['Utilizador'],
  },
  {
    id: '7',
    name: 'Previsão 7',
    date: '01/07/2024',
    status: 'Sucesso',
    access: ['Utilizador', 'Editor', 'Administrador'],
  },
  {
    id: '8',
    name: 'Previsão 8',
    date: '01/08/2024',
    status: 'Sucesso',
    access: ['Utilizador', 'Editor'],
  },
  {
    id: '9',
    name: 'Previsão 9',
    date: '01/09/2024',
    status: 'Pendente',
    access: ['Utilizador'],
  },
  {
    id: '10',
    name: 'Previsão 10',
    date: '01/10/2024',
    status: 'Sucesso',
    access: ['Utilizador', 'Administrador'],
  },
];

// Mock data para resultados de previsão
export const subscribersMock: Subscriber[] = [
  {
    cod_pessoa: '122300',
    nome_assinante: 'Ana Silva',
    plano_assinatura: 'Assinatura Digital Premium',
    data_inicio: '01/03/2023',
    data_extracao: '01/06/2024',
    churn: 87.5,
    contentCategoryIds: ['CAT001', 'CAT002', 'CAT003']
  },
  {
    cod_pessoa: '330041',
    nome_assinante: 'João Oliveira',
    plano_assinatura: 'Assinatura Digital Premium',
    data_inicio: '15/04/2023',
    data_extracao: '01/06/2024',
    churn: 72.4,
    contentCategoryIds: ['CAT001', 'CAT004', 'CAT005']
  },
  {
    cod_pessoa: '263480',
    nome_assinante: 'Maria Costa',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '10/01/2024',
    data_extracao: '01/06/2024',
    churn: 58.7,
    contentCategoryIds: ['CAT002', 'CAT004', 'CAT006']
  },
  {
    cod_pessoa: '344035',
    nome_assinante: 'Pedro Santos',
    plano_assinatura: 'Assinatura Completa',
    data_inicio: '05/12/2022',
    data_extracao: '01/06/2024',
    churn: 73.9,
    contentCategoryIds: ['CAT007', 'CAT008', 'CAT009']
  },
  {
    cod_pessoa: '295719',
    nome_assinante: 'Clara Mendes',
    plano_assinatura: 'Assinatura Completa',
    data_inicio: '22/08/2023',
    data_extracao: '01/06/2024',
    churn: 81.3,
    contentCategoryIds: ['CAT007', 'CAT010', 'CAT011']
  },
  {
    cod_pessoa: '206340',
    nome_assinante: 'Bruno Ferreira',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '17/07/2023',
    data_extracao: '01/06/2024',
    churn: 65.8,
    contentCategoryIds: ['CAT012', 'CAT013', 'CAT014']
  },
  {
    cod_pessoa: '189756',
    nome_assinante: 'Rita Fonseca',
    plano_assinatura: 'Assinatura Completa',
    data_inicio: '03/01/2024',
    data_extracao: '01/06/2024',
    churn: 52.3,
    contentCategoryIds: ['CAT012', 'CAT015', 'CAT016']
  },
  {
    cod_pessoa: '254387',
    nome_assinante: 'Miguel Andrade',
    plano_assinatura: 'Assinatura Digital Premium',
    data_inicio: '28/05/2023',
    data_extracao: '01/06/2024',
    churn: 76.4,
  },
  {
    cod_pessoa: '321456',
    nome_assinante: 'Sofia Rodrigues',
    plano_assinatura: 'Assinatura Digital Premium',
    data_inicio: '19/11/2022',
    data_extracao: '01/06/2024',
    churn: 68.7,
  },
  {
    cod_pessoa: '176543',
    nome_assinante: 'André Martins',
    plano_assinatura: 'Assinatura Semestral',
    data_inicio: '14/02/2024',
    data_extracao: '01/06/2024',
    churn: 79.2,
  },
  {
    cod_pessoa: '287654',
    nome_assinante: 'Beatriz Nunes',
    plano_assinatura: 'Assinatura Semestral',
    data_inicio: '11/03/2023',
    data_extracao: '01/06/2024',
    churn: 72.5,
  },
  {
    cod_pessoa: '312876',
    nome_assinante: 'Carlos Lopes',
    plano_assinatura: 'Assinatura Completa',
    data_inicio: '01/04/2024',
    data_extracao: '01/06/2024',
    churn: 65.3,
  },
  {
    cod_pessoa: '198765',
    nome_assinante: 'Diana Mendes',
    plano_assinatura: 'Assinatura Completa',
    data_inicio: '15/05/2023',
    data_extracao: '01/06/2024',
    churn: 58.9,
  },
  {
    cod_pessoa: '276543',
    nome_assinante: 'Eduardo Santos',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '02/06/2024',
    data_extracao: '01/06/2024',
    churn: 82.7,
  },
  {
    cod_pessoa: '354321',
    nome_assinante: 'Francisca Oliveira',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '07/07/2023',
    data_extracao: '01/06/2024',
    churn: 74.5,
  },
  {
    cod_pessoa: '234567',
    nome_assinante: 'Gonçalo Pereira',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '10/08/2023',
    data_extracao: '01/06/2024',
    churn: 77.8,
  },
  {
    cod_pessoa: '345678',
    nome_assinante: 'Helena Costa',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '12/09/2023',
    data_extracao: '01/06/2024',
    churn: 69.3,
  },
  {
    cod_pessoa: '456789',
    nome_assinante: 'Igor Fernandes',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '01/10/2023',
    data_extracao: '01/06/2024',
    churn: 61.2,
  },
  {
    cod_pessoa: '567890',
    nome_assinante: 'Joana Ribeiro',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '03/11/2023',
    data_extracao: '01/06/2024',
    churn: 53.7,
  },
  {
    cod_pessoa: '678901',
    nome_assinante: 'Luís Carvalho',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '05/12/2023',
    data_extracao: '01/06/2024',
    churn: 59.8,
  },
  {
    cod_pessoa: '789012',
    nome_assinante: 'Mariana Almeida',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '07/13/2023',
    data_extracao: '01/06/2024',
    churn: 66.4,
  },
  {
    cod_pessoa: '890123',
    nome_assinante: 'Nuno Gomes',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '09/14/2023',
    data_extracao: '01/06/2024',
    churn: 72.1,
  },
  {
    cod_pessoa: '901234',
    nome_assinante: 'Olívia Santos',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '11/15/2023',
    data_extracao: '01/06/2024',
    churn: 63.5,
  },
  {
    cod_pessoa: '112233',
    nome_assinante: 'Paulo Castro',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '13/16/2023',
    data_extracao: '01/06/2024',
    churn: 74.9,
  },
  {
    cod_pessoa: '223344',
    nome_assinante: 'Quim Torres',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '15/17/2023',
    data_extracao: '01/06/2024',
    churn: 68.2,
  },
  {
    cod_pessoa: '334455',
    nome_assinante: 'Raquel Lima',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '17/18/2023',
    data_extracao: '01/06/2024',
    churn: 63.7,
  },
  {
    cod_pessoa: '445566',
    nome_assinante: 'Sérgio Martins',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '19/19/2023',
    data_extracao: '01/06/2024',
    churn: 58.3,
  },
  {
    cod_pessoa: '556677',
    nome_assinante: 'Teresa Azevedo',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '21/20/2023',
    data_extracao: '01/06/2024',
    churn: 55.9,
  },
  {
    cod_pessoa: '667788',
    nome_assinante: 'Ulisses Pinto',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '23/22/2023',
    data_extracao: '01/06/2024',
    churn: 61.4,
  },
  {
    cod_pessoa: '778899',
    nome_assinante: 'Vera Moreira',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '25/24/2023',
    data_extracao: '01/06/2024',
    churn: 69.8,
  },
  {
    cod_pessoa: '889900',
    nome_assinante: 'Xavier Costa',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '27/26/2023',
    data_extracao: '01/06/2024',
    churn: 64.2,
  },
  {
    cod_pessoa: '998877',
    nome_assinante: 'Yara Sousa',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '29/28/2023',
    data_extracao: '01/06/2024',
    churn: 52.7,
  },
  {
    cod_pessoa: '887766',
    nome_assinante: 'Zacarias Fernandes',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '31/30/2023',
    data_extracao: '01/06/2024',
    churn: 57.3,
  },
  {
    cod_pessoa: '776655',
    nome_assinante: 'Anabela Marques',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '01/01/2024',
    data_extracao: '01/06/2024',
    churn: 61.8,
  },
  {
    cod_pessoa: '665544',
    nome_assinante: 'Bernardo Silva',
    plano_assinatura: 'Assinatura Digital Base',
    data_inicio: '03/02/2024',
    data_extracao: '01/06/2024',
    churn: 67.2,
  }
];

// Alias para compatibilidade com os componentes existentes
export const studentsMock = subscribersMock;

// Mock data para tendências mensais
export const churnTrendMock: ChurnTrend[] = [
  { month: 'Janeiro 2024', value: 65.2 },
  { month: 'Fevereiro 2024', value: 68.5 },
  { month: 'Março 2024', value: 71.3 },
  { month: 'Abril 2024', value: 74.8 },
  { month: 'Maio 2024', value: 73.1 },
  { month: 'Junho 2024', value: 73.9 }
];

// Mock data para detalhes do assinante
export const subscriberDetailMock: SubscriberDetail = {
  subscriberId: '344035',
  churnProbability: 73.91,
  positiveReasons: [
    {
      feature: 'frequencia_leitura',
      description: 'Menos de 1 vez por semana',
      impact: 16.40,
    },
    {
      feature: 'tempo_assinatura',
      description: '3 meses',
      impact: 3.60,
    },
    {
      feature: 'forma_pagamento',
      description: 'Cartão de crédito expirado',
      impact: 1.70,
    },
  ],
  negativeReasons: [
    {
      feature: 'diversidade_conteudo',
      description: 'Lê mais de 5 categorias',
      impact: -9.10,
    },
    {
      feature: 'periodicidade',
      description: 'Assinatura anual',
      impact: -1.30,
    },
    {
      feature: 'promocoes_especiais',
      description: 'Desconto fidelidade ativo',
      impact: -0.90,
    },
  ],
  trends: churnTrendMock
};

// Alias para compatibilidade com os componentes existentes
export const studentDetailMock = subscriberDetailMock;

// Mock data para estatísticas
export const sexoStatisticsMock: StatisticsData = {
  variable: 'sexo',
  categories: ['Feminino', 'Masculino'],
  percentages: [20.04, 79.96],
  counts: [24, 15],
};

export const idadeStatisticsMock: StatisticsData = {
  variable: 'idade',
  categories: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
  percentages: [10.35, 28.24, 22.62, 18.24, 12.91, 7.64],
  counts: [15, 42, 34, 27, 19, 11],
};

export const planoAssinaturaStatisticsMock: StatisticsData = {
  variable: 'plano_assinatura',
  categories: ['Digital Base', 'Digital Premium', 'Completa', 'Semestral', 'Anual'],
  percentages: [35.2, 28.7, 15.3, 12.1, 8.7],
  counts: [48, 39, 21, 16, 12],
};

export const tempoAssinaturaStatisticsMock: StatisticsData = {
  variable: 'tempo_assinatura',
  categories: ['0-3 meses', '3-6 meses', '6-12 meses', '1-2 anos', '2+ anos'],
  percentages: [42.5, 31.2, 18.7, 7.6, 0],
  counts: [57, 42, 25, 10, 0],
};

export const localResidenciaStatisticsMock: StatisticsData = {
  variable: 'local_residencia',
  categories: ['Lisboa', 'Porto', 'Coimbra', 'Outros'],
  percentages: [62.3, 18.5, 12.7, 6.5],
  counts: [84, 25, 17, 9],
};

// Lista de variáveis disponíveis para análise
export const availableVariables = [
  'tempo_assinatura',
  'sexo',
  'idade',
  'plano_assinatura',
  'local_residencia',
  'forma_pagamento',
  'desconto_aplicado',
  'frequencia_leitura',
  'categorias_preferidas',
  'periodicidade'
];
