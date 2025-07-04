import React, { useState } from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import SideNav from './components/SideNav/SideNav';
import Header from './components/Header/Header';
import Summary from './components/Summary/Summary';
import Prospecting from './components/Prospecting/Prospecting';
import Sourcing from './components/Sourcing/Sourcing';
import Feed from './components/Feed/Feed';
import Dashboard from './components/Dashboard/Dashboard';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [activeTab, setActiveTab] = useState('Summary');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleNavigateToSourcing = () => {
    setActiveTab('Sourcing');
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Summary':
        return <Summary onNavigateToSourcing={handleNavigateToSourcing} />;
      case 'Prospecting':
        return <Prospecting />;
      case 'Sourcing':
        return <Sourcing />;
      case 'Feed':
        return <Feed />;
      case 'Dashboard':
        return <Dashboard />;
      case 'Tasks':
        return <Tasks />;
      default:
        return <Summary onNavigateToSourcing={handleNavigateToSourcing} />;
    }
  };

  return (
    <div className="app">
      <TopNav />
      <div className="app-layout">
        <SideNav />
        <div className="app-content">
          <Header 
            activeTab={activeTab} 
            onTabChange={handleTabChange} 
          />
          <div className="app-main">
            {renderActiveTab()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 