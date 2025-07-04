import React from 'react';
import './Button.css';

const Button = ({ 
  children,
  text,
  icon,
  onClick,
  disabled = false,
  variant = 'default',
  ...props 
}) => {
  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  // Use children if provided, otherwise use text prop
  const buttonText = children || text;

  return (
    <button 
      className={`button button--${variant} ${disabled ? 'button--disabled' : ''}`}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {buttonText && <span className="button__text">{buttonText}</span>}
      {icon && (
        <div className="button__icon">
          {icon}
        </div>
      )}
    </button>
  );
};

export default Button; 