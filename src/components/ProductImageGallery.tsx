'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const defaultImage = 'https://d170mw2nhcb1v0.cloudfront.net/img/default-product.png';
  
  // Use provided images or fallback to default
  const displayImages = images && images.length > 0 ? images : [defaultImage];
  const selectedImage = displayImages[selectedIndex];

  return (
    <div className="relative group">
      {/* Main Image */}
      <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-whitesmoke relative">
        <Image
          src={selectedImage}
          alt={productName}
          width={600}
          height={700}
          className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
          priority
        />
        
        {/* Image Counter */}
        {displayImages.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {selectedIndex + 1} / {displayImages.length}
          </div>
        )}

        {/* Navigation Arrows */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={() => setSelectedIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setSelectedIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-3 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="mt-4 overflow-x-auto">
          <div className="flex gap-3 pb-2">
            {displayImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                  idx === selectedIndex
                    ? 'border-primary ring-2 ring-primary ring-offset-2'
                    : 'border-gray-200 hover:border-primary'
                }`}
              >
                <Image
                  src={img}
                  alt={`${productName} - ${idx + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;
