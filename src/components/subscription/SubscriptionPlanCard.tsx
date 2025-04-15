
import React from 'react';
import { SubscriptionPlan } from '@/types';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SubscriptionPlanCardProps {
  plan: SubscriptionPlan;
}

const SubscriptionPlanCard: React.FC<SubscriptionPlanCardProps> = ({ plan }) => {
  return (
    <Card className={`relative overflow-hidden ${
      plan.isPopular ? 'border-2 border-publico shadow-lg' : 'border border-gray-200'
    }`}>
      {plan.isPopular && (
        <div className="absolute top-0 right-0 left-0 bg-publico py-1">
          <p className="text-center text-xs font-medium text-white uppercase">Mais escolhido</p>
        </div>
      )}
      
      <div className={`px-6 ${plan.isPopular ? 'pt-8' : 'pt-6'} pb-6`}>
        <h3 className="text-lg font-medium mb-4">{plan.period}</h3>
        
        <div className="flex items-baseline mb-1">
          {plan.originalPrice !== plan.currentPrice && (
            <span className="text-2xl font-bold line-through text-gray-400 mr-2">
              {plan.originalPrice}€
            </span>
          )}
          <span className="text-4xl font-bold">{plan.currentPrice}€</span>
        </div>
        
        <p className="text-sm text-gray-500 mb-6">
          {plan.pricePerMonth.toFixed(2).replace('.', ',')}€/mês
        </p>

        <Button 
          className={`w-full ${
            plan.isPopular 
              ? 'bg-[#fad02c] hover:bg-[#e9c229] text-black' 
              : 'bg-white border border-black text-black hover:bg-gray-100'
          }`}
        >
          {plan.ctaLabel || 'Subscrever'}
        </Button>
        
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>{plan.cancelText || 'Cancele quando quiser'}</p>
          <p className="mt-1">{plan.renewalText || `Renova por ${plan.originalPrice}€/${plan.period === 'Anual' ? '1 ano' : plan.period === 'Semestral' ? '6 meses' : '3 meses'}`}</p>
        </div>
      </div>
    </Card>
  );
};

export default SubscriptionPlanCard;
