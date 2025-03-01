
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import StatisticsTabs from '../components/statistics/StatisticsTabs';
import UserLevelTabs from '../components/statistics/UserLevelTabs';
import PredictionComparisonChart from '../components/statistics/PredictionComparisonChart';
import RiskDistributionChart from '../components/statistics/RiskDistributionChart';
import FactorsBarChart from '../components/statistics/FactorsBarChart';
import CourseUnitsTable from '../components/statistics/CourseUnitsTable';
import { TabsContent } from "@/components/ui/tabs";
import { ArrowDown } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState('overview');
  const [activeLevel, setActiveLevel] = useState('course-unit');
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  
  const handleUnitClick = (unitId: string) => {
    setSelectedUnit(unitId);
    // Aqui você pode adicionar mais lógica se necessário
    alert(`Unidade curricular selecionada: ${unitId}`);
  };

  const handleCourseClick = (courseId: string) => {
    setSelectedCourse(courseId);
    setActiveLevel('course-unit');
    // Aqui você pode adicionar mais lógica se necessário
  };

  const handleSchoolClick = (schoolId: string) => {
    setSelectedSchool(schoolId);
    setActiveLevel('course');
    // Aqui você pode adicionar mais lógica se necessário
  };
  
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
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Alunos Previstos vs Reais</h2>
                  <div className="bg-white rounded-lg border border-gray-100 p-4">
                    <p className="text-sm text-gray-500 mb-4">
                      Este gráfico compara o número de alunos previstos para abandonar com o número real de desistências ao longo do tempo.
                    </p>
                    <PredictionComparisonChart data={predictionComparisonMock} />
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'by-user' && (
              <div className="space-y-6">
                <div className="mb-6">
                  <UserLevelTabs 
                    activeLevel={activeLevel}
                    onLevelChange={setActiveLevel}
                  />
                </div>
                
                {activeLevel === 'course-unit' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Estatísticas por Unidade Curricular</h2>
                    
                    <div className="mb-6">
                      <CourseUnitsTable 
                        units={courseUnitsMock}
                        onUnitClick={handleUnitClick}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                      <div className="bg-white rounded-lg border border-gray-100 p-4">
                        <h3 className="text-lg font-medium mb-4">Distribuição de Risco</h3>
                        <RiskDistributionChart data={riskDistributionMock} />
                      </div>
                      
                      <div className="bg-white rounded-lg border border-gray-100 p-4 lg:col-span-2">
                        <FactorsBarChart 
                          data={positiveFactorsMock} 
                          title="Fatores Positivos Mais Frequentes" 
                          color="#10b981"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-100 p-4">
                      <FactorsBarChart 
                        data={negativeFactorsMock} 
                        title="Fatores Negativos Mais Frequentes" 
                        color="#f43f5e"
                      />
                    </div>
                  </div>
                )}
                
                {activeLevel === 'course' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Estatísticas por Curso</h2>
                    
                    <div className="mb-6">
                      <div className="overflow-hidden rounded-lg border border-gray-200">
                        <table className="data-table">
                          <thead>
                            <tr>
                              <th>Código</th>
                              <th>Nome</th>
                              <th>Nº UCs</th>
                              <th>Nº Alunos</th>
                              <th>Risco Médio</th>
                            </tr>
                          </thead>
                          <tbody>
                            {coursesMock.map((course) => (
                              <tr 
                                key={course.id} 
                                className="animate-fadeIn cursor-pointer hover:bg-gray-50"
                                onClick={() => handleCourseClick(course.id)}
                              >
                                <td>{course.id}</td>
                                <td>{course.name}</td>
                                <td>{course.unitCount}</td>
                                <td>{course.studentCount}</td>
                                <td>
                                  <div className="risk-indicator">
                                    {course.risk >= 80 ? (
                                      <div className="risk-indicator high">
                                        <ArrowDown size={14} className="mr-1 transform rotate-180" />
                                        {course.risk.toFixed(2)}%
                                      </div>
                                    ) : course.risk >= 70 ? (
                                      <div className="risk-indicator medium">
                                        <span className="mr-1 font-bold">—</span>
                                        {course.risk.toFixed(2)}%
                                      </div>
                                    ) : (
                                      <div className="risk-indicator low">
                                        <ArrowDown size={14} className="mr-1" />
                                        {course.risk.toFixed(2)}%
                                      </div>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                      <div className="bg-white rounded-lg border border-gray-100 p-4">
                        <h3 className="text-lg font-medium mb-4">Distribuição de Risco</h3>
                        <RiskDistributionChart data={riskDistributionMock} />
                      </div>
                      
                      <div className="bg-white rounded-lg border border-gray-100 p-4 lg:col-span-2">
                        <FactorsBarChart 
                          data={positiveFactorsMock} 
                          title="Fatores Positivos Mais Frequentes" 
                          color="#10b981"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-100 p-4">
                      <FactorsBarChart 
                        data={negativeFactorsMock} 
                        title="Fatores Negativos Mais Frequentes" 
                        color="#f43f5e"
                      />
                    </div>
                  </div>
                )}
                
                {activeLevel === 'school' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Estatísticas por Escola</h2>
                    
                    <div className="mb-6">
                      <div className="overflow-hidden rounded-lg border border-gray-200">
                        <table className="data-table">
                          <thead>
                            <tr>
                              <th>Código</th>
                              <th>Nome</th>
                              <th>Nº Cursos</th>
                              <th>Nº Alunos</th>
                              <th>Risco Médio</th>
                            </tr>
                          </thead>
                          <tbody>
                            {schoolsMock.map((school) => (
                              <tr 
                                key={school.id} 
                                className="animate-fadeIn cursor-pointer hover:bg-gray-50"
                                onClick={() => handleSchoolClick(school.id)}
                              >
                                <td>{school.id}</td>
                                <td>{school.name}</td>
                                <td>{school.courseCount}</td>
                                <td>{school.studentCount}</td>
                                <td>
                                  <div className="risk-indicator">
                                    {school.risk >= 80 ? (
                                      <div className="risk-indicator high">
                                        <ArrowDown size={14} className="mr-1 transform rotate-180" />
                                        {school.risk.toFixed(2)}%
                                      </div>
                                    ) : school.risk >= 70 ? (
                                      <div className="risk-indicator medium">
                                        <span className="mr-1 font-bold">—</span>
                                        {school.risk.toFixed(2)}%
                                      </div>
                                    ) : (
                                      <div className="risk-indicator low">
                                        <ArrowDown size={14} className="mr-1" />
                                        {school.risk.toFixed(2)}%
                                      </div>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                      <div className="bg-white rounded-lg border border-gray-100 p-4">
                        <h3 className="text-lg font-medium mb-4">Distribuição de Risco</h3>
                        <RiskDistributionChart data={riskDistributionMock} />
                      </div>
                      
                      <div className="bg-white rounded-lg border border-gray-100 p-4 lg:col-span-2">
                        <FactorsBarChart 
                          data={positiveFactorsMock} 
                          title="Fatores Positivos Mais Frequentes" 
                          color="#10b981"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-100 p-4">
                      <FactorsBarChart 
                        data={negativeFactorsMock} 
                        title="Fatores Negativos Mais Frequentes" 
                        color="#f43f5e"
                      />
                    </div>
                  </div>
                )}
                
                {activeLevel === 'institution' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Estatísticas por Instituição</h2>
                    
                    <div className="mb-6">
                      <div className="overflow-hidden rounded-lg border border-gray-200">
                        <table className="data-table">
                          <thead>
                            <tr>
                              <th>Código</th>
                              <th>Nome</th>
                              <th>Nº Escolas</th>
                              <th>Nº Alunos</th>
                              <th>Risco Médio</th>
                            </tr>
                          </thead>
                          <tbody>
                            {institutionsMock.map((institution) => (
                              <tr 
                                key={institution.id} 
                                className="animate-fadeIn cursor-pointer hover:bg-gray-50"
                              >
                                <td>{institution.id}</td>
                                <td>{institution.name}</td>
                                <td>{institution.schoolCount}</td>
                                <td>{institution.studentCount}</td>
                                <td>
                                  <div className="risk-indicator">
                                    {institution.risk >= 80 ? (
                                      <div className="risk-indicator high">
                                        <ArrowDown size={14} className="mr-1 transform rotate-180" />
                                        {institution.risk.toFixed(2)}%
                                      </div>
                                    ) : institution.risk >= 70 ? (
                                      <div className="risk-indicator medium">
                                        <span className="mr-1 font-bold">—</span>
                                        {institution.risk.toFixed(2)}%
                                      </div>
                                    ) : (
                                      <div className="risk-indicator low">
                                        <ArrowDown size={14} className="mr-1" />
                                        {institution.risk.toFixed(2)}%
                                      </div>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                      <div className="bg-white rounded-lg border border-gray-100 p-4">
                        <h3 className="text-lg font-medium mb-4">Distribuição de Risco</h3>
                        <RiskDistributionChart data={riskDistributionMock} />
                      </div>
                      
                      <div className="bg-white rounded-lg border border-gray-100 p-4 lg:col-span-2">
                        <FactorsBarChart 
                          data={positiveFactorsMock} 
                          title="Fatores Positivos Mais Frequentes" 
                          color="#10b981"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-gray-100 p-4">
                      <FactorsBarChart 
                        data={negativeFactorsMock} 
                        title="Fatores Negativos Mais Frequentes" 
                        color="#f43f5e"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
