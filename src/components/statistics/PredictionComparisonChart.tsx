
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend 
} from 'recharts';
import { PredictionComparison } from '../../types';

interface PredictionComparisonChartProps {
  data: PredictionComparison[];
}

const PredictionComparisonChart: React.FC<PredictionComparisonChartProps> = ({ data }) => {
  // Calculate monthly percentage differences for the KPI display
  const monthlyDifferences = data.map(item => {
    const difference = ((item.predicted - item.actual) / item.predicted * 100).toFixed(1);
    return {
      month: item.month,
      difference: difference
    };
  });

  // Find the latest month data for the main KPI
  const latestMonth = data[data.length - 1];
  const latestDifference = ((latestMonth.predicted - latestMonth.actual) / latestMonth.predicted * 100).toFixed(1);
  const isPositiveDiff = parseFloat(latestDifference) > 0;

  return (
    <div className="space-y-4">
      {/* KPI showing percentage difference */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
        <h3 className="text-sm font-medium text-gray-500 mb-1">Diferença percentual (último mês)</h3>
        <div className="flex items-center">
          <div className={`text-2xl font-bold ${isPositiveDiff ? 'text-red-500' : 'text-green-500'}`}>
            {isPositiveDiff ? '+' : ''}{latestDifference}%
          </div>
          <div className="ml-2 text-sm text-gray-500">
            entre previsto ({latestMonth.predicted}) e real ({latestMonth.actual})
          </div>
        </div>
        <div className="text-xs text-gray-400 mt-1">
          Mês: {latestMonth.month}
        </div>
      </div>

      {/* Main chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 10,
              bottom: 30,
            }}
          >
            <defs>
              <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff6b6b" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ff6b6b" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              tickMargin={10}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickMargin={10}
            />
            <Tooltip 
              formatter={(value: number, name: string) => {
                const label = name === "predicted" ? "Previsto" : "Real";
                return [value, label];
              }}
              labelStyle={{ fontSize: 12, fontWeight: 'bold' }}
              contentStyle={{ borderRadius: '6px', border: '1px solid #E5E7EB' }}
            />
            <Legend 
              payload={[
                { value: 'Alunos Previstos', type: 'line', color: '#ff6b6b' },
                { value: 'Alunos Reais', type: 'line', color: '#3b82f6' }
              ]}
            />
            <Area 
              type="monotone" 
              dataKey="predicted" 
              stroke="#ff6b6b" 
              fillOpacity={1}
              fill="url(#colorPredicted)" 
              activeDot={{ 
                r: 8,
                onClick: (data: any) => {
                  if (data && data.payload) {
                    const month = data.payload.month;
                    const predicted = data.payload.predicted;
                    const actual = data.payload.actual;
                    const diff = ((predicted - actual) / predicted * 100).toFixed(1);
                    alert(`Mês: ${month}\nPrevistos: ${predicted} alunos\nReais: ${actual} alunos\nDiferença: ${diff}%`);
                  }
                }
              }}
              name="predicted"
            />
            <Area 
              type="monotone" 
              dataKey="actual" 
              stroke="#3b82f6" 
              fillOpacity={1}
              fill="url(#colorActual)" 
              activeDot={{ 
                r: 8,
                onClick: (data: any) => {
                  if (data && data.payload) {
                    const month = data.payload.month;
                    const predicted = data.payload.predicted;
                    const actual = data.payload.actual;
                    const diff = ((predicted - actual) / predicted * 100).toFixed(1);
                    alert(`Mês: ${month}\nPrevistos: ${predicted} alunos\nReais: ${actual} alunos\nDiferença: ${diff}%`);
                  }
                }
              }}
              name="actual"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PredictionComparisonChart;
