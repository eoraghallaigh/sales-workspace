import React, { useState } from 'react';
import './Feed.css';
import Button from '../Button/Button';

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activityType, setActivityType] = useState('All activity types');
  const [sequenceEnrollment, setSequenceEnrollment] = useState('Any enrollment');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLoadOlder = () => {
    console.log('Load older activities clicked');
  };

  return (
    <div className="feed-container">
      <div className="feed-content">
        {/* Search Bar */}
        <div className="feed-search-container">
          <input
            type="text"
            placeholder="Search activities"
            value={searchTerm}
            onChange={handleSearchChange}
            className="feed-search-input"
          />
          <div className="feed-search-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="feed-filters">
          <div className="feed-filter-group">
            <span className="feed-filter-label">Activity type:</span>
            <div className="feed-filter-dropdown">
              <span className="feed-filter-value">{activityType}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="feed-filter-group">
            <span className="feed-filter-label">Sequence enrollment:</span>
            <div className="feed-filter-dropdown">
              <span className="feed-filter-value">{sequenceEnrollment}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="feed-empty-state">
          <div className="feed-empty-state-content">
            <div className="feed-empty-state-icon">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                {/* Magnifying glass */}
                <circle cx="50" cy="50" r="25" stroke="#CBD6E2" strokeWidth="2.5" fill="none"/>
                <path d="M71 71L85 85" stroke="#CBD6E2" strokeWidth="2.5" strokeLinecap="round"/>
                
                {/* Sparkles/dots around the magnifying glass */}
                <circle cx="25" cy="30" r="2" fill="#CBD6E2" opacity="0.6"/>
                <circle cx="35" cy="20" r="1.5" fill="#CBD6E2" opacity="0.4"/>
                <circle cx="80" cy="25" r="2" fill="#CBD6E2" opacity="0.6"/>
                <circle cx="90" cy="35" r="1.5" fill="#CBD6E2" opacity="0.4"/>
                <circle cx="20" cy="80" r="2" fill="#CBD6E2" opacity="0.6"/>
                <circle cx="30" cy="90" r="1.5" fill="#CBD6E2" opacity="0.4"/>
                <circle cx="95" cy="75" r="2" fill="#CBD6E2" opacity="0.6"/>
                <circle cx="85" cy="95" r="1.5" fill="#CBD6E2" opacity="0.4"/>
                
                {/* Additional sparkle lines */}
                <path d="M20 20L24 24M24 20L20 24" stroke="#CBD6E2" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
                <path d="M90 90L94 94M94 90L90 94" stroke="#CBD6E2" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
                <path d="M15 60L19 64M19 60L15 64" stroke="#CBD6E2" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </div>
            <div className="feed-empty-state-text">
              <p className="feed-empty-state-message">
                There are no activities from the last month
              </p>
            </div>
            <Button variant="secondary" onClick={handleLoadOlder}>
              Load older activities
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed; 