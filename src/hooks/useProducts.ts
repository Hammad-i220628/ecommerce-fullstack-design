import { useState, useEffect } from 'react';
import { productAPI, Product, ProductsResponse, SearchParams } from '../services/api';

export const useProducts = (initialParams: SearchParams = {}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    pages: 0
  });

  const fetchProducts = async (params: SearchParams = {}) => {
    try {
      setLoading(true);
      setError(null);
      const response: ProductsResponse = await productAPI.getProducts({ ...initialParams, ...params });
      setProducts(response.products);
      setPagination(response.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    pagination,
    refetch: fetchProducts
  };
};

export const useFeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await productAPI.getFeaturedProducts();
        setProducts(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch featured products');
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return { products, loading, error };
};

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await productAPI.getProductById(id);
        setProduct(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};