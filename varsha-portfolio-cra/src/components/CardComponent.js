import React from 'react';

const CardComponent = ({ title, content, link, linkText }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
    {link && (
      <p><a href={link} target="_blank" rel="noopener noreferrer">{linkText || 'View More'}</a></p>
    )}
  </div>
);

export default CardComponent;
