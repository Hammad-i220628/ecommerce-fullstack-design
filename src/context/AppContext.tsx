import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, CartItem, WishlistItem, User, Message, Conversation } from '../types';

interface AppState {
  user: User | null;
  cart: CartItem[];
  wishlist: WishlistItem[];
  conversations: Conversation[];
  messages: Message[];
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; size?: string; color?: string } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: string }
  | { type: 'MOVE_TO_CART'; payload: string }
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'MARK_MESSAGE_READ'; payload: string };

const initialState: AppState = {
  user: {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/profile.jpg',
    joinDate: new Date('2023-01-15')
  },
  cart: [],
  wishlist: [
    {
      id: '1',
      product: {
        id: '1',
        name: 'GoPro HERO6 4K Action Camera - Black',
        price: 99.50,
        rating: 4.5,
        reviews: 154,
        image: '/tech/3.jpg',
        category: 'electronics',
        brand: 'gopro',
        features: ['4k', 'waterproof']
      },
      dateAdded: new Date()
    },
    {
      id: '2',
      product: {
        id: '2',
        name: 'Apple iPhone 12 Pro Max',
        price: 99.50,
        rating: 4.8,
        reviews: 324,
        image: '/tech/8.jpg',
        category: 'smartphones',
        brand: 'apple',
        features: ['5g', 'face-id']
      },
      dateAdded: new Date()
    },
    {
      id: '3',
      product: {
        id: '3',
        name: 'Apple Watch Series 7',
        price: 99.50,
        rating: 4.7,
        reviews: 198,
        image: '/tech/1.jpg',
        category: 'wearables',
        brand: 'apple',
        features: ['health', 'fitness']
      },
      dateAdded: new Date()
    },
    {
      id: '4',
      product: {
        id: '4',
        name: 'MacBook Pro 16-inch',
        price: 99.50,
        rating: 4.9,
        reviews: 87,
        image: '/tech/7.jpg',
        category: 'laptops',
        brand: 'apple',
        features: ['m1-chip', 'retina']
      },
      dateAdded: new Date()
    }
  ],
  conversations: [],
  messages: []
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    
    case 'ADD_TO_CART':
      const existingCartItem = state.cart.find(item => 
        item.product.id === action.payload.product.id &&
        item.selectedSize === action.payload.size &&
        item.selectedColor === action.payload.color
      );
      
      if (existingCartItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === existingCartItem.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      
      const newCartItem: CartItem = {
        id: Date.now().toString(),
        product: action.payload.product,
        quantity: action.payload.quantity,
        selectedSize: action.payload.size,
        selectedColor: action.payload.color
      };
      
      return { ...state, cart: [...state.cart, newCartItem] };
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    
    case 'ADD_TO_WISHLIST':
      const existingWishlistItem = state.wishlist.find(item => item.product.id === action.payload.id);
      if (existingWishlistItem) return state;
      
      const newWishlistItem: WishlistItem = {
        id: Date.now().toString(),
        product: action.payload,
        dateAdded: new Date()
      };
      
      return { ...state, wishlist: [...state.wishlist, newWishlistItem] };
    
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload)
      };
    
    case 'MOVE_TO_CART':
      const wishlistItem = state.wishlist.find(item => item.id === action.payload);
      if (!wishlistItem) return state;
      
      const cartItem: CartItem = {
        id: Date.now().toString(),
        product: wishlistItem.product,
        quantity: 1
      };
      
      return {
        ...state,
        cart: [...state.cart, cartItem],
        wishlist: state.wishlist.filter(item => item.id !== action.payload)
      };
    
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    
    case 'MARK_MESSAGE_READ':
      return {
        ...state,
        messages: state.messages.map(msg =>
          msg.id === action.payload ? { ...msg, read: true } : msg
        )
      };
    
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};