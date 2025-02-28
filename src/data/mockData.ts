
import { Prediction, Student, StudentDetail, StatisticsData, ChurnTrend } from '../types';

// Mock data para o histórico de previsões
export const predictionsMock: Prediction[] = [
  {
    id: '1',
    name: 'Previsão 1',
    date: '01/01/2024',
    status: 'Sucesso',
    access: ['Utilizador', 'Docente'],
  },
  {
    id: '2',
    name: 'Previsão 2',
    date: '01/02/2024',
    status: 'Sucesso',
    access: ['Utilizador', 'Docente'],
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
    access: ['Utilizador', 'Docente'],
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
    access: ['Utilizador', 'Docente', 'Administrador'],
  },
  {
    id: '8',
    name: 'Previsão 8',
    date: '01/08/2024',
    status: 'Sucesso',
    access: ['Utilizador', 'Docente'],
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
export const studentsMock: Student[] = [
  {
    cod_pessoa: '122300',
    nome_aluno: 'Ana Silva',
    matricula: 'Licenciatura em Gestão',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 100,
  },
  {
    cod_pessoa: '330041',
    nome_aluno: 'João Oliveira',
    matricula: 'Licenciatura em Engenharia Informática',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 88.89,
  },
  {
    cod_pessoa: '263480',
    nome_aluno: 'Maria Costa',
    matricula: 'Mestrado em Química',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 81.82,
  },
  {
    cod_pessoa: '344035',
    nome_aluno: 'Pedro Santos',
    matricula: 'CTeSP em Gestão Hoteleira',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 73.91,
  },
  {
    cod_pessoa: '295719',
    nome_aluno: 'Clara Mendes',
    matricula: 'Licenciatura em Turismo',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 73.91,
  },
  {
    cod_pessoa: '206340',
    nome_aluno: 'Bruno Ferreira',
    matricula: 'Licenciatura em Design',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 73.91,
  },
  {
    cod_pessoa: '189756',
    nome_aluno: 'Rita Fonseca',
    matricula: 'Licenciatura em Enfermagem',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 67.54,
  },
  {
    cod_pessoa: '254387',
    nome_aluno: 'Miguel Andrade',
    matricula: 'CTeSP em Desenvolvimento Web',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 62.33,
  },
  {
    cod_pessoa: '321456',
    nome_aluno: 'Sofia Rodrigues',
    matricula: 'Mestrado em Educação',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 58.90,
  },
  {
    cod_pessoa: '176543',
    nome_aluno: 'André Martins',
    matricula: 'Licenciatura em Comunicação',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 52.15,
  },
  {
    cod_pessoa: '287654',
    nome_aluno: 'Beatriz Nunes',
    matricula: 'Licenciatura em Contabilidade',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 47.82,
  },
  {
    cod_pessoa: '312876',
    nome_aluno: 'Carlos Lopes',
    matricula: 'CTeSP em Redes e Sistemas',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 42.18,
  },
];

// Mock data para tendências mensais
export const churnTrendMock: ChurnTrend[] = [
  { month: 'Janeiro 2024', value: 65.2 },
  { month: 'Fevereiro 2024', value: 68.5 },
  { month: 'Março 2024', value: 71.3 },
  { month: 'Abril 2024', value: 74.8 },
  { month: 'Maio 2024', value: 73.1 },
  { month: 'Junho 2024', value: 73.9 }
];

// Mock data para detalhes do estudante
export const studentDetailMock: StudentDetail = {
  studentId: '344035',
  churnProbability: 73.91,
  positiveReasons: [
    {
      feature: 'regime_ingresso',
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
      feature: 'ocupacao',
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
  trends: churnTrendMock
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

export const cursoStatisticsMock: StatisticsData = {
  variable: 'curso',
  categories: ['Gestão', 'Informática', 'Turismo', 'Educação', 'Design'],
  percentages: [35.2, 28.7, 15.3, 12.1, 8.7],
  counts: [48, 39, 21, 16, 12],
};

export const anoLetivosStatisticsMock: StatisticsData = {
  variable: 'ano_letivo',
  categories: ['1º Ano', '2º Ano', '3º Ano', 'Mestrado'],
  percentages: [42.5, 31.2, 18.7, 7.6],
  counts: [57, 42, 25, 10],
};

export const localResidenciaStatisticsMock: StatisticsData = {
  variable: 'local_residencia',
  categories: ['Viana do Castelo', 'Braga', 'Porto', 'Outros'],
  percentages: [62.3, 18.5, 12.7, 6.5],
  counts: [84, 25, 17, 9],
};

// Lista de variáveis disponíveis para análise
export const availableVariables = [
  'ano_letivo',
  'sexo',
  'idade',
  'curso',
  'local_residencia',
  'escolaridade_pais',
  'bolsa_estudos',
  'deslocado',
  'trabalhador_estudante',
  'media_entrada'
];
