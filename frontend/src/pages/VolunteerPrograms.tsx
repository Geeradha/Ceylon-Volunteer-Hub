import React, { useState } from 'react';
import './VolunteerPrograms.css';

const VolunteerPrograms: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programs = [
    {
      id: 'mental-health',
      title: 'Mental Health Placement',
      icon: '🧠',
      duration: '2-12 weeks',
      location: 'Colombo & Galle',
      description: 'Support mental health awareness and counseling services in local communities.',
      details: {
        overview: 'Work alongside licensed mental health professionals to provide support and raise awareness about mental health in Sri Lankan communities. This program focuses on reducing stigma and improving access to mental health resources.',
        activities: [
          'Assist in community mental health sessions',
          'Support group therapy sessions',
          'Help develop mental health awareness materials',
          'Participate in outreach programs',
          'Assist with basic counseling under supervision'
        ],
        requirements: [
          'Background in psychology, social work, or related field preferred',
          'Strong communication and empathy skills',
          'Cultural sensitivity and patience',
          'Willingness to learn local approaches to mental health'
        ],
        impact: 'Over 500 community members have received mental health support through this program.'
      }
    },
    {
      id: 'special-needs',
      title: 'Working with Special Needs Children',
      icon: '❤️',
      duration: '2-8 weeks',
      location: 'Kandy & Colombo',
      description: 'Provide care and educational support for children with special needs.',
      details: {
        overview: 'Support children with various special needs through educational activities, therapy assistance, and daily care. Work in specialized centers and schools to help improve quality of life for these children.',
        activities: [
          'Assist with daily care and activities',
          'Support educational activities and games',
          'Help with physical therapy exercises',
          'Organize recreational activities',
          'Provide one-on-one attention and support'
        ],
        requirements: [
          'Experience with special needs children preferred',
          'Patience and compassion',
          'Physical fitness for hands-on care',
          'Background check required',
          'Commitment to child welfare principles'
        ],
        impact: 'Supporting over 200 children with special needs across multiple centers.'
      }
    },
    {
      id: 'teaching',
      title: 'Teaching in Rural Schools',
      icon: '📚',
      duration: '4-16 weeks',
      location: 'Rural areas nationwide',
      description: 'Teach English and other subjects in rural schools to improve educational opportunities.',
      details: {
        overview: 'Help bridge the educational gap in rural areas by teaching English and supporting local teachers. This program focuses on improving English language skills and exposing children to international perspectives.',
        activities: [
          'Teach English language classes',
          'Assist with other subjects as needed',
          'Organize educational games and activities',
          'Help with curriculum development',
          'Support teacher training initiatives'
        ],
        requirements: [
          'Teaching experience or education background preferred',
          'Native or fluent English speaker',
          'Creativity and patience with children',
          'Adaptability to rural living conditions',
          'Commitment to educational excellence'
        ],
        impact: 'Improved English proficiency for over 1,000 rural students.'
      }
    },
    {
      id: 'cultural',
      title: 'Cultural Exchange Programs',
      icon: '🌍',
      duration: '1-6 weeks',
      location: 'Various cultural sites',
      description: 'Immerse in Sri Lankan culture while sharing your own cultural background.',
      details: {
        overview: 'Experience authentic Sri Lankan culture while sharing your own heritage with local communities. This program promotes mutual understanding and cultural appreciation.',
        activities: [
          'Participate in traditional festivals',
          'Learn local crafts and cooking',
          'Share your cultural traditions',
          'Document cultural experiences',
          'Engage with local families'
        ],
        requirements: [
          'Open mind and cultural curiosity',
          'Respect for local customs and traditions',
          'Willingness to step out of comfort zone',
          'Good communication skills',
          'Flexibility and adaptability'
        ],
        impact: 'Facilitated cultural exchange between 300+ international volunteers and local families.'
      }
    },
    {
      id: 'psychology',
      title: 'Psychology Workshop',
      icon: '🧑‍🎓',
      duration: '1-4 weeks',
      location: 'Universities & Centers',
      description: 'Conduct psychology training and education for local professionals.',
      details: {
        overview: 'Share psychological knowledge and techniques with local mental health professionals and students. Help build capacity in psychological assessment and intervention techniques.',
        activities: [
          'Conduct professional training sessions',
          'Train local psychologists',
          'Develop training materials',
          'Provide supervision and mentoring',
          'Research local mental health needs'
        ],
        requirements: [
          'Advanced degree in psychology required',
          'Professional experience in psychology',
          'Teaching or training experience',
          'Cultural competency skills',
          'Research experience preferred'
        ],
        impact: 'Trained over 100 local mental health professionals in advanced techniques.'
      }
    },
    {
      id: 'meditation',
      title: 'Meditation Workshop',
      icon: '🧘',
      duration: '1-3 weeks',
      location: 'Buddhist temples',
      description: 'Learn traditional meditation practices while teaching modern mindfulness techniques.',
      details: {
        overview: 'Combine learning traditional Buddhist meditation with sharing modern mindfulness practices. This program offers deep spiritual and cultural immersion.',
        activities: [
          'Learn traditional meditation techniques',
          'Participate in temple daily routines',
          'Teach modern mindfulness practices',
          'Attend dharma discussions',
          'Practice silent meditation retreats'
        ],
        requirements: [
          'Personal meditation practice',
          'Respect for Buddhist traditions',
          'Physical ability for extended sitting',
          'Open spiritual mindset',
          'Commitment to silence periods'
        ],
        impact: 'Facilitated mindfulness training for 150+ participants across temple communities.'
      }
    },
    {
      id: 'tea-factory',
      title: 'Tea Factory Visit',
      icon: '🍃',
      duration: '1-2 weeks',
      location: 'Central Highlands',
      description: 'Experience Sri Lankan tea culture and support tea plantation workers.',
      details: {
        overview: 'Learn about Sri Lankan tea production while supporting tea plantation workers and their families. Experience life in the beautiful hill country.',
        activities: [
          'Learn tea cultivation and processing',
          'Support plantation worker families',
          'Assist with community development projects',
          'Experience tea estate daily life',
          'Help with educational programs for workers\' children'
        ],
        requirements: [
          'Physical fitness for plantation work',
          'Interest in agriculture and fair trade',
          'Adaptability to rural conditions',
          'Respect for worker rights',
          'Environmental consciousness'
        ],
        impact: 'Supported educational programs for 80+ children of tea plantation workers.'
      }
    },
    {
      id: 'temple-village',
      title: 'Temple and Village Volunteering',
      icon: '🏛️',
      duration: '2-8 weeks',
      location: 'Rural temples & villages',
      description: 'Support temple communities and rural villages with various development projects.',
      details: {
        overview: 'Work directly with rural temple communities on development projects that benefit the entire village. Experience authentic rural Sri Lankan life.',
        activities: [
          'Support temple maintenance projects',
          'Assist with village development initiatives',
          'Help with community gardens',
          'Support elderly care programs',
          'Participate in religious ceremonies'
        ],
        requirements: [
          'Respect for Buddhist traditions',
          'Physical ability for manual work',
          'Patience and humility',
          'Adaptability to simple living',
          'Commitment to community service'
        ],
        impact: 'Completed development projects in 25+ rural villages, benefiting over 2,000 residents.'
      }
    }
  ];

  return (
    <div className="volunteer-programs">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Volunteer Programs</h1>
              <p>Discover meaningful ways to make a difference in Sri Lankan communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="programs-overview">
        <div className="container">
          <div className="overview-content">
            <h2>Choose Your Impact</h2>
            <p>
              Our volunteer programs are carefully designed in partnership with local communities 
              to ensure meaningful impact. Each program offers unique opportunities for personal 
              growth while contributing to positive change in Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-section">
        <div className="container">
          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-header">
                  <div className="program-icon">{program.icon}</div>
                  <h3>{program.title}</h3>
                </div>
                <div className="program-meta">
                  <span className="duration">⏰ {program.duration}</span>
                  <span className="location">📍 {program.location}</span>
                </div>
                <p className="program-description">{program.description}</p>
                <button 
                  className="learn-more-btn"
                  onClick={() => setSelectedProgram(program.id)}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="program-modal">
          <div className="modal-overlay" onClick={() => setSelectedProgram(null)}></div>
          <div className="modal-content">
            <button 
              className="modal-close"
              onClick={() => setSelectedProgram(null)}
            >
              ×
            </button>
            {(() => {
              const program = programs.find(p => p.id === selectedProgram);
              if (!program) return null;
              
              return (
                <>
                  <div className="modal-header">
                    <div className="modal-icon">{program.icon}</div>
                    <h2>{program.title}</h2>
                  </div>
                  
                  <div className="modal-body">
                    <div className="program-overview">
                      <h3>Overview</h3>
                      <p>{program.details.overview}</p>
                    </div>

                    <div className="program-activities">
                      <h3>Activities</h3>
                      <ul>
                        {program.details.activities.map((activity, index) => (
                          <li key={index}>{activity}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="program-requirements">
                      <h3>Requirements</h3>
                      <ul>
                        {program.details.requirements.map((requirement, index) => (
                          <li key={index}>{requirement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="program-impact">
                      <h3>Impact</h3>
                      <p>{program.details.impact}</p>
                    </div>

                    <div className="modal-actions">
                      <a href="/apply" className="btn btn-primary">Apply for This Program</a>
                      <a href="/contact" className="btn btn-outline">Ask Questions</a>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Application Process */}
      <section className="application-process">
        <div className="container">
          <h2>How to Apply</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Choose Your Program</h3>
              <p>Review our programs and select one that matches your interests and skills.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Submit Application</h3>
              <p>Complete our online application form with your details and preferences.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Interview & Placement</h3>
              <p>Participate in a brief interview and receive your program placement confirmation.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Pre-Departure Preparation</h3>
              <p>Receive training materials and prepare for your volunteer experience.</p>
            </div>
          </div>
          <div className="process-cta">
            <a href="/apply" className="btn btn-primary btn-large">Start Your Application</a>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="program-benefits">
        <div className="container">
          <h2>What's Included</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <div className="benefit-icon">🏠</div>
              <h3>Accommodation</h3>
              <p>Safe, clean accommodation with local families or volunteer houses</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🍽️</div>
              <h3>Meals</h3>
              <p>Daily meals featuring authentic Sri Lankan cuisine</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🎓</div>
              <h3>Training</h3>
              <p>Comprehensive orientation and ongoing support</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🚐</div>
              <h3>Transportation</h3>
              <p>Airport pickup and local transportation to program sites</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock support from our local team</p>
            </div>
            <div className="benefit">
              <div className="benefit-icon">📋</div>
              <h3>Certificate</h3>
              <p>Official volunteer certificate upon program completion</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPrograms;
