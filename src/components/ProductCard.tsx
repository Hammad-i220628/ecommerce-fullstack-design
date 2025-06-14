import React from 'react';
import { Heart, Star } from 'lucide-react';

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
}

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
  onProductClick: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode, onProductClick }) => {
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

  if (viewMode === 'list') {
    return (
      <div className="bg-white border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors cursor-pointer">
        <div className="flex space-x-4">
          <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
              onClick={() => onProductClick(product.id)}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 
                  className="text-base font-medium text-gray-900 hover:text-blue-600 cursor-pointer mb-1"
                  onClick={() => onProductClick(product.id)}
                >
                  {product.name}
                </h3>
                <div className="flex items-center space-x-1 mb-2">
                  <div className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</div>
                  {product.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.rating}
                  </span>
                  {product.freeShipping && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded ml-2">
                      Free Shipping
                    </span>
                  )}
                </div>
                {product.description && (
                  <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                )}
              </div>
              <div className="flex flex-col items-end space-y-2 ml-4">
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded p-4 hover:shadow-md transition-shadow group cursor-pointer">
      <div className="relative mb-3">
        <div className="w-full h-48 bg-gray-100 rounded overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            onClick={() => onProductClick(product.id)}
          />
        </div>
        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</div>
          {product.originalPrice && (
            <div className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-500">{product.rating}</span>
        </div>
        <h3 
          className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-2"
          onClick={() => onProductClick(product.id)}
        >
          {product.name}
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;