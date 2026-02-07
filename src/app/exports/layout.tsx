
import React from 'react';
import { Metadata } from 'next';

// Force static rendering for all pages in this directory and subdirectories
export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate once a day (optional, but good practice)

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

export default function ExportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
