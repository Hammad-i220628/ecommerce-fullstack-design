import React, { useState } from 'react';
import { ArrowLeft, Minus, Plus, X, Shield, MessageSquare, Truck } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface CartPageProps {
  onBackToHome: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ onBackToHome }) => {
  const { state, dispatch } = useApp();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: itemId, quantity: newQuantity } });
    }
  };

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const moveToWishlist = (itemId: string) => {
    const item = state.cart.find(cartItem => cartItem.id === itemId);
    if (item) {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: item.product });
      dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    }
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'save10') {
      setAppliedCoupon({ code: couponCode, discount: 60 });
      setCouponCode('');
    }
  };

  const subtotal = state.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discount = appliedCoupon ? appliedCoupon.discount : 0;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal - discount + tax;

  const removeAllItems = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  if (state.cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <button
              onClick={onBackToHome}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Continue Shopping
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
          <button
            onClick={removeAllItems}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Remove all
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900">My cart ({state.cart.length})</h1>
              </div>
              
              <div className="divide-y divide-gray-200">
                {state.cart.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex space-x-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          {item.product.name}
                        </h3>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>Size: {item.selectedSize || 'medium'}, Color: {item.selectedColor || 'blue'}, Material: {item.product.material || 'Plastic'}</p>
                          <p>Seller: {item.product.seller || 'Artel Market'}</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-3">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                          <button
                            onClick={() => moveToWishlist(item.id)}
                            className="text-blue-500 hover:text-blue-700 text-sm"
                          >
                            Save for later
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-4">
                        <div className="text-xl font-bold text-gray-900">
                          ${item.product.price.toFixed(2)}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Qty:</span>
                          <div className="flex items-center border border-gray-300 rounded">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 py-1 text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              {/* Coupon Section */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Have a coupon?</h3>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Add coupon"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-red-600">
                    <span>Discount:</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-green-600">
                  <span>Tax:</span>
                  <span>+${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors mb-4">
                Checkout
              </button>

              <div className="flex justify-center space-x-3 mb-6">
                <img src="/payment/1.png" alt="Visa" className="h-6 object-contain" />
                <img src="/payment/2.png" alt="Mastercard" className="h-6 object-contain" />
                <img src="/payment/3.png" alt="PayPal" className="h-6 object-contain" />
                <img src="/payment/4.png" alt="Apple Pay" className="h-6 object-contain" />
                <img src="/payment/5.png" alt="Google Pay" className="h-6 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Saved for Later */}
        {state.wishlist.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Saved for later</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {state.wishlist.slice(0, 4).map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="w-full h-32 bg-gray-100 rounded mb-3 overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-2">
                    ${item.product.price.toFixed(2)}
                  </div>
                  <h3 className="text-sm text-gray-700 mb-3 line-clamp-2">
                    {item.product.name}
                  </h3>
                  <button
                    onClick={() => dispatch({ type: 'MOVE_TO_CART', payload: item.id })}
                    className="w-full bg-blue-500 text-white py-2 rounded text-sm hover:bg-blue-600 transition-colors"
                  >
                    Move to cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 mt-12 text-white">
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

export default CartPage;