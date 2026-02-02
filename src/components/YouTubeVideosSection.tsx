'use client';

import Link from 'next/dist/client/link';
import { useEffect, useState } from 'react';

interface YouTubeVideo {
  id: string;
  youtubeUrl: string;
  displayOrder: number;
  isActive: boolean;
  embedUrl: string;
  videoId: string;
}

export default function YouTubeVideosSection() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube-videos');
        const data = await response.json();
        if (data.success && data.data) {
          setVideos(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch YouTube videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // If no videos are available, don't render the section
  if (!loading && videos.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white" aria-labelledby="company-videos">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-bold uppercase tracking-wider mb-2">Watch Our Story</p>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <h2 id="company-videos" className="text-4xl lg:text-5xl font-bold text-gray-900">
            Latest Videos from Vidhi Enterprises
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {/* Video Cards Grid - Responsive based on video count */}
            <div className={`grid gap-8 max-w-7xl mx-auto ${
              videos.length === 1 
                ? 'grid-cols-1 max-w-2xl' 
                : videos.length === 2 
                  ? 'grid-cols-1 md:grid-cols-2 max-w-4xl' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {videos.slice(0, 6).map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative pb-[56.25%] h-0 overflow-hidden bg-gray-200">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={video.embedUrl}
                      title="Vidhi Enterprises Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Link
                href="https://www.youtube.com/@vidhi_enterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-secondary transition shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-youtube text-2xl"></i>
                Visit Our YouTube Channel for More Videos
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
