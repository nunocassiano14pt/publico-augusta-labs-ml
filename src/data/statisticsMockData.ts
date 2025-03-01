
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

// Dados de unidades curriculares
export const courseUnitsMock: CourseUnit[] = [
  { id: 'uc1', name: 'Programação I', risk: 73.5, studentCount: 28 },
  { id: 'uc2', name: 'Algoritmos e Estruturas de Dados', risk: 67.2, studentCount: 25 },
  { id: 'uc3', name: 'Cálculo I', risk: 82.1, studentCount: 32 },
  { id: 'uc4', name: 'Estatística', risk: 58.4, studentCount: 26 },
  { id: 'uc5', name: 'Sistemas Operativos', risk: 71.8, studentCount: 24 },
  { id: 'uc6', name: 'Redes de Computadores', risk: 65.3, studentCount: 27 },
  { id: 'uc7', name: 'Bases de Dados', risk: 59.8, studentCount: 29 },
  { id: 'uc8', name: 'Computação Gráfica', risk: 77.3, studentCount: 22 }
];

// Dados de cursos
export const coursesMock: Course[] = [
  { id: 'c1', name: 'Eng. Informática', risk: 68.5, unitCount: 12, studentCount: 150 },
  { id: 'c2', name: 'Eng. Mecânica', risk: 72.1, unitCount: 10, studentCount: 130 },
  { id: 'c3', name: 'Gestão', risk: 58.7, unitCount: 9, studentCount: 145 },
  { id: 'c4', name: 'Contabilidade', risk: 54.3, unitCount: 8, studentCount: 120 },
  { id: 'c5', name: 'Design', risk: 62.8, unitCount: 11, studentCount: 105 },
  { id: 'c6', name: 'Turismo', risk: 57.2, unitCount: 7, studentCount: 95 }
];

// Dados de escolas
export const schoolsMock: School[] = [
  { id: 's1', name: 'Escola Superior de Tecnologia e Gestão', risk: 65.3, courseCount: 8, studentCount: 520 },
  { id: 's2', name: 'Escola Superior de Educação', risk: 59.7, courseCount: 5, studentCount: 380 },
  { id: 's3', name: 'Escola Superior de Ciências Empresariais', risk: 62.1, courseCount: 7, studentCount: 450 },
  { id: 's4', name: 'Escola Superior de Saúde', risk: 53.8, courseCount: 6, studentCount: 400 }
];

// Dados de instituições
export const institutionsMock: Institution[] = [
  { id: 'i1', name: 'Instituto Politécnico de Viana do Castelo', risk: 61.2, schoolCount: 6, studentCount: 1750 }
];
