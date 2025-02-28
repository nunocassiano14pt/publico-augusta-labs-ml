
import React from 'react';
import { Student } from '../../types';
import { MoreHorizontal, HelpCircle, ArrowDown, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface StudentsTableProps {
  students: Student[];
  onExportCSV: () => void;
}

const StudentsTable: React.FC<StudentsTableProps> = ({ students, onExportCSV }) => {
  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-medium">Students</h2>
          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs font-medium">
            {students.length}
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
              <th className="flex items-center">
                cod_pessoa <ArrowDown size={14} className="ml-1 text-gray-400" />
              </th>
              <th className="flex items-center">
                cod_estudante <ArrowDown size={14} className="ml-1 text-gray-400" />
              </th>
              <th className="flex items-center">
                ano_letivo <ArrowDown size={14} className="ml-1 text-gray-400" />
              </th>
              <th className="flex items-center">
                data_extracao <ArrowDown size={14} className="ml-1 text-gray-400" />
              </th>
              <th className="flex items-center">
                churns <ArrowDown size={14} className="ml-1 text-gray-400" />
              </th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.cod_pessoa} className="animate-fadeIn">
                <td>{student.cod_pessoa}</td>
                <td>{student.cod_estudante}</td>
                <td>{student.ano_letivo}</td>
                <td>{student.data_extracao}</td>
                <td>
                  <div className="risk-indicator">
                    {student.churn >= 80 ? (
                      <div className="risk-indicator high">
                        <ArrowDown size={14} className="mr-1 transform rotate-180" />
                        {student.churn.toFixed(2)}%
                      </div>
                    ) : student.churn >= 70 ? (
                      <div className="risk-indicator medium">
                        <span className="mr-1 font-bold">—</span>
                        {student.churn.toFixed(2)}%
                      </div>
                    ) : (
                      <div className="risk-indicator low">
                        <ArrowDown size={14} className="mr-1" />
                        {student.churn.toFixed(2)}%
                      </div>
                    )}
                  </div>
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
    </div>
  );
};

export default StudentsTable;
