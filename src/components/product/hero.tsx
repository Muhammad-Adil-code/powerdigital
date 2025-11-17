import React from 'react'
import Image from 'next/image'
import cosumerproduct from "../../images/Consumer-Product.png";
export default function hero() {
  return (
    <>
    <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">
          Consumer Product Services
        </span>
        <div className="title">
          <h1>B2C Technology & AI Solutions for Leading Brands</h1>
        </div>
        <div className="text">
          <p>
            <span style={{ fontWeight: 400 }}>
              Discover how Burac.ai AI-driven development, intelligent automation, and data-focused insights deliver the right product, message, or digital experience to the right audience at the perfect moment. With unmatched understanding of consumer behavior and digital touchpoints, we help you scale smarter, launch faster, and deepen customer loyalty. Let’s turn your innovative ideas into market-leading impact.
            </span>
          </p>
        </div>
        <a
          href="https://powerdigitalmarketing.com/work-with-us/"
          className="btn btn-secondary"
        >
          <div className="icon">
            <span>Request a Consultation</span>
            <i className="icon-arrow-up-right" />
          </div>
        </a>
      </div>
      <div className="single-hero__image">
        <div className="single-badge"></div>
        <Image src={cosumerproduct} alt="" />
      </div>
    </section>
    </>
  )
}
