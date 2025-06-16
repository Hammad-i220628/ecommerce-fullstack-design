import React, { useState } from 'react';
import { Heart, Star, Shield, Truck, MapPin, MessageSquare, ChevronDown } from 'lucide-react';

interface ProductDetailPageProps {
  productId: string;
  onBackToList: () => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onBackToList }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: productId,
    name: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle',
    inStock: true,
    rating: 4.5,
    reviews: 32,
    sold: 154,
    prices: [
      { quantity: '50-100 pcs', price: 98.00 },
      { quantity: '100-200 pcs', price: 90.00 },
      { quantity: '200+ pcs', price: 78.00 }
    ],
    negotiable: true,
    specifications: {
      type: 'Classic shoes',
      material: 'Plastic material',
      design: 'Modern nice',
      customization: 'Customized logo and design custom packages',
      protection: 'Refund Policy',
      warranty: '2 years full warranty'
    },
    images: [
      '/cloth/1.jpg',
      '/cloth/2.jpg',
      '/cloth/3.jpg',
      '/cloth/4.jpg',
      '/cloth/5.jpg',
      '/cloth/6.jpg'
    ],
    supplier: {
      name: 'Guanjoi Trading LLC',
      location: 'Germany, Berlin',
      verified: true,
      worldwideShipping: true
    },
    features: [
      'Some great feature name here',
      'Lorem ipsum dolor sit amet, consectetur',
      'Duis aute irure dolor in reprehenderit',
      'Some great feature name here'
    ],
    relatedProducts: [
      {
        id: '1',
        name: 'Xiaomi Redmi 8 Original',
        price: '$32.00-$40.00',
        image: '/tech/8.jpg'
      },
      {
        id: '2',
        name: 'Apple Watch Series',
        price: '$32.00-$40.00',
        image: '/tech/1.jpg'
      },
      {
        id: '3',
        name: 'Gaming Headphones',
        price: '$32.00-$40.00',
        image: '/tech/4.jpg'
      },
      {
        id: '4',
        name: 'Jeans Shorts for Men',
        price: '$32.00-$40.00',
        image: '/cloth/2.jpg'
      },
      {
        id: '5',
        name: 'Winter Coat Brown',
        price: '$32.00-$40.00',
        image: '/cloth/3.jpg'
      },
      {
        id: '6',
        name: 'Leather Wallet',
        price: '$32.00-$40.00',
        image: '/cloth/5.jpg'
      }
    ],
    youMayLike: [
      {
        id: '1',
        name: 'Men Blazers Sets Elegant Formal',
        price: '$7.00 - $99.50',
        image: '/cloth/7.jpg'
      },
      {
        id: '2',
        name: 'Men Shirt Sleeve Polo Contrast',
        price: '$7.00 - $99.50',
        image: '/cloth/1.jpg'
      },
      {
        id: '3',
        name: 'Apple Watch Series Space Gray',
        price: '$7.00 - $99.50',
        image: '/tech/1.jpg'
      },
      {
        id: '4',
        name: 'Basketball Crew Socks Long Stuff',
        price: '$7.00 - $99.50',
        image: '/cloth/3.jpg'
      },
      {
        id: '5',
        name: 'New Summer Men\'s castrol T-Shirts',
        price: '$7.00 - $99.50',
        image: '/cloth/1.jpg'
      }
    ]
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <button onClick={onBackToList} className="hover:text-blue-600">Home</button>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6">
              <div className="mb-4">
                <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-full h-16 bg-gray-100 rounded overflow-hidden border-2 ${
                        selectedImage === index ? 'border-blue-500' : 'border-transparent'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  ✓ In stock
                </span>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-600">{product.rating}</span>
                <span className="text-sm text-gray-600">{product.reviews} reviews</span>
                <span className="text-sm text-gray-600">{product.sold} sold</span>
              </div>

              <div className="space-y-3 mb-6">
                {product.prices.map((price, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{price.quantity}</span>
                    <span className="text-xl font-bold text-gray-900">${price.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="text-gray-900">Negotiable</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="text-gray-900">{product.specifications.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Material:</span>
                  <span className="text-gray-900">{product.specifications.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Design:</span>
                  <span className="text-gray-900">{product.specifications.design}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Customization:</span>
                  <span className="text-gray-900 text-sm">{product.specifications.customization}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Protection:</span>
                  <span className="text-gray-900">{product.specifications.protection}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Warranty:</span>
                  <span className="text-gray-900">{product.specifications.warranty}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Supplier Info & Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Supplier</div>
                  <div className="text-sm text-gray-600">{product.supplier.name}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <img src="/flags/Property 1=DE.png" alt="Germany" className="w-5 h-4" />
                  <span className="text-sm text-gray-600">{product.supplier.location}</span>
                </div>
                {product.supplier.verified && (
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">Verified Seller</span>
                  </div>
                )}
                {product.supplier.worldwideShipping && (
                  <div className="flex items-center space-x-2">
                    <Truck className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600">Worldwide shipping</span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                  Send inquiry
                </button>
                <button className="w-full border border-blue-500 text-blue-500 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Seller's profile
                </button>
                <button className="flex items-center justify-center space-x-2 w-full text-gray-600 py-2 hover:text-blue-500">
                  <Heart className="w-4 h-4" />
                  <span>Save for later</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg mt-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['Description', 'Reviews', 'Shipping', 'About seller'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.toLowerCase()
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <table className="w-full text-sm">
                      <tbody className="space-y-2">
                        <tr>
                          <td className="py-2 text-gray-600">Model</td>
                          <td className="py-2 text-gray-900">#9786867</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-600">Style</td>
                          <td className="py-2 text-gray-900">Classic style</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-600">Certificate</td>
                          <td className="py-2 text-gray-900">ISO-898921212</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-600">Size</td>
                          <td className="py-2 text-gray-900">34mm x 450mm x 19mm</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-gray-600">Memory</td>
                          <td className="py-2 text-gray-900">36GB RAM</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="text-green-500">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Related products</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {product.relatedProducts.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-full h-24 bg-gray-100 rounded mb-3 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{item.name}</h4>
                <p className="text-sm text-gray-600">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* You may like */}
        <div className="bg-white rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">You may like</h3>
          <div className="space-y-4">
            {product.youMayLike.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 mt-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Super discount on more than 100 USD</h3>
              <p className="text-blue-100">Have you ever finally just write dummy info</p>
            </div>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;