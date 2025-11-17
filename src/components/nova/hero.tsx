import React from 'react'
import untitled from '../../images/Untitled-1080-x-750-px-4.png'
export default function hero() {
  return (
   <>
   <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">NOVA</span>
        <div className="title">
          <h1>Nothing beats certainty.</h1>
        </div>
        <div className="text">
          <p>
  Effective marketing starts with data you can trust. That’s why Burac AI built its proprietary analytics platform — designed to turn first-party data into actionable insights. It empowers marketing teams to make data-driven decisions, uncover new growth opportunities, reduce wasted spend, and maximize profitability.
</p>

        </div>
      </div>
      <div className="single-hero__image">
        <div className="single-badge"></div>
        <img src={untitled.src} alt="" />
      </div>
    </section>
   </>
  )
}
