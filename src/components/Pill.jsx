import React from 'react';
import './Pill.css';

/** Groups related, read-only content inside a compact rounded surface. */
export function Pill({ children, size = 'md', className = '', ...props }) {
  return (
    <span {...props} className={`atlas-pill atlas-pill--${size} ${className}`.trim()}>
      {children}
    </span>
  );
}
