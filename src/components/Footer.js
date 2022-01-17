import { LinkExternal } from './partials/Links'
import scrollToTop from "../utilities/ScrollToTop";

import "../styles/Footer.scss";

export default function Footer() {
  return (
    <section id="footer" className='footer'>
      <div className="footer__content">
        <p className='footer__text'>
          This site is an open work-in-progress while I continue to learn and apply relevant accessibility standards.
          This site aims to be
          <LinkExternal
            className="footer__link"
            type="link"
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            text="Web Content Accessibility Guidelines 2.1 (WCAG)" />
          AA compliant.
        </p>
        <button
          className='footer__back-to-top'
          onClick={() => scrollToTop()}
          role="link">
          Back to top
        </button>
      </div>
    </section>
  );
}
