
import React from 'react';
import RiskDetailGraphs from './RiskDetailGraphs';
import { Institution, RiskDistribution, FactorFrequency } from '../../types';
import { ArrowDown } from 'lucide-react';

interface InstitutionViewProps {
  institutions: Institution[];
  riskDistributionData: RiskDistribution[];
  positiveFactorsData: FactorFrequency[];
  negativeFactorsData: FactorFrequency[];
  onInstitutionClick: (institutionId: string) => void;
  institutionName?: string;
}

const InstitutionView: React.FC<InstitutionViewProps> = ({
  institutions,
  riskDistributionData,
  positiveFactorsData,
  negativeFactorsData,
  onInstitutionClick,
  institutionName
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {institutionName ? `Escolas de ${institutionName}` : "Estatísticas por Instituição"}
      </h2>
      
      <div className="mb-6">
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="data-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Nº Escolas</th>
                <th>Nº Alunos</th>
                <th>Risco Médio</th>
              </tr>
            </thead>
            <tbody>
              {institutions.map((institution) => (
                <tr 
                  key={institution.id} 
                  className="animate-fadeIn cursor-pointer hover:bg-gray-50"
                  onClick={() => onInstitutionClick(institution.id)}
                >
                  <td>{institution.id}</td>
                  <td>{institution.name}</td>
                  <td>{institution.schoolCount}</td>
                  <td>{institution.studentCount}</td>
                  <td>
                    <div className="risk-indicator">
                      {institution.risk >= 80 ? (
                        <div className="risk-indicator high">
                          <ArrowDown size={14} className="mr-1 transform rotate-180" />
                          {institution.risk.toFixed(2)}%
                        </div>
                      ) : institution.risk >= 70 ? (
                        <div className="risk-indicator medium">
                          <span className="mr-1 font-bold">—</span>
                          {institution.risk.toFixed(2)}%
                        </div>
                      ) : (
                        <div className="risk-indicator low">
                          <ArrowDown size={14} className="mr-1" />
                          {institution.risk.toFixed(2)}%
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <RiskDetailGraphs 
        riskDistributionData={riskDistributionData}
        positiveFactorsData={positiveFactorsData}
        negativeFactorsData={negativeFactorsData}
      />
    </div>
  );
};

export default InstitutionView;
