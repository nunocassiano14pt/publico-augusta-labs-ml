
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

interface PredictionHeaderProps {
  count: number;
  onSearch: (query: string) => void;
}

const PredictionHeader: React.FC<PredictionHeaderProps> = ({ count, onSearch }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <h2 className="text-lg font-medium">Previsões</h2>
        <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
          {count}
        </span>
      </div>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Pesquisar por nome..."
          className="pl-8 h-10 w-[260px]"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PredictionHeader;
