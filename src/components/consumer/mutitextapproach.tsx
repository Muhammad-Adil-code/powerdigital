
export default function mutitextapproach() {
  return (
    <section className="multi-text-section bg-dark ">
          <div className="multi-text-section__text">
            <div className="title">
              <span className="badge rounded-pill bg-light">Our Approach</span>
              <h2>
                We seamlessly integrate with businesses like yours, elevating
                marketing programs to reach revenue goals.
              </h2>
            </div>
            <div className="paragraph">
              <p>
                <span style={{ fontWeight: 400 }}>
                  We integrate seamlessly with businesses like yours, elevating pipelines and digital operations to achieve measurable growth. 
                </span>
              </p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Agile and adaptive, our teams of data scientists, developers, strategists, and analysts tackle your biggest challenges with precision.
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
                      Target the right audience, with the right message, across the right channels. Our AI and analytics platforms forecast opportunities, optimize creative concepts, and execute campaigns that generate high-quality leads ready to convert.
                    </span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Nurture & Retention</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      We don’t stop at lead generation — we nurture prospects through complex sales cycles, optimizing lifetime value and retention. Our AI-driven workflows ensure leads convert consistently and return repeatedly.
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
                      Our analytics teams determine which channels and campaigns truly contribute to revenue. We then optimize for incremental gains and refine strategies to maximize ROI.
                    </span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Operational Efficiency</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Burac.ai connects disparate tools, data, and teams into unified systems — streamlining operations, improving collaboration, and boosting the bottom line.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
