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

// Tipos para as estatísticas
export interface StatisticsData {
  variable: string;
  categories: string[];
  percentages: number[];
  counts: number[];
}

// Novos tipos para as estatísticas
export interface PredictionComparison {
  month: string;
  predicted: number;
  actual: number;
}

export interface RiskDistribution {
  category: string;
  count: number;
  percentage: number;
}

export interface FactorFrequency {
  factor: string;
  count: number;
  percentage: number;
}

export interface CourseUnit {
  id: string;
  name: string;
  risk: number;
  studentCount: number;
}

export interface Course {
  id: string;
  name: string;
  risk: number;
  unitCount: number;
  studentCount: number;
}

export interface School {
  id: string;
  name: string;
  risk: number;
  courseCount: number;
  studentCount: number;
}

export interface Institution {
  id: string;
  name: string;
  risk: number;
  schoolCount: number;
  studentCount: number;
}
