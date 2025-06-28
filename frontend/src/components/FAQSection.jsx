import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How accurate are your stock predictions?",
      answer: "Our AI models achieve an average accuracy of 85% across major market indices. Accuracy varies by stock and market conditions, with more liquid stocks typically showing higher prediction accuracy."
    },
    {
      question: "What data sources do you use for predictions?",
      answer: "We analyze data from multiple sources including historical price data, company fundamentals, news sentiment, social media trends, and macroeconomic indicators. Our models process over 10 million data points daily."
    },
    {
      question: "Can I use these predictions for day trading?",
      answer: "Yes, many of our users successfully employ our predictions for day trading. We offer real-time alerts and intraday predictions specifically designed for active traders."
    },
    {
      question: "How often are predictions updated?",
      answer: "Predictions are updated continuously throughout the trading day. For premium members, we provide minute-by-minute updates on selected stocks."
    },
    {
      question: "Do you offer cryptocurrency predictions?",
      answer: "Yes, we cover major cryptocurrencies including Bitcoin, Ethereum, and other top 20 coins by market capitalization. Crypto predictions are available in our Pro and Enterprise plans."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied, simply contact our support team for a full refund."
    }
  ];

  return (
    <Container className="faq-section" id="faq">
      <Row>
        <Col className="text-center mb-5">
          <h2>Frequently Asked Questions</h2>
          <p className="lead">Get answers to common questions about our prediction platform</p>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h5>{faq.question}</h5>
                  <span className="faq-toggle">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQSection;