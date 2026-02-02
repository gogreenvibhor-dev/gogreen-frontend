import React from 'react';
import axiosInstance from './axios';
import { ProductSpecification, TableData, ImageData } from '@/types/specification';

export class SpecificationAPI {
  /**
   * Get all specifications for a product
   */
  static async getByProductId(
    productId: string,
    includeInactive = false
  ): Promise<ProductSpecification[]> {
    const url = `/specifications/product/${productId}${
      includeInactive ? '?includeInactive=true' : ''
    }`;

    const response = await axiosInstance.get(url);

    return response.data.data;
  }

  /**
   * Get a single specification by ID
   */
  static async getById(id: string): Promise<ProductSpecification> {
    const response = await axiosInstance.get(`/specifications/${id}`);

    return response.data.data;
  }

  /**
   * Create a new specification
   */
  static async create(
    productId: string,
    title: string,
    type: 'grid' | 'matrix' | 'image',
    content: TableData | ImageData,
    displayOrder?: string
  ): Promise<ProductSpecification> {
    const response = await axiosInstance.post(`/specifications`, {
      productId,
      title,
      type,
      content,
      displayOrder: displayOrder || '0',
    });

    return response.data.data;
  }

  /**
   * Update an existing specification
   */
  static async update(
    id: string,
    updates: {
      title?: string;
      type?: 'grid' | 'matrix' | 'image';
      content?: TableData | ImageData;
      displayOrder?: string;
      isActive?: boolean;
    }
  ): Promise<ProductSpecification> {
    const response = await axiosInstance.put(`/specifications/${id}`, updates);

    return response.data.data;
  }

  /**
   * Delete a specification
   */
  static async delete(id: string): Promise<void> {
    await axiosInstance.delete(`/specifications/${id}`);
  }

  /**
   * Toggle active/inactive status
   */
  static async toggleActive(id: string): Promise<ProductSpecification> {
    const response = await axiosInstance.patch(`/specifications/${id}/toggle-active`, {});

    return response.data.data;
  }
}

// React hook for specifications (optional)
export function useSpecifications(productId: string, includeInactive = false) {
  const [specifications, setSpecifications] = React.useState<ProductSpecification[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchSpecs = async () => {
      try {
        setLoading(true);
        const data = await SpecificationAPI.getByProductId(productId, includeInactive);
        setSpecifications(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load specifications');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchSpecs();
    }
  }, [productId, includeInactive]);

  return { specifications, loading, error, refetch: () => {} };
}
