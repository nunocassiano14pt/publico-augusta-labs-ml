
import React from 'react';
import RiskDetailGraphs from './RiskDetailGraphs';
import PredictionComparisonChart from './PredictionComparisonChart';
import { School, RiskDistribution, FactorFrequency, PredictionComparison } from '../../types';
import { ArrowDown } from 'lucide-react';

interface SchoolViewProps {
  schools: School[];
  riskDistributionData: RiskDistribution[];
  positiveFactorsData: FactorFrequency[];
  negativeFactorsData: FactorFrequency[];
  predictionComparisonData: PredictionComparison[];
  onSchoolClick: (schoolId: string) => void;
  institutionName?: string;
}

const SchoolView: React.FC<SchoolViewProps> = ({
  schools,
  riskDistributionData,
  positiveFactorsData,
  negativeFactorsData,
  predictionComparisonData,
  onSchoolClick,
  institutionName
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {institutionName ? `Escolas de ${institutionName}` : "Estatísticas por Escola"}
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
      
      <div className="mt-8 mb-8">
        <h3 className="text-lg font-medium mb-4">Comparação de Previsões por Escola</h3>
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

export default SchoolView;
