import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background-effects">
          <div className="floating-element element-1">🌺</div>
          <div className="floating-element element-2">🏝️</div>
          <div className="floating-element element-3">🦋</div>
          <div className="floating-element element-4">🌴</div>
          <div className="floating-element element-5">🐘</div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span className="badge-text">Trusted by 1000+ Volunteers</span>
          </div>
          
          <h1>
            Make a <span className="highlight">Real Impact</span> in Sri Lanka
          </h1>
          <p>
            Join our community-focused volunteer programs and experience the beauty of Sri Lanka 
            while making a meaningful difference in local communities.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">94%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">87%</div>
              <div className="stat-label">Return Volunteers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">$0</div>
              <div className="stat-label">Hidden Fees</div>
            </div>
          </div>
          
          <div className="trust-signals">
            <span>🏆 Award Winning</span>
            <span>🌍 Eco Certified</span>
            <span>❤️ Community Approved</span>
          </div>
          
          <div className="hero-buttons">
            <a href="/apply" className="btn btn-primary">Start Your Journey</a>
            <a href="/programs" className="btn btn-outline">Explore Programs</a>
          </div>
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
          <h2>Our Popular Programs</h2>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">🧠</div>
              <h3>Mental Health Placement</h3>
              <p>Support mental health awareness and counseling services in local communities.</p>
              <a href="/programs#mental-health" className="learn-more">Learn More</a>
            </div>
            <div className="program-card">
              <div className="program-icon">❤️</div>
              <h3>Special Needs Support</h3>
              <p>Support children with special needs through educational activities and care programs.</p>
              <a href="/programs#special-needs" className="learn-more">Learn More</a>
            </div>
            <div className="program-card">
              <div className="program-icon">📚</div>
              <h3>Rural Teaching</h3>
              <p>Teach English and other subjects in rural schools, helping to improve education access.</p>
              <a href="/programs#teaching" className="learn-more">Learn More</a>
            </div>
            <div className="program-card">
              <div className="program-icon">🌍</div>
              <h3>Cultural Exchange</h3>
              <p>Immerse yourself in Sri Lankan culture while sharing your own cultural background.</p>
              <a href="/programs#cultural" className="learn-more">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sri Lanka */}
      <section className="why-sri-lanka">
        <div className="container">
          <h2>Why Sri Lanka?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏛️</div>
              <h3>Rich Cultural Heritage</h3>
              <p>Experience 2,500 years of history, ancient temples, and UNESCO World Heritage sites.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Biodiversity Hotspot</h3>
              <p>Work in one of the world's most biodiverse countries with unique wildlife and ecosystems.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>Warm Community</h3>
              <p>Join welcoming local communities that embrace volunteers as family members.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏝️</div>
              <h3>Island Paradise</h3>
              <p>Beautiful beaches, mountains, and tropical landscapes provide the perfect backdrop.</p>
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
