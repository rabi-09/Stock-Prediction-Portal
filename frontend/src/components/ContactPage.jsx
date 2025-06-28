import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './ContactPage.css';
import FAQSection from './FAQSection';

const ContactPage = () => {
    return (
        <Container className="contact-page">
            {/* Hero Section */}
            <Row className="contact-hero align-items-center mb-5">
                <Col lg={6} className="contact-hero-content">
                    <h1>Get In Touch</h1>
                    <p className="lead">
                        Have questions about our stock predictions? Our team is ready to help you maximize your investment strategy.
                    </p>
                </Col>
                <Col lg={6} className="contact-hero-image">
                    <div className="image-wrapper">
                        <img
                            src="https://img.freepik.com/free-photo/cheerful-businessman-sitting-by-table-cafe-with-laptop-computer-talking-by-smartphone-while-waving-looking-away_171337-5560.jpg?semt=ais_items_boosted&w=740"
                            alt="Contact us"
                            className="img-fluid rounded-lg"
                        />
                    </div>
                </Col>
            </Row>

            {/* Contact Cards */}
            <Row className="contact-cards mb-5">
                <Col md={4} className="mb-4">
                    <Card className="contact-card animate-card">
                        <div className="card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                        </div>
                        <Card.Body>
                            <Card.Title>Support Team</Card.Title>
                            <Card.Text>
                                Available 24/7 to answer your questions about predictions and features
                            </Card.Text>
                            <Button variant="outline-primary" className="mt-3">Chat Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="contact-card animate-card">
                        <div className="card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                            </svg>
                        </div>
                        <Card.Body>
                            <Card.Title>Email Us</Card.Title>
                            <Card.Text>
                                Get detailed responses from our prediction experts within 24 hours
                            </Card.Text>
                            <Button variant="outline-primary" className="mt-3">support@stockpredictor.com</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card className="contact-card animate-card">
                        <div className="card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                        </div>
                        <Card.Body>
                            <Card.Title>Call Us</Card.Title>
                            <Card.Text>
                                Speak directly with our financial analysts during business hours
                            </Card.Text>
                            <Button variant="outline-primary" className="mt-3">+1 (555) 123-4567</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Contact Form */}
            <Row className="contact-form-section">
                <Col lg={8} className="mx-auto">
                    <Card className="form-card">
                        <Card.Body>
                            <h2 className="text-center mb-4">Send Us a Message</h2>
                            <Form>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formName">
                                            <Form.Label>Your Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter your email" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formSubject" className="mb-3">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="What's this about?" />
                                </Form.Group>
                                <Form.Group controlId="formMessage" className="mb-4">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="Your message here..." />
                                </Form.Group>
                                <div className="text-center">
                                    <Button variant="primary" size="lg" type="submit">
                                        Send Message
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Map Section */}
            <Row className="map-section mt-5">
                <Col>
                    <h2 className="text-center mb-4">Our Headquarters</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.929267349132!2d85.81451531492202!3d20.31275008638784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a5a5b5e5e5f%3A0x5e5e5e5e5e5e5e5e!2sITER%20College%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="ITER College, Bhubaneswar"
                            className="map-iframe"
                        ></iframe>
                    </div>
                </Col>
            </Row>
            <FAQSection/>
        </Container>
    );
};

export default ContactPage;