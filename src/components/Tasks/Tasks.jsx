import React from 'react';
import './Tasks.css';
import SubNav from '../SubNav/SubNav';
import Button from '../Button/Button';
import PageTitle from '../PageTitle/PageTitle';

const Tasks = () => {

  const navItems = [
    {
      label: "Due today",
      active: true
    },
    {
      label: "Overdue"
    },
    {
      label: "Upcoming"
    },
    {
      label: "Most engaged"
    },
    {
      label: "Completed"
    },
    {
      label: "All"
    }
  ];

  return (
    <div className="tasks-container">
      <div className="tasks-layout">
        <div className="tasks-sidebar">
          <SubNav 
            title="Tasks"
            navItems={navItems}
            defaultActiveItem="Due today"
          />
          <div className="tasks-sidebar-footer">
            <button className="tasks-create-view-button">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Create view
            </button>
            <div className="tasks-sidebar-section">
              <h4 className="tasks-sidebar-section-title">Saved views</h4>
              <button className="tasks-sidebar-section-toggle">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="tasks-main">
          <div className="tasks-content">
                        <div className="tasks-header">
              <PageTitle heading="Due today" />
              <div className="tasks-header-actions">
                <Button variant="primary">
                  Create Task
                </Button>
              </div>
            </div>
            
            {/* Empty State */}
            <div className="tasks-empty-state">
              <div className="tasks-empty-state-content">
                <div className="tasks-empty-state-icon">
                  <svg width="147" height="134" viewBox="0 0 147 134" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <path d="M2.143 94.537c-2.858-1.65-2.858-4.35 0-6l66.1-38.163c2.858-1.65 7.534-1.65 10.392 0l66.101 38.163c2.858 1.65 2.858 4.35 0 6l-66.1 38.163c-2.859 1.65-7.535 1.65-10.393 0l-66.1-38.162z" fill="#EAF0F6" fillOpacity=".75"/>
                      <path d="M94.611 80.446c11.065 6.39 11.065 16.843 0 23.231-11.065 6.39-29.172 6.39-40.238 0-11.065-6.388-11.065-16.842 0-23.23 11.066-6.39 29.173-6.39 40.238 0" fill="#FFF"/>
                      <path d="M82.974 42.77c-5.498 1.128-11.537 1.124-17.03-.013L46.688 88.68h.007c1.089-3.023 3.637-5.9 7.679-8.233 11.065-6.39 29.172-6.39 40.237 0 2.902 1.674 5.02 3.632 6.4 5.719L82.975 42.77z" fill="#FFF"/>
                      <path d="M92.296 32.687c9.792-5.653 9.792-14.905 0-20.558-9.792-5.653-25.815-5.653-35.607 0-9.792 5.653-9.793 14.905 0 20.558 9.792 5.653 25.815 5.653 35.607 0z" stroke="#CBD6E5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M87.338 30.07c7.3-4.214 7.3-11.11 0-15.325s-19.244-4.215-26.544 0c-7.3 4.214-7.3 11.111 0 15.325 7.3 4.214 19.244 4.214 26.544 0z" stroke="#CBD6E5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M92.296 32.687c-9.792 5.653-25.815 5.653-35.607 0-4.896-2.827-7.344-6.553-7.344-10.28v6.703c0 3.726 2.448 7.452 7.344 10.279 9.792 5.653 25.815 5.653 35.607 0 4.896-2.827 7.344-6.553 7.344-10.28v-6.701c0 3.726-2.448 7.452-7.344 10.279z" stroke="#CBD6E5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M100.274 42.398l3.987-6.33-7.217-4.818-.011-.008-.004-.002v.001c-.481-.273-1.14-.234-1.867.185-1.46.843-2.654 2.912-2.654 4.598 0 .801.275 1.368.715 1.661l-.003.006.056.038.018.011 6.98 4.658z" stroke="#CBD6E5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M119.293 42.398l-14.095-8.168c-.745-.432-1.772-.374-2.904.28-2.259 1.303-4.107 4.505-4.107 7.113 0 1.32.475 2.241 1.235 2.664l-.002.004 14.179 8.201" stroke="#CBD6E5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M120.635 45.115c0-2.609-1.848-3.676-4.107-2.37-2.26 1.303-4.108 4.504-4.108 7.113 0 2.608 1.848 3.676 4.108 2.371 2.26-1.304 4.107-4.505 4.107-7.114zM74.333 12.076c-3.027 1.608-5.823 3.647-8.256 6.062-2.93 2.909-5.318 6.35-7.064 10.092.601.496 1.271.97 2.03 1.408 3.03 1.748 6.86 2.749 10.812 3.023 1.165-3.821 2.893-7.457 5.26-10.67 2.245-3.048 5.088-5.688 8.321-7.65-3.252-1.476-7.168-2.232-11.103-2.265z" stroke="#CBD6E5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M87.55 15.472c-3.979 1.873-7.243 5.108-9.606 8.83-1.669 2.63-2.918 5.49-3.927 8.443 1.232.002 2.462-.07 3.674-.208 1.76-3.001 3.973-6.521 5.967-8.772 1.998-2.255 4.375-4.226 7.071-5.545-.784-.996-1.852-1.922-3.179-2.748z" stroke="#CBD6E5" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M92.296 32.687c9.792-5.653 9.792-14.905 0-20.558-9.792-5.653-25.815-5.653-35.607 0-9.792 5.653-9.793 14.905 0 20.558 9.792 5.653 25.815 5.653 35.607 0" fill="#FFF"/>
                      <path d="M92.296 32.687c9.792-5.653 9.792-14.905 0-20.558-9.792-5.653-25.815-5.653-35.607 0-9.792 5.653-9.793 14.905 0 20.558 9.792 5.653 25.815 5.653 35.607 0z" stroke="#CBD6E5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M87.338 30.07c7.3-4.214 7.3-11.11 0-15.325s-19.244-4.215-26.544 0c-7.3 4.214-7.3 11.111 0 15.325 7.3 4.214 19.244 4.214 26.544 0" fill="#F2F5F8"/>
                      <path d="M87.338 30.07c7.3-4.214 7.3-11.11 0-15.325s-19.244-4.215-26.544 0c-7.3 4.214-7.3 11.111 0 15.325 7.3 4.214 19.244 4.214 26.544 0z" stroke="#CBD6E5"/>
                      <path d="M92.296 32.687c-9.792 5.653-25.815 5.653-35.607 0-4.896-2.827-7.344-6.553-7.344-10.28v6.703c0 3.726 2.448 7.452 7.344 10.279 9.792 5.653 25.815 5.653 35.607 0 4.896-2.827 7.344-6.553 7.344-10.28v-6.701c0 3.726-2.448 7.452-7.344 10.279" fill="#F2F5F8"/>
                      <path d="M92.296 32.687c-9.792 5.653-25.815 5.653-35.607 0-4.896-2.827-7.344-6.553-7.344-10.28v6.703c0 3.726 2.448 7.452 7.344 10.279 9.792 5.653 25.815 5.653 35.607 0 4.896-2.827 7.344-6.553 7.344-10.28v-6.701c0 3.726-2.448 7.452-7.344 10.279z" stroke="#CBD6E5"/>
                      <path d="M100.274 42.398l3.987-6.33-7.217-4.818-.011-.008-.004-.002v.001c-.481-.273-1.14-.234-1.867.185-1.46.843-2.654 2.912-2.654 4.598 0 .801.275 1.368.715 1.661l-.003.006.056.038.018.011 6.98 4.658z" fill="#FFF"/>
                      <path d="M100.274 42.398l3.987-6.33-7.217-4.818-.011-.008-.004-.002v.001c-.481-.273-1.14-.234-1.867.185-1.46.843-2.654 2.912-2.654 4.598 0 .801.275 1.368.715 1.661l-.003.006.056.038.018.011 6.98 4.658z" stroke="#CBD6E5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M119.293 42.398l-14.095-8.168c-.745-.432-1.772-.374-2.904.28-2.259 1.303-4.107 4.505-4.107 7.113 0 1.32.475 2.241 1.235 2.664l-.002.004 14.179 8.201" fill="#F2F5F8"/>
                      <path d="M119.293 42.398l-14.095-8.168c-.745-.432-1.772-.374-2.904.28-2.259 1.303-4.107 4.505-4.107 7.113 0 1.32.475 2.241 1.235 2.664l-.002.004 14.179 8.201" stroke="#CBD6E5"/>
                      <path d="M120.635 45.115c0-2.609-1.848-3.676-4.107-2.37-2.26 1.303-4.108 4.504-4.108 7.113 0 2.608 1.848 3.676 4.108 2.371 2.26-1.304 4.107-4.505 4.107-7.114" fill="#F2F5F8"/>
                      <path d="M120.635 45.115c0-2.609-1.848-3.676-4.107-2.37-2.26 1.303-4.108 4.504-4.108 7.113 0 2.608 1.848 3.676 4.108 2.371 2.26-1.304 4.107-4.505 4.107-7.114z" stroke="#CBD6E5"/>
                      <path d="M74.333 12.076c-3.027 1.608-5.823 3.647-8.256 6.062-2.93 2.909-5.318 6.35-7.064 10.092.601.496 1.271.97 2.03 1.408 3.03 1.748 6.86 2.749 10.812 3.023 1.165-3.821 2.893-7.457 5.26-10.67 2.245-3.048 5.088-5.688 8.321-7.65-3.252-1.476-7.168-2.232-11.103-2.265" fill="#FFF"/>
                      <path d="M87.55 15.472c-3.979 1.873-7.243 5.108-9.606 8.83-1.669 2.63-2.918 5.49-3.927 8.443 1.232.002 2.462-.07 3.674-.208 1.76-3.001 3.973-6.521 5.967-8.772 1.998-2.255 4.375-4.226 7.071-5.545-.784-.996-1.852-1.922-3.179-2.748" fill="#FFF"/>
                      <path d="M101.012 86.166L82.974 42.77c-5.499 1.127-11.537 1.123-17.031-.014L46.687 88.679h.007" stroke="#CBD6E5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2,3,0,0"/>
                      <path d="M94.611 80.446c11.065 6.39 11.065 16.843 0 23.231-11.065 6.39-29.172 6.39-40.238 0-11.065-6.388-11.065-16.842 0-23.23 11.066-6.39 29.173-6.39 40.238 0z" stroke="#CBD6E5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2,3,0,0"/>
                      <path d="M121.68 10.236l-11.902 4.361M115.666 23.734l-5.239-2.47M119 25.306l-.753-.356M106.763 7.402l-.803 1.704M109.781 1l-1.81 3.84" stroke="#CBD6E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg>
                </div>
                <div className="tasks-empty-state-text">
                  <h3 className="tasks-empty-state-title">No tasks match the current filters</h3>
                  <p className="tasks-empty-state-description">
                    Expecting to see new tasks? Try again in a few seconds as the system catches up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks; 