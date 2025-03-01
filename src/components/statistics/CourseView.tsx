
import React from 'react';
import RiskDetailGraphs from './RiskDetailGraphs';
import { Course, RiskDistribution, FactorFrequency } from '../../types';
import { ArrowDown } from 'lucide-react';

interface CourseViewProps {
  courses: Course[];
  riskDistributionData: RiskDistribution[];
  positiveFactorsData: FactorFrequency[];
  negativeFactorsData: FactorFrequency[];
  onCourseClick: (courseId: string) => void;
}

const CourseView: React.FC<CourseViewProps> = ({
  courses,
  riskDistributionData,
  positiveFactorsData,
  negativeFactorsData,
  onCourseClick
}) => {
  return (
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
              {courses.map((course) => (
                <tr 
                  key={course.id} 
                  className="animate-fadeIn cursor-pointer hover:bg-gray-50"
                  onClick={() => onCourseClick(course.id)}
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
      
      <RiskDetailGraphs 
        riskDistributionData={riskDistributionData}
        positiveFactorsData={positiveFactorsData}
        negativeFactorsData={negativeFactorsData}
      />
    </div>
  );
};

export default CourseView;
