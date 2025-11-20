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
              We're not just a digital partner at Burac.ai; we're also your AI-powered growth and diligence partner. The goal of our specialist Private Equity business is to speed up portfolio performance and lower the risk of investments through smart, data-driven marketing analysis.With Burac Core, our own AI platform, we help private equity groups and capital partners find hidden growth levers that directly affect valuation and investment outcomes, as well as find untapped opportunities and test thesis assumptions.
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
          <Image src={image} alt="" />
        </div>
      </section>
    </>
  )
}
