import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
      
        <section className='contact-form'>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
              
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Your message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            
          </div>
          <button type="submit">Send</button>
        </section>
        
    );
}

export default ContactForm;