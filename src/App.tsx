import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
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
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';

function HomePage() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard/*" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;