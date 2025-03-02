
import React from 'react';
import PredictionComparisonChart from './PredictionComparisonChart';
import { PredictionComparison } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OverviewTabProps {
  predictionComparisonData: PredictionComparison[];
}

const OverviewTab: React.FC<OverviewTabProps> = ({ predictionComparisonData }) => {
  // Calculate average percentage difference between predicted and actual
  const calculatePercentageDifference = () => {
    if (!predictionComparisonData.length) return 0;
    
    const differences = predictionComparisonData.map(item => {
      const diff = ((item.predicted - item.actual) / item.predicted) * 100;
      return Math.round(diff * 100) / 100; // Round to 2 decimal places
    });
    
    const avgDifference = differences.reduce((sum, diff) => sum + diff, 0) / differences.length;
    return Math.round(avgDifference * 100) / 100; // Round to 2 decimal places
  };

  const percentageDifference = calculatePercentageDifference();
  const latestMonth = predictionComparisonData[predictionComparisonData.length - 1];
  const latestDiff = latestMonth ? Math.round(((latestMonth.predicted - latestMonth.actual) / latestMonth.predicted) * 100 * 100) / 100 : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Diferença Média</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end space-x-2">
              <div className="text-3xl font-bold">
                {percentageDifference}%
              </div>
              <div className="text-sm text-muted-foreground">
                entre desistências previstas e reais
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Diferença no Último Mês</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end space-x-2">
              <div className="text-3xl font-bold">
                {latestDiff}%
              </div>
              <div className="text-sm text-muted-foreground">
                {latestMonth ? `em ${latestMonth.month}` : ''}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Alunos Previstos vs Reais</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Este gráfico compara o número de alunos previstos para abandonar com o número real de desistências ao longo do tempo.
          </p>
          <div className="h-[350px]">
            <PredictionComparisonChart data={predictionComparisonData} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewTab;
