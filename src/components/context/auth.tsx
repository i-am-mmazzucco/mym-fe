'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import moment from 'moment';
interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const expirationTime = sessionStorage.getItem('tokenExpiration');
    
    if (token && expirationTime) {
      const now = moment();
      if (now.valueOf() < parseInt(expirationTime)) {
        setIsAuthenticated(true);
      } else {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('tokenExpiration');
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
    
    setIsLoading(false);
  }, []);

  // Protect routes
  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated && pathname !== '/login') {
        router.push('/login');
      } else if (isAuthenticated && pathname === '/login') {
        router.push('/');
      }
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  const login = (token: string) => {
    const now = moment();
    const expirationTime = now.add(1, 'day').valueOf();
		
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('tokenExpiration', expirationTime.toString());
    
    setIsAuthenticated(true);
    router.push('/');
  };

  const logout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('tokenExpiration');
    setIsAuthenticated(false);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 