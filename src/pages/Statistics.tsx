
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import StatisticsTabs from '../components/statistics/StatisticsTabs';
import { TabsContent } from "@/components/ui/tabs";
import { useNavigate } from 'react-router-dom';
import { studentsMock } from '../data/mockData';
import OverviewTab from '../components/statistics/OverviewTab';
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
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [activeLevel, setActiveLevel] = useState('course-unit');
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>('c1'); // Default to Artes e Cinema Digital
  const [selectedSchool, setSelectedSchool] = useState<string | null>('s1'); // Default to Escola Superior de Educação
  
  const handleExportCSV = () => {
    alert("Exportação de CSV (funcionalidade de demonstração)");
  };
  
  const handleUnitClick = (unitId: string) => {
    setSelectedUnit(unitId);
    // In a real app, we would filter students by the unit ID
    // For demo purposes, we'll just set the state to show the "details view"
  };

  const handleCourseClick = (courseId: string) => {
    setSelectedCourse(courseId);
    setActiveLevel('course-unit');
    // Here we would filter units by the course ID
  };

  const handleSchoolClick = (schoolId: string) => {
    setSelectedSchool(schoolId);
    setActiveLevel('course');
    // Here we would filter courses by the school ID
  };

  const handleInstitutionClick = (institutionId: string) => {
    setActiveLevel('school');
    // Here we would filter schools by the institution ID
  };
  
  // Get the filtered units based on selected course
  const selectedCourseData = coursesMock.find(course => course.id === selectedCourse);
  const filteredUnits = selectedCourseData?.units || courseUnitsMock;
  
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
            
            {activeTab === 'overview' && (
              <OverviewTab predictionComparisonData={predictionComparisonMock} />
            )}
            
            {activeTab === 'by-user' && (
              <ByUserTab 
                activeLevel={activeLevel}
                onLevelChange={setActiveLevel}
                units={filteredUnits}
                selectedUnit={selectedUnit}
                courses={coursesMock}
                selectedCourse={selectedCourse}
                schools={schoolsMock}
                selectedSchool={selectedSchool}
                institutions={institutionsMock}
                riskDistributionData={riskDistributionMock}
                positiveFactorsData={positiveFactorsMock}
                negativeFactorsData={negativeFactorsMock}
                students={studentsMock.slice(0, 10)}
                onUnitClick={handleUnitClick}
                onBackToUnits={() => setSelectedUnit(null)}
                onCourseClick={handleCourseClick}
                onSchoolClick={handleSchoolClick}
                onInstitutionClick={handleInstitutionClick}
                onExportCSV={handleExportCSV}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
