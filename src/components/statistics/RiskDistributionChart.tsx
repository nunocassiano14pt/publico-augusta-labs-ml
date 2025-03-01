
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { RiskDistribution } from '../../types';

interface RiskDistributionChartProps {
  data: RiskDistribution[];
}

// Cores correspondentes a cada nível de risco: vermelho (alto), amarelo (médio), verde (baixo)
const COLORS = ['#ea384c', '#F97316', '#10b981'];
const RADIAN = Math.PI / 180;

const RiskDistributionChart: React.FC<RiskDistributionChartProps> = ({ data }) => {
  // Mapeamento mais claro para as legendas
  const categoryLabels: { [key: string]: string } = {
    'Risco Alto (>80%)': 'Previsão de Desistência Alta',
    'Risco Médio (60-80%)': 'Previsão de Desistência Média',
    'Risco Baixo (<60%)': 'Previsão de Desistência Baixa'
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Criar dados com labels personalizados para a legenda
  const enhancedData = data.map(item => ({
    ...item,
    legendName: categoryLabels[item.category] || item.category
  }));

  return (
    <div className="h-64">
      <h3 className="text-sm font-medium text-gray-500 mb-2">Distribuição por Previsão de Desistência</h3>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={enhancedData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
            nameKey="legendName"
          >
            {enhancedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: any, name: any, props: any) => [`${value} alunos (${props.payload.percentage}%)`, 'Quantidade']}
            labelFormatter={(label: any, props: any) => {
              if (props && props.payload && props.payload[0]) {
                const payload = props.payload[0].payload;
                return payload.legendName || payload.category;
              }
              return label;
            }}
          />
          <Legend
            formatter={(value, entry, index) => {
              return <span style={{ color: COLORS[index % COLORS.length], fontWeight: 'bold' }}>{value}</span>;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskDistributionChart;
