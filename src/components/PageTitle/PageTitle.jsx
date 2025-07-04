import React from 'react';
import './PageTitle.css';

const PageTitle = ({ 
  heading, 
  count, 
  description 
}) => {
  return (
    <div className="page-title">
      <div className="page-title__title">
        <h1 className="page-title__heading">{heading}</h1>
      </div>
      <div className="page-title__count">{count}</div>
      {description && (
        <div className="page-title__description">
          {description}
        </div>
      )}
    </div>
  );
};

export default PageTitle; 