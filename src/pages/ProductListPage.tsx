import React, { useState } from 'react';
import { Grid, List, ChevronDown, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  freeShipping?: boolean;
  description?: string;
  category: string;
  brand: string;
  features: string[];
}

interface ProductListPageProps {
  onProductClick: (productId: string) => void;
}

const ProductListPage: React.FC<ProductListPageProps> = ({ onProductClick }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(true);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Array<{sectionId: string, optionId: string, label: string}>>([]);

  const products: Product[] = [
    {
      id: '1',
      name: 'Canon Camera EOS 2000, Black 10x zoom',
      price: 998.00,
      originalPrice: 1128.00,
      rating: 4.5,
      reviews: 154,
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop&crop=center',
      freeShipping: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      category: 'electronics',
      brand: 'canon',
      features: ['metallic', '4star']
    },
    {
      id: '2',
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: 998.00,
      rating: 4.5,
      reviews: 154,
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop&crop=center',
      freeShipping: true,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      category: 'electronics',
      brand: 'gopro',
      features: ['plastic', '4star']
    },
    {
      id: '3',
      name: 'Apple iPhone 12 Pro Max - Blue',
      price: 999.50,
      originalPrice: 1128.00,
      rating: 4.8,
      reviews: 324,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&crop=center',
      freeShipping: true,
      description: 'Latest iPhone with advanced camera system and A14 Bionic chip',
      category: 'smartphones',
      brand: 'apple',
      features: ['metallic', '5star']
    },
    {
      id: '4',
      name: 'Samsung Galaxy S21 Ultra',
      price: 899.50,
      rating: 4.6,
      reviews: 287,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop&crop=center',
      freeShipping: true,
      description: 'Premium Android smartphone with S Pen support',
      category: 'smartphones',
      brand: 'samsung',
      features: ['metallic', '4star']
    },
    {
      id: '5',
      name: 'MacBook Pro 16-inch',
      price: 2399.00,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop&crop=center',
      freeShipping: true,
      description: 'Professional laptop with M1 Pro chip',
      category: 'electronics',
      brand: 'apple',
      features: ['metallic', '5star']
    },
    {
      id: '6',
      name: 'Apple Watch Series 7',
      price: 399.00,
      originalPrice: 449.00,
      rating: 4.7,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=300&h=300&fit=crop&crop=center',
      freeShipping: true,
      description: 'Advanced smartwatch with health monitoring',
      category: 'electronics',
      brand: 'apple',
      features: ['metallic', '4star']
    }
  ];

  const filterSections = [
    {
      id: 'category',
      title: 'Category',
      type: 'checkbox' as const,
      options: [
        { id: 'mobile-accessory', label: 'Mobile accessory', count: 12 },
        { id: 'electronics', label: 'Electronics', count: 8 },
        { id: 'smartphones', label: 'Smartphones', count: 15 },
        { id: 'modern-tech', label: 'Modern tech', count: 6 }
      ]
    },
    {
      id: 'brands',
      title: 'Brands',
      type: 'checkbox' as const,
      options: [
        { id: 'samsung', label: 'Samsung', count: 5 },
        { id: 'apple', label: 'Apple', count: 8 },
        { id: 'huawei', label: 'Huawei', count: 3 },
        { id: 'pocco', label: 'Pocco', count: 2 },
        { id: 'lenovo', label: 'Lenovo', count: 4 }
      ]
    },
    {
      id: 'features',
      title: 'Features',
      type: 'checkbox' as const,
      options: [
        { id: 'metallic', label: 'Metallic', count: 10 },
        { id: 'plastic-cover', label: 'Plastic cover', count: 6 },
        { id: '8gb-ram', label: '8GB Ram', count: 4 },
        { id: 'super-power', label: 'Super power', count: 3 },
        { id: 'large-memory', label: 'Large Memory', count: 7 }
      ]
    },
    {
      id: 'price',
      title: 'Price range',
      type: 'range' as const,
      options: []
    },
    {
      id: 'condition',
      title: 'Condition',
      type: 'radio' as const,
      options: [
        { id: 'any', label: 'Any' },
        { id: 'refurbished', label: 'Refurbished' },
        { id: 'brand-new', label: 'Brand new' },
        { id: 'old-items', label: 'Old items' }
      ]
    },
    {
      id: 'ratings',
      title: 'Ratings',
      type: 'checkbox' as const,
      options: [
        { id: '5star', label: '★★★★★' },
        { id: '4star', label: '★★★★☆' },
        { id: '3star', label: '★★★☆☆' },
        { id: '2star', label: '★★☆☆☆' }
      ]
    }
  ];

  const handleFilterChange = (sectionId: string, optionId: string, checked: boolean) => {
    if (checked) {
      const section = filterSections.find(s => s.id === sectionId);
      const option = section?.options.find(o => o.id === optionId);
      if (option) {
        setActiveFilters(prev => [...prev, { sectionId, optionId, label: option.label }]);
      }
    } else {
      setActiveFilters(prev => prev.filter(f => !(f.sectionId === sectionId && f.optionId === optionId)));
    }
  };

  const handleClearAllFilters = () => {
    setActiveFilters([]);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    // Handle price range filtering
    console.log('Price range:', min, max);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600">Home</a>
            <span className="mx-2">›</span>
            <a href="#" className="hover:text-blue-600">Clothings</a>
            <span className="mx-2">›</span>
            <a href="#" className="hover:text-blue-600">Men's wear</a>
            <span className="mx-2">›</span>
            <span className="text-gray-900">Summer clothing</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          {showFilters && (
            <div className="w-64 flex-shrink-0">
              <ProductFilters
                filters={filterSections}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearAllFilters={handleClearAllFilters}
                onPriceRangeChange={handlePriceRangeChange}
              />
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h1 className="text-lg font-medium text-gray-900">
                  12,911 items in <span className="font-semibold">Mobile accessory</span>
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Verified only</span>
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <div className="flex border border-gray-300 rounded">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'space-y-4'
            }>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                  onProductClick={onProductClick}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Show</span>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">‹</button>
                <button className="px-3 py-2 text-sm bg-blue-500 text-white rounded">1</button>
                <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">2</button>
                <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">3</button>
                <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">›</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;