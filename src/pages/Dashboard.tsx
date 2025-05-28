
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardInternships from '../components/dashboard/DashboardInternships';
import DashboardJobs from '../components/dashboard/DashboardJobs';
import DashboardBootcamps from '../components/dashboard/DashboardBootcamps';
import DashboardPostGrad from '../components/dashboard/DashboardPostGrad';
import DashboardGlobal from '../components/dashboard/DashboardGlobal';
import DashboardMasterclasses from '../components/dashboard/DashboardMasterclasses';

const Dashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 pt-16">
      <Sidebar />
      <div className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/internships" element={<DashboardInternships />} />
          <Route path="/jobs" element={<DashboardJobs />} />
          <Route path="/bootcamps" element={<DashboardBootcamps />} />
          <Route path="/postgrad" element={<DashboardPostGrad />} />
          <Route path="/global" element={<DashboardGlobal />} />
          <Route path="/masterclasses" element={<DashboardMasterclasses />} />
        </Routes>
      </div>
    </div>
  );
};

const DashboardHome: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Welcome to the admin dashboard. Select a section from the sidebar to manage content.</p>
      </div>
    </div>
  );
};

export default Dashboard;
