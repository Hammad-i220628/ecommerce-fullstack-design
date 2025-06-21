import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinDate: Date;
  role?: 'user' | 'admin';
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
}

class AuthService {
  private token: string | null = null;

  constructor() {
    // Load token from localStorage on initialization
    this.token = localStorage.getItem('authToken');
    if (this.token) {
      this.setAuthHeader(this.token);
    }
  }

  private setAuthHeader(token: string) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  private removeAuthHeader() {
    delete axios.defaults.headers.common['Authorization'];
  }

  async login(credentials: LoginCredentials): Promise<User> {
    try {
      // Simulate API call - replace with actual API endpoint
      const response = await this.simulateLogin(credentials);
      
      this.token = response.token;
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('userData', JSON.stringify(response.user));
      this.setAuthHeader(response.token);
      
      return response.user;
    } catch (error) {
      throw new Error('Invalid email or password');
    }
  }

  async signup(credentials: SignupCredentials): Promise<User> {
    try {
      // Simulate API call - replace with actual API endpoint
      const response = await this.simulateSignup(credentials);
      
      this.token = response.token;
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('userData', JSON.stringify(response.user));
      this.setAuthHeader(response.token);
      
      return response.user;
    } catch (error) {
      throw new Error('Failed to create account');
    }
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    this.removeAuthHeader();
  }

  getCurrentUser(): User | null {
    if (!this.token) return null;
    
    try {
      const userData = localStorage.getItem('userData');
      if (userData) {
        const user = JSON.parse(userData);
        // Convert joinDate string back to Date object
        user.joinDate = new Date(user.joinDate);
        return user;
      }
      return null;
    } catch {
      return null;
    }
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  getToken(): string | null {
    return this.token;
  }

  // Simulate login API call - replace with actual API
  private async simulateLogin(credentials: LoginCredentials): Promise<AuthResponse> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate different users including admin
        const users = [
          {
            email: 'john@example.com',
            password: 'password123',
            user: {
              id: '1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: '/profile.jpg',
              joinDate: new Date('2023-01-15'),
              role: 'user' as const
            }
          },
          {
            email: 'admin@example.com',
            password: 'admin123',
            user: {
              id: 'admin1',
              name: 'Admin User',
              email: 'admin@example.com',
              joinDate: new Date('2023-01-01'),
              role: 'admin' as const
            }
          },
          {
            email: 'jane@example.com',
            password: 'password123',
            user: {
              id: '2',
              name: 'Jane Smith',
              email: 'jane@example.com',
              joinDate: new Date('2023-02-20'),
              role: 'user' as const
            }
          }
        ];

        const user = users.find(u => 
          u.email === credentials.email && u.password === credentials.password
        );

        if (user) {
          const token = `jwt_token_${user.user.id}_${Date.now()}`;
          resolve({ user: user.user, token });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  }

  // Simulate signup API call - replace with actual API
  private async simulateSignup(credentials: SignupCredentials): Promise<AuthResponse> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if email already exists (simulation)
        if (credentials.email === 'existing@example.com') {
          reject(new Error('Email already exists'));
          return;
        }

        const newUser: User = {
          id: `user_${Date.now()}`,
          name: credentials.name,
          email: credentials.email,
          joinDate: new Date(),
          role: 'user'
        };

        const token = `jwt_token_${newUser.id}_${Date.now()}`;
        resolve({ user: newUser, token });
      }, 1000);
    });
  }
}

export const authService = new AuthService();
export default authService;