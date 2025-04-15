
import { Prediction, Subscriber, SubscriberDetail, ChurnTrend, SubscriptionPeriod, SubscriptionModality } from '../types';

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

// Mock data para resultados de previsão com variação de fatores e valores
export const subscribersMock: Subscriber[] = [
  {
    cod_pessoa: '122300',
    nome_subscritor: 'Ana Silva',
    subscription: 'Subscrição Premium Anual',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 87.5,
    idade: 32,
    tempo_subscricao: 1.5,
    valor_medio_fatura: 120.5,
    tipo_subscricao: 'Anual',
    modalidade: 'Papel + Digital'
  },
  {
    cod_pessoa: '330041',
    nome_subscritor: 'João Oliveira',
    subscription: 'Subscrição Premium Anual',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 72.4,
    idade: 45,
    tempo_subscricao: 2.7,
    valor_medio_fatura: 135.8,
    tipo_subscricao: 'Anual',
    modalidade: 'Digital'
  },
  {
    cod_pessoa: '263480',
    nome_subscritor: 'Maria Costa',
    subscription: 'Subscrição Premium Anual',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 58.7,
    idade: 29,
    tempo_subscricao: 3.2,
    valor_medio_fatura: 118.3,
    tipo_subscricao: 'Trimestral',
    modalidade: 'Papel + Digital'
  },
  {
    cod_pessoa: '344035',
    nome_subscritor: 'Pedro Santos',
    subscription: 'Subscrição Digital',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 73.9,
    idade: 38,
    tempo_subscricao: 1.2,
    valor_medio_fatura: 79.9,
    tipo_subscricao: 'Trimestral',
    modalidade: 'Digital'
  },
  {
    cod_pessoa: '295719',
    nome_subscritor: 'Clara Mendes',
    subscription: 'Subscrição Digital',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 81.3,
    idade: 26,
    tempo_subscricao: 0.8,
    valor_medio_fatura: 69.5,
    tipo_subscricao: 'Anual',
    modalidade: 'Estudantes'
  },
  {
    cod_pessoa: '206340',
    nome_subscritor: 'Bruno Ferreira',
    subscription: 'Subscrição Mensal',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 65.8,
    idade: 41,
    tempo_subscricao: 1.3,
    valor_medio_fatura: 45.9,
    tipo_subscricao: 'Semestral',
    modalidade: 'Empresas'
  },
  {
    cod_pessoa: '189756',
    nome_subscritor: 'Rita Fonseca',
    subscription: 'Subscrição Mensal',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 52.3,
    idade: 52,
    tempo_subscricao: 3.5,
    valor_medio_fatura: 49.2,
    tipo_subscricao: 'Semestral',
    modalidade: 'Digital'
  },
  {
    cod_pessoa: '254387',
    nome_subscritor: 'Miguel Andrade',
    subscription: 'Subscrição Premium Semestral',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 76.4,
    idade: 36,
    tempo_subscricao: 1.7,
    valor_medio_fatura: 85.0,
    tipo_subscricao: 'Semestral',
    modalidade: 'Papel + Digital'
  },
  {
    cod_pessoa: '321456',
    nome_subscritor: 'Sofia Rodrigues',
    subscription: 'Subscrição Premium Semestral',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 68.7,
    idade: 33,
    tempo_subscricao: 2.1,
    valor_medio_fatura: 87.5,
    tipo_subscricao: 'Anual',
    modalidade: 'Estudantes'
  },
  {
    cod_pessoa: '176543',
    nome_subscritor: 'André Martins',
    subscription: 'Subscrição Digital Plus',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 79.2,
    idade: 28,
    tempo_subscricao: 0.9,
    valor_medio_fatura: 89.9,
    tipo_subscricao: 'Trimestral',
    modalidade: 'Digital'
  },
  {
    cod_pessoa: '287654',
    nome_subscritor: 'Beatriz Nunes',
    subscription: 'Subscrição Digital Plus',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 72.5,
    idade: 31,
    tempo_subscricao: 1.4,
    valor_medio_fatura: 92.0,
    tipo_subscricao: 'Semestral',
    modalidade: 'Empresas'
  },
  {
    cod_pessoa: '312876',
    nome_subscritor: 'Carlos Lopes',
    subscription: 'Subscrição Premium Anual',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 65.3,
    idade: 47,
    tempo_subscricao: 4.2,
    valor_medio_fatura: 128.5,
    tipo_subscricao: 'Anual',
    modalidade: 'Papel + Digital'
  },
  {
    cod_pessoa: '198765',
    nome_subscritor: 'Diana Mendes',
    subscription: 'Subscrição Premium Anual',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 58.9,
    idade: 39,
    tempo_subscricao: 3.8,
    valor_medio_fatura: 122.0,
    tipo_subscricao: 'Anual',
    modalidade: 'Empresas'
  },
  {
    cod_pessoa: '276543',
    nome_subscritor: 'Eduardo Santos',
    subscription: 'Subscrição Digital',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 82.7,
    idade: 25,
    tempo_subscricao: 0.6,
    valor_medio_fatura: 72.8,
    tipo_subscricao: 'Trimestral',
    modalidade: 'Estudantes'
  },
  {
    cod_pessoa: '354321',
    nome_subscritor: 'Francisca Oliveira',
    subscription: 'Subscrição Digital',
    ano_subscricao: '2023/2024',
    data_extracao: '01/06/2024',
    churn: 74.5,
    idade: 23,
    tempo_subscricao: 0.5,
    valor_medio_fatura: 65.9,
    tipo_subscricao: 'Semestral',
    modalidade: 'Estudantes'
  }
];

// Mock data para tendências mensais com mais variação
export const churnTrendMock: ChurnTrend[] = [
  { month: 'Janeiro 2024', value: 62.7 },
  { month: 'Fevereiro 2024', value: 68.5 },
  { month: 'Março 2024', value: 64.9 },
  { month: 'Abril 2024', value: 71.2 },
  { month: 'Maio 2024', value: 69.5 },
  { month: 'Junho 2024', value: 73.9 }
];

// Mock data para detalhes do subscritor com fatores de probabilidade e valores de tendência variados
export const subscriberDetailMock: SubscriberDetail = {
  subscriberId: '344035',
  churnProbability: 73.91,
  positiveReasons: [
    {
      feature: 'tipo_subscricao',
      description: 'Subscrição Digital',
      value: 'Digital',
      impact: 16.40,
    },
    {
      feature: 'idade',
      description: 'Faixa etária',
      value: 38,
      impact: 12.80,
    },
    {
      feature: 'tempo_subscricao',
      description: 'Tempo de subscrição curto',
      value: '1.2 anos',
      impact: 8.50,
    },
    {
      feature: 'frequencia_acesso',
      description: 'Baixa frequência de acesso',
      value: '2x por semana',
      impact: 7.20,
    },
    {
      feature: 'comportamento_pagamento',
      description: 'Histórico de atrasos',
      value: '30%',
      impact: 5.90,
    }
  ],
  negativeReasons: [
    {
      feature: 'conteudo_exclusivo_visto',
      description: 'Acesso a conteúdo exclusivo',
      value: '75%',
      impact: -9.10,
    },
    {
      feature: 'engajamento_app',
      description: 'Uso frequente do aplicativo',
      value: '5 dias/semana',
      impact: -7.60,
    },
    {
      feature: 'preferencia_categoria',
      description: 'Alta leitura de notícias políticas',
      value: '45%',
      impact: -6.30,
    },
    {
      feature: 'opiniao_enviada',
      description: 'Participação em pesquisas',
      value: 'Sim',
      impact: -3.80,
    },
    {
      feature: 'multidevice',
      description: 'Acesso em múltiplos dispositivos',
      value: '3 dispositivos',
      impact: -2.40,
    }
  ],
  trends: churnTrendMock
};
