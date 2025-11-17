import React from 'react'
import image from "../../images/2-768x768.png";
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
              <CountUp end={2.6}  duration={3} suffix="x" />
              {/* <h3 data-value="2.6x">0</h3> */}
              <p>Faster growth rates than the industry average</p>
            </div>
          </div>
          <div>
            <div className="item">
              <CountUp end={27}  duration={3} suffix="%" />
              {/* <h3 data-value="+27%">0</h3> */}
              <p>Average YoY increase in client revenue</p>
            </div>
          </div>
          <div>
            <div className="item">
              <CountUp end={300}  duration={3} suffix="M+" />
              {/* <h3 data-value="300M+">0</h3> */}
              <p>
                Data points leveraged by Burac.ai applications to drive insights
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-three-data-number__image-text">
        <div className="image">
          <picture>
            <img src={image.src} alt="" />
          </picture>
        </div>
        <div className="text">
          <span className="badge rounded-pill bg-light">Our Results</span>
          <div className="data-driven-insight__insight insight-section">
            <div>
              <CountUp end={22}  duration={3} suffix="%" />
              {/* <h3 data-value="22%">0</h3> */}
              <p>YoY Increase in Gross eComm Revenue</p>
            </div>
            <div>
              <CountUp end={34}  duration={3} suffix="%" />
              {/* <h3 data-value="25%">0</h3> */}
              <p>YoY Increase in New Customers</p>
              <p> </p>
            </div>
          </div>
          <div className="description">
            <p>
              Burac.ai helped ViX Paula Hermanny scale sustainably. By analyzing primary audience cohorts, optimizing acquisition and retention offers, and implementing a sophisticated AI-driven marketing mix, we captured higher-value customers while reducing discounts and advertising costs — creating transformative top-line growth.
            </p>
          </div>
        </div>
      </div>
    </section>{" "}
    </>
  )
}
