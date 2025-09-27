import React, { useState } from "react";
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`پیام شما ارسال شد:\n\nنام: ${form.name}\nایمیل: ${form.email}\nپیام: ${form.message}`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>تماس با ما</h1>
      <p>سوال یا پیشنهادی دارید؟ فرم زیر را پر کنید یا با ما تماس بگیرید.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="نام شما"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل شما"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="پیام شما"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">ارسال</button>
      </form>
    </div>
  );
}
