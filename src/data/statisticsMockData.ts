
import { 
  PredictionComparison, 
  RiskDistribution, 
  FactorFrequency,
  CourseUnit,
  Course,
  School,
  Institution
} from '../types';

// Dados para o gráfico de comparação previstos vs reais
export const predictionComparisonMock: PredictionComparison[] = [
  { month: 'Jan/2023', predicted: 125, actual: 98 },
  { month: 'Fev/2023', predicted: 134, actual: 103 },
  { month: 'Mar/2023', predicted: 147, actual: 112 },
  { month: 'Abr/2023', predicted: 159, actual: 118 },
  { month: 'Mai/2023', predicted: 168, actual: 122 },
  { month: 'Jun/2023', predicted: 172, actual: 130 },
  { month: 'Jul/2023', predicted: 145, actual: 118 },
  { month: 'Ago/2023', predicted: 132, actual: 105 },
  { month: 'Set/2023', predicted: 154, actual: 119 },
  { month: 'Out/2023', predicted: 163, actual: 125 },
  { month: 'Nov/2023', predicted: 175, actual: 132 },
  { month: 'Dez/2023', predicted: 185, actual: 139 },
  { month: 'Jan/2024', predicted: 192, actual: 145 },
  { month: 'Fev/2024', predicted: 205, actual: 155 },
  { month: 'Mar/2024', predicted: 218, actual: 163 },
  { month: 'Abr/2024', predicted: 225, actual: 171 }
];

// Dados para distribuição de risco
export const riskDistributionMock: RiskDistribution[] = [
  { category: 'Risco Alto (>80%)', count: 32, percentage: 40 },
  { category: 'Risco Médio (60-80%)', count: 25, percentage: 31.25 },
  { category: 'Risco Baixo (<60%)', count: 23, percentage: 28.75 }
];

// Fatores positivos mais frequentes
export const positiveFactorsMock: FactorFrequency[] = [
  { factor: 'Bom desempenho acadêmico', count: 38, percentage: 47.5 },
  { factor: 'Participação em atividades extracurriculares', count: 32, percentage: 40 },
  { factor: 'Presença regular nas aulas', count: 29, percentage: 36.25 },
  { factor: 'Acesso a bolsas de estudo', count: 25, percentage: 31.25 },
  { factor: 'Proximidade da residência', count: 18, percentage: 22.5 }
];

// Fatores negativos mais frequentes
export const negativeFactorsMock: FactorFrequency[] = [
  { factor: 'Baixo desempenho acadêmico', count: 45, percentage: 56.25 },
  { factor: 'Faltas frequentes', count: 38, percentage: 47.5 },
  { factor: 'Dificuldades financeiras', count: 30, percentage: 37.5 },
  { factor: 'Distância da residência', count: 27, percentage: 33.75 },
  { factor: 'Dificuldade com disciplinas específicas', count: 24, percentage: 30 }
];

// Dados de unidades curriculares - Artes e Cinema Digital
export const artesDigitalCourseUnitsMock: CourseUnit[] = [
  { id: 'uc1', name: 'Introdução ao Cinema Digital', risk: 58.2, studentCount: 35 },
  { id: 'uc2', name: 'Técnicas de Animação', risk: 61.5, studentCount: 32 },
  { id: 'uc3', name: 'Edição de Vídeo', risk: 55.8, studentCount: 38 }
];

// Dados de unidades curriculares - Educação Básica
export const eduCourseUnitsMock: CourseUnit[] = [
  { id: 'uc4', name: 'Ciências Físico-Naturais I', risk: 73.5, studentCount: 28 },
  { id: 'uc5', name: 'Elementos da Matemática', risk: 67.2, studentCount: 25 },
  { id: 'uc6', name: 'Comunicação Oral e Escrita', risk: 82.1, studentCount: 32 }
];

// Dados de cursos - Escola Superior de Educação
export const eduCoursesMock: Course[] = [
  { id: 'c1', name: 'Artes e Cinema Digital', risk: 58.7, unitCount: 3, studentCount: 330, units: artesDigitalCourseUnitsMock },
  { id: 'c2', name: 'Artes Plásticas e Tecnologias Artísticas', risk: 57.2, unitCount: 0, studentCount: 0 },
  { id: 'c3', name: 'Educação Básica', risk: 68.5, unitCount: 3, studentCount: 0, units: eduCourseUnitsMock }
];

// Dados de escolas
export const schoolsMock: School[] = [
  { id: 's1', name: 'Escola Superior de Educação', risk: 62.8, courseCount: 3, studentCount: 330, courses: eduCoursesMock }
];

// Dados de instituições
export const institutionsMock: Institution[] = [
  { id: 'i1', name: 'Instituto Politécnico de Viana do Castelo', risk: 61.6, schoolCount: 1, studentCount: 330, schools: schoolsMock }
];

// Combine all course units for general access
export const courseUnitsMock: CourseUnit[] = [
  ...artesDigitalCourseUnitsMock,
  ...eduCourseUnitsMock
];

// Combine all courses for general access
export const coursesMock: Course[] = [
  ...eduCoursesMock
];

