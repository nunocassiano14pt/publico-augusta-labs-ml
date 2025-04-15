
// Tipos para as dashboards

export type Status = 'Pendente' | 'Sucesso' | 'Falha';

export type AccessType = 'Utilizador' | 'Editor' | 'Administrador';

export interface Prediction {
  id: string;
  name: string;
  date: string;
  status: Status;
  access: AccessType[];
}

export interface Subscriber {
  cod_pessoa: string;
  nome_assinante: string;
  plano_assinatura: string;
  data_inicio: string;
  data_extracao: string;
  churn: number;
  contentCategoryIds?: string[]; // Categorias de conteúdo preferidas
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

export interface ContentCategory {
  id: string;
  name: string;
  risk: number;
  subscriberCount: number;
  publicationId?: string;
  periodId?: number; // Período de assinatura
}

export interface SubscriptionPeriod {
  id: string;
  period: number;
  publicationId: string;
  risk: number;
  categoryCount: number;
  subscriberCount: number;
  unitCount?: number; // Compatibilidade com AcademicYearView
}

export interface Publication {
  id: string;
  name: string;
  risk: number;
  categoryCount?: number;
  subscriberCount: number;
  unitCount?: number; // Compatibilidade com CourseView
  categories?: ContentCategory[];
  publisherId?: string;
  type?: string;
  subscriptionPeriods?: number[]; // Períodos de assinatura disponíveis
}

export interface Publisher {
  id: string;
  name: string;
  risk: number;
  publicationCount?: number;
  courseCount?: number; // Compatibilidade com SchoolView
  subscriberCount: number;
  studentCount?: number; // Compatibilidade com SchoolView
  publications?: Publication[];
  mediaGroupId?: string;
}

export interface MediaGroup {
  id: string;
  name: string;
  risk: number;
  publisherCount?: number;
  schoolCount?: number; // Compatibilidade com InstitutionView
  subscriberCount: number;
  studentCount?: number; // Compatibilidade com InstitutionView
  publishers?: Publisher[];
}

// Mantendo os tipos antigos para compatibilidade, podemos removê-los depois
export interface Student extends Subscriber {
  // Alias para manter compatibilidade
  courseUnitIds?: string[];
}

export interface StudentDetail extends SubscriberDetail {
  // Alias para manter compatibilidade
  studentId: string;
}

export interface CourseUnit extends ContentCategory {
  // Alias para manter compatibilidade
  courseId?: string;
  academicYear?: number;
  subscriberCount: number; // Adicionado para compatibilidade
}

export interface AcademicYear extends SubscriptionPeriod {
  // Alias para manter compatibilidade
  year: number;
  courseId: string;
  unitCount?: number; 
  subscriberCount: number;
}

export interface Course extends Publication {
  // Alias para manter compatibilidade
  units?: CourseUnit[];
  schoolId?: string;
  unitCount?: number;
  subscriberCount: number;
}

export interface School extends Publisher {
  // Alias para manter compatibilidade
  courses?: Course[];
  institutionId?: string;
  courseCount?: number;
  subscriberCount: number;
}

export interface Institution extends MediaGroup {
  // Alias para manter compatibilidade
  schools?: School[];
  schoolCount?: number;
  subscriberCount: number;
}
