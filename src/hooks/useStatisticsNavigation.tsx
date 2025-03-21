
import { useState } from 'react';

export function useStatisticsNavigation() {
  const [selectedInstitution, setSelectedInstitution] = useState<string | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [selectedCourseType, setSelectedCourseType] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  const handleInstitutionClick = (institutionId: string) => {
    setSelectedInstitution(institutionId);
    setSelectedSchool(null);
    setSelectedCourseType(null);
    setSelectedCourse(null);
    setSelectedUnit(null);
  };
  
  const handleSchoolClick = (schoolId: string) => {
    setSelectedSchool(schoolId);
    setSelectedCourseType(null);
    setSelectedCourse(null);
    setSelectedUnit(null);
  };
  
  const handleCourseTypeClick = (courseType: string) => {
    setSelectedCourseType(courseType);
    setSelectedCourse(null);
    setSelectedUnit(null);
  };
  
  const handleCourseClick = (courseId: string) => {
    setSelectedCourse(courseId);
    setSelectedUnit(null);
  };
  
  const handleUnitClick = (unitId: string) => {
    setSelectedUnit(unitId);
  };
  
  const handleBackClick = () => {
    // Determine which level to go back to
    if (selectedUnit) {
      setSelectedUnit(null);
    } else if (selectedCourse) {
      setSelectedCourse(null);
    } else if (selectedCourseType) {
      setSelectedCourseType(null);
    } else if (selectedSchool) {
      setSelectedSchool(null);
    } else if (selectedInstitution) {
      setSelectedInstitution(null);
    }
  };

  return {
    selectedInstitution,
    selectedSchool,
    selectedCourseType,
    selectedCourse,
    selectedUnit,
    handleInstitutionClick,
    handleSchoolClick,
    handleCourseTypeClick,
    handleCourseClick,
    handleUnitClick,
    handleBackClick
  };
}
