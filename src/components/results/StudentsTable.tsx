
import React from 'react';
import { Subscriber } from '../../types';
import { MoreHorizontal, ArrowDown, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

interface StudentsTableProps {
  subscribers: Subscriber[];
  onExportCSV: () => void;
}

const StudentsTable: React.FC<StudentsTableProps> = ({ subscribers, onExportCSV }) => {
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
              onClick={() => handleSort('nome_subscritor')}
            >
              <div className="flex items-center">
                Nome
                {sortColumn === 'nome_subscritor' && (
                  sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                )}
              </div>
            </th>
            <th 
              className="cursor-pointer hover:bg-gray-100" 
              onClick={() => handleSort('subscription')}
            >
              <div className="flex items-center">
                Subscrição
                {sortColumn === 'subscription' && (
                  sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                )}
              </div>
            </th>
            <th 
              className="cursor-pointer hover:bg-gray-100" 
              onClick={() => handleSort('ano_subscricao')}
            >
              <div className="flex items-center">
                Ano Subscrição
                {sortColumn === 'ano_subscricao' && (
                  sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                )}
              </div>
            </th>
            <th 
              className="cursor-pointer hover:bg-gray-100" 
              onClick={() => handleSort('churn')}
            >
              <div className="flex items-center">
                Risco de Desistência
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
              <td>{subscriber.nome_subscritor}</td>
              <td>{subscriber.subscription}</td>
              <td>{subscriber.ano_subscricao}</td>
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
  );
};

export default StudentsTable;
