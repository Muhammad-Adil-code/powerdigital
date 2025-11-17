import React from 'react'
import cpg from '../../images/CPG.png';
import Image from 'next/image'
export default function hero() {
  return (
    <>
     <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">
          Consumer Product Services
        </span>
        <div className="title">
          <h1>Where CPG Brands Grow Smarter with AI</h1>
        </div>
        <div className="text">
          <p>
            <span style={{ fontWeight: 400 }}>
              For modern CPG brands, the old growth playbook no longer works. Fragmented sales channels, evolving consumer behavior, and rising retail pressures demand solutions that do more than drive clicks — they must deliver total business outcomes.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              Burac.ai helps CPG brands unify data, integrate DTC and retail strategies, and scale what truly works. Whether you’re building retail velocity, optimizing digital spend, or improving margins, we plug into your operations as an extension of your team, providing the strategy, AI tools, and insights to unlock your next chapter of growth.
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
        <Image src={cpg} alt="" />
      </div>
    </section>{" "}
    </>
  )
}
