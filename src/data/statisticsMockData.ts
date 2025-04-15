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

// ============ ESCOLA SUPERIOR DE EDUCAÇÃO (ESE) ============
// Licenciaturas
// Educação Básica
export const educacaoBasicaUnitsMock: CourseUnit[] = [
  { id: 'uc1', name: 'Ciências Físico-Naturais I', risk: 73.5, subscriberCount: 28, courseId: 'c1' },
  { id: 'uc2', name: 'Elementos da Matemática', risk: 67.2, subscriberCount: 25, courseId: 'c1' },
  { id: 'uc3', name: 'Comunicação Oral e Escrita', risk: 82.1, subscriberCount: 32, courseId: 'c1' },
  { id: 'uc4', name: 'Psicologia do Desenvolvimento', risk: 58.9, subscriberCount: 30, courseId: 'c1' },
  { id: 'uc5', name: 'História e Geografia de Portugal', risk: 64.3, subscriberCount: 29, courseId: 'c1' }
];

// Comunicação Audiovisual e Multimédia
export const comunicacaoAVUnitsMock: CourseUnit[] = [
  { id: 'uc6', name: 'Introdução ao Cinema Digital', risk: 58.2, subscriberCount: 35, courseId: 'c2' },
  { id: 'uc7', name: 'Técnicas de Animação', risk: 61.5, subscriberCount: 32, courseId: 'c2' },
  { id: 'uc8', name: 'Edição de Vídeo', risk: 55.8, subscriberCount: 38, courseId: 'c2' },
  { id: 'uc9', name: 'Fotografia Digital', risk: 49.2, subscriberCount: 33, courseId: 'c2' },
  { id: 'uc10', name: 'Design Gráfico', risk: 52.7, subscriberCount: 36, courseId: 'c2' }
];

// Animação Cultural
export const animacaoCulturalUnitsMock: CourseUnit[] = [
  { id: 'uc11', name: 'Antropologia Cultural', risk: 62.4, subscriberCount: 25, courseId: 'c3' },
  { id: 'uc12', name: 'Produção de Eventos', risk: 58.7, subscriberCount: 28, courseId: 'c3' },
  { id: 'uc13', name: 'Dinâmicas de Grupo', risk: 52.3, subscriberCount: 24, courseId: 'c3' },
  { id: 'uc14', name: 'Património Cultural', risk: 60.5, subscriberCount: 26, courseId: 'c3' },
  { id: 'uc15', name: 'Gestão Cultural', risk: 65.8, subscriberCount: 27, courseId: 'c3' }
];

// CTeSP
// Apoio à Infância
export const apoioInfanciaUnitsMock: CourseUnit[] = [
  { id: 'uc16', name: 'Desenvolvimento Infantil', risk: 61.2, subscriberCount: 22, courseId: 'c4' },
  { id: 'uc17', name: 'Técnicas Pedagógicas', risk: 58.5, subscriberCount: 24, courseId: 'c4' },
  { id: 'uc18', name: 'Expressão Musical', risk: 52.3, subscriberCount: 25, courseId: 'c4' },
  { id: 'uc19', name: 'Saúde Infantil', risk: 56.9, subscriberCount: 23, courseId: 'c4' },
  { id: 'uc20', name: 'Ética Profissional', risk: 54.2, subscriberCount: 22, courseId: 'c4' }
];

// Produção Audiovisual
export const producaoAVUnitsMock: CourseUnit[] = [
  { id: 'uc21', name: 'Captação de Som', risk: 62.5, subscriberCount: 20, courseId: 'c5' },
  { id: 'uc22', name: 'Iluminação', risk: 59.8, subscriberCount: 19, courseId: 'c5' },
  { id: 'uc23', name: 'Técnicas de Realização', risk: 64.3, subscriberCount: 18, courseId: 'c5' },
  { id: 'uc24', name: 'Pós-produção Vídeo', risk: 58.2, subscriberCount: 21, courseId: 'c5' },
  { id: 'uc25', name: 'Produção Audiovisual', risk: 61.7, subscriberCount: 20, courseId: 'c5' }
];

// Mestrados
// Educação Pré-Escolar
export const educacaoPreEscolarUnitsMock: CourseUnit[] = [
  { id: 'uc26', name: 'Metodologias de Investigação', risk: 69.2, subscriberCount: 15, courseId: 'c6' },
  { id: 'uc27', name: 'Didática em Educação Pré-Escolar', risk: 65.8, subscriberCount: 16, courseId: 'c6' },
  { id: 'uc28', name: 'Desenvolvimento Curricular', risk: 72.3, subscriberCount: 14, courseId: 'c6' },
  { id: 'uc29', name: 'Gestão Educativa', risk: 68.5, subscriberCount: 15, courseId: 'c6' },
  { id: 'uc30', name: 'Práticas Educativas', risk: 66.2, subscriberCount: 16, courseId: 'c6' }
];

// Ensino do 1.º Ciclo do Ensino Básico
export const ensino1CicloUnitsMock: CourseUnit[] = [
  { id: 'uc31', name: 'Didática do Português', risk: 71.5, subscriberCount: 14, courseId: 'c7' },
  { id: 'uc32', name: 'Didática da Matemática', risk: 75.2, subscriberCount: 13, courseId: 'c7' },
  { id: 'uc33', name: 'Necessidades Educativas Especiais', risk: 68.7, subscriberCount: 15, courseId: 'c7' },
  { id: 'uc34', name: 'Metodologias de Ensino', risk: 70.3, subscriberCount: 14, courseId: 'c7' },
  { id: 'uc35', name: 'Prática de Ensino Supervisionada', risk: 72.8, subscriberCount: 13, courseId: 'c7' }
];

// Comunicação e Multimédia
export const comunicacaoMultimediaUnitsMock: CourseUnit[] = [
  { id: 'uc36', name: 'Metodologias de Investigação em Média', risk: 68.3, subscriberCount: 12, courseId: 'c8' },
  { id: 'uc37', name: 'Marketing Digital Avançado', risk: 64.7, subscriberCount: 13, courseId: 'c8' },
  { id: 'uc38', name: 'Design de Interação', risk: 59.5, subscriberCount: 14, courseId: 'c8' },
  { id: 'uc39', name: 'Narrativas Digitais', risk: 62.8, subscriberCount: 13, courseId: 'c8' },
  { id: 'uc40', name: 'Projeto de Comunicação', risk: 66.2, subscriberCount: 12, courseId: 'c8' }
];

// Cursos da ESE
export const eseCoursesMock: Course[] = [
  // Licenciaturas
  { id: 'c1', name: 'Educação Básica', risk: 68.5, unitCount: 5, subscriberCount: 144, units: educacaoBasicaUnitsMock, schoolId: 's1', type: 'licenciatura' },
  { id: 'c2', name: 'Comunicação Audiovisual e Multimédia', risk: 57.2, unitCount: 5, subscriberCount: 174, units: comunicacaoAVUnitsMock, schoolId: 's1', type: 'licenciatura' },
  { id: 'c3', name: 'Animação Cultural', risk: 59.8, unitCount: 5, subscriberCount: 130, units: animacaoCulturalUnitsMock, schoolId: 's1', type: 'licenciatura' },
  // CTeSP
  { id: 'c4', name: 'Apoio à Infância', risk: 56.5, unitCount: 5, subscriberCount: 116, units: apoioInfanciaUnitsMock, schoolId: 's1', type: 'ctesp' },
  { id: 'c5', name: 'Produção Audiovisual', risk: 61.2, unitCount: 5, subscriberCount: 98, units: producaoAVUnitsMock, schoolId: 's1', type: 'ctesp' },
  // Mestrados
  { id: 'c6', name: 'Educação Pré-Escolar', risk: 68.4, unitCount: 5, subscriberCount: 76, units: educacaoPreEscolarUnitsMock, schoolId: 's1', type: 'mestrado' },
  { id: 'c7', name: 'Ensino do 1.º Ciclo do Ensino Básico', risk: 71.7, unitCount: 5, subscriberCount: 69, units: ensino1CicloUnitsMock, schoolId: 's1', type: 'mestrado' },
  { id: 'c8', name: 'Comunicação e Multimédia', risk: 64.2, unitCount: 5, subscriberCount: 64, units: comunicacaoMultimediaUnitsMock, schoolId: 's1', type: 'mestrado' }
];

// ============ ESCOLAS DO IPVC ============
export const schoolsMock: School[] = [
  { id: 's1', name: 'Escola Superior de Educação (ESE)', risk: 61.8, courseCount: 8, subscriberCount: 871, courses: eseCoursesMock, institutionId: 'i1' }
];

// ============ INSTITUTO POLITÉCNICO DE VIANA DO CASTELO (IPVC) ============
export const institutionsMock: Institution[] = [
  { id: 'i1', name: 'Instituto Politécnico de Viana do Castelo (IPVC)', risk: 65.1, schoolCount: 6, subscriberCount: 5462, schools: schoolsMock }
];

// Combine all course units for general access
export const courseUnitsMock: CourseUnit[] = [
  ...educacaoBasicaUnitsMock,
  ...comunicacaoAVUnitsMock,
  ...animacaoCulturalUnitsMock,
  ...apoioInfanciaUnitsMock,
  ...producaoAVUnitsMock,
  ...educacaoPreEscolarUnitsMock,
  ...ensino1CicloUnitsMock,
  ...comunicacaoMultimediaUnitsMock
];

// Combine all courses for general access
export const coursesMock: Course[] = [
  ...eseCoursesMock
];
