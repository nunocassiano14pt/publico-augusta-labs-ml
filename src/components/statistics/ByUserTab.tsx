
import React from 'react';
import UserLevelTabs from './UserLevelTabs';
import CourseUnitView from './CourseUnitView';
import CourseView from './CourseView';
import SchoolView from './SchoolView';
import InstitutionView from './InstitutionView';
import CourseTypeView from './CourseTypeView';
import AcademicYearView from './AcademicYearView';
import { 
  CourseUnit, 
  Course, 
  School, 
  Institution, 
  RiskDistribution, 
  FactorFrequency,
  Student,
  PredictionComparison,
  AcademicYear
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
  
  // Course Type Level
  selectedCourseType: string | null;
  onCourseTypeClick: (courseType: string) => void;
  
  // Course Level
  courses: Course[];
  selectedCourse: string | null;
  onCourseClick: (courseId: string) => void;
  
  // Academic Year Level
  academicYears: AcademicYear[];
  selectedAcademicYear: number | null;
  onAcademicYearClick: (year: number) => void;
  
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
  academicYears,
  selectedAcademicYear,
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
  onAcademicYearClick,
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
  
  const selectedUnitData = selectedUnit
    ? units.find(unit => unit.id === selectedUnit)
    : null;

  // Define course types data
  const courseTypes = [
    { id: "licenciatura", name: "Licenciaturas", description: "Cursos de 1º ciclo" },
    { id: "ctesp", name: "CTeSP", description: "Cursos Técnicos Superiores Profissionais" },
    { id: "mestrado", name: "Mestrados", description: "Cursos de 2º ciclo" }
  ];
  
  // Define the appropriate view based on the selected levels
  const renderView = () => {
    // 1. Show Institution view (top level)
    if (!selectedInstitution) {
      return (
        <InstitutionView 
          institutions={institutions}
          riskDistributionData={riskDistributionData}
          positiveFactorsData={positiveFactorsData}
          negativeFactorsData={negativeFactorsData}
          predictionComparisonData={predictionComparisonData}
          onInstitutionClick={onInstitutionClick}
        />
      );
    }
    
    // 2. Show Schools within the selected Institution
    if (selectedInstitution && !selectedSchool) {
      return (
        <SchoolView 
          schools={schools}
          riskDistributionData={riskDistributionData}
          positiveFactorsData={positiveFactorsData}
          negativeFactorsData={negativeFactorsData}
          predictionComparisonData={predictionComparisonData}
          onSchoolClick={onSchoolClick}
          institutionName={selectedInstitutionData?.name}
        />
      );
    }
    
    // 3. Show Course Types within the selected School
    if (selectedSchool && !selectedCourseType) {
      return (
        <CourseTypeView 
          schoolName={selectedSchoolData?.name}
          courseTypes={courseTypes}
          riskDistributionData={riskDistributionData}
          positiveFactorsData={positiveFactorsData}
          negativeFactorsData={negativeFactorsData}
          predictionComparisonData={predictionComparisonData}
          onCourseTypeClick={onCourseTypeClick}
        />
      );
    }
    
    // 4. Show Courses within the selected Course Type
    if (selectedCourseType && !selectedCourse) {
      const courseTypeNames: {[key: string]: string} = {
        "licenciatura": "Licenciaturas",
        "ctesp": "CTeSP",
        "mestrado": "Mestrados"
      };
      
      const courseTypeName = selectedCourseType ? courseTypeNames[selectedCourseType] || "" : "";
      
      return (
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
      );
    }
    
    // 5. Show Academic Years within the selected Course
    if (selectedCourse && !selectedAcademicYear) {
      return (
        <AcademicYearView 
          academicYears={academicYears}
          riskDistributionData={riskDistributionData}
          positiveFactorsData={positiveFactorsData}
          negativeFactorsData={negativeFactorsData}
          predictionComparisonData={predictionComparisonData}
          onAcademicYearClick={onAcademicYearClick}
          courseName={selectedCourseData?.name}
        />
      );
    }
    
    // 6. Show Course Units within the selected Academic Year
    if (selectedAcademicYear && !selectedUnit) {
      return (
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
          academicYear={selectedAcademicYear}
        />
      );
    }
    
    // 7. Show Students for the selected Course Unit
    if (selectedUnit) {
      return (
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
          academicYear={selectedAcademicYear}
        />
      );
    }
    
    // Fallback (should not happen)
    return (
      <p>Selecione uma opção para visualizar estatísticas.</p>
    );
  };

  // Get the correct tab level title
  const getTabLevelTitle = () => {
    if (selectedUnit) {
      return `Alunos - ${selectedUnitData?.name || 'Unidade Curricular'}`;
    } 
    if (selectedAcademicYear) {
      return `Unidades Curriculares - ${selectedAcademicYear}º Ano - ${selectedCourseData?.name || 'Curso'}`;
    }
    if (selectedCourse) {
      return `Anos Letivos - ${selectedCourseData?.name || 'Curso'}`;
    }
    if (selectedCourseType) {
      const courseTypeNames: {[key: string]: string} = {
        "licenciatura": "Licenciaturas",
        "ctesp": "CTeSP",
        "mestrado": "Mestrados"
      };
      const courseTypeName = selectedCourseType ? courseTypeNames[selectedCourseType] || "" : "";
      return `${courseTypeName} - ${selectedSchoolData?.name || 'Escola'}`;
    }
    if (selectedSchool) {
      return `Tipos de Curso - ${selectedSchoolData?.name || 'Escola'}`;
    }
    if (selectedInstitution) {
      return `Escolas de ${selectedInstitutionData?.name || 'Instituição'}`;
    }
    return "Estatísticas por Instituição";
  };

  // Get parent level for breadcrumb navigation
  const getParentLevel = () => {
    if (selectedUnit) {
      return "Unidades Curriculares";
    }
    if (selectedAcademicYear) {
      return "Anos Letivos";
    }
    if (selectedCourse) {
      return "Cursos";
    }
    if (selectedCourseType) {
      return "Tipos de Curso";
    }
    if (selectedSchool) {
      return "Escolas";
    }
    if (selectedInstitution) {
      return "Instituições";
    }
    return "";
  };

  return (
    <div className="space-y-6">
      <UserLevelTabs 
        level={getTabLevelTitle()}
        onBackClick={selectedInstitution ? onBackClick : undefined}
        parent={getParentLevel()}
      />
      <div className="mb-6">
        {renderView()}
      </div>
    </div>
  );
};

export default ByUserTab;
