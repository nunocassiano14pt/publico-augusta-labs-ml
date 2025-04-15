
import { ChurnMetrics, AgeGroupChurn, SubscriptionTypeChurn } from '../types';

export const churnMetrics: ChurnMetrics = {
  probabilidade_media: 24.7,
  total_subscritores: 52837,
  churn_ultimo_mes: 6.8,
  melhor_retencao: 'Premium Anual',
  pior_retencao: 'Básico Mensal',
  por_idade: [
    { faixa_etaria: '18-24', probabilidade: 38.5, total_subscritores: 7842 },
    { faixa_etaria: '25-34', probabilidade: 32.1, total_subscritores: 15268 },
    { faixa_etaria: '35-44', probabilidade: 24.3, total_subscritores: 12936 },
    { faixa_etaria: '45-54', probabilidade: 18.7, total_subscritores: 9621 },
    { faixa_etaria: '55-64', probabilidade: 14.2, total_subscritores: 5231 },
    { faixa_etaria: '65+', probabilidade: 12.6, total_subscritores: 1939 }
  ],
  por_tipo: [
    { tipo: 'Básico Mensal', probabilidade: 41.2, total_subscritores: 18762 },
    { tipo: 'Standard Mensal', probabilidade: 27.8, total_subscritores: 14925 },
    { tipo: 'Premium Mensal', probabilidade: 19.6, total_subscritores: 8534 },
    { tipo: 'Básico Anual', probabilidade: 18.2, total_subscritores: 5123 },
    { tipo: 'Standard Anual', probabilidade: 12.8, total_subscritores: 3945 },
    { tipo: 'Premium Anual', probabilidade: 7.5, total_subscritores: 1548 }
  ]
};
