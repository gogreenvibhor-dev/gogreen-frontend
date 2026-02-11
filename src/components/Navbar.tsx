"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import axios from "axios";


interface NavbarProps {
  initialCategories?: any[];
}

const Navbar = ({ initialCategories = [] }: NavbarProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>(initialCategories);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Mobile dropdown states
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Clear loading state when path changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  // Handle category navigation with loading
  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsNavigating(true);
    setIsNavOpen(false);
    router.push(href);
  };

  useEffect(() => {
    // Only fetch if no initial data provided
    if (categories.length === 0) {
      const fetchCategories = async () => {
        try {
          const response = await axios.get('/api/categories');
          setCategories(response.data);
        } catch (error) {
          console.error('Error fetching categories for navbar:', error);
        }
      };
      fetchCategories();
    }
  }, [categories.length]);

  // Handle click outside to close search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search function with debouncing
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.trim().length >= 2) {
        setIsSearching(true);
        try {
          const response = await axios.get(`/api/products?search=${encodeURIComponent(searchQuery)}`);
          setSearchResults(response.data.data || []);
          setShowResults(true);
        } catch (error) {
          console.error('Error searching products:', error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowResults(false);
      setSearchQuery("");
    }
  };

  const handleProductClick = () => {
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <nav className="sticky top-0 z-50 main-navbar py-2 bg-green-200">
      <div className="max-w-full px-0">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between px-4 lg:px-10">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://d170mw2nhcb1v0.cloudfront.net/img/vidhi_logo.png"
              width={120}
              height={100}
              className="logo-img w-[100px] lg:w-[120px] h-auto"
              alt="Vidhi Enterprises Logo"
              priority
            />
          </Link>

          {/* Search Bar (Desktop & Tablet) */}
          <div className="hidden sm:flex flex-grow max-w-[400px] mx-4" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="w-full">
              <div className="search-bar-rounded w-full relative flex items-center">
                <input 
                  type="search" 
                  className="w-full bg-transparent py-3 pl-6 pr-12 text-lg outline-none border-none focus:ring-0" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchQuery.trim().length >= 2 && setShowResults(true)}
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-0 w-12 h-12 flex items-center justify-center bg-primary text-white hover:bg-dark transition-colors rounded-full m-0.5"
                >
                  {isSearching ? (
                    <i className="fa fa-spinner fa-spin"></i>
                  ) : (
                    <i className="fa fa-search"></i>
                  )}
                </button>
                
                {/* Search Results Dropdown */}
                {showResults && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
                    {searchResults.length > 0 ? (
                      <>
                        {searchResults.slice(0, 10).map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className="block px-4 py-3 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                            onClick={handleProductClick}
                          >
                            <div className="flex items-center">
                              {product.image && (
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  width={40}
                                  height={40}
                                  className="rounded mr-3"
                                />
                              )}
                              <div>
                                <div className="font-semibold text-green-900">{product.name}</div>
                                {product.description && (
                                  <div className="text-sm text-gray-600 truncate max-w-md">
                                    {product.description}
                                  </div>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                        {searchResults.length > 10 && (
                          <Link
                            href={`/search?q=${encodeURIComponent(searchQuery)}`}
                            className="block px-4 py-3 text-center text-primary hover:bg-gray-50 font-semibold"
                            onClick={handleProductClick}
                          >
                            View all {searchResults.length} results
                          </Link>
                        )}
                      </>
                    ) : (
                      <div className="px-4 py-8 text-center text-gray-500">
                        {searchQuery.trim().length < 2 ? 
                          "Type at least 2 characters to search" : 
                          "No products found"
                        }
                      </div>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Mobile Toggler */}
          <button 
            className="lg:hidden p-2 text-dark focus:outline-none"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="fa fa-bars text-2xl"></span>
          </button>

          {/* Navigation Links */}
          <div className={`${isNavOpen ? 'block' : 'hidden'} lg:flex w-full lg:w-auto items-center mt-4 lg:mt-0`}>
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center lg:space-x-4 w-full">
              
              {/* Mobile Search Bar */}
              <div className="lg:hidden w-full px-4 mb-4">
                <form onSubmit={handleSearchSubmit} className="w-full">
                  <div className="search-bar-rounded w-full relative flex items-center bg-white shadow-sm">
                    <input 
                      type="search" 
                      className="w-full bg-transparent py-2 pl-4 pr-10 text-sm outline-none border-none focus:ring-0" 
                      placeholder="Search products..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button 
                      type="submit"
                      className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-primary text-white hover:bg-dark transition-colors rounded-full"
                    >
                      {isSearching ? (
                        <i className="fa fa-spinner fa-spin text-xs"></i>
                      ) : (
                        <i className="fa fa-search text-xs"></i>
                      )}
                    </button>
                  </div>
                </form>
              </div>
              
              <Link href="/" className="nav-link text-lg w-full lg:w-auto text-left lg:text-center block lg:inline-block"><b>Home</b></Link>
              <div className="relative group">
                <button 
                  className="nav-link text-lg flex items-center justify-between w-full lg:w-auto"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  <b>Products</b> <i className={`fa fa-chevron-down ml-2 text-[10px] transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}></i>
                </button>
                <div 
                  className={`${isProductsOpen ? 'max-h-[500px] opacity-100 py-2' : 'max-h-0 opacity-0 py-0'} lg:hidden overflow-hidden transition-all duration-300 ease-in-out w-full bg-white/50 rounded-lg mt-1 border-l-2 border-primary`}
                >
                   {/* Mobile Product Links */}
                   <div className="pl-2">
                     {categories.length > 0 ? (
                      categories.map((cat) => (
                        <a 
                          key={cat.id} 
                          href={`/${cat.slug}`} 
                          onClick={(e) => handleCategoryClick(e, `/${cat.slug}`)}
                          className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0"
                        >
                          {cat.name}
                        </a>
                      ))
                    ) : (
                      <>
                        <a href="/dripirri" onClick={(e) => handleCategoryClick(e, '/dripirri')} className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Drip Irrigation</a>
                        <a href="/sprinkler" onClick={(e) => handleCategoryClick(e, '/sprinkler')} className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Sprinkler Irrigation</a>
                        <a href="/rainsprinkler" onClick={(e) => handleCategoryClick(e, '/rainsprinkler')} className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Rain Sprinkler</a>
                        <a href="/landscape" onClick={(e) => handleCategoryClick(e, '/landscape')} className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Landscape Irrigation</a>
                        <a href="/economical" onClick={(e) => handleCategoryClick(e, '/economical')} className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Economical Irrigation</a>
                        <a href="/vidhi-kit" onClick={(e) => handleCategoryClick(e, '/vidhi-kit')} className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Vidhi Kit</a>
                      </>
                    )}
                   </div>
                </div>
                {/* Desktop Product Dropdown (Hover) */}
                <div className="hidden lg:group-hover:block lg:absolute left-0 mt-0 w-48 bg-white border border-green-100 rounded-lg shadow-xl z-50 overflow-hidden transform transition-all duration-200 origin-top">
                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <a 
                        key={cat.id} 
                        href={`/${cat.slug}`} 
                        onClick={(e) => handleCategoryClick(e, `/${cat.slug}`)}
                        className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"
                      >
                        <b>{cat.name}</b>
                      </a>
                    ))
                  ) : (
                    <>
                      <a href="/dripirri" onClick={(e) => handleCategoryClick(e, '/dripirri')} className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Drip Irrigation</b></a>
                      <a href="/sprinkler" onClick={(e) => handleCategoryClick(e, '/sprinkler')} className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Sprinkler Irrigation</b></a>
                      <a href="/rainsprinkler" onClick={(e) => handleCategoryClick(e, '/rainsprinkler')} className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Rain Sprinkler</b></a>
                      <a href="/landscape" onClick={(e) => handleCategoryClick(e, '/landscape')} className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Landscape Irrigation</b></a>
                      <a href="/economical" onClick={(e) => handleCategoryClick(e, '/economical')} className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Economical Irrigation</b></a>
                      <a href="/vidhi-kit" onClick={(e) => handleCategoryClick(e, '/vidhi-kit')} className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Vidhi Kit</b></a>
                    </>
                  )}
                </div>
              </div>

              <div className="relative group">
                <button 
                  className="nav-link text-lg flex items-center justify-between w-full lg:w-auto"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                >
                  <b>About Us</b> <i className={`fa fa-chevron-down ml-2 text-[10px] transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`}></i>
                </button>
                <div 
                  className={`${isAboutOpen ? 'max-h-[600px] opacity-100 py-2' : 'max-h-0 opacity-0 py-0'} lg:hidden overflow-hidden transition-all duration-300 ease-in-out w-full bg-white/50 rounded-lg mt-1 border-l-2 border-primary`}
                >
                   {/* Mobile About Links */}
                   <div className="pl-4">
                    <Link href="/company-profile" className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Company Profile</Link>
                    <Link href="/founder-vision" className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Founder's Vision</Link>
                    <Link href="/our-journey" className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Our Journey</Link>
                    <Link href="/legacy-leader" className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Legacy & Leadership</Link>
                    <Link href="/manfacture" className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Manufacturing & Infra</Link>
                    <Link href="/quality-policy" className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Quality Policy</Link>
                    <Link href="/sustainable" className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Sustainability</Link>
                    <Link href="/global-presence" className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Global Presence</Link>
                    <Link href="/blog" className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Blog</Link>
                    <Link href="/careers" className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Careers</Link>
                    <Link href="/privacy-policy" className="block py-2 text-green-800 hover:text-primary transition-colors text-base border-b border-green-100 last:border-0">Privacy Policy</Link>
                   </div>
                </div>
                {/* Desktop About Dropdown (Hover) */}
                <div className="hidden lg:group-hover:block lg:absolute left-0 mt-0 w-56 bg-white border border-green-100 rounded-lg shadow-xl z-50 overflow-hidden transform transition-all duration-200 origin-top">
                  <Link href="/company-profile" className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Company Profile</b></Link>
                  <Link href="/founder-vision" className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Founder's Vision</b></Link>
                  <Link href="/our-journey" className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Our Journey</b></Link>
                  <Link href="/legacy-leader" className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Legacy & Leadership</b></Link>
                  <Link href="/manfacture" className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Manufacturing & Infra</b></Link>
                  <Link href="/quality-policy" className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Quality Policy</b></Link>
                  <Link href="/sustainable" className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Sustainability</b></Link>
                  <Link href="/global-presence" className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Global Presence</b></Link>
                  <Link href="/blog" className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Blog</b></Link>
                  <Link href="/careers" className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Careers</b></Link>
                  <Link href="/privacy-policy" className="block px-4 py-3 hover:bg-green-50 text-green-900 border-b border-gray-50 last:border-0 transition-colors"><b>Privacy Policy</b></Link>
                </div>
              </div>

              <Link href="/contact" className="nav-link text-lg w-full lg:w-auto text-left lg:text-center block lg:inline-block"><b>Contact Us</b></Link>

              {/* Right Logo (Colored) */}
              <Link href="/" className="hidden lg:flex items-center ml-4">
                <Image
                  src="https://d170mw2nhcb1v0.cloudfront.net/img/logo-olored.png"
                  width={80}
                  height={60}
                  className="h-14 w-auto"
                  alt="Vidhi Enterprises Logo Right"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isNavigating && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <LoadingSpinner variant="leaf" size="xl" text="Loading products..." />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
