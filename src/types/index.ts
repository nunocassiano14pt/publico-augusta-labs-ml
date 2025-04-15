
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

export interface Subscriber {
  cod_pessoa: string;
  nome_subscritor: string;
  subscription: string;
  ano_subscricao: string;
  data_extracao: string;
  churn: number;
  idade?: number;
  tempo_subscricao?: number;
  valor_medio_fatura?: number;
  tipo_subscricao?: string;
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

export interface SubscriberDetail {
  subscriberId: string;
  churnProbability: number;
  positiveReasons: FeatureImpact[];
  negativeReasons: FeatureImpact[];
  trends: ChurnTrend[];
}

export interface AgeGroupChurn {
  faixa_etaria: string;
  probabilidade: number;
  total_subscritores: number;
}

export interface SubscriptionTypeChurn {
  tipo: string;
  probabilidade: number;
  total_subscritores: number;
}

export interface ChurnMetrics {
  probabilidade_media: number;
  total_subscritores: number;
  churn_ultimo_mes: number;
  melhor_retencao: string;
  pior_retencao: string;
  por_idade: AgeGroupChurn[];
  por_tipo: SubscriptionTypeChurn[];
}

export interface PredictionComparison {
  month: string;
  predicted: number;
  actual: number;
}

// Statistics types
export interface FactorFrequency {
  factor: string;
  frequency?: number;
  count: number; 
  percentage: number;
}

export interface RiskDistribution {
  category: string;
  count: number;
  percentage: number;
  risk_level?: string;
  student_count?: number;
  color?: string; 
}

export interface Student {
  id: string;
  name: string;
  email: string;
  risk: number;
}

export interface StudentDetail {
  studentId: string;
  riskProbability: number;
  positiveFactors: FactorFrequency[];
  negativeFactors: FactorFrequency[];
  trends: any[];
}

export interface AcademicYear {
  id: string;
  year: number;
  unitCount: number;
  studentCount: number;
  risk: number;
}

export interface CourseUnit {
  id: string;
  code?: string;
  name: string;
  semester?: number;
  year?: number;
  studentCount: number;
  risk: number;
  courseId: string;
}

export interface Course {
  id: string;
  name: string;
  code?: string;
  unitCount: number;
  studentCount: number;
  risk: number;
  units?: CourseUnit[];
  schoolId?: string;
  type?: string;
}

export interface School {
  id: string;
  name: string;
  code?: string;
  courseCount: number;
  studentCount: number;
  risk: number;
  courses?: Course[];
  institutionId?: string;
}

export interface Institution {
  id: string;
  name: string;
  code?: string;
  schoolCount: number;
  studentCount: number;
  risk: number;
  schools?: School[];
}
