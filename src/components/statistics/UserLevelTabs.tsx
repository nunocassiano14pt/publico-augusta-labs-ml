
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UserLevelTabsProps {
  activeLevel: string;
  onLevelChange: (level: string) => void;
}

const UserLevelTabs: React.FC<UserLevelTabsProps> = ({ activeLevel, onLevelChange }) => {
  return (
    <Tabs 
      defaultValue={activeLevel} 
      className="w-full" 
      onValueChange={onLevelChange}
    >
      <TabsList className="w-full">
        <TabsTrigger value="course-unit" className="flex-1">Unidade Curricular</TabsTrigger>
        <TabsTrigger value="course" className="flex-1">Curso</TabsTrigger>
        <TabsTrigger value="school" className="flex-1">Escola</TabsTrigger>
        <TabsTrigger value="institution" className="flex-1">Instituição</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default UserLevelTabs;
