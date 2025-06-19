import React from 'react';
import { Product } from '../services/api';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  onProductClick: (productId: string) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading, onProductClick }) => {
  const { state, dispatch } = useApp();

  const isInWishlist = (productId: string) => {
    return state.wishlist.some(item => item.product.id === productId);
  };

  const toggleWishlist = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const wishlistItem = state.wishlist.find(item => item.product.id === product._id);
    
    if (wishlistItem) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: wishlistItem.id });
    } else {
      // Convert API product to app product format
      const appProduct = {
        id: product._id,
        name: product.name,
        price: product.price,
        rating: product.rating,
        reviews: product.reviews,
        image: product.image,
        category: product.category,
        brand: product.brand,
        features: product.features
      };
      dispatch({ type: 'ADD_TO_WISHLIST', payload: appProduct });
    }
  };

  const addToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const appProduct = {
      id: product._id,
      name: product.name,
      price: product.price,
      rating: product.rating,
      reviews: product.reviews,
      image: product.image,
      category: product.category,
      brand: product.brand,
      features: product.features
    };
    dispatch({ 
      type: 'ADD_TO_CART', 
      payload: { 
        product: appProduct, 
        quantity: 1 
      } 
    });
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

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 animate-pulse">
            <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <ShoppingCart className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer group"
          onClick={() => onProductClick(product._id)}
        >
          <div className="relative mb-4">
            <div className="w-full h-48 bg-gray-100 rounded overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <button
              onClick={(e) => toggleWishlist(e, product)}
              className={`absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm transition-colors ${
                isInWishlist(product._id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart className={`w-4 h-4 ${isInWishlist(product._id) ? 'fill-current' : ''}`} />
            </button>
            {product.originalPrice && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
              </div>
            )}
            {product.freeShipping && (
              <div className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                Free Shipping
              </div>
            )}
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
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>

            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600">
              {product.name}
            </h3>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span className="capitalize">{product.brand}</span>
              <span>{product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</span>
            </div>

            <button
              onClick={(e) => addToCart(e, product)}
              disabled={product.stock === 0}
              className="w-full bg-blue-500 text-white py-2 rounded text-sm hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;