
import React from 'react';
import { SubscriptionTypeChurn } from '../../types';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ChurnByTypeChartProps {
  data: SubscriptionTypeChurn[];
}

const ChurnByTypeChart: React.FC<ChurnByTypeChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Probabilidade por Tipo de Subscrição</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={(value) => `${value}%`} />
              <YAxis type="category" dataKey="tipo" />
              <Tooltip
                formatter={(value: number) => [`${value.toFixed(1)}%`, 'Probabilidade']}
                labelStyle={{ fontWeight: 'bold' }}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Legend />
              <Bar 
                name="Probabilidade de Desistência" 
                dataKey="probabilidade" 
                fill="#e3000f" 
                radius={[0, 4, 4, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChurnByTypeChart;
