import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>

      {/* Main content */}
      <div className="relative z-20">
        {/* Header */}
        <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-red-600 shadow-2xl">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Logo - Cool design that works without external files */}
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center font-bold text-white text-xl border-2 border-red-400 shadow-lg">
                  <span className="text-shadow">C</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight">
                    COPE INC.
                  </h1>
                  <p className="text-sm text-gray-400 font-mono">INCORPORATED</p>
                </div>
              </div>
              <div className="text-sm text-green-400 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>OPERATIONAL</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-20">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              FIGHTING
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                INJUSTICE
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              Cope Incorporated targets servers that promote piracy, bigotry, and hate speech.
              We disrupt toxic communities and protect the integrity of Minecraft's creative environment
              through strategic server interventions.
            </p>
            <div className="text-sm text-gray-500 font-mono">
              EST. 2024 | DIGITAL JUSTICE COLLECTIVE
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 text-center hover:border-red-500 transition-colors duration-300">
              <div className="text-3xl font-bold text-white mb-2">247</div>
              <div className="text-gray-400 text-sm">Toxic Servers Disrupted</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 text-center hover:border-orange-500 transition-colors duration-300">
              <div className="text-3xl font-bold text-white mb-2">89</div>
              <div className="text-gray-400 text-sm">Active Operatives</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 text-center hover:border-yellow-500 transition-colors duration-300">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Monitoring Active</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 text-center hover:border-green-500 transition-colors duration-300">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">Justice Delivered</div>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <button
              onClick={() => window.open('/services', '_blank')}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 hover:border-red-500 rounded-xl p-8 text-left transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-red-500 text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                Security Testing
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Comprehensive penetration testing and vulnerability assessment for server infrastructure.
              </p>
            </button>

            <button
              onClick={() => window.open('/portfolio', '_blank')}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 hover:border-orange-500 rounded-xl p-8 text-left transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-orange-500 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                Case Studies
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Review our successful security audits and infrastructure improvements.
              </p>
            </button>

            <button
              onClick={() => window.open('https://discord.gg/cope-inc', '_blank')}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 hover:border-blue-500 rounded-xl p-8 text-left transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-blue-500 text-3xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                Consultation
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connect with our team for professional security consultation services.
              </p>
            </button>
          </div>

          {/* Recent Projects */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Recent Security Assessments
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-black bg-opacity-50 p-4 rounded-lg border-l-4 border-red-500">
                <div>
                  <span className="text-white font-medium">Enterprise Network Analysis</span>
                  <div className="text-gray-400 text-sm">Comprehensive infrastructure review</div>
                </div>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </div>
              <div className="flex items-center justify-between bg-black bg-opacity-50 p-4 rounded-lg border-l-4 border-orange-500">
                <div>
                  <span className="text-white font-medium">Server Vulnerability Assessment</span>
                  <div className="text-gray-400 text-sm">Multi-platform security audit</div>
                </div>
                <span className="text-gray-500 text-sm">1 week ago</span>
              </div>
              <div className="flex items-center justify-between bg-black bg-opacity-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <div>
                  <span className="text-white font-medium">Performance Optimization</span>
                  <div className="text-gray-400 text-sm">Load testing and optimization</div>
                </div>
                <span className="text-gray-500 text-sm">2 weeks ago</span>
              </div>
            </div>
          </div>

          {/* Professional Notice */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-gray-900 to-black border border-gray-600 rounded-lg p-6">
              <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
                <strong className="text-white">Professional Services Notice:</strong> All security testing and
                infrastructure analysis is conducted with proper authorization and within legal boundaries.
                Cope Inc. operates as a legitimate security consulting firm.
              </p>
            </div>
          </div>
        </main>

        {/* Footer with Login */}
        <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-700 py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © 2024 Cope Incorporated | Professional Security Services
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Licensed Security Consulting | All Rights Reserved
                </p>
              </div>
              <button
                onClick={() => window.open('/login', '_blank')}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
              >
                Client Login
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;