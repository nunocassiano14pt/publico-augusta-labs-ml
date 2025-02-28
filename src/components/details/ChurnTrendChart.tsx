
import React from 'react';
import { ChurnTrend } from '../../types';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChurnTrendChartProps {
  data: ChurnTrend[];
}

const ChurnTrendChart: React.FC<ChurnTrendChartProps> = ({ data }) => {
  return (
    <div className="dashboard-card mt-6">
      <h3 className="text-lg font-medium mb-4">Evolução do Risco de Abandono</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              tickMargin={10}
            />
            <YAxis 
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
              tick={{ fontSize: 12 }}
            />
            <Tooltip 
              formatter={(value: number) => [`${value.toFixed(2)}%`, 'Risco de Abandono']}
              labelStyle={{ fontSize: 12, fontWeight: 'bold' }}
              contentStyle={{ borderRadius: '6px', border: '1px solid #E5E7EB' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3ABAB4" 
              strokeWidth={3}
              dot={{ r: 6, strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-gray-500 mt-2 text-center">Risco de abandono mensal registado ao longo de 2024</p>
    </div>
  );
};

export default ChurnTrendChart;
