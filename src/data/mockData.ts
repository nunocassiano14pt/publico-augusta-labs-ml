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
    matricula: 'Licenciatura em Comunicação Audiovisual e Multimédia',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 87.5,
  },
  {
    cod_pessoa: '330041',
    nome_aluno: 'João Oliveira',
    matricula: 'Licenciatura em Comunicação Audiovisual e Multimédia',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 72.4,
  },
  {
    cod_pessoa: '263480',
    nome_aluno: 'Maria Costa',
    matricula: 'Licenciatura em Comunicação Audiovisual e Multimédia',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 58.7,
  },
  {
    cod_pessoa: '344035',
    nome_aluno: 'Pedro Santos',
    matricula: 'Licenciatura em Educação Básica',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 73.9,
  },
  {
    cod_pessoa: '295719',
    nome_aluno: 'Clara Mendes',
    matricula: 'Licenciatura em Educação Básica',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 81.3,
  },
  {
    cod_pessoa: '206340',
    nome_aluno: 'Bruno Ferreira',
    matricula: 'Licenciatura em Animação Cultural',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 65.8,
  },
  {
    cod_pessoa: '189756',
    nome_aluno: 'Rita Fonseca',
    matricula: 'Licenciatura em Animação Cultural',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 52.3,
  },
  {
    cod_pessoa: '254387',
    nome_aluno: 'Miguel Andrade',
    matricula: 'Licenciatura em Engenharia Agronómica',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 76.4,
  },
  {
    cod_pessoa: '321456',
    nome_aluno: 'Sofia Rodrigues',
    matricula: 'Licenciatura em Engenharia Agronómica',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 68.7,
  },
  {
    cod_pessoa: '176543',
    nome_aluno: 'André Martins',
    matricula: 'Licenciatura em Engenharia Zootécnica',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 79.2,
  },
  {
    cod_pessoa: '287654',
    nome_aluno: 'Beatriz Nunes',
    matricula: 'Licenciatura em Engenharia Zootécnica',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 72.5,
  },
  {
    cod_pessoa: '312876',
    nome_aluno: 'Carlos Lopes',
    matricula: 'Licenciatura em Engenharia Alimentar',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 65.3,
  },
  {
    cod_pessoa: '198765',
    nome_aluno: 'Diana Mendes',
    matricula: 'Licenciatura em Engenharia Alimentar',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 58.9,
  },
  {
    cod_pessoa: '276543',
    nome_aluno: 'Eduardo Santos',
    matricula: 'Licenciatura em Engenharia Informática',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 82.7,
  },
  {
    cod_pessoa: '354321',
    nome_aluno: 'Francisca Oliveira',
    matricula: 'Licenciatura em Engenharia Informática',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 74.5,
  },
  {
    cod_pessoa: '234567',
    nome_aluno: 'Gonçalo Pereira',
    matricula: 'Licenciatura em Engenharia Civil',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 77.8,
  },
  {
    cod_pessoa: '345678',
    nome_aluno: 'Helena Costa',
    matricula: 'Licenciatura em Engenharia Civil',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 69.3,
  },
  {
    cod_pessoa: '456789',
    nome_aluno: 'Igor Fernandes',
    matricula: 'Licenciatura em Design de Produto',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 61.2,
  },
  {
    cod_pessoa: '567890',
    nome_aluno: 'Joana Ribeiro',
    matricula: 'Licenciatura em Design de Produto',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 53.7,
  },
  {
    cod_pessoa: '678901',
    nome_aluno: 'Luís Carvalho',
    matricula: 'Licenciatura em Enfermagem',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 59.8,
  },
  {
    cod_pessoa: '789012',
    nome_aluno: 'Mariana Almeida',
    matricula: 'Licenciatura em Enfermagem',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 66.4,
  },
  {
    cod_pessoa: '890123',
    nome_aluno: 'Nuno Gomes',
    matricula: 'Licenciatura em Fisioterapia',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 72.1,
  },
  {
    cod_pessoa: '901234',
    nome_aluno: 'Olívia Santos',
    matricula: 'Licenciatura em Fisioterapia',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 63.5,
  },
  {
    cod_pessoa: '112233',
    nome_aluno: 'Paulo Castro',
    matricula: 'Licenciatura em Contabilidade e Fiscalidade',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 74.9,
  },
  {
    cod_pessoa: '223344',
    nome_aluno: 'Quim Torres',
    matricula: 'Licenciatura em Contabilidade e Fiscalidade',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 68.2,
  },
  {
    cod_pessoa: '334455',
    nome_aluno: 'Raquel Lima',
    matricula: 'Licenciatura em Gestão da Distribuição e Logística',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 63.7,
  },
  {
    cod_pessoa: '445566',
    nome_aluno: 'Sérgio Martins',
    matricula: 'Licenciatura em Gestão da Distribuição e Logística',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 58.3,
  },
  {
    cod_pessoa: '556677',
    nome_aluno: 'Teresa Azevedo',
    matricula: 'Licenciatura em Marketing e Comunicação Empresarial',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 55.9,
  },
  {
    cod_pessoa: '667788',
    nome_aluno: 'Ulisses Pinto',
    matricula: 'Licenciatura em Marketing e Comunicação Empresarial',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 61.4,
  },
  {
    cod_pessoa: '778899',
    nome_aluno: 'Vera Moreira',
    matricula: 'Licenciatura em Organização e Gestão Empresariais',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 69.8,
  },
  {
    cod_pessoa: '889900',
    nome_aluno: 'Xavier Costa',
    matricula: 'Licenciatura em Organização e Gestão Empresariais',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 64.2,
  },
  {
    cod_pessoa: '998877',
    nome_aluno: 'Yara Sousa',
    matricula: 'Licenciatura em Desporto e Lazer',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 52.7,
  },
  {
    cod_pessoa: '887766',
    nome_aluno: 'Zacarias Fernandes',
    matricula: 'Licenciatura em Desporto e Lazer',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 57.3,
  },
  {
    cod_pessoa: '776655',
    nome_aluno: 'Anabela Marques',
    matricula: 'Licenciatura em Exercício e Saúde',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 61.8,
  },
  {
    cod_pessoa: '665544',
    nome_aluno: 'Bernardo Silva',
    matricula: 'Licenciatura em Exercício e Saúde',
    ano_letivo: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 67.2,
  }
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
