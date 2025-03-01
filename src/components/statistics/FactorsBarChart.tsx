
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FactorFrequency } from '../../types';

interface FactorsBarChartProps {
  data: FactorFrequency[];
  title: string;
  color: string;
}

const FactorsBarChart: React.FC<FactorsBarChartProps> = ({ data, title, color }) => {
  return (
    <div className="h-80">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 120,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" />
          <YAxis 
            type="category" 
            dataKey="factor" 
            tick={{ fontSize: 12 }}
            width={120}
          />
          <Tooltip 
            formatter={(value: number) => [`${value}`, 'Ocorrências']}
            labelStyle={{ fontSize: 12 }}
            contentStyle={{ borderRadius: '6px', border: '1px solid #E5E7EB' }}
          />
          <Bar dataKey="count" fill={color} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FactorsBarChart;
