
import React from 'react';
import { ChurnTrend } from '../../types';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface ChurnTrendChartProps {
  data: ChurnTrend[];
}

const ChurnTrendChart: React.FC<ChurnTrendChartProps> = ({ data }) => {
  return (
    <div className="dashboard-card publico-gradient-card mt-6">
      <h3 className="text-lg font-medium mb-4">Evolução do Risco de Abandono</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
          >
            <defs>
              <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d92323" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#a30000" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
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
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#d92323" 
              fillOpacity={1}
              fill="url(#colorRed)" 
              activeDot={{ r: 8 }}
              dot={{ r: 4 }}
              strokeWidth={2}
              name="Valor"
              connectNulls
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <div>Set 2023</div>
        <div>Out 2023</div>
        <div>Nov 2023</div>
        <div>Dez 2023</div>
        <div>Jan 2024</div>
        <div>Fev 2024</div>
        <div>Mar 2024</div>
        <div>Abr 2024</div>
        <div>Mai 2024</div>
      </div>
    </div>
  );
};

export default ChurnTrendChart;
