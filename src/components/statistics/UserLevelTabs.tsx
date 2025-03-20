
import React from 'react';

interface UserLevelTabsProps {
  level: string;
  onBackClick?: () => void;
  parent?: string;
}

const UserLevelTabs: React.FC<UserLevelTabsProps> = ({ level, onBackClick, parent }) => {
  return (
    <div className="flex items-center mb-4">
      {onBackClick && (
        <button 
          onClick={onBackClick}
          className="text-blue-600 hover:text-blue-800 mr-2 text-sm"
        >
          &larr; Voltar para {parent}
        </button>
      )}
      <h2 className="text-xl font-semibold">
        {level}
      </h2>
    </div>
  );
};

export default UserLevelTabs;
