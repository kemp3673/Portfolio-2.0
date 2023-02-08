import React from 'react';
import './contact.css';

import contactBackground from '../../assets/contactBackground.jpeg';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit() called', e.target);
  };

  return (
    <div className="contact" id="contact">
      <div className="contactLeft">
        <img src={contactBackground} alt="iphone image" className="contactImg" />
      </div>
      <div className="contactRight">
        <h2 className="contactTitle" >Contact</h2>
        <form className="contactForm">
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" onClick={e => handleSubmit(e)}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;