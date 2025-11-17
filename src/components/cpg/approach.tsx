import React from 'react'

export default function approach() {
  return (
    <>
    <section className="multi-text-section bg-dark ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-light">Our Approach</span>
          <h2>
How Burac.ai Helps CPG Brands Cut Waste, Build Margin, and Drive Velocity          </h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              Growth isn’t about spending more — it’s about making every dollar do more, especially when managing DTC, retail media, and traditional retail simultaneously.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              Here’s how we help you scale with confidence:
            </span>
          </p>
        </div>
      </div>
      <div className="multi-text-section__items-text">
        {/* Primera fila con los primeros 3 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>01. Unified Data Visibility</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We integrate your digital and in-store data to reveal what’s driving performance and allocate budget with precision.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>02. Channel + Creative Alignment</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Creative that wins offline doesn’t always win online. We build asset strategies that meet your audience where they are and inspire purchase behavior.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>03. Zip Code-Level Activation</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Media plans that get local, really local. Store-by-store, geo-specific campaigns drive lift where it counts.
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Segunda fila con los items restantes */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>04. Full-Funnel Optimization</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  From retail media to TikTok, Google Shopping, and beyond, our strategies don’t just hit KPIs — they grow your bottom line.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>05. Measurement That Stands Up in a Boardroom</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                 Incrementality testing and MMM frameworks isolate what’s working, giving leadership clear answers — not guesses.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
