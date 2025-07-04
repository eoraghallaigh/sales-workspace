import React from 'react';
import './Prospecting.css';
import TableCell from '../TableCell/TableCell';
import PageTitle from '../PageTitle/PageTitle';
import SubNav from '../SubNav/SubNav';
import TableActions from '../TableActions/TableActions';
import Button from '../Button/Button';
import DataWell from '../DataWell/DataWell';

const Prospecting = () => {
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
          />
        </div>
        
        <div className="prospecting-main">
          <div className="prospecting-content">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prospecting;
