import React from 'react';
import './Card.scss';

const Card = ({ data }) => {
  const { title, teaser, image } = data;

  return (
    <div className="card">
      <img className="card-image" src={image.fullpath} alt={title} />
      <div className="card-title">{title}</div>
      <div className="card-teaser">{teaser}</div>
    </div>
  );
}

export default Card;