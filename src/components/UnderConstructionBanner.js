import React from "react";
import '../stylesheets/UnderConstructionBanner.scss';

export default function UnderConstructionBanner() {
  return (
    <div className='under-construction-banner'>
      <p className='under-construction-banner__text'>
        Please bare with, this site is constantly under development as I continue to learn on how
        to be
        <a
          className='under-construction-banner__link'
          href='https://www.w3.org/WAI/standards-guidelines/wcag/'
          target='_blank'
          rel='noopener noreferrer'
        >AA Web Content Accessibility Guidelines 2.1 (WCAG)</a>compliant.
      </p>

      <a className='under-construction-banner__back-to-top' href='/#'>Back to top</a>
    </div>
  )
}