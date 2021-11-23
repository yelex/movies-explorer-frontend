import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__content">
        <p class="footer__author">&copy; 2021</p>
        <nav className="footer__nav">
          <ul className="footer__links">
            <li className="footer__link-item">
              <a href="https://github.com" className="footer__link">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__link-item">
              <a href="https://github.com" className="footer__link">
                Github
              </a>
            </li>
            <li className="footer__link-item">
              <a href="https://github.com" className="footer__link">
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;