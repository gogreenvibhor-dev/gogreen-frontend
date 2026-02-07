"use client";

import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("./WorldMap"), {
  loading: () => <div className="w-full h-[600px] bg-gray-100 animate-pulse rounded-lg" />,
  ssr: false
});

export default function LazyWorldMap() {
  return <WorldMap />;
}
