import React from 'react'

export default function intelligent() {
  return (
    <>
    <section className="multi-text-section bg-dark ">
      <div className="multi-text-section__text">
        <div className="title">
          <span className="badge rounded-pill bg-dark">
            Intelligent Growth, Elevated
          </span>
          <h2>Your IROAS Growth Engine. Powered by Data. Driven by Results.</h2>
        </div>
        <div className="paragraph">
          <p>
            <span style={{ fontWeight: 400 }}>
              Leveraging over 300M+ consumer data points and partnerships with top eCommerce, social, and digital platforms, Burac.ai delivers strategies that outperform the market. By combining AI-driven analytics, creative product experiences, and optimized customer journeys, we create scalable, repeatable growth. From shelf to scroll, from app to website, we ensure your products dominate attention and drive measurable results.
            </span>
          </p>
        </div>
      </div>
      {/* Si hay menos de 5 items, se muestran todos en una sola fila */}
      <div className="multi-text-section__items-text">
        <div className="multi-text-section__row">
          <div className="item">
            <div className="text">
              <h3>Customer Insight &amp; Messaging</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We uncover the motivations, preferences, and behaviors of your consumers to ensure every message resonates. By turning data into compelling narratives, we craft campaigns that convert casual shoppers into loyal brand advocates.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Full-Funnel Strategy</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  From discovery to repeat purchase, we create seamless, integrated strategies guiding consumers through their journey. Whether launching new products or scaling established brands, every touchpoint is optimized for precision and performance.
                </span>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <h3>Performance at Scale</h3>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Burac.ai optimizes every dollar spent — refining acquisition costs, maximizing engagement, and increasing customer lifetime value. Efficiency is not a goal; it’s our guarantee.
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
