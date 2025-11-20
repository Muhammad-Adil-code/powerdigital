
export default function intelligent() {
  return (
    <section className="multi-text-section bg-dark ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-primary">
            Intelligent Growth, Accelerated
          </span>
          <h2>Burac.ai drives efficient, data-led transformation for B2B companies.</h2>
        </div>
        <div className="paragraph">
          <p>
            Burac.ai leverages intelligent analytics and collaborations across major technological ecosystems — from Microsoft and AWS to Google Cloud and OpenAI — merging AI, automation, and strategic development to help you achieve both the urgent and the long-term.   Smart, scalable expansion – with no wasted motion.
          </p>
        </div>
      </div>
      {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
      <div className="multi-text-section__items-text">
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>PRODUCT CLARITY</h3>
              <p>
                We translate complex technologies into simple, actionable solutions that resonate across your organization — from end users to executive boards. Every product we design communicates value clearly and drives confident adoption.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>PIPELINE AUTOMATION</h3>
              <p>
                We design intelligent solutions that detect significant opportunities and optimize interaction across the client journey.   Whether through AI-driven prospect scoring, workflow automation, or linked CRM systems, every touchpoint adds to sustained growth.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>EFFICIENCY AT SCALE</h3>
              <p>
                From product launch to corporate deployment, our agile frameworks enable speed, precision, and data-backed decision-making.   We optimize your digital infrastructure to decrease expenses, boost retention, and deliver long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
