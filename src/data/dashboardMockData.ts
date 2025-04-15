
import { ChurnMetrics, AgeGroupChurn, SubscriptionTypeChurn } from '../types';

export const churnMetrics: ChurnMetrics = {
  probabilidade_media: 24.7,
  total_subscritores: 52837,
  churn_ultimo_mes: 6.8,
  melhor_retencao: 'Anual',
  pior_retencao: 'Trimestral',
  por_idade: [
    { faixa_etaria: '18-24', probabilidade: 38.5, total_subscritores: 7842 },
    { faixa_etaria: '25-34', probabilidade: 32.1, total_subscritores: 15268 },
    { faixa_etaria: '35-44', probabilidade: 24.3, total_subscritores: 12936 },
    { faixa_etaria: '45-54', probabilidade: 18.7, total_subscritores: 9621 },
    { faixa_etaria: '55-64', probabilidade: 14.2, total_subscritores: 5231 },
    { faixa_etaria: '65+', probabilidade: 12.6, total_subscritores: 1939 }
  ],
  por_tipo: [
    { tipo: 'Trimestral', probabilidade: 41.2, total_subscritores: 18762 },
    { tipo: 'Semestral', probabilidade: 27.8, total_subscritores: 14925 },
    { tipo: 'Anual', probabilidade: 19.6, total_subscritores: 8534 }
  ]
};

export const modalidadeMetrics = {
  por_modalidade: [
    { tipo: 'Digital', probabilidade: 32.4, total_subscritores: 24850 },
    { tipo: 'Papel + Digital', probabilidade: 24.6, total_subscritores: 15982 },
    { tipo: 'Empresas', probabilidade: 18.3, total_subscritores: 8712 },
    { tipo: 'Estudantes', probabilidade: 29.8, total_subscritores: 3293 }
  ]
};
