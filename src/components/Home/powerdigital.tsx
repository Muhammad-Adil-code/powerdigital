import Image from "next/image";
import CountUp from "./CountUp";
import FadeUpAnimatedImage from "./animateimage";
import ProfileImageFromFigma from '../../images/Profile-Image-from-Figma.png';
import LogoBlock from '../../images/Logo-Block.png';
import Hero1Desktop from '../../images/Hero1_Desktop_90ff40f9-4f69-4acd-ab6f-d5ac8cb69d12-2-e1733342755528.webp';
export default function powerdigital() {
  return (
    <>
     <section className="data-driven-insight bg-dark">
      <div className="separator">
        <div className="separator__title">
          <h2>Get insights that outsmart uncertainty.</h2>
          <Image src={LogoBlock} alt="img"  />
        </div>
        <hr />
        <div className="separator__text">
          <span>BURAC.AI</span>
          <div>
            <span>OUR RESULTS</span>
          </div>
        </div>
      </div>
      
      <div className="data-driven-insight__content">
        <FadeUpAnimatedImage className="data-driven-insight__image" src={Hero1Desktop}
          alt="img" />
        {/* <Image"
          className="data-driven-insight__image fade-up"
          src={Hero1Desktop}
          alt="img"
        /> */}
        <article className="note bg-primary">
          <div className="note__text">
            <p>
              Burac.ai brings a data-intelligent, engineering-first mindset to every project — merging AI-driven insights with agile development to uncover growth opportunities others miss. Our approach goes beyond traditional digital solutions; we dive deep into the operational and commercial layers of your business to ensure every strategy and product we build is scalable, secure, and ROI-positive.
            </p>
          </div>
          <div className="testimonial-person">
            <div className="person-info">
              <div className="person-photo">
                <Image
                  src={ProfileImageFromFigma}
                  alt="img"
                />
              </div>
              <div className="person-details">
                <h3 className="person-name interface-small">Ashley Bryan</h3>
                <p className="person-title">Chief Digital Officer @ L’AGENCE</p>
              </div>
            </div>
            <div className="company-logo">
              <Image src={LogoBlock} alt="img"  />
            </div>
          </div>
        </article>
        <div className="data-driven-insight__text">
          <span className="badge rounded-pill bg-light">Our results</span>
          <div className="data-driven-insight__insight  insight-section">
            <div>
              <CountUp  end={32} suffix="%" prefix="+"/>
              <p>
                Increase in client efficiency and revenue growth — powered by AI automation and intelligent analytics.
              </p>
            </div>
            <div>
             <CountUp  end={97} suffix="%" />
              <p>
                Client retention rate — because reliability, transparency, and tangible results are our default.
              </p>
            </div>
          </div>
          <div className="paragraph">
            <p>
              At Burac.ai, we invest in breakthrough technologies and elite developers to deliver results that outperform expectations. Partner with us for an integrated, AI-powered strategy designed to accelerate growth, increase profitability, and future-proof your business.
            </p>
          </div>
          <a
            href="https://powerdigitalmarketing.com/case-studies/"
            className="btn btn-secondary"
          >
            <div className="icon">
              <span>Our impact</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
    </>
  )
}
