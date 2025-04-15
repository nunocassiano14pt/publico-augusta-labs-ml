
import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { 
  BarChart2, 
  Users, 
  TrendingDown, 
  CalendarClock, 
  Award,
  AlertTriangle,
  ArrowRightCircle,
  Eye,
  Clock,
  Activity,
  MapPin
} from 'lucide-react';
import ChurnByAgeChart from '../components/dashboard/ChurnByAgeChart';
import ChurnByTypeChart from '../components/dashboard/ChurnByTypeChart';
import PortugalMap from '../components/dashboard/PortugalMap';
import { churnMetrics } from '../data/dashboardMockData';
import { getDistrictDataWithColors } from '../data/portugalMapData';
import KpiCard from '../components/dashboard/KpiCard';

const Index = () => {
  const districtDataWithColors = getDistrictDataWithColors();
  
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

        {/* Main KPIs - made more slick and clearly clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link to="/predictions" className="transform transition-transform duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg hover:border-publico/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 font-medium">Probabilidade Média</span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-publico/10">
                  <TrendingDown className="text-publico" size={20} />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">{churnMetrics.probabilidade_media}%</div>
              <div className="flex items-center text-sm">
                <span className="text-red-600 flex items-center mr-1.5">
                  <span className="text-lg">↓</span> 2.3%
                </span>
                <span className="text-gray-500">vs mês anterior</span>
              </div>
              <div className="mt-4 text-publico flex items-center text-sm font-medium">
                <span>Ver previsões</span>
                <ArrowRightCircle size={16} className="ml-1" />
              </div>
            </div>
          </Link>
          
          <Link to="/predictions" className="transform transition-transform duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg hover:border-publico/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 font-medium">Total de Subscritores</span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-publico/10">
                  <Users className="text-publico" size={20} />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">{churnMetrics.total_subscritores.toLocaleString()}</div>
              <div className="flex items-center text-sm">
                <span className="text-green-600 flex items-center mr-1.5">
                  <span className="text-lg">↑</span> 1.8%
                </span>
                <span className="text-gray-500">vs mês anterior</span>
              </div>
              <div className="mt-4 text-publico flex items-center text-sm font-medium">
                <span>Ver detalhes</span>
                <ArrowRightCircle size={16} className="ml-1" />
              </div>
            </div>
          </Link>
          
          <Link to="/predictions" className="transform transition-transform duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg hover:border-publico/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 font-medium">Desistências no Último Mês</span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-publico/10">
                  <AlertTriangle className="text-publico" size={20} />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">{churnMetrics.churn_ultimo_mes}%</div>
              <div className="flex items-center text-sm">
                <span className="text-red-600 flex items-center mr-1.5">
                  <span className="text-lg">↓</span> 0.5%
                </span>
                <span className="text-gray-500">vs mês anterior</span>
              </div>
              <div className="mt-4 text-publico flex items-center text-sm font-medium">
                <span>Ver análise</span>
                <ArrowRightCircle size={16} className="ml-1" />
              </div>
            </div>
          </Link>
        </div>
        
        {/* Additional KPIs for more engagement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link to="/predictions" className="transform transition-transform duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg hover:border-publico/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 font-medium">Tempo Médio de Subscrição</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-100">
                  <Clock className="text-blue-600" size={16} />
                </div>
              </div>
              <div className="text-2xl font-bold">1.8 anos</div>
              <div className="mt-4 text-blue-600 flex items-center text-sm font-medium">
                <span>Ver detalhes</span>
                <Eye size={16} className="ml-1" />
              </div>
            </div>
          </Link>

          <Link to="/predictions" className="transform transition-transform duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg hover:border-publico/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 font-medium">Engajamento Médio</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100">
                  <Activity className="text-green-600" size={16} />
                </div>
              </div>
              <div className="text-2xl font-bold">3.2 sessões/semana</div>
              <div className="mt-4 text-green-600 flex items-center text-sm font-medium">
                <span>Ver detalhes</span>
                <Eye size={16} className="ml-1" />
              </div>
            </div>
          </Link>

          <Link to="/predictions" className="transform transition-transform duration-300 hover:scale-105">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg hover:border-publico/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 font-medium">Melhor Retenção</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-100">
                  <Award className="text-amber-600" size={16} />
                </div>
              </div>
              <div className="text-2xl font-bold">{churnMetrics.melhor_retencao}</div>
              <div className="mt-4 text-amber-600 flex items-center text-sm font-medium">
                <span>Ver análise</span>
                <Eye size={16} className="ml-1" />
              </div>
            </div>
          </Link>
        </div>

        {/* Portugal Map and Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all">
            <PortugalMap districtData={districtDataWithColors} />
          </div>
          <div className="lg:col-span-2 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all">
            <ChurnByAgeChart data={churnMetrics.por_idade} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all">
            <ChurnByTypeChart data={churnMetrics.por_tipo} />
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mb-10">
          <Link 
            to="/predictions" 
            className="inline-flex items-center justify-center px-6 py-3 bg-publico text-white font-medium rounded-lg hover:bg-publico/90 transition-colors"
          >
            Ver todas as previsões
            <ArrowRightCircle size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
