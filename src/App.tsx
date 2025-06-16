import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, ChevronDown, Star, MapPin, Truck, Shield, Eye, MessageSquare } from 'lucide-react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import FlagIcon from './components/FlagIcon';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';
import MessagesPage from './pages/MessagesPage';
import { AppProvider, useApp } from './context/AppContext';

type CurrentPage = 'home' | 'products' | 'product-detail' | 'cart' | 'wishlist' | 'profile' | 'messages';

interface HeaderProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  selectedShipping: string;
  setSelectedShipping: (shipping: string) => void;
  showLanguageDropdown: boolean;
  setShowLanguageDropdown: (show: boolean) => void;
  showShippingDropdown: boolean;
  setShowShippingDropdown: (show: boolean) => void;
  categories: string[];
  languageOptions: string[];
  shippingOptions: { country: string; flag: string }[];
  onHomeClick: () => void;
  onSearchClick: () => void;
  onCartClick: () => void;
  onWishlistClick: () => void;
  onProfileClick: () => void;
  onMessagesClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedLanguage,
  setSelectedLanguage,
  selectedShipping,
  setSelectedShipping,
  showLanguageDropdown,
  setShowLanguageDropdown,
  showShippingDropdown,
  setShowShippingDropdown,
  categories,
  languageOptions,
  shippingOptions,
  onHomeClick,
  onSearchClick,
  onCartClick,
  onWishlistClick,
  onProfileClick,
  onMessagesClick,
}) => {
  const { state } = useApp();
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={onHomeClick}>
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
                  onClick={onSearchClick}
                  className="bg-blue-500 text-white px-6 py-2 rounded-r hover:bg-blue-600 transition-colors"
                >
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
              <button 
                onClick={onProfileClick}
                className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500"
                title="Profile"
              >
                <User className="w-5 h-5" />
              </button>
              <button 
                onClick={onMessagesClick}
                className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500 relative"
                title="Messages"
              >
                <MessageSquare className="w-5 h-5" />
                {/* Notification badge for unread messages */}
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>
              <button 
                onClick={onWishlistClick}
                className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500 relative"
                title="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {state.wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {state.wishlist.length}
                  </span>
                )}
              </button>
              <button 
                onClick={onCartClick}
                className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500 relative"
                title="My Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {state.cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {state.cart.length}
                  </span>
                )}
              </button>
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
  );
};

interface FooterProps {
  showCountryDropdown: boolean;
  setShowCountryDropdown: (show: boolean) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  countries: string[];
}

const Footer: React.FC<FooterProps> = ({
  showCountryDropdown,
  setShowCountryDropdown,
  selectedCountry,
  setSelectedCountry,
  countries,
}) => {
  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
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
  );
};

function AppContent() {
  const { state, dispatch } = useApp();
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState('All category');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English, USD');
  const [selectedShipping, setSelectedShipping] = useState('France');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showShippingDropdown, setShowShippingDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const [countries] = useState(['United States', 'France', 'Germany', 'United Kingdom', 'Italy', 'China']);

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
    { name: 'Smart watches', discount: '-25%', image: '/tech/8.jpg' },
    { name: 'Laptops', discount: '-15%', image: '/tech/7.jpg' },
    { name: 'GoPro cameras', discount: '-40%', image: '/tech/6.jpg' },
    { name: 'Headphones', discount: '-25%', image: '/tech/5.jpg' },
    { name: 'Canon cameras', discount: '-25%', image: '/tech/3.jpg' }
  ];

  const homeProducts = [
    { name: 'Soft chairs', price: 'From USD 19', image: '/interior/1.jpg' },
    { name: 'Sofa & chair', price: 'From USD 19', image: '/interior/2.jpg' },
    { name: 'Kitchen dishes', price: 'From USD 19', image: '/interior/3.jpg' },
    { name: 'Smart watches', price: 'From USD 19', image: '/tech/8.jpg' },
    { name: 'Kitchen mixer', price: 'From USD 100', image: '/interior/9.jpg' },
    { name: 'Blenders', price: 'From USD 39', image: '/interior/8.jpg' },
    { name: 'Home appliance', price: 'From USD 19', image: '/interior/6.jpg' },
    { name: 'Coffee maker', price: 'From USD 10', image: '/interior/7.jpg' }
  ];

  const electronicsProducts = [
    { name: 'Smart watches', price: 'From USD 19', image: '/tech/8.jpg' },
    { name: 'Cameras', price: 'From USD 89', image: '/tech/6.jpg' },
    { name: 'Headphones', price: 'From USD 10', image: '/tech/9.jpg' },
    { name: 'Smartphones', price: 'From USD 90', image: '/tech/4.jpg' },
    { name: 'Gaming set', price: 'From USD 35', image: '/tech/5.jpg' },
    { name: 'Laptops & PC', price: 'From USD 340', image: '/tech/7.jpg' },
    { name: 'Smartphones', price: 'From USD 19', image: '/tech/1.jpg' },
    { name: 'Electric kettle', price: 'From USD 240', image: '/tech/10.jpg' }
  ];

  const recommendedItems = [
    { name: 'T-shirts with multiple colors, for men', price: '$10.30', image: '/cloth/1.jpg' },
    { name: 'Jeans shorts for men blue color', price: '$10.30', image: '/cloth/2.jpg' },
    { name: 'Brown winter coat medium size', price: '$12.50', image: '/cloth/3.jpg' },
    { name: 'Jeans bag for travel for men', price: '$34.00', image: '/cloth/4.jpg' },
    { name: 'Leather wallet', price: '$99.00', image: '/cloth/5.jpg' },
    { name: 'Canon camera black, 100x zoom', price: '$9.99', image: '/tech/5.jpg' },
    { name: 'Headset for gaming with mic', price: '$8.99', image: '/tech/4.jpg' },
    { name: 'Smartwatch silver color modern', price: '$10.30', image: '/tech/6.jpg' },
    { name: 'Blue wallet for men, leather material', price: '$10.30', image: '/cloth/6.jpg' },
    { name: 'Jeans bag for travel for men', price: '$80.95', image: '/cloth/7.jpg' }
  ];

  const services = [
    {
      title: 'Source from Industry Hubs',
      image: '/interior/8.jpg',
      icon: Search
    },
    {
      title: 'Customize Your Products',
      image: '/interior/9.jpg',
      icon: Eye
    },
    {
      title: 'Fast, reliable shipping by ocean or air',
      image: '/interior/10.jpg',
      icon: Truck
    },
    {
      title: 'Product monitoring and inspection',
      image: '/tech/10.jpg',
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

  const handleNavigateToCart = () => {
    setCurrentPage('cart');
  };

  const handleNavigateToWishlist = () => {
    setCurrentPage('wishlist');
  };

  const handleNavigateToProfile = () => {
    setCurrentPage('profile');
  };

  const handleNavigateToMessages = () => {
    setCurrentPage('messages');
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  // Common header props
  const headerProps = {
    selectedCategory,
    setSelectedCategory,
    selectedLanguage,
    setSelectedLanguage,
    selectedShipping,
    setSelectedShipping,
    showLanguageDropdown,
    setShowLanguageDropdown,
    showShippingDropdown,
    setShowShippingDropdown,
    categories,
    languageOptions,
    shippingOptions,
    onHomeClick: handleBackToHome,
    onSearchClick: handleNavigateToProducts,
    onCartClick: handleNavigateToCart,
    onWishlistClick: handleNavigateToWishlist,
    onProfileClick: handleNavigateToProfile,
    onMessagesClick: handleNavigateToMessages,
  };

  // Common footer props
  const footerProps = {
    showCountryDropdown,
    setShowCountryDropdown,
    selectedCountry,
    setSelectedCountry,
    countries,
  };

  // Render different pages based on current page
  if (currentPage === 'cart') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header {...headerProps} />
        <CartPage onBackToHome={handleBackToHome} />
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

  if (currentPage === 'wishlist') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header {...headerProps} />
        <WishlistPage onBackToHome={handleBackToHome} onProductClick={handleProductClick} />
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

  if (currentPage === 'profile') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header {...headerProps} />
        <ProfilePage onBackToHome={handleBackToHome} />
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

  if (currentPage === 'messages') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header {...headerProps} />
        <MessagesPage onBackToHome={handleBackToHome} />
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

  if (currentPage === 'products') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header {...headerProps} />
        <ProductListPage onProductClick={handleProductClick} />
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
        <Header {...headerProps} />
        <ProductDetailPage productId={selectedProductId} onBackToList={handleBackToList} />
        <Footer {...footerProps} />
      </div>
    );
  }

  // Home page
  return (
    <div className="min-h-screen bg-gray-50">
      <Header {...headerProps} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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

          <div className="lg:col-span-3 space-y-8">
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

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 h-64">
                <div className="relative bg-gradient-to-br from-orange-100 to-orange-200 p-6 flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-20">
                    <img
                      src="/interior/1.jpg"
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
                      src="/interior/2.jpg"
                      alt="Featured product"
                      className="w-32 h-24 object-cover rounded opacity-80"
                    />
                  </div>
                </div>

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

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 h-64">
                <div className="relative bg-gradient-to-br from-blue-100 to-purple-200 p-6 flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-20">
                    <img
                      src="/tech/7.jpg"
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
                      src="/tech/8.jpg"
                      alt="Featured electronics"
                      className="w-32 h-24 object-cover rounded opacity-80"
                    />
                  </div>
                </div>

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

      <Footer {...footerProps} />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;