
import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface VariableSelectProps {
  variables: string[];
  selectedVariable: string;
  onSelect: (variable: string) => void;
}

const VariableSelect: React.FC<VariableSelectProps> = ({ variables, selectedVariable, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="w-full justify-between border-gray-200 text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedVariable}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </Button>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-64 overflow-auto animate-fadeIn">
          <div className="py-1">
            {variables.map((variable) => (
              <button
                key={variable}
                className={`${
                  variable === selectedVariable ? 'bg-gray-100' : ''
                } flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-50`}
                onClick={() => {
                  onSelect(variable);
                  setIsOpen(false);
                }}
              >
                <span className="flex-1">{variable}</span>
                {variable === selectedVariable && (
                  <Check size={16} className="text-teal-dark" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VariableSelect;
