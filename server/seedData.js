import Product from './models/Product.js';

const sampleProducts = [
  {
    name: 'Canon Camera EOS 2000, Black 10x zoom',
    price: 99.00,
    originalPrice: 1128.00,
    image: '/tech/5.jpg',
    description: 'Professional DSLR camera with 10x optical zoom, perfect for photography enthusiasts. Features advanced autofocus system and high-resolution sensor.',
    category: 'cameras',
    brand: 'Canon',
    stock: 25,
    rating: 4.5,
    reviews: 154,
    features: ['10x zoom', '4K video', 'WiFi enabled'],
    freeShipping: true,
    featured: true
  },
  {
    name: 'GoPro HERO6 4K Action Camera - Black',
    price: 299.00,
    originalPrice: 399.00,
    image: '/tech/3.jpg',
    description: 'Waterproof action camera with 4K video recording. Perfect for adventure sports and outdoor activities.',
    category: 'cameras',
    brand: 'GoPro',
    stock: 15,
    rating: 4.7,
    reviews: 89,
    features: ['4K video', 'Waterproof', 'Voice control'],
    freeShipping: true,
    featured: true
  },
  {
    name: 'Samsung Galaxy Smartphone - Latest Model',
    price: 799.00,
    originalPrice: 999.00,
    image: '/tech/8.jpg',
    description: 'Latest Samsung Galaxy smartphone with advanced camera system, 5G connectivity, and all-day battery life.',
    category: 'smartphones',
    brand: 'Samsung',
    stock: 50,
    rating: 4.6,
    reviews: 324,
    features: ['5G', '108MP camera', 'Fast charging'],
    freeShipping: true,
    featured: true
  },
  {
    name: 'Professional Gaming Headset with Mic',
    price: 89.99,
    originalPrice: 129.99,
    image: '/tech/4.jpg',
    description: 'High-quality gaming headset with noise-canceling microphone and surround sound for immersive gaming experience.',
    category: 'headphones',
    brand: 'SteelSeries',
    stock: 30,
    rating: 4.4,
    reviews: 156,
    features: ['Noise canceling', 'Surround sound', 'RGB lighting'],
    freeShipping: true,
    featured: false
  },
  {
    name: 'Apple Watch Series 7 - Smart Fitness Tracker',
    price: 399.00,
    originalPrice: 499.00,
    image: '/tech/1.jpg',
    description: 'Advanced smartwatch with health monitoring, GPS, and cellular connectivity. Track your fitness and stay connected.',
    category: 'watches',
    brand: 'Apple',
    stock: 20,
    rating: 4.8,
    reviews: 278,
    features: ['Health monitoring', 'GPS', 'Water resistant'],
    freeShipping: true,
    featured: true
  },
  {
    name: 'MacBook Pro 16-inch - High Performance Laptop',
    price: 2399.00,
    originalPrice: 2699.00,
    image: '/tech/7.jpg',
    description: 'Powerful laptop with M1 Pro chip, stunning Retina display, and all-day battery life. Perfect for professionals.',
    category: 'laptops',
    brand: 'Apple',
    stock: 10,
    rating: 4.9,
    reviews: 145,
    features: ['M1 Pro chip', 'Retina display', '20-hour battery'],
    freeShipping: true,
    featured: true
  },
  {
    name: 'Sony WH-1000XM4 Wireless Headphones',
    price: 279.99,
    originalPrice: 349.99,
    image: '/tech/9.jpg',
    description: 'Industry-leading noise canceling wireless headphones with 30-hour battery life and premium sound quality.',
    category: 'headphones',
    brand: 'Sony',
    stock: 35,
    rating: 4.7,
    reviews: 892,
    features: ['Noise canceling', '30-hour battery', 'Touch controls'],
    freeShipping: true,
    featured: false
  },
  {
    name: 'iPhone 14 Pro Max - 256GB',
    price: 1099.00,
    originalPrice: 1199.00,
    image: '/tech/2.jpg',
    description: 'Latest iPhone with Pro camera system, A16 Bionic chip, and Dynamic Island. Available in multiple colors.',
    category: 'smartphones',
    brand: 'Apple',
    stock: 40,
    rating: 4.8,
    reviews: 567,
    features: ['A16 Bionic', 'Pro camera', 'Dynamic Island'],
    freeShipping: true,
    featured: true
  },
  {
    name: 'Dell XPS 13 Ultrabook',
    price: 999.00,
    originalPrice: 1299.00,
    image: '/tech/6.jpg',
    description: 'Ultra-portable laptop with InfinityEdge display, Intel Core i7 processor, and premium build quality.',
    category: 'laptops',
    brand: 'Dell',
    stock: 18,
    rating: 4.5,
    reviews: 234,
    features: ['InfinityEdge display', 'Intel i7', 'Ultra-portable'],
    freeShipping: true,
    featured: false
  },
  {
    name: 'Electric Kettle - Stainless Steel',
    price: 49.99,
    originalPrice: 79.99,
    image: '/tech/10.jpg',
    description: 'Fast-boiling electric kettle with temperature control and automatic shut-off for safety.',
    category: 'home',
    brand: 'Breville',
    stock: 60,
    rating: 4.3,
    reviews: 123,
    features: ['Temperature control', 'Auto shut-off', 'Fast boiling'],
    freeShipping: false,
    featured: false
  },
  {
    name: 'Men\'s Cotton T-Shirt - Multiple Colors',
    price: 19.99,
    originalPrice: 29.99,
    image: '/cloth/1.jpg',
    description: 'Comfortable cotton t-shirt available in multiple colors. Perfect for casual wear and everyday comfort.',
    category: 'clothing',
    brand: 'Uniqlo',
    stock: 100,
    rating: 4.2,
    reviews: 456,
    features: ['100% cotton', 'Multiple colors', 'Comfortable fit'],
    freeShipping: false,
    featured: false
  },
  {
    name: 'Denim Jeans - Classic Blue',
    price: 59.99,
    originalPrice: 89.99,
    image: '/cloth/2.jpg',
    description: 'Classic blue denim jeans with comfortable fit and durable construction. A wardrobe essential.',
    category: 'clothing',
    brand: 'Levi\'s',
    stock: 75,
    rating: 4.4,
    reviews: 234,
    features: ['Classic fit', 'Durable denim', 'Multiple sizes'],
    freeShipping: false,
    featured: false
  }
];

export const seedProducts = async () => {
  try {
    const existingProducts = await Product.countDocuments();
    
    if (existingProducts === 0) {
      await Product.insertMany(sampleProducts);
      console.log('Sample products seeded successfully!');
    } else {
      console.log('Products already exist in database');
    }
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};