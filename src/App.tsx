import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, ChevronDown, Star, MapPin, Truck, Shield, Eye, MessageSquare } from 'lucide-react';
import FlagIcon from './components/FlagIcon';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

type CurrentPage = 'home' | 'products' | 'product-detail';

function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState('All category');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English, USD');
  const [selectedShipping, setSelectedShipping] = useState('France');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showShippingDropdown, setShowShippingDropdown] = useState(false);

  const categories = [
    'All category',
    'Automobiles',
    'Clothes and wear',
    'Home interiors',
    'Computer and tech',
    'Tools, equipments',
    'Sports and outdoor',
    'Animal and pets',
    'Machinery tools',
    'More category'
  ];

  const languageOptions = [
    'English, USD',
    'Español, EUR',
    'Français, EUR',
    'Deutsch, EUR',
    '中文, CNY'
  ];

  const shippingOptions = [
    { country: 'France', flag: 'France' },
    { country: 'United States', flag: 'United States' },
    { country: 'Germany', flag: 'Germany' },
    { country: 'United Kingdom', flag: 'United Kingdom' },
    { country: 'Italy', flag: 'Italy' },
    { country: 'China', flag: 'China' }
  ];

  const deals = [
    { name: 'Smart watches', discount: '-25%', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120&h=120&fit=crop&crop=center' },
    { name: 'Laptops', discount: '-15%', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=120&h=120&fit=crop&crop=center' },
    { name: 'GoPro cameras', discount: '-40%', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=120&h=120&fit=crop&crop=center' },
    { name: 'Headphones', discount: '-25%', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&h=120&fit=crop&crop=center' },
    { name: 'Canon cameras', discount: '-25%', image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=120&h=120&fit=crop&crop=center' }
  ];

  const homeProducts = [
    { name: 'Soft chairs', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=150&fit=crop&crop=center' },
    { name: 'Sofa & chair', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&h=150&fit=crop&crop=center' },
    { name: 'Kitchen dishes', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=150&h=150&fit=crop&crop=center' },
    { name: 'Smart watches', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop&crop=center' },
    { name: 'Kitchen mixer', price: 'From USD 100', image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=150&h=150&fit=crop&crop=center' },
    { name: 'Blenders', price: 'From USD 39', image: 'https://images.unsplash.com/photo-1585515656643-808d6b69a52d?w=150&h=150&fit=crop&crop=center' },
    { name: 'Home appliance', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop&crop=center' },
    { name: 'Coffee maker', price: 'From USD 10', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=150&h=150&fit=crop&crop=center' }
  ];

  const electronicsProducts = [
    { name: 'Smart watches', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop&crop=center' },
    { name: 'Cameras', price: 'From USD 89', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=150&h=150&fit=crop&crop=center' },
    { name: 'Headphones', price: 'From USD 10', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop&crop=center' },
    { name: 'Smart watches', price: 'From USD 90', image: 'https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=150&h=150&fit=crop&crop=center' },
    { name: 'Gaming set', price: 'From USD 35', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=150&h=150&fit=crop&crop=center' },
    { name: 'Laptops & PC', price: 'From USD 340', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150&h=150&fit=crop&crop=center' },
    { name: 'Smartphones', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&h=150&fit=crop&crop=center' },
    { name: 'Electric kettle', price: 'From USD 240', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=150&h=150&fit=crop&crop=center' }
  ];

  const recommendedItems = [
    { name: 'T-shirts with multiple colors, for men', price: '$10.30', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop&crop=center' },
    { name: 'Jeans shorts for men blue color', price: '$10.30', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=150&h=150&fit=crop&crop=center' },
    { name: 'Brown winter coat medium size', price: '$12.50', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=150&h=150&fit=crop&crop=center' },
    { name: 'Jeans bag for travel for men', price: '$34.00', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop&crop=center' },
    { name: 'Leather wallet', price: '$99.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=150&h=150&fit=crop&crop=center' },
    { name: 'Canon camera black, 100x zoom', price: '$9.99', image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=150&h=150&fit=crop&crop=center' },
    { name: 'Headset for gaming with mic', price: '$8.99', image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=150&h=150&fit=crop&crop=center' },
    { name: 'Smartwatch silver color modern', price: '$10.30', image: 'https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=150&h=150&fit=crop&crop=center' },
    { name: 'Blue wallet for men, leather material', price: '$10.30', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=150&h=150&fit=crop&crop=center' },
    { name: 'Jeans bag for travel for men', price: '$80.95', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150&h=150&fit=crop&crop=center' }
  ];

  const services = [
    { 
      title: 'Source from Industry Hubs', 
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop&crop=center',
      icon: Search
    },
    { 
      title: 'Customize Your Products', 
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop&crop=center',
      icon: Eye
    },
    { 
      title: 'Fast, reliable shipping by ocean or air', 
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center',
      icon: Truck
    },
    { 
      title: 'Product monitoring and inspection', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center',
      icon: Shield
    }
  ];

  const suppliers = [
    { country: 'United Arab Emirates', flag: '🇦🇪', name: 'shopname.ae' },
    { country: 'Australia', flag: '🇦🇺', name: 'shopname.au' },
    { country: 'China', flag: '🇨🇳', name: 'shopname.cn' },
    { country: 'Germany', flag: '🇩🇪', name: 'shopname.de' },
    { country: 'Denmark', flag: '🇩🇰', name: 'shopname.dk' },
    { country: 'France', flag: '🇫🇷', name: 'shopname.fr' },
    { country: 'United Kingdom', flag: '🇬🇧', name: 'shopname.uk' },
    { country: 'Italy', flag: '🇮🇹', name: 'shopname.it' },
    { country: 'Russia', flag: '🇷🇺', name: 'shopname.ru' },
    { country: 'United States', flag: '🇺🇸', name: 'shopname.us' }
  ];

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  const handleBackToList = () => {
    setCurrentPage('products');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleNavigateToProducts = () => {
    setCurrentPage('products');
  };

  // Render different pages based on current page
  if (currentPage === 'products') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={handleBackToHome}>
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <span className="text-xl font-bold text-blue-500">Brand</span>
                </div>
                
                <div className="hidden md:flex items-center space-x-4">
                  <div className="relative">
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-l px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-80 px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-r hover:bg-blue-600 transition-colors">
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
                  <div className="relative">
                    <button
                      onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                      className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer"
                    >
                      <span>{selectedLanguage}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {showLanguageDropdown && (
                      <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[140px]">
                        {languageOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() => {
                              setSelectedLanguage(option);
                              setShowLanguageDropdown(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <button
                      onClick={() => setShowShippingDropdown(!showShippingDropdown)}
                      className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer"
                    >
                      <span>Ship to</span>
                      <FlagIcon country={selectedShipping} className="w-5 h-4 rounded" />
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {showShippingDropdown && (
                      <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]">
                        {shippingOptions.map((option) => (
                          <button
                            key={option.country}
                            onClick={() => {
                              setSelectedShipping(option.country);
                              setShowShippingDropdown(false);
                            }}
                            className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                          >
                            <FlagIcon country={option.flag} className="w-5 h-4 rounded" />
                            <span>{option.country}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                  <MessageSquare className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                  <Heart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                  <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-8 h-12 text-sm">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
                  <Menu className="w-4 h-4" />
                  <span>All category</span>
                </button>
                <a href="#" className="text-gray-700 hover:text-blue-500">Hot offers</a>
                <a href="#" className="text-gray-700 hover:text-blue-500">Gift boxes</a>
                <a href="#" className="text-gray-700 hover:text-blue-500">Projects</a>
                <a href="#" className="text-gray-700 hover:text-blue-500">Menu item</a>
                <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 cursor-pointer">
                  <span>Help</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <ProductListPage onProductClick={handleProductClick} />

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <span className="text-xl font-bold text-blue-500">Brand</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Best information about the company gies here but now lorem ipsum is
                </p>
              </div>
            </div>
          </div>
        </footer>

        {(showLanguageDropdown || showShippingDropdown) && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => {
              setShowLanguageDropdown(false);
              setShowShippingDropdown(false);
            }}
          />
        )}
      </div>
    );
  }

  if (currentPage === 'product-detail') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={handleBackToHome}>
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <span className="text-xl font-bold text-blue-500">Brand</span>
                </div>
                
                <div className="hidden md:flex items-center space-x-4">
                  <div className="relative">
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-l px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-80 px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-r hover:bg-blue-600 transition-colors">
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
                  <div className="relative">
                    <button
                      onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                      className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer"
                    >
                      <span>{selectedLanguage}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {showLanguageDropdown && (
                      <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[140px]">
                        {languageOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() => {
                              setSelectedLanguage(option);
                              setShowLanguageDropdown(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <button
                      onClick={() => setShowShippingDropdown(!showShippingDropdown)}
                      className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer"
                    >
                      <span>Ship to</span>
                      <FlagIcon country={selectedShipping} className="w-5 h-4 rounded" />
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {showShippingDropdown && (
                      <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]">
                        {shippingOptions.map((option) => (
                          <button
                            key={option.country}
                            onClick={() => {
                              setSelectedShipping(option.country);
                              setShowShippingDropdown(false);
                            }}
                            className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                          >
                            <FlagIcon country={option.flag} className="w-5 h-4 rounded" />
                            <span>{option.country}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                  <MessageSquare className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                  <Heart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                  <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-8 h-12 text-sm">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
                  <Menu className="w-4 h-4" />
                  <span>All category</span>
                </button>
                <a href="#" className="text-gray-700 hover:text-blue-500">Hot offers</a>
                <a href="#" className="text-gray-700 hover:text-blue-500">Gift boxes</a>
                <a href="#" className="text-gray-700 hover:text-blue-500">Projects</a>
                <a href="#" className="text-gray-700 hover:text-blue-500">Menu item</a>
                <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 cursor-pointer">
                  <span>Help</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <ProductDetailPage productId={selectedProductId} onBackToList={handleBackToList} />

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <span className="text-xl font-bold text-blue-500">Brand</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Best information about the company gies here but now lorem ipsum is
                </p>
              </div>
            </div>
          </div>
        </footer>

        {(showLanguageDropdown || showShippingDropdown) && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => {
              setShowLanguageDropdown(false);
              setShowShippingDropdown(false);
            }}
          />
        )}
      </div>
    );
  }

  // Home page (original content)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold text-blue-500">Brand</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-l px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-80 px-4 py-2 border-t border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button 
                    onClick={handleNavigateToProducts}
                    className="bg-blue-500 text-white px-6 py-2 rounded-r hover:bg-blue-600 transition-colors"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
                {/* Language/Currency Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer"
                  >
                    <span>{selectedLanguage}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {showLanguageDropdown && (
                    <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[140px]">
                      {languageOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSelectedLanguage(option);
                            setShowLanguageDropdown(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Shipping Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowShippingDropdown(!showShippingDropdown)}
                    className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer"
                  >
                    <span>Ship to</span>
                    <FlagIcon country={selectedShipping} className="w-5 h-4 rounded" />
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {showShippingDropdown && (
                    <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]">
                      {shippingOptions.map((option) => (
                        <button
                          key={option.country}
                          onClick={() => {
                            setSelectedShipping(option.country);
                            setShowShippingDropdown(false);
                          }}
                          className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                        >
                          <FlagIcon country={option.flag} className="w-5 h-4 rounded" />
                          <span>{option.country}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                <MessageSquare className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                <Heart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-8 h-12 text-sm">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500">
                <Menu className="w-4 h-4" />
                <span>All category</span>
              </button>
              <a href="#" className="text-gray-700 hover:text-blue-500">Hot offers</a>
              <a href="#" className="text-gray-700 hover:text-blue-500">Gift boxes</a>
              <a href="#" className="text-gray-700 hover:text-blue-500">Projects</a>
              <a href="#" className="text-gray-700 hover:text-blue-500">Menu item</a>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 cursor-pointer">
                <span>Help</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category}>
                    <button 
                      onClick={handleNavigateToProducts}
                      className="text-gray-600 hover:text-blue-500 text-sm text-left w-full"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-gradient-to-r from-emerald-200 to-teal-400 rounded-lg p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-2 text-black">Latest trending</h2>
                  <h3 className="text-xl mb-4 text-black">Electronic items</h3>
                  <button 
                    onClick={handleNavigateToProducts}
                    className="bg-white text-black text-teal-500 px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
                  >
                    Learn more
                  </button>
                </div>
                <div className="absolute right-0 top-0 w-90 h-full">
                  <img src="/headphone.png" alt="Electronics" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="w-6 h-6 text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Hi, user</p>
                  <p className="text-sm font-medium mb-3">let's get started</p>
                  <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors text-sm">
                    Join now
                  </button>
                  <button className="w-full text-blue-500 py-2 text-sm hover:underline">
                    Log in
                  </button>
                </div>

                <div className="bg-orange-500 text-white rounded-lg p-4">
                  <p className="text-sm font-medium">Get US $10 off</p>
                  <p className="text-xs opacity-90">with a new supplier</p>
                </div>

                <div className="bg-teal-500 text-white rounded-lg p-4">
                  <p className="text-sm font-medium">Send quotes with</p>
                  <p className="text-xs opacity-90">supplier preferences</p>
                </div>
              </div>
            </div>

            {/* Deals and Offers - Single Box */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Deals and offers</h3>
                <div className="flex space-x-2">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm">04</span>
                  <span className="bg-gray-800 text-white px-3 py-1 rounded text-sm">13</span>
                  <span className="bg-gray-800 text-white px-3 py-1 rounded text-sm">34</span>
                  <span className="bg-gray-800 text-white px-3 py-1 rounded text-sm">56</span>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {deals.map((deal, index) => (
                  <div key={index} className="text-center group cursor-pointer" onClick={handleNavigateToProducts}>
                    <div className="relative mb-3">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto overflow-hidden">
                        <img 
                          src={deal.image} 
                          alt={deal.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        {deal.discount}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 group-hover:text-blue-500">{deal.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Home and Outdoor - New Design */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 h-64">
                {/* Left side with background image and text */}
                <div className="relative bg-gradient-to-br from-orange-100 to-orange-200 p-6 flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center" 
                      alt="Home and outdoor background"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Home and outdoor</h3>
                    <button 
                      onClick={handleNavigateToProducts}
                      className="bg-white text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      Source now
                    </button>
                  </div>
                  <div className="relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=150&fit=crop&crop=center" 
                      alt="Featured product"
                      className="w-32 h-24 object-cover rounded opacity-80"
                    />
                  </div>
                </div>

                {/* Right side with 8 product boxes */}
                <div className="lg:col-span-2 p-4">
                  <div className="grid grid-cols-4 gap-3 h-full">
                    {homeProducts.map((product, index) => (
                      <div key={index} className="bg-white border border-gray-100 rounded-lg p-2 hover:shadow-md transition-shadow group cursor-pointer" onClick={handleNavigateToProducts}>
                        <div className="w-full h-16 bg-gray-50 rounded mb-2 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <p className="text-xs text-gray-600 mb-1 line-clamp-2 group-hover:text-blue-500">{product.name}</p>
                        <p className="text-xs text-gray-500 font-medium">{product.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Consumer Electronics and Gadgets - New Design */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 h-64">
                {/* Left side with background image and text */}
                <div className="relative bg-gradient-to-br from-blue-100 to-purple-200 p-6 flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop&crop=center" 
                      alt="Electronics background"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Consumer electronics and gadgets</h3>
                    <button 
                      onClick={handleNavigateToProducts}
                      className="bg-white text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      Source now
                    </button>
                  </div>
                  <div className="relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=200&h=150&fit=crop&crop=center" 
                      alt="Featured electronics"
                      className="w-32 h-24 object-cover rounded opacity-80"
                    />
                  </div>
                </div>

                {/* Right side with 8 product boxes */}
                <div className="lg:col-span-2 p-4">
                  <div className="grid grid-cols-4 gap-3 h-full">
                    {electronicsProducts.map((product, index) => (
                      <div key={index} className="bg-white border border-gray-100 rounded-lg p-2 hover:shadow-md transition-shadow group cursor-pointer" onClick={handleNavigateToProducts}>
                        <div className="w-full h-16 bg-gray-50 rounded mb-2 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <p className="text-xs text-gray-600 mb-1 line-clamp-2 group-hover:text-blue-500">{product.name}</p>
                        <p className="text-xs text-gray-500 font-medium">{product.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Request */}
            <div className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">An easy way to send requests to all suppliers</h3>
                  <p className="text-blue-100 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-gray-900">
                  <h4 className="font-semibold mb-4">Send quote to suppliers</h4>
                  <input
                    type="text"
                    placeholder="What item you need?"
                    className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Type more details"
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Quantity"
                      className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Pcs</option>
                    </select>
                  </div>
                  <button className="w-full bg-blue-500 text-white py-3 rounded font-medium hover:bg-blue-600 transition-colors">
                    Send inquiry
                  </button>
                </div>
              </div>
            </div>

            {/* Recommended Items */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6">Recommended items</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {recommendedItems.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow group cursor-pointer" onClick={handleNavigateToProducts}>
                    <div className="w-full h-32 bg-gray-100 rounded mb-3 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-900 mb-2">{item.price}</p>
                    <p className="text-xs text-gray-600 line-clamp-2 group-hover:text-blue-500">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Services - Updated Design */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6">Our extra services</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer">
                      <div className="h-32 bg-gray-200 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
                        <div className="flex justify-end">
                          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium leading-tight">{service.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Suppliers by Region */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6">Suppliers by region</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {suppliers.map((supplier, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <FlagIcon country={supplier.country} className="w-8 h-6 rounded" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{supplier.country}</p>
                      <p className="text-xs text-gray-500">{supplier.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscribe on our newsletter</h3>
          <p className="text-gray-600 mb-8">Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="flex justify-center">
            <div className="flex max-w-md w-full">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-8 py-3 rounded-r hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold text-blue-500">Brand</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Best information about the company gies here but now lorem ipsum is
              </p>
              <div className="flex space-x-3">
                {/* Facebook */}
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                {/* Twitter/X */}
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                {/* LinkedIn */}
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                {/* Instagram */}
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.896 1.387 2.047 1.387 3.344s-.49 2.448-1.297 3.323c-.896.897-2.047 1.387-3.344 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.896-1.387-2.047-1.387-3.344s.49-2.448 1.297-3.323c.896-.897 2.047-1.387 3.344-1.387s2.448.49 3.323 1.297c.897.896 1.387 2.047 1.387 3.344s-.49 2.448-1.297 3.323c-.896.897-2.047 1.387-3.344 1.387z"/>
                  </svg>
                </div>
                {/* YouTube */}
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Find store</a></li>
                <li><a href="#" className="hover:text-blue-500">Categories</a></li>
                <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Partnership</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Find store</a></li>
                <li><a href="#" className="hover:text-blue-500">Categories</a></li>
                <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Information</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-500">Money Refund</a></li>
                <li><a href="#" className="hover:text-blue-500">Shipping</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">For users</h4>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li><a href="#" className="hover:text-blue-500">Login</a></li>
                <li><a href="#" className="hover:text-blue-500">Register</a></li>
                <li><a href="#" className="hover:text-blue-500">Settings</a></li>
                <li><a href="#" className="hover:text-blue-500">My Orders</a></li>
              </ul>
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
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 flex justify-between items-center text-sm text-gray-600">
            <p>© 2023 Ecommerce.</p>
            <div className="flex items-center space-x-2">
              <span>🇺🇸 English</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </footer>

      {/* Click outside to close dropdowns */}
      {(showLanguageDropdown || showShippingDropdown) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowLanguageDropdown(false);
            setShowShippingDropdown(false);
          }}
        />
      )}
    </div>
  );
}

export default App;