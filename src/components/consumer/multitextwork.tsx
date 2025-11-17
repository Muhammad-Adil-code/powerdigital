
export default function multitextwork() {
  return (
    <section className="multi-text-section bg-dark ">
          <div className="multi-text-section__text">
            <div className="title">
              <span className="badge rounded-pill bg-dark">Work with Burac.ai</span>
              <h2>Why partner with an AI-driven solutions agency?</h2>
            </div>
            <div className="paragraph">
              <p>
                <span style={{ fontWeight: 400 }}>
                  Choosing Burac.ai means unlocking your business’s full potential. We deliver tailored, intelligent strategies that align with your growth objectives. 
                </span>
              </p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  By leveraging AI, data insights, and automation, we go beyond the surface — solving operational challenges, seizing new opportunities, and driving measurable outcomes.
                </span>
              </p>
            </div>
          </div>
          {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
          <div className="multi-text-section__items-text">
            <div className="multi-text-section__row">
              <div className="item">
                <div className="text">
                  <h3>Accelerate Growth</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Partner with Burac.ai to speed up lead conversion and operational efficiency with strategies that keep your business ahead in a fast-moving digital landscape.
                    </span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Enhance Customer Engagement</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Deepen relationships and improve loyalty through AI-driven experiences and smart automation that resonates with your audience.
                    </span>
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="text">
                  <h3>Navigate Market Complexity</h3>
                  <p>
                    <span style={{ fontWeight: 400 }}>
                      Trust our expertise to guide you through complex market dynamics, ensuring your operations are optimized for predictable, sustainable success.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
