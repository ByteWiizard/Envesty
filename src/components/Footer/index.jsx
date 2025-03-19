import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import './footer.scss'

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const copyrightLinks = [
    {
      title: 'Privacy Policy',
      href: '/legal/privacy-policy'
    },
    {
      title: 'Terms of Service',
      href: '/legal/terms-of-service'
    }
  ]

  const serviceMenu = [
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Careers',
      href: '/career'
    },
    {
      title: 'Contact Us',
      href: '/contact'
    },
    {
      title: 'Services',
      href: '/services'
    }
  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row flex">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc='/images/latest/image.png'
                  logoAlt='Envesty Logo'
                  additionalLogos={[
                    // {
                    //   src: '/images/latest/pngwing.com-removebg-preview.png',
                    //   alt: 'Additional Logo 1',
                    // },
                    // {
                    //   src: '/images/latest/image (1).png',
                    //   alt: 'Additional Logo 2'
                    // }
                  ]}
                />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget 
                  title="Get in Touch"
                  email="support@envesty.in"
                  phone="+91 9876819933"
                  address="Noida, Uttar Pradesh, India"
                />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading='Quick Links' />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title='Book a Free Consultation'
                  subtitle='Take the first step towards transforming your business'
                  placeholder='Enter your email'
                  btnText='Book Now'
                />
                <SocialWidget />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright"> 2024 Envesty. All rights reserved.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant='cs-style2'/>
          </Div>
        </Div>
      </Div>
    </footer>
  )
}
