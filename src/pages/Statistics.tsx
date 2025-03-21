
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

  // Get all course unit IDs
  const allUnitIds = courseUnitsMock.map(unit => unit.id);
  
  // Ensure all students have courseUnitIds
  const enhancedStudents = studentsMock.map((student, index) => {
    // Ensuring consistent assignment of students to units
    // Each student will be assigned to 2-3 units
    const baseUnitIndex = index % allUnitIds.length;
    const primaryUnitId = allUnitIds[baseUnitIndex];
    
    // Select additional units for this student
    const secondaryUnitIndex = (baseUnitIndex + 10) % allUnitIds.length;
    const secondaryUnitId = allUnitIds[secondaryUnitIndex];
    
    const tertiaryUnitIndex = (baseUnitIndex + 20) % allUnitIds.length;
    const tertiaryUnitId = allUnitIds[tertiaryUnitIndex];
    
    // Assign 2-3 units to each student
    const assignedUnitIds = index % 3 === 0 
      ? [primaryUnitId, secondaryUnitId] 
      : [primaryUnitId, secondaryUnitId, tertiaryUnitId];
    
    return {
      ...student,
      courseUnitIds: assignedUnitIds
    };
  });
  
  // Create a mapping of unit IDs to students for efficient lookup
  const unitToStudentsMap = allUnitIds.reduce((map, unitId) => {
    map[unitId] = enhancedStudents.filter(student => 
      student.courseUnitIds && student.courseUnitIds.includes(unitId)
    );
    return map;
  }, {} as Record<string, typeof enhancedStudents>);
  
  // Verify that all units have at least some students
  allUnitIds.forEach(unitId => {
    if (unitToStudentsMap[unitId].length === 0) {
      // If a unit has no students, assign some
      const studentsToAssign = enhancedStudents.slice(0, 5);
      studentsToAssign.forEach(student => {
        if (!student.courseUnitIds.includes(unitId)) {
          student.courseUnitIds.push(unitId);
        }
      });
      unitToStudentsMap[unitId] = studentsToAssign;
    }
  });
  
  // Filter students by the selected unit
  const filteredStudents = navigation.selectedUnit
    ? unitToStudentsMap[navigation.selectedUnit] || []
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
