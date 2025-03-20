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
// Unidades Curriculares - Educação Básica
export const educacaoBasicaUnitsMock: CourseUnit[] = [
  { id: 'uc1', name: 'Ciências Físico-Naturais I', risk: 73.5, studentCount: 28 },
  { id: 'uc2', name: 'Elementos da Matemática', risk: 67.2, studentCount: 25 },
  { id: 'uc3', name: 'Comunicação Oral e Escrita', risk: 82.1, studentCount: 32 },
  { id: 'uc4', name: 'Psicologia do Desenvolvimento', risk: 58.9, studentCount: 30 },
  { id: 'uc5', name: 'História e Geografia de Portugal', risk: 64.3, studentCount: 29 }
];

// Unidades Curriculares - Comunicação Audiovisual e Multimédia
export const comunicacaoAVUnitsMock: CourseUnit[] = [
  { id: 'uc6', name: 'Introdução ao Cinema Digital', risk: 58.2, studentCount: 35 },
  { id: 'uc7', name: 'Técnicas de Animação', risk: 61.5, studentCount: 32 },
  { id: 'uc8', name: 'Edição de Vídeo', risk: 55.8, studentCount: 38 },
  { id: 'uc9', name: 'Fotografia Digital', risk: 49.2, studentCount: 33 },
  { id: 'uc10', name: 'Design Gráfico', risk: 52.7, studentCount: 36 }
];

// Unidades Curriculares - Animação Cultural
export const animacaoCulturalUnitsMock: CourseUnit[] = [
  { id: 'uc11', name: 'Antropologia Cultural', risk: 62.4, studentCount: 25 },
  { id: 'uc12', name: 'Produção de Eventos', risk: 58.7, studentCount: 28 },
  { id: 'uc13', name: 'Dinâmicas de Grupo', risk: 52.3, studentCount: 24 },
  { id: 'uc14', name: 'Património Cultural', risk: 60.5, studentCount: 26 },
  { id: 'uc15', name: 'Gestão Cultural', risk: 65.8, studentCount: 27 }
];

// Cursos da ESE
export const eseCoursesMock: Course[] = [
  { id: 'c1', name: 'Educação Básica', risk: 68.5, unitCount: 5, studentCount: 144, units: educacaoBasicaUnitsMock },
  { id: 'c2', name: 'Comunicação Audiovisual e Multimédia', risk: 57.2, unitCount: 5, studentCount: 174, units: comunicacaoAVUnitsMock },
  { id: 'c3', name: 'Animação Cultural', risk: 59.8, unitCount: 5, studentCount: 130, units: animacaoCulturalUnitsMock }
];

// ============ ESCOLA SUPERIOR AGRÁRIA (ESA) ============
// Unidades Curriculares - Engenharia Agronómica
export const engenhariaAgronomicaUnitsMock: CourseUnit[] = [
  { id: 'uc16', name: 'Solos e Fertilidade', risk: 70.2, studentCount: 22 },
  { id: 'uc17', name: 'Botânica', risk: 65.8, studentCount: 24 },
  { id: 'uc18', name: 'Produção Vegetal', risk: 62.3, studentCount: 23 },
  { id: 'uc19', name: 'Agrometeorologia', risk: 71.5, studentCount: 21 },
  { id: 'uc20', name: 'Fitotecnia', risk: 68.7, studentCount: 22 }
];

// Unidades Curriculares - Engenharia Zootécnica
export const engenhariaZootecnicaUnitsMock: CourseUnit[] = [
  { id: 'uc21', name: 'Anatomia Animal', risk: 73.1, studentCount: 20 },
  { id: 'uc22', name: 'Nutrição Animal', risk: 68.5, studentCount: 22 },
  { id: 'uc23', name: 'Reprodução Animal', risk: 75.2, studentCount: 19 },
  { id: 'uc24', name: 'Melhoramento Genético', risk: 72.8, studentCount: 21 },
  { id: 'uc25', name: 'Sistemas de Produção Animal', risk: 69.3, studentCount: 23 }
];

// Unidades Curriculares - Engenharia Alimentar
export const engenhariaAlimentarUnitsMock: CourseUnit[] = [
  { id: 'uc26', name: 'Microbiologia Alimentar', risk: 67.9, studentCount: 25 },
  { id: 'uc27', name: 'Tecnologia de Alimentos', risk: 63.2, studentCount: 28 },
  { id: 'uc28', name: 'Análise Sensorial', risk: 58.7, studentCount: 30 },
  { id: 'uc29', name: 'Controlo de Qualidade', risk: 61.5, studentCount: 29 },
  { id: 'uc30', name: 'Processamento de Alimentos', risk: 65.3, studentCount: 27 }
];

// Cursos da ESA
export const esaCoursesMock: Course[] = [
  { id: 'c4', name: 'Engenharia Agronómica', risk: 67.8, unitCount: 5, studentCount: 112, units: engenhariaAgronomicaUnitsMock },
  { id: 'c5', name: 'Engenharia Zootécnica', risk: 71.2, unitCount: 5, studentCount: 105, units: engenhariaZootecnicaUnitsMock },
  { id: 'c6', name: 'Engenharia Alimentar', risk: 63.5, unitCount: 5, studentCount: 139, units: engenhariaAlimentarUnitsMock }
];

// ============ ESCOLA SUPERIOR DE TECNOLOGIA E GESTÃO (ESTG) ============
// Unidades Curriculares - Engenharia Informática
export const engenhariaInformaticaUnitsMock: CourseUnit[] = [
  { id: 'uc31', name: 'Programação', risk: 72.5, studentCount: 45 },
  { id: 'uc32', name: 'Estruturas de Dados', risk: 78.3, studentCount: 42 },
  { id: 'uc33', name: 'Bases de Dados', risk: 68.7, studentCount: 47 },
  { id: 'uc34', name: 'Redes de Computadores', risk: 70.2, studentCount: 44 },
  { id: 'uc35', name: 'Inteligência Artificial', risk: 75.1, studentCount: 40 }
];

// Unidades Curriculares - Engenharia Civil
export const engenhariaCivilUnitsMock: CourseUnit[] = [
  { id: 'uc36', name: 'Mecânica', risk: 75.8, studentCount: 30 },
  { id: 'uc37', name: 'Materiais de Construção', risk: 70.2, studentCount: 32 },
  { id: 'uc38', name: 'Estruturas', risk: 79.5, studentCount: 28 },
  { id: 'uc39', name: 'Hidráulica', risk: 73.7, studentCount: 31 },
  { id: 'uc40', name: 'Topografia', risk: 68.4, studentCount: 33 }
];

// Unidades Curriculares - Design de Produto
export const designProdutoUnitsMock: CourseUnit[] = [
  { id: 'uc41', name: 'Desenho Técnico', risk: 61.3, studentCount: 35 },
  { id: 'uc42', name: 'Materiais e Processos', risk: 65.8, studentCount: 32 },
  { id: 'uc43', name: 'Modelação 3D', risk: 58.7, studentCount: 37 },
  { id: 'uc44', name: 'Design de Interação', risk: 56.2, studentCount: 38 },
  { id: 'uc45', name: 'Prototipagem', risk: 62.5, studentCount: 34 }
];

// Cursos da ESTG
export const estgCoursesMock: Course[] = [
  { id: 'c7', name: 'Engenharia Informática', risk: 73.5, unitCount: 5, studentCount: 218, units: engenhariaInformaticaUnitsMock },
  { id: 'c8', name: 'Engenharia Civil', risk: 73.9, unitCount: 5, studentCount: 154, units: engenhariaCivilUnitsMock },
  { id: 'c9', name: 'Design de Produto', risk: 60.9, unitCount: 5, studentCount: 176, units: designProdutoUnitsMock }
];

// ============ ESCOLA SUPERIOR DE SAÚDE (ESS) ============
// Unidades Curriculares - Enfermagem
export const enfermagemUnitsMock: CourseUnit[] = [
  { id: 'uc46', name: 'Anatomia e Fisiologia', risk: 65.2, studentCount: 48 },
  { id: 'uc47', name: 'Fundamentos de Enfermagem', risk: 58.7, studentCount: 52 },
  { id: 'uc48', name: 'Farmacologia', risk: 67.3, studentCount: 47 },
  { id: 'uc49', name: 'Bioética', risk: 54.8, studentCount: 55 },
  { id: 'uc50', name: 'Enfermagem Médico-Cirúrgica', risk: 62.5, studentCount: 50 }
];

// Unidades Curriculares - Fisioterapia
export const fisioterapiaUnitsMock: CourseUnit[] = [
  { id: 'uc51', name: 'Biomecânica', risk: 70.1, studentCount: 38 },
  { id: 'uc52', name: 'Técnicas de Mobilização', risk: 65.8, studentCount: 40 },
  { id: 'uc53', name: 'Fisiologia do Exercício', risk: 67.2, studentCount: 39 },
  { id: 'uc54', name: 'Reabilitação Neurológica', risk: 72.5, studentCount: 37 },
  { id: 'uc55', name: 'Massoterapia', risk: 59.8, studentCount: 42 }
];

// Cursos da ESS
export const essCoursesMock: Course[] = [
  { id: 'c10', name: 'Enfermagem', risk: 62.3, unitCount: 5, studentCount: 252, units: enfermagemUnitsMock },
  { id: 'c11', name: 'Fisioterapia', risk: 67.5, unitCount: 5, studentCount: 196, units: fisioterapiaUnitsMock }
];

// ============ ESCOLA SUPERIOR DE CIÊNCIAS EMPRESARIAIS (ESCE) ============
// Unidades Curriculares - Contabilidade e Fiscalidade
export const contabilidadeUnitsMock: CourseUnit[] = [
  { id: 'uc56', name: 'Contabilidade Geral', risk: 68.7, studentCount: 32 },
  { id: 'uc57', name: 'Fiscalidade', risk: 73.2, studentCount: 30 },
  { id: 'uc58', name: 'Auditoria', risk: 69.5, studentCount: 31 },
  { id: 'uc59', name: 'Análise Financeira', risk: 71.8, studentCount: 29 },
  { id: 'uc60', name: 'Direito Fiscal', risk: 75.3, studentCount: 28 }
];

// Unidades Curriculares - Gestão da Distribuição e Logística
export const logisticaUnitsMock: CourseUnit[] = [
  { id: 'uc61', name: 'Gestão de Operações', risk: 64.5, studentCount: 34 },
  { id: 'uc62', name: 'Sistemas de Informação', risk: 68.2, studentCount: 32 },
  { id: 'uc63', name: 'Gestão de Stocks', risk: 66.7, studentCount: 33 },
  { id: 'uc64', name: 'Distribuição e Transportes', risk: 61.9, studentCount: 35 },
  { id: 'uc65', name: 'Comércio Internacional', risk: 67.3, studentCount: 31 }
];

// Unidades Curriculares - Marketing
export const marketingUnitsMock: CourseUnit[] = [
  { id: 'uc66', name: 'Marketing Digital', risk: 59.8, studentCount: 40 },
  { id: 'uc67', name: 'Comportamento do Consumidor', risk: 62.3, studentCount: 38 },
  { id: 'uc68', name: 'Pesquisa de Mercado', risk: 65.7, studentCount: 36 },
  { id: 'uc69', name: 'Publicidade', risk: 57.2, studentCount: 42 },
  { id: 'uc70', name: 'Branding', risk: 60.5, studentCount: 39 }
];

// Unidades Curriculares - Organização e Gestão Empresariais
export const gestaoEmpresarialUnitsMock: CourseUnit[] = [
  { id: 'uc71', name: 'Gestão Estratégica', risk: 66.8, studentCount: 36 },
  { id: 'uc72', name: 'Recursos Humanos', risk: 62.4, studentCount: 38 },
  { id: 'uc73', name: 'Economia', risk: 69.7, studentCount: 35 },
  { id: 'uc74', name: 'Gestão de Projetos', risk: 64.2, studentCount: 37 },
  { id: 'uc75', name: 'Estatística', risk: 72.1, studentCount: 34 }
];

// Cursos da ESCE
export const esceCoursesMock: Course[] = [
  { id: 'c12', name: 'Contabilidade e Fiscalidade', risk: 71.5, unitCount: 5, studentCount: 150, units: contabilidadeUnitsMock },
  { id: 'c13', name: 'Gestão da Distribuição e Logística', risk: 65.8, unitCount: 5, studentCount: 165, units: logisticaUnitsMock },
  { id: 'c14', name: 'Marketing e Comunicação Empresarial', risk: 60.9, unitCount: 5, studentCount: 195, units: marketingUnitsMock },
  { id: 'c15', name: 'Organização e Gestão Empresariais', risk: 67.2, unitCount: 5, studentCount: 180, units: gestaoEmpresarialUnitsMock }
];

// ============ ESCOLA SUPERIOR DE DESPORTO E LAZER (ESDL) ============
// Unidades Curriculares - Desporto e Lazer
export const desportoLazerUnitsMock: CourseUnit[] = [
  { id: 'uc76', name: 'Anatomia Funcional', risk: 63.7, studentCount: 45 },
  { id: 'uc77', name: 'Pedagogia do Desporto', risk: 58.2, studentCount: 48 },
  { id: 'uc78', name: 'Modalidades Desportivas', risk: 55.5, studentCount: 50 },
  { id: 'uc79', name: 'Turismo e Atividades de Lazer', risk: 52.8, studentCount: 52 },
  { id: 'uc80', name: 'Gestão do Desporto', risk: 60.3, studentCount: 47 }
];

// Unidades Curriculares - Exercício e Saúde
export const exercicioSaudeUnitsMock: CourseUnit[] = [
  { id: 'uc81', name: 'Fisiologia do Exercício', risk: 65.8, studentCount: 40 },
  { id: 'uc82', name: 'Nutrição e Desporto', risk: 60.2, studentCount: 43 },
  { id: 'uc83', name: 'Prescrição do Exercício', risk: 67.5, studentCount: 38 },
  { id: 'uc84', name: 'Avaliação Física', risk: 62.9, studentCount: 41 },
  { id: 'uc85', name: 'Treino Funcional', risk: 58.7, studentCount: 44 }
];

// Cursos da ESDL
export const esdlCoursesMock: Course[] = [
  { id: 'c16', name: 'Desporto e Lazer', risk: 58.1, unitCount: 5, studentCount: 242, units: desportoLazerUnitsMock },
  { id: 'c17', name: 'Exercício e Saúde', risk: 62.8, unitCount: 5, studentCount: 206, units: exercicioSaudeUnitsMock }
];

// ============ ESCOLAS DO IPVC ============
export const schoolsMock: School[] = [
  { id: 's1', name: 'Escola Superior de Educação (ESE)', risk: 61.8, courseCount: 3, studentCount: 448, courses: eseCoursesMock },
  { id: 's2', name: 'Escola Superior Agrária (ESA)', risk: 67.5, courseCount: 3, studentCount: 356, courses: esaCoursesMock },
  { id: 's3', name: 'Escola Superior de Tecnologia e Gestão (ESTG)', risk: 69.4, courseCount: 3, studentCount: 548, courses: estgCoursesMock },
  { id: 's4', name: 'Escola Superior de Saúde (ESS)', risk: 64.9, courseCount: 2, studentCount: 448, courses: essCoursesMock },
  { id: 's5', name: 'Escola Superior de Ciências Empresariais (ESCE)', risk: 66.3, courseCount: 4, studentCount: 690, courses: esceCoursesMock },
  { id: 's6', name: 'Escola Superior de Desporto e Lazer (ESDL)', risk: 60.5, courseCount: 2, studentCount: 448, courses: esdlCoursesMock }
];

// ============ INSTITUTO POLITÉCNICO DE VIANA DO CASTELO (IPVC) ============
export const institutionsMock: Institution[] = [
  { id: 'i1', name: 'Instituto Politécnico de Viana do Castelo (IPVC)', risk: 65.1, schoolCount: 6, studentCount: 2938, schools: schoolsMock }
];

// Combine all course units for general access
export const courseUnitsMock: CourseUnit[] = [
  ...educacaoBasicaUnitsMock,
  ...comunicacaoAVUnitsMock,
  ...animacaoCulturalUnitsMock,
  ...engenhariaAgronomicaUnitsMock,
  ...engenhariaZootecnicaUnitsMock,
  ...engenhariaAlimentarUnitsMock,
  ...engenhariaInformaticaUnitsMock,
  ...engenhariaCivilUnitsMock,
  ...designProdutoUnitsMock,
  ...enfermagemUnitsMock,
  ...fisioterapiaUnitsMock,
  ...contabilidadeUnitsMock,
  ...logisticaUnitsMock,
  ...marketingUnitsMock,
  ...gestaoEmpresarialUnitsMock,
  ...desportoLazerUnitsMock,
  ...exercicioSaudeUnitsMock
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
