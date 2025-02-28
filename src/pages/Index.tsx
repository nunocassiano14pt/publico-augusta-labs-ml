
import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from "@/components/ui/button";
import { BarChart2, Database, TrendingUp, BookOpen } from 'lucide-react';
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

          <Link to="/results" className="dashboard-card cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <Database size={28} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Resultados</h3>
              <p className="text-gray-500 text-sm">
                Analisar resultados dos alunos por curso
              </p>
            </div>
          </Link>

          <Link to="/details/344035" className="dashboard-card cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={28} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Detalhes</h3>
              <p className="text-gray-500 text-sm">
                Ver detalhes individuais dos alunos
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

        <div className="dashboard-card mb-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Sobre o Sistema de Previsão</h2>
            <p className="text-gray-600 mb-4">
              Esta plataforma fornece insights sobre o risco de abandono dos alunos, permitindo às instituições de ensino tomar medidas proativas para melhorar as taxas de retenção. O modelo de previsão analisa vários fatores que podem influenciar a probabilidade de um aluno abandonar os estudos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Análise de Dados</h3>
                <p className="text-sm text-gray-500">
                  Analisar dados históricos dos alunos para identificar padrões e fatores de risco.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Modelos de Previsão</h3>
                <p className="text-sm text-gray-500">
                  Utilizar algoritmos avançados de machine learning para prever a probabilidade de abandono.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Estratégias de Intervenção</h3>
                <p className="text-sm text-gray-500">
                  Desenvolver intervenções específicas com base nos fatores de risco identificados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
