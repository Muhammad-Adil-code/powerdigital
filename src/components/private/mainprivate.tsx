import React from 'react'
import Image from 'next/image'
import image from '../../images/PE.png'
export default function mainprivate() {
  return (
    <>
    <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">Delivering Alpha</span>
        <div className="title">
          <h1>Private Equity Growth Intelligence Services</h1>
        </div>
        <div className="text">
          <p>
            At Burac.ai, we’re more than a digital partner — we’re your AI-powered growth and diligence ally.
Our dedicated Private Equity practice has one mission: to accelerate portfolio performance and de-risk investments through intelligent, data-driven marketing analysis.With Burac Core, our proprietary AI platform, we empower private equity groups and capital partners to expose untapped opportunity, validate thesis assumptions, and identify hidden growth levers that directly influence valuation and investment outcomes.
          </p>
        </div>
        <a
          href="https://powerdigitalmarketing.com/work-with-us/"
          className="btn btn-secondary"
        >
          <div className="icon">
            <span>Get in Touch</span>
            <i className="icon-arrow-up-right" />
          </div>
        </a>
      </div>
      <div className="single-hero__image">
        <div className="single-badge"></div>
        <Image src={image.src} alt="" />
      </div>
    </section>
    </>
  )
}
