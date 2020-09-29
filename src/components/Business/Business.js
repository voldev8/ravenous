import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    const { business } = this.props;
    return (
      <div className="Business">
        <div className="image-container">
          <a href={business.url} target="_blank" rel="noopener noreferrer">
            <img src={business.imageSrc} alt="" />
          </a>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <a
            className="Business-address"
            href={
              'https://www.google.com/maps/place/' +
              business.address.replace('/', '%2F') +
              ',' +
              business.city +
              ',' +
              business.state +
              ' ' +
              business.zipCode
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>
              {business.state} {business.zipCode}
            </p>
          </a>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating}</h3>
            <p>{business.reviewCount}</p>
            <p className="price">{business.price || '-'}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
