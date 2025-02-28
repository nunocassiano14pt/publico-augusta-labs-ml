
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import StatisticsLink from '../components/common/StatisticsLink';
import VariableSelect from '../components/statistics/VariableSelect';
import PercentageChart from '../components/statistics/PercentageChart';
import CountChart from '../components/statistics/CountChart';
import { sexoStatisticsMock, idadeStatisticsMock, availableVariables } from '../data/mockData';

const Statistics = () => {
  const [selectedVariable, setSelectedVariable] = useState('sexo');
  
  // Formatando os dados para o gráfico com base na variável selecionada
  const getChartData = () => {
    if (selectedVariable === 'sexo') {
      return {
        percentageData: sexoStatisticsMock.categories.map((category, index) => ({
          name: category,
          value: sexoStatisticsMock.percentages[index],
        })),
        countData: sexoStatisticsMock.categories.map((category, index) => ({
          name: category,
          value: sexoStatisticsMock.counts[index],
        })),
        title: `${selectedVariable} distribution`,
      };
    } else if (selectedVariable === 'idade') {
      return {
        percentageData: idadeStatisticsMock.categories.map((category, index) => ({
          name: category,
          value: idadeStatisticsMock.percentages[index],
        })),
        countData: idadeStatisticsMock.categories.map((category, index) => ({
          name: category,
          value: idadeStatisticsMock.counts[index],
        })),
        title: `${selectedVariable} distribution`,
      };
    }
    
    // Dados padrão para outras variáveis
    return {
      percentageData: [],
      countData: [],
      title: `${selectedVariable} distribution`,
    };
  };
  
  const { percentageData, countData, title } = getChartData();
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Breadcrumb
              items={[
                { label: 'Churn Prediction', path: '/' },
                { label: 'Prediction Statistics' },
              ]}
            />
            <PageTitle title="Prediction Statistics" />
          </div>
          <StatisticsLink to="/results" label="Prediction Results" className="text-teal" />
        </div>
        
        <div className="dashboard-card mb-6">
          <div className="p-6">
            <div className="mb-6 w-56">
              <VariableSelect 
                variables={availableVariables}
                selectedVariable={selectedVariable}
                onSelect={setSelectedVariable}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border border-gray-100 p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Percentage</h3>
                <PercentageChart data={percentageData} />
              </div>
              
              <div className="bg-white rounded-lg border border-gray-100 p-4">
                <CountChart data={countData} title={title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Statistics;
