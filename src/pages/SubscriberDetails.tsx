
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageTitle from '../components/common/PageTitle';
import Breadcrumb from '../components/common/Breadcrumb';
import SubscriberDetailsCard from '../components/details/SubscriberDetailsCard';
import { subscriberDetailMock, subscribersMock } from '../data/mockData';

const SubscriberDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // Buscar o subscritor correspondente (em um caso real, faria fetch dos dados)
  const subscriber = subscribersMock.find(s => s.cod_pessoa === id);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Breadcrumb
            items={[
              { label: 'Previsão de Desistências', path: '/' },
              { label: 'Resultados', path: '/results' },
              { label: 'Detalhes do Subscritor' },
            ]}
          />
          <PageTitle 
            title={`Detalhes do Subscritor: ${subscriber?.nome_subscritor || 'Subscritor'}`} 
            subtitle={`Código: ${subscriber?.cod_pessoa || id} | Subscrição: ${subscriber?.subscription || 'N/A'}`}
          />
        </div>
        
        <div className="dashboard-card mb-6 publico-gradient-card">
          <div className="p-6">
            <SubscriberDetailsCard details={subscriberDetailMock} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubscriberDetails;
