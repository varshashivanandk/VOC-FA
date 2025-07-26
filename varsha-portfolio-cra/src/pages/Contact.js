import React from 'react';

const Contact = () => (
  <section id="contact" className="form">
    <h2 align="center">Contact Form</h2>
    <p align="center">Fill out the form below and I'll get back to you as soon as possible.</p><br />
    <form>
      <b>Full Name:</b>
      <input type="text" placeholder="Enter your Full Name" className="name" /><br />
      <b>Email:</b>
      <input type="email" placeholder="Enter your Email ID" className="email" /><br />
      <b>Subject:</b>
      <input type="text" placeholder="Subject" className="subject" /><br />
      <b>Message:</b>
      <textarea id="message" name="message" placeholder="Type your message here..." rows="10" cols="30"></textarea><br />
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default Contact;
