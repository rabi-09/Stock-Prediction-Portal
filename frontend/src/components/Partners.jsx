import React, { useState, useEffect } from 'react';
import './Partners.css';

const Partners = () => {
    const [isVisible, setIsVisible] = useState(false);

    const partners = [
        {
            id: 1,
            name: 'SEBI',
            logo: 'https://images.seeklogo.com/logo-png/30/1/sebi-logo-png_seeklogo-305382.png',
            category: 'Regulatory'
        },
        {
            id: 2,
            name: 'NSE',
            logo: 'https://www.ta.com/system/uploads/fae/image/asset/1655/xxl_NSE_THUMB.jpg',
            category: 'Exchange'
        },
        {
            id: 3,
            name: 'BSE',
            logo: 'https://m.economictimes.com/thumb/msid-101646037,width-1200,height-900,resizemode-4,imgsize-8802/bse-new-logo.jpg',
            category: 'Exchange'
        },
        {
            id: 4,
            name: 'KFintech',
            logo: 'https://images.yourstory.com/cs/images/companies/1642143692511-1644475402213.jpg?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75',
            category: 'Technology'
        },
        {
            id: 5,
            name: 'Groww',
            logo: 'https://img.theweek.in/content/dam/week/news/india/2021/April/Groww-logo-2.jpg',
            category: 'Broker'
        },
        {
            id: 6,
            name: 'Zerodha',
            logo: 'https://media.assettype.com/outlookbusiness/2024-08/d2aaea27-c746-4452-b618-337704e7dea6/Web%20Images%20-%202024-08-05T104458.421.jpg?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0',
            category: 'Broker'
        },
        {
            id: 7,
            name: 'CDSL',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUfw18zVQ_ojxst__mpAefKzET4GsnFZjCw&s',
            category: 'Depository'
        },
        {
            id: 8,
            name: 'NSDL',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8b3Ev-FuunFkiOFLu_5SYMwW5P94l4w-DAw&s',
            category: 'Depository'
        },
        {
            id: 9,
            name: 'CNBC TV18',
            logo: 'https://cdn.mos.cms.futurecdn.net/wCA2dtUbkmmoUBCHkvH26Y.jpg',
            category: 'Media'
        },
        {
            id: 10,
            name: 'ET Now',
            logo: 'https://yt3.googleusercontent.com/uNszhFa92_t23EHKYhPxytuNokzFeRq9iilXrMYuQZIyJXTRRTcOlvHFs4tDfQbih-OBhK6OZQ=s900-c-k-c0x00ffffff-no-rj',
            category: 'Media'
        },
        {
            id: 11,
            name: 'Zee Business',
            logo: 'https://play-lh.googleusercontent.com/LTec4AFL3-hbCOtIp4Bb-PPrFsUnrmFRjlu_C0-AQ7uV2jdhvVSqhIBCC4asy1KDFw',
            category: 'Media'
        },
        {
            id: 12,
            name: 'Bloomberg Quint',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLSW8Mtuxfc556412mAs9BOTlnC0lj-4fNDQ&s',
            category: 'Media'
        }
    ];

    // Duplicate partners for seamless infinite scroll
    const duplicatedPartners = [...partners, ...partners];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="partners-section" id='partners'>
            <div className="partners-container">
                <div className={`partners-header ${isVisible ? 'fade-in' : ''}`}>
                    <h2 className="partners-title">Our Trusted Partners</h2>
                    <p className="partners-subtitle">
                        Collaborating with India's leading financial institutions and media channels
                    </p>
                </div>

                <div className="partners-scroll-container">
                    <div className="partners-track">
                        {duplicatedPartners.map((partner, index) => (
                            <PartnerCard
                                key={`${partner.id}-${index}`}
                                partner={partner}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const PartnerCard = ({ partner, delay }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`partner-card mb-4 mt-4 ${isVisible ? 'loaded' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`partner-logo-container ${isHovered ? 'hovered' : ''}`}>
                <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo"
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                        e.target.src = `https://via.placeholder.com/120x60/3a4a5c/ffffff?text=${partner.name}`;
                        setImageLoaded(true);
                    }}
                />
                <div className="partner-overlay">
                    <span className="partner-category">{partner.category}</span>
                </div>
            </div>
            <h3 className={`partner-name ${isHovered ? 'highlighted' : ''}`}>
                {partner.name}
            </h3>
        </div>
    );
};

export default Partners;