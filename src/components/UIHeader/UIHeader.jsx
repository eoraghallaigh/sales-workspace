import React from 'react';
import './UIHeader.css';
import Button from '../Button/Button';

const UIHeader = () => {
  return (
    <div className="ui-header">
      <div className="ui-header__content">
        <div className="ui-header__title-section">
          <div className="ui-header__title">
            <h1 className="ui-header__heading">All open companies</h1>
          </div>
          <div className="ui-header__count">124,292 companies</div>
          <div className="ui-header__description">
            All open companies in your territory, with a few basic filters applied to ensure minimum lead quality.
          </div>
        </div>
        
        <div className="ui-header__actions">
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
            text="Open in CRM Index View"
            icon={
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 3.5L3.5 10.5M10.5 3.5H7M10.5 3.5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            onClick={() => console.log('Open in CRM Index View clicked')}
          />
        </div>
      </div>
    </div>
  );
};

export default UIHeader; 