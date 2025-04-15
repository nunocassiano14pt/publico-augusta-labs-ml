
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  className = ''
}) => {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-medium text-muted-foreground">{title}</div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-publico/10`}>
            <Icon className="text-publico" size={20} />
          </div>
        </div>
        
        <div className="flex flex-col space-y-2">
          <div className="text-3xl font-bold">{value}</div>
          {subtitle && <div className="text-sm text-muted-foreground">{subtitle}</div>}
        </div>
        
        {trend && (
          <div className="flex items-center mt-4">
            <div 
              className={`flex items-center text-sm ${
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {trend.isPositive ? (
                <span className="text-lg mr-1">↑</span>
              ) : (
                <span className="text-lg mr-1">↓</span>
              )}
              {Math.abs(trend.value)}%
            </div>
            <div className="ml-2 text-xs text-muted-foreground">vs mês anterior</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default KpiCard;
