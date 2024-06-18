import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_994ba48', 'template_3avjnkf', form.current, {
        publicKey: 'VDcat1iLgv_00HSpF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact'>
    <div className='contact-container'>
      <h1>Contact</h1>
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label htmlFor="from_name">Name</label>
      <input type="text" id="from_name" name="from_name" required />
      <label htmlFor="from_email">Email ID</label>
      <input type="email" id="from_email" name="from_email" required />
      <label htmlFor="message">Write to Me</label>
      <textarea id="message" name="message" required />
      <input type="submit" value="Send" />
    </form>
    </div>
    </section>
  );
}

export default Contact;
