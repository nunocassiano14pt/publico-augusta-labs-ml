
import React from 'react';
import { CourseUnit } from '../../types';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface CourseUnitsTableProps {
  units: CourseUnit[];
  onUnitClick: (unitId: string) => void;
}

const CourseUnitsTable: React.FC<CourseUnitsTableProps> = ({ units, onUnitClick }) => {
  const [sortColumn, setSortColumn] = React.useState<keyof CourseUnit>('risk');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('desc');

  const handleSort = (column: keyof CourseUnit) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedUnits = React.useMemo(() => {
    return [...units].sort((a, b) => {
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
  }, [units, sortColumn, sortDirection]);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="data-table">
        <thead>
          <tr>
            <th 
              className="cursor-pointer hover:bg-gray-100" 
              onClick={() => handleSort('id')}
            >
              <div className="flex items-center">
                Código 
                {sortColumn === 'id' && (
                  sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                )}
              </div>
            </th>
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
              onClick={() => handleSort('subscriberCount')}
            >
              <div className="flex items-center">
                Nº Assinantes 
                {sortColumn === 'subscriberCount' && (
                  sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                )}
              </div>
            </th>
            <th 
              className="cursor-pointer hover:bg-gray-100" 
              onClick={() => handleSort('risk')}
            >
              <div className="flex items-center">
                Risco Médio 
                {sortColumn === 'risk' && (
                  sortDirection === 'asc' ? <ArrowUp size={14} className="ml-1" /> : <ArrowDown size={14} className="ml-1" />
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUnits.map((unit) => (
            <tr 
              key={unit.id} 
              className="animate-fadeIn cursor-pointer hover:bg-gray-50"
              onClick={() => onUnitClick(unit.id)}
            >
              <td>{unit.id}</td>
              <td>{unit.name}</td>
              <td>{unit.subscriberCount}</td>
              <td>
                <div className="risk-indicator">
                  {unit.risk >= 80 ? (
                    <div className="risk-indicator high">
                      <ArrowDown size={14} className="mr-1 transform rotate-180" />
                      {unit.risk.toFixed(2)}%
                    </div>
                  ) : unit.risk >= 70 ? (
                    <div className="risk-indicator medium">
                      <span className="mr-1 font-bold">—</span>
                      {unit.risk.toFixed(2)}%
                    </div>
                  ) : (
                    <div className="risk-indicator low">
                      <ArrowDown size={14} className="mr-1" />
                      {unit.risk.toFixed(2)}%
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseUnitsTable;
