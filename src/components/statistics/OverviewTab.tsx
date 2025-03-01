
import React from 'react';
import PredictionComparisonChart from './PredictionComparisonChart';
import { PredictionComparison } from '../../types';

interface OverviewTabProps {
  predictionComparisonData: PredictionComparison[];
}

const OverviewTab: React.FC<OverviewTabProps> = ({ predictionComparisonData }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Alunos Previstos vs Reais</h2>
        <div className="bg-white rounded-lg border border-gray-100 p-4">
          <p className="text-sm text-gray-500 mb-4">
            Este gráfico compara o número de alunos previstos para abandonar com o número real de desistências ao longo do tempo.
          </p>
          <PredictionComparisonChart data={predictionComparisonData} />
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
