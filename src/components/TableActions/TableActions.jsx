import React from 'react';
import './TableActions.css';

const TableActions = ({ 
  placeholder = "Search Companies", 
  buttonText = "Edit Columns",
  onSearch,
  onEditColumns 
}) => {
  const handleInputChange = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleEditColumns = () => {
    if (onEditColumns) {
      onEditColumns();
    }
  };

  return (
    <div className="table-actions">
      <div className="table-actions__input-container">
        <input 
          type="text" 
          placeholder={placeholder} 
          className="table-actions__input" 
          onChange={handleInputChange}
        />
        <div className="table-actions__controls">
          <svg className="table-actions__icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.5 11.5C9.26142 11.5 11.5 9.26142 11.5 6.5C11.5 3.73858 9.26142 1.5 6.5 1.5C3.73858 1.5 1.5 3.73858 1.5 6.5C1.5 9.26142 3.73858 11.5 6.5 11.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.5 12.5L10.5 10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <button className="table-actions__button" onClick={handleEditColumns}>
        {buttonText}
      </button>
    </div>
  );
};

export default TableActions; 