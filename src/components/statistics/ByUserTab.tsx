
import React from 'react';
import UserLevelTabs from './UserLevelTabs';
import CourseUnitView from './CourseUnitView';
import CourseView from './CourseView';
import SchoolView from './SchoolView';
import InstitutionView from './InstitutionView';
import { 
  CourseUnit, 
  Course, 
  School, 
  Institution, 
  RiskDistribution, 
  FactorFrequency,
  Student
} from '../../types';

interface ByUserTabProps {
  activeLevel: string;
  onLevelChange: (level: string) => void;
  
  // Course Unit Level
  units: CourseUnit[];
  selectedUnit: string | null;
  onUnitClick: (unitId: string) => void;
  onBackToUnits: () => void;
  
  // Course Level
  courses: Course[];
  selectedCourse: string | null;
  onCourseClick: (courseId: string) => void;
  
  // School Level
  schools: School[];
  selectedSchool: string | null;
  onSchoolClick: (schoolId: string) => void;
  
  // Institution Level
  institutions: Institution[];
  onInstitutionClick: (institutionId: string) => void;

  // Common data
  riskDistributionData: RiskDistribution[];
  positiveFactorsData: FactorFrequency[];
  negativeFactorsData: FactorFrequency[];
  
  // Students for selected unit
  students: Student[];
  onExportCSV: () => void;
}

const ByUserTab: React.FC<ByUserTabProps> = ({
  activeLevel,
  onLevelChange,
  units,
  selectedUnit,
  courses,
  selectedCourse,
  schools,
  selectedSchool,
  institutions,
  riskDistributionData,
  positiveFactorsData,
  negativeFactorsData,
  students,
  onUnitClick,
  onBackToUnits,
  onCourseClick,
  onSchoolClick,
  onInstitutionClick,
  onExportCSV
}) => {
  // Find the selected course name to pass to CourseUnitView
  const selectedCourseData = selectedCourse ? courses.find(course => course.id === selectedCourse) : null;
  const courseName = selectedCourseData?.name || "Artes e Cinema Digital";
  
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <UserLevelTabs 
          activeLevel={activeLevel}
          onLevelChange={onLevelChange}
        />
      </div>
      
      {activeLevel === 'course-unit' && (
        <CourseUnitView 
          units={units}
          selectedUnit={selectedUnit}
          riskDistributionData={riskDistributionData}
          positiveFactorsData={positiveFactorsData}
          negativeFactorsData={negativeFactorsData}
          students={students}
          onUnitClick={onUnitClick}
          onExportCSV={onExportCSV}
          onBack={onBackToUnits}
          courseName={courseName}
        />
      )}
      
      {activeLevel === 'course' && (
        <CourseView 
          courses={courses}
          riskDistributionData={riskDistributionData}
          positiveFactorsData={positiveFactorsData}
          negativeFactorsData={negativeFactorsData}
          onCourseClick={onCourseClick}
          schoolName={selectedSchool ? schools.find(school => school.id === selectedSchool)?.name : undefined}
        />
      )}
      
      {activeLevel === 'school' && (
        <SchoolView 
          schools={schools}
          riskDistributionData={riskDistributionData}
          positiveFactorsData={positiveFactorsData}
          negativeFactorsData={negativeFactorsData}
          onSchoolClick={onSchoolClick}
          schoolName={selectedSchool ? schools.find(school => school.id === selectedSchool)?.name : undefined}
          selectedSchool={selectedSchool}
        />
      )}
      
      {activeLevel === 'institution' && (
        <InstitutionView 
          institutions={institutions}
          riskDistributionData={riskDistributionData}
          positiveFactorsData={positiveFactorsData}
          negativeFactorsData={negativeFactorsData}
          onInstitutionClick={onInstitutionClick}
        />
      )}
    </div>
  );
};

export default ByUserTab;
