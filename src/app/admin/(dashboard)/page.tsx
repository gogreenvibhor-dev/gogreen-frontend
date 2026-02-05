'use client';

import { useAuth } from '@/contexts/AuthContext';
import { AdminOnly, EditorOrAdmin } from '@/components/RoleBasedComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Users, UserCheck, UserX, Shield } from 'lucide-react';



interface User {
  id: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const { user, isAdmin, isEditor } = useAuth();

  const [users, setUsers] = useState<User[]>([]);
  const [usersLoading, setUsersLoading] = useState(true);

  useEffect(() => {
    if (isAdmin()) {
      fetchUsers();
    }
  }, []);



  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/admin/users');
      setUsers(response.data.data || []);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setUsersLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-green-900 mb-4">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user?.email}!</p>
        <p className="text-sm text-gray-500 mt-2">Role: <span className="font-semibold uppercase">{user?.role}</span></p>
      </div>





      {/* Users Section - Admin Only */}
      <AdminOnly>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">System Users</h2>
            <Link 
              href="/admin/users" 
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Manage Users →
            </Link>
          </div>
          
          {usersLoading ? (
            <p className="text-gray-500">Loading users...</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg border border-indigo-200">
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-indigo-600" />
                    <div>
                      <p className="text-sm text-indigo-700 font-medium">Total Users</p>
                      <p className="text-2xl font-bold text-indigo-900">{users.length}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <UserCheck className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-sm text-green-700 font-medium">Active Users</p>
                      <p className="text-2xl font-bold text-green-900">
                        {users.filter(u => u.isActive).length}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-purple-600" />
                    <div>
                      <p className="text-sm text-purple-700 font-medium">Administrators</p>
                      <p className="text-2xl font-bold text-purple-900">
                        {users.filter(u => u.role === 'admin').length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.slice(0, 5).map((u) => (
                      <tr key={u.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                              {u.email.charAt(0).toUpperCase()}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-green-900">{u.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full uppercase ${
                            u.role === 'admin' 
                              ? 'bg-purple-100 text-purple-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {u.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {u.isActive ? (
                            <span className="flex items-center text-green-600">
                              <UserCheck className="h-4 w-4 mr-1" />
                              <span className="text-sm font-medium">Active</span>
                            </span>
                          ) : (
                            <span className="flex items-center text-red-600">
                              <UserX className="h-4 w-4 mr-1" />
                              <span className="text-sm font-medium">Inactive</span>
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(u.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {users.length > 5 && (
                  <div className="mt-4 text-center">
                    <Link 
                      href="/admin/users" 
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View all {users.length} users →
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </AdminOnly>

      {/* Role-based Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EditorOrAdmin>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Editor Access</h2>
            <p className="text-gray-600 mb-4">You can edit content, manage products, and update pages.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Edit products</li>
              <li>✓ Manage categories</li>
              <li>✓ Update pages</li>
              <li>✓ View contacts</li>
            </ul>
          </div>
        </EditorOrAdmin>

        <AdminOnly>
          <div className="bg-white rounded-lg shadow p-6 border-2 border-green-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Admin Access</h2>
            <p className="text-gray-600 mb-4">You have full access to all features including user management.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ All editor permissions</li>
              <li>✓ Manage users</li>
              <li>✓ System settings</li>
              <li>✓ Analytics & reports</li>
            </ul>
          </div>
        </AdminOnly>
      </div>

      {/* Permission Indicator */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Your Permissions</h3>
        <div className="flex flex-wrap gap-2">
          {isEditor() && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Content Editor
            </span>
          )}
          {isAdmin() && (
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Administrator
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
