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