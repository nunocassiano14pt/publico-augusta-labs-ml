
import React from 'react';
import RiskDetailGraphs from './RiskDetailGraphs';
import PredictionComparisonChart from './PredictionComparisonChart';
import { RiskDistribution, FactorFrequency, PredictionComparison } from '../../types';

interface CourseTypeViewProps {
  schoolName?: string;
  courseTypes: { id: string; name: string; description: string }[];
  riskDistributionData: RiskDistribution[];
  positiveFactorsData: FactorFrequency[];
  negativeFactorsData: FactorFrequency[];
  predictionComparisonData: PredictionComparison[];
  onCourseTypeClick: (courseTypeId: string) => void;
}

const CourseTypeView: React.FC<CourseTypeViewProps> = ({
  schoolName,
  courseTypes,
  riskDistributionData,
  positiveFactorsData,
  negativeFactorsData,
  predictionComparisonData,
  onCourseTypeClick
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">
        Tipos de Curso em {schoolName || 'Escola'}
      </h2>
      
      <div className="mb-6">
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="data-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              {courseTypes.map((type) => (
                <tr 
                  key={type.id} 
                  className="animate-fadeIn cursor-pointer hover:bg-gray-50"
                  onClick={() => onCourseTypeClick(type.id)}
                >
                  <td>{type.name}</td>
                  <td>{type.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium mb-4">Comparação de Previsões por Tipo de Curso</h3>
        <PredictionComparisonChart data={predictionComparisonData} />
      </div>
      
      <RiskDetailGraphs 
        riskDistributionData={riskDistributionData}
        positiveFactorsData={positiveFactorsData}
        negativeFactorsData={negativeFactorsData}
      />
    </div>
  );
};

export default CourseTypeView;
