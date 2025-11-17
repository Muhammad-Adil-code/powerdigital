import React from 'react'
import image1 from '../../images/PDM-Website-2025-Mask-Group-small.png'
import DSC00368 from '../../images/DSC00368-scaled.jpg'
import image2 from '../../images/Profile-Image-from-Figma-1.png'
export default function section5() {
  return (
    <>
    <section className="dual-layout-section bg-dark">
      <div className="container-note-image container-note-image ">
        <div className="note-image note-image--testimonio fade-up">
          <img
            className="note-image__img"
            src={image1.src}
            alt=""
            srcSet=""
          />
          <article className="note bg-secondary">
            <div className="note__text">
              <p>
                <em>
  Our people have always been—and will always be—our top priority. They are the heart of our organization, our greatest asset, and the driving force behind our success. We lead with people and deliver with purpose.
</em>

              </p>
            </div>
            <div className="testimonial-person">
              <div className="person-info">
                <div className="person-photo">
                  <img src={image2.src} alt="" />
                </div>
                <div className="person-details">
                  <h3 className="person-name interface-small">Julie Zubak</h3>
                  <p className="person-title">Chief People Officer</p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="text-section">
          <span className="badge rounded-pill bg-light">careers</span>
          <div className="title">
            <h2>There’s nothing artificial about our people’s intelligence.</h2>
          </div>
          <div className="text">
            <p>
  We operate at the forefront of machine learning and AI, but it’s our people who make Power a leader in digital marketing. Technology drives our work, yet talent is why clients choose us. Ready to join the team?
</p>

          </div>
          <a
            href="https://powerdigitalmarketing.com/company/careers/"
            className="btn btn-secondary"
          >
            <div className="icon">
              <span>View open positions</span>
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </div>
    </section>
    <section className="full-width-image">
      <img
        style={{ width: "100%" }}
        src={DSC00368.src}
        alt=""
        srcSet=""
      />
    </section>
    </>
  )
}
