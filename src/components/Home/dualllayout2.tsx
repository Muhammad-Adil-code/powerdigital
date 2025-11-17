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
              As a cutting-edge AI solutions provider, burac.ai is committed to transparency and precision. We deliver measurable results by combining domain knowledge, robust algorithms, and user-centric design. Our approach fuses strategic innovation, deep analytics, and proprietary AI technology — enabling our clients to harness data confidently and optimize business performance.
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
