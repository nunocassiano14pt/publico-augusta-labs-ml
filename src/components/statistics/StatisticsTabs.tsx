
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface StatisticsTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const StatisticsTabs: React.FC<StatisticsTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <Tabs 
      defaultValue={activeTab} 
      className="w-full" 
      onValueChange={onTabChange}
    >
      <TabsList className="w-full">
        <TabsTrigger value="by-user" className="flex-1">Estatísticas por Utilizador</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default StatisticsTabs;
