
import React from 'react';
import { Prediction } from '../../types';
import { MoreHorizontal, HelpCircle, ArrowDown, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useNavigate } from 'react-router-dom';

interface PredictionTableProps {
  predictions: Prediction[];
}

const PredictionTable: React.FC<PredictionTableProps> = ({ predictions }) => {
  const navigate = useNavigate();
  const [sortColumn, setSortColumn] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedPredictions = React.useMemo(() => {
    if (!sortColumn) return predictions;

    return [...predictions].sort((a, b) => {
      const aValue = a[sortColumn as keyof Prediction];
      const bValue = b[sortColumn as keyof Prediction];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
      
      return 0;
    });
  }, [predictions, sortColumn, sortDirection]);

  const handleRowClick = (predictionId: string) => {
    navigate(`/results?prediction=${predictionId}`);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="data-table">
        <thead>
          <tr>
            <th 
              className="cursor-pointer hover:bg-gray-100" 
              onClick={() => handleSort('name')}
            >
              <div className="flex items-center">
                Nome
                {sortColumn === 'name' && (
                  sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                )}
              </div>
            </th>
            <th 
              className="cursor-pointer hover:bg-gray-100" 
              onClick={() => handleSort('date')}
            >
              <div className="flex items-center">
                Data
                {sortColumn === 'date' && (
                  sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                )}
              </div>
            </th>
            <th className="flex items-center">
              Estado
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" className="h-auto p-0 ml-1">
                      <HelpCircle size={14} className="text-gray-400" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs">Estado da previsão: Pendente ou Sucesso</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </th>
            <th className="w-10"></th>
          </tr>
        </thead>
        <tbody>
          {sortedPredictions.map((prediction) => (
            <tr 
              key={prediction.id} 
              className="animate-fadeIn cursor-pointer hover:bg-gray-50" 
              onClick={() => handleRowClick(prediction.id)}
            >
              <td>{prediction.name || '—'}</td>
              <td>{prediction.date}</td>
              <td>
                <span className={`status-badge ${prediction.status === 'Sucesso' ? 'success' : 'pending'}`}>
                  {prediction.status}
                </span>
              </td>
              <td onClick={(e) => e.stopPropagation()}>
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
