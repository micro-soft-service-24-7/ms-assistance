import React from 'react';
import { Phone, Clock, Shield, Monitor, Smartphone, Gamepad2, Cloud, Users, CheckCircle, Headphones } from 'lucide-react';

function App() {
  const phoneNumber = '+1 (844) 314 8343';
  const products = [
    {
      name: 'Windows 11',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Monitor,
      description: 'Latest Windows operating system'
    },
    {
      name: 'Microsoft 365',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Cloud,
      description: 'Productivity and collaboration suite'
    },
    {
      name: 'Surface Devices',
      image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Smartphone,
      description: 'Premium laptops and tablets'
    },
    {
      name: 'Xbox Gaming',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400',
      icon: Gamepad2,
      description: 'Gaming console and services'
    }
  ];

  const services = [
    {
      icon: Shield,
      title: 'Technical Support',
      description: 'Expert assistance for all Microsoft products and services'
    },
    {
      icon: Users,
      title: 'Account Management',
      description: 'Help with Microsoft account issues and subscriptions'
    },
    {
      icon: CheckCircle,
      title: 'Product Setup',
      description: 'Complete guidance for product installation and configuration'
    },
    {
      icon: Headphones,
      title: 'Premium Support',
      description: 'Priority support for business and enterprise customers'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Phone */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Customer Service</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 text-blue-600">
                <Phone className="h-4 w-4" />
                <a href={`tel:${phoneNumber.replace(/\s+/g, '').replace(/[()]/g, '')}`} className="text-sm font-medium hover:text-blue-700 transition-colors">
                  {phoneNumber}
                </a>
              </div>
            </div>
            
            {/* 24/7 Badge */}
            <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
              <Clock className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">24/7 Available</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Microsoft Customer Support
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get expert help with all your Microsoft products and services. Our certified technicians are available 24/7 to assist you.
          </p>
          
          {/* Main Phone Number */}
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Phone className="h-6 w-6 text-blue-600" />
              <span className="text-gray-700 font-medium">Call Now for Immediate Support</span>
            </div>
            <a 
              href={`tel:${phoneNumber.replace(/\s+/g, '').replace(/[()]/g, '')}`}
              className="block text-2xl lg:text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors mb-4"
            >
              {phoneNumber}
            </a>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Available 24/7 • No Wait Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Microsoft Products We Support
            </h2>
            <p className="text-xl text-gray-600">
              Expert assistance for all Microsoft products and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <product.icon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  </div>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Customer Service
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support for all your Microsoft needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Need Help Right Now?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our certified Microsoft specialists are standing by to help you
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href={`tel:${phoneNumber.replace(/\s+/g, '').replace(/[()]/g, '')}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call {phoneNumber}</span>
            </a>
            
            <div className="flex items-center space-x-2 text-white">
              <Clock className="h-5 w-5" />
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              <span className="text-white font-medium">Customer Service</span>
            </div>
            
            <div className="border-t border-gray-700 pt-4">
              <p className="text-xs text-gray-400 font-light">
                Disclaimer: This is an independent customer service provider. We are not affiliated with or endorsed by Microsoft Corporation. 
                For official Microsoft support, please contact Microsoft directly through their official channels.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;