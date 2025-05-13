import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface City {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

interface Region {
  name: string;
  cities: City[];
}

const regions: Region[] = [
  {
    name: 'North India',
    cities: [
      {
        name: 'Delhi',
        address: '123 Education Avenue, Connaught Place, New Delhi',
        phone: '+91 9876543210',
        email: 'delhi@Talent.com',
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      },
      {
        name: 'Chandigarh',
        address: '45 Knowledge Park, Sector 17, Chandigarh',
        phone: '+91 9876543211',
        email: 'chandigarh@Talent.com',
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      },
      {
        name: 'Jaipur',
        address: '78 Career Road, C-Scheme, Jaipur',
        phone: '+91 9876543212',
        email: 'jaipur@Talent.com',
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      },
    ],
  },
  {
    name: 'South India',
    cities: [
      {
        name: 'Bangalore',
        address: '56 Tech Park, Koramangala, Bangalore',
        phone: '+91 9876543213',
        email: 'bangalore@Talent.com',
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      },
      {
        name: 'Chennai',
        address: '89 Education Street, T. Nagar, Chennai',
        phone: '+91 9876543214',
        email: 'chennai@Talent.com',
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      },
      {
        name: 'Hyderabad',
        address: '34 Career Center, Banjara Hills, Hyderabad',
        phone: '+91 9876543215',
        email: 'hyderabad@Talent.com',
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      },
    ],
  },
  {
    name: 'West India',
    cities: [
      {
        name: 'Mumbai',
        address: '12 Education Towers, Bandra West, Mumbai',
        phone: '+91 9876543216',
        email: 'mumbai@Talent.com',
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      },
      {
        name: 'Pune',
        address: '67 Knowledge Hub, Koregaon Park, Pune',
        phone: '+91 9876543217',
        email: 'pune@Talent.com',
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      },
      {
        name: 'Ahmedabad',
        address: '23 Career Square, Navrangpura, Ahmedabad',
        phone: '+91 9876543218',
        email: 'ahmedabad@Talent.com',
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      },
    ],
  },
  {
    name: 'East India',
    cities: [
      {
        name: 'Kolkata',
        address: '45 Education Lane, Park Street, Kolkata',
        phone: '+91 9876543219',
        email: 'kolkata@Talent.com',
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      },
      {
        name: 'Bhubaneswar',
        address: '78 Knowledge Road, Shaheed Nagar, Bhubaneswar',
        phone: '+91 9876543220',
        email: 'bhubaneswar@Talent.com',
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      },
      {
        name: 'Guwahati',
        address: '56 Career Path, Zoo Road, Guwahati',
        phone: '+91 9876543221',
        email: 'guwahati@Talent.com',
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM',
      },
    ],
  },
];

const LocationsSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState(regions[0].name);
  const [selectedCity, setSelectedCity] = useState<City | null>(regions[0].cities[0]);
  
  const handleRegionClick = (regionName: string) => {
    setActiveRegion(regionName);
    const region = regions.find(r => r.name === regionName);
    if (region) {
      setSelectedCity(region.cities[0]);
    }
  };
  
  const handleCityClick = (city: City) => {
    setSelectedCity(city);
  };
  
  // Get active region data
  const activeRegionData = regions.find(region => region.name === activeRegion) || regions[0];

  return (
    <section id="presence" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Presence" 
          subtitle="Experience our educational guidance in 100+ cities across India"
        />
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid md:grid-cols-3 lg:grid-cols-4">
            {/* Regions Sidebar */}
            <div className="bg-gray-100 p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Regions</h3>
              
              <nav className="space-y-1">
                {regions.map(region => (
                  <button
                    key={region.name}
                    onClick={() => handleRegionClick(region.name)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors flex items-center justify-between ${
                      activeRegion === region.name
                        ? 'bg-blue-700 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span>{region.name}</span>
                    <ChevronRight size={16} />
                  </button>
                ))}
              </nav>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-800 mb-2">Corporate Office</h4>
                <div className="text-sm space-y-2 text-gray-600">
                  <p className="flex items-start">
                    <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-blue-700" />
                    <span>123 Education Tower, Cyber City, Gurugram, Haryana - 122002</span>
                  </p>
                  <p className="flex items-center">
                    <Phone size={16} className="mr-2 flex-shrink-0 text-blue-700" />
                    <span>+91 9876543200</span>
                  </p>
                  <p className="flex items-center">
                    <Mail size={16} className="mr-2 flex-shrink-0 text-blue-700" />
                    <span>corporate@Talent.com</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Cities List */}
            <div className="p-4 border-r border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">{activeRegion} Cities</h3>
              
              <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2">
                {activeRegionData.cities.map(city => (
                  <button
                    key={city.name}
                    onClick={() => handleCityClick(city)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      selectedCity && selectedCity.name === city.name
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {city.name}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Can't find your city?</h4>
                <p className="text-sm text-blue-700 mb-3">
                  We're expanding rapidly! Enter your city to get notified when we open an experience center near you.
                </p>
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Enter your city" 
                    className="flex-1 px-3 py-2 text-sm rounded-l-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-700 text-white px-3 py-2 rounded-r-md text-sm hover:bg-blue-800 transition-colors">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
            
            {/* City Details */}
            <div className="md:col-span-1 lg:col-span-2 p-6">
              {selectedCity && (
                <div>
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-blue-900">{selectedCity.name} Experience Center</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Address</h4>
                        <p className="flex items-start text-gray-700">
                          <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-blue-700" />
                          <span>{selectedCity.address}</span>
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Contact</h4>
                        <div className="space-y-2">
                          <p className="flex items-center text-gray-700">
                            <Phone size={18} className="mr-2 flex-shrink-0 text-blue-700" />
                            <span>{selectedCity.phone}</span>
                          </p>
                          <p className="flex items-center text-gray-700">
                            <Mail size={18} className="mr-2 flex-shrink-0 text-blue-700" />
                            <span>{selectedCity.email}</span>
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Hours</h4>
                        <p className="flex items-center text-gray-700">
                          <Clock size={18} className="mr-2 flex-shrink-0 text-blue-700" />
                          <span>{selectedCity.hours}</span>
                        </p>
                      </div>
                      
                      <div className="pt-4">
                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors flex items-center">
                          Get Directions
                          <ChevronRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin size={32} className="mx-auto mb-2 text-blue-700" />
                        <p className="text-gray-700">Map view placeholder</p>
                        <p className="text-sm text-gray-500">Interactive map would be displayed here</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h4 className="font-medium text-gray-800 mb-3">Available Services at {selectedCity.name} Center</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div className="flex items-center text-gray-700">
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                        <span>One-on-One Counseling</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                        <span>University Application Support</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                        <span>Career Assessment</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                        <span>Study Material Library</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                        <span>Mock Interviews</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                        <span>Scholarship Guidance</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;