
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SubscriptionPlanCard from '../components/subscription/SubscriptionPlanCard';
import SubscriptionModalityTabs from '../components/subscription/SubscriptionModalityTabs';
import { SubscriptionPlan, SubscriptionModality } from '@/types';
import { CreditCard, Check } from 'lucide-react';

const Subscriptions: React.FC = () => {
  const [activeModality, setActiveModality] = useState<SubscriptionModality>('Digital');
  
  const subscriptionPlans: SubscriptionPlan[] = [
    {
      id: 'trimestral',
      title: 'Trimestral',
      period: 'Trimestral',
      originalPrice: 25,
      currentPrice: 23,
      pricePerMonth: 7.67,
      ctaLabel: 'Subscrever',
      cancelText: 'Cancele quando quiser',
      renewalText: 'Renova por 25€/3 meses',
      isPopular: false
    },
    {
      id: 'anual',
      title: 'Anual',
      period: 'Anual',
      originalPrice: 82,
      currentPrice: 76,
      pricePerMonth: 6.33,
      ctaLabel: 'Subscrever',
      cancelText: 'Cancele quando quiser',
      renewalText: 'Renova por 82€/1 ano',
      isPopular: true
    },
    {
      id: 'semestral',
      title: 'Semestral',
      period: 'Semestral',
      originalPrice: 43,
      currentPrice: 41,
      pricePerMonth: 6.83,
      ctaLabel: 'Subscrever',
      cancelText: 'Cancele quando quiser',
      renewalText: 'Renova por 43€/6 meses',
      isPopular: false
    }
  ];
  
  const features = [
    'Acesso ilimitado a todos os artigos do PÚBLICO',
    'Podcasts exclusivos para assinantes',
    'Newsletters exclusivas para assinantes',
    'Comentários nos artigos',
    'Sem publicidade',
    'Experiência de leitura melhorada'
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Junte-se aos leitores que nos apoiam
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuaremos a lutar pela verificação dos factos.
          </p>
        </div>
        
        <SubscriptionModalityTabs 
          activeModality={activeModality} 
          onModalityChange={setActiveModality} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {subscriptionPlans.map((plan) => (
            <SubscriptionPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">O que está incluído na sua assinatura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-publico" />
                </div>
                <p className="ml-3 text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-xl font-medium mb-4">Métodos de pagamento aceites</h2>
          <div className="flex justify-center space-x-4">
            <div className="h-10 w-16 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-sm font-medium">VISA</span>
            </div>
            <div className="h-10 w-16 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-sm font-medium">MC</span>
            </div>
            <div className="h-10 w-16 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-sm font-medium">PayPal</span>
            </div>
            <div className="h-10 w-16 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-sm font-medium">MB</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="text-sm text-gray-500 text-center">
            <p>Ao subscrever, concorda com os nossos Termos e Condições e Política de Privacidade.</p>
            <p className="mt-2">Precisa de ajuda? Contacte o nosso serviço de apoio ao cliente.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Subscriptions;
