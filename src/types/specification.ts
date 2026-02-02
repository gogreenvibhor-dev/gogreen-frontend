import { z } from 'zod';

// A single cell definition with support for merged cells and various content types
export const CellSchema = z.object({
  id: z.string(), // Unique ID for React keys
  value: z.union([z.string(), z.number(), z.boolean()]), // Supports text, numbers, or checks
  colSpan: z.number().optional(), // For horizontal merging
  rowSpan: z.number().optional(), // For vertical merging
  align: z.enum(['left', 'center', 'right']).optional(), // Text alignment
  isHeader: z.boolean().optional(), // If true, renders as <th>
  className: z.string().optional(), // Custom CSS classes
  backgroundColor: z.string().optional(), // Background color for the cell
});

// The full table structure supporting complex layouts
export const TableDataSchema = z.object({
  // Headers are an array of rows (to support stacked/merged headers)
  headers: z.array(z.array(CellSchema)),
  // Body is standard rows
  rows: z.array(z.array(CellSchema)),
  // Optional description for the table or pointer descriptions
  description: z.string().optional(),
});

// Image data structure for specification images
export const ImageDataSchema = z.object({
  imageUrl: z.string(),
  altText: z.string().optional(),
  description: z.string().optional(),
});

// Union type for different specification content types
export const SpecificationContentSchema = z.union([
  TableDataSchema,
  ImageDataSchema,
]);

// Type exports
export type TableCell = z.infer<typeof CellSchema>;
export type TableData = z.infer<typeof TableDataSchema>;
export type ImageData = z.infer<typeof ImageDataSchema>;
export type SpecificationContent = z.infer<typeof SpecificationContentSchema>;

// Product Specification type
export interface ProductSpecification {
  id: string;
  productId: string;
  title: string;
  type: 'grid' | 'matrix' | 'image';
  content: TableData | ImageData;
  displayOrder?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
