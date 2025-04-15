
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import PredictionHeader from '../components/predictions/PredictionHeader';
import PredictionTable from '../components/predictions/PredictionTable';
import { predictionsMock } from '../data/mockData';

const Predictions = () => {
  const [predictions, setPredictions] = useState(predictionsMock);
  const [filteredPredictions, setFilteredPredictions] = useState(predictionsMock);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredPredictions(predictions);
      return;
    }
    
    const filtered = predictions.filter(
      (prediction) => prediction.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPredictions(filtered);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <PageTitle 
          title="Previsão de Abandono de Assinaturas" 
          subtitle="Analise e monitorize informações dos assinantes para prever e prevenir o cancelamento."
        />
        
        <div className="dashboard-card mb-6">
          <div className="p-6">
            <PredictionHeader 
              count={predictions.length} 
              onSearch={handleSearch} 
            />
            <PredictionTable predictions={filteredPredictions} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Predictions;
