
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import KpiCard from './KpiCard';
import { Smartphone, Newspaper, Briefcase, GraduationCap } from 'lucide-react';

interface ModalityKpiProps {
  data: {
    tipo: string;
    probabilidade: number;
    total_subscritores: number;
  }[];
}

const ModalityKpi: React.FC<ModalityKpiProps> = ({ data }) => {
  // Find the data for each modality type
  const digital = data.find(item => item.tipo === 'Digital');
  const paperDigital = data.find(item => item.tipo === 'Papel + Digital');
  const companies = data.find(item => item.tipo === 'Empresas');
  const students = data.find(item => item.tipo === 'Estudantes');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <KpiCard
        title="Digital"
        value={`${digital?.total_subscritores?.toLocaleString() || 0}`}
        subtitle={`${digital?.probabilidade?.toFixed(1) || 0}% de risco`}
        icon={Smartphone}
      />
      <KpiCard
        title="Papel + Digital"
        value={`${paperDigital?.total_subscritores?.toLocaleString() || 0}`}
        subtitle={`${paperDigital?.probabilidade?.toFixed(1) || 0}% de risco`}
        icon={Newspaper}
      />
      <KpiCard
        title="Empresas"
        value={`${companies?.total_subscritores?.toLocaleString() || 0}`}
        subtitle={`${companies?.probabilidade?.toFixed(1) || 0}% de risco`}
        icon={Briefcase}
      />
      <KpiCard
        title="Estudantes"
        value={`${students?.total_subscritores?.toLocaleString() || 0}`}
        subtitle={`${students?.probabilidade?.toFixed(1) || 0}% de risco`}
        icon={GraduationCap}
      />
    </div>
  );
};

export default ModalityKpi;
