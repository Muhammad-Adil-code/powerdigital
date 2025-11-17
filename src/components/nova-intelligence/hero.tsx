'use client'
import React, { useState } from 'react'
import image1 from '../../images/PDM-Website-2025-Layer-1-1.png'
import image2 from '../../images/Screenshot-2024-11-26-at-8.27.54 AM-small.png'
import image3 from '../../images/Screenshot-2024-11-26-at-8.30.09 AM-small.png'
import image4 from '../../images/Untitled-1080-x-750-px-7.png'
import image5 from '../../images/Screenshot-2024-11-26-at-8.29.31 AM.png'
import image6 from '../../images/Untitled-1080-x-750-px-4.png'

export default function Hero() {
 const tabs = [
  {
    id: 'creative-affinity',
    label: 'Creative Affinity',
    heading: 'Creative Affinity',
    text:
      'Burac AI’s Creative Affinity connects ad creative directly to customer lifetime value (LTV). Identify which concepts drive the most impact, optimize your content, and allocate spend where it truly matters.',
    img: image2,
  },
  {
    id: 'customer-insights',
    label: 'Customer Insights',
    heading: 'Customer Insights',
    text:
      'Get a 360° understanding of your audience. Burac AI turns customer data into actionable insights, helping you refine messaging, improve engagement, and strengthen loyalty.',
    img: image3,
  },
  {
    id: 'insights-ai',
    label: 'Insights AI',
    heading: 'Insights AI',
    text:
      'Insights AI blends advanced analytics with human intelligence. Explore your marketing data through interactive dashboards, ask natural-language questions, and uncover opportunities in real time.',
    img: image4,
  },
  {
    id: 'customer-cohorts',
    label: 'Customer Cohorts',
    heading: 'Customer Cohorts',
    text:
      'Segment smarter with Customer Cohorts. Discover high-value audiences based on behavior, retention, and LTV to guide more personalized and profitable marketing strategies.',
    img: image5,
  },
  {
    id: 'forecasts',
    label: 'Forecasts',
    heading: 'Forecasts',
    text:
      'Forecasts uses predictive analytics to anticipate performance and market shifts. Plan ahead with confidence, model potential outcomes, and allocate resources for maximum growth.',
    img: image6,
  },
];


  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <section className="logo-hero">
        <div>
          <img src={image1.src} alt="" />
        </div>
      </section>

      <section id="tabs-nova" className="tabs-nova bg-light">
        <div className="tabs-nova__nav" role="tablist" aria-label="Nova applications">
          <span className="badge rounded-pill bg-light">NOVA APPLICATIONS</span>
          <div>
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === idx}
                aria-controls={`tab-panel-${tab.id}`}
                className={`tabs-nova__nav-item ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="tabs-nova__content">
          {tabs.map((tab, idx) => (
            <div
              key={tab.id}
              id={`tab-panel-${tab.id}`}
              role="tabpanel"
              hidden={activeIndex !== idx}
              className={`tabs-nova__content-item ${activeIndex === idx ? 'active' : ''}`}
            >
              <div className="title">
                <h1>{tab.heading}</h1>
              </div>
              <div className="content">
                <p>{tab.text}</p>
              </div>
              <img src={tab.img.src} alt="" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
