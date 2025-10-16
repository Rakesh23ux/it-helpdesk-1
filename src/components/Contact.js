import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out to Tech Mahindra Helpdesk! We will respond soon.');
    setFormData({name: '', email: '', subject: '', message: ''});
  };

  return (
    <section 
      className="contact-section py-5"
      style={{
        background: 'linear-gradient(135deg, #f3f2ed9f, #b71c1c,  #f3f2ed9f)',
        color: '#fff',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-start">
          {/* Contact Us Content */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div style={{background: 'rgba(183, 28, 28, 0.8)', borderRadius: 8, padding: 25, boxShadow: '0 4px 10px rgba(0,0,0,0.3)'}}>
              <h2 style={{fontWeight: 700, marginBottom: 15}}>Contact Us</h2>
              <p>Tech Mahindra Helpdesk is here to support your IT needs. Whether you are experiencing technical difficulties, want to learn more about our services, or need personalized assistance, please reach out.</p>
              <p>Our dedicated team ensures prompt resolutions to help your technology run smoothly.</p>
              <h4 style={{borderBottom: '2px solid #ffeb3b', paddingBottom: 10, marginTop: 20}}>Contact Information</h4>
              <p><strong>Email:</strong> support@techmahindrahelpdesk.com</p>
              <p><strong>Phone:</strong> 08222 2222 2220</p>
              <p><strong>Address:</strong> Near MDP Junction, Vizag, Andhra Pradesh, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6 col-md-8">
            <form 
              onSubmit={handleSubmit}
              style={{backgroundColor: '#fff', padding: 30, borderRadius: 12, boxShadow: '0 6px 20px rgba(0,0,0,0.3)', color: '#333'}}
            >
              <h2 style={{color: '#b71c1c', fontWeight: 700, letterSpacing: 1.5, marginBottom: 20, textAlign: 'center'}}>
                Get In Touch
              </h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{color: '#b71c1c', fontWeight: 600}}>Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-control" 
                  placeholder="Your name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={{color: '#b71c1c', fontWeight: 600}}>Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control" 
                  placeholder="Your email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label" style={{color: '#b71c1c', fontWeight: 600}}>Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="form-control" 
                  placeholder="Subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label" style={{color: '#b71c1c', fontWeight: 600}}>Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  className="form-control" 
                  placeholder="Your message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                />
              </div>
              <button 
                type="submit" 
                className="btn w-100" 
                style={{backgroundColor: '#b71c1c', color: '#ffeb3b', fontWeight: 'bold', fontSize: 18, borderRadius: 8}}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
