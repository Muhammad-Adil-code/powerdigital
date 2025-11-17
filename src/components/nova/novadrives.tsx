import React from 'react'
import Untitled from '../../images/Untitled-1080-x-750-px-5.png'
export default function novadrives() {
  return (
   <>
   <section className="data-driven-insight data-driven-insight--nova bg-dark">
      <div className="separator">
        <div className="separator__title">
          <h2>
  Burac AI turns data into measurable growth <span>faster than ever.</span>
</h2>

        </div>
        <hr />
      </div>
      <div className="subtitle">
        <h3>Integrate. Analyze. Activate.</h3>
      </div>
      <div className="single-hero">
        <div className="single-hero__text">
          <div className="text">
  <h4>Integrate your data into one secure platform</h4>
  <p>
    Seamlessly connect your first-party and marketing data into the Burac AI Cloud, 
    powered by enterprise-grade security and performance.
  </p>
</div>
<div className="text">
  <h4>Data experts working for you</h4>
  <p>
    Instantly gain insights as our team of data scientists, strategists, and analysts 
    uncover patterns and intelligence that fuel smarter, faster decisions.
  </p>
</div>
<div className="text">
  <h4>Activate a data-driven growth plan</h4>
  <p>
    We deliver clear insights, identify growth opportunities, and provide an accurate 
    revenue forecast — then bring your strategy to life with precision and impact.
  </p>
</div>

          <a
            href="https://powerdigitalmarketing.com/work-with-us/"
            className="btn btn-secondary"
          >
            <div className="icon">
              <span>Get a complimentary nova appraisal</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
        <div className="single-hero__image">
          <img src={Untitled.src} alt="" />
        </div>
      </div>
    </section>
   </>
  )
}
