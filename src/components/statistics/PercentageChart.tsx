
import React from 'react';
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';

interface PercentageChartProps {
  data: {
    name: string;
    value: number;
  }[];
  color?: string;
}

const PercentageChart: React.FC<PercentageChartProps> = ({ data, color = '#3ABAB4' }) => {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <YAxis
            tickFormatter={(value) => `${value}%`}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <Tooltip
            formatter={(value: number) => [`${value.toFixed(2)}%`, 'Percentage']}
            labelStyle={{ fontSize: 12 }}
            contentStyle={{ borderRadius: '6px', border: '1px solid #E5E7EB' }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PercentageChart;
