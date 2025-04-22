
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import StudentDetailsCard from '../components/details/StudentDetailsCard';
import { studentDetailMock, studentsMock } from '../data/mockData';

const StudentDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // Buscar o estudante correspondente (em um caso real, faria fetch dos dados)
  const student = studentsMock.find(s => s.cod_pessoa === id);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Previsão de Abandono', path: '/' },
              { label: 'Resultados', path: '/results' },
              { label: 'Detalhes do Aluno' },
            ]}
          />
          <PageTitle 
            title={`Detalhes do Aluno: ${student?.nome_aluno || 'Aluno'}`} 
            subtitle={`Código: ${student?.cod_pessoa || id} | Matrícula: ${student?.matricula || 'N/A'}`}
          />
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
