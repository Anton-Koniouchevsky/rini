import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <Link to="/" className="footer__link">
          <h2 className="logo">Rini</h2>
        </Link>
        <div className="footer__author">by Anton Koniouchevsky, 2018</div>
      </div>
      <div className="footer__social">
        <a href='https://github.com/Anton-Koniouchevsky' target='_blank' className="link fa fa-github fa-3x" aria-hidden="true" />
        <a href='https://codepen.io/anton-koniouchevsky/' target='_blank' className="link fa fa-codepen fa-3x" aria-hidden="true" />
        <a href='mailto:anton.koniouchevsky@gmail.com' target='_blank' className="link fa fa-google-plus fa-3x" aria-hidden="true" />
      </div>
    </footer>
  )
};

export default Footer;

