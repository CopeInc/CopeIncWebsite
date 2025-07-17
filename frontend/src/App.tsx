import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

// Create a client for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <header className="bg-gray-900 text-white p-4">
            <h1 className="text-2xl font-bold">Griefing Group Website</h1>
          </header>
          
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Welcome to Our Griefing Group</h2>
                  <p className="text-gray-600">Website is under construction...</p>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;