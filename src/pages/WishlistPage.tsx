import React from 'react';
import { Heart, ShoppingCart, X, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface WishlistPageProps {
  onBackToHome: () => void;
  onProductClick: (productId: string) => void;
}

const WishlistPage: React.FC<WishlistPageProps> = ({ onBackToHome, onProductClick }) => {
  const { state, dispatch } = useApp();

  const removeFromWishlist = (itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: itemId });
  };

  const moveToCart = (itemId: string) => {
    dispatch({ type: 'MOVE_TO_CART', payload: itemId });
  };

  const addToCart = (itemId: string) => {
    const wishlistItem = state.wishlist.find(item => item.id === itemId);
    if (wishlistItem) {
      dispatch({ 
        type: 'ADD_TO_CART', 
        payload: { 
          product: wishlistItem.product, 
          quantity: 1 
        } 
      });
    }
  };

  if (state.wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-8">
            <button
              onClick={onBackToHome}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to shop</span>
            </button>
          </div>
          
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Save items you love to your wishlist and shop them later.</p>
            <button
              onClick={onBackToHome}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBackToHome}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to shop</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <Heart className="w-6 h-6 text-red-500" />
              <span>My Wishlist ({state.wishlist.length})</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {state.wishlist.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow group relative">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 transition-colors z-10"
                >
                  <X className="w-4 h-4" />
                </button>
                
                <div className="w-full h-32 sm:h-48 bg-gray-100 rounded mb-4 overflow-hidden cursor-pointer">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-contain p-2 bg-white group-hover:scale-105 transition-transform duration-200"
                    onClick={() => onProductClick(item.product.id)}
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="text-lg font-bold text-gray-900">
                    ${item.product.price.toFixed(2)}
                  </div>
                  
                  <h3 
                    className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer line-clamp-2"
                    onClick={() => onProductClick(item.product.id)}
                  >
                    {item.product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>Added {item.dateAdded.toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => addToCart(item.id)}
                      className="flex-1 bg-blue-500 text-white py-2 px-3 rounded text-sm hover:bg-blue-600 transition-colors flex items-center justify-center space-x-1"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      onClick={() => moveToCart(item.id)}
                      className="flex-1 border border-blue-500 text-blue-500 py-2 px-3 rounded text-sm hover:bg-blue-50 transition-colors"
                    >
                      Move to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Items */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                <div className="w-full h-32 sm:h-40 bg-gray-100 rounded mb-2 overflow-hidden flex items-center justify-center">
                  <img
                    src={`/tech/${i}.jpg`}
                    alt={`Recommended item ${i}`}
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">$99.50</div>
                <div className="text-xs text-gray-600 line-clamp-2">Recommended Product {i}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;