import React from "react";
import "./stylesheets/Footer.scss";

export default function Footer() {
  return (
    <section id="footer" className='footer'>
      <div className="footer__content">
        <p className='footer__text'>
          Please bare with, this site is constantly under development as I continue to learn on how
          to be
          <a
            className='footer__link'
            href='https://www.w3.org/WAI/standards-guidelines/wcag/'
            target='_blank'
            rel='noopener noreferrer'
          >AA Web Content Accessibility Guidelines 2.1 (WCAG)</a>compliant.
        </p>

        <a className='footer__back-to-top' href='/#'>Back to top</a>
      </div>
    </section>
  );
}
