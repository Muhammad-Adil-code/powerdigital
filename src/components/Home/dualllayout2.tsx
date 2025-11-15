import Image from "next/image";
import Group259 from '../../images/Group-259.png';
import FadeUp from "./FadeUp";
export default function dualllayout2() {
  return (
    <>
      <section className="dual-layout-section bg-light ">
        <div className="container-note-image is-reversed">
          <FadeUp>
            <div className="note-image fade-up">
              <Image
                className="note-image__img"
                src={Group259}
                alt="img"
              />
            </div>
          </FadeUp>
          <div className="text-section">
            <span className="badge rounded-pill bg-dark">Our Approach</span>
            <div className="title">
              <h2> Demystifying AI for real-world impact </h2>
            </div>
            <div className="text">
              <p>
                The most up-to-date solution provider for AI burac.ai is dedicated to being open and accurate.

                We can show real outcomes by combining domain knowledge, strong algorithms, and design that puts the user first.

                Our strategy combines strategic innovation, deep analytics and unique AI technology to offer clients a confident hold on data--and as an extra benefit, remarkable gains in business performance.
              </p>
            </div>
            <a
              href="https://powerdigitalmarketing.com/approach/"
              className="btn btn-secondary"
            >
              <div className="icon">
                <span>How we work</span>
                <i className="icon-arrow-up-right" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
