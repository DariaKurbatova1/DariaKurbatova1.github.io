import './Contact.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_fohro7v', 'template_mb1dhzd', formRef.current, 'ambx60xTSMtyqjyoS')
      .then(() => {
        alert('Email sent successfully!');
      }, (error) => {
        alert('Failed to send email. Please try again later.' + error.text);
        console.log(error)
      });
  };
  return (
    <section id="contact" className="contact">
      <h2 className="contactTitle">Contact</h2>
      <form ref={formRef} onSubmit={sendEmail} className="contactForm">
        <div className="formGroup">
          <label htmlFor="name" className="formLabel">Name/Nom:</label>
          <input type="text" id="name" name="from_name" className="formInput" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" className="formLabel">Email:</label>
          <input type="email" id="email" name="reply_to" className="formInput" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" className="formLabel">Message:</label>
          <textarea id="message" name="message" className="formTextarea" required></textarea>
        </div>
        <button type="submit" className="formButton">Send Message/Envoyer Message</button>
      </form>
    </section>
  );
}
