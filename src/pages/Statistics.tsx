
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import StatisticsTabs from '../components/statistics/StatisticsTabs';
import { studentsMock } from '../data/mockData';
import ByUserTab from '../components/statistics/ByUserTab';

import { 
  predictionComparisonMock,
  riskDistributionMock,
  positiveFactorsMock,
  negativeFactorsMock,
  courseUnitsMock,
  coursesMock,
  schoolsMock,
  institutionsMock
} from '../data/statisticsMockData';

const Statistics = () => {
  const [activeTab, setActiveTab] = useState('by-user');
  
  // Navigation state
  const [selectedInstitution, setSelectedInstitution] = useState<string | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [selectedCourseType, setSelectedCourseType] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  
  const handleExportCSV = () => {
    alert("Exportação de CSV (funcionalidade de demonstração)");
  };
  
  // Handle navigation clicks
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
  
  // Filter data based on selections
  const filteredSchools = selectedInstitution
    ? schoolsMock.filter(school => school.institutionId === selectedInstitution)
    : schoolsMock;
  
  const filteredCourses = selectedSchool && selectedCourseType
    ? coursesMock.filter(course => 
        course.schoolId === selectedSchool && course.type === selectedCourseType)
    : coursesMock;
  
  const filteredUnits = selectedCourse
    ? courseUnitsMock.filter(unit => unit.courseId === selectedCourse)
    : courseUnitsMock;

  // Ensure all course units have associated students
  const unitsWithStudentAssociation = courseUnitsMock.reduce((acc, unit) => {
    if (!acc.includes(unit.id)) {
      acc.push(unit.id);
    }
    return acc;
  }, [] as string[]);
  
  // Ensure students have courseUnitIds assigned
  const enhancedStudents = studentsMock.map(student => {
    // Assign consistent course unit IDs based on student ID
    // This ensures the same students always appear in the same units
    const studentIndex = parseInt(student.cod_pessoa) % unitsWithStudentAssociation.length;
    const primaryUnitId = unitsWithStudentAssociation[studentIndex];
    
    // Assign 1-3 units to each student, always including their primary unit
    const additionalUnits = unitsWithStudentAssociation
      .filter(id => id !== primaryUnitId)
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.floor(Math.random() * 2)); // 0, 1, or 2 additional units
    
    const assignedUnitIds = [primaryUnitId, ...additionalUnits];
    
    return {
      ...student,
      courseUnitIds: assignedUnitIds
    };
  });
  
  // Filter students by the selected unit
  const filteredStudents = selectedUnit
    ? enhancedStudents.filter(student => 
        student.courseUnitIds && student.courseUnitIds.includes(selectedUnit))
    : [];
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Previsão de Abandono', path: '/' },
              { label: 'Estatísticas' },
            ]}
          />
          <PageTitle title="Estatísticas de Abandono Escolar" />
        </div>
        
        <div className="dashboard-card mb-6">
          <div className="p-6">
            <div className="mb-6">
              <StatisticsTabs 
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>
            
            <ByUserTab 
              institutions={institutionsMock}
              selectedInstitution={selectedInstitution}
              schools={filteredSchools}
              selectedSchool={selectedSchool}
              selectedCourseType={selectedCourseType}
              courses={filteredCourses}
              selectedCourse={selectedCourse}
              units={filteredUnits}
              selectedUnit={selectedUnit}
              riskDistributionData={riskDistributionMock}
              positiveFactorsData={positiveFactorsMock}
              negativeFactorsData={negativeFactorsMock}
              predictionComparisonData={predictionComparisonMock}
              students={filteredStudents}
              onInstitutionClick={handleInstitutionClick}
              onSchoolClick={handleSchoolClick}
              onCourseTypeClick={handleCourseTypeClick}
              onCourseClick={handleCourseClick}
              onUnitClick={handleUnitClick}
              onBackClick={handleBackClick}
              onExportCSV={handleExportCSV}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
