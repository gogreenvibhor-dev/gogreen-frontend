'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface LocationData {
  title: string;
  summary: string;
  lat?: number;
  lng?: number;
}

export default function Location() {
  const searchParams = useSearchParams();
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const place = searchParams.get('place');
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    if (place) {
      setLocationData({
        title: decodeURIComponent(place),
        summary: `Showing details for ${decodeURIComponent(place)}. Use your internal data or existing pages to fill real content.`
      });
    } else if (lat && lng) {
      setLocationData({
        title: `Coordinates: ${lat}, ${lng}`,
        summary: 'You clicked on the map at the coordinates above. You can link these to a records DB or show local contact info.',
        lat: parseFloat(lat),
        lng: parseFloat(lng)
      });
      setShowMap(true);
    } else {
      setLocationData({
        title: 'No location provided',
        summary: 'Open this page via the interactive map or by linking with ?place=NAME or ?lat=...&lng=...'
      });
    }
  }, [searchParams]);

  useEffect(() => {
    if (showMap && locationData?.lat && locationData?.lng) {
      // Load Leaflet dynamically
      const loadLeaflet = async () => {
        // Load Leaflet CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);

        // Load Leaflet JS
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = () => {
          // @ts-ignore - Leaflet is loaded dynamically
          const L = (window as any).L;
          
          const mapContainer = document.getElementById('miniMap');
          if (mapContainer) {
            const map = L.map('miniMap', {
              dragging: false,
              scrollWheelZoom: false
            }).setView([locationData.lat, locationData.lng], 10);

            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map);
            L.marker([locationData.lat, locationData.lng]).addTo(map);
          }
        };
        document.body.appendChild(script);
      };

      loadLeaflet();
    }
  }, [showMap, locationData]);

  return (
    <>
      <style jsx>{`
        body {
          padding: 24px;
          background: #f8f9fa;
        }
        .card {
          max-width: 900px;
          margin: 24px auto;
        }
        #miniMap {
          height: 300px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
      `}</style>

      <div className="card">
        <div className="card-body">
          <h3 id="placeTitle">
            {locationData?.title || 'Loading...'}
          </h3>
          <p id="placeSummary">
            {locationData?.summary || 'Loading...'}
          </p>
          <div id="extra">
            {showMap && locationData?.lat && locationData?.lng && (
              <div>
                <p><strong>Map preview:</strong></p>
                <div id="miniMap"></div>
              </div>
            )}
          </div>
          <Link href="/" className="btn btn-secondary mt-3">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
