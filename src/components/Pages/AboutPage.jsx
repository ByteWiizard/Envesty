import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
// import { ChevronsRight } from 'lucide-react';
import styles from './AboutPage.module.css';

export default function AboutPage() {
  pageTitle('About');

  const funfaceData = [
    {
      title: 'Virtual Co-Founder',
      link: '/services#virtual-cofounder'
    },
    {
      title: 'Digital Transformation',
      link: '/services#digital-transformation'
    },
    {
      title: 'Legal Consultancy',
      link: '/services#legal-consultancy'
    },
    {
      title: 'Business Consultancy',
      link: '/services#business-consultancy'
    },
    {
      title: 'Personal Finance & Counselling',
      link: '/services#personal-finance'
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="About Us"
        bgSrc="/images/hero_bg_3.jpeg"
        pageLinkText="About Us"
      />

      <section className={styles.aboutSection}>
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <div className={styles.aboutCard}>
                <SectionHeading
                  title="Your trusted partner for Personal Finance and Business Services"
                  subtitle="About Our Company"
                  titleClassName={styles.blackTitle}
                >
                  <div className={styles.aboutContent}>
                    <p>
                    At Envesty, we are committed to being your Growth & Wealth Partner, empowering both businesses and individuals to achieve financial success and sustainable growth. Our unique approach integrates Business Services—including Virtual Co-Founder mentorship, Digital Transformation, Legal Consultancy, and Business Advisory—with Personal Finance solutions such as Financial Planning and Masterclasses.
                    </p>
                  </div>
                  <div className={styles.separator}></div>
                </SectionHeading>
              </div>
            </Div>
            <Div className="col-xl-6 offset-xl-1 col-lg-6">
              <div className={styles.aboutCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src="images/demo/🔍 Is Your Business Ready for an Audit_ Knowing….jpeg"
                    alt="About Envesty"
                    className="w-100"
                  />
                </div>
              </div>
            </Div>
          </Div>

          <Spacing lg="80" md="60" />

          <div className={styles.funFactGrid}>
            {funfaceData.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                className={styles.funFactCard}
              >
                <h3 className={styles.funFactTitle}>{item.title}</h3>
              </a>
            ))}
          </div>

          <Spacing lg="80" md="60" />

          <Div className="row align-items-center">
            <Div className="col-xl-6 col-lg-6">
              <div className={styles.aboutCard}>
                <div className={styles.imageWrapper}>
                  <img
                    src="/images/finance.png"
                    alt="Financial Services"
                    className="w-100"
                  />
                </div>
              </div>
            </Div>
            <Div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className={styles.aboutCard}>
                <SectionHeading
                  title="Why Choose Envesty?"
                  subtitle="Our Expertise"
                  titleClassName={styles.blackTitle}
                >
                  <div className={styles.aboutContent}>
                    <p>
                    We understand that financial stability and business success go hand in hand. That’s why we provide a holistic ecosystem where MSMEs, startups, and individuals can access expert-backed mentorship, compliance support, and wealth-building strategies—all under one trusted platform.
                    </p>
                    <p>
                    With a strong focus on affordability, accessibility, and impact, we offer Big 4-level expertise at MSME-friendly prices, ensuring that businesses grow efficiently and individuals secure their financial futures. Whether you’re an entrepreneur looking to scale or an individual planning your investments, Envesty is your one-stop solution for success.
                    </p>
                    {/* <p className="cs-m0">
                      <ChevronsRight /> Affordable Solutions: We are committed to making our services cost-effective without compromising quality.
                    </p>

                    <p className="cs-m0">
                      <ChevronsRight /> Tailored Approach: Every client is unique, and so are our strategies to address their needs.
                    </p>

                    <p className="cs-m0">
                      <ChevronsRight /> Expert Network: Access to a diverse network of professionals, from financial advisors to legal
                      experts and mentors.
                    </p>

                    <p className="cs-m0">
                      <ChevronsRight /> Technology-Driven: Leveraging the latest tools to deliver efficient and impactful solutions.
                    </p> */}
                  </div>
                  <div className={styles.separator}></div>
                </SectionHeading>
              </div>
            </Div>
          </Div>
        </Div>
      </section>

      <Spacing lg="70" md="50" />
      <Cta
        title={`" Transforming Ideas Into <br /> Sustainable Business Growth "`}
        btnText="Schedule A Meeting"
        btnLink="/contact"
        bgSrc="/images/cta_bg.jpeg"
      />
    </>
  );
}
