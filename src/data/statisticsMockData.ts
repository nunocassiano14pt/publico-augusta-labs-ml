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
  { category: 'Risco Alto (>80%)', count: 32, percentage: 40, risk_level: 'Alto', student_count: 32 },
  { category: 'Risco Médio (60-80%)', count: 25, percentage: 31.25, risk_level: 'Médio', student_count: 25 },
  { category: 'Risco Baixo (<60%)', count: 23, percentage: 28.75, risk_level: 'Baixo', student_count: 23 }
];

// Fatores positivos mais frequentes
export const positiveFactorsMock: FactorFrequency[] = [
  { factor: 'Bom desempenho acadêmico', count: 38, percentage: 47.5, frequency: 38 },
  { factor: 'Participação em atividades extracurriculares', count: 32, percentage: 40, frequency: 32 },
  { factor: 'Presença regular nas aulas', count: 29, percentage: 36.25, frequency: 29 },
  { factor: 'Acesso a bolsas de estudo', count: 25, percentage: 31.25, frequency: 25 },
  { factor: 'Proximidade da residência', count: 18, percentage: 22.5, frequency: 18 }
];

// Fatores negativos mais frequentes
export const negativeFactorsMock: FactorFrequency[] = [
  { factor: 'Baixo desempenho acadêmico', count: 45, percentage: 56.25, frequency: 45 },
  { factor: 'Faltas frequentes', count: 38, percentage: 47.5, frequency: 38 },
  { factor: 'Dificuldades financeiras', count: 30, percentage: 37.5, frequency: 30 },
  { factor: 'Distância da residência', count: 27, percentage: 33.75, frequency: 27 },
  { factor: 'Dificuldade com disciplinas específicas', count: 24, percentage: 30, frequency: 24 }
];

// ============ ESCOLA SUPERIOR DE EDUCAÇÃO (ESE) ============
// Licenciaturas
// Educação Básica
export const educacaoBasicaUnitsMock: CourseUnit[] = [
  { id: 'uc1', name: 'Ciências Físico-Naturais I', risk: 73.5, studentCount: 28, courseId: 'c1' },
  { id: 'uc2', name: 'Elementos da Matemática', risk: 67.2, studentCount: 25, courseId: 'c1' },
  { id: 'uc3', name: 'Comunicação Oral e Escrita', risk: 82.1, studentCount: 32, courseId: 'c1' },
  { id: 'uc4', name: 'Psicologia do Desenvolvimento', risk: 58.9, studentCount: 30, courseId: 'c1' },
  { id: 'uc5', name: 'História e Geografia de Portugal', risk: 64.3, studentCount: 29, courseId: 'c1' }
];

// Comunicação Audiovisual e Multimédia
export const comunicacaoAVUnitsMock: CourseUnit[] = [
  { id: 'uc6', name: 'Introdução ao Cinema Digital', risk: 58.2, studentCount: 35, courseId: 'c2' },
  { id: 'uc7', name: 'Técnicas de Animação', risk: 61.5, studentCount: 32, courseId: 'c2' },
  { id: 'uc8', name: 'Edição de Vídeo', risk: 55.8, studentCount: 38, courseId: 'c2' },
  { id: 'uc9', name: 'Fotografia Digital', risk: 49.2, studentCount: 33, courseId: 'c2' },
  { id: 'uc10', name: 'Design Gráfico', risk: 52.7, studentCount: 36, courseId: 'c2' }
];

// Animação Cultural
export const animacaoCulturalUnitsMock: CourseUnit[] = [
  { id: 'uc11', name: 'Antropologia Cultural', risk: 62.4, studentCount: 25, courseId: 'c3' },
  { id: 'uc12', name: 'Produção de Eventos', risk: 58.7, studentCount: 28, courseId: 'c3' },
  { id: 'uc13', name: 'Dinâmicas de Grupo', risk: 52.3, studentCount: 24, courseId: 'c3' },
  { id: 'uc14', name: 'Património Cultural', risk: 60.5, studentCount: 26, courseId: 'c3' },
  { id: 'uc15', name: 'Gestão Cultural', risk: 65.8, studentCount: 27, courseId: 'c3' }
];

// CTeSP
// Apoio à Infância
export const apoioInfanciaUnitsMock: CourseUnit[] = [
  { id: 'uc16', name: 'Desenvolvimento Infantil', risk: 61.2, studentCount: 22, courseId: 'c4' },
  { id: 'uc17', name: 'Técnicas Pedagógicas', risk: 58.5, studentCount: 24, courseId: 'c4' },
  { id: 'uc18', name: 'Expressão Musical', risk: 52.3, studentCount: 25, courseId: 'c4' },
  { id: 'uc19', name: 'Saúde Infantil', risk: 56.9, studentCount: 23, courseId: 'c4' },
  { id: 'uc20', name: 'Ética Profissional', risk: 54.2, studentCount: 22, courseId: 'c4' }
];

// Produção Audiovisual
export const producaoAVUnitsMock: CourseUnit[] = [
  { id: 'uc21', name: 'Captação de Som', risk: 62.5, studentCount: 20, courseId: 'c5' },
  { id: 'uc22', name: 'Iluminação', risk: 59.8, studentCount: 19, courseId: 'c5' },
  { id: 'uc23', name: 'Técnicas de Realização', risk: 64.3, studentCount: 18, courseId: 'c5' },
  { id: 'uc24', name: 'Pós-produção Vídeo', risk: 58.2, studentCount: 21, courseId: 'c5' },
  { id: 'uc25', name: 'Produção Audiovisual', risk: 61.7, studentCount: 20, courseId: 'c5' }
];

// Mestrados
// Educação Pré-Escolar
export const educacaoPreEscolarUnitsMock: CourseUnit[] = [
  { id: 'uc26', name: 'Metodologias de Investigação', risk: 69.2, studentCount: 15, courseId: 'c6' },
  { id: 'uc27', name: 'Didática em Educação Pré-Escolar', risk: 65.8, studentCount: 16, courseId: 'c6' },
  { id: 'uc28', name: 'Desenvolvimento Curricular', risk: 72.3, studentCount: 14, courseId: 'c6' },
  { id: 'uc29', name: 'Gestão Educativa', risk: 68.5, studentCount: 15, courseId: 'c6' },
  { id: 'uc30', name: 'Práticas Educativas', risk: 66.2, studentCount: 16, courseId: 'c6' }
];

// Ensino do 1.º Ciclo do Ensino Básico
export const ensino1CicloUnitsMock: CourseUnit[] = [
  { id: 'uc31', name: 'Didática do Português', risk: 71.5, studentCount: 14, courseId: 'c7' },
  { id: 'uc32', name: 'Didática da Matemática', risk: 75.2, studentCount: 13, courseId: 'c7' },
  { id: 'uc33', name: 'Necessidades Educativas Especiais', risk: 68.7, studentCount: 15, courseId: 'c7' },
  { id: 'uc34', name: 'Metodologias de Ensino', risk: 70.3, studentCount: 14, courseId: 'c7' },
  { id: 'uc35', name: 'Prática de Ensino Supervisionada', risk: 72.8, studentCount: 13, courseId: 'c7' }
];

// Comunicação e Multimédia
export const comunicacaoMultimediaUnitsMock: CourseUnit[] = [
  { id: 'uc36', name: 'Metodologias de Investigação em Média', risk: 68.3, studentCount: 12, courseId: 'c8' },
  { id: 'uc37', name: 'Marketing Digital Avançado', risk: 64.7, studentCount: 13, courseId: 'c8' },
  { id: 'uc38', name: 'Design de Interação', risk: 59.5, studentCount: 14, courseId: 'c8' },
  { id: 'uc39', name: 'Narrativas Digitais', risk: 62.8, studentCount: 13, courseId: 'c8' },
  { id: 'uc40', name: 'Projeto de Comunicação', risk: 66.2, studentCount: 12, courseId: 'c8' }
];

// Cursos da ESE
export const eseCoursesMock: Course[] = [
  // Licenciaturas
  { id: 'c1', name: 'Educação Básica', risk: 68.5, unitCount: 5, studentCount: 144, units: educacaoBasicaUnitsMock, schoolId: 's1', type: 'licenciatura' },
  { id: 'c2', name: 'Comunicação Audiovisual e Multimédia', risk: 57.2, unitCount: 5, studentCount: 174, units: comunicacaoAVUnitsMock, schoolId: 's1', type: 'licenciatura' },
  { id: 'c3', name: 'Animação Cultural', risk: 59.8, unitCount: 5, studentCount: 130, units: animacaoCulturalUnitsMock, schoolId: 's1', type: 'licenciatura' },
  // CTeSP
  { id: 'c4', name: 'Apoio à Infância', risk: 56.5, unitCount: 5, studentCount: 116, units: apoioInfanciaUnitsMock, schoolId: 's1', type: 'ctesp' },
  { id: 'c5', name: 'Produção Audiovisual', risk: 61.2, unitCount: 5, studentCount: 98, units: producaoAVUnitsMock, schoolId: 's1', type: 'ctesp' },
  // Mestrados
  { id: 'c6', name: 'Educação Pré-Escolar', risk: 68.4, unitCount: 5, studentCount: 76, units: educacaoPreEscolarUnitsMock, schoolId: 's1', type: 'mestrado' },
  { id: 'c7', name: 'Ensino do 1.º Ciclo do Ensino Básico', risk: 71.7, unitCount: 5, studentCount: 69, units: ensino1CicloUnitsMock, schoolId: 's1', type: 'mestrado' },
  { id: 'c8', name: 'Comunicação e Multimédia', risk: 64.2, unitCount: 5, studentCount: 64, units: comunicacaoMultimediaUnitsMock, schoolId: 's1', type: 'mestrado' }
];

// ============ ESCOLA SUPERIOR AGRÁRIA (ESA) ============
// Licenciaturas
// Engenharia Agronómica
export const engenhariaAgronomicaUnitsMock: CourseUnit[] = [
  { id: 'uc41', name: 'Solos e Fertilidade', risk: 70.2, studentCount: 22, courseId: 'c9' },
  { id: 'uc42', name: 'Botânica', risk: 65.8, studentCount: 24, courseId: 'c9' },
  { id: 'uc43', name: 'Produção Vegetal', risk: 62.3, studentCount: 23, courseId: 'c9' },
  { id: 'uc44', name: 'Agrometeorologia', risk: 71.5, studentCount: 21, courseId: 'c9' },
  { id: 'uc45', name: 'Fitotecnia', risk: 68.7, studentCount: 22, courseId: 'c9' }
];

// Engenharia Zootécnica
export const engenhariaZootecnicaUnitsMock: CourseUnit[] = [
  { id: 'uc46', name: 'Anatomia Animal', risk: 73.1, studentCount: 20, courseId: 'c10' },
  { id: 'uc47', name: 'Nutrição Animal', risk: 68.5, studentCount: 22, courseId: 'c10' },
  { id: 'uc48', name: 'Reprodução Animal', risk: 75.2, studentCount: 19, courseId: 'c10' },
  { id: 'uc49', name: 'Melhoramento Genético', risk: 72.8, studentCount: 21, courseId: 'c10' },
  { id: 'uc50', name: 'Sistemas de Produção Animal', risk: 69.3, studentCount: 23, courseId: 'c10' }
];

// Engenharia Alimentar
export const engenhariaAlimentarUnitsMock: CourseUnit[] = [
  { id: 'uc51', name: 'Microbiologia Alimentar', risk: 67.9, studentCount: 25, courseId: 'c11' },
  { id: 'uc52', name: 'Tecnologia de Alimentos', risk: 63.2, studentCount: 28, courseId: 'c11' },
  { id: 'uc53', name: 'Análise Sensorial', risk: 58.7, studentCount: 30, courseId: 'c11' },
  { id: 'uc54', name: 'Controlo de Qualidade', risk: 61.5, studentCount: 29, courseId: 'c11' },
  { id: 'uc55', name: 'Processamento de Alimentos', risk: 65.3, studentCount: 27, courseId: 'c11' }
];

// CTeSP
// Produção Agrícola
export const producaoAgricolaUnitsMock: CourseUnit[] = [
  { id: 'uc56', name: 'Culturas Arvenses', risk: 64.2, studentCount: 18, courseId: 'c12' },
  { id: 'uc57', name: 'Horticultura', risk: 60.5, studentCount: 20, courseId: 'c12' },
  { id: 'uc58', name: 'Viticultura', risk: 67.8, studentCount: 17, courseId: 'c12' },
  { id: 'uc59', name: 'Proteção das Plantas', risk: 63.1, studentCount: 19, courseId: 'c12' },
  { id: 'uc60', name: 'Mecanização Agrícola', risk: 65.9, studentCount: 18, courseId: 'c12' }
];

// Qualidade e Segurança Alimentar
export const qualidadeAlimentarUnitsMock: CourseUnit[] = [
  { id: 'uc61', name: 'Segurança Alimentar', risk: 62.8, studentCount: 22, courseId: 'c13' },
  { id: 'uc62', name: 'Sistemas de Gestão da Qualidade', risk: 59.4, studentCount: 24, courseId: 'c13' },
  { id: 'uc63', name: 'Análise de Alimentos', risk: 65.7, studentCount: 21, courseId: 'c13' },
  { id: 'uc64', name: 'Higiene na Indústria Alimentar', risk: 58.3, studentCount: 25, courseId: 'c13' },
  { id: 'uc65', name: 'Rotulagem Alimentar', risk: 57.6, studentCount: 23, courseId: 'c13' }
];

// Mestrados
// Agricultura Biológica
export const agriculturaBiologicaUnitsMock: CourseUnit[] = [
  { id: 'uc66', name: 'Fundamentos de Agricultura Biológica', risk: 69.5, studentCount: 14, courseId: 'c14' },
  { id: 'uc67', name: 'Fertilização Biológica', risk: 72.3, studentCount: 13, courseId: 'c14' },
  { id: 'uc68', name: 'Proteção Biológica', risk: 70.8, studentCount: 14, courseId: 'c14' },
  { id: 'uc69', name: 'Certificação em Agricultura Biológica', risk: 67.2, studentCount: 15, courseId: 'c14' },
  { id: 'uc70', name: 'Mercados de Produtos Biológicos', risk: 65.9, studentCount: 15, courseId: 'c14' }
];

// Tecnologia e Ciência Alimentar
export const tecnologiaAlimentarUnitsMock: CourseUnit[] = [
  { id: 'uc71', name: 'Biotecnologia Alimentar', risk: 74.2, studentCount: 12, courseId: 'c15' },
  { id: 'uc72', name: 'Desenvolvimento de Novos Produtos', risk: 70.5, studentCount: 13, courseId: 'c15' },
  { id: 'uc73', name: 'Embalagens Alimentares', risk: 68.7, studentCount: 13, courseId: 'c15' },
  { id: 'uc74', name: 'Alimentos Funcionais', risk: 71.9, studentCount: 12, courseId: 'c15' },
  { id: 'uc75', name: 'Segurança e Inovação Alimentar', risk: 69.4, studentCount: 14, courseId: 'c15' }
];

// Cursos da ESA
export const esaCoursesMock: Course[] = [
  // Licenciaturas
  { id: 'c9', name: 'Engenharia Agronómica', risk: 67.8, unitCount: 5, studentCount: 112, units: engenhariaAgronomicaUnitsMock, schoolId: 's2', type: 'licenciatura' },
  { id: 'c10', name: 'Engenharia Zootécnica', risk: 71.2, unitCount: 5, studentCount: 105, units: engenhariaZootecnicaUnitsMock, schoolId: 's2', type: 'licenciatura' },
  { id: 'c11', name: 'Engenharia Alimentar', risk: 63.5, unitCount: 5, studentCount: 139, units: engenhariaAlimentarUnitsMock, schoolId: 's2', type: 'licenciatura' },
  // CTeSP
  { id: 'c12', name: 'Produção Agrícola', risk: 64.3, unitCount: 5, studentCount: 92, units: producaoAgricolaUnitsMock, schoolId: 's2', type: 'ctesp' },
  { id: 'c13', name: 'Qualidade e Segurança Alimentar', risk: 60.7, unitCount: 5, studentCount: 115, units: qualidadeAlimentarUnitsMock, schoolId: 's2', type: 'ctesp' },
  // Mestrados
  { id: 'c14', name: 'Agricultura Biológica', risk: 69.1, unitCount: 5, studentCount: 71, units: agriculturaBiologicaUnitsMock, schoolId: 's2', type: 'mestrado' },
  { id: 'c15', name: 'Tecnologia e Ciência Alimentar', risk: 70.8, unitCount: 5, studentCount: 64, units: tecnologiaAlimentarUnitsMock, schoolId: 's2', type: 'mestrado' }
];

// ============ ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO (ESTG) ============
// Licenciaturas
// Engenharia Informática
export const engenhariaInformaticaUnitsMock: CourseUnit[] = [
  { id: 'uc76', name: 'Programação', risk: 72.5, studentCount: 45, courseId: 'c16' },
  { id: 'uc77', name: 'Estruturas de Dados', risk: 78.3, studentCount: 42, courseId: 'c16' },
  { id: 'uc78', name: 'Bases de Dados', risk: 68.7, studentCount: 47, courseId: 'c16' },
  { id: 'uc79', name: 'Redes de Computadores', risk: 70.2, studentCount: 44, courseId: 'c16' },
  { id: 'uc80', name: 'Inteligência Artificial', risk: 75.1, studentCount: 40, courseId: 'c16' }
];

// Engenharia Civil
export const engenhariaCivilUnitsMock: CourseUnit[] = [
  { id: 'uc81', name: 'Mecânica', risk: 75.8, studentCount: 30, courseId: 'c17' },
  { id: 'uc82', name: 'Materiais de Construção', risk: 70.2, studentCount: 32, courseId: 'c17' },
  { id: 'uc83', name: 'Estruturas', risk: 79.5, studentCount: 28, courseId: 'c17' },
  { id: 'uc84', name: 'Hidráulica', risk: 73.7, studentCount: 31, courseId: 'c17' },
  { id: 'uc85', name: 'Topografia', risk: 68.4, studentCount: 33, courseId: 'c17' }
];

// Design de Produto
export const designProdutoUnitsMock: CourseUnit[] = [
  { id: 'uc86', name: 'Desenho Técnico', risk: 61.3, studentCount: 35, courseId: 'c18' },
  { id: 'uc87', name: 'Materiais e Processos', risk: 65.8, studentCount: 32, courseId: 'c18' },
  { id: 'uc88', name: 'Modelação 3D', risk: 58.7, studentCount: 37, courseId: 'c18' },
  { id: 'uc89', name: 'Design de Interação', risk: 56.2, studentCount: 38, courseId: 'c18' },
  { id: 'uc90', name: 'Prototipagem', risk: 62.5, studentCount: 34, courseId: 'c18' }
];

// CTeSP
// Desenvolvimento de Software
export const desenvolvimentoSWUnitsMock: CourseUnit[] = [
  { id: 'uc91', name: 'Algoritmos', risk: 76.4, studentCount: 28, courseId: 'c19' },
  { id: 'uc92', name: 'Desenvolvimento Web', risk: 71.2, studentCount: 30, courseId: 'c19' },
  { id: 'uc93', name: 'Sistemas Operativos', risk: 68.5, studentCount: 29, courseId: 'c19' },
  { id: 'uc94', name: 'Desenvolvimento Mobile', risk: 73.8, studentCount: 27, courseId: 'c19' },
  { id: 'uc95', name: 'Testes de Software', risk: 69.3, studentCount: 29, courseId: 'c19' }
];

// Construção Civil
export const construcaoCivilUnitsMock: CourseUnit[] = [
  { id: 'uc96', name: 'Desenho de Construção', risk: 69.7, studentCount: 24, courseId: 'c20' },
  { id: 'uc97', name: 'Técnicas de Construção', risk: 73.5, studentCount: 22, courseId: 'c20' },
  { id: 'uc98', name: 'Orçamentação', risk: 68.2, studentCount: 25, courseId: 'c20' },
  { id: 'uc99', name: 'Segurança em Obra', risk: 65.9, studentCount: 26, courseId: 'c20' },
  { id: 'uc100', name: 'Gestão de Obras', risk: 71.3, studentCount: 23, courseId: 'c20' }
];

// Mestrados
// Engenharia de Redes e Sistemas Informáticos
export const engenhariaRedesUnitsMock: CourseUnit[] = [
  { id: 'uc101', name: 'Segurança de Redes', risk: 76.8, studentCount: 15, courseId: 'c21' },
  { id: 'uc102', name: 'Computação em Nuvem', risk: 72.4, studentCount: 16, courseId: 'c21' },
  { id: 'uc103', name: 'Virtualização', risk: 74.5, studentCount: 15, courseId: 'c21' },
  { id: 'uc104', name: 'Sistemas Distribuídos', risk: 77.2, studentCount: 14, courseId: 'c21' },
  { id: 'uc105', name: 'Gestão de Redes', risk: 73.6, studentCount: 16, courseId: 'c21' }
];

// Engenharia de Produção
export const engenhariaProducaoUnitsMock: CourseUnit[] = [
  { id: 'uc106', name: 'Gestão de Operações', risk: 71.5, studentCount: 13, courseId: 'c22' },
  { id: 'uc107', name: 'Logística Industrial', risk: 69.2, studentCount: 14, courseId: 'c22' },
  { id: 'uc108', name: 'Simulação Industrial', risk: 72.8, studentCount: 12, courseId: 'c22' },
  { id: 'uc109', name: 'Gestão da Qualidade', risk: 68.4, studentCount: 15, courseId: 'c22' },
  { id: 'uc110', name: 'Indústria 4.0', risk: 73.9, studentCount: 13, courseId: 'c22' }
];

// Cursos da ESTG
export const estgCoursesMock: Course[] = [
  // Licenciaturas
  { id: 'c16', name: 'Engenharia Informática', risk: 73.5, unitCount: 5, studentCount: 218, units: engenhariaInformaticaUnitsMock, schoolId: 's3', type: 'licenciatura' },
  { id: 'c17', name: 'Engenharia Civil', risk: 73.9, unitCount: 5, studentCount: 154, units: engenhariaCivilUnitsMock, schoolId: 's3', type: 'licenciatura' },
  { id: 'c18', name: 'Design de Produto', risk: 60.9, unitCount: 5, studentCount: 176, units: designProdutoUnitsMock, schoolId: 's3', type: 'licenciatura' },
  // CTeSP
  { id: 'c19', name: 'Desenvolvimento de Software', risk: 71.8, unitCount: 5, studentCount: 143, units: desenvolvimentoSWUnitsMock, schoolId: 's3', type: 'ctesp' },
  { id: 'c20', name: 'Construção Civil', risk: 69.7, unitCount: 5, studentCount: 120, units: construcaoCivilUnitsMock, schoolId: 's3', type: 'ctesp' },
  // Mestrados
  { id: 'c21', name: 'Engenharia de Redes e Sistemas Informáticos', risk: 74.9, unitCount: 5, studentCount: 76, units: engenhariaRedesUnitsMock, schoolId: 's3', type: 'mestrado' },
  { id: 'c22', name: 'Engenharia de Produção', risk: 71.2, unitCount: 5, studentCount: 67, units: engenhariaProducaoUnitsMock, schoolId: 's3', type: 'mestrado' }
];

// ============ ESCOLA SUPERIOR DE SAÚDE (ESS) ============
// Licenciaturas
// Enfermagem
export const enfermagemUnitsMock: CourseUnit[] = [
  { id: 'uc111', name: 'Anatomia e Fisiologia', risk: 65.2, studentCount: 48, courseId: 'c23' },
  { id: 'uc112', name: 'Fundamentos de Enfermagem', risk: 58.7, studentCount: 52, courseId: 'c23' },
  { id: 'uc113', name: 'Farmacologia', risk: 67.3, studentCount: 47, courseId: 'c23' },
  { id: 'uc114', name: 'Bioética', risk: 54.8, studentCount: 55, courseId: 'c23' },
  { id: 'uc115', name: 'Enfermagem Médico-Cirúrgica', risk: 62.5, studentCount: 50, courseId: 'c23' }
];

// Fisioterapia
export const fisioterapiaUnitsMock: CourseUnit[] = [
  { id: 'uc116', name: 'Biomecânica', risk: 70.1, studentCount: 38, courseId: 'c24' },
  { id: 'uc117', name: 'Técnicas de Mobilização', risk: 65.8, studentCount: 40, courseId: 'c24' },
  { id: 'uc118', name: 'Fisiologia do Exercício', risk: 67.2, studentCount: 39, courseId: 'c24' },
  { id: 'uc119', name: 'Reabilitação Neurológica', risk: 72.5, studentCount: 37, courseId: 'c24' },
  { id: 'uc120', name: 'Massoterapia', risk: 59.8, studentCount: 42, courseId: 'c24' }
];

// CTeSP
// Cuidados Geriátricos
export const cuidadosGeriatricosUnitsMock: CourseUnit[] = [
  { id: 'uc121', name: 'Saúde do Idoso', risk: 63.5, studentCount: 25, courseId: 'c25' },
  { id: 'uc122', name: 'Técnicas de Mobilização', risk: 58.7, studentCount: 27, courseId: 'c25' },
  { id: 'uc123', name: 'Nutrição Geriátrica', risk: 61.2, studentCount: 26, courseId: 'c25' },
  { id: 'uc124', name: 'Psicologia do Envelhecimento', risk: 57.8, studentCount: 28, courseId: 'c25' },
  { id: 'uc125', name: 'Cuidados Continuados', risk: 60.3, studentCount: 26, courseId: 'c25' }
];

// Tecnologias da Saúde
export const tecnologiasSaudeUnitsMock: CourseUnit[] = [
  { id: 'uc126', name: 'Equipamentos Médicos', risk: 69.2, studentCount: 22, courseId: 'c26' },
  { id: 'uc127', name: 'Biossegurança', risk: 64.5, studentCount: 24, courseId: 'c26' },
  { id: 'uc128', name: 'Técnicas Laboratoriais', risk: 67.8, studentCount: 23, courseId: 'c26' },
  { id: 'uc129', name: 'Imagiologia', risk: 72.3, studentCount: 21, courseId: 'c26' },
  { id: 'uc130', name: 'Análises Clínicas', risk: 68.9, studentCount: 22, courseId: 'c26' }
];

// Mestrados
// Enfermagem Comunitária
export const enfermagemComunitariaUnitsMock: CourseUnit[] = [
  { id: 'uc131', name: 'Saúde Pública', risk: 64.2, studentCount: 18, courseId: 'c27' },
  { id: 'uc132', name: 'Promoção da Saúde', risk: 59.7, studentCount: 19, courseId: 'c27' },
  { id: 'uc133', name: 'Epidemiologia', risk: 65.8, studentCount: 17, courseId: 'c27' },
  { id: 'uc134', name: 'Enfermagem de Saúde Familiar', risk: 62.3, studentCount: 18, courseId: 'c27' },
  { id: 'uc135', name: 'Gestão em Saúde Comunitária', risk: 61.5, studentCount: 19, courseId: 'c27' }
];

// Fisioterapia em Condições Músculo-Esqueléticas
export const fisioterapiaMusculoUnitsMock: CourseUnit[] = [
  { id: 'uc136', name: 'Terapia Manual', risk: 68.3, studentCount: 15, courseId: 'c28' },
  { id: 'uc137', name: 'Reabilitação Desportiva', risk: 72.5, studentCount: 14, courseId: 'c28' },
  { id: 'uc138', name: 'Avaliação Funcional', risk: 69.7, studentCount: 15, courseId: 'c28' },
  { id: 'uc139', name: 'Biomecânica Avançada', risk: 74.2, studentCount: 13, courseId: 'c28' },
  { id: 'uc140', name: 'Técnicas de Intervenção', risk: 70.8, studentCount: 14, courseId: 'c28' }
];

// Cursos da ESS
export const essCoursesMock: Course[] = [
  // Licenciaturas
  { id: 'c23', name: 'Enfermagem', risk: 62.3, unitCount: 5, studentCount: 252, units: enfermagemUnitsMock, schoolId: 's4', type: 'licenciatura' },
  { id: 'c24', name: 'Fisioterapia', risk: 67.5, unitCount: 5, studentCount: 196, units: fisioterapiaUnitsMock, schoolId: 's4', type: 'licenciatura' },
  // CTeSP
  { id: 'c25', name: 'Cuidados Geriátricos', risk: 60.3, unitCount: 5, studentCount: 132, units: cuidadosGeriatricosUnitsMock, schoolId: 's4', type: 'ctesp' },
  { id: 'c26', name: 'Tecnologias da Saúde', risk: 68.5, unitCount: 5, studentCount: 112, units: tecnologiasSaudeUnitsMock, schoolId: 's4', type: 'ctesp' },
  // Mestrados
  { id: 'c27', name: 'Enfermagem Comunitária', risk: 62.7, unitCount: 5, studentCount: 91, units: enfermagemComunitariaUnitsMock, schoolId: 's4', type: 'mestrado' },
  { id: 'c28', name: 'Fisioterapia em Condições Músculo-Esqueléticas', risk: 71.1, unitCount: 5, studentCount: 71, units: fisioterapiaMusculoUnitsMock, schoolId: 's4', type: 'mestrado' }
];

// ============ ESCOLA SUPERIOR DE CIÊNCIAS EMPRESARIAIS (ESCE) ============
// Licenciaturas
// Contabilidade e Fiscalidade
export const contabilidadeUnitsMock: CourseUnit[] = [
  { id: 'uc141', name: 'Contabilidade Geral', risk: 68.7, studentCount: 32, courseId: 'c29' },
  { id: 'uc142', name: 'Fiscalidade', risk: 73.2, studentCount: 30, courseId: 'c29' },
  { id: 'uc143', name: 'Auditoria', risk: 69.5, studentCount: 31, courseId: 'c29' },
  { id: 'uc144', name: 'Análise Financeira', risk: 71.8, studentCount: 29, courseId: 'c29' },
  { id: 'uc145', name: 'Direito Fiscal', risk: 75.3, studentCount: 28, courseId: 'c29' }
];

// Gestão da Distribuição e Logística
export const logisticaUnitsMock: CourseUnit[] = [
  { id: 'uc146', name: 'Gestão de Operações', risk: 64.5, studentCount: 34, courseId: 'c30' },
  { id: 'uc147', name: 'Sistemas de Informação', risk: 68.2, studentCount: 32, courseId: 'c30' },
  { id: 'uc148', name: 'Gestão de Stocks', risk: 66.7, studentCount: 33, courseId: 'c30' },
  { id: 'uc149', name: 'Distribuição e Transportes', risk: 61.9, studentCount: 35, courseId: 'c30' },
  { id: 'uc150', name: 'Comércio Internacional', risk: 67.3, studentCount: 31, courseId: 'c30' }
];

// Marketing e Comunicação Empresarial
export const marketingUnitsMock: CourseUnit[] = [
  { id: 'uc151', name: 'Marketing Digital', risk: 59.8, studentCount: 40, courseId: 'c31' },
  { id: 'uc152', name: 'Comportamento do Consumidor', risk: 62.3, studentCount: 38, courseId: 'c31' },
  { id: 'uc153', name: 'Pesquisa de Mercado', risk: 65.7, studentCount: 36, courseId: 'c31' },
  { id: 'uc154', name: 'Publicidade', risk: 57.2, studentCount: 42, courseId: 'c31' },
  { id: 'uc155', name: 'Branding', risk: 60.5, studentCount: 39, courseId: 'c31' }
];

// Organização e Gestão Empresariais
export const gestaoEmpresarialUnitsMock: CourseUnit[] = [
  { id: 'uc156', name: 'Gestão Estratégica', risk: 66.8, studentCount: 36, courseId: 'c32' },
  { id: 'uc157', name: 'Recursos Humanos', risk: 62.4, studentCount: 38, courseId: 'c32' },
  { id: 'uc158', name: 'Economia', risk: 69.7, studentCount: 35, courseId: 'c32' },
  { id: 'uc159', name: 'Gestão de Projetos', risk: 64.2, studentCount: 37, courseId: 'c32' },
  { id: 'uc160', name: 'Estatística', risk: 72.1, studentCount: 34, courseId: 'c32' }
];

// CTeSP
// Contabilidade e Gestão para PME
export const contabilidadePMEUnitsMock: CourseUnit[] = [
  { id: 'uc161', name: 'Contabilidade Financeira', risk: 70.2, studentCount: 25, courseId: 'c33' },
  { id: 'uc162', name: 'Gestão de PME', risk: 66.8, studentCount: 27, courseId: 'c33' },
  { id: 'uc163', name: 'Obrigações Fiscais', risk: 72.5, studentCount: 24, courseId: 'c33' },
  { id: 'uc164', name: 'Análise de Investimentos', risk: 68.3, studentCount: 26, courseId: 'c33' },
  { id: 'uc165', name: 'Software de Gestão', risk: 65.7, studentCount: 28, courseId: 'c33' }
];

// Gestão da Qualidade
export const gestaoQualidadeUnitsMock: CourseUnit[] = [
  { id: 'uc166', name: 'Sistemas de Gestão da Qualidade', risk: 65.3, studentCount: 22, courseId: 'c34' },
  { id: 'uc167', name: 'Auditorias da Qualidade', risk: 68.9, studentCount: 20, courseId: 'c34' },
  { id: 'uc168', name: 'Ferramentas da Qualidade', risk: 63.2, studentCount: 23, courseId: 'c34' },
  { id: 'uc169', name: 'Melhoria Contínua', risk: 60.8, studentCount: 24, courseId: 'c34' },
  { id: 'uc170', name: 'Gestão por Processos', risk: 67.1, studentCount: 21, courseId: 'c34' }
];

// Transportes e Logística
export const transportesLogisticaUnitsMock: CourseUnit[] = [
  { id: 'uc171', name: 'Gestão de Transportes', risk: 63.7, studentCount: 24, courseId: 'c35' },
  { id: 'uc172', name: 'Armazenagem', risk: 60.5, studentCount: 26, courseId: 'c35' },
  { id: 'uc173', name: 'Gestão da Cadeia de Abastecimento', risk: 65.2, studentCount: 23, courseId: 'c35' },
  { id: 'uc174', name: 'Distribuição Física', risk: 62.8, studentCount: 25, courseId: 'c35' },
  { id: 'uc175', name: 'Sistemas de Informação Logísticos', risk: 64.3, studentCount: 24, courseId: 'c35' }
];

// Mestrados
// Logística (APNOR)
export const logisticaApnorUnitsMock: CourseUnit[] = [
  { id: 'uc176', name: 'Logística Internacional', risk: 70.5, studentCount: 15, courseId: 'c36' },
  { id: 'uc177', name: 'Gestão Estratégica da Cadeia de Abastecimento', risk: 73.2, studentCount: 14, courseId: 'c36' },
  { id: 'uc178', name: 'Sistemas de Informação na Logística', risk: 68.9, studentCount: 16, courseId: 'c36' },
  { id: 'uc179', name: 'Logística Inversa', risk: 67.3, studentCount: 15, courseId: 'c36' },
  { id: 'uc180', name: 'Gestão de Projetos Logísticos', risk: 71.6, studentCount: 14, courseId: 'c36' }
];

// Marketing
export const marketingMestradoUnitsMock: CourseUnit[] = [
  { id: 'uc181', name: 'Marketing Estratégico', risk: 65.8, studentCount: 17, courseId: 'c37' },
  { id: 'uc182', name: 'Comportamento do Consumidor Avançado', risk: 63.2, studentCount: 18, courseId: 'c37' },
  { id: 'uc183', name: 'Marketing Digital Avançado', risk: 62.5, studentCount: 19, courseId: 'c37' },
  { id: 'uc184', name: 'Gestão da Marca', risk: 60.7, studentCount: 18, courseId: 'c37' },
  { id: 'uc185', name: 'Metodologias de Investigação em Marketing', risk: 66.3, studentCount: 17, courseId: 'c37' }
];

// Cursos da ESCE
export const esceCoursesMock: Course[] = [
  // Licenciaturas
  { id: 'c29', name: 'Contabilidade e Fiscalidade', risk: 71.5, unitCount: 5, studentCount: 150, units: contabilidadeUnitsMock, schoolId: 's5', type: 'licenciatura' },
  { id: 'c30', name: 'Gestão da Distribuição e Logística', risk: 65.8, unitCount: 5, studentCount: 165, units: logisticaUnitsMock, schoolId: 's5', type: 'licenciatura' },
  { id: 'c31', name: 'Marketing e Comunicação Empresarial', risk: 60.9, unitCount: 5, studentCount: 195, units: marketingUnitsMock, schoolId: 's5', type: 'licenciatura' },
  { id: 'c32', name: 'Organização e Gestão Empresariais', risk: 67.2, unitCount: 5, studentCount: 180, units: gestaoEmpresarialUnitsMock, schoolId: 's5', type: 'licenciatura' },
  // CTeSP
  { id: 'c33', name: 'Contabilidade e Gestão para PME', risk: 68.7, unitCount: 5, studentCount: 130, units: contabilidadePMEUnitsMock, schoolId: 's5', type: 'ctesp' },
  { id: 'c34', name: 'Gestão da Qualidade', risk: 65.1, unitCount: 5, studentCount: 110, units: gestaoQualidadeUnitsMock, schoolId: 's5', type: 'ctesp' },
  { id: 'c35', name: 'Transportes e Logística', risk: 63.3, unitCount: 5, studentCount: 122, units: transportesLogisticaUnitsMock, schoolId: 's5', type: 'ctesp' },
  // Mestrados
  { id: 'c36', name: 'Logística (APNOR)', risk: 70.3, unitCount: 5, studentCount: 74, units: logisticaApnorUnitsMock, schoolId: 's5', type: 'mestrado' },
  { id: 'c37', name: 'Marketing', risk: 63.7, unitCount: 5, studentCount: 89, units: marketingMestradoUnitsMock, schoolId: 's5', type: 'mestrado' }
];

// ============ ESCOLA SUPERIOR DE DESPORTO E LAZER (ESDL) ============
// Licenciaturas
// Desporto e Lazer
export const desportoLazerUnitsMock: CourseUnit[] = [
  { id: 'uc186', name: 'Anatomia Funcional', risk: 63.7, studentCount: 45, courseId: 'c38' },
  { id: 'uc187', name: 'Pedagogia do Desporto', risk: 58.2, studentCount: 48, courseId: 'c38' },
  { id: 'uc188', name: 'Modalidades Desportivas', risk: 55.5, studentCount: 50, courseId: 'c38' },
  { id: 'uc189', name: 'Turismo e Atividades de Lazer', risk: 52.8, studentCount: 52, courseId: 'c38' },
  { id: 'uc190', name: 'Gestão do Desporto', risk: 60.3, studentCount: 47, courseId: 'c38' }
];

// Exercício e Saúde
export const exercicioSaudeUnitsMock: CourseUnit[] = [
  { id: 'uc191', name: 'Fisiologia do Exercício', risk: 65.8, studentCount: 40, courseId: 'c39' },
  { id: 'uc192', name: 'Nutrição e Desporto', risk: 60.2, studentCount: 43, courseId: 'c39' },
  { id: 'uc193', name: 'Prescrição do Exercício', risk: 67.5, studentCount: 38, courseId: 'c39' },
  { id: 'uc194', name: 'Avaliação Física', risk: 62.9, studentCount: 41, courseId: 'c39' },
  { id: 'uc195', name: 'Treino Funcional', risk: 58.7, studentCount: 44, courseId: 'c39' }
];

// CTeSP
// Treino Desportivo
export const treinoDesportivoUnitsMock: CourseUnit[] = [
  { id: 'uc196', name: 'Metodologia do Treino', risk: 62.3, studentCount: 30, courseId: 'c40' },
  { id: 'uc197', name: 'Desportos Coletivos', risk: 57.8, studentCount: 32, courseId: 'c40' },
  { id: 'uc198', name: 'Desportos Individuais', risk: 59.2, studentCount: 31, courseId: 'c40' },
  { id: 'uc199', name: 'Preparação Física', risk: 61.5, studentCount: 30, courseId: 'c40' },
  { id: 'uc200', name: 'Análise de Desempenho', risk: 63.8, studentCount: 29, courseId: 'c40' }
];

// Gestão de Instalações Desportivas
export const gestaoInstalDesportivasUnitsMock: CourseUnit[] = [
  { id: 'uc201', name: 'Infraestruturas Desportivas', risk: 60.7, studentCount: 25, courseId: 'c41' },
  { id: 'uc202', name: 'Gestão de Eventos Desportivos', risk: 57.3, studentCount: 27, courseId: 'c41' },
  { id: 'uc203', name: 'Manutenção de Instalações', risk: 63.2, studentCount: 24, courseId: 'c41' },
  { id: 'uc204', name: 'Segurança em Instalações Desportivas', risk: 58.9, studentCount: 26, courseId: 'c41' },
  { id: 'uc205', name: 'Marketing Desportivo', risk: 56.4, studentCount: 28, courseId: 'c41' }
];

// Mestrados
// Atividade Física e Saúde
export const atividadeFisicaSaudeUnitsMock: CourseUnit[] = [
  { id: 'uc206', name: 'Promoção da Saúde', risk: 59.3, studentCount: 16, courseId: 'c42' },
  { id: 'uc207', name: 'Exercício em Populações Especiais', risk: 63.8, studentCount: 15, courseId: 'c42' },
  { id: 'uc208', name: 'Avaliação e Prescrição Avançada', risk: 65.2, studentCount: 14, courseId: 'c42' },
  { id: 'uc209', name: 'Patologias e Exercício', risk: 67.9, studentCount: 13, courseId: 'c42' },
  { id: 'uc210', name: 'Metodologias de Investigação', risk: 61.7, studentCount: 15, courseId: 'c42' }
];

// Gestão do Desporto
export const gestaoDesportoUnitsMock: CourseUnit[] = [
  { id: 'uc211', name: 'Planeamento Estratégico no Desporto', risk: 64.5, studentCount: 13, courseId: 'c43' },
  { id: 'uc212', name: 'Gestão de Organizações Desportivas', risk: 61.8, studentCount: 14, courseId: 'c43' },
  { id: 'uc213', name: 'Economia do Desporto', risk: 66.2, studentCount: 12, courseId: 'c43' },
  { id: 'uc214', name: 'Marketing e Patrocínio Desportivo', risk: 59.7, studentCount: 15, courseId: 'c43' },
  { id: 'uc215', name: 'Direito do Desporto', risk: 63.3, studentCount: 13, courseId: 'c43' }
];

// Cursos da ESDL
export const esdlCoursesMock: Course[] = [
  // Licenciaturas
  { id: 'c38', name: 'Desporto e Lazer', risk: 58.1, unitCount: 5, studentCount: 242, units: desportoLazerUnitsMock, schoolId: 's6', type: 'licenciatura' },
  { id: 'c39', name: 'Exercício e Saúde', risk: 62.8, unitCount: 5, studentCount: 206, units: exercicioSaudeUnitsMock, schoolId: 's6', type: 'licenciatura' },
  // CTeSP
  { id: 'c40', name: 'Treino Desportivo', risk: 60.9, unitCount: 5, studentCount: 152, units: treinoDesportivoUnitsMock, schoolId: 's6', type: 'ctesp' },
  { id: 'c41', name: 'Gestão de Instalações Desportivas', risk: 59.3, unitCount: 5, studentCount: 130, units: gestaoInstalDesportivasUnitsMock, schoolId: 's6', type: 'ctesp' },
  // Mestrados
  { id: 'c42', name: 'Atividade Física e Saúde', risk: 63.6, unitCount: 5, studentCount: 73, units: atividadeFisicaSaudeUnitsMock, schoolId: 's6', type: 'mestrado' },
  { id: 'c43', name: 'Gestão do Desporto', risk: 63.1, unitCount: 5, studentCount: 67, units: gestaoDesportoUnitsMock, schoolId: 's6', type: 'mestrado' }
];

// ============ ESCOLAS DO IPVC ============
export const schoolsMock: School[] = [
  { id: 's1', name: 'Escola Superior de Educação (ESE)', risk: 61.8, courseCount: 8, studentCount: 871, courses: eseCoursesMock, institutionId: 'i1' },
  { id: 's2', name: 'Escola Superior Agrária (ESA)', risk: 67.5, courseCount: 7, studentCount: 698, courses: esaCoursesMock, institutionId: 'i1' },
  { id: 's3', name: 'Escola Superior de Tecnologia e Gestão (ESTG)', risk: 69.4, courseCount: 7, studentCount: 954, courses: estgCoursesMock, institutionId: 'i1' },
  { id: 's4', name: 'Escola Superior de Saúde (ESS)', risk: 64.9, courseCount: 6, studentCount: 854, courses: essCoursesMock, institutionId: 'i1' },
  { id: 's5', name: 'Escola Superior de Ciências Empresariais (ESCE)', risk: 66.3, courseCount: 9, studentCount: 1215, courses: esceCoursesMock, institutionId: 'i1' },
  { id: 's6', name: 'Escola Superior de Desporto e Lazer (ESDL)', risk: 60.5, courseCount: 6, studentCount: 870, courses: esdlCoursesMock, institutionId: 'i1' }
];

// ============ INSTITUTO POLITÉCNICO DE VIANA DO CASTELO (IPVC) ============
export const institutionsMock: Institution[] = [
  { id: 'i1', name: 'Instituto Politécnico de Viana do Castelo (IPVC)', risk: 65.1, schoolCount: 6, studentCount: 5462, schools: schoolsMock }
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
  ...comunicacaoMultimediaUnitsMock,
  ...engenhariaAgronomicaUnitsMock,
  ...engenhariaZootecnicaUnitsMock,
  ...engenhariaAlimentarUnitsMock,
  ...producaoAgricolaUnitsMock,
  ...qualidadeAlimentarUnitsMock,
  ...agriculturaBiologicaUnitsMock,
  ...tecnologiaAlimentarUnitsMock,
  ...engenhariaInformaticaUnitsMock,
  ...engenhariaCivilUnitsMock,
  ...designProdutoUnitsMock,
  ...desenvolvimentoSWUnitsMock,
  ...construcaoCivilUnitsMock,
  ...engenhariaRedesUnitsMock,
  ...engenhariaProducaoUnitsMock,
  ...enfermagemUnitsMock,
  ...fisioterapiaUnitsMock,
  ...cuidadosGeriatricosUnitsMock,
  ...tecnologiasSaudeUnitsMock,
  ...enfermagemComunitariaUnitsMock,
  ...fisioterapiaMusculoUnitsMock,
  ...contabilidadeUnitsMock,
  ...logisticaUnitsMock,
  ...marketingUnitsMock,
  ...gestaoEmpresarialUnitsMock,
  ...contabilidadePMEUnitsMock,
  ...gestaoQualidadeUnitsMock,
  ...transportesLogisticaUnitsMock,
  ...logisticaApnorUnitsMock,
  ...marketingMestradoUnitsMock,
  ...desportoLazerUnitsMock,
  ...exercicioSaudeUnitsMock,
  ...treinoDesportivoUnitsMock,
  ...gestaoInstalDesportivasUnitsMock,
  ...atividadeFisicaSaudeUnitsMock,
  ...gestaoDesportoUnitsMock
];

// Combine all courses for general access
export const coursesMock: Course[] = [
  ...eseCoursesMock,
  ...esaCoursesMock,
  ...estgCoursesMock,
  ...essCoursesMock,
  ...esceCoursesMock,
  ...esdlCoursesMock
];
