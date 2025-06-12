import React from 'react';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterConfig {
  [key: string]: {
    label: string;
    options: FilterOption[];
    type: 'radio' | 'dropdown';
  };
}

interface Props {
  filters: FilterConfig;
  selectedFilters: Record<string, string>;
  onFilterChange: (key: string, value: string) => void;
}

const CustomFilterBar: React.FC<Props> = ({ filters, selectedFilters, onFilterChange }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-white p-6 rounded-xl shadow-md flex flex-wrap justify-center items-start gap-x-8 gap-y-6 mt-8 border border-gray-200">
        {Object.entries(filters).map(([key, filter]) => (
          <div
            key={key}
            className="flex flex-col space-y-2 min-w-[220px] sm:flex-1 md:flex-none"
          >
            <label className="text-sm font-semibold text-gray-800">{filter.label}</label>

            {filter.type === 'radio' ? (
              <div className="flex flex-wrap gap-4">
                {filter.options.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-blue-600"
                  >
                    <input
                      type="radio"
                      name={key}
                      value={option.value}
                      checked={selectedFilters[key] === option.value}
                      onChange={() => onFilterChange(key, option.value)}
                      className="accent-blue-600"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            ) : (
              <select
                value={selectedFilters[key] || ''}
                onChange={(e) => onFilterChange(key, e.target.value)}
                className="w-full px-3 py-2 text-sm text-black border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="">All</option>
                {filter.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomFilterBar;
