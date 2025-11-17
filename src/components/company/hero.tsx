import React from 'react'
import imag1 from '../../images/DSC00591-scaled.jpg'
export default function hero() {
  return (
    <>
    <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">WHO WE ARE</span>
        <div className="title">
  <h1>We are a growth intelligence company built on conviction, not convention.</h1>
</div>
<div className="text">
  <p>
    If you’re searching for a team that simply nods along, you’re in the wrong place. 
    At Burac AI, we challenge assumptions, question comfort zones, and back every strategy with data and intent. 
    We partner with you to unlock measurable growth — not just in numbers, but in lasting business impact. 
    Because when conviction meets insight, results follow naturally.
  </p>
</div>

      </div>
      <div className="single-hero__image">
        <div className="single-badge"></div>
        <img src={imag1.src} alt="" />
      </div>
    </section>
    </>
  )
}
