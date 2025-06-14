import React, { useState } from 'react';
import { Grid, List, ChevronDown, Filter, Facebook, Twitter, Linkedin, Instagram, Youtube, Heart, Star } from 'lucide-react';
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
}

const ProductListPage: React.FC<ProductListPageProps> = ({ onProductClick }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('Featured');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>(['Samsung', 'Apple', 'Pocco', 'Metallic', '4 star', '3 star']);
  const [email, setEmail] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['category', 'brands', 'features']);

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
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&crop=center',
      freeShipping: true,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
      category: 'smartphones',
      brand: 'gopro',
      features: ['plastic', '4star']
    },
    {
      id: '3',
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: 998.00,
      rating: 4.5,
      reviews: 154,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop&crop=center',
      freeShipping: true,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
      category: 'smartphones',
      brand: 'samsung',
      features: ['metallic', '5star']
    },
    {
      id: '4',
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: 998.00,
      originalPrice: 1128.00,
      rating: 4.5,
      reviews: 154,
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop&crop=center',
      freeShipping: true,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
      category: 'electronics',
      brand: 'canon',
      features: ['metallic', '4star']
    },
    {
      id: '5',
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: 998.00,
      originalPrice: 1128.00,
      rating: 4.5,
      reviews: 154,
      image: 'https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=300&h=300&fit=crop&crop=center',
      freeShipping: true,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
      category: 'electronics',
      brand: 'apple',
      features: ['metallic', '5star']
    },
    {
      id: '6',
      name: 'GoPro HERO6 4K Action Camera - Black',
      price: 998.00,
      rating: 4.5,
      reviews: 154,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop&crop=center',
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
    { id: 'samsung', label: 'Samsung', checked: true },
    { id: 'apple', label: 'Apple', checked: true },
    { id: 'huawei', label: 'Huawei', checked: false },
    { id: 'pocco', label: 'Pocco', checked: true },
    { id: 'lenovo', label: 'Lenovo', checked: false }
  ];

  const features = [
    { id: 'metallic', label: 'Metallic', checked: true },
    { id: 'plastic-cover', label: 'Plastic cover', checked: false },
    { id: '8gb-ram', label: '8GB Ram', checked: false },
    { id: 'super-power', label: 'Super power', checked: false },
    { id: 'large-memory', label: 'Large Memory', checked: false }
  ];

  const ratings = [
    { id: '4star', label: '4 star', checked: true },
    { id: '3star', label: '3 star', checked: true },
    { id: '2star', label: '2 star', checked: false },
    { id: '1star', label: '1 star', checked: false }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200">
   
      </div>

      {/* Breadcrumb */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded border border-gray-200">
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
                          checked={brand.checked}
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
                          checked={feature.checked}
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
                          checked={rating.checked}
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
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header with filters */}
            <div className="bg-white rounded border border-gray-200 p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-700">
                  12,911 items in <span className="font-medium">Mobile accessory</span>
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
              <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
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
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    onProductClick={onProductClick}
                  />
                ))}
              </div>
            )}

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

      {/* Newsletter Subscription Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe on our newsletter</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold text-blue-500">Brand</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Best information about the company gies here but now lorem ipsum is
              </p>
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
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li><a href="#" className="hover:text-blue-600">Login</a></li>
                <li><a href="#" className="hover:text-blue-600">Register</a></li>
                <li><a href="#" className="hover:text-blue-600">Settings</a></li>
                <li><a href="#" className="hover:text-blue-600">My Orders</a></li>
              </ul>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Get app</h4>
                <div className="space-y-2">
                  <a href="#" className="block">
                    <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm">
                      <span>📱</span>
                      <div>
                        <div className="text-xs">Download on the</div>
                        <div className="font-semibold">App Store</div>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="block">
                    <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm">
                      <span>▶️</span>
                      <div>
                        <div className="text-xs">Get it on</div>
                        <div className="font-semibold">Google Play</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600">
              © 2023 Ecommerce.
            </div>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-sm text-gray-600">🇺🇸 English</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductListPage;