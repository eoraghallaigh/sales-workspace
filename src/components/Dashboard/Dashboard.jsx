import React from 'react';
import './Dashboard.css';
import Summary from '../Summary/Summary';
import YourWorkrate from '../YourWorkrate/YourWorkrate';
import YourRatings from '../YourRatings/YourRatings';
import HubspotRatings from '../HubspotRatings/HubspotRatings';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Summary Component - Full Width */}

        
        {/* 2x2 Grid Layout */}
        <div className="dashboard-grid">
          {/* Top Row */}
          <div className="dashboard-component">
            <HubspotRatings />
          </div>
          <div className="dashboard-component">
            <YourWorkrate />
          </div>
          
          {/* Bottom Row */}
          <div className="dashboard-component">
            <YourRatings />
          </div>
          <div className="dashboard-component dashboard-empty">
            {/* Empty component placeholder */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 