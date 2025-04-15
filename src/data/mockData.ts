
import { Prediction, Subscriber, SubscriberDetail, ChurnTrend } from '../types';

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
export const subscribersMock: Subscriber[] = [
  {
    cod_pessoa: '122300',
    nome_subscritor: 'Ana Silva',
    subscription: 'Subscrição Premium Anual',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 87.5
  },
  {
    cod_pessoa: '330041',
    nome_subscritor: 'João Oliveira',
    subscription: 'Subscrição Premium Anual',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 72.4
  },
  {
    cod_pessoa: '263480',
    nome_subscritor: 'Maria Costa',
    subscription: 'Subscrição Premium Anual',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 58.7
  },
  {
    cod_pessoa: '344035',
    nome_subscritor: 'Pedro Santos',
    subscription: 'Subscrição Digital',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 73.9
  },
  {
    cod_pessoa: '295719',
    nome_subscritor: 'Clara Mendes',
    subscription: 'Subscrição Digital',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 81.3
  },
  {
    cod_pessoa: '206340',
    nome_subscritor: 'Bruno Ferreira',
    subscription: 'Subscrição Mensal',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 65.8
  },
  {
    cod_pessoa: '189756',
    nome_subscritor: 'Rita Fonseca',
    subscription: 'Subscrição Mensal',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 52.3
  },
  {
    cod_pessoa: '254387',
    nome_subscritor: 'Miguel Andrade',
    subscription: 'Subscrição Premium Semestral',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 76.4,
  },
  {
    cod_pessoa: '321456',
    nome_subscritor: 'Sofia Rodrigues',
    subscription: 'Subscrição Premium Semestral',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 68.7,
  },
  {
    cod_pessoa: '176543',
    nome_subscritor: 'André Martins',
    subscription: 'Subscrição Digital Plus',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 79.2,
  },
  {
    cod_pessoa: '287654',
    nome_subscritor: 'Beatriz Nunes',
    subscription: 'Subscrição Digital Plus',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 72.5,
  },
  {
    cod_pessoa: '312876',
    nome_subscritor: 'Carlos Lopes',
    subscription: 'Subscrição Premium Anual',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 65.3,
  },
  {
    cod_pessoa: '198765',
    nome_subscritor: 'Diana Mendes',
    subscription: 'Subscrição Premium Anual',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 58.9,
  },
  {
    cod_pessoa: '276543',
    nome_subscritor: 'Eduardo Santos',
    subscription: 'Subscrição Digital',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 82.7,
  },
  {
    cod_pessoa: '354321',
    nome_subscritor: 'Francisca Oliveira',
    subscription: 'Subscrição Digital',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 74.5,
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

// Mock data para detalhes do subscritor
export const subscriberDetailMock: SubscriberDetail = {
  subscriberId: '344035',
  churnProbability: 73.91,
  positiveReasons: [
    {
      feature: 'tipo_subscricao',
      description: 'Subscrição Digital',
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
      feature: 'periodicidade_pagamento',
      description: 'Mensal',
      impact: -1.30,
    },
    {
      feature: 'regiao',
      description: 'Norte',
      impact: -0.90,
    },
  ],
  trends: churnTrendMock
};
