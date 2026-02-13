import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Breadcrumb {
  label: string;
  href?: string;
  active?: boolean;
}

interface PageHeaderProps {
  title: string;
  backgroundImage: string;
  breadcrumbs: Breadcrumb[];
}

const PageHeader = ({ title, backgroundImage, breadcrumbs }: PageHeaderProps) => {
  return (
    <div className="relative py-16 md:py-24 mb-6 md:mb-12 overflow-hidden min-h-[250px] md:min-h-[350px] flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-primary/60"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-slideDown leading-tight">
          {title}
        </h1>
        <nav className="flex max-w-full overflow-x-auto pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <ol className="flex items-center space-x-2 bg-white/90 px-4 py-2 md:px-6 md:py-2 rounded-full shadow-lg font-bold text-primary text-sm md:text-base whitespace-nowrap mx-auto">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center">
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-green-900 transition">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-green-900">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <i className="fa fa-chevron-right mx-2 text-[10px] opacity-50"></i>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
