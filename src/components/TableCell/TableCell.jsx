import React from 'react';
import './TableCell.css';

const TableCell = ({ 
  state = 'default', 
  content, 
  sortable = false, 
  sortOrder = null,
  onSort = null,
  width = 'auto',
  ...props 
}) => {
  const handleSort = () => {
    if (sortable && onSort) {
      onSort();
    }
  };

  const renderContent = () => {
    switch (state) {
      case 'title':
        return (
          <div className="table-cell__content table-cell__content--title">
            <div className="table-cell__prefix">
              <div className="table-cell__avatar">
                {content.logo ? (
                  <img 
                    src={content.logo} 
                    alt={`${content.name} logo`}
                    className="table-cell__avatar-image"
                    onError={(e) => {
                      // If image fails to load, replace with colored div
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className="table-cell__avatar-fallback"
                  style={{ 
                    backgroundColor: content.color || '#2563eb',
                    display: content.logo ? 'none' : 'flex'
                  }}
                >
                  {content.initials || content.name?.charAt(0) || '?'}
                </div>
              </div>
            </div>
            <div className="table-cell__text-content">
              <div className="table-cell__link">
                {content.name}
              </div>
            </div>
          </div>
        );
      
      case 'header':
        return (
          <div 
            className={`table-cell__content table-cell__content--header ${sortable ? 'table-cell__content--sortable' : ''}`}
            onClick={handleSort}
          >
            <div className="table-cell__header-text">
              {content}
            </div>
            {sortable && (
              <div className="table-cell__sort">
                <div className={`table-cell__sort-arrow table-cell__sort-arrow--up ${sortOrder === 'asc' ? 'table-cell__sort-arrow--active' : ''}`}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 1.5L1 4.5H7L4 1.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={`table-cell__sort-arrow table-cell__sort-arrow--down ${sortOrder === 'desc' ? 'table-cell__sort-arrow--active' : ''}`}>
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6.5L7 3.5H1L4 6.5Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'default':
      default:
        return (
          <div className="table-cell__content table-cell__content--default">
            <div className="table-cell__text-content">
              <div className="table-cell__text">
                {content}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className={`table-cell table-cell--${state}`}
      style={{ width }}
      {...props}
    >
      <div className="table-cell__border" />
      <div className="table-cell__inner">
        {renderContent()}
      </div>
    </div>
  );
};

export default TableCell; 