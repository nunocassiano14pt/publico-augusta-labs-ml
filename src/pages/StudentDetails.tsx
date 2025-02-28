
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import StatisticsLink from '../components/common/StatisticsLink';
import StudentDetailsCard from '../components/details/StudentDetailsCard';
import { studentDetailMock, studentsMock } from '../data/mockData';

const StudentDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // Buscar o estudante correspondente (em um caso real, faria fetch dos dados)
  const student = studentsMock.find(s => s.cod_pessoa === id);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Breadcrumb
              items={[
                { label: 'Churn Prediction', path: '/' },
                { label: 'Prediction Results', path: '/results' },
                { label: 'Student Details' },
              ]}
            />
            <PageTitle 
              title={`Student Details: ${student?.cod_pessoa || id}`} 
              subtitle={`Student code: ${student?.cod_estudante || 'N/A'}`}
            />
          </div>
          <StatisticsLink to="/statistics" label="Prediction Statistics" />
        </div>
        
        <div className="dashboard-card mb-6">
          <div className="p-6">
            <StudentDetailsCard details={studentDetailMock} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDetails;
