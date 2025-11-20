import image117 from '../../images/1-1-768x768.png';
import CountUp from '../Home/CountUp';

export default function Results() {
  return (
    <section className="section-three-data-number bg-dark">
      <div className="section-three-data-number__text">
        <div className="title">
          <h2>Proven Results</h2>
        </div>
        <div className="description">
          <p>Anyone can talk the talk, we offer the receipts.</p>
        </div>
        <div className="section-three-data-number__insight insight-section">
          <div>
            <div className="item">
              {/* REMOVED OUTER <h3>. CountUp is now directly inside the <div>. */}
              {/* The data-value prop is now passed to CountUp to apply to its inner element. */}
              <CountUp end={2.6} suffix="X" duration={2} data-value="2.6X" />
              <p>Faster growth rates than the industry average</p>
            </div>
          </div>
          <div>
            <div className="item">
              {/* FIX APPLIED HERE: Remove outer h3, pass data-value */}
              <CountUp end={27} suffix="%" duration={2} data-value="27%" />
              <p>Average YoY increase in client income </p>
            </div>
          </div>
          <div>
            <div className="item">
              {/* FIX APPLIED HERE: Remove outer h3, pass data-value */}
              <CountUp end={300} suffix="M+" duration={2} data-value="300M+" />
              <p>
                Data points utilized by Burac.ai applications for business insights
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-three-data-number__image-text">
        <div className="image">
          <picture>
            {/* Using the src property from the imported object */}
            <img src={image117.src} alt="" />
          </picture>
        </div>
        <div className="text">
          <span className="badge rounded-pill bg-light">Our Results</span>
          <div className="data-driven-insight__insight insight-section">
            <div>
              {/* FIX APPLIED HERE: Remove outer h3, pass data-value */}
              <CountUp end={33} suffix="%" duration={2} data-value="33%" />
              <p>YoY Leads</p>
            </div>
            <div>
              {/* FIX APPLIED HERE: Remove outer h3, pass data-value */}
              <CountUp end={34} suffix="%" duration={2} data-value="34%" />
              <p>YoY Converted Leads</p>
            </div>
          </div>
          <div className="description">
            <p>
              Burac.ai altered Alliant University’s Masters of Social Work program.  Through AI-driven audience analytics and platform optimization, we increased targeting, improved creative performance, and lowered acquisition costs – producing a scalable, efficient, and measurable lead generation pipeline.
            </p>
          </div>
          <a
            className="btn btn-secondary"
            href="https://powerdigitalmarketing.com/case-studies/alliant-university/"
          >
            <div className="icon">
              <span>Learn more</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}