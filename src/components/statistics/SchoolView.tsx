
import React from 'react';
import RiskDetailGraphs from './RiskDetailGraphs';
import { School, RiskDistribution, FactorFrequency, Course } from '../../types';
import { ArrowDown } from 'lucide-react';
import CourseView from './CourseView';

interface SchoolViewProps {
  schools: School[];
  riskDistributionData: RiskDistribution[];
  positiveFactorsData: FactorFrequency[];
  negativeFactorsData: FactorFrequency[];
  onSchoolClick: (schoolId: string) => void;
  schoolName?: string;
  selectedSchool?: string | null;
}

const SchoolView: React.FC<SchoolViewProps> = ({
  schools,
  riskDistributionData,
  positiveFactorsData,
  negativeFactorsData,
  onSchoolClick,
  schoolName,
  selectedSchool
}) => {
  // Find the selected school and its courses
  const selectedSchoolData = selectedSchool ? schools.find(school => school.id === selectedSchool) : null;
  const schoolCourses = selectedSchoolData?.courses || [];
  
  if (selectedSchool && selectedSchoolData) {
    return (
      <CourseView 
        courses={schoolCourses}
        riskDistributionData={riskDistributionData}
        positiveFactorsData={positiveFactorsData}
        negativeFactorsData={negativeFactorsData}
        onCourseClick={onSchoolClick} // Reusing the onSchoolClick function for course clicks
        schoolName={selectedSchoolData.name}
      />
    );
  }
  
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {schoolName ? `Escolas de ${schoolName}` : "Estatísticas por Escola"}
      </h2>
      
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
              {schools.map((school) => (
                <tr 
                  key={school.id} 
                  className="animate-fadeIn cursor-pointer hover:bg-gray-50"
                  onClick={() => onSchoolClick(school.id)}
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
      
      <RiskDetailGraphs 
        riskDistributionData={riskDistributionData}
        positiveFactorsData={positiveFactorsData}
        negativeFactorsData={negativeFactorsData}
      />
    </div>
  );
};

export default SchoolView;
