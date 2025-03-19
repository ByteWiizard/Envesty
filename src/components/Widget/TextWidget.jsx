import React from 'react'
import Div from '../Div'
import './TextWidget.scss'

export default function TextWidget({logoSrc, logoAlt, text, additionalLogos}) {
  return (
    <Div className="cs-text_widget">
      <div className="cs-logo_container">
        <img src={logoSrc} alt={logoAlt} className="cs-main_logo" />
        {additionalLogos && (
          <div className="cs-additional_logos">
            {additionalLogos.map((logo, index) => (
              <img 
                key={index}
                src={logo.src} 
                alt={logo.alt} 
                className="cs-additional_logo"
              />
            ))}
          </div>
        )}
      </div>
      <p>{text}</p>
    </Div>
  )
}
