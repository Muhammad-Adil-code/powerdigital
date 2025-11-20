import React from 'react'
import Image from 'next/image'
import image from "../../images/Hero1_Desktop_90ff40f9-4f69-4acd-ab6f-d5ac8cb69d12-2-e1733342755528.webp";
import Image2 from "../../images/Profile-Image-from-Figma-1.png";
export default function testominal() {
  return (
    <>
      <section className="full-image-testimonial bg-light  section-inner">
        <Image
          className="full-image-testimonial__image"
          src={image}
          alt=""
          style={{ maxHeight: "px" }}
        />
        <article className="2 note fade-up is-article-inner ">
          <div className="note__text">
            <p>
              “With Burac.ai by our side, we’ve gained more than a technology partner — we’ve found allies who champion L’AGENCE’s mission.  Their expertise extends beyond standard digital solutions, ensuring every plan is scalable, sustainable, and impactful.”
            </p>
          </div>
          <div className="testimonial-person">
            <div className="person-info">
              <div className="person-photo">
                <Image
                  src={Image2}
                  alt=""
                />
              </div>
              <div className="person-details">
                <h3 className="person-name interface-small">Ashley Bryan</h3>
                <p className="person-title">Chief Digital Officer @ L’AGENCE</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
