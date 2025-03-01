
import React from 'react';
import RiskDistributionChart from './RiskDistributionChart';
import FactorsBarChart from './FactorsBarChart';
import { RiskDistribution, FactorFrequency } from '../../types';

interface RiskDetailGraphsProps {
  riskDistributionData: RiskDistribution[];
  positiveFactorsData: FactorFrequency[];
  negativeFactorsData: FactorFrequency[];
}

const RiskDetailGraphs: React.FC<RiskDetailGraphsProps> = ({ 
  riskDistributionData, 
  positiveFactorsData, 
  negativeFactorsData 
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-100 p-4">
        <RiskDistributionChart data={riskDistributionData} />
      </div>
      
      <div className="bg-white rounded-lg border border-gray-100 p-4">
        <FactorsBarChart 
          data={positiveFactorsData} 
          title="Fatores Positivos Mais Frequentes" 
          color="#10b981"
        />
      </div>
      
      <div className="bg-white rounded-lg border border-gray-100 p-4">
        <FactorsBarChart 
          data={negativeFactorsData} 
          title="Fatores Negativos Mais Frequentes" 
          color="#f43f5e"
        />
      </div>
    </div>
  );
};

export default RiskDetailGraphs;
