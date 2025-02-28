
import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import StatisticsLink from '../components/common/StatisticsLink';
import StudentsTable from '../components/results/StudentsTable';
import { studentsMock, predictionsMock } from '../data/mockData';
import { toast } from 'sonner';

const Results = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const predictionId = searchParams.get('prediction');
  
  // Encontrar a previsão correspondente 
  const prediction = predictionId ? predictionsMock.find(p => p.id === predictionId) : null;

  // Redirecionar para a página de previsões se não tiver um ID válido
  React.useEffect(() => {
    if (predictionId && !prediction) {
      toast.error("Previsão não encontrada");
      navigate('/predictions');
    }
  }, [predictionId, prediction, navigate]);

  const handleExportCSV = () => {
    toast.info("A exportar CSV... Esta é uma funcionalidade de demonstração");
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Breadcrumb
              items={[
                { label: 'Previsão de Abandono', path: '/' },
                { label: 'Previsões', path: '/predictions' },
                { label: prediction ? `Resultados: ${prediction.name}` : 'Resultados' },
              ]}
            />
            <PageTitle 
              title={prediction ? `Resultados: ${prediction.name}` : "Resultados da Previsão"} 
              subtitle={prediction ? `Data: ${prediction.date}` : undefined}
            />
          </div>
          <StatisticsLink to="/statistics" label="Estatísticas" />
        </div>
        
        <div className="dashboard-card mb-6">
          <div className="p-6">
            <StudentsTable 
              students={studentsMock} 
              onExportCSV={handleExportCSV} 
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
