import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterSection {
  id: string;
  title: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio' | 'range';
}

interface ActiveFilter {
  sectionId: string;
  optionId: string;
  label: string;
}

interface ProductFiltersProps {
  filters: FilterSection[];
  activeFilters: ActiveFilter[];
  onFilterChange: (sectionId: string, optionId: string, checked: boolean) => void;
  onClearAllFilters: () => void;
  onPriceRangeChange: (min: number, max: number) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  activeFilters,
  onFilterChange,
  onClearAllFilters,
  onPriceRangeChange
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['category', 'brands', 'features']);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    const newRange = { ...priceRange, [type]: value };
    setPriceRange(newRange);
    onPriceRangeChange(newRange.min, newRange.max);
  };

  const removeFilter = (filter: ActiveFilter) => {
    onFilterChange(filter.sectionId, filter.optionId, false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-900">Active Filters</h4>
            <button
              onClick={onClearAllFilters}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Clear all filter
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter, index) => (
              <span
                key={index}
                className="inline-flex items-center bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {filter.label}
                <button
                  onClick={() => removeFilter(filter)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Filter Sections */}
      {filters.map((section) => (
        <div key={section.id} className="mb-6">
          <button
            onClick={() => toggleSection(section.id)}
            className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-4"
          >
            <span>{section.title}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.includes(section.id) ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedSections.includes(section.id) && (
            <div className="space-y-3">
              {section.type === 'range' ? (
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">Min</label>
                      <input
                        type="number"
                        value={priceRange.min}
                        onChange={(e) => handlePriceChange('min', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm text-gray-600 mb-1">Max</label>
                      <input
                        type="number"
                        value={priceRange.max}
                        onChange={(e) => handlePriceChange('max', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="1000000"
                      />
                    </div>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
                    Apply
                  </button>
                </div>
              ) : (
                section.options.map((option) => {
                  const isActive = activeFilters.some(
                    f => f.sectionId === section.id && f.optionId === option.id
                  );
                  return (
                    <label key={option.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type={section.type}
                        checked={isActive}
                        onChange={(e) => onFilterChange(section.id, option.id, e.target.checked)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700 flex-1">{option.label}</span>
                      {option.count && (
                        <span className="text-xs text-gray-500">({option.count})</span>
                      )}
                    </label>
                  );
                })
              )}
              {section.options.length > 5 && (
                <button className="text-sm text-blue-600 hover:text-blue-800">
                  See all
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductFilters;