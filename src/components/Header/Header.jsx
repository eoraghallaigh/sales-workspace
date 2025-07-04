import React from 'react';
import './Header.css';

const Header = ({ activeTab = 'Dashboard', onTabChange }) => {
  const tabs = [
    'Summary',
    'Prospecting',
    'Sourcing', 
    'Feed',
    'Dashboard',
    'Tasks'
  ];

  const handleTabClick = (tab) => {
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Banner Section */}
        <div className="banner">
          <div className="title-section">
            <h1 className="workspace-title">Sales Workspace</h1>
          </div>
          
          <div className="user-section">
            <button className="user-dropdown">
              <span className="user-name">Matthew Jones</span>
              <svg className="dropdown-icon" viewBox="0 0 14 9" fill="none">
                <path
                  d="M1.16839 0H1.16468C0.842217 0 0.551048 0.132061 0.341024 0.344736C0.129939 0.559533 0 0.854946 0 1.18006C0 1.50517 0.129939 1.80005 0.341554 2.01538L6.17555 7.92893C6.38557 8.14267 6.67727 8.27473 7.00027 8.27473C7.32326 8.27473 7.61496 8.14214 7.82498 7.92893L13.659 2.01538C13.8701 1.80058 14 1.50517 14 1.18006C14 0.854946 13.8701 0.559533 13.6584 0.344736C13.449 0.132061 13.1583 0.000530363 12.8364 0H1.16839Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="navigation">
          <div className="tabs-container">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'tab--active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                <span className="tab-text" data-text={tab}>
                  {tab}
                </span>
                {activeTab === tab && (
                  <div className="tab-indicator" />
                )}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 