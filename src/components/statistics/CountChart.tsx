
import React from 'react';
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';

interface CountChartProps {
  data: {
    name: string;
    value: number;
  }[];
  title: string;
  color?: string;
}

const CountChart: React.FC<CountChartProps> = ({ data, title, color = '#3ABAB4' }) => {
  return (
    <div className="h-64">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height="90%">
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
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <Tooltip
            formatter={(value: number) => [value, 'Count']}
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

export default CountChart;
