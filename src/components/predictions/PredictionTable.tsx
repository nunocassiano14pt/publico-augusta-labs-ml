
import React from 'react';
import { Prediction } from '../../types';
import { MoreHorizontal, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PredictionTableProps {
  predictions: Prediction[];
}

const PredictionTable: React.FC<PredictionTableProps> = ({ predictions }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th className="flex items-center">
              Status
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" className="h-auto p-0 ml-1">
                      <HelpCircle size={14} className="text-gray-400" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Prediction status: Pending or Success</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th>Access</th>
            <th className="w-10"></th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((prediction) => (
            <tr key={prediction.id} className="animate-fadeIn">
              <td>{prediction.name || '—'}</td>
              <td>{prediction.date}</td>
              <td>
                <span className={`status-badge ${prediction.status.toLowerCase()}`}>
                  {prediction.status}
                </span>
              </td>
              <td>
                {prediction.access.map((type) => (
                  <span key={type} className="access-badge">
                    {type}
                  </span>
                ))}
              </td>
              <td>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal size={16} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PredictionTable;
