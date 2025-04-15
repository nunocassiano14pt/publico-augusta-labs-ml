
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import PredictionHeader from '../components/predictions/PredictionHeader';
import PredictionTable from '../components/predictions/PredictionTable';
import { predictionsMock } from '../data/mockData';

const Predictions = () => {
  const [predictions] = useState(predictionsMock);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <PageTitle 
          title="Previsão de Desistências de Subscrições" 
          subtitle="Analise e monitorize informações dos subscritores para prever e prevenir desistências."
        />
        
        <div className="dashboard-card mb-6">
          <div className="p-6">
            <PredictionHeader count={predictions.length} />
            <PredictionTable predictions={predictions} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Predictions;
