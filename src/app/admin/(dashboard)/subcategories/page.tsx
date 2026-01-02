'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';

interface ICategory {
  id: string;
  name: string;
  slug: string;
}

interface ISubcategory {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description?: string | null;
  image?: string | null;
  displayOrder?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function SubcategoriesAdmin() {
  const { user, hasRole } = useAuth();
  const isAdmin = user?.role === UserRole.ADMIN;

  const [subcategories, setSubcategories] = useState<ISubcategory[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [filterCategoryId, setFilterCategoryId] = useState<string>('');
  const [formData, setFormData] = useState({
    categoryId: '',
    name: '',
    slug: '',
    description: '',
    displayOrder: '0',
    image: ''
  });

  useEffect(() => {
    fetchCategories();
    fetchSubcategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('/api/admin/categories', { withCredentials: true });
      setCategories(res.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchSubcategories = async (categoryId?: string) => {
    try {
      const url = categoryId 
        ? `/api/admin/subcategories?categoryId=${categoryId}`
        : '/api/admin/subcategories';
      const res = await axios.get(url, { withCredentials: true });
      setSubcategories(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      setLoading(false);
    }
  };

  const handleFilterChange = (categoryId: string) => {
    setFilterCategoryId(categoryId);
    if (categoryId) {
      fetchSubcategories(categoryId);
    } else {
      fetchSubcategories();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this subcategory?')) return;
    try {
      if (isAdmin) {
        await axios.delete(`/api/admin/subcategories/${id}`, { withCredentials: true });
        fetchSubcategories(filterCategoryId || undefined);
      } else {
        await axios.post('/api/admin/pending-changes', {
          action: 'delete',
          resourceType: 'subcategory',
          resourceId: id,
          changeData: {},
        });
        alert('Delete request submitted for approval');
      }
    } catch (error) {
      console.error('Error deleting subcategory:', error);
      alert('Failed to delete subcategory');
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      await axios.patch(`/api/admin/subcategories/${id}/toggle`, {
        isActive: !currentStatus
      }, { withCredentials: true });
      fetchSubcategories(filterCategoryId || undefined);
    } catch (error) {
      console.error('Error toggling subcategory status:', error);
      alert('Failed to toggle subcategory status');
    }
  };

  const handleEdit = (subcategory: ISubcategory) => {
    setEditingId(subcategory.id);
    setFormData({
      categoryId: subcategory.categoryId,
      name: subcategory.name,
      slug: subcategory.slug,
      description: subcategory.description || '',
      displayOrder: subcategory.displayOrder || '0',
      image: subcategory.image || ''
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      categoryId: '',
      name: '',
      slug: '',
      description: '',
      displayOrder: '0',
      image: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.categoryId) {
      alert('Please select a category');
      return;
    }
    
    try {
      const payload = {
        categoryId: formData.categoryId,
        name: formData.name,
        slug: formData.slug,
        description: formData.description || undefined,
        displayOrder: formData.displayOrder || undefined,
        image: formData.image || undefined,
      };

      if (isAdmin) {
        if (editingId) {
          await axios.patch(`/api/admin/subcategories/${editingId}`, payload, { withCredentials: true });
        } else {
          await axios.post('/api/admin/subcategories', payload, { withCredentials: true });
        }
        fetchSubcategories(filterCategoryId || undefined);
      } else {
         await axios.post('/api/admin/pending-changes', {
          action: editingId ? 'update' : 'create',
          resourceType: 'subcategory',
          resourceId: editingId || undefined,
          changeData: payload,
        });
        alert('Change submitted for approval');
      }
      
      handleCancelEdit();
    } catch (error: any) {
      console.error('Error saving subcategory:', error);
      alert(error.response?.data?.error || 'Failed to save subcategory');
    }
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category?.name || 'Unknown';
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Subcategories Management</h1>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? 'Edit Subcategory' : 'Add New Subcategory'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="border p-2 rounded"
              value={formData.categoryId}
              onChange={e => setFormData({ ...formData, categoryId: e.target.value })}
              required
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Subcategory Name (e.g., Inline Drippers)"
              className="border p-2 rounded"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Slug (e.g., inline-drippers)"
              className="border p-2 rounded"
              value={formData.slug}
              onChange={e => setFormData({ ...formData, slug: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Display Order (e.g., 1)"
              className="border p-2 rounded"
              value={formData.displayOrder}
              onChange={e => setFormData({ ...formData, displayOrder: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="border p-2 rounded col-span-2"
              value={formData.image}
              onChange={e => setFormData({ ...formData, image: e.target.value })}
            />
          </div>
          <textarea
            placeholder="Description (optional)"
            className="border p-2 rounded w-full"
            rows={3}
            value={formData.description}
            onChange={e => setFormData({ ...formData, description: e.target.value })}
          />
          <div className="flex gap-2">
            <button 
              type="submit" 
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              {editingId ? (isAdmin ? 'Update Subcategory' : 'Submit Update for Approval') : (isAdmin ? 'Add Subcategory' : 'Submit for Approval')}
            </button>
            {editingId && (
              <button 
                type="button"
                onClick={handleCancelEdit}
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Category
          </label>
          <select
            className="border p-2 rounded"
            value={filterCategoryId}
            onChange={e => handleFilterChange(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Display Order</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan={6} className="px-6 py-4 text-center">Loading...</td></tr>
              ) : subcategories.length === 0 ? (
                <tr><td colSpan={6} className="px-6 py-4 text-center">No subcategories found.</td></tr>
              ) : subcategories.map((subcat) => (
                <tr key={subcat.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {getCategoryName(subcat.categoryId)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{subcat.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subcat.slug}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{subcat.displayOrder || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      subcat.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {subcat.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button
                      onClick={() => handleEdit(subcat)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Edit
                    </button>
                    {isAdmin && (
                      <button
                        onClick={() => handleToggleActive(subcat.id, subcat.isActive)}
                        className="text-yellow-600 hover:text-yellow-900"
                      >
                        {subcat.isActive ? 'Deactivate' : 'Activate'}
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(subcat.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
