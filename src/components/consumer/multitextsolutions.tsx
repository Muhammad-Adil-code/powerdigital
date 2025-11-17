
export default function multitextsolutions() {
  return (
    <section className="multi-text-section bg-light ">
          <div className="multi-text-section__text">
            <div className="title">
              <span className="badge rounded-pill bg-light">Solutions</span>
              <h2>Tailored Strategies That Deliver Results</h2>
            </div>
            <div className="paragraph">
              <p>
                <span style={{ fontWeight: 400 }}>
                  From enrollment goals to wellness experiences and home services,
                  we deliver custom strategies that meet your audience where they
                  are—driving results that matter and journeys that convert.
                </span>
              </p>
            </div>
          </div>
          <div className="multi-text-section__items-text">
            {/* Primera fila con los primeros 2 items */}
            <div className="multi-text-section__row">
              <div className="item">
                <div className="text">
                  <h3>Education</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      We optimize outreach for program calendars and enrollment cycles. AI-driven audience targeting ensures prospective students are reached effectively, driving enrollment and reducing MELT.
                    </span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Health + Wellness</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Whether managing locations, apps, or services, we simplify campaign execution and measurement, so you can focus on improving customer outcomes.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Segunda fila con los últimos 2 items */}
            <div className="multi-text-section__row">
              <div className="item">
                <div className="text">
                  <h3>Home Services</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      From HVAC to roofing, our strategies generate high-quality leads, accelerate sales cycles, and improve operational efficiency.
                    </span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Senior Living</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      We create personalized, data-driven campaigns that simplify families’ decision-making, improving conversion while reducing operational costs.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
