
import React from 'react';
import { CourseUnit, RiskDistribution, FactorFrequency, PredictionComparison, Student } from '../../types';
import RiskDetailGraphs from './RiskDetailGraphs';
import PredictionComparisonChart from './PredictionComparisonChart';
import CourseUnitsTable from './CourseUnitsTable';
import SubscribersTable from '../results/StudentsTable';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CourseUnitViewProps {
  units: CourseUnit[];
  selectedUnit: string | null;
  riskDistributionData: RiskDistribution[];
  positiveFactorsData: FactorFrequency[];
  negativeFactorsData: FactorFrequency[];
  predictionComparisonData: PredictionComparison[];
  students: Student[];
  onUnitClick: (unitId: string) => void;
  onExportCSV: () => void;
  onBack: () => void;
  courseName?: string;
  academicYear?: number | null;
}

const CourseUnitView: React.FC<CourseUnitViewProps> = ({
  units,
  selectedUnit,
  riskDistributionData,
  positiveFactorsData,
  negativeFactorsData,
  predictionComparisonData,
  students,
  onUnitClick,
  onExportCSV,
  onBack,
  courseName,
  academicYear
}) => {
  // Find the selected unit
  const unit = selectedUnit ? units.find(unit => unit.id === selectedUnit) : null;
  
  return (
    <div>
      {!selectedUnit ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            {courseName && academicYear 
              ? `Unidades Curriculares de ${academicYear}º Ano - ${courseName}` 
              : "Unidades Curriculares"}
          </h2>
          
          <CourseUnitsTable 
            units={units} 
            onUnitClick={onUnitClick} 
          />
          
          <div className="mt-8 mb-8">
            <h3 className="text-lg font-medium mb-4">Comparação de Previsões por Unidade Curricular</h3>
            <PredictionComparisonChart data={predictionComparisonData} />
          </div>
          
          <RiskDetailGraphs 
            riskDistributionData={riskDistributionData}
            positiveFactorsData={positiveFactorsData}
            negativeFactorsData={negativeFactorsData}
          />
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <Button
              variant="ghost"
              className="flex items-center text-gray-700 hover:text-black"
              onClick={onBack}
            >
              <ArrowLeft size={16} className="mr-2" />
              Voltar para Unidades Curriculares
            </Button>
            
            <h2 className="text-xl font-semibold mt-4 mb-6">
              {unit ? unit.name : 'Unidade Curricular'}
            </h2>
          </div>
          
          <SubscribersTable 
            subscribers={students} 
            onExportCSV={onExportCSV} 
          />
        </div>
      )}
    </div>
  );
};

export default CourseUnitView;
