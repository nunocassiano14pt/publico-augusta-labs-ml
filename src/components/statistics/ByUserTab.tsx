
import React from 'react';
import UserLevelTabs from './UserLevelTabs';
import CourseUnitView from './CourseUnitView';
import CourseView from './CourseView';
import SchoolView from './SchoolView';
import InstitutionView from './InstitutionView';
import PredictionComparisonChart from './PredictionComparisonChart';
import RiskDetailGraphs from './RiskDetailGraphs';
import { 
  CourseUnit, 
  Course, 
  School, 
  Institution, 
  RiskDistribution, 
  FactorFrequency,
  Student,
  PredictionComparison
} from '../../types';

interface ByUserTabProps {
  // Institution Level
  institutions: Institution[];
  selectedInstitution: string | null;
  onInstitutionClick: (institutionId: string) => void;
  
  // School Level
  schools: School[];
  selectedSchool: string | null;
  onSchoolClick: (schoolId: string) => void;
  
  // Course Type Level (added)
  selectedCourseType: string | null;
  onCourseTypeClick: (courseType: string) => void;
  
  // Course Level
  courses: Course[];
  selectedCourse: string | null;
  onCourseClick: (courseId: string) => void;
  
  // Course Unit Level
  units: CourseUnit[];
  selectedUnit: string | null;
  onUnitClick: (unitId: string) => void;
  
  // Navigation
  onBackClick: () => void;
  
  // Common data
  riskDistributionData: RiskDistribution[];
  positiveFactorsData: FactorFrequency[];
  negativeFactorsData: FactorFrequency[];
  predictionComparisonData: PredictionComparison[];
  
  // Students for selected unit
  students: Student[];
  onExportCSV: () => void;
}

const ByUserTab: React.FC<ByUserTabProps> = ({
  institutions,
  selectedInstitution,
  schools,
  selectedSchool,
  selectedCourseType,
  courses,
  selectedCourse,
  units,
  selectedUnit,
  riskDistributionData,
  positiveFactorsData,
  negativeFactorsData,
  predictionComparisonData,
  students,
  onInstitutionClick,
  onSchoolClick,
  onCourseTypeClick,
  onCourseClick,
  onUnitClick,
  onBackClick,
  onExportCSV
}) => {
  // Find current names for breadcrumb navigation
  const selectedInstitutionData = selectedInstitution 
    ? institutions.find(institution => institution.id === selectedInstitution) 
    : null;
  
  const selectedSchoolData = selectedSchool 
    ? schools.find(school => school.id === selectedSchool) 
    : null;
  
  const selectedCourseData = selectedCourse 
    ? courses.find(course => course.id === selectedCourse) 
    : null;
  
  // 1. Show Institution view (top level)
  if (!selectedInstitution) {
    return (
      <div className="space-y-6">
        <UserLevelTabs level="Estatísticas por Instituição" />
        <InstitutionView 
          institutions={institutions}
          riskDistributionData={riskDistributionData}
          positiveFactorsData={positiveFactorsData}
          negativeFactorsData={negativeFactorsData}
          predictionComparisonData={predictionComparisonData}
          onInstitutionClick={onInstitutionClick}
        />
      </div>
    );
  }
  
  // 2. Show Schools within the selected Institution
  if (selectedInstitution && !selectedSchool) {
    return (
      <div className="space-y-6">
        <UserLevelTabs 
          level={`Escolas de ${selectedInstitutionData?.name || 'Instituição'}`}
          onBackClick={onBackClick}
          parent="Instituições"
        />
        <SchoolView 
          schools={schools}
          riskDistributionData={riskDistributionData}
          positiveFactorsData={positiveFactorsData}
          negativeFactorsData={negativeFactorsData}
          predictionComparisonData={predictionComparisonData}
          onSchoolClick={onSchoolClick}
          institutionName={selectedInstitutionData?.name}
        />
      </div>
    );
  }
  
  // 3. Show Course Types within the selected School
  if (selectedSchool && !selectedCourseType) {
    const courseTypes = [
      { id: "licenciatura", name: "Licenciaturas", description: "Cursos de 1º ciclo" },
      { id: "ctesp", name: "CTeSP", description: "Cursos Técnicos Superiores Profissionais" },
      { id: "mestrado", name: "Mestrados", description: "Cursos de 2º ciclo" }
    ];
    
    return (
      <div className="space-y-6">
        <UserLevelTabs 
          level={`Tipos de Curso - ${selectedSchoolData?.name || 'Escola'}`}
          onBackClick={onBackClick}
          parent="Escolas"
        />
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Tipos de Curso em {selectedSchoolData?.name || 'Escola'}
          </h2>
          
          <div className="mb-6">
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {courseTypes.map((type) => (
                    <tr 
                      key={type.id} 
                      className="animate-fadeIn cursor-pointer hover:bg-gray-50"
                      onClick={() => onCourseTypeClick(type.id)}
                    >
                      <td>{type.name}</td>
                      <td>{type.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 mb-8">
            <h3 className="text-lg font-medium mb-4">Comparação de Previsões por Tipo de Curso</h3>
            <PredictionComparisonChart data={predictionComparisonData} />
          </div>
          
          <RiskDetailGraphs 
            riskDistributionData={riskDistributionData}
            positiveFactorsData={positiveFactorsData}
            negativeFactorsData={negativeFactorsData}
          />
        </div>
      </div>
    );
  }
  
  // 4. Show Courses within the selected Course Type
  if (selectedCourseType && !selectedCourse) {
    const courseTypeNames = {
      "licenciatura": "Licenciaturas",
      "ctesp": "CTeSP",
      "mestrado": "Mestrados"
    };
    
    const courseTypeName = selectedCourseType ? courseTypeNames[selectedCourseType as keyof typeof courseTypeNames] : "";
    
    return (
      <div className="space-y-6">
        <UserLevelTabs 
          level={`${courseTypeName} - ${selectedSchoolData?.name || 'Escola'}`}
          onBackClick={onBackClick}
          parent="Tipos de Curso"
        />
        <CourseView 
          courses={courses}
          riskDistributionData={riskDistributionData}
          positiveFactorsData={positiveFactorsData}
          negativeFactorsData={negativeFactorsData}
          predictionComparisonData={predictionComparisonData}
          onCourseClick={onCourseClick}
          schoolName={selectedSchoolData?.name}
          courseTypeName={courseTypeName}
        />
      </div>
    );
  }
  
  // 5. Show Course Units within the selected Course
  if (selectedCourse && !selectedUnit) {
    return (
      <div className="space-y-6">
        <UserLevelTabs 
          level={`Unidades Curriculares - ${selectedCourseData?.name || 'Curso'}`}
          onBackClick={onBackClick}
          parent="Cursos"
        />
        <CourseUnitView 
          units={units}
          selectedUnit={null}
          riskDistributionData={riskDistributionData}
          positiveFactorsData={positiveFactorsData}
          negativeFactorsData={negativeFactorsData}
          predictionComparisonData={predictionComparisonData}
          students={[]}
          onUnitClick={onUnitClick}
          onExportCSV={onExportCSV}
          onBack={() => {}}
          courseName={selectedCourseData?.name}
        />
      </div>
    );
  }
  
  // 6. Show Students for the selected Course Unit
  if (selectedUnit) {
    const selectedUnitData = units.find(unit => unit.id === selectedUnit);
    
    return (
      <div className="space-y-6">
        <UserLevelTabs 
          level={`Alunos - ${selectedUnitData?.name || 'Unidade Curricular'}`}
          onBackClick={onBackClick}
          parent="Unidades Curriculares"
        />
        <div className="mb-6">
          <CourseUnitView 
            units={units}
            selectedUnit={selectedUnit}
            riskDistributionData={riskDistributionData}
            positiveFactorsData={positiveFactorsData}
            negativeFactorsData={negativeFactorsData}
            predictionComparisonData={predictionComparisonData}
            students={students}
            onUnitClick={onUnitClick}
            onExportCSV={onExportCSV}
            onBack={onBackClick}
            courseName={selectedCourseData?.name}
          />
        </div>
      </div>
    );
  }
  
  // Fallback (should not happen)
  return (
    <div className="space-y-6">
      <UserLevelTabs level="Estatísticas" />
      <p>Selecione uma opção para visualizar estatísticas.</p>
    </div>
  );
};

export default ByUserTab;
