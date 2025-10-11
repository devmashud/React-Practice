import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);

    // এখানে তুমি ভবিষ্যতে EmailJS বা API call যোগ করতে পারো
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have a story, tip, or feedback? We'd love to hear from you. Reach out to{" "}
        <strong>The Fact Forge</strong> below 👇
      </p>

      <div className="contact-form-wrapper">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {submitted && (
          <div className="success-message">
            ✅ Thank you for reaching out! We’ll get back to you soon.
          </div>
        )}
      </div>

      <div className="contact-info">
        <h3>Other Ways to Reach Us</h3>
        <p>📧 Email: info@thefactforge.com</p>
        <p>📍 Location: Chittagong, Bangladesh</p>
        <p>🌐 Website: www.thefactforge.com</p>
      </div>
    </div>
  );
};

export default Contact;
