
import React from 'react';
import { ChurnTrend } from '../../types';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface ChurnTrendChartProps {
  data: ChurnTrend[];
}

const ChurnTrendChart: React.FC<ChurnTrendChartProps> = ({ data }) => {
  // Encontrando o valor máximo para tooltip personalizado
  const maxPoint = React.useMemo(() => {
    let maxValue = 0;
    let maxIndex = 0;
    
    data.forEach((item, index) => {
      if (item.value > maxValue) {
        maxValue = item.value;
        maxIndex = index;
      }
    });
    
    return { ...data[maxIndex], index: maxIndex };
  }, [data]);

  return (
    <div className="dashboard-card mt-6">
      <h3 className="text-lg font-medium mb-4">Evolução do Risco de Abandono</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
          >
            <defs>
              <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff6b6b" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ff6b6b" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4dabf7" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4dabf7" stopOpacity={0.1}/>
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
              stroke="#ff6b6b" 
              fillOpacity={1}
              fill="url(#colorRed)" 
              activeDot={{ r: 8 }}
              dot={{ r: 4 }}
              strokeWidth={2}
              name="Valor"
              connectNulls
              data={data.slice(0, maxPoint.index + 1)}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#4dabf7" 
              fillOpacity={1}
              fill="url(#colorBlue)" 
              activeDot={{ r: 8 }}
              dot={{ r: 4 }}
              strokeWidth={2}
              name="Valor"
              connectNulls
              data={data.slice(maxPoint.index)}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <div>Set 1</div>
        <div>Out 1</div>
        <div>Nov 1</div>
        <div>Dez 1</div>
        <div>Jan 1</div>
        <div>Fev 1</div>
        <div>Mar 1</div>
        <div>Abr 1</div>
        <div>Mai 1</div>
      </div>
    </div>
  );
};

export default ChurnTrendChart;
