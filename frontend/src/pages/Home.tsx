import React, { useState, useEffect } from 'react';
import { FaBrain, FaHandsHelping, FaBook, FaHeart, FaAward, FaUsers, FaGlobe, FaLeaf } from 'react-icons/fa';
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
              <img src="/images/slv5.jpeg" alt="Main Mission" className="main-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="programs-overview">
        <div className="container">
          <h2>Leaders in international volunteering and mental health, making a positive impact in Southern Sri Lanka</h2>
          <p>Ceylon Volunteer Hub offers hands-on mental health experience in Sri Lanka. Throughout placement at psychiatric facilities, social initiatives, and charities in need of support. We bridge the gap between skilled volunteers and those in need.</p>
          
          <div className="programs-grid-horizontal">
            {/* Mental Health Projects */}
            <div className="program-card-horizontal">
              <div className="program-image-side">
                <img src="/images/slv15.jpeg" alt="Mental Health Projects" />
                <div className="program-image-overlay">
                  <div className="program-icon"><FaBrain size={40} color="white" /></div>
                </div>
              </div>
              <div className="program-content-side">
                <h3>Mental Health Projects</h3>
                <p>Support mental health awareness and counseling services in local communities. Work with professionals to make a difference in psychiatric facilities.</p>
                <div className="program-cta">
                  <a href="/programs/mental-health" className="btn-learn">Learn More</a>
                </div>
              </div>
            </div>
            
            {/* Social Outreach Projects */}
            <div className="program-card-horizontal">
              <div className="program-image-side">
                <img src="/images/slv14.jpeg" alt="Social Outreach Projects" />
                <div className="program-image-overlay">
                  <div className="program-icon"><FaHandsHelping size={40} color="white" /></div>
                </div>
              </div>
              <div className="program-content-side">
                <h3>Social Outreach Projects</h3>
                <p>Engage with communities through social initiatives and development programs. Help build sustainable projects that make a lasting impact.</p>
                <div className="program-cta">
                  <a href="/programs/social-outreach" className="btn-learn">Learn More</a>
                </div>
              </div>
            </div>
            
            {/* Educational Projects */}
            <div className="program-card-horizontal">
              <div className="program-image-side">
                <img src="/images/slv12.jpeg" alt="Educational Projects" />
                <div className="program-image-overlay">
                  <div className="program-icon"><FaBook size={40} color="white" /></div>
                </div>
              </div>
              <div className="program-content-side">
                <h3>Educational Projects</h3>
                <p>Teach English and other subjects in rural schools, helping to improve education access and quality for underprivileged children.</p>
                <div className="program-cta">
                  <a href="/programs/education" className="btn-learn">Learn More</a>
                </div>
              </div>
            </div>
            
            {/* Therapeutic Workshops */}
            <div className="program-card-horizontal">
              <div className="program-image-side">
                <img src="/images/slv13.jpeg" alt="Therapeutic Workshops" />
                <div className="program-image-overlay">
                  <div className="program-icon"><MdEmojiEmotions size={40} color="white" /></div>
                </div>
              </div>
              <div className="program-content-side">
                <h3>Therapeutic Workshops</h3>
                <p>From laughing yoga to dance movement therapy, explore various therapeutic methods and help facilitate healing sessions for communities.</p>
                <div className="program-cta">
                  <a href="/programs/therapeutic-workshops" className="btn-learn">Learn More</a>
                </div>
              </div>
            </div>
            
            {/* Professional Seminars */}
            <div className="program-card-horizontal">
              <div className="program-image-side">
                <img src="/images/slv11.jpeg" alt="Professional Seminars" />
                <div className="program-image-overlay">
                  <div className="program-icon"><MdSchool size={40} color="white" /></div>
                </div>
              </div>
              <div className="program-content-side">
                <h3>Professional Seminars</h3>
                <p>Attend professional development seminars and training sessions to enhance your skills while contributing to local capacity building.</p>
                <div className="program-cta">
                  <a href="/programs/seminars" className="btn-learn">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <span className="subtitle">strategy starts with you.</span>
              <h2>Why Choose Ceylon Volunteer Hub?</h2>
              <p>
                At Ceylon Volunteer Hub, we believe that meaningful change begins with individual commitment. 
                Our programs are designed to create sustainable impact in Sri Lankan communities through 
                authentic cultural exchange and dedicated volunteer service.
              </p>
              <p>
                Whether you're supporting mental health initiatives, educational programs, or community 
                development projects, you'll be making a real difference while gaining invaluable experience 
                and personal growth.
              </p>
              <a href="/about" className="btn-learn-more">LEARN MORE</a>
            </div>
            <div className="why-choose-image">
              <img src="/images/slv6.jpg" alt="Volunteer Community" />
            </div>
          </div>
        </div>
      </section>
      

      {/* Call to Action */}
      {/* Call to Action */}
<section className="cta">
  <video 
    autoPlay 
    muted 
    loop 
    playsInline 
    className="cta-video-background"
  >
    <source src="/images/v1.mp4" type="video/mp4" />
    {/* Fallback image if video doesn't load */}
    <img src="/images/cta-fallback.jpg" alt="Fallback background" />
  </video>
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