import React from 'react';

const Cards = () => {
  const cardData = [
    {
      title: 'Plain Shirt',
      image: '/images/shirt.jpg',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: 'Stylish Jacket',
      image: '/images/joes-valentine-qyQJU0zKiXk-unsplash.jpg', // Use your image path
      description: "An elegant jacket perfect for chilly weather."
    },
    {
      title: 'Casual T-Shirt',
      image: '/images/photo-1620799140408-edc6dcb6d633.jpg', // Use your image path
      description: "A comfortable t-shirt for everyday wear."
    },
    {
        title: 'Casual T-Shirt',
        image: '/images/photo-1620799140408-edc6dcb6d633.jpg', // Use your image path
        description: "A comfortable t-shirt for everyday wear."
      },
      {
        title: 'Casual T-Shirt',
        image: '/images/photo-1620799140408-edc6dcb6d633.jpg', // Use your image path
        description: "A comfortable t-shirt for everyday wear."
      },
      {
        title: 'Casual T-Shirt',
        image: '/images/photo-1620799140408-edc6dcb6d633.jpg', // Use your image path
        description: "A comfortable t-shirt for everyday wear."
      }
  ];

  return (
    <div className="card-container" style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem' }}>
      {cardData.map((card, index) => (
        <div key={index} className="card" style={{ width: '18rem', margin: '1rem', overflow: 'hidden' }}>
          <img src={card.image} className="card-img-top" alt={card.title} />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.description}</p>
            <button className="btn btn-dark">Add To Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
