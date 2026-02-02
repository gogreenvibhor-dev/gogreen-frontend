import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// List of directories in /products that are static product pages (not dynamic routes)
function getStaticProductRoutes(): { route: string; name: string }[] {
  const productsDir = path.join(process.cwd(), 'src/app/products');
  
  try {
    const entries = fs.readdirSync(productsDir, { withFileTypes: true });
    const staticRoutes: { route: string; name: string }[] = [];
    
    for (const entry of entries) {
      // Skip dynamic routes (directories starting with [)
      // Skip page.tsx files
      if (entry.isDirectory() && !entry.name.startsWith('[')) {
        const route = `/products/${entry.name}`;
        // Convert slug to readable name: "adjustable-dripper" -> "Adjustable Dripper"
        const name = entry.name
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        staticRoutes.push({ route, name });
      }
    }
    
    // Sort alphabetically by name
    staticRoutes.sort((a, b) => a.name.localeCompare(b.name));
    
    return staticRoutes;
  } catch (error) {
    console.error('Error reading static routes:', error);
    return [];
  }
}

// Get static pages at root level (like /Right-irrri.filter, /plain-lateral, etc.)
function getRootStaticPages(): { route: string; name: string }[] {
  const appDir = path.join(process.cwd(), 'src/app');
  const staticRoutes: { route: string; name: string }[] = [];
  
  // Directories to exclude (not product pages)
  const excludeDirs = new Set([
    'admin', 'api', 'products', '[slug]', 'about', 'blog', 'careers', 
    'contact', 'company-profile', 'features', 'founder-vision', 'global-presence',
    'knowledge-hub', 'leader', 'legacy-leader', 'location', 'manfacture', 
    'our-journey', 'quality-policy', 'search', 'sustainable', 'team', 
    'testimonial', 'dripirri', 'landscape', 'sprinkler', 'microsprinkler',
    'misters', 'inline-drip', 'mini-sprinkler-accessories', 'layflat-pipe',
    'rainsprinkler', 'vidhi-kit', 'economical'
  ]);
  
  try {
    const entries = fs.readdirSync(appDir, { withFileTypes: true });
    
    for (const entry of entries) {
      // Skip excluded directories, dynamic routes, and non-directories
      if (!entry.isDirectory() || 
          entry.name.startsWith('[') || 
          entry.name.startsWith('_') ||
          excludeDirs.has(entry.name)) {
        continue;
      }
      
      // Check if it has a page.tsx
      const pagePath = path.join(appDir, entry.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        const route = `/${entry.name}`;
        // Convert slug to readable name
        const name = entry.name
          .split(/[-.]/)
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        staticRoutes.push({ route, name });
      }
    }
    
    staticRoutes.sort((a, b) => a.name.localeCompare(b.name));
    return staticRoutes;
  } catch (error) {
    console.error('Error reading root static pages:', error);
    return [];
  }
}

// Also get other static pages that could be linked (category pages, etc.)
function getAllStaticRoutes(): { category: string; routes: { route: string; name: string }[] }[] {
  const appDir = path.join(process.cwd(), 'src/app');
  const result: { category: string; routes: { route: string; name: string }[] }[] = [];
  
  // Product routes
  result.push({
    category: 'Products',
    routes: getStaticProductRoutes()
  });
  
  // Get other major category directories
  const categoryDirs = [
    { dir: 'dripirri', category: 'Drip Irrigation' },
    { dir: 'landscape', category: 'Landscape' },
    { dir: 'sprinkler', category: 'Sprinkler' },
    { dir: 'microsprinkler', category: 'Micro Sprinkler' },
    { dir: 'misters', category: 'Misters' },
    { dir: 'inline-drip', category: 'Inline Drip' },
    { dir: 'mini-sprinkler-accessories', category: 'Mini Sprinkler Accessories' },
    { dir: 'layflat-pipe', category: 'Layflat Pipe' },
    { dir: 'rainsprinkler', category: 'Rain Sprinkler' },
    { dir: 'vidhi-kit', category: 'Vidhi Kit' },
  ];
  
  for (const { dir, category } of categoryDirs) {
    const categoryPath = path.join(appDir, dir);
    try {
      if (fs.existsSync(categoryPath)) {
        const hasPage = fs.existsSync(path.join(categoryPath, 'page.tsx'));
        if (hasPage) {
          // Check if the main route exists
          const routes: { route: string; name: string }[] = [
            { route: `/${dir}`, name: category }
          ];
          
          // Check for subdirectories
          const entries = fs.readdirSync(categoryPath, { withFileTypes: true });
          for (const entry of entries) {
            if (entry.isDirectory() && !entry.name.startsWith('[') && !entry.name.startsWith('_')) {
              const subPath = path.join(categoryPath, entry.name);
              if (fs.existsSync(path.join(subPath, 'page.tsx'))) {
                const subName = entry.name
                  .split('-')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
                routes.push({ route: `/${dir}/${entry.name}`, name: subName });
              }
            }
          }
          
          if (routes.length > 0) {
            result.push({ category, routes });
          }
        }
      }
    } catch (error) {
      console.error(`Error reading ${dir}:`, error);
    }
  }
  
  return result;
}

export async function GET(request: NextRequest) {
  try {
    // Optional: check for admin/editor session
    // For now, we'll allow this endpoint to be accessible
    
    const grouped = request.nextUrl.searchParams.get('grouped') === 'true';
    
    if (grouped) {
      return NextResponse.json(getAllStaticRoutes());
    }
    
    // Return flat list combining product routes and root static pages
    const productRoutes = getStaticProductRoutes();
    const rootPages = getRootStaticPages();
    const allRoutes = [...productRoutes, ...rootPages].sort((a, b) => a.name.localeCompare(b.name));
    
    return NextResponse.json(allRoutes);
  } catch (error) {
    console.error('Error getting static routes:', error);
    return NextResponse.json(
      { error: 'Failed to get static routes' },
      { status: 500 }
    );
  }
}
