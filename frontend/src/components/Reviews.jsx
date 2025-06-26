import React, { useState, useEffect } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedCards, setLoadedCards] = useState([]);

  const cardStyle = {
    color: '#000000',
    backgroundColor: 'transparent',
  };

  const reviewers = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Equity Trader',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      review:
        'The stock predictions are spot on! Helped me make confident trades every morning. Highly recommend this app to serious traders.',
    },
    {
      id: 2,
      name: 'Sneha Patel',
      role: 'Crypto Investor',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      review:
        'I love how accurate the crypto trend analysis is. I\'ve improved my portfolio returns significantly with the insights.',
    },
    {
      id: 3,
      name: 'Amit Verma',
      role: 'Options Trader',
      image: 'https://randomuser.me/api/portraits/men/66.jpg',
      review:
        'Impressed with the option strike price forecasts. Saved me from bad trades multiple times. The UI is clean and simple too.',
    },
    {
      id: 4,
      name: 'Priya Singh',
      role: 'Long-term Investor',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      review:
        'Perfect for long-term investors. I use the app to cross-check predictions before taking any big positions.',
    },
  ];

  useEffect(() => {
    // Trigger initial animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Stagger card animations
    reviewers.forEach((_, index) => {
      setTimeout(() => {
        setLoadedCards(prev => [...prev, index]);
      }, 300 + index * 200);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="reviews-container">
        <h2 className={`reviews-title ${isVisible ? 'fade-in' : ''}`}>
          What Our Users Say
        </h2>
        <div className="reviews-grid">
          {reviewers.map((reviewer, index) => (
            <ReviewCard
              key={reviewer.id}
              reviewer={reviewer}
              isVisible={loadedCards.includes(index)}
              delay={index * 200}
              cardStyle={cardStyle}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const ReviewCard = ({ reviewer, isVisible, delay, cardStyle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card-wrapper ${isVisible ? 'card-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="flip-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`flip-card-inner ${isHovered ? 'flipped' : ''}`}>
          <div className={`flip-card-front ${isHovered ? 'hovered' : ''}`}>
            <img
              src={reviewer.image}
              alt={reviewer.name}
              className={`profile-img ${isHovered ? 'img-hovered' : ''}`}
            />
            <h3 className="reviewer-name">{reviewer.name}</h3>
            <p className="reviewer-role">{reviewer.role}</p>
            <p className="hover-text">
              <span className="waving-hand" style={cardStyle}>👋</span>
              Hover to read review!
            </p>
          </div>
          <div className="flip-card-back">
            <h4 className="review-title" style={cardStyle}>Review</h4>
            <p className="review-text" style={cardStyle}>{reviewer.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;