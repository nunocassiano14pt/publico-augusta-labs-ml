
import React from 'react';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import StatisticsLink from '../components/common/StatisticsLink';
import StudentsTable from '../components/results/StudentsTable';
import { studentsMock } from '../data/mockData';
import { toast } from 'sonner';

const Results = () => {
  const handleExportCSV = () => {
    toast.info("Exporting CSV... This is a demo functionality");
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Breadcrumb
              items={[
                { label: 'Churn Prediction', path: '/' },
                { label: 'Prediction Results' },
              ]}
            />
            <PageTitle title="Prediction Results" />
          </div>
          <StatisticsLink to="/statistics" label="Prediction Statistics" />
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
