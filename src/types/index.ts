
// Tipos para as dashboards

export type Status = 'Pendente' | 'Sucesso' | 'Falha';

export type AccessType = 'Utilizador' | 'Docente' | 'Administrador';

export interface Prediction {
  id: string;
  name: string;
  date: string;
  status: Status;
  access: AccessType[];
}

export interface Student {
  cod_pessoa: string;
  nome_aluno: string;
  matricula: string;
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

export interface ChurnTrend {
  month: string;
  value: number;
}

export interface StudentDetail {
  studentId: string;
  churnProbability: number;
  positiveReasons: FeatureImpact[];
  negativeReasons: FeatureImpact[];
  trends: ChurnTrend[];
}

export interface StatisticsData {
  variable: string;
  categories: string[];
  percentages: number[];
  counts: number[];
}
