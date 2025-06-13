import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionTitle from '../ui/SectionTitle';
import FilterBar from '../ui/FilterBar';
import { Bootcamp } from '../../types';
import BootcampCard from '../ui/BootcampCard';

const BootcampsSection: React.FC = () => {
  const [bootcamps, setBootcamps] = useState<Bootcamp[]>([]);
  const [filteredBootcamps, setFilteredBootcamps] = useState<Bootcamp[]>([]);
  const [filters, setFilters] = useState<Record<string, string | string[]>>({});
  const [dynamicFilters, setDynamicFilters] = useState<any>({});

  const [currentPage, setCurrentPage] = useState(1);
  const bootcampsPerPage = 3;

  const indexOfLast = currentPage * bootcampsPerPage;
  const indexOfFirst = indexOfLast - bootcampsPerPage;
  const currentBootcamps = filteredBootcamps.slice(indexOfFirst, indexOfLast);

  // Utility: Get unique values for filter options
  const getUniqueValues = (arr: Bootcamp[], key: keyof Bootcamp) => {
    const values = arr.map(item => item[key]).filter(Boolean);
    return [...new Set(values)];
  };

  useEffect(() => {
    const fetchBootcamps = async () => {
      try {
        const res = await axios.get('/api/bootcamps');
        const data: Bootcamp[] = res.data;

        setBootcamps(data);
        setFilteredBootcamps(data);
        setFilters({});
        setCurrentPage(1);

        // Dynamically generate filter config
        const filterOptions = {
          goal: {
            label: 'Goal',
            type: 'dropdown',
            options: getUniqueValues(data, 'goal').map((value) => ({
              id: value,
              label: value,
              value: value,
            })),
          },
          industryType: {
            label: 'Industry',
            type: 'dropdown',
            options: getUniqueValues(data, 'industryType').map((value) => ({
              id: value,
              label: value,
              value: value,
            })),
          },
          location: {
            label: 'Location',
            type: 'dropdown',
            options: getUniqueValues(data, 'location').map((value) => ({
              id: value,
              label: value,
              value: value,
            })),
          },
        };

        setDynamicFilters(filterOptions);
      } catch (error) {
        console.error('Error fetching bootcamps:', error);
      }
    };

    fetchBootcamps();
  }, []);

  const handleFilterChange = (filterKey: string, value: string | string[]) => {
    const newFilters = { ...filters, [filterKey]: value };
    setFilters(newFilters);
    setCurrentPage(1);

    const filtered = bootcamps.filter((bootcamp) => {
      for (const key in newFilters) {
        if (
          newFilters[key] &&
          bootcamp[key as keyof Bootcamp]?.toString().toLowerCase() !==
            (newFilters[key] as string).toLowerCase()
        ) {
          return false;
        }
      }
      return true;
    });

    setFilteredBootcamps(filtered);
  };

  const totalPages = Math.ceil(filteredBootcamps.length / bootcampsPerPage);

  const renderPagination = () => (
    <div className="flex justify-center mt-8">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`mx-1 px-3 py-1 rounded border ${
            currentPage === i + 1 ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );

  return (
    <section id="bootcamps" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Bootcamps - Skill Programs" 
          subtitle="Intensive training programs designed to help you acquire in-demand skills quickly"
        />
        {Object.keys(dynamicFilters).length > 0 && (
          <FilterBar filters={dynamicFilters} onFilterChange={handleFilterChange} />
        )}
        <div className="bg-gradient-to-br from-[#f8f8f8] to-[#eaeaea] py-12 px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBootcamps.map((bootcamp) => (
            <BootcampCard key={bootcamp._id} bootcamp={bootcamp} />
          ))}
        </div>
        {renderPagination()}
      </div>
    </section>
  );
};

export default BootcampsSection;