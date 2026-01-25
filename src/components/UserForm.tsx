'use client';

import { useState } from 'react';
import { User, UserRole } from '@/types/auth'; // Ensure types/auth exists or create it
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';

interface UserFormProps {
  initialData?: User;
  onSuccess?: () => void;
  onCancel?: () => void;
  isEditing?: boolean;
}

export default function UserForm({ initialData, onSuccess, onCancel, isEditing = false }: UserFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: initialData?.email || '',
    password: '',
    role: initialData?.role || UserRole.EDITOR,
    isActive: initialData?.isActive ?? true,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isEditing && initialData) {
        // Update user
        if (formData.role !== initialData.role) {
           await axios.patch(`/api/admin/users/${initialData.id}/role`, { role: formData.role });
        }
        // Assuming there isn't a single "update user" endpoint that handles everything yet based on routes usage.
        // But backend routes has /:id/active
         if (formData.isActive !== initialData.isActive) {
           await axios.patch(`/api/admin/users/${initialData.id}/active`, { isActive: formData.isActive });
        }
        // Password update isn't in the provided routes list clearly, but usually handled separately or I might have missed it. 
        // Checking routes again... I saw create, update role, update active, delete. No update password/email.
        // For now, I'll only support Role and Active status for Edit.
      } else {
        // Create user
        await axios.post('/api/admin/users', {
          email: formData.email,
          password: formData.password,
          role: formData.role,
        });
      }

      if (onSuccess) {
        onSuccess();
      } else {
        router.push('/admin/users');
        router.refresh();
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded text-sm">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          disabled={isEditing} // Email usually unique identifier, not editable easily without more logic
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 disabled:bg-gray-100 sm:text-sm p-2 border"
        />
      </div>

      {!isEditing && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              required={!isEditing}
              minLength={6}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="block w-full pr-10 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value as UserRole })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2 border"
        >
          <option value={UserRole.ADMIN}>Admin</option>
          <option value={UserRole.EDITOR}>Editor</option>
        </select>
      </div>

      {isEditing && (
         <div className="flex items-center">
            <input
              id="isActive"
              type="checkbox"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
              Active Account
            </label>
        </div>
      )}

      <div className="flex justify-end space-x-3 pt-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
        >
          {loading ? 'Saving...' : isEditing ? 'Update User' : 'Create User'}
        </button>
      </div>
    </form>
  );
}
