import React from 'react';

const Button = ({ icon, children, ...props }) => (
  <a className="tbm-button" {...props} target="_blank">
    {icon && (
      <span
        className="tbm-button-icon"
        dangerouslySetInnerHTML={{ __html: atob(icon.replace(/data:image\/svg\+xml;base64,/, '')) }}
      />
    )}
    <span className="tbm-button-text">{children}</span>
  </a>
);

export default Button;
