import React, { useState } from 'react';
import './ApplyNow.css';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  passportNumber: string;
  
  // Program Information
  program: string;
  startDate: string;
  duration: string;
  previousExperience: string;
  
  // Background Information
  education: string;
  workExperience: string;
  languages: string;
  emergencyContact: string;
  medicalConditions: string;
  
  // Motivation
  motivation: string;
  expectations: string;
  accommodation: string;
  
  // Documents
  cv: File | null;
  passport: File | null;
  coverLetter: File | null;
}

const ApplyNow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    program: '',
    startDate: '',
    duration: '',
    previousExperience: '',
    education: '',
    workExperience: '',
    languages: '',
    emergencyContact: '',
    medicalConditions: '',
    motivation: '',
    expectations: '',
    accommodation: '',
    cv: null,
    passport: null,
    coverLetter: null
  });

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Application submitted successfully! We will contact you within 48 hours.');
    console.log('Form submitted:', formData);
  };

  return (
    <div className="apply-now">
      {/* Hero Section */}
      <section className="apply-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Apply to Volunteer</h1>
              <p>Start your journey to make a meaningful impact in Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="application-section">
        <div className="container">
          <div className="application-container">
            {/* Progress Bar */}
            <div className="progress-bar">
              <div className="progress-steps">
                {[1, 2, 3, 4].map((step) => (
                  <div 
                    key={step}
                    className={`progress-step ${currentStep >= step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
                  >
                    <div className="step-number">{step}</div>
                    <div className="step-label">
                      {step === 1 && 'Personal Info'}
                      {step === 2 && 'Program Details'}
                      {step === 3 && 'Background'}
                      {step === 4 && 'Documents'}
                    </div>
                  </div>
                ))}
              </div>
              <div className="progress-line">
                <div 
                  className="progress-fill"
                  style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                ></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="application-form">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="form-step">
                  <h2>Personal Information</h2>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Date of Birth *</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Nationality *</label>
                      <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Passport Number *</label>
                      <input
                        type="text"
                        name="passportNumber"
                        value={formData.passportNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Program Details */}
              {currentStep === 2 && (
                <div className="form-step">
                  <h2>Program Details</h2>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label>Preferred Program *</label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a program</option>
                        <option value="mental-health">Mental Health Placement</option>
                        <option value="special-needs">Working with Special Needs Children</option>
                        <option value="teaching">Teaching in Rural Schools</option>
                        <option value="cultural">Cultural Exchange Programs</option>
                        <option value="psychology">Psychology Workshop</option>
                        <option value="meditation">Meditation Workshop</option>
                        <option value="tea-factory">Tea Factory Visit</option>
                        <option value="temple-village">Temple and Village Volunteering</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Preferred Start Date *</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Duration *</label>
                      <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select duration</option>
                        <option value="1-week">1 Week</option>
                        <option value="2-weeks">2 Weeks</option>
                        <option value="1-month">1 Month</option>
                        <option value="2-months">2 Months</option>
                        <option value="3-months">3 Months</option>
                        <option value="6-months">6 Months</option>
                        <option value="other">Other (specify in motivation)</option>
                      </select>
                    </div>
                    <div className="form-group full-width">
                      <label>Previous Volunteer Experience</label>
                      <textarea
                        name="previousExperience"
                        value={formData.previousExperience}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Describe any previous volunteer work or relevant experience..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Background Information */}
              {currentStep === 3 && (
                <div className="form-step">
                  <h2>Background Information</h2>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label>Education Background *</label>
                      <textarea
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Your educational background, degrees, certifications..."
                        required
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Work Experience *</label>
                      <textarea
                        name="workExperience"
                        value={formData.workExperience}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Your work experience, especially relevant to your chosen program..."
                        required
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Languages Spoken *</label>
                      <input
                        type="text"
                        name="languages"
                        value={formData.languages}
                        onChange={handleInputChange}
                        placeholder="e.g., English (native), Spanish (conversational), etc."
                        required
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Emergency Contact *</label>
                      <textarea
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="Name, relationship, phone number, email..."
                        required
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Medical Conditions / Allergies</label>
                      <textarea
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="Any medical conditions, allergies, or dietary restrictions we should know about..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Documents and Motivation */}
              {currentStep === 4 && (
                <div className="form-step">
                  <h2>Documents & Motivation</h2>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label>Why do you want to volunteer? *</label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about your motivation for volunteering in Sri Lanka..."
                        required
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>What are your expectations? *</label>
                      <textarea
                        name="expectations"
                        value={formData.expectations}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="What do you hope to achieve and learn from this experience?"
                        required
                      />
                    </div>
                    <div className="form-group full-width">
                      <label>Accommodation Preference</label>
                      <select
                        name="accommodation"
                        value={formData.accommodation}
                        onChange={handleInputChange}
                      >
                        <option value="">Select preference</option>
                        <option value="host-family">Host Family</option>
                        <option value="volunteer-house">Volunteer House</option>
                        <option value="no-preference">No Preference</option>
                      </select>
                    </div>
                    
                    {/* File Uploads */}
                    <div className="documents-section full-width">
                      <h3>Required Documents</h3>
                      <div className="file-uploads">
                        <div className="file-upload">
                          <label>CV/Resume *</label>
                          <input
                            type="file"
                            name="cv"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            required
                          />
                          <small>PDF, DOC, or DOCX format</small>
                        </div>
                        <div className="file-upload">
                          <label>Passport Copy *</label>
                          <input
                            type="file"
                            name="passport"
                            onChange={handleFileChange}
                            accept=".pdf,.jpg,.jpeg,.png"
                            required
                          />
                          <small>PDF or image format</small>
                        </div>
                        <div className="file-upload">
                          <label>Cover Letter (Optional)</label>
                          <input
                            type="file"
                            name="coverLetter"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                          />
                          <small>PDF, DOC, or DOCX format</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="form-navigation">
                {currentStep > 1 && (
                  <button type="button" onClick={prevStep} className="btn btn-outline">
                    Previous
                  </button>
                )}
                
                {currentStep < totalSteps ? (
                  <button type="button" onClick={nextStep} className="btn btn-primary">
                    Next Step
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary">
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="application-support">
        <div className="container">
          <div className="support-content">
            <h2>Need Help with Your Application?</h2>
            <p>Our team is here to help you through the application process.</p>
            <div className="support-options">
              <div className="support-option">
                <div className="support-icon">📧</div>
                <h3>Email Support</h3>
                <p>Send us your questions at <a href="mailto:apply@srilankavol.org">apply@srilankavol.org</a></p>
              </div>
              <div className="support-option">
                <div className="support-icon">💬</div>
                <h3>WhatsApp Chat</h3>
                <p>Chat with us on WhatsApp: <a href="https://wa.me/94771234567">+94 77 123 4567</a></p>
              </div>
              <div className="support-option">
                <div className="support-icon">📞</div>
                <h3>Phone Support</h3>
                <p>Call us during business hours: <a href="tel:+94771234567">+94 77 123 4567</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyNow;
