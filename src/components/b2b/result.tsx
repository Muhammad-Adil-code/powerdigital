import Enterprise from '../../images/Enterprise-Software-Company-2-768x768.png';
import CountUp from '../Home/CountUp';
export default function result() {
  return (
    <section className="section-three-data-number bg-dark">
      <div className="section-three-data-number__text">
        <div className="title">
          <h2>Proven Results</h2>
        </div>
        <div className="description">
          <p>Anyone can promise performance — we deliver proof.</p>
        </div>
        <div className="section-three-data-number__insight insight-section">
          <div>
            <div className="item">
              <CountUp end={3} suffix="X" duration={2} data-value="3X" />
              {/* <h3 data-value="3X">0</h3> */}
              <p>Faster growth rates across enterprise solutions</p>
            </div>
          </div>
          <div>
            <div className="item">
              <CountUp end={27} suffix="%" duration={2} data-value="27%" />
              {/* <h3 data-value="27%">0</h3> */}
              <p>Average YoY revenue increase for partner clients</p>
            </div>
          </div>
          <div>
            <div className="item">
              <CountUp end={300} suffix="M+" duration={2} data-value="300M+" />
              <p>
                Data points leveraged across Burac.ai analytics pipelines
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-three-data-number__image-text">
        <div className="image">
          <picture>
            <img
              src={Enterprise.src}
              alt=""
            />
          </picture>
        </div>
        <div className="text">
          <span className="badge rounded-pill bg-light">Our Results</span>
          <div className="data-driven-insight__insight insight-section">
            <div>
              <CountUp end={122} suffix="%" duration={2} data-value="+122%" />
              {/* <h3 data-value="122%">0</h3> */}
              <p>
                <span style={{ fontWeight: 400 }}>
                  Increase in qualified B2B leads YoY
                </span>
              </p>
            </div>
            <div>
              <CountUp end={34} suffix="%" duration={2} data-value="-34%" />
              {/* <h3 data-value="-34%">0</h3> */}
              <p>
                <span style={{ fontWeight: 400 }}>
                  Reduction in acquisition cost per opportunity
                </span>
              </p>
            </div>
          </div>
          <div className="description">
            <p>
              <span style={{ fontWeight: 400 }}>
                A multinational SaaS company teamed with Burac.ai to expand from SMB to enterprise clients.   By integrating AI-powered analytics, revised GTM strategy, and automation-driven lead intelligence, the organization experienced a 122% YoY increase in qualified leads and a 34% drop in cost per opportunity — transforming efficiency and market share.
              </span>
            </p>
          </div>
          <a
            className="btn btn-secondary"
            href="https://powerdigitalmarketing.com/case-studies/enterprise-software-company/"
          >
            <div className="icon">
              <span>Learn more</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
