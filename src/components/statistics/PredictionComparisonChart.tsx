
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
  return (
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
                  alert(`Mês: ${data.payload.month}\nPrevistos: ${data.payload.predicted}\nReais: ${data.payload.actual}`);
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
                  alert(`Mês: ${data.payload.month}\nPrevistos: ${data.payload.predicted}\nReais: ${data.payload.actual}`);
                }
              }
            }}
            name="actual"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PredictionComparisonChart;
