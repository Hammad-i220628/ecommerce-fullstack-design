import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export interface Product {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  reviews: number;
  features: string[];
  freeShipping: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsResponse {
  products: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface SearchParams {
  category?: string;
  brand?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  featured?: boolean;
  sort?: string;
  order?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

// Product API functions
export const productAPI = {
  // Get all products with optional filters
  getProducts: async (params: SearchParams = {}): Promise<ProductsResponse> => {
    const response = await api.get('/products', { params });
    return response.data;
  },

  // Get featured products
  getFeaturedProducts: async (): Promise<Product[]> => {
    const response = await api.get('/products/featured');
    return response.data;
  },

  // Get product by ID
  getProductById: async (id: string): Promise<Product> => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  // Search products
  searchProducts: async (query: string, filters: SearchParams = {}): Promise<ProductsResponse> => {
    const params = { ...filters, search: query };
    const response = await api.get('/products', { params });
    return response.data;
  },

  // Get categories
  getCategories: async (): Promise<string[]> => {
    const response = await api.get('/products/meta/categories');
    return response.data;
  },

  // Get brands
  getBrands: async (): Promise<string[]> => {
    const response = await api.get('/products/meta/brands');
    return response.data;
  },

  // Create product (admin)
  createProduct: async (productData: Partial<Product>): Promise<Product> => {
    const response = await api.post('/products', productData);
    return response.data;
  },

  // Update product (admin)
  updateProduct: async (id: string, productData: Partial<Product>): Promise<Product> => {
    const response = await api.put(`/products/${id}`, productData);
    return response.data;
  },

  // Delete product (admin)
  deleteProduct: async (id: string): Promise<void> => {
    await api.delete(`/products/${id}`);
  }
};

// Health check
export const healthCheck = async (): Promise<{ message: string }> => {
  const response = await api.get('/health');
  return response.data;
};

export default api;