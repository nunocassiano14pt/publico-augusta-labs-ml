
import React from 'react';
import Layout from '../components/layout/Layout';
import { BarChart2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto animate-fadeIn">
        <div className="text-center mb-12 mt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Previsão de Abandono Escolar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analisar e monitorizar informações de alunos para prever e prevenir o abandono escolar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
          <Link to="/predictions" className="dashboard-card cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <BarChart2 size={28} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Previsões</h3>
              <p className="text-gray-500 text-sm">
                Ver e gerir o histórico de previsões
              </p>
            </div>
          </Link>

          <Link to="/statistics" className="dashboard-card cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp size={28} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Estatísticas</h3>
              <p className="text-gray-500 text-sm">
                Explorar tendências por variáveis
              </p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
