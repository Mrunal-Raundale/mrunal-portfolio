import React, { useState } from 'react';
import '../styles/Contact.css';

const contactLinks = [
  {
    icon: 'ti-mail',
    label: 'mrunal0.com@gmail.com',
    href: 'mailto:mrunal0.com@gmail.com',
  },
  {
    icon: 'ti-brand-github',
    label: 'github.com/Mrunal-Raundale',
    href: 'https://github.com/Mrunal-Raundale',
  },
  {
    icon: 'ti-brand-linkedin',
    label: 'linkedin.com/in/mrunal-raundale',
    href: 'https://www.linkedin.com/in/mrunal-raundale/',
  },
  {
    icon: 'ti-map-pin',
    label: 'Pune, Maharashtra, India',
    href: 'https://maps.app.goo.gl/HW1EgDNBxm3BTNEk7',
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend or a service like EmailJS / Formspree
    console.log('Form submitted:', form);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="contact-section section-wrapper">
      <div className="section-label">Let's connect</div>
      <div className="section-title">Contact</div>
      <div className="divider"></div>

      <div className="contact-grid">
        {/* Left info */}
        <div className="contact-info">
          <p>
            Have a project in mind, want to collaborate on something MERN-related,
            or just want to say hi? I'd love to hear from you. Fill in the form or
            reach out directly.
          </p>
          <div className="contact-links">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                className="contact-link"
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <i className={`ti ${c.icon}`}></i>
                {c.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Subject</label>
            <input
              className="form-input"
              type="text"
              name="subject"
              placeholder="What's this about?"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              name="message"
              placeholder="Tell me about your project or idea..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="send-btn" type="submit">
            {sent ? '✓ Message sent!' : 'Send message →'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
