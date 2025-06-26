import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
            title: 'AI-Powered Stock Analysis',
            description: 'Leverage advanced machine learning algorithms to analyze market trends and predict stock movements with unprecedented accuracy. Our AI processes millions of data points to give you the edge in trading.'
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/4960464/pexels-photo-4960464.jpeg',
            title: 'Real-Time Market Insights',
            description: 'Get instant access to live market data, breaking news, and real-time analysis that helps you make informed investment decisions. Stay ahead of market movements with our comprehensive dashboard.'
        },
        {
            id: 3,
            image: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg',
            title: 'Portfolio Optimization',
            description: 'Maximize your returns with our intelligent portfolio management system. Our algorithms analyze risk factors and optimize your investments for better performance and reduced volatility.'
        },
        {
            id: 4,
            image: 'https://images.pexels.com/photos/5561913/pexels-photo-5561913.jpeg',
            title: 'Advanced Risk Management',
            description: 'Protect your investments with sophisticated risk assessment tools. Our platform identifies potential threats and provides strategies to minimize losses while maximizing growth opportunities.'
        },
        {
            id: 5,
            image: 'https://images.pexels.com/photos/5716016/pexels-photo-5716016.jpeg',
            title: 'Expert Trading Signals',
            description: 'Receive actionable trading signals backed by comprehensive market analysis. Our expert system identifies high-probability trading opportunities and sends alerts directly to your device.'
        }
    ];

    useEffect(() => {
        if (isPaused) return;

        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2500);

        return () => clearTimeout(timer);
    }, [currentSlide, isPaused, slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <section className="hero-section" id="hero">
            <div className="carousel-container">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >

                        <div className="slide-content">
                            <div className="slide-image-container">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="slide-image"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/1600x900/333/fff?text=Finance+Image';
                                    }}
                                />
                                <div className="slide-overlay"></div>
                            </div>
                            <div className="content-wrapper">
                                <h1 className="slide-title">{slide.title}</h1>
                                <p className="slide-description">{slide.description}</p>
                                <div className="slide-actions">
                                    <Link className="btn-primary" to="/register">Get Started</Link>
                                    <button className="btn-secondary">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
                {/* <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{
                            width: `${((currentSlide + 1) / slides.length) * 100}%`,
                            animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                    />
                </div> */}
            </div>
        </section>
    );
};

export default Hero;