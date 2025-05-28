
import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import DashboardSection from './DashboardSection';
import InternshipModal from './modals/InternshipModal';

const DashboardInternships: React.FC = () => {
  const tableHeaders = [
    'Banner',
    'Name',
    'Company',
    'Domain',
    'Location',
    'Duration',
    'Stipend/Certificate',
    'Created'
  ];

  const renderTableRow = (item: any, onEdit: (item: any) => void, onDelete: (id: string) => void) => (
    <tr key={item._id}>
      <td className="px-6 py-4 whitespace-nowrap">
        {item.internshipBanner && (
          <img
            src={`http://localhost:5000${item.internshipBanner}`}
            alt="Banner"
            className="h-12 w-20 object-cover rounded"
          />
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.internshipName}</div>
        <div className="text-sm text-gray-500">{item.jobType}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {item.companyName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {item.domain}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {item.location}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {item.duration}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {item.stipendOrCertificate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(item.createdAt).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(item)}
            className="text-blue-600 hover:text-blue-900"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDelete(item._id)}
            className="text-red-600 hover:text-red-900"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <DashboardSection
      title="Internships"
      apiEndpoint="internships"
      modalComponent={InternshipModal}
      tableHeaders={tableHeaders}
      renderTableRow={renderTableRow}
    />
  );
};

export default DashboardInternships;
