
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
import KpiCard from '../components/dashboard/KpiCard';
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <KpiCard 
            title="Probabilidade Média de Desistência" 
            value={`${churnMetrics.probabilidade_media}%`} 
            subtitle="De todos os subscritores"
            icon={TrendingDown}
            trend={{ value: 2.3, isPositive: false }}
          />
          <KpiCard 
            title="Total de Subscritores" 
            value={churnMetrics.total_subscritores.toLocaleString()} 
            subtitle="Ativos no período"
            icon={Users}
            trend={{ value: 1.8, isPositive: true }}
          />
          <KpiCard 
            title="Desistências no Último Mês" 
            value={`${churnMetrics.churn_ultimo_mes}%`} 
            subtitle="Taxa de abandono real"
            icon={AlertTriangle}
            trend={{ value: 0.5, isPositive: false }}
          />
          <KpiCard 
            title="Melhor Retenção" 
            value={churnMetrics.melhor_retencao} 
            subtitle="Tipo de subscrição mais fiel"
            icon={Award}
          />
          <KpiCard 
            title="Tempo Médio de Subscrição" 
            value="1.8 anos" 
            subtitle="Antes de desistência"
            icon={CalendarClock}
            trend={{ value: 0.2, isPositive: true }}
          />
          <Link to="/predictions" className="transition-all hover:scale-[1.02] hover:shadow-md">
            <KpiCard 
              title="Ver Todas as Previsões" 
              value="Histórico de Dados" 
              subtitle="Previsões e detalhes"
              icon={BarChart2}
              className="h-full bg-publico/5 hover:bg-publico/10"
            />
          </Link>
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
