
import React from 'react';
import RiskDetailGraphs from './RiskDetailGraphs';
import PredictionComparisonChart from './PredictionComparisonChart';
import { AcademicYear, RiskDistribution, FactorFrequency, PredictionComparison } from '../../types';
import { ArrowDown } from 'lucide-react';

interface AcademicYearViewProps {
  academicYears: AcademicYear[];
  riskDistributionData: RiskDistribution[];
  positiveFactorsData: FactorFrequency[];
  negativeFactorsData: FactorFrequency[];
  predictionComparisonData: PredictionComparison[];
  onAcademicYearClick: (year: number) => void;
  courseName?: string;
}

const AcademicYearView: React.FC<AcademicYearViewProps> = ({
  academicYears,
  riskDistributionData,
  positiveFactorsData,
  negativeFactorsData,
  predictionComparisonData,
  onAcademicYearClick,
  courseName
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {courseName 
          ? `Anos Letivos de ${courseName}` 
          : "Estatísticas por Ano Letivo"}
      </h2>
      
      <div className="mb-6">
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="data-table">
            <thead>
              <tr>
                <th>Ano</th>
                <th>Nº UCs</th>
                <th>Nº Assinantes</th>
                <th>Risco Médio</th>
              </tr>
            </thead>
            <tbody>
              {academicYears.map((academicYear) => (
                <tr 
                  key={academicYear.id} 
                  className="animate-fadeIn cursor-pointer hover:bg-gray-50"
                  onClick={() => onAcademicYearClick(academicYear.year)}
                >
                  <td>{academicYear.year}º Ano</td>
                  <td>{academicYear.categoryCount}</td>
                  <td>{academicYear.subscriberCount}</td>
                  <td>
                    <div className="risk-indicator">
                      {academicYear.risk >= 80 ? (
                        <div className="risk-indicator high">
                          <ArrowDown size={14} className="mr-1 transform rotate-180" />
                          {academicYear.risk.toFixed(2)}%
                        </div>
                      ) : academicYear.risk >= 70 ? (
                        <div className="risk-indicator medium">
                          <span className="mr-1 font-bold">—</span>
                          {academicYear.risk.toFixed(2)}%
                        </div>
                      ) : (
                        <div className="risk-indicator low">
                          <ArrowDown size={14} className="mr-1" />
                          {academicYear.risk.toFixed(2)}%
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
        <h3 className="text-lg font-medium mb-4">Comparação de Previsões por Ano Letivo</h3>
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

export default AcademicYearView;
