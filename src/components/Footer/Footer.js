import React from "react";
import "./Footer.scss";

export default function Footer(props) {
  function scrollToTop() {
    props.window.scrollTo(0, 0);
  }

  return (
    <section id="footer" className='footer'>
      <div className="footer__content">
        <p className='footer__text'>
          This site is an open work-in-progress while I continue to learn and apply relevant accessibility standards.
          This site aims to be
          <a
            className='footer__link'
            href='https://www.w3.org/WAI/standards-guidelines/wcag/'
            target='_blank'
            rel='noopener noreferrer'
          >Web Content Accessibility Guidelines 2.1 (WCAG)</a>AA compliant.
        </p>
        <p className='footer__back-to-top' onClick={() => scrollToTop()}>Back to top</p>
      </div>
    </section>
  );
}
