import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import InternshipsSection from './components/sections/InternshipsSection';
import JobsSection from './components/sections/JobsSection';
import BootcampsSection from './components/sections/BootcampsSection';
import PostGradSection from './components/sections/PostGradSection';
import GlobalSection from './components/sections/GlobalSection';
import EntranceExamsSection from './components/sections/EntranceExamsSection';
import CompetitiveExamsSection from './components/sections/CompetitiveExamsSection';
import InsightsSection from './components/sections/InsightsSection';
import CounselingSection from './components/sections/CounselingSection';
import LocationsSection from './components/sections/LocationsSection';
import { ArrowRight, Clock, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <InternshipsSection />
        <JobsSection />
        <BootcampsSection />
        <PostGradSection />
        <GlobalSection />
        <EntranceExamsSection />
        <CompetitiveExamsSection />
        <InsightsSection />
        <CounselingSection />
        <LocationsSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;