import React from 'react';
import { TableData, TableCell, ImageData } from '@/types/specification';
import Image from 'next/image';

interface Props {
  title: string;
  data: TableData | ImageData;
  type?: 'grid' | 'matrix' | 'image';
  className?: string;
}

const renderCellContent = (value: TableCell['value']) => {
  if (typeof value === 'boolean') {
    // Handle the checkmarks for boolean values
    return value ? (
      <svg className="w-6 h-6 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ) : (
      <span className="text-gray-300">-</span>
    );
  }
  return value;
};

export const SpecificationTable: React.FC<Props> = ({ title, data, type = 'grid', className = '' }) => {
  // If it's an image type, render the image
  if ((type === 'image' || 'imageUrl' in data) && 'imageUrl' in data) {
    const imageData = data as ImageData;
    return (
      <div className={`w-full my-8 rounded-xl overflow-hidden shadow-lg ${className}`}>
        {/* Title Header */}
        <div className="bg-white p-4 text-center text-xl font-bold uppercase tracking-wide" style={{ color: '#004AAD' }}>
          {title}
        </div>

        {/* Description */}
        {imageData.description && (
          <div className="bg-gray-50 px-6 py-4 border-b-2 border-gray-300">
            <div className="text-gray-700 text-sm">
              {imageData.description}
            </div>
          </div>
        )}

        {/* Image */}
        <div className="bg-white p-4">
          <div className="relative w-full flex justify-center">
            <Image
              src={imageData.imageUrl}
              alt={imageData.altText || title}
              width={800}
              height={600}
              className="max-w-full h-auto rounded-lg"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Otherwise render as table - ensure data has valid table structure
  const tableData = data as TableData;
  
  // Guard against invalid or missing table data
  if (!tableData || !tableData.rows || !tableData.headers) {
    return (
      <div className={`w-full my-8 rounded-xl overflow-hidden shadow-lg ${className}`}>
        <div className="bg-white p-4 text-center text-xl font-bold uppercase tracking-wide" style={{ color: '#004AAD' }}>
          {title}
        </div>
        <div className="bg-gray-100 p-8 text-center text-gray-500">
          No table data available
        </div>
      </div>
    );
  }
  
  return (
    <div className={`w-full my-8 rounded-xl overflow-hidden shadow-lg ${className}`}>
      {/* Title Header */}
      <div className="bg-white p-4 text-center text-xl font-bold uppercase tracking-wide" style={{ color: '#004AAD' }}>
        {title}
      </div>

      {/* Description */}
      {tableData.description && (
        <div className="bg-gray-50 px-6 py-4 border-b-2 border-gray-300">
          <div className="text-gray-700 text-sm space-y-1">
            {tableData.description.split('\n').filter(line => line.trim()).map((line, index) => (
              <div key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>{line.trim()}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="overflow-x-auto border-4 border-gray-400">
        <table className="w-full text-sm border-collapse">
          {/* Dynamic Header Rendering */}
          {tableData.headers && tableData.headers.length > 0 && (
            <thead className="text-white" style={{ backgroundColor: '#004AAD' }}>
              {tableData.headers.map((row, rowIndex) => (
                <tr key={`header-row-${rowIndex}`}>
                  {row.map((cell) => (
                    <th
                      key={cell.id}
                      colSpan={cell.colSpan || 1}
                      rowSpan={cell.rowSpan || 1}
                      className={`border-4 border-white px-4 py-3 font-semibold text-center ${
                        cell.align === 'left' ? 'text-left' : 
                        cell.align === 'right' ? 'text-right' : 
                        'text-center'
                      } ${cell.className || ''}`}
                    >
                      {renderCellContent(cell.value)}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          )}

          {/* Dynamic Body Rendering */}
          <tbody className="bg-white">
            {tableData.rows.map((row, rowIndex) => (
              <tr 
                key={`row-${rowIndex}`} 
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#E8F1FA]'}
              >
                {row.map((cell) => {
                  const CellTag = cell.isHeader ? 'th' : 'td';
                  const cellStyle = cell.backgroundColor && cell.backgroundColor !== '#ffffff'
                    ? { backgroundColor: cell.backgroundColor }
                    : undefined;
                  return (
                    <CellTag
                      key={cell.id}
                      colSpan={cell.colSpan || 1}
                      rowSpan={cell.rowSpan || 1}
                      className={`border-4 px-4 py-3 text-center font-semibold border-gray-400 ${
                        cell.isHeader 
                          ? 'bg-white' 
                          : ''
                      } ${
                        cell.align === 'left' ? 'text-left' : 
                        cell.align === 'right' ? 'text-right' : 
                        'text-center'
                      } ${cell.className || ''}`}
                      style={{
                        color: cell.isHeader ? '#004AAD' : '#1F2937',
                        ...(cellStyle || {})
                      }}
                    >
                      {renderCellContent(cell.value)}
                    </CellTag>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
