
import React, { useState, useEffect } from 'react';
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
    
    // Filtrar por data
    const filtered = predictions.filter(
      (prediction) => prediction.date.includes(query)
    );
    setFilteredPredictions(filtered);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <PageTitle 
          title="Previsão de Desistências de Subscrições" 
          subtitle="Analise e monitorize informações dos subscritores para prever e prevenir desistências."
        />
        
        <div className="dashboard-card mb-6">
          <div className="p-6">
            <PredictionHeader 
              count={filteredPredictions.length} 
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
