import React, { useState } from 'react';
import { Mail, Zap, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const GithubIcon = ({ size }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>);
const LinkedinIcon = ({ size }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });

  const RECIPIENT_EMAIL = 'abdrazakesankara@gmail.com';
  const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `Portfolio Contact from ${formState.name}`
        })
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: false });
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus({ submitting: false, success: false, error: true });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper glass-card">
          <div className="contact-info">
            <h2 className="section-title" style={{marginBottom: '1rem'}}>Initialize Connection</h2>
            <p className="contact-desc">
              Currently seeking opportunities to apply my skills in software engineering, robotics, and intelligent systems. 
              Whether you have a question or just want to say hi, my inbox is open.
            </p>
            
            <div className="contact-links">
              <a href={`mailto:${RECIPIENT_EMAIL}`} className="contact-link">
                <div className="contact-icon"><Mail size={24} /></div>
                <div>
                  <h4 className="mono-text">Transmission</h4>
                  <p>{RECIPIENT_EMAIL}</p>
                </div>
              </a>
              
              <a href="https://github.com/sankara012" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon"><GithubIcon size={24} /></div>
                <div>
                  <h4 className="mono-text">Repository</h4>
                  <p>github.com/sankara012</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/abdrazake-sankara-684228325/" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon"><LinkedinIcon size={24} /></div>
                <div>
                  <h4 className="mono-text">Network</h4>
                  <p>LinkedIn Profile</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="form-header">
              <Zap size={20} className="flash-icon" /> <span>Direct Link</span>
            </div>

            {status.success ? (
              <div className="form-success glass-card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle size={48} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
                <h3 className="mono-text" style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>TRANSMISSION SUCCESSFUL</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Thank you! Your message has been transmitted directly to <strong>{RECIPIENT_EMAIL}</strong>.
                </p>
                <button 
                  onClick={() => setStatus({ submitting: false, success: false, error: false })}
                  className="btn btn-outline" 
                  style={{ marginTop: '1.5rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Identification</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Return Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Payload</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4" 
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Enter your message" 
                    required
                  ></textarea>
                </div>

                {status.error && (
                  <div style={{ color: '#ef4444', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertCircle size={16} /> Error sending transmission. Please try again or email directly.
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={status.submitting}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {status.submitting ? 'TRANSMITTING...' : 'TRANSMIT DATA'}
                </button>
              </form>
            )}
          </div>
        </div>
        
        <footer className="footer">
          <p className="mono-text">Built by Abdrazake Sankara.</p>
          <p className="footer-small">Designed with React + Vite.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
