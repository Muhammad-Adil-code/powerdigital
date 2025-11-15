import Image from "next/image";
import WhoWeAreLeftSmallWebp from '../../images/WHO-WE-ARE-_-Left-small.webp';
import FadeUp from "./FadeUp";
export default function duallayout1() {
  return (
    <>

      <section className="dual-layout-section-wrapper">
        <div className="separator" >
          <hr />
          <div className="separator__text">
            <span>burac.ai</span>
            <div>
              <span className="separator__number">01</span>
              <span>Who we are</span>
            </div>
          </div>
        </div>
        <div className="dual-layout-section bg-light ">


          <div className="container-note-image ">
            <FadeUp>
              <div className="note-image fade-up">
                <Image
                  className="note-image__img"
                  src={WhoWeAreLeftSmallWebp}
                  alt="img"
                />
              </div>
            </FadeUp>
            <div className="text-section">
              <span className="badge rounded-pill bg-dark">who we are</span>
              <div className="title">
                <h2> Empowering intelligent decision-making. </h2>
              </div>
              <div className="text">
                <p>
                  As an innovative AI-powered platform, burac.ai combines advanced machine learning with data science and human experts to turn data into meaningful solutions.

                  In an increasingly complex world of digital tech, we automate intelligently and predict outcomes.
                </p>
              </div>
              <a
                href="https://powerdigitalmarketing.com/work-with-us/"
                className="btn btn-secondary"
              >
                <div className="icon">
                  <span>Accelerate your business</span>
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
