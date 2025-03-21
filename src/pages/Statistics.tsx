
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import StatisticsTabs from '../components/statistics/StatisticsTabs';
import { studentsMock } from '../data/mockData';
import ByUserTab from '../components/statistics/ByUserTab';
import { useStatisticsNavigation } from '../hooks/useStatisticsNavigation';

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
  
  // Use the new navigation hook
  const navigation = useStatisticsNavigation();
  
  const handleExportCSV = () => {
    alert("Exportação de CSV (funcionalidade de demonstração)");
  };
  
  // Filter data based on selections
  const filteredSchools = navigation.selectedInstitution
    ? schoolsMock.filter(school => school.institutionId === navigation.selectedInstitution)
    : schoolsMock;
  
  const filteredCourses = navigation.selectedSchool && navigation.selectedCourseType
    ? coursesMock.filter(course => 
        course.schoolId === navigation.selectedSchool && course.type === navigation.selectedCourseType)
    : coursesMock;
  
  const filteredUnits = navigation.selectedCourse
    ? courseUnitsMock.filter(unit => unit.courseId === navigation.selectedCourse)
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
  const filteredStudents = navigation.selectedUnit
    ? enhancedStudents.filter(student => 
        student.courseUnitIds && student.courseUnitIds.includes(navigation.selectedUnit))
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
              selectedInstitution={navigation.selectedInstitution}
              schools={filteredSchools}
              selectedSchool={navigation.selectedSchool}
              selectedCourseType={navigation.selectedCourseType}
              courses={filteredCourses}
              selectedCourse={navigation.selectedCourse}
              units={filteredUnits}
              selectedUnit={navigation.selectedUnit}
              riskDistributionData={riskDistributionMock}
              positiveFactorsData={positiveFactorsMock}
              negativeFactorsData={negativeFactorsMock}
              predictionComparisonData={predictionComparisonMock}
              students={filteredStudents}
              onInstitutionClick={navigation.handleInstitutionClick}
              onSchoolClick={navigation.handleSchoolClick}
              onCourseTypeClick={navigation.handleCourseTypeClick}
              onCourseClick={navigation.handleCourseClick}
              onUnitClick={navigation.handleUnitClick}
              onBackClick={navigation.handleBackClick}
              onExportCSV={handleExportCSV}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
