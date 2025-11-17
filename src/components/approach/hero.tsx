import React from 'react'
import Image from 'next/image'
import Approach from '../../images/Approach.png'


export default function hero() {
  return (
<>
 <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">How we work</span>
        <div className="title">
          <h2>Beyond Tactics. Toward Transformative Growth.</h2>
        </div>
        <div className="text">
          <p>
            At Burac.ai, we go beyond surface-level marketing to deliver next-level growth.
Where traditional agencies complicate execution, we simplify through intelligence — using AI-driven data models, predictive insights, and performance alignment to unlock measurable, repeatable success.

Brands partner with Burac.ai when they want more than impressions and engagement — they want revenue acceleration, clean data ecosystems, and strategic clarity for scalable, profitable growth.

We don’t just analyze performance — we engineer outcomes.
          </p>
        </div>
        <a
          href="https://powerdigitalmarketing.com/work-with-us/"
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
        <Image src={Approach} alt="" />
      </div>
    </section>
</>  )
}
