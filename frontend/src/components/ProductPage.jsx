import React, { useEffect } from 'react';
import './ProductPage.css';
import { Container, Row, Col, Card, Button, Tab, Tabs, Carousel } from 'react-bootstrap';
import FAQSection from './FAQSection';

const ProductPage = () => {
    

    return (
        <Container className="product-page" style={{ marginTop: '8%' }}>
            {/* Header Section */}
            <Row className="header-section animate-fade-in">
                <Col className='header-div'>
                    <h1 className="text-center mb-4">Stock Predictor Pro</h1>
                    <p className="lead text-center">
                        AI-powered stock market predictions with 85%+ accuracy
                    </p>
                    <div className="text-center mt-4 header-btn">
                        <Button variant="primary" size="lg" className="me-3 pulse-animation">Start Free Trial</Button>
                        <Button variant="outline-primary" size="lg">Live Demo</Button>
                    </div>
                </Col>
            </Row>

            {/* Benefits Carousel */}
            <Row className="benefits-section my-5 animate-slide-up">
                <Col>
                    <h2 className="text-center mb-5">Why Traders Choose Us</h2>
                    <Carousel fade indicators={false} className="benefits-carousel">
                        <Carousel.Item>
                            <div className="carousel-content">
                                <img
                                    src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg"
                                    alt="Stock market dashboard"
                                />
                                <div className="carousel-caption">
                                    <h3>Real-time Market Intelligence</h3>
                                    <p>Get instant insights with our AI-powered analytics dashboard</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-content">
                                <img
                                    src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg"
                                    alt="Data analysis"
                                />
                                <div className="carousel-caption">
                                    <h3>Advanced Predictive Analytics</h3>
                                    <p>Our algorithms analyze thousands of data points for accurate forecasts</p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-content">
                                <img
                                    src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg"
                                    alt="Financial growth"
                                />
                                <div className="carousel-caption">
                                    <h3>Portfolio Optimization</h3>
                                    <p>Maximize returns with personalized investment recommendations</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            {/* Features Section */}
            <Row className="features-section my-5 animate-slide-up">
                <Col md={4} className="mb-4">
                    <Card className="h-100 feature-card">
                        <Card.Body>
                            <div className="feature-icon mb-3">📈</div>
                            <Card.Title>AI Predictions</Card.Title>
                            <Card.Text>
                                Our machine learning models analyze historical patterns to forecast price movements with 85% accuracy.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 feature-card">
                        <Card.Body>
                            <div className="feature-icon mb-3">🔍</div>
                            <Card.Title>Technical Scanner</Card.Title>
                            <Card.Text>
                                Automatic detection of chart patterns, candlestick formations, and key support/resistance levels.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="h-100 feature-card">
                        <Card.Body>
                            <div className="feature-icon mb-3">📱</div>
                            <Card.Title>Mobile Alerts</Card.Title>
                            <Card.Text>
                                Get instant push notifications when our AI detects trading opportunities matching your criteria.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Trading Tools Section */}
            <Row className="tools-section py-5 my-5">
                <Col lg={6} className="mb-4 mb-lg-0 image-animate">
                    <div className="image-container">
                        <img
                            src="https://img.freepik.com/premium-photo/web-page-united-states-america_1020495-459670.jpg"
                            alt="Trading platform interface"
                            className="img-fluid rounded-lg shadow-lg tool-image"
                        />
                    </div>
                </Col>
                <Col lg={6} className="content-animate">
                    <h2 className="mb-4">Professional Trading Tools</h2>
                    <ul className="tools-list list-unstyled">
                        <li className="tool-item ">
                            <div className="tool-content">
                                <h5>Real-time Data</h5>
                                <p>Millisecond updates from global markets with institutional-grade reliability</p>
                            </div>
                        </li>
                        <li className="tool-item">
                            <div className="tool-content">
                                <h5>Sentiment Analysis</h5>
                                <p>AI-powered news and social media monitoring to gauge market mood</p>
                            </div>
                        </li>
                        <li className="tool-item">
                            <div className="tool-content">
                                <h5>Backtesting Suite</h5>
                                <p>Test strategies against 20+ years of historical market data</p>
                            </div>
                        </li>
                    </ul>
                    <Button variant="outline-primary" className=" tool-button">Explore All Features</Button>
                </Col>
            </Row>

            {/* Pricing Section */}
            <Row className="pricing-section my-5 animate-slide-up">
                <Col>
                    <h2 className="text-center mb-5">Choose Your Plan</h2>
                    <Row>
                        <Col lg={4} className="mb-4">
                            <Card className="h-100 pricing-card">
                                <Card.Body>
                                    <Card.Title className="text-center">Starter</Card.Title>
                                    <div className="price text-center">$29<span>/month</span></div>
                                    <ul className="features-list">
                                        <li>10 daily stock predictions</li>
                                        <li>Basic technical indicators</li>
                                        <li>Email alerts</li>
                                        <li>1 year historical data</li>
                                    </ul>
                                    <Button variant="outline-primary" className="w-100">Get Started</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className="mb-4">
                            <Card className="h-100 pricing-card popular">
                                <Card.Body>
                                    <div className="popular-badge">Most Popular</div>
                                    <Card.Title className="text-center">Professional</Card.Title>
                                    <div className="price text-center">$99<span>/month</span></div>
                                    <ul className="features-list">
                                        <li>Unlimited predictions</li>
                                        <li>Advanced analytics</li>
                                        <li>Real-time push alerts</li>
                                        <li>5 years historical data</li>
                                        <li>Portfolio tracking</li>
                                    </ul>
                                    <Button variant="primary" className="w-100 pulse-animation">Get Started</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} className="mb-4">
                            <Card className="h-100 pricing-card">
                                <Card.Body>
                                    <Card.Title className="text-center">Institutional</Card.Title>
                                    <div className="price text-center">$299<span>/month</span></div>
                                    <ul className="features-list">
                                        <li>All Pro features</li>
                                        <li>API access</li>
                                        <li>Custom models</li>
                                        <li>20+ years data</li>
                                        <li>Dedicated support</li>
                                    </ul>
                                    <Button variant="outline-primary" className="w-100">Contact Sales</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Testimonials */}
            <Row className="testimonials-section my-5 animate-fade-in">
                <Col>
                    <h2 className="text-center mb-5">Trusted by Thousands of Traders</h2>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 testimonial-card">
                                <Card.Body>
                                    <div className="rating mb-2">★★★★★</div>
                                    <Card.Text>
                                        "The prediction accuracy is unmatched. My portfolio grew 47% in 6 months using their signals."
                                    </Card.Text>
                                    <div className="user-info">
                                        <img
                                            src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg"
                                            alt="User"
                                            className="user-avatar"
                                        />
                                        <div>
                                            <strong>Michael Rodriguez</strong>
                                            <small>Day Trader</small>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 testimonial-card">
                                <Card.Body>
                                    <div className="rating mb-2">★★★★★</div>
                                    <Card.Text>
                                        "As a hedge fund analyst, I appreciate the institutional-grade tools at a fraction of the cost."
                                    </Card.Text>
                                    <div className="user-info">
                                        <img
                                            src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
                                            alt="User"
                                            className="user-avatar"
                                        />
                                        <div>
                                            <strong>Sarah Chen</strong>
                                            <small>Fund Manager</small>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="h-100 testimonial-card">
                                <Card.Body>
                                    <div className="rating mb-2">★★★★☆</div>
                                    <Card.Text>
                                        "The educational resources helped me transition from beginner to profitable trader in 3 months."
                                    </Card.Text>
                                    <div className="user-info">
                                        <img
                                            src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
                                            alt="User"
                                            className="user-avatar"
                                        />
                                        <div>
                                            <strong>David Wilson</strong>
                                            <small>Retail Investor</small>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Final CTA */}
            <Row className="final-cta pt-5 mt-5 animate-fade-in">
                <Col className="text-center dta-div">
                    <h2 className="mb-4">Start Predicting Market Moves Today</h2>
                    <p className="lead mb-4">Join 25,000+ traders who trust our AI signals</p>
                    <Button variant="primary" size="lg" className="pulse-animation">Get 7-Day Free Trial</Button>
                </Col>
            </Row>
            <FAQSection/>
        </Container>
    );
};

export default ProductPage;