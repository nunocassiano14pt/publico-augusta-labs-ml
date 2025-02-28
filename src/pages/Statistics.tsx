
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import StatisticsLink from '../components/common/StatisticsLink';
import VariableSelect from '../components/statistics/VariableSelect';
import PercentageChart from '../components/statistics/PercentageChart';
import CountChart from '../components/statistics/CountChart';
import { 
  sexoStatisticsMock, 
  idadeStatisticsMock, 
  cursoStatisticsMock,
  anoLetivosStatisticsMock,
  localResidenciaStatisticsMock,
  availableVariables 
} from '../data/mockData';

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
        title: `Distribuição por ${selectedVariable}`,
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
        title: `Distribuição por ${selectedVariable}`,
      };
    } else if (selectedVariable === 'curso') {
      return {
        percentageData: cursoStatisticsMock.categories.map((category, index) => ({
          name: category,
          value: cursoStatisticsMock.percentages[index],
        })),
        countData: cursoStatisticsMock.categories.map((category, index) => ({
          name: category,
          value: cursoStatisticsMock.counts[index],
        })),
        title: `Distribuição por ${selectedVariable}`,
      };
    } else if (selectedVariable === 'ano_letivo') {
      return {
        percentageData: anoLetivosStatisticsMock.categories.map((category, index) => ({
          name: category,
          value: anoLetivosStatisticsMock.percentages[index],
        })),
        countData: anoLetivosStatisticsMock.categories.map((category, index) => ({
          name: category,
          value: anoLetivosStatisticsMock.counts[index],
        })),
        title: `Distribuição por ${selectedVariable}`,
      };
    } else if (selectedVariable === 'local_residencia') {
      return {
        percentageData: localResidenciaStatisticsMock.categories.map((category, index) => ({
          name: category,
          value: localResidenciaStatisticsMock.percentages[index],
        })),
        countData: localResidenciaStatisticsMock.categories.map((category, index) => ({
          name: category,
          value: localResidenciaStatisticsMock.counts[index],
        })),
        title: `Distribuição por ${selectedVariable}`,
      };
    }
    
    // Dados padrão para outras variáveis (para garantir que não haja dados vazios)
    return {
      percentageData: [
        { name: 'Categoria 1', value: 35.8 },
        { name: 'Categoria 2', value: 24.3 },
        { name: 'Categoria 3', value: 18.5 },
        { name: 'Categoria 4', value: 21.4 }
      ],
      countData: [
        { name: 'Categoria 1', value: 32 },
        { name: 'Categoria 2', value: 21 },
        { name: 'Categoria 3', value: 16 },
        { name: 'Categoria 4', value: 19 }
      ],
      title: `Distribuição por ${selectedVariable}`,
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
                { label: 'Previsão de Abandono', path: '/' },
                { label: 'Estatísticas' },
              ]}
            />
            <PageTitle title="Estatísticas de Abandono Escolar" />
          </div>
          <StatisticsLink to="/results" label="Resultados" className="text-teal" />
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
                <h3 className="text-sm font-medium text-gray-500 mb-2">Percentagem</h3>
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
