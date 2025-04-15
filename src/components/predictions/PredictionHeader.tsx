
import React from 'react';

interface PredictionHeaderProps {
  count: number;
}

const PredictionHeader: React.FC<PredictionHeaderProps> = ({ count }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <h2 className="text-lg font-medium">Previsões</h2>
        <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
          {count}
        </span>
      </div>
      {/* Date filter removed as requested */}
    </div>
  );
};

export default PredictionHeader;
