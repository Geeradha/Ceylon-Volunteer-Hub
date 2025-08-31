import React, { useState, useEffect } from 'react';
import { FaBrain, FaHandsHelping, FaBook } from 'react-icons/fa';
import { MdEmojiEmotions, MdSchool } from 'react-icons/md';
import './Home.css';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    {
      src: "/images/slv1.png",
      alt: "Volunteers working with children",
      title: "Transform Lives Through Education",
      subtitle: "Support children's education in rural Sri Lankan schools"
    },
    {
      src: "/images/slv2.png", 
      alt: "Mental health support",
      title: "Mental Health Advocacy",
      subtitle: "Make a difference in community mental health initiatives"
    },
    {
      src: "/images/slv4.png",
      alt: "Cultural exchange",
      title: "Cultural Immersion",  
      subtitle: "Experience authentic Sri Lankan culture and traditions"
    },
    {
      src: "/images/slv3.png",
      alt: "Community development",
      title: "Community Development",
      subtitle: "Help build sustainable projects in local communities"
    }
  ];

  // Auto-change slides every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  return (
    <div className="home">
      {/* Hero Section with Image Carousel */}
      <section className="hero-carousel">
        <div className="carousel-container">
          {heroImages.map((image, index) => (
            <div 
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image.src})` }}
            >
              <div className="carousel-overlay">
                <div className="container">
                  <div className="carousel-content">
                    <h1>{image.title}</h1>
                    <p>{image.subtitle}</p>
                    <div className="hero-buttons">
                      <a href="/apply" className="btn btn-primary">Start Your Journey</a>
                      <a href="/programs" className="btn btn-outline">Explore Programs</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="carousel-nav prev"
            onClick={() => setCurrentSlide(currentSlide === 0 ? heroImages.length - 1 : currentSlide - 1)}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button 
            className="carousel-nav next"
            onClick={() => setCurrentSlide((currentSlide + 1) % heroImages.length)}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </section>

      {/* Main Heading Section */}
      <section className="main-heading">
        <div className="container">
          <h2>What will your impact be?</h2>
          <p>At Ceylon Volunteer Hub, we connect students and graduates to hands-on experience in mental health, education, and community development in beautiful Sri Lanka.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>OUR MISSION</h2>
              <p>
                We believe in creating authentic connections between volunteers and local communities 
                in Sri Lanka. Our programs are designed to provide meaningful experiences that benefit 
                both volunteers and the communities they serve.
              </p>
              <p>
                Every program is developed in partnership with local organizations to ensure 
                sustainable impact and genuine cultural exchange.
              </p>
            </div>
            <div className="mission-image">
              <img src="/images/slv5.jpeg" alt="Volunteers working with children" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="programs-overview">
        <div className="container">
          <h2>Leaders in international volunteering and mental health, making a positive impact in Southern Sri Lanka</h2>
          <p>Ceylon Volunteer Hub offers hands-on mental health experience in Sri Lanka. Throughout placement at psychiatric facilities, social initiatives, and charities in need of support. We bridge the gap between skilled volunteers and those in need.</p>
          
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-image-container" style={{ position: 'relative' }}>
                <img src="/images/slv15.jpeg" alt="Mental Health Projects" className="program-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="program-image-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="program-icon"><FaBrain size={40} color="white" /></div>
                  <div className="program-content" style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', color: 'white', textAlign: 'center', background: 'transparent', borderRadius: '10px', padding: '1rem' }}>
                    <h3>Mental Health Projects</h3>
                    <p>Support mental health awareness and counseling services in local communities.</p>
                    <div className="program-cta">
                      <a href="#" className="learn-more">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image-container" style={{ position: 'relative' }}>
                <img src="/images/slv14.jpeg" alt="Social Outreach Projects" className="program-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="program-image-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="program-icon"><FaHandsHelping size={40} color="white" /></div>
                  <div className="program-content" style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', color: 'white', textAlign: 'center', background: 'transparent', borderRadius: '10px', padding: '1rem' }}>
                    <h3>Social Outreach Projects</h3>
                    <p>Engage with communities through social initiatives and development programs.</p>
                    <div className="program-cta">
                      <a href="#" className="learn-more">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image-container" style={{ position: 'relative' }}>
                <img src="/images/slv12.jpeg" alt="Educational Projects" className="program-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="program-image-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="program-icon"><FaBook size={40} color="white" /></div>
                  <div className="program-content" style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', color: 'white', textAlign: 'center', background: 'transparent', borderRadius: '10px', padding: '1rem' }}>
                    <h3>Educational Projects</h3>
                    <p>Teach English and other subjects in rural schools, helping to improve education access.</p>
                    <div className="program-cta">
                      <a href="#" className="learn-more">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image-container" style={{ position: 'relative' }}>
                <img src="/images/slv13.jpeg" alt="Therapeutic Workshops" className="program-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="program-image-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="program-icon"><MdEmojiEmotions size={40} color="white" /></div>
                  <div className="program-content" style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', color: 'white', textAlign: 'center', background: 'transparent', borderRadius: '10px', padding: '1rem' }}>
                    <h3>Therapeutic Workshops</h3>
                    <p>From laughing yoga to dance movement therapy, explore therapeutic methods.</p>
                    <div className="program-cta">
                      <a href="#" className="learn-more">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="program-card">
              <div className="program-image-container" style={{ position: 'relative' }}>
                <img src="/images/slv11.jpeg" alt="Professional Seminars" className="program-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="program-image-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="program-icon"><MdSchool size={40} color="white" /></div>
                  <div className="program-content" style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', color: 'white', textAlign: 'center', background: 'transparent', borderRadius: '10px', padding: '1rem' }}>
                    <h3>Professional Seminars</h3>
                    <p>Attend professional development seminars and training sessions.</p>
                    <div className="program-cta">
                      <a href="#" className="learn-more">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="programs-decoration decoration-1">❤</div>
        <div className="programs-decoration decoration-2">✦</div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Join hundreds of volunteers who have found purpose and adventure in Sri Lanka.</p>
            <a href="/apply" className="btn btn-primary btn-large">Apply Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;