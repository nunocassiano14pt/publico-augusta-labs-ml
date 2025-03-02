
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

// Dados de unidades curriculares - Escola Superior de Educação
export const eduCourseUnitsMock: CourseUnit[] = [
  { id: 'uc1', name: 'Ciências Físico-Naturais I', risk: 73.5, studentCount: 28 },
  { id: 'uc2', name: 'Elementos da Matemática', risk: 67.2, studentCount: 25 },
  { id: 'uc3', name: 'Comunicação Oral e Escrita', risk: 82.1, studentCount: 32 }
];

// Dados de unidades curriculares - Escola Superior Agrária
export const agroCourseUnitsMock: CourseUnit[] = [
  { id: 'uc4', name: 'Botânica Geral', risk: 58.4, studentCount: 26 },
  { id: 'uc5', name: 'Edafologia', risk: 71.8, studentCount: 24 },
  { id: 'uc6', name: 'Agricultura Geral', risk: 65.3, studentCount: 27 }
];

// Dados de unidades curriculares - Escola Superior de Tecnologia e Gestão
export const techCourseUnitsMock: CourseUnit[] = [
  { id: 'uc7', name: 'Programação', risk: 59.8, studentCount: 29 },
  { id: 'uc8', name: 'Sistemas Operativos', risk: 77.3, studentCount: 22 },
  { id: 'uc9', name: 'Redes de Computadores', risk: 67.5, studentCount: 25 }
];

// Dados de unidades curriculares - Escola Superior de Saúde
export const healthCourseUnitsMock: CourseUnit[] = [
  { id: 'uc10', name: 'Fundamentos de Enfermagem', risk: 63.2, studentCount: 31 },
  { id: 'uc11', name: 'Anatomia e Fisiologia', risk: 68.7, studentCount: 30 },
  { id: 'uc12', name: 'Microbiologia e Parasitologia', risk: 75.4, studentCount: 28 }
];

// Dados de unidades curriculares - Escola Superior de Ciências Empresariais
export const businessCourseUnitsMock: CourseUnit[] = [
  { id: 'uc13', name: 'Contabilidade Financeira', risk: 71.2, studentCount: 26 },
  { id: 'uc14', name: 'Fiscalidade', risk: 78.5, studentCount: 25 },
  { id: 'uc15', name: 'Gestão Financeira', risk: 69.3, studentCount: 28 }
];

// Dados de unidades curriculares - Escola Superior de Desporto e Lazer
export const sportCourseUnitsMock: CourseUnit[] = [
  { id: 'uc16', name: 'Fisiologia do Exercício', risk: 62.8, studentCount: 32 },
  { id: 'uc17', name: 'Biomecânica', risk: 70.5, studentCount: 30 },
  { id: 'uc18', name: 'Treino Desportivo', risk: 65.7, studentCount: 29 }
];

// Combine all course units for general access
export const courseUnitsMock: CourseUnit[] = [
  ...eduCourseUnitsMock,
  ...agroCourseUnitsMock,
  ...techCourseUnitsMock,
  ...healthCourseUnitsMock,
  ...businessCourseUnitsMock,
  ...sportCourseUnitsMock
];

// Dados de cursos - Escola Superior de Educação
export const eduCoursesMock: Course[] = [
  { id: 'c1', name: 'Artes e Cinema Digital', risk: 62.8, unitCount: 8, studentCount: 105 },
  { id: 'c2', name: 'Artes Plásticas e Tecnologias Artísticas', risk: 57.2, unitCount: 7, studentCount: 95 },
  { id: 'c3', name: 'Educação Básica', risk: 68.5, unitCount: 9, studentCount: 130 }
];

// Dados de cursos - Escola Superior Agrária
export const agroCoursesMock: Course[] = [
  { id: 'c4', name: 'Agronomia', risk: 59.7, unitCount: 8, studentCount: 110 },
  { id: 'c5', name: 'Biotecnologia', risk: 62.1, unitCount: 9, studentCount: 95 },
  { id: 'c6', name: 'Enfermagem Veterinária', risk: 65.3, unitCount: 10, studentCount: 120 }
];

// Dados de cursos - Escola Superior de Tecnologia e Gestão
export const techCoursesMock: Course[] = [
  { id: 'c7', name: 'Engenharia Informática', risk: 72.1, unitCount: 10, studentCount: 150 },
  { id: 'c8', name: 'Engenharia Mecânica', risk: 68.5, unitCount: 9, studentCount: 130 },
  { id: 'c9', name: 'Design do Produto', risk: 58.7, unitCount: 8, studentCount: 110 }
];

// Dados de cursos - Escola Superior de Saúde
export const healthCoursesMock: Course[] = [
  { id: 'c10', name: 'Enfermagem', risk: 54.3, unitCount: 12, studentCount: 160 }
];

// Dados de cursos - Escola Superior de Ciências Empresariais
export const businessCoursesMock: Course[] = [
  { id: 'c11', name: 'Contabilidade e Fiscalidade', risk: 65.8, unitCount: 9, studentCount: 120 },
  { id: 'c12', name: 'Gestão da Logística e Distribuição', risk: 61.3, unitCount: 8, studentCount: 105 },
  { id: 'c13', name: 'Marketing e Comunicação Empresarial', risk: 57.9, unitCount: 7, studentCount: 95 }
];

// Dados de cursos - Escola Superior de Desporto e Lazer
export const sportCoursesMock: Course[] = [
  { id: 'c14', name: 'Animação Desportiva e Turismo Ativo', risk: 59.2, unitCount: 8, studentCount: 100 },
  { id: 'c15', name: 'Ciências do Desporto e Lazer', risk: 64.7, unitCount: 9, studentCount: 110 }
];

// Combine all courses for general access
export const coursesMock: Course[] = [
  ...eduCoursesMock,
  ...agroCoursesMock,
  ...techCoursesMock,
  ...healthCoursesMock,
  ...businessCoursesMock,
  ...sportCoursesMock
];

// Dados de escolas
export const schoolsMock: School[] = [
  { id: 's1', name: 'Escola Superior de Educação', risk: 62.8, courseCount: 3, studentCount: 330 },
  { id: 's2', name: 'Escola Superior Agrária', risk: 62.4, courseCount: 3, studentCount: 325 },
  { id: 's3', name: 'Escola Superior de Tecnologia e Gestão', risk: 66.4, courseCount: 3, studentCount: 390 },
  { id: 's4', name: 'Escola Superior de Saúde', risk: 54.3, courseCount: 1, studentCount: 160 },
  { id: 's5', name: 'Escola Superior de Ciências Empresariais', risk: 61.7, courseCount: 3, studentCount: 320 },
  { id: 's6', name: 'Escola Superior de Desporto e Lazer', risk: 62.0, courseCount: 2, studentCount: 210 }
];

// Dados de instituições
export const institutionsMock: Institution[] = [
  { id: 'i1', name: 'Instituto Politécnico de Viana do Castelo', risk: 61.6, schoolCount: 6, studentCount: 1735 }
];
