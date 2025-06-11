import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, ChevronDown, Star, MapPin, Truck, Shield, Eye, MessageSquare } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All category');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const deals = [
    { name: 'Smart watches', discount: '-25%', image: '/api/placeholder/120/120' },
    { name: 'Laptops', discount: '-15%', image: '/api/placeholder/120/120' },
    { name: 'GoPro cameras', discount: '-40%', image: '/api/placeholder/120/120' },
    { name: 'Headphones', discount: '-25%', image: '/api/placeholder/120/120' },
    { name: 'Canon cameras', discount: '-25%', image: '/api/placeholder/120/120' }
  ];

  const homeProducts = [
    { name: 'Soft chairs', price: 'USD 19', image: '/api/placeholder/100/100' },
    { name: 'Sofa & chair', price: 'USD 25', image: '/api/placeholder/100/100' },
    { name: 'Kitchen dishes', price: 'USD 4.50', image: '/api/placeholder/100/100' },
    { name: 'Smart watches', price: 'USD 19', image: '/api/placeholder/100/100' },
    { name: 'Kitchen mixer', price: 'USD 100', image: '/api/placeholder/100/100' },
    { name: 'Blenders', price: 'USD 39', image: '/api/placeholder/100/100' },
    { name: 'Home appliance', price: 'USD 10', image: '/api/placeholder/100/100' },
    { name: 'Coffee maker', price: 'USD 10', image: '/api/placeholder/100/100' }
  ];

  const electronicsProducts = [
    { name: 'Smart watches', price: 'USD 19', image: '/api/placeholder/100/100' },
    { name: 'Cameras', price: 'USD 89', image: '/api/placeholder/100/100' },
    { name: 'Headphones', price: 'USD 10', image: '/api/placeholder/100/100' },
    { name: 'Smart watches', price: 'USD 90', image: '/api/placeholder/100/100' },
    { name: 'Gaming set', price: 'USD 35', image: '/api/placeholder/100/100' },
    { name: 'Laptops & PC', price: 'USD 340', image: '/api/placeholder/100/100' },
    { name: 'Smartphones', price: 'USD 19', image: '/api/placeholder/100/100' },
    { name: 'Electric kettle', price: 'USD 240', image: '/api/placeholder/100/100' }
  ];

  const recommendedItems = [
    { name: 'T-shirts with multiple colors, for men', price: '$10.30', image: '/api/placeholder/150/150' },
    { name: 'Jeans shorts for men blue color', price: '$10.30', image: '/api/placeholder/150/150' },
    { name: 'Brown winter coat medium size', price: '$12.50', image: '/api/placeholder/150/150' },
    { name: 'Jeans bag for travel for men', price: '$34.00', image: '/api/placeholder/150/150' },
    { name: 'Leather wallet', price: '$99.00', image: '/api/placeholder/150/150' },
    { name: 'Canon camera black, 100x zoom', price: '$9.99', image: '/api/placeholder/150/150' },
    { name: 'Headset for gaming with mic', price: '$8.99', image: '/api/placeholder/150/150' },
    { name: 'Smartwatch silver color modern', price: '$10.30', image: '/api/placeholder/150/150' },
    { name: 'Blue wallet for men, leather material', price: '$10.30', image: '/api/placeholder/150/150' },
    { name: 'Jeans bag for travel for men', price: '$80.95', image: '/api/placeholder/150/150' }
  ];

  const services = [
    { title: 'Source from Industry Hubs', image: '/api/placeholder/200/150' },
    { title: 'Customize Your Products', image: '/api/placeholder/200/150' },
    { title: 'Fast, reliable shipping by ocean or air', image: '/api/placeholder/200/150' },
    { title: 'Product monitoring and inspection', image: '/api/placeholder/200/150' }
  ];

  const suppliers = [
    { country: 'Arabic Emirates', flag: '🇦🇪', name: 'shopname.ae' },
    { country: 'Australia', flag: '🇦🇺', name: 'shopname.au' },
    { country: 'United States', flag: '🇺🇸', name: 'shopname.us' },
    { country: 'Russia', flag: '🇷🇺', name: 'shopname.ru' },
    { country: 'Italy', flag: '🇮🇹', name: 'shopname.it' },
    { country: 'Denmark', flag: '🇩🇰', name: 'shopname.dk' },
    { country: 'France', flag: '🇫🇷', name: 'shopname.fr' },
    { country: 'Arabic Emirates', flag: '🇦🇪', name: 'shopname.ae' },
    { country: 'China', flag: '🇨🇳', name: 'shopname.cn' },
    { country: 'Great Britain', flag: '🇬🇧', name: 'shopname.gb' }
  ];

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
                  <button className="bg-blue-500 text-white px-6 py-2 rounded-r hover:bg-blue-600 transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
                <span>English, USD</span>
                <span>Ship to 🇮🇳</span>
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
                    <a href="#" className="text-gray-600 hover:text-blue-500 text-sm">
                      {category}
                    </a>
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
                  <button className="bg-white text-black text-teal-500 px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
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

            {/* Deals and Offers */}
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
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="relative mb-3">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                        <div className="w-16 h-16 bg-gray-200 rounded"></div>
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

            {/* Home and Outdoor */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Home and outdoor</h3>
                  <button className="text-blue-500 text-sm hover:underline">Source now</button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {homeProducts.map((product, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded mb-2 mx-auto"></div>
                      <p className="text-xs text-gray-600 mb-1">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Consumer electronics and gadgets</h3>
                  <button className="text-blue-500 text-sm hover:underline">Source now</button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {electronicsProducts.map((product, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded mb-2 mx-auto"></div>
                      <p className="text-xs text-gray-600 mb-1">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.price}</p>
                    </div>
                  ))}
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
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="w-full h-32 bg-gray-100 rounded mb-3"></div>
                    <p className="text-sm font-medium text-gray-900 mb-2">{item.price}</p>
                    <p className="text-xs text-gray-600 line-clamp-2">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra Services */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6">Our extra services</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden group cursor-pointer">
                    <div className="h-32 bg-gray-200 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-300 rounded"></div>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                      <p className="text-white text-sm font-medium">{service.title}</p>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suppliers by Region */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-6">Suppliers by region</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {suppliers.map((supplier, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <span className="text-2xl">{supplier.flag}</span>
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
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
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
                  <div className="w-32 h-10 bg-black rounded flex items-center justify-center">
                    <span className="text-white text-xs">App Store</span>
                  </div>
                  <div className="w-32 h-10 bg-black rounded flex items-center justify-center">
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
    </div>
  );
}

export default App;