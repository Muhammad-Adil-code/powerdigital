
export default function approach() {
  return (
    <section className="multi-text-section bg-light ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-light">Our Approach</span>
          <h2>
            How Burac.ai Helps B2B Enterprises Thrive in a Rapidly Evolving Market
          </h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              At Burac.ai, we know that success in B2B isn't just about technology — it's about timing, intelligence, and alignment. Complex sales cycles, multiple stakeholders, and legacy systems can slow growth. We simplify that complexity with AI-driven insight and human-centered innovation.
            </span>
          </p>
        </div>
      </div>
      <div className="multi-text-section__items-text">
        {/* Primera fila con los primeros 2 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>DATA-DRIVEN STRATEGIES</h3>
              <p>
                We transform raw data into actionable intelligence that drives clarity, speed, and precision across your digital ecosystem. By analyzing user behavior and market trends, we deliver solutions that align every stakeholder — from C-level leaders to daily operators.
              </p>
              <p>
                The result: measurable impact at every stage of the buyer and product journey.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>ALIGNING TEAMS FOR SMARTER EXECUTION</h3>
              <p>
                Growth accelerates when teams move in sync. We align your product, data, and operations teams under one strategy — optimizing resources and technology for unified performance.
              </p>
              <p>
                When your teams, tech, and insights move together, efficiency becomes inevitable.
              </p>
            </div>
          </div>
        </div>
        {/* Segunda fila con los últimos 2 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>ACCELERATED ROI THROUGH REAL-TIME DECISIONING</h3>
              <p>
                In a fast-changing market, data-driven speed wins. Our AI dashboards and analytics pipelines provide real-time clarity, helping you decide faster and act smarter.
              </p>
              <p>
                We help answer critical questions instantly:
              </p>
              <ul>
                <li style={{ fontWeight: 400 }} aria-level={1}>
                  Where to focus spend?
                </li>
                <li style={{ fontWeight: 400 }} aria-level={1}>
                  Which channels or features drive the best ROI?
                </li>
                <li style={{ fontWeight: 400 }} aria-level={1}>
                  What user behavior signals opportunity?
                </li>
              </ul>
              <p>
                Faster answers mean faster growth.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>BUILDING TARGETED RELATIONSHIPS</h3>
              <p>
                We go beyond transactions to create lasting digital relationships. From initial interaction to post-deployment support, we engineer meaningful experiences that retain users, strengthen loyalty, and turn customers into advocates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
