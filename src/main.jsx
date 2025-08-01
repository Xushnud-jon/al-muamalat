import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';

// ✅ TanStack Query uchun importlar
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ✅ QueryClient instance yaratish
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ✅ QueryClientProvider bilan o‘rash */}
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <App />
    </QueryClientProvider>
  </StrictMode>
);
