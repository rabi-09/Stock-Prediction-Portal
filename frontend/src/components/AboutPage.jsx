import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutPage.css';
import FAQSection from './FAQSection';

const AboutPage = () => {
    return (
        <Container className="about-page">
            {/* Hero Section */}
            <Row className="hero-section align-items-center">
                <Col lg={6} className="hero-content animate-slide-right">
                    <h1>Revolutionizing Stock Market Predictions</h1>
                    <p className="lead">
                        Harnessing the power of AI to deliver accurate, actionable market insights
                    </p>
                </Col>
                <Col lg={6} className="hero-image animate-slide-left">
                    <div className="hero-image-wrapper">
                        <img
                            src="https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg"
                            alt="Stock market analytics"
                            className="img-fluid rounded"
                        />
                    </div>
                </Col>
            </Row>

            {/* Mission Section */}
            <Row className="mission-section my-5 py-5">
                <Col className="text-center">
                    <div className="mission-card animate-fade-in">
                        <h2>Our Mission</h2>
                        <p>
                            To democratize access to institutional-grade market analysis tools,
                            empowering traders of all levels with AI-driven insights previously
                            available only to hedge funds and financial institutions.
                        </p>
                    </div>
                </Col>
            </Row>

            {/* Team Section */}
            <Row className="team-section">
                <Col>
                    <h2 className="text-center mb-5">Meet Our Experts</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card className="team-card animate-card">
                                <div className="card-image">
                                    <img
                                        src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
                                        alt="Financial Analyst"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>Sarah Chen</Card.Title>
                                    <Card.Subtitle className="mb-3 teamcard-subtitle">Chief Data Scientist</Card.Subtitle>
                                    <Card.Text className='teamcard-text'>
                                        12+ years in quantitative finance and machine learning
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="team-card animate-card">
                                <div className="card-image">
                                    <img
                                        src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
                                        alt="Market Strategist"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>David Wilson</Card.Title>
                                    <Card.Subtitle className="mb-3 teamcard-subtitle teamcard-subtitle">Head of Trading Strategy</Card.Subtitle>
                                    <Card.Text className='teamcard-text'>
                                        Former hedge fund manager with $2B+ AUM experience
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="team-card animate-card">
                                <div className="card-image">
                                    <img
                                        src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg"
                                        alt="AI Engineer"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title>Michael Rodriguez</Card.Title>
                                    <Card.Subtitle className="mb-3 teamcard-subtitle">AI Research Lead</Card.Subtitle>
                                    <Card.Text className='teamcard-text'>
                                        PhD in Machine Learning from Stanford University
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Technology Section */}
            <Row className="tech-section my-5 py-5">
                <Col lg={6} className="tech-image animate-fade-in">
                    <img
                        src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg"
                        alt="AI Technology"
                        className="img-fluid rounded-lg tech-img"
                    />
                </Col>
                <Col lg={6} className="tech-content">
                    <div className="tech-card animate-slide-up">
                        <h2>Cutting-Edge Technology</h2>
                        <ul className="tech-list">
                            <li>
                                <span className="tech-icon">🤖</span>
                                <div>
                                    <h5>Deep Learning Models</h5>
                                    <p>Neural networks trained on decades of market data</p>
                                </div>
                            </li>
                            <li>
                                <span className="tech-icon">📊</span>
                                <div>
                                    <h5>Real-time Analytics</h5>
                                    <p>Processing millions of data points per second</p>
                                </div>
                            </li>
                            <li>
                                <span className="tech-icon">🔍</span>
                                <div>
                                    <h5>Sentiment Analysis</h5>
                                    <p>Natural language processing for news and social media</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>

            {/* Stats Section */}
            <Row className="stats-section py-5">
                <Col className="text-center">
                    <h2 className="mb-5">By The Numbers</h2>
                    <Row>
                        <Col md={3} className="mb-4">
                            <div className="stat-card animate-stat">
                                <div className="stat-value">85%</div>
                                <div className="stat-label">Prediction Accuracy</div>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="stat-card animate-stat">
                                <div className="stat-value">10M+</div>
                                <div className="stat-label">Daily Predictions</div>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="stat-card animate-stat">
                                <div className="stat-value">24/7</div>
                                <div className="stat-label">Market Coverage</div>
                            </div>
                        </Col>
                        <Col md={3} className="mb-4">
                            <div className="stat-card animate-stat">
                                <div className="stat-value">50K+</div>
                                <div className="stat-label">Active Traders</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <FAQSection/>
        </Container>
    );
};

export default AboutPage;