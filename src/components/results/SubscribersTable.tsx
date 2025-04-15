
import React, { useState } from 'react';
import { Subscriber } from '../../types';
import { MoreHorizontal, ArrowDown, ArrowUp, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';

interface SubscribersTableProps {
  subscribers: Subscriber[];
  onExportCSV: () => void;
}

const SubscribersTable: React.FC<SubscribersTableProps> = ({ subscribers, onExportCSV }) => {
  const navigate = useNavigate();
  const [sortColumn, setSortColumn] = useState<keyof Subscriber>('churn');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [filterValue, setFilterValue] = useState<string>('');
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>(subscribers);

  const handleSort = (column: keyof Subscriber) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
    if (!value.trim()) {
      setFilteredSubscribers(subscribers);
      return;
    }

    const filtered = subscribers.filter(subscriber => 
      subscriber.nome_subscritor.toLowerCase().includes(value.toLowerCase()) ||
      subscriber.cod_pessoa.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSubscribers(filtered);
  };

  const sortedSubscribers = React.useMemo(() => {
    return [...filteredSubscribers].sort((a, b) => {
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
  }, [filteredSubscribers, sortColumn, sortDirection]);

  const handleRowClick = (subscriberId: string) => {
    navigate(`/details/${subscriberId}`);
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Subscritores</h2>
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
            {filteredSubscribers.length}
          </span>
        </div>
      </div>
      
      <div className="mb-4 relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        <Input
          placeholder="Pesquisar por nome ou código..."
          value={filterValue}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="pl-9 pr-4 py-2"
        />
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
    </div>
  );
};

export default SubscribersTable;
