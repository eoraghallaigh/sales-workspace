import React, { useState } from 'react';
import './SubNav.css';

const SubNav = ({ 
  title = 'Navigation', 
  count, 
  navItems = [], 
  defaultActiveItem 
}) => {
  const [activeItem, setActiveItem] = useState(defaultActiveItem || (navItems.find(item => item.active)?.label) || '');

  const handleItemClick = (item) => {
    if (item.type !== 'section') {
      setActiveItem(item.label);
    }
  };

  return (
    <div className="sub-nav">
      <div className="sub-nav__content">
        {/* Title section with collapse button */}
        <div className="sub-nav__header">
          <div className="sub-nav__title-section">
            <h2 className="sub-nav__title">{title}</h2>
            {count && <div className="sub-nav__count">{count}</div>}
          </div>
          <button className="sub-nav__collapse-btn">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4662 1.5C10.4662 1.5 10.5 1.515 10.5 1.53375V10.47C10.5 10.47 10.485 10.5038 10.4662 10.5038H1.53375C1.53375 10.5038 1.5 10.4888 1.5 10.47V1.53375C1.5 1.53375 1.515 1.5 1.53375 1.5H10.47M10.47 0.75H1.53375C1.1025 0.75 0.75 1.09875 0.75 1.53375V10.47C0.75 10.9013 1.09875 11.2538 1.53375 11.2538H10.47C10.9013 11.2538 11.2538 10.905 11.2538 10.47V1.53375C11.2538 1.1025 10.905 0.75 10.47 0.75ZM7.38375 8.15625L5.0775 5.98125L7.3425 3.84375C7.53 3.66375 7.54125 3.3675 7.36125 3.18C7.185 2.9925 6.88875 2.985 6.70125 3.16125L4.07625 5.63625C3.88875 5.80875 3.8775 6.10125 4.05 6.28875C4.05375 6.29625 4.0575 6.3 4.065 6.3075C4.08 6.32625 4.095 6.345 4.11375 6.36375L6.73875 8.83875C6.82875 8.92125 6.945 8.96625 7.06125 8.96625C7.185 8.96625 7.30875 8.91375 7.4025 8.81625C7.57875 8.62875 7.57125 8.3325 7.38375 8.15625Z" fill="#7C98B6"/>
</svg>

          </button>
        </div>

        {/* Navigation items */}
        <div className="sub-nav__items">
          {navItems.map((item, index) => {
            if (item.type === 'section') {
              return (
                <div key={`section-${index}`} className="sub-nav__section-title">
                  {item.label}
                </div>
              );
            }
            
            return (
              <div
                key={item.label}
                className={`sub-nav__item ${
                  activeItem === item.label ? 'sub-nav__item--active' : ''
                }`}
                onClick={() => handleItemClick(item)}
              >
                <div className="sub-nav__item-content">
                  {item.icon && <span className="sub-nav__item-icon">{item.icon}</span>}
                  <span className="sub-nav__item-text">{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="sub-nav__item-badge">{item.badge}</span>
                  )}
                  {activeItem === item.label && <div className="sub-nav__item-indicator" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubNav; 