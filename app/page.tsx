"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, ChevronLeft, ChevronRight, Mail, Phone, MapPin } from "lucide-react";

// Property data structure
const multifamilyHomes = [
  {
    id: 1,
    name: "The Riverside Residences",
    address: "1234 River Road, Portland, OR 97201",
    type: "Multifamily Home",
    units: 8,
    unitBreakdown: "4 x 2BR, 4 x 3BR",
    yearAcquired: "2021",
    status: "Fully Occupied",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    description: "Stunning riverside property featuring modern architecture and premium finishes throughout. Each unit offers breathtaking water views and access to exclusive amenities.",
    features: [
      "Waterfront location with private dock access",
      "Gourmet kitchens with quartz countertops",
      "In-unit washer and dryer",
      "Private balconies with river views",
      "Secure parking garage",
      "Smart home technology",
      "Fitness center access",
      "24/7 security system"
    ],
    neighborhood: "Located in Portland's most desirable riverside district, minutes from downtown dining, shopping, and entertainment. Surrounded by parks and walking trails."
  },
  {
    id: 2,
    name: "Parkview Manor",
    address: "567 Park Avenue, Seattle, WA 98101",
    type: "Multifamily Home",
    units: 6,
    unitBreakdown: "2 x 1BR, 3 x 2BR, 1 x 3BR",
    yearAcquired: "2020",
    status: "Fully Occupied",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    description: "Historic charm meets modern luxury in this beautifully restored property overlooking the city's premier park. High ceilings and original architectural details create an unmatched living experience.",
    features: [
      "Historic building with modern renovations",
      "Park views from every unit",
      "Original hardwood floors",
      "Updated electrical and plumbing",
      "Central air conditioning",
      "Bike storage",
      "Pet-friendly with dog park nearby",
      "Walking distance to transit"
    ],
    neighborhood: "Situated across from Seattle's iconic park, this property offers urban convenience with a peaceful, green setting. Top-rated restaurants and cafes within walking distance."
  },
  {
    id: 3,
    name: "Downtown Luxury Suites",
    address: "890 Main Street, San Francisco, CA 94102",
    type: "Multifamily Home",
    units: 10,
    unitBreakdown: "6 x 1BR, 4 x 2BR",
    yearAcquired: "2022",
    status: "Fully Occupied",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    description: "Contemporary urban living at its finest. Floor-to-ceiling windows, designer finishes, and premium amenities define this sought-after downtown property.",
    features: [
      "Floor-to-ceiling windows",
      "Rooftop terrace with city views",
      "Concierge service",
      "High-end appliances",
      "Marble bathrooms",
      "In-building gym",
      "Secure entry system",
      "EV charging stations"
    ],
    neighborhood: "In the heart of San Francisco's financial district, surrounded by world-class dining, shopping, and cultural attractions. Steps from public transportation."
  },
  {
    id: 4,
    name: "Garden District Homes",
    address: "2345 Oak Street, New Orleans, LA 70115",
    type: "Multifamily Home",
    units: 8,
    unitBreakdown: "4 x 2BR, 4 x 3BR",
    yearAcquired: "2019",
    status: "Fully Occupied",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    description: "Southern elegance and modern comfort combine in this beautifully maintained property. Private courtyards and lush landscaping create a serene urban oasis.",
    features: [
      "Private courtyards",
      "Original architectural details",
      "Modern kitchen updates",
      "Central heating and cooling",
      "Off-street parking",
      "Outdoor entertaining spaces",
      "Restored period features",
      "Energy-efficient windows"
    ],
    neighborhood: "Located in New Orleans' prestigious Garden District, known for historic mansions, tree-lined streets, and proximity to the French Quarter."
  },
  {
    id: 5,
    name: "Lakeside Living",
    address: "3456 Lakeshore Drive, Chicago, IL 60611",
    type: "Multifamily Home",
    units: 12,
    unitBreakdown: "6 x 1BR, 4 x 2BR, 2 x 3BR",
    yearAcquired: "2021",
    status: "Fully Occupied",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    description: "Breathtaking lake views and luxury amenities make this property one of Chicago's most desirable addresses. Every detail has been carefully curated for the discerning resident.",
    features: [
      "Panoramic lake views",
      "Private beach access",
      "Heated underground parking",
      "Doorman service",
      "Spa-inspired bathrooms",
      "Chef's kitchens",
      "Private storage units",
      "Bike room"
    ],
    neighborhood: "Prime lakefront location with direct beach access, surrounded by parks, museums, and Chicago's finest dining establishments."
  },
  {
    id: 6,
    name: "Mountain View Estates",
    address: "4567 Summit Road, Denver, CO 80202",
    type: "Multifamily Home",
    units: 8,
    unitBreakdown: "4 x 2BR, 4 x 3BR",
    yearAcquired: "2020",
    status: "Fully Occupied",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    description: "Mountain living meets urban convenience. Spectacular views, outdoor spaces, and proximity to hiking trails make this property truly special.",
    features: [
      "Mountain views",
      "Private patios and balconies",
      "Gas fireplaces",
      "Vaulted ceilings",
      "Ski storage",
      "Pet washing station",
      "Outdoor grilling areas",
      "Covered parking"
    ],
    neighborhood: "Nestled in Denver's foothills with easy access to downtown and world-class skiing. Surrounded by nature trails and outdoor recreation."
  }
];

const luxuryApartments = [
  {
    id: 7,
    name: "The Metropolitan",
    address: "5678 Broadway, New York, NY 10019",
    type: "Luxury Apartment",
    units: 24,
    unitBreakdown: "12 x 1BR, 8 x 2BR, 4 x 3BR",
    yearAcquired: "2022",
    status: "95% Occupied",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    description: "Iconic Manhattan living with unparalleled amenities and services. This full-service building offers the ultimate in luxury urban lifestyle.",
    features: [
      "24/7 concierge and doorman",
      "Rooftop pool and lounge",
      "State-of-the-art fitness center",
      "Private screening room",
      "Business center",
      "Valet parking",
      "Pet spa",
      "Resident lounge with catering kitchen"
    ],
    neighborhood: "Prime Midtown Manhattan location, steps from Central Park, world-class shopping on Fifth Avenue, and Broadway theaters."
  },
  {
    id: 8,
    name: "Sunset Tower",
    address: "6789 Sunset Boulevard, Los Angeles, CA 90028",
    type: "Luxury Apartment",
    units: 32,
    unitBreakdown: "16 x 1BR, 12 x 2BR, 4 x Penthouse",
    yearAcquired: "2021",
    status: "Fully Occupied",
    images: [
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800",
      "/api/placeholder/1200/800"
    ],
    description: "Hollywood glamour meets modern luxury. Stunning city and ocean views, resort-style amenities, and impeccable service define this prestigious address.",
    features: [
      "Infinity pool with city views",
      "Private wine cellar",
      "Yoga and meditation studio",
      "Spa and sauna",
      "Valet parking",
      "Electric car charging",
      "Smart home automation",
      "Private terraces in select units"
    ],
    neighborhood: "Located on the iconic Sunset Strip, surrounded by entertainment venues, fine dining, and luxury shopping. Minutes from Beverly Hills and Hollywood."
  }
];

const allProperties = [...multifamilyHomes, ...luxuryApartments];

export default function LuxuryDreamsStays() {
  const [selectedProperty, setSelectedProperty] = useState<typeof allProperties[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNextImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => 
        prev === selectedProperty.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProperty.images.length - 1 : prev - 1
      );
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll respond within 24 hours.");
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  const totalUnits = allProperties.reduce((sum, prop) => sum + prop.units, 0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className={`text-2xl font-serif font-bold tracking-wide transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Luxury Dreams Stays
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#portfolio" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
              }`}
            >
              Portfolio
            </a>
            <a 
              href="#about" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
              }`}
            >
              About
            </a>
            <a 
              href="#contact" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
              }`}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wide">
            Luxury Dreams Stays
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest mb-12">
            Curated Luxury Living Spaces
          </p>
          <div className="animate-bounce">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
              Where Dreams Meet Reality
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At Luxury Dreams Stays, we believe that exceptional living spaces are more than just properties—they're the foundation for life's most cherished moments. Our carefully curated portfolio of multifamily homes and luxury apartments represents the pinnacle of refined living, where every detail has been thoughtfully considered to create an unparalleled residential experience.
              </p>
              <p>
                With a focus on prime locations, architectural excellence, and premium amenities, we've built a reputation for delivering properties that exceed expectations. Our commitment to quality, attention to detail, and dedication to resident satisfaction sets us apart in the luxury real estate market.
              </p>
              <p>
                Each property in our portfolio has been selected for its unique character, exceptional location, and potential to provide our residents with a truly elevated lifestyle. We don't just manage properties—we create communities where dreams of luxury living become reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-2" style={{ color: '#d4af37' }}>
                8
              </div>
              <div className="text-sm md:text-base text-gray-600 tracking-wide uppercase">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-2" style={{ color: '#d4af37' }}>
                {totalUnits}
              </div>
              <div className="text-sm md:text-base text-gray-600 tracking-wide uppercase">Total Units</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-2" style={{ color: '#d4af37' }}>
                5+
              </div>
              <div className="text-sm md:text-base text-gray-600 tracking-wide uppercase">Years Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-2" style={{ color: '#d4af37' }}>
                98%
              </div>
              <div className="text-sm md:text-base text-gray-600 tracking-wide uppercase">Occupancy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Multifamily Homes Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Multifamily Homes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughtfully designed properties that blend architectural beauty with modern luxury
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {multifamilyHomes.map((property) => (
              <div
                key={property.id}
                className="group cursor-pointer overflow-hidden"
                onClick={() => {
                  setSelectedProperty(property);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-6">
                      <h3 className="text-2xl font-serif font-bold mb-2">{property.name}</h3>
                      <p className="text-sm tracking-wide mb-1">{property.address.split(',')[1]}</p>
                      <p className="text-sm tracking-wide">{property.units} Units</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Apartments Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Luxury Apartments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Full-service buildings offering the ultimate in urban luxury living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {luxuryApartments.map((property) => (
              <div
                key={property.id}
                className="group cursor-pointer overflow-hidden"
                onClick={() => {
                  setSelectedProperty(property);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-6">
                      <h3 className="text-2xl font-serif font-bold mb-2">{property.name}</h3>
                      <p className="text-sm tracking-wide mb-1">{property.address.split(',')[1]}</p>
                      <p className="text-sm tracking-wide">{property.units} Units</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                Partner With Us
              </h2>
              <p className="text-lg text-gray-600">
                Interested in investment opportunities or partnership? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="mt-2 border-gray-300 focus:border-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="mt-2 border-gray-300 focus:border-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="mt-2 border-gray-300 focus:border-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="interest" className="text-gray-700">Interest Type</Label>
                    <Input
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleFormChange}
                      placeholder="Investor, Partner, Landlord, Other"
                      className="mt-2 border-gray-300 focus:border-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows={4}
                      className="mt-2 border-gray-300 focus:border-gray-900"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full text-white"
                    style={{ backgroundColor: '#d4af37' }}
                  >
                    Send Message
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    We respond within 24 hours
                  </p>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 mr-4 mt-1" style={{ color: '#d4af37' }} />
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Email</div>
                        <a href="mailto:contact@luxurydreamsstays.com" className="text-gray-600 hover:text-gray-900">
                          contact@luxurydreamsstays.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 mr-4 mt-1" style={{ color: '#d4af37' }} />
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Phone</div>
                        <a href="tel:+15551234567" className="text-gray-600 hover:text-gray-900">
                          (555) 123-4567
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-4 mt-1" style={{ color: '#d4af37' }} />
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Office</div>
                        <p className="text-gray-600">
                          123 Luxury Lane, Suite 100<br />
                          Beverly Hills, CA 90210
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Luxury Dreams Stays</h3>
            <p className="text-gray-400 mb-6">Curated Luxury Living Spaces</p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 Luxury Dreams Stays. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
          <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-6xl mx-auto bg-white">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                  {selectedProperty.name}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProperty(null)}
                  className="hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Image Gallery */}
              <div className="relative">
                <img
                  src={selectedProperty.images[currentImageIndex]}
                  alt={selectedProperty.name}
                  className="w-full h-96 md:h-[600px] object-cover"
                />
                {selectedProperty.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100"
                      onClick={handlePrevImage}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100"
                      onClick={handleNextImage}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProperty.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 w-2 rounded-full transition-all ${
                            index === currentImageIndex 
                              ? 'bg-white w-8' 
                              : 'bg-white bg-opacity-50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Property Details */}
              <div className="p-6 md:p-12">
                <div className="space-y-8">
                  {/* Address and Description */}
                  <div>
                    <div className="flex items-start text-gray-600 mb-6">
                      <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-lg">{selectedProperty.address}</span>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {selectedProperty.description}
                    </p>
                  </div>

                  {/* Property Specs */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-gray-50 p-6 text-center">
                      <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Type</div>
                      <div className="font-semibold text-gray-900">{selectedProperty.type}</div>
                    </div>
                    <div className="bg-gray-50 p-6 text-center">
                      <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Total Units</div>
                      <div className="font-semibold text-gray-900">{selectedProperty.units}</div>
                    </div>
                    <div className="bg-gray-50 p-6 text-center">
                      <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Configuration</div>
                      <div className="font-semibold text-gray-900 text-sm">{selectedProperty.unitBreakdown}</div>
                    </div>
                    <div className="bg-gray-50 p-6 text-center">
                      <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">Year Acquired</div>
                      <div className="font-semibold text-gray-900">{selectedProperty.yearAcquired}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                      Luxury Features & Amenities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProperty.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div 
                            className="h-2 w-2 rounded-full mr-4 mt-2 flex-shrink-0" 
                            style={{ backgroundColor: '#d4af37' }}
                          ></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Neighborhood */}
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                      Neighborhood
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {selectedProperty.neighborhood}
                    </p>
                  </div>

                  {/* Status Banner */}
                  <div className="bg-gray-50 p-8 text-center border-t border-b border-gray-200">
                    <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
                      Current Status
                    </div>
                    <div className="text-2xl font-serif font-bold text-gray-900 mb-6">
                      {selectedProperty.status}
                    </div>
                    <Button 
                      className="text-white px-8"
                      style={{ backgroundColor: '#d4af37' }}
                    >
                      Request Information
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// END OF FILE