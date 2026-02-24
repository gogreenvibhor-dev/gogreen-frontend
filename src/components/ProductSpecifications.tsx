import React from 'react';
import { ProductSpecification, TableData, ImageData } from '@/types/specification';
import { SpecificationTable } from './SpecificationTable';

interface Props {
  specifications: ProductSpecification[];
  className?: string;
}

export const ProductSpecifications: React.FC<Props> = ({ specifications, className = '' }) => {
  if (!specifications || specifications.length === 0) {
    return null;
  }

  // Filter only active specifications
  const activeSpecs = specifications.filter(spec => spec.isActive);

  if (activeSpecs.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {activeSpecs.map((spec) => {
        if (spec.type === 'grid' || spec.type === 'matrix') {
          return (
            <SpecificationTable
              key={spec.id}
              title={spec.title}
              data={spec.content as TableData}
              type={spec.type}
            />
          );
        }
        
        if (spec.type === 'image') {
          return (
            <SpecificationTable
              key={spec.id}
              title={spec.title}
              data={spec.content as ImageData}
              type="image"
            />
          );
        }
        
        return null;
      })}
    </div>
  );
};
