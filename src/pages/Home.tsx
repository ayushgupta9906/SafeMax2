import React from 'react';
import { Shield, Lock, Search, Users, Award, Clock } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Securing Your Digital Future with Confidence
            </h1>
            <p className="text-xl mb-8">
              Industry-leading cybersecurity solutions protecting businesses worldwide. 
              Trust SafeMax Security for comprehensive VAPT services and threat intelligence.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">VAPT Services</h3>
              <p className="text-gray-600">
                Comprehensive vulnerability assessment and penetration testing to identify and address security weaknesses.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Search className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Threat Intelligence</h3>
              <p className="text-gray-600">
                Advanced threat detection and monitoring to stay ahead of potential security risks.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Lock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security Consulting</h3>
              <p className="text-gray-600">
                Expert guidance on implementing robust security measures and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About SafeMax Security</h2>
              <p className="text-gray-600 mb-6">
                Since 2020, SafeMax Security has been at the forefront of cybersecurity innovation, 
                protecting businesses worldwide with cutting-edge VAPT services and security solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">50+</h4>
                  <p className="text-gray-600">Global Clients</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">22</h4>
                  <p className="text-gray-600">International Organizations</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">$75M</h4>
                  <p className="text-gray-600">Company Valuation</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">24/7</h4>
                  <p className="text-gray-600">Support Available</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4">
                <Award className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Industry Recognition</h3>
                  <p className="text-gray-600">
                    Recognized as a leading provider of cybersecurity solutions with proven expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">
                    Our team of certified security professionals brings years of experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Rapid Response</h3>
                  <p className="text-gray-600">
                    Quick response times and efficient problem resolution for all security concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Schedule a Consultation</h2>
          <div className="max-w-2xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;