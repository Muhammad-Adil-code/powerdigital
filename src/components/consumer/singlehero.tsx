import ConsumerService from "../../images/Consumer-Service.png"
import React from 'react'
import Image from "next/image"
export default function singlehero() {
  return (
    <section className="single-hero bg-light  ">
      <div className="single-hero__text">
        <span className="badge rounded-pill bg-dark">Intelligent Growth Solutions</span>
        <div className="title">
          <h1>Pipeline & Lead Optimization Services</h1>
        </div>
        <div className="text">
          <p>
            <span style={{ fontWeight: 400 }}>
              Our team of professionals helps B2B firms like yours produce more qualified leads, manage existing pipelines, measure impact, and address operational difficulties.  With the right technology, AI-driven insights, and development skills, Burac.ai ensures your organization scales efficiently and sustainably.
            </span>
          </p>
        </div>
        <a
          href="/work-with-us/"
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
        <Image src={ConsumerService} alt="" />
      </div>
    </section>
  )
}
