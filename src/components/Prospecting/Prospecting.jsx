import React, { useState } from 'react';
import './Prospecting.css';
import TableCell from '../TableCell/TableCell';
import PageTitle from '../PageTitle/PageTitle';
import SubNav from '../SubNav/SubNav';
import TableActions from '../TableActions/TableActions';
import Button from '../Button/Button';
import DataWell from '../DataWell/DataWell';
import UIHeader from '../UIHeader/UIHeader';

const RecyclesTableView = () => {
  const handleSort = (column, direction) => {
    console.log('Sorting by:', column, 'in', direction, 'order');
  };

  return (
    <div className="recycles-table-view">
      <div className="recycles-header">
        <div className="recycles-header__content">
          <div className="recycles-header__title-section">
            <div className="recycles-header__title">
              <h1 className="recycles-header__heading">Recommended Recycles</h1>
            </div>
            <div className="recycles-header__count">1,247 companies</div>
            <div className="recycles-header__description">
              Companies that were previously engaged but haven't been contacted recently - good candidates for re-engagement.
            </div>
          </div>
          
          <div className="recycles-header__actions">
            <Button 
              text="Advanced Filters"
              icon={
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3.5H5.5M5.5 3.5C5.5 4.32843 6.17157 5 7 5C7.82843 5 8.5 4.32843 8.5 3.5M5.5 3.5C5.5 2.67157 6.17157 2 7 2C7.82843 2 8.5 2.67157 8.5 3.5M8.5 3.5H12M2 10.5H5.5M5.5 10.5C5.5 11.3284 6.17157 12 7 12C7.82843 12 8.5 11.3284 8.5 10.5M5.5 10.5C5.5 9.67157 6.17157 9 7 9C7.82843 9 8.5 9.67157 8.5 10.5M8.5 10.5H12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              }
              onClick={() => console.log('Advanced Filters clicked')}
            />
            
            <Button 
              text="Open in CRM"
              icon={
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 3.5L3.5 10.5M10.5 3.5H7M10.5 3.5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              onClick={() => console.log('Open in CRM clicked')}
            />
          </div>
        </div>
      </div>
      
      <div className="recycles-table-container">
        <div className="recycles-table">
          {/* Table Header Row */}
          <div className="recycles-table-row">
            <TableCell 
              state="header"
              content="Company Name"
              sortable={true}
              sortOrder={null}
              onSort={() => handleSort('companyName')}
            />
            <TableCell 
              state="header"
              content="Last Contact Date"
              sortable={true}
              sortOrder={null}
              onSort={() => handleSort('lastContactDate')}
            />
            <TableCell 
              state="header"
              content="Last Activity"
              sortable={true}
              sortOrder={null}
              onSort={() => handleSort('lastActivity')}
            />
            <TableCell 
              state="header"
              content="Industry"
              sortable={true}
              sortOrder={null}
              onSort={() => handleSort('industry')}
            />
            <TableCell 
              state="header"
              content="Deal Stage"
              sortable={true}
              sortOrder={null}
              onSort={() => handleSort('dealStage')}
            />
            <TableCell 
              state="header"
              content="Revenue Range"
              sortable={true}
              sortOrder={null}
              onSort={() => handleSort('revenueRange')}
            />
            <TableCell 
              state="header"
              content="Contact Count"
              sortable={true}
              sortOrder={null}
              onSort={() => handleSort('contactCount')}
            />
            <TableCell 
              state="header"
              content="Engagement Score"
              sortable={true}
              sortOrder={null}
              onSort={() => handleSort('engagementScore')}
            />
          </div>
          
          {/* Sample Data Rows */}
          <div className="recycles-table-row">
            <TableCell 
              state="title"
              content={{
                name: "TechVision Solutions",
                initials: "TV",
                color: "#2563eb"
              }}
            />
            <TableCell 
              state="default"
              content="15 Aug 2024 14:30 GMT+2"
            />
            <TableCell 
              state="default"
              content="Email Opened"
            />
            <TableCell 
              state="default"
              content="Software Development"
            />
            <TableCell 
              state="default"
              content="Qualified Lead"
            />
            <TableCell 
              state="default"
              content="$5M - $25M"
            />
            <TableCell 
              state="default"
              content="12"
            />
            <TableCell 
              state="default"
              content="8.5"
            />
          </div>
          
          <div className="recycles-table-row">
            <TableCell 
              state="title"
              content={{
                name: "Global Finance Corp",
                initials: "GF",
                color: "#16a34a"
              }}
            />
            <TableCell 
              state="default"
              content="02 Sep 2024 11:45 GMT+2"
            />
            <TableCell 
              state="default"
              content="Demo Attended"
            />
            <TableCell 
              state="default"
              content="Financial Services"
            />
            <TableCell 
              state="default"
              content="Opportunity"
            />
            <TableCell 
              state="default"
              content="$25M - $100M"
            />
            <TableCell 
              state="default"
              content="8"
            />
            <TableCell 
              state="default"
              content="7.2"
            />
          </div>
          
          <div className="recycles-table-row">
            <TableCell 
              state="title"
              content={{
                name: "InnovateTech Ltd",
                initials: "IT",
                color: "#dc2626"
              }}
            />
            <TableCell 
              state="default"
              content="18 Jul 2024 09:15 GMT+2"
            />
            <TableCell 
              state="default"
              content="Website Visit"
            />
            <TableCell 
              state="default"
              content="Technology"
            />
            <TableCell 
              state="default"
              content="Cold Lead"
            />
            <TableCell 
              state="default"
              content="$1M - $10M"
            />
            <TableCell 
              state="default"
              content="5"
            />
            <TableCell 
              state="default"
              content="6.8"
            />
          </div>
          
          <div className="recycles-table-row">
            <TableCell 
              state="title"
              content={{
                name: "Healthcare Dynamics",
                initials: "HD",
                color: "#7c3aed"
              }}
            />
            <TableCell 
              state="default"
              content="05 Oct 2024 16:20 GMT+2"
            />
            <TableCell 
              state="default"
              content="Proposal Requested"
            />
            <TableCell 
              state="default"
              content="Healthcare"
            />
            <TableCell 
              state="default"
              content="Negotiation"
            />
            <TableCell 
              state="default"
              content="$10M - $50M"
            />
            <TableCell 
              state="default"
              content="15"
            />
            <TableCell 
              state="default"
              content="9.1"
            />
          </div>
          
          <div className="recycles-table-row">
            <TableCell 
              state="title"
              content={{
                name: "Manufacturing Plus",
                initials: "MP",
                color: "#ea580c"
              }}
            />
            <TableCell 
              state="default"
              content="12 Jun 2024 08:45 GMT+2"
            />
            <TableCell 
              state="default"
              content="Phone Call"
            />
            <TableCell 
              state="default"
              content="Manufacturing"
            />
            <TableCell 
              state="default"
              content="Qualified Lead"
            />
            <TableCell 
              state="default"
              content="$50M - $200M"
            />
            <TableCell 
              state="default"
              content="22"
            />
            <TableCell 
              state="default"
              content="7.9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Prospecting = () => {
  const [activeView, setActiveView] = useState('QLs');
  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    // TODO: Implement search functionality
  };

  const handleEditColumns = () => {
    console.log('Edit columns clicked');
    // TODO: Implement edit columns functionality
  };

  const handleIndustryFilter = () => {
    console.log('Industry filter clicked');
    // TODO: Implement industry filter functionality
  };

  const handleAdvancedFilters = () => {
    console.log('Advanced filters clicked');
    // TODO: Implement advanced filters functionality
  };

  const handleNavigationChange = (selectedItem) => {
    setActiveView(selectedItem);
  };

  const navItems = [
    {
      label: "QLs",
      icon: "🔥",
      badge: "0",
      active: true
    },
    {
      label: "HVQLs",
      badge: "0"
    },
    {
      label: "HINQLs",
      badge: "0"
    },
    {
      label: "Non-QLs",
      icon: "ℹ️",
      badge: "0"
    },
    {
      type: "section",
      label: "Prospects"
    },
    {
      label: "Priority Prospects",
      badge: "0"
    },
    {
      label: "Install Base",
      badge: "0"
    },
    {
      label: "Others",
      icon: "❓",
      badge: "0"
    },
    {
      type: "section",
      label: "Recycling"
    },
    {
      label: "Recommended Recycles",
      icon: "♻️",
      badge: "24"
    }
  ];

  return (
    <div className="prospecting-container">
      <div className="prospecting-layout">
        <div className="prospecting-sidebar">
          <SubNav 
            title="Prospects"
            navItems={navItems}
            defaultActiveItem="QLs"
            onNavigationChange={handleNavigationChange}
          />
        </div>
        
        <div className="prospecting-main">
          <div className="prospecting-content">
            {activeView === 'Recommended Recycles' ? (
              <RecyclesTableView />
            ) : (
              <>
                {/* Data Wells Section */}
                <div className="prospecting-data-wells-container">
                  <div className="prospecting-data-wells">
                    <DataWell 
                      title="NEW COMPANIES"
                      value="21"
                      subtitle=""
                      tagText=""
                      tagVariant="default"
                    />
                    <DataWell 
                      title="CAPACITY WORKED IN LAST 30 DAYS"
                      value="30%"
                      subtitle=""
                      tagText=""
                      tagVariant="default"
                    />
                    <DataWell 
                      title="MONTHLY TARGET"
                      value="1.5K"
                      subtitle="Gap: 300"
                      tagText=""
                      tagVariant="default"
                    />
                  </div>
                  
                  <div className="prospecting-data-wells">
                    <DataWell 
                      title="CALLS CONNECTED / CALLS MADE"
                      value="110/120"
                      subtitle=""
                      tagText=""
                      tagVariant="default"
                    />
                    <DataWell 
                      title="DEALS CREATED"
                      value="12"
                      subtitle=""
                      tagText=""
                      tagVariant="default"
                    />
                  </div>
                </div>
            <div className="prospecting-header">
              <PageTitle 
                heading="QLs"
                count="60,202,820 leads"
              />
              <div className="prospecting-header__actions">
                <Button 
                  text="Industry (Source of Truth)"
                  icon={
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                  onClick={handleIndustryFilter}
                />
                <Button 
                  text="Advanced filters"
                  icon={
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 3.5H5.5M5.5 3.5C5.5 4.32843 6.17157 5 7 5C7.82843 5 8.5 4.32843 8.5 3.5M5.5 3.5C5.5 2.67157 6.17157 2 7 2C7.82843 2 8.5 2.67157 8.5 3.5M8.5 3.5H12M2 10.5H5.5M5.5 10.5C5.5 11.3284 6.17157 12 7 12C7.82843 12 8.5 11.3284 8.5 10.5M5.5 10.5C5.5 9.67157 6.17157 9 7 9C7.82843 9 8.5 9.67157 8.5 10.5M8.5 10.5H12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  }
                  onClick={handleAdvancedFilters}
                />
              </div>
            </div>
            
           
            
            <TableActions 
              placeholder="Search Companies"
              buttonText="Edit Columns"
              onSearch={handleSearch}
              onEditColumns={handleEditColumns}
            />
            
            <div className="prospecting-table-container">
              <div className="prospecting-table">
                {/* Table Header Row */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="header"
                    content="Contact"
                    sortable={true}
                    sortOrder={null}
                    onSort={() => console.log('Sort by contact')}
                  />
                  <TableCell 
                    state="header"
                    content="Company Name"
                    sortable={true}
                    sortOrder={null}
                    onSort={() => console.log('Sort by company')}
                  />
                  <TableCell 
                    state="header"
                    content="Recent QL Type"
                    sortable={true}
                    sortOrder={null}
                    onSort={() => console.log('Sort by QL type')}
                  />
                  <TableCell 
                    state="header"
                    content="Recent QL Date (GMT+2)"
                    sortable={true}
                    sortOrder={null}
                    onSort={() => console.log('Sort by date')}
                  />
                </div>
                
                {/* Data Row 1 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Keir Walker",
                      initials: "KW"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">Wellness 369</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 2 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Erin Euler",
                      initials: "EE"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">CTC Health LLC</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 3 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Lia Camargo",
                      initials: "LC"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">CTC</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 4 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Chaun Renaud",
                      initials: "CR"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">CTC Health LLC</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 5 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Schalk Willem Holtzhausen",
                      initials: "SH"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">Holtzberg Filters</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 6 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Theresa jean Gonzaga",
                      initials: "TG"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">Global Refund Group</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 7 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Pam Alexander",
                      initials: "PA"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">CTC</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 8 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Heather Donnellan",
                      initials: "HD"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">CTC</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 9 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Gustav Grutzik",
                      initials: "GG"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">woolpert.com</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 10 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Robert Knobb",
                      initials: "RK"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">Concrete Driveway Co.</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 11 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "mariah villavicencio",
                      initials: "MV"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">your company</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 12 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Paul n/a",
                      initials: "PN"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">Company Name</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 13 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Mohamed Massarwa",
                      initials: "MM"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">Massarwa</a>}
                  />
                  <TableCell 
                    state="default"
                    content="Demo"
                  />
                  <TableCell 
                    state="default"
                    content={
                      <div>
                        <div className="prospecting-table-date">2 June 2023</div>
                        <div className="prospecting-table-time">17:20</div>
                      </div>
                    }
                  />
                </div>
                
                {/* Data Row 14 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Anabela Viola",
                      initials: "AV"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">Sap sanatorio adventista del plata</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 15 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Dumont Williams",
                      initials: "DW"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">Duval Productions</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
                
                {/* Data Row 16 */}
                <div className="prospecting-table-row">
                  <div className="prospecting-checkbox-cell">
                    <input type="checkbox" className="prospecting-table-checkbox" />
                  </div>
                  <TableCell 
                    state="title"
                    content={{
                      name: "Judy Jordan",
                      initials: "JJ"
                    }}
                  />
                  <TableCell 
                    state="default"
                    content={<a href="#" className="prospecting-table-company-link">nobocorp.com</a>}
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                  <TableCell 
                    state="default"
                    content="--"
                  />
                </div>
              </div>
            </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prospecting;
