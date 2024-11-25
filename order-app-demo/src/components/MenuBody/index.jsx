import React from 'react';

const Container = ({ title, children, className = '', style = {} }) => {
  return (
    <div className={`container ${className}`} style={style}>
      {title && <h2 className="container-title">{title}</h2>}
      <div className="container-content">{children}</div>
    </div>
  );
};

export default Container;
