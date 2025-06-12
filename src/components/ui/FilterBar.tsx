import React from 'react';
import { FilterOption } from '../../types';
import { Filter } from 'lucide-react';

interface FilterBarProps {
  filters: {
    [key: string]: {
      label: string;
      options: FilterOption[];
      type: 'dropdown' | 'radio' | 'checkbox' | 'range';
    };
  };
  onFilterChange: (filterKey: string, value: string | string[]) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-8">
      <div className="flex items-center mb-4">
        <Filter size={20} className="text-blue-700 mr-2" />
        <h3 className="text-lg font-semibold text-blue-900">Filter Options</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Object.entries(filters).map(([key, filter]) => (
          <div key={key} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">{filter.label}</label>
            
            {filter.type === 'dropdown' && (
              <select 
                className="rounded-md text-black border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => onFilterChange(key, e.target.value)}
                defaultValue=""
              >
                <option value="">All</option>
                {filter.options.map(option => (
                  <option key={option.id} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            
            {filter.type === 'radio' && (
              <div className="flex flex-wrap gap-2">
                {filter.options.map(option => (
                  <label key={option.id} className="inline-flex items-center">
                    <input 
                      type="radio" 
                      name={key} 
                      value={option.value}
                      className="form-radio text-blue-600"
                      onChange={() => onFilterChange(key, option.value)} 
                    />
                    <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
            
            {filter.type === 'checkbox' && (
              <div className="flex flex-wrap gap-2">
                {filter.options.map(option => (
                  <label key={option.id} className="inline-flex items-center">
                    <input 
                      type="checkbox" 
                      value={option.value}
                      className="form-checkbox text-blue-600" 
                      onChange={(e) => {
                        const checked = e.target.checked;
                        onFilterChange(key, option.value);
                      }}
                    />
                    <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
            
            {filter.type === 'range' && (
              <div className="flex items-center space-x-2">
                <input 
                  type="range" 
                  className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer" 
                  min={0} 
                  max={100}
                  onChange={(e) => onFilterChange(key, e.target.value)}
                />
                <span className="text-sm text-gray-700">Value</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;