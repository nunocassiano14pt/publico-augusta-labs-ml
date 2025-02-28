
// Tipos para as dashboards

export type Status = 'Pending' | 'Success' | 'Failed';

export type AccessType = 'User' | 'Faculty' | 'Admin';

export interface Prediction {
  id: string;
  name: string;
  date: string;
  status: Status;
  access: AccessType[];
}

export interface Student {
  cod_pessoa: string;
  cod_estudante: string;
  ano_letivo: string;
  data_extracao: string;
  churn: number;
}

export type FeatureImpact = {
  feature: string;
  description?: string;
  value?: string | number;
  impact: number;
};

export interface StudentDetail {
  studentId: string;
  churnProbability: number;
  positiveReasons: FeatureImpact[];
  negativeReasons: FeatureImpact[];
}

export interface StatisticsData {
  variable: string;
  categories: string[];
  percentages: number[];
  counts: number[];
}
