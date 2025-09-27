import React from "react";

import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} فروشگاه ما. همهٔ حقوق محفوظ است.</p>
      <div className="footer-links">
        <a href="/contact">تماس با ما</a>
        <a href="/about">درباره ما</a>
      </div>
    </footer>
  );
}