
import React from 'react';
import RiskDistributionChart from './RiskDistributionChart';
import FactorsBarChart from './FactorsBarChart';
import { RiskDistribution, FactorFrequency } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  // Enhance the risk distribution data with colors
  const enhancedRiskData = riskDistributionData.map(item => {
    let color = '#10b981'; // Default green for low risk
    
    if (item.category.includes('Alto')) {
      color = '#d92323'; // Red for high risk - using Público color
    } else if (item.category.includes('Médio')) {
      color = '#f59e0b'; // Yellow/amber for medium risk
    }
    
    return { ...item, color };
  });

  return (
    <div className="space-y-6">
      <Card className="publico-gradient-card pl-4">
        <CardHeader>
          <CardTitle>Distribuição por Previsão de Desistência</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <RiskDistributionChart data={enhancedRiskData} />
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#d92323]"></div>
              <span className="text-sm">Alto Risco</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
              <span className="text-sm">Médio Risco</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
              <span className="text-sm">Baixo Risco</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="publico-gradient-card pl-4">
        <CardHeader>
          <CardTitle>Fatores Positivos Mais Frequentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <FactorsBarChart 
              data={positiveFactorsData} 
              title="Fatores Positivos Mais Frequentes" 
              color="#10b981"
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="publico-gradient-card pl-4">
        <CardHeader>
          <CardTitle>Fatores Negativos Mais Frequentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <FactorsBarChart 
              data={negativeFactorsData} 
              title="Fatores Negativos Mais Frequentes" 
              color="#d92323"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskDetailGraphs;
