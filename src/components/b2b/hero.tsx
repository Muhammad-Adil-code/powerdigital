import React from 'react'
import B2B from '../../images/B2B.png'
export default function hero() {
  return (
    <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">Grow Smarter, Faster</span>
        <div className="title">
          <h1>B2B Technology &amp; AI Solutions Partner</h1>
        </div>
        <div className="text">
          <p>
            <span style={{ fontWeight: 400 }}>
              Experience what happens when powerful AI, intelligent automation, and strategic consultancy work together – delivering the right digital products, to the right users, at the right time.  Burac.ai allows organizations to turn complicated obstacles into measurable growth through precision engineering and data excellence.
            </span>
          </p>
        </div>
        <a
          href="#"
          className="btn btn-secondary"
        >
          <div className="icon">
            <span>Request a consultation</span>
            <i className="icon-arrow-up-right" />
          </div>
        </a>
      </div>
      <div className="single-hero__image">
        <div className="single-badge"></div>
        <img src={B2B.src} alt="" />
      </div>
    </section>
  )
}
