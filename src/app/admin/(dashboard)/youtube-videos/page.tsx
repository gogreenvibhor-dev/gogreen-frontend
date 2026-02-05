"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface YouTubeVideo {
  id: string;
  youtubeUrl: string;
  displayOrder: number;
  isActive: boolean;
  embedUrl: string;
  videoId: string;
  createdAt: string;
  updatedAt: string;
}

interface VideoFormData {
  youtubeUrl: string;
  displayOrder: number;
  isActive: boolean;
}

const defaultFormData: VideoFormData = {
  youtubeUrl: "",
  displayOrder: 0,
  isActive: true,
};

export default function YouTubeVideosPage() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState<YouTubeVideo | null>(null);
  const [formData, setFormData] = useState<VideoFormData>(defaultFormData);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Fetch videos
  const { data: videos, isLoading } = useQuery<YouTubeVideo[]>({
    queryKey: ["youtube-videos"],
    queryFn: async () => {
      const response = await axios.get("/api/admin/youtube-videos");
      return response.data.data || [];
    },
  });

  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data: VideoFormData) => {
      return axios.post("/api/admin/youtube-videos", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["youtube-videos"] });
      setShowForm(false);
      setFormData(defaultFormData);
      setMessage({ type: "success", text: "YouTube video added successfully!" });
      setTimeout(() => setMessage(null), 3000);
    },
    onError: (error: unknown) => {
      const axiosError = error as { response?: { data?: { error?: string } } };
      setMessage({ 
        type: "error", 
        text: axiosError.response?.data?.error || "Failed to add video" 
      });
    },
  });

  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<VideoFormData> }) => {
      return axios.patch(`/api/admin/youtube-videos/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["youtube-videos"] });
      setEditingVideo(null);
      setFormData(defaultFormData);
      setMessage({ type: "success", text: "Video updated successfully!" });
      setTimeout(() => setMessage(null), 3000);
    },
    onError: (error: unknown) => {
      const axiosError = error as { response?: { data?: { error?: string } } };
      setMessage({ 
        type: "error", 
        text: axiosError.response?.data?.error || "Failed to update video" 
      });
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      return axios.delete(`/api/admin/youtube-videos/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["youtube-videos"] });
      setMessage({ type: "success", text: "Video deleted successfully!" });
      setTimeout(() => setMessage(null), 3000);
    },
    onError: () => {
      setMessage({ type: "error", text: "Failed to delete video" });
    },
  });

  // Toggle active status
  const toggleActiveMutation = useMutation({
    mutationFn: async ({ id, isActive }: { id: string; isActive: boolean }) => {
      return axios.patch(`/api/admin/youtube-videos/${id}`, { isActive });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["youtube-videos"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingVideo) {
      updateMutation.mutate({ id: editingVideo.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (video: YouTubeVideo) => {
    setEditingVideo(video);
    setFormData({
      youtubeUrl: video.youtubeUrl,
      displayOrder: video.displayOrder,
      isActive: video.isActive,
    });
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this video?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingVideo(null);
    setFormData(defaultFormData);
  };

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/,
      /youtube\.com\/shorts\/([^&\n?#]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-green-900">YouTube Videos</h1>
          <p className="text-gray-600 mt-1">
            Add YouTube video links to display on the homepage
          </p>
        </div>
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Video
          </button>
        )}
      </div>

      {/* Success/Error Message */}
      {message && (
        <div className={`p-4 rounded-lg ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {message.text}
        </div>
      )}

      {/* Add/Edit Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingVideo ? "Edit Video" : "Add New Video"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                YouTube URL *
              </label>
              <input
                type="url"
                value={formData.youtubeUrl}
                onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="https://www.youtube.com/watch?v=..."
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Supports youtube.com/watch, youtu.be, and youtube.com/shorts links
              </p>
            </div>

            {/* Preview */}
            {formData.youtubeUrl && extractVideoId(formData.youtubeUrl) && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preview
                </label>
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg bg-gray-200 max-w-md">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${extractVideoId(formData.youtubeUrl)}?rel=0`}
                    title="Video Preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Order
                </label>
                <input
                  type="number"
                  value={formData.displayOrder}
                  onChange={(e) => setFormData({ ...formData, displayOrder: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  min={0}
                />
                <p className="text-xs text-gray-500 mt-1">Lower numbers appear first</p>
              </div>

              <div className="flex items-center">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Active (visible on homepage)</span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={createMutation.isPending || updateMutation.isPending}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50"
              >
                {createMutation.isPending || updateMutation.isPending ? "Saving..." : editingVideo ? "Update Video" : "Add Video"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Videos List */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading videos...</p>
        </div>
      ) : videos && videos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${!video.isActive ? "opacity-60" : ""}`}
            >
              {/* Video Thumbnail */}
              <div className="relative pb-[56.25%] h-0 overflow-hidden bg-gray-200">
                <iframe
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  src={video.embedUrl}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs text-gray-500 font-mono truncate max-w-[200px]">
                    {video.youtubeUrl}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${video.isActive ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}>
                    {video.isActive ? "Active" : "Inactive"}
                  </span>
                </div>

                <div className="text-xs text-gray-500 mb-3">
                  Order: {video.displayOrder}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => toggleActiveMutation.mutate({ id: video.id, isActive: !video.isActive })}
                    className={`flex-1 px-3 py-2 rounded text-sm font-medium transition ${
                      video.isActive 
                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" 
                        : "bg-green-100 text-green-800 hover:bg-green-200"
                    }`}
                  >
                    {video.isActive ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => handleEdit(video)}
                    className="px-3 py-2 bg-blue-100 text-blue-800 rounded text-sm font-medium hover:bg-blue-200 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(video.id)}
                    className="px-3 py-2 bg-red-100 text-red-800 rounded text-sm font-medium hover:bg-red-200 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <h3 className="text-xl font-semibold text-green-900 mb-2">No Videos Added</h3>
          <p className="text-gray-600 mb-4">
            Add YouTube video links to display on the homepage.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Add Your First Video
          </button>
        </div>
      )}
    </div>
  );
}
