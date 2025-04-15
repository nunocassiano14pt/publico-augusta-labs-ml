
import React, { useState } from 'react';
import { SubscriberDetail } from '../../types';
import { HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ChurnTrendChart from './ChurnTrendChart';

interface SubscriberDetailsCardProps {
  details: SubscriberDetail;
}

const SubscriberDetailsCard: React.FC<SubscriberDetailsCardProps> = ({ details }) => {
  const [activeTab, setActiveTab] = useState('chart');

  return (
    <div className="animate-fadeIn">
      <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
        <div className="flex border-b">
          <button 
            className={`px-4 py-3 text-sm font-medium ${activeTab === 'chart' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('chart')}
          >
            Gráfico de Tendência
          </button>
          <button 
            className={`px-4 py-3 text-sm font-medium ${activeTab === 'factors' ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}
            onClick={() => setActiveTab('factors')}
          >
            Fatores de Risco
          </button>
        </div>
        
        {activeTab === 'chart' && (
          <div className="p-6">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-medium mb-1">Probabilidade de Abandono</h2>
                <p className="text-sm text-gray-500">Evolução ao longo dos meses</p>
              </div>
              <div className="bg-gray-100 px-3 py-2 rounded-lg">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Atual</div>
                    <div className="font-bold text-lg">{details.churnProbability.toFixed(2)}%</div>
                  </div>
                  <div className="h-8 w-px bg-gray-300"></div>
                  <div>
                    <div className="text-sm text-gray-500">Máximo</div>
                    <div className="font-bold text-lg">
                      {Math.max(...details.trends.map(t => t.value)).toFixed(2)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <ChurnTrendChart data={details.trends} />
          </div>
        )}
        
        {activeTab === 'factors' && (
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center">
                <h2 className="text-lg font-medium">Probabilidade de Abandono:</h2>
                <div className="ml-2 risk-indicator medium">
                  <span className="mr-1 font-bold">—</span>
                  {details.churnProbability.toFixed(2)}%
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Fatores Positivos */}
              <div className="dashboard-card">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <span className="text-green-600 text-lg">+</span>
                  </div>
                  <h3 className="text-md font-medium">Fatores Positivos</h3>
                  <p className="text-xs text-gray-500 ml-2">Aumentam probabilidade de abandono</p>
                </div>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left pb-3 text-xs font-medium text-gray-500">Fator</th>
                      <th className="text-right pb-3 text-xs font-medium text-gray-500 flex items-center justify-end">
                        Impacto
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" className="h-auto p-0 ml-1">
                                <HelpCircle size={14} className="text-gray-400" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">Impacto na probabilidade de abandono</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.positiveReasons.map((reason, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="py-3">
                          <div>
                            <div className="font-medium">{reason.feature}</div>
                            <div className="text-xs text-gray-500">{reason.description}</div>
                          </div>
                        </td>
                        <td className="py-3 text-right">
                          <span className="impact-badge positive">+{reason.impact.toFixed(2)}%</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Fatores Negativos */}
              <div className="dashboard-card">
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-2">
                    <span className="text-red-600 text-lg">-</span>
                  </div>
                  <h3 className="text-md font-medium">Fatores Negativos</h3>
                  <p className="text-xs text-gray-500 ml-2">Diminuem probabilidade de abandono</p>
                </div>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left pb-3 text-xs font-medium text-gray-500">Fator</th>
                      <th className="text-right pb-3 text-xs font-medium text-gray-500 flex items-center justify-end">
                        Impacto
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" className="h-auto p-0 ml-1">
                                <HelpCircle size={14} className="text-gray-400" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs">Impacto na probabilidade de abandono</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {details.negativeReasons.map((reason, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="py-3">
                          <div>
                            <div className="font-medium">{reason.feature}</div>
                            <div className="text-xs text-gray-500">{reason.description}</div>
                          </div>
                        </td>
                        <td className="py-3 text-right">
                          <span className="impact-badge negative">{reason.impact.toFixed(2)}%</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriberDetailsCard;
