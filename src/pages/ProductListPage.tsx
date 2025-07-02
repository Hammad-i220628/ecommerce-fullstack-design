import React, { useState, useMemo, useEffect } from 'react';
import { Grid, List, ChevronDown, Filter, Facebook, Twitter, Linkedin, Instagram, Youtube, Heart, Star, Menu, X, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import FlagIcon from '../components/FlagIcon';

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
  initialSearchQuery?: string;
  onSearchQueryChange?: (query: string) => void;
}

const ProductListPage: React.FC<ProductListPageProps> = ({ 
  onProductClick, 
  initialSearchQuery = '',
  onSearchQueryChange 
}) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('Featured');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(['samsung', 'apple', 'pocco']);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['metallic', 'plastic-cover']);
  const [selectedRatings, setSelectedRatings] = useState<string[]>(['4star', '3star']);
  const [email, setEmail] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['category', 'brands', 'features']);
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Update search query when initialSearchQuery changes
  useEffect(() => {
    if (initialSearchQuery !== searchQuery) {
      setSearchQuery(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  // Notify parent when search query changes
  useEffect(() => {
    if (onSearchQueryChange) {
      onSearchQueryChange(searchQuery);
    }
  }, [searchQuery, onSearchQueryChange]);

  const allProducts: Product[] = [
    {
      id: '1',
      name: 'Gaming headphone with Mic - High Quality',
      price: 70.00,
      originalPrice: 1128.00,
      rating: 4.5,
      reviews: 154,
      image: '/tech/5.jpg',
      freeShipping: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      category: 'electronics',
      brand: 'pocco',
      features: ['metallic', '4star']
    },
    {
      id: '2',
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: 50.00,
      rating: 4.5,
      reviews: 154,
      image: '/tech/6.jpg',
      freeShipping: true,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
      category: 'smartphones',
      brand: 'pocco',
      features: ['plastic-cover', '4star']
    },
    {
      id: '3',
      name: 'Samsung Galaxy Smartphone - Latest Model',
      price: 99.00,
      rating: 4.5,
      reviews: 154,
      image: '/tech/3.jpg',
      freeShipping: true,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
      category: 'smartphones',
      brand: 'samsung',
      features: ['metallic', '4star']
    },
    {
      id: '4',
      name: 'iPhone 13 Pro Max - 256GB',
      price: 150.00,
      originalPrice: 1128.00,
      rating: 4.5,
      reviews: 154,
      image: '/tech/4.jpg',
      freeShipping: true,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
      category: 'electronics',
      brand: 'apple',
      features: ['metallic', '4star']
    },
    {
      id: '5',
      name: 'Apple Watch Series - Smart Fitness Tracker',
      price: 20.00,
      originalPrice: 1128.00,
      rating: 4.5,
      reviews: 154,
      image: '/tech/8.jpg',
      freeShipping: true,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
      category: 'electronics',
      brand: 'apple',
      features: ['metallic', '4star']
    },
    {
      id: '6',
      name: 'MacBook Pro - High Performance Laptop',
      price: 200.00,
      rating: 4.5,
      reviews: 154,
      image: '/tech/7.jpg',
      freeShipping: true,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
      category: 'electronics',
      brand: 'apple',
      features: ['metallic', '4star']
    }
  ];

  const categories = [
    { id: 'mobile-accessory', label: 'Mobile accessory', active: true },
    { id: 'electronics', label: 'Electronics' },
    { id: 'smartphones', label: 'Smartphones' },
    { id: 'modern-tech', label: 'Modern tech' }
  ];

  const brands = [
    { id: 'samsung', label: 'Samsung' },
    { id: 'apple', label: 'Apple' },
    { id: 'huawei', label: 'Huawei' },
    { id: 'pocco', label: 'Pocco' },
    { id: 'lenovo', label: 'Lenovo' },
    { id: 'canon', label: 'Canon' },
    { id: 'gopro', label: 'GoPro' }
  ];

  const features = [
    { id: 'metallic', label: 'Metallic' },
    { id: 'plastic-cover', label: 'Plastic cover' },
    { id: '8gb-ram', label: '8GB Ram' },
    { id: 'super-power', label: 'Super power' },
    { id: 'large-memory', label: 'Large Memory' }
  ];

  const ratings = [
    { id: '5star', label: '5 star' },
    { id: '4star', label: '4 star' },
    { id: '3star', label: '3 star' },
    { id: '2star', label: '2 star' },
    { id: '1star', label: '1 star' }
  ];

  const countries = [
    'United States',
    'United Kingdom', 
    'Germany',
    'France',
    'China',
    'Australia',
    'Pakistan'
  ];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Apply brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product =>
        selectedBrands.some(brand => brand.toLowerCase() === product.brand.toLowerCase())
      );
    }

    // Apply features filter
    if (selectedFeatures.length > 0) {
      filtered = filtered.filter(product =>
        selectedFeatures.some(selectedFeature =>
          product.features.some(productFeature =>
            productFeature.toLowerCase() === selectedFeature.toLowerCase()
          )
        )
      );
    }

    // Apply ratings filter
    if (selectedRatings.length > 0) {
      filtered = filtered.filter(product => {
        const productRating = Math.floor(product.rating);
        return selectedRatings.some(rating => {
          const ratingNumber = parseInt(rating.replace('star', ''));
          return productRating >= ratingNumber;
        });
      });
    }

    // Apply sorting
    const sorted = [...filtered];
    switch (sortBy) {
      case 'Price: Low to High':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'Highest Rated':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'Newest':
        // For demo purposes, sort by ID (assuming higher ID = newer)
        sorted.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return sorted;
  }, [allProducts, searchQuery, selectedBrands, selectedFeatures, selectedRatings, sortBy]);

  // Get active filters for display
  const activeFilters = useMemo(() => {
    const filters = [];
    if (searchQuery.trim()) {
      filters.push(`Search: "${searchQuery}"`);
    }
    selectedBrands.forEach(brand => {
      const brandLabel = brands.find(b => b.id === brand)?.label || brand;
      filters.push(brandLabel);
    });
    selectedFeatures.forEach(feature => {
      const featureLabel = features.find(f => f.id === feature)?.label || feature;
      filters.push(featureLabel);
    });
    selectedRatings.forEach(rating => {
      const ratingLabel = ratings.find(r => r.id === rating)?.label || rating;
      filters.push(ratingLabel);
    });
    return filters;
  }, [searchQuery, selectedBrands, selectedFeatures, selectedRatings]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleBrand = (brandId: string) => {
    setSelectedBrands(prev =>
      prev.includes(brandId)
        ? prev.filter(id => id !== brandId)
        : [...prev, brandId]
    );
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const toggleRating = (ratingId: string) => {
    setSelectedRatings(prev =>
      prev.includes(ratingId)
        ? prev.filter(id => id !== ratingId)
        : [...prev, ratingId]
    );
  };

  const removeFilter = (filter: string) => {
    if (filter.startsWith('Search:')) {
      setSearchQuery('');
    } else {
      // Check if it's a brand filter
      const brand = brands.find(b => b.label === filter);
      if (brand) {
        toggleBrand(brand.id);
        return;
      }
      
      // Check if it's a feature filter
      const feature = features.find(f => f.label === filter);
      if (feature) {
        toggleFeature(feature.id);
        return;
      }
      
      // Check if it's a rating filter
      const rating = ratings.find(r => r.label === filter);
      if (rating) {
        toggleRating(rating.id);
        return;
      }
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedBrands([]);
    setSelectedFeatures([]);
    setSelectedRatings([]);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  const FilterSidebar = () => (
    <div className="bg-white rounded border border-gray-200">
      {/* Search */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-gray-900 mb-3">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Category */}
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span>Category</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              expandedSections.includes('category') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.includes('category') && (
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className={`text-sm py-1 px-2 rounded cursor-pointer ${
                category.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`}>
                {category.label}
              </div>
            ))}
            <button className="text-sm text-blue-600 hover:text-blue-800 mt-2">See all</button>
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={() => toggleSection('brands')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span>Brands</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              expandedSections.includes('brands') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.includes('brands') && (
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand.id} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.id)}
                  onChange={() => toggleBrand(brand.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{brand.label}</span>
              </label>
            ))}
            <button className="text-sm text-blue-600 hover:text-blue-800 mt-2">See all</button>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={() => toggleSection('features')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span>Features</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              expandedSections.includes('features') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.includes('features') && (
          <div className="space-y-2">
            {features.map((feature) => (
              <label key={feature.id} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(feature.id)}
                  onChange={() => toggleFeature(feature.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{feature.label}</span>
              </label>
            ))}
            <button className="text-sm text-blue-600 hover:text-blue-800 mt-2">See all</button>
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span>Price range</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              expandedSections.includes('price') ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Condition */}
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={() => toggleSection('condition')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span>Condition</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              expandedSections.includes('condition') ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Ratings */}
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={() => toggleSection('ratings')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span>Ratings</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              expandedSections.includes('ratings') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.includes('ratings') && (
          <div className="space-y-2">
            {ratings.map((rating) => (
              <label key={rating.id} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating.id)}
                  onChange={() => toggleRating(rating.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{rating.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Manufacturer */}
      <div className="p-4">
        <button
          onClick={() => toggleSection('manufacturer')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          <span>Manufacturer</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              expandedSections.includes('manufacturer') ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex text-sm text-gray-500 overflow-x-auto">
            <a href="#" className="hover:text-blue-600 whitespace-nowrap">Home</a>
            <span className="mx-2">›</span>
            <a href="#" className="hover:text-blue-600 whitespace-nowrap">Clothings</a>
            <span className="mx-2">›</span>
            <a href="#" className="hover:text-blue-600 whitespace-nowrap">Men's wear</a>
            <span className="mx-2">›</span>
            <span className="text-gray-900 whitespace-nowrap">Summer clothing</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex gap-4 lg:gap-6">
          {/* Desktop Sidebar */}
          <div className="w-64 flex-shrink-0 hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Mobile Filter Overlay */}
          {showMobileFilters && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileFilters(false)} />
              <div className="fixed inset-y-0 left-0 w-80 bg-white overflow-y-auto">
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button onClick={() => setShowMobileFilters(false)}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="p-4">
                  <FilterSidebar />
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Header with filters */}
            <div className="bg-white rounded border border-gray-200 p-4 mb-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 space-y-4 lg:space-y-0">
                <div className="text-sm text-gray-700">
                  {filteredAndSortedProducts.length} items in <span className="font-medium">Mobile accessory</span>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={verifiedOnly}
                      onChange={(e) => setVerifiedOnly(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Verified only</span>
                  </label>
                  <div className="flex items-center space-x-2">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="Featured">Featured</option>
                      <option value="Price: Low to High">Price: Low to High</option>
                      <option value="Price: High to Low">Price: High to Low</option>
                      <option value="Highest Rated">Highest Rated</option>
                      <option value="Newest">Newest</option>
                    </select>
                    <div className="flex border border-gray-300 rounded">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-1.5 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                      >
                        <Grid className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-1.5 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => setShowMobileFilters(true)}
                      className="lg:hidden flex items-center space-x-1 px-3 py-1.5 border border-gray-300 rounded text-sm"
                    >
                      <Filter className="w-4 h-4" />
                      <span>Filters</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {activeFilters.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  {activeFilters.map((filter, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {filter}
                      <button
                        onClick={() => removeFilter(filter)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-blue-600 hover:text-blue-800 ml-2"
                  >
                    Clear all filter
                  </button>
                </div>
              )}
            </div>

            {/* Products */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    onProductClick={onProductClick}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    onProductClick={onProductClick}
                  />
                ))}
              </div>
            )}

            {/* No results message */}
            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria.</p>
                <button
                  onClick={clearAllFilters}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredAndSortedProducts.length > 0 && (
              <div className="flex flex-col sm:flex-row items-center justify-between mt-8 space-y-4 sm:space-y-0">
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
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <div className="bg-gray-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Subscribe on our newsletter</h2>
          <p className="text-gray-600 mb-6 lg:mb-8 max-w-2xl mx-auto">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto space-y-2 sm:space-y-0">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {/* Brand Section */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold text-blue-500">Brand</span>
              </div>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* About Section */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">About</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Find store</a></li>
                <li><a href="#" className="hover:text-blue-600">Categories</a></li>
                <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
              </ul>
            </div>

            {/* Partnership Section */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Partnership</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600">Find store</a></li>
                <li><a href="#" className="hover:text-blue-600">Categories</a></li>
                <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
              </ul>
            </div>

            {/* Information Section */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600">Money Refund</a></li>
                <li><a href="#" className="hover:text-blue-600">Shipping</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact us</a></li>
              </ul>
            </div>

            {/* For Users Section */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">For users</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Login</a></li>
                <li><a href="#" className="hover:text-blue-600">Register</a></li>
                <li><a href="#" className="hover:text-blue-600">Settings</a></li>
                <li><a href="#" className="hover:text-blue-600">My Orders</a></li>
              </ul>
            </div>

            {/* Get app Section */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Get app</h5>
              <div className="space-y-2">
                <div className="w-32 h-10 bg-black rounded flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-white text-xs">App Store</span>
                </div>
                <div className="w-32 h-10 bg-black rounded flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.833 12l1.865-1.865zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z"/>
                  </svg>
                  <span className="text-white text-xs">Google Play</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600">
              © 2023 Ecommerce.
            </div>
            <div className="relative mt-4 md:mt-0">
              <button
                onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FlagIcon country={selectedCountry} className="w-5 h-4" />
                <span className="text-sm text-gray-700">{selectedCountry}</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              
              {showCountryDropdown && (
                <div className="absolute bottom-full right-0 mb-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <div className="py-2">
                    {countries.map((country) => (
                      <button
                        key={country}
                        onClick={() => handleCountrySelect(country)}
                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <FlagIcon country={country} className="w-5 h-4" />
                        <span>{country}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductListPage;
