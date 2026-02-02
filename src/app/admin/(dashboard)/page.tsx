'use client';

import { useAuth } from '@/contexts/AuthContext';
import { AdminOnly, EditorOrAdmin } from '@/components/RoleBasedComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { BarChart, Users, Eye, Globe, Smartphone, UserCheck, UserX, Shield } from 'lucide-react';

interface AnalyticsData {
  totalViews: number;
  uniqueVisitors: number;
  topPages: Array<{ page: string; views: number }>;
  deviceStats: Array<{ device: string; count: number }>;
  dailyViews: Array<{ date: string; views: number }>;
  topCountries: Array<{ country: string; count: number }>;
}

interface User {
  id: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const { user, isAdmin, isEditor } = useAuth();
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [usersLoading, setUsersLoading] = useState(true);

  useEffect(() => {
    if (isAdmin()) {
      fetchAnalytics();
      fetchUsers();
    }
  }, []);

  const fetchAnalytics = async () => {
    try {
      const response = await axios.get('/api/admin/analytics?days=30');
      setAnalytics(response.data.data);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user?.email}!</p>
        <p className="text-sm text-gray-500 mt-2">Role: <span className="font-semibold uppercase">{user?.role}</span></p>
      </div>

      {/* Analytics Section - Admin Only */}
      <AdminOnly>
        {loading ? (
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500">Loading analytics...</p>
          </div>
        ) : analytics && (
          <>
            {/* Analytics Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm font-medium uppercase">Total Views</p>
                    <p className="text-3xl font-bold mt-2">{analytics.totalViews.toLocaleString()}</p>
                    <p className="text-blue-100 text-xs mt-1">Last 30 days</p>
                  </div>
                  <Eye className="h-12 w-12 text-blue-200 opacity-80" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg shadow-lg text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm font-medium uppercase">Unique Visitors</p>
                    <p className="text-3xl font-bold mt-2">{analytics.uniqueVisitors.toLocaleString()}</p>
                    <p className="text-green-100 text-xs mt-1">Based on IP</p>
                  </div>
                  <Users className="h-12 w-12 text-green-200 opacity-80" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg shadow-lg text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm font-medium uppercase">Avg. Views/Day</p>
                    <p className="text-3xl font-bold mt-2">{Math.round(analytics.totalViews / 30).toLocaleString()}</p>
                    <p className="text-purple-100 text-xs mt-1">Daily average</p>
                  </div>
                  <BarChart className="h-12 w-12 text-purple-200 opacity-80" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-lg shadow-lg text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm font-medium uppercase">Mobile Traffic</p>
                    <p className="text-3xl font-bold mt-2">
                      {Math.round((analytics.deviceStats.find(d => d.device === 'mobile')?.count || 0) / analytics.totalViews * 100)}%
                    </p>
                    <p className="text-orange-100 text-xs mt-1">of total views</p>
                  </div>
                  <Smartphone className="h-12 w-12 text-orange-200 opacity-80" />
                </div>
              </div>
            </div>

            {/* Charts and Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Pages */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Pages</h2>
                <div className="space-y-3">
                  {analytics.topPages.slice(0, 5).map((page, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-700 truncate">{page.page}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${(page.views / analytics.topPages[0].views) * 100}%` }}
                          />
                        </div>
                      </div>
                      <span className="ml-4 text-sm font-semibold text-gray-900">{page.views}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Stats */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Devices</h2>
                <div className="space-y-4">
                  {analytics.deviceStats.map((device, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 capitalize">{device.device || 'Unknown'}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${
                              device.device === 'mobile' ? 'bg-orange-500' :
                              device.device === 'tablet' ? 'bg-purple-500' :
                              'bg-blue-500'
                            }`}
                            style={{ width: `${(device.count / analytics.totalViews) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 w-16 text-right">
                          {device.count} ({Math.round((device.count / analytics.totalViews) * 100)}%)
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Daily Views Chart */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Daily Views (Last 7 Days)</h2>
              <div className="flex items-end justify-between h-48 gap-2">
                {analytics.dailyViews.map((day, idx) => {
                  const maxViews = Math.max(...analytics.dailyViews.map(d => d.views));
                  const height = (day.views / maxViews) * 100;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div className="relative flex-1 w-full flex items-end">
                        <div
                          className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t hover:from-blue-700 hover:to-blue-500 transition-all cursor-pointer"
                          style={{ height: `${height}%` }}
                          title={`${day.views} views`}
                        >
                          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-700">
                            {day.views}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </AdminOnly>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Products</h2>
          <p className="text-3xl font-bold">Manage</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Categories</h2>
          <p className="text-3xl font-bold">Manage</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Contacts</h2>
          <p className="text-3xl font-bold">View</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Pages</h2>
          <p className="text-3xl font-bold">Edit</p>
        </div>
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
                              <div className="text-sm font-medium text-gray-900">{u.email}</div>
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
