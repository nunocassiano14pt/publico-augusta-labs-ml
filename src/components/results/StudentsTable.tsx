
import React from 'react';
import { Subscriber } from '../../types';
import { MoreHorizontal, ArrowDown, ArrowUp, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from 'react-router-dom';

interface SubscribersTableProps {
  subscribers: Subscriber[];
  onExportCSV: () => void;
}

const SubscribersTable: React.FC<SubscribersTableProps> = ({ subscribers, onExportCSV }) => {
  const navigate = useNavigate();
  const [sortColumn, setSortColumn] = React.useState<keyof Subscriber>('churn');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('desc');

  const handleSort = (column: keyof Subscriber) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedSubscribers = React.useMemo(() => {
    return [...subscribers].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
      
      return 0;
    });
  }, [subscribers, sortColumn, sortDirection]);

  const handleRowClick = (subscriberId: string) => {
    navigate(`/details/${subscriberId}`);
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Assinantes</h2>
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
            {subscribers.length}
          </span>
        </div>
        <div className="flex items-center">
          <Button variant="outline" className="border-gray-200 text-gray-700 flex items-center" onClick={onExportCSV}>
            <Download size={16} className="mr-1" />
            CSV ({(36.51).toFixed(2)} KB)
          </Button>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="data-table">
          <thead>
            <tr>
              <th 
                className="cursor-pointer hover:bg-gray-100" 
                onClick={() => handleSort('cod_pessoa')}
              >
                <div className="flex items-center">
                  Código 
                  {sortColumn === 'cod_pessoa' && (
                    sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100" 
                onClick={() => handleSort('nome_assinante')}
              >
                <div className="flex items-center">
                  Nome 
                  {sortColumn === 'nome_assinante' && (
                    sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100" 
                onClick={() => handleSort('plano_assinatura')}
              >
                <div className="flex items-center">
                  Plano de Assinatura 
                  {sortColumn === 'plano_assinatura' && (
                    sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100" 
                onClick={() => handleSort('data_inicio')}
              >
                <div className="flex items-center">
                  Data de Início 
                  {sortColumn === 'data_inicio' && (
                    sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                  )}
                </div>
              </th>
              <th 
                className="cursor-pointer hover:bg-gray-100" 
                onClick={() => handleSort('churn')}
              >
                <div className="flex items-center">
                  Risco de Abandono 
                  {sortColumn === 'churn' && (
                    sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                  )}
                </div>
              </th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {sortedSubscribers.map((subscriber) => (
              <tr 
                key={subscriber.cod_pessoa} 
                className="animate-fadeIn cursor-pointer hover:bg-gray-50"
                onClick={() => handleRowClick(subscriber.cod_pessoa)}
              >
                <td>{subscriber.cod_pessoa}</td>
                <td>{subscriber.nome_assinante}</td>
                <td>{subscriber.plano_assinatura}</td>
                <td>{subscriber.data_inicio}</td>
                <td>
                  <div className="risk-indicator">
                    {subscriber.churn >= 80 ? (
                      <div className="risk-indicator high">
                        <ArrowDown size={14} className="mr-1 transform rotate-180" />
                        {subscriber.churn.toFixed(2)}%
                      </div>
                    ) : subscriber.churn >= 70 ? (
                      <div className="risk-indicator medium">
                        <span className="mr-1 font-bold">—</span>
                        {subscriber.churn.toFixed(2)}%
                      </div>
                    ) : (
                      <div className="risk-indicator low">
                        <ArrowDown size={14} className="mr-1" />
                        {subscriber.churn.toFixed(2)}%
                      </div>
                    )}
                  </div>
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
    </div>
  );
};

export default SubscribersTable;
