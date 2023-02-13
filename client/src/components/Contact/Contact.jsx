import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

import contactBackground from '../../assets/contactBackground.jpeg';

const Contact = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/contact', {
      email: email,
      message: message
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <div className="contact" id="contact">
      <div className="contactLeft">
        <img src={contactBackground} alt="iphone image" className="contactImg" />
      </div>
      <div className="contactRight">
        <h2 className="contactTitle" >Contact</h2>
        <form className="contactForm">
          <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
          <textarea placeholder="Message" onChange={e => setMessage(e.target.value)}/>
          <button type="submit" onClick={e => handleSubmit(e)}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;