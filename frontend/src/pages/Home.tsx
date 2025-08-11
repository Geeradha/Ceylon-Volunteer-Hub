import React, { useState, useEffect } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    {
      src: "/images/slv1.jpeg",
      alt: "Volunteers working with children",
      title: "Transform Lives Through Education",
      subtitle: "Support children's education in rural Sri Lankan schools"
    },
    {
      src: "/images/slv2.jpeg", 
      alt: "Mental health support",
      title: "Mental Health Advocacy",
      subtitle: "Make a difference in community mental health initiatives"
    },
    {
      src: "/images/slv3.jpeg",
      alt: "Cultural exchange",
      title: "Cultural Immersion",
      subtitle: "Experience authentic Sri Lankan culture and traditions"
    },
    {
      src: "/images/slv4.jpeg",
      alt: "Community development",
      title: "Community Development",
      subtitle: "Help build sustainable projects in local communities"
    },
    {
      src: "/images/slv5.jpeg",
      alt: "Special needs support",
      title: "Special Needs Support", 
      subtitle: "Provide care and education for children with special needs"
    }
  ];

  // Auto-change slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
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
        
        {/* Trust Signals Bar */}
        <div className="trust-bar">
          <div className="container">
            <div className="trust-stats">
              <div className="trust-item">
                <span className="trust-number">1000+</span>
                <span className="trust-label">Volunteers</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">2010</span>
                <span className="trust-label">Since</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">50+</span>
                <span className="trust-label">Projects</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">24/7</span>
                <span className="trust-label">Support</span>
              </div>
            </div>
          </div>
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
              <h2>Our Mission</h2>
              <p>
                We believe in creating authentic connections between volunteers and local communities 
                in Sri Lanka. Our programs are designed to provide meaningful experiences that benefit 
                both volunteers and the communities they serve.
              </p>
              <p>
                Every program is developed in partnership with local organizations to ensure 
                sustainable impact and genuine cultural exchange.
              </p>
              <div className="mission-stats">
                <div className="stat">
                  <h3>500+</h3>
                  <p>Volunteers Served</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>Community Partners</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <img src="/images/mission.jpg" alt="Volunteers working with children" />
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
              <div className="program-image">
                <img src="/images/mental-health-icon.svg" alt="Mental Health Projects" />
              </div>
              <h3>Mental Health Projects</h3>
              <p>Support mental health awareness and counseling services in local communities.</p>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/mental-health-icon.svg" alt="Social Outreach Projects" />
              </div>
              <h3>Social Outreach Projects</h3>
              <p>Engage with communities through social initiatives and development programs.</p>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/mental-health-icon.svg" alt="Educational Projects" />
              </div>
              <h3>Educational Projects</h3>
              <p>Teach English and other subjects in rural schools, helping to improve education access.</p>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/mental-health-icon.svg" alt="Therapeutic Workshops" />
              </div>
              <h3>Therapeutic Workshops</h3>
              <p>From laughing yoga to dance movement therapy, explore therapeutic methods.</p>
            </div>
            <div className="program-card">
              <div className="program-image">
                <img src="/images/mental-health-icon.svg" alt="Professional Seminars" />
              </div>
              <h3>Professional Seminars</h3>
              <p>Attend professional development seminars and training sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/leaf-icon.svg" alt="Sustainable" />
              </div>
              <h3>Redefining Volunteering</h3>
              <p>Our focus isn't just on the change we make but on the sustainable work that we do, identifying genuine needs and collaboratively driving change with a culture of listening and mutual respect.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/leaf-icon.svg" alt="Mental Health" />
              </div>
              <h3>Making a Lasting Difference</h3>
              <p>Every placement with Ceylon Volunteer Hub helps make a positive impact and tackle stigma around mental health.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/leaf-icon.svg" alt="Psychology" />
              </div>
              <h3>Psychology-Focused Sessions</h3>
              <p>Alongside our team, lead and be a part of sessions aimed at promoting positive mental health.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/leaf-icon.svg" alt="Sri Lanka" />
              </div>
              <h3>Cultural Immersion</h3>
              <p>Experience and immerse yourself in Sri Lankan culture while developing and applying your skills, making a real-world impact.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/leaf-icon.svg" alt="Experts" />
              </div>
              <h3>Mental Health Experts</h3>
              <p>Engage in insightful discussions with clinical psychologists, psychiatrists and doctors, getting a real insight into global mental health practices.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <img src="/images/leaf-icon.svg" alt="Experience" />
              </div>
              <h3>Valuable Hands-On Experience</h3>
              <p>Engage directly at psychiatric facilities and social initiatives, gaining invaluable professional insight and experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="testimonials-preview">
        <div className="container">
          <h2>What Our Volunteers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"My experience in Sri Lanka was life-changing. The people are incredibly warm, and I felt like I was making a real difference."</p>
                <div className="testimonial-author">
                  <img src="/images/volunteer1.jpg" alt="Sarah Johnson" />
                  <div>
                    <h4>Sarah Johnson</h4>
                    <span>Teaching Program, 2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"The mental health program allowed me to contribute meaningfully while learning about local approaches to community wellness."</p>
                <div className="testimonial-author">
                  <img src="/images/volunteer2.jpg" alt="Michael Chen" />
                  <div>
                    <h4>Michael Chen</h4>
                    <span>Mental Health Program, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials-cta">
            <a href="/testimonials" className="btn btn-outline">Read More Stories</a>
          </div>
        </div>
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
