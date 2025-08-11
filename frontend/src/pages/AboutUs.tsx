import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1 className="typewriter">About Ceylon Volunteer Hub</h1>
              <p className="fade-in-text">Empowering Communities Through Volunteering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Vision</h2>
              <p>
                To create a world where cultural understanding, compassion, and skill-sharing 
                empower communities and volunteers to grow together, fostering positive change 
                in mental health, education, and social development in Sri Lanka.
              </p>
              <h2>Our Mission</h2>
              <p>
                Our mission is to provide ethical, impactful volunteer placements that address 
                community needs while enriching volunteers through hands-on experience in mental 
                health care, special needs education, rural teaching, and cultural exchange. We 
                strive to build self-confidence, leadership, and cross-cultural understanding by 
                combining meaningful service with immersive experiences in Sri Lanka's traditions, 
                values, and way of life.
              </p>
            </div>
            <div className="story-image">
              <img src="/images/about-story.jpg" alt="Our founding story" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>
                We approach every community and individual with empathy, kindness, and understanding.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Integrity</h3>
              <p>
                We are committed to ethical volunteering, ensuring our work benefits the community first.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🙏</div>
              <h3>Cultural Respect</h3>
              <p>
                We honour Sri Lanka's traditions, beliefs, and way of life, embracing diversity and inclusion.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💪</div>
              <h3>Empowerment</h3>
              <p>
                We help communities and volunteers build skills, confidence, and leadership for long-term growth.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>
                We work hand-in-hand with local organisations, schools, and health facilities to achieve shared goals.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">�</div>
              <h3>Learning & Growth</h3>
              <p>
                We believe volunteering is a two-way exchange, enriching both the community and the volunteer.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">�</div>
              <h3>Sustainability</h3>
              <p>
                We focus on projects that bring lasting, positive impact without creating dependency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="our-team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            Our dedicated team combines local expertise with international perspective 
            to create exceptional volunteer experiences.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/team-ashan.jpg" alt="Pamaniyange Ashan Udaya Devinda" />
              <div className="member-info">
                <h3>Pamaniyange Ashan Udaya Devinda</h3>
                <span>Founder</span>
                <p>
                  Visionary leader dedicated to creating meaningful volunteer experiences 
                  that benefit both communities and volunteers through ethical, sustainable programs.
                </p>
              </div>
            </div>
            <div className="team-member">
              <img src="/images/team-erangi.jpg" alt="Erangi Wanniarachchi" />
              <div className="member-info">
                <h3>Erangi Wanniarachchi</h3>
                <span>Co-founder & International Project Manager</span>
                <p>
                  Expert in international program coordination with extensive experience 
                  in managing cross-cultural volunteer placements and community relations.
                </p>
              </div>
            </div>
            <div className="team-member">
              <img src="/images/team-community.jpg" alt="Community Relations" />
              <div className="member-info">
                <h3>Erangi Wanniarachchi</h3>
                <span>Chairman & Head of Community Relations</span>
                <p>
                  Leading community engagement initiatives to ensure all programs are 
                  developed in partnership with local stakeholders and address genuine needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="our-approach">
        <div className="container">
          <h2>Our Ethical Volunteering Approach</h2>
          <div className="approach-content">
            <div className="approach-principles">
              <h3>Community-Led Programs</h3>
              <p>
                All our programs are developed in partnership with local communities. 
                We work closely with community leaders to identify genuine needs and 
                ensure our volunteers contribute meaningfully to existing initiatives.
              </p>

              <h3>Thorough Preparation</h3>
              <p>
                Every volunteer receives comprehensive pre-departure training covering 
                cultural sensitivity, program expectations, and practical preparation 
                for life in Sri Lanka.
              </p>

              <h3>Ongoing Support</h3>
              <p>
                Our local team provides 24/7 support to volunteers, ensuring their 
                safety and helping them navigate any challenges they may encounter.
              </p>

              <h3>Impact Measurement</h3>
              <p>
                We regularly assess the impact of our programs through community feedback, 
                volunteer evaluations, and measurable outcomes to ensure we're creating 
                positive change.
              </p>
            </div>
            <div className="approach-image">
              <img src="/images/ethical-volunteering.jpg" alt="Ethical volunteering approach" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Impact */}
      <section className="impact-stats">
        <div className="container">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Volunteers Placed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Communities Served</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2,000+</div>
              <div className="stat-label">Children Helped</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Active Programs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40+</div>
              <div className="stat-label">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="partnerships">
        <div className="container">
          <h2>Our Partners</h2>
          <p className="partnerships-intro">
            We're proud to work with local organizations, schools, and community groups 
            to ensure our programs have maximum positive impact.
          </p>
          <div className="partners-grid">
            <div className="partner">
              <h4>Ministry of Education - Sri Lanka</h4>
              <p>Official partnership for our rural teaching programs</p>
            </div>
            <div className="partner">
              <h4>National Mental Health Institute</h4>
              <p>Collaboration on mental health awareness programs</p>
            </div>
            <div className="partner">
              <h4>Special Needs Foundation</h4>
              <p>Joint programs for children with special needs</p>
            </div>
            <div className="partner">
              <h4>Buddhist Cultural Center</h4>
              <p>Cultural exchange and meditation sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Mission?</h2>
            <p>
              Become part of our community of volunteers who are making a real difference 
              in Sri Lanka while gaining life-changing experiences.
            </p>
            <div className="cta-buttons">
              <a href="/apply" className="btn btn-primary">Apply Now</a>
              <a href="/contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
