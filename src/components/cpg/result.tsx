import React from 'react'
import image1 from '../../images/2-768x768.png'
import CountUp from '../Home/CountUp';
export default function result() {
  return (
    <>
      <section className="section-three-data-number bg-dark">
        <div className="section-three-data-number__text">
          <div className="title">
            <h2>Proven Results</h2>
          </div>
          <div className="description">
            <p>Our track record speaks for itself.</p>
          </div>
          <div className="section-three-data-number__insight insight-section">
            <div>
              <div className="item">
                <CountUp end={+27} duration={3} suffix="x" />
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Average YOY revenue growth for clients
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="item">
                <CountUp end={2.6} duration={3} suffix="x" />
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Faster than industry standard
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="item">
                <CountUp end={300} duration={3} suffix="M+" />
                <p>
                  <span style={{ fontWeight: 400 }}>Consumer data points leveraged by Burac.ai</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-three-data-number__image-text">
          <div className="image">
            <picture>
              <img src={image1.src} alt="" />
            </picture>
          </div>
          <div className="text">
            <span className="badge rounded-pill bg-light">Our Results</span>
            <div className="data-driven-insight__insight insight-section">
              <div>
                <CountUp end={22} duration={3} suffix="%" />
                <p>YoY Increase in Gross eComm Revenue</p>
              </div>
              <div>
                <CountUp end={25} duration={3} suffix="%" />
                <p>YoY Increase in New Customers</p>
              </div>
            </div>
            <div className="description">
              <p>
                Burac.ai altered ViX Paula Hermanny’s growth.   By evaluating main target segments, refining acquisition and retention offers, and establishing a complex, AI-driven marketing mix, we helped ViX gain and retain higher-value consumers while reducing discounts and ad expenditure.   The result: dramatic top-line growth and measurable ROI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
