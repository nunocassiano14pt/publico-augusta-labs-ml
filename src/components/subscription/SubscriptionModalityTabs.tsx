
import React, { useState } from 'react';
import { SubscriptionModality } from '@/types';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

interface SubscriptionModalityTabsProps {
  activeModality: SubscriptionModality;
  onModalityChange: (modality: SubscriptionModality) => void;
}

const SubscriptionModalityTabs: React.FC<SubscriptionModalityTabsProps> = ({
  activeModality,
  onModalityChange
}) => {
  const modalities: SubscriptionModality[] = ['Digital', 'Papel + Digital', 'Empresas', 'Estudantes'];

  return (
    <div className="w-full mb-8">
      <h2 className="text-2xl font-bold text-center uppercase mb-6">Todas as modalidades</h2>
      <Tabs 
        defaultValue={activeModality} 
        onValueChange={(value) => onModalityChange(value as SubscriptionModality)}
        className="w-full"
      >
        <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 h-auto p-0 bg-transparent">
          {modalities.map((modality) => (
            <TabsTrigger 
              key={modality} 
              value={modality}
              className={cn(
                "py-3 px-4 text-base data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2",
                activeModality === modality 
                  ? "border-black font-medium" 
                  : "border-transparent text-gray-500"
              )}
            >
              {modality}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default SubscriptionModalityTabs;
