
import { Prediction, Student, StudentDetail, StatisticsData } from '../types';

// Mock data para o histórico de previsões
export const predictionsMock: Prediction[] = [
  {
    id: '1',
    name: 'TEST',
    date: 'Sep 16, 2024, 02:05 PM',
    status: 'Pending',
    access: ['User', 'Faculty'],
  },
  {
    id: '2',
    name: 'test 3',
    date: 'Sep 16, 2024, 12:30 AM',
    status: 'Pending',
    access: ['User', 'Faculty'],
  },
  {
    id: '3',
    name: 'test 2',
    date: 'Sep 16, 2024, 12:30 AM',
    status: 'Pending',
    access: ['User'],
  },
  {
    id: '4',
    name: 'SHARE',
    date: 'Sep 16, 2024, 12:28 AM',
    status: 'Pending',
    access: ['User', 'Faculty'],
  },
  {
    id: '5',
    name: '',
    date: 'Sep 11, 2024, 10:41 PM',
    status: 'Pending',
    access: ['User'],
  },
  {
    id: '6',
    name: '',
    date: 'Sep 11, 2024, 10:33 PM',
    status: 'Success',
    access: ['User'],
  },
];

// Mock data para resultados de previsão
export const studentsMock: Student[] = [
  {
    cod_pessoa: '122300',
    cod_estudante: '1959',
    ano_letivo: '2019',
    data_extracao: '2023-07-11 18:56:21',
    churn: 100,
  },
  {
    cod_pessoa: '330041',
    cod_estudante: '1647',
    ano_letivo: '2019',
    data_extracao: '2023-07-11 18:56:21',
    churn: 88.89,
  },
  {
    cod_pessoa: '263480',
    cod_estudante: '1802',
    ano_letivo: '2019',
    data_extracao: '2023-07-11 18:56:21',
    churn: 81.82,
  },
  {
    cod_pessoa: '344035',
    cod_estudante: '501',
    ano_letivo: '2019',
    data_extracao: '2023-07-11 18:56:21',
    churn: 73.91,
  },
  {
    cod_pessoa: '295719',
    cod_estudante: '2246',
    ano_letivo: '2019',
    data_extracao: '2023-07-11 18:56:21',
    churn: 73.91,
  },
  {
    cod_pessoa: '206340',
    cod_estudante: '2962',
    ano_letivo: '2019',
    data_extracao: '2023-07-11 18:56:21',
    churn: 73.91,
  },
];

// Mock data para detalhes do estudante
export const studentDetailMock: StudentDetail = {
  studentId: '344035',
  churnProbability: 73.91,
  positiveReasons: [
    {
      feature: 'regime_ingresso_nome',
      description: 'Contingentes especiais Madeira',
      impact: 16.40,
    },
    {
      feature: 'idade',
      description: '22',
      impact: 3.60,
    },
    {
      feature: 'sexo',
      description: 'Masculino',
      impact: 1.70,
    },
  ],
  negativeReasons: [
    {
      feature: 'estudante_ocupacao',
      description: 'Estudante',
      impact: -9.10,
    },
    {
      feature: 'ano_curricular',
      description: '5',
      impact: -1.30,
    },
    {
      feature: 'faculdade',
      description: 'FFUP',
      impact: -0.90,
    },
  ],
};

// Mock data para estatísticas
export const sexoStatisticsMock: StatisticsData = {
  variable: 'sexo',
  categories: ['Feminino', 'Masculino'],
  percentages: [20.04, 79.96],
  counts: [24, 15],
};

export const idadeStatisticsMock: StatisticsData = {
  variable: 'idade',
  categories: ['17', '18', '19', '20', '21', '22', '24', '25', '26', '29', '37'],
  percentages: [0.35, 18.24, 28.62, 18.24, 73.91, 73.91, 18.01, 0.35, 0.35, 0.35, 0.35],
  counts: [1, 5, 7, 10, 3, 5, 3, 1, 1, 2, 1],
};

// Lista de variáveis disponíveis para análise
export const availableVariables = [
  'ano_letivo',
  'data_extracao',
  'data_referencia',
  'sexo',
  'estado_civil',
  'idade',
  'pais_naturalidade',
  'pais_nacionalidade',
  'estrangeiro',
  'deslocado',
  'necess_educ_especiais',
];
