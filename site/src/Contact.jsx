import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contactTitle">Contact Me</h2>
      <form className="contactForm">
        <div className="formGroup">
          <label htmlFor="name" className="formLabel">Name:</label>
          <input type="text" id="name" className="formInput" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" className="formLabel">Email:</label>
          <input type="email" id="email" className="formInput" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" className="formLabel">Message:</label>
          <textarea id="message" className="formTextarea" required></textarea>
        </div>
        <button type="submit" className="formButton">Send Message</button>
      </form>
    </section>
  );
}
