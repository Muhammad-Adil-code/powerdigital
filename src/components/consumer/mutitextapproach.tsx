
export default function mutitextapproach() {
  return (
    <section className="multi-text-section bg-dark ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-light">Our Approach</span>
          <h2>
            We effortlessly interact with organizations like yours, boosting marketing strategies to accomplish revenue targets.
          </h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              We interact easily with organizations like yours, boosting pipelines and digital operations to generate measurable growth.
            </span>
          </p>
          <p>
            <span style={{ fontWeight: 400 }}>
              Agile and adaptive, our teams of data scientists, engineers, strategists, and analysts solve your greatest challenges with precision.
            </span>
          </p>
        </div>
      </div>
      <div className="multi-text-section__items-text">
        {/* Primera fila con los primeros 2 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Increasing Contactable Leads</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Target the correct audience, with the right message, across the right channels.  Our AI and analytics solutions foresee possibilities, optimize creative concepts, and execute campaigns that yield high-quality leads ready to convert.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Nurture & Retention</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We don’t stop at lead creation – we nurture prospects through complex sales cycles, optimizing lifetime value and retention.  Our AI-driven workflows ensure leads convert consistently and return repeatedly.
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Segunda fila con los últimos 2 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Measurement & Contribution Analysis</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Our analytics teams assess which channels and campaigns genuinely contribute to income.  We then optimize for incremental increases and refine techniques to maximize ROI.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Operational Efficiency</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Burac.ai links different tools, data, and teams into unified platforms – streamlining operations, improving communication, and boosting the bottom line.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
