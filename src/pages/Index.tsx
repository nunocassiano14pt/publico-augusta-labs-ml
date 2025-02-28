
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
            Churn Prediction Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyze and track student information to predict and prevent churn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link to="/predictions" className="dashboard-card cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <BarChart2 size={28} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Predictions</h3>
              <p className="text-gray-500 text-sm">
                View and manage historical prediction data
              </p>
            </div>
          </Link>

          <Link to="/results" className="dashboard-card cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <Database size={28} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Results</h3>
              <p className="text-gray-500 text-sm">
                Analyze student prediction results by cluster
              </p>
            </div>
          </Link>

          <Link to="/details/344035" className="dashboard-card cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={28} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Student Details</h3>
              <p className="text-gray-500 text-sm">
                View detailed student prediction factors
              </p>
            </div>
          </Link>

          <Link to="/statistics" className="dashboard-card cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp size={28} className="text-teal" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Statistics</h3>
              <p className="text-gray-500 text-sm">
                Explore churn trends by variable
              </p>
            </div>
          </Link>
        </div>

        <div className="dashboard-card mb-6">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">About Churn Prediction</h2>
            <p className="text-gray-600 mb-4">
              This platform provides insights into student churn risk, allowing educational institutions to take proactive measures to improve retention rates. The prediction model analyzes various factors that may influence a student's likelihood of dropping out.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Data Analysis</h3>
                <p className="text-sm text-gray-500">
                  Analyze historical student data to identify patterns and risk factors.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Prediction Models</h3>
                <p className="text-sm text-gray-500">
                  Use advanced machine learning algorithms to predict churn probability.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Intervention Strategies</h3>
                <p className="text-sm text-gray-500">
                  Develop targeted interventions based on identified risk factors.
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
