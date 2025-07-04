import React from 'react';
import './Dashboard.css';
import DataWell from '../DataWell/DataWell';
import YourWorkrate from '../YourWorkrate/YourWorkrate';
import WorkrateByTier from '../WorkrateByTier/WorkrateByTier';
import YourRatings from '../YourRatings/YourRatings';
import HubspotRatings from '../HubspotRatings/HubspotRatings';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Overview of your sales performance</p>
          
          {/* Tailwind CSS Test Section */}
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                ✅ Tailwind CSS Configured
              </span>
              <span className="tw-btn tw-btn-primary">
                Custom Design System
              </span>
            </div>
            <p className="text-sm text-gray-600">
              You can now use <code className="px-1 py-0.5 bg-gray-100 rounded text-xs">Tailwind utilities</code> like 
              <span className="text-blue-600 font-semibold"> text-blue-600</span>, 
              <span className="bg-yellow-200 px-1 mx-1 rounded"> bg-yellow-200</span>, and
              <span className="border-2 border-green-500 px-1 mx-1 rounded"> border-green-500</span> 
              alongside your existing design system tokens.
            </p>
          </div>
        </div>
        
        <div className="dashboard-grid">
          {/* Top Row - Data Wells */}
          <div className="dashboard-data-wells">
            <DataWell 
              title="TOTAL CAPACITY"
              value="1,247"
              subtitle="Companies"
              tagText="ACTIVE"
              tagVariant="success"
            />
            <DataWell 
              title="MONTHLY QUOTA"
              value="$85K"
              subtitle="Target: $100K"
              tagText="85%"
              tagVariant="warning"
            />
            <DataWell 
              title="PIPELINE VALUE"
              value="$2.1M"
              subtitle="42 opportunities"
              tagText="STRONG"
              tagVariant="success"
            />
            <DataWell 
              title="CONVERSION RATE"
              value="3.2%"
              subtitle="Last 30 days"
              tagText="IMPROVING"
              tagVariant="success"
            />
          </div>
          
          {/* Charts Row */}
          <div className="dashboard-charts">
            <div className="dashboard-chart-container">
              <YourWorkrate />
            </div>
            <div className="dashboard-chart-container">
              <WorkrateByTier />
            </div>
          </div>
          
          {/* Ratings Row */}
          <div className="dashboard-ratings">
            <div className="dashboard-rating-container">
              <YourRatings />
            </div>
            <div className="dashboard-rating-container">
              <HubspotRatings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 