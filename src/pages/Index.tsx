
import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  Users, 
  TrendingDown, 
  CalendarClock, 
  Award,
  AlertTriangle 
} from 'lucide-react';
import ChurnByAgeChart from '../components/dashboard/ChurnByAgeChart';
import ChurnByTypeChart from '../components/dashboard/ChurnByTypeChart';
import { churnMetrics } from '../data/dashboardMockData';

const Index = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto animate-fadeIn">
        <div className="text-center mb-6 mt-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Previsão de Desistências de Subscrições
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Analisar e monitorizar informações de subscritores para prever e prevenir desistências.
          </p>
        </div>

        {/* Slick KPIs - Not in cards */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-2 border-b pb-4 lg:border-b-0 lg:border-r lg:pr-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Probabilidade Média</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-publico/10">
                  <TrendingDown className="text-publico" size={18} />
                </div>
              </div>
              <div className="text-3xl font-bold">{churnMetrics.probabilidade_media}%</div>
              <div className="flex items-center text-sm">
                <span className="text-red-600 flex items-center mr-1.5">
                  <span className="text-lg">↓</span> 2.3%
                </span>
                <span className="text-gray-500">vs mês anterior</span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2 border-b pb-4 lg:border-b-0 lg:border-r lg:pr-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Total de Subscritores</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-publico/10">
                  <Users className="text-publico" size={18} />
                </div>
              </div>
              <div className="text-3xl font-bold">{churnMetrics.total_subscritores.toLocaleString()}</div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 flex items-center mr-1.5">
                  <span className="text-lg">↑</span> 1.8%
                </span>
                <span className="text-gray-500">vs mês anterior</span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Desistências no Último Mês</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-publico/10">
                  <AlertTriangle className="text-publico" size={18} />
                </div>
              </div>
              <div className="text-3xl font-bold">{churnMetrics.churn_ultimo_mes}%</div>
              <div className="flex items-center text-sm">
                <span className="text-red-600 flex items-center mr-1.5">
                  <span className="text-lg">↓</span> 0.5%
                </span>
                <span className="text-gray-500">vs mês anterior</span>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-6 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-publico/10 mr-3">
                  <Award className="text-publico" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Melhor Retenção</div>
                  <div className="text-lg font-semibold">{churnMetrics.melhor_retencao}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-publico/10 mr-3">
                  <CalendarClock className="text-publico" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Tempo Médio de Subscrição</div>
                  <div className="text-lg font-semibold">1.8 anos</div>
                </div>
              </div>
              
              <Link to="/predictions" className="flex items-center group cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded-lg">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-publico/10 mr-3 group-hover:bg-publico/20">
                  <BarChart2 className="text-publico" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Ver Todas as Previsões</div>
                  <div className="text-lg font-semibold">Histórico de Dados</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChurnByAgeChart data={churnMetrics.por_idade} />
          <ChurnByTypeChart data={churnMetrics.por_tipo} />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
