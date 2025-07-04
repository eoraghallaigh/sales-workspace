import React, { useState } from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import SideNav from './components/SideNav/SideNav';
import Prospecting from './components/Prospecting/Prospecting';

function App() {
  const [activeTab, setActiveTab] = useState('prospecting');

  return (
    <div className="app">
      <TopNav />
      <div className="app-layout">
        <SideNav />
        <div className="app-main">
          {activeTab === 'prospecting' && <Prospecting />}
          {/* Add other tabs/components here as needed */}
        </div>
      </div>
    </div>
  );
}

export default App; 