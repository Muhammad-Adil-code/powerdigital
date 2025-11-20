
export default function power() {
  return (
    <section className="multi-text-section bg-light ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-dark">Why Burac.ai?</span>
          <h2>
            Accelerate your B2B growth with AI-driven solutions intended for speed, scale, and measurable ROI.
          </h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              In a world where decisions must be made faster and smarter, Burac.ai produces technology that combines strategy, automation, and intelligence – helping organizations decrease friction, enhance efficiency, and grow stronger every quarter.
            </span>
          </p>
        </div>
      </div>
      <div className="multi-text-section__items-text">
        {/* Primera fila con los primeros 3 items */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Data-Driven Precision</h3>
              <p>
                We employ powerful data models to discover and engage the right users at the right time — increasing performance across all digital channels.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Unified Strategies Aligned to Your Goals</h3>
              <p>
                Every solution we design promotes long-term success – from user acquisition to product scalability and retention.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Custom Solutions for Complex Journeys</h3>
              <p>
                Whether you&apos;re managing multi-touch enterprise pipelines or scaling startup operations, we design adaptable technologies that expedite conversion and acceptance.
              </p>
            </div>
          </div>
        </div>
        {/* Segunda fila con los items restantes */}
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Cross-Team Alignment</h3>
              <p>
                We integrate your development, marketing, and operations teams to ensure consistent delivery and messaging across every touchpoint.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>ROI You Can Measure</h3>
              <p>
                Every endeavor is tracked, optimized, and reported transparently – guaranteeing your investment creates visible, repeatable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
