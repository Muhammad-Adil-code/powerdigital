import React from 'react'
import Image2 from '../../images/Profile-Image-from-Figma-1.png';
import Image1 from '../../images/mb20220421_wcp_img_4034-min.jpg'
import Image from 'next/image'
export default function testominal() {
  return (
    <>
      <section className="full-image-testimonial bg-light  section-inner">
        <Image
          className="full-image-testimonial__image"
          src={Image1}
          alt=""
          style={{ maxHeight: "px" }}
        />
        <article className="1 note note--manual fade-up is-article-inner ">
          <div className="note__text">
            <p>
              <em>
                “Burac.ai is redefining how private equity evaluates marketing performance. Their insights gave us clarity on true growth levers across our portfolio and validated our investment theses with measurable proof.”
              </em>
            </p>
          </div>
          <div className="testimonial-person">
            <div className="person-info">
              <div className="person-photo">
                <Image src={Image2} alt="" />
              </div>
              <div className="person-details">
                <h3 className="person-name interface-small" />
                <p className="person-title">CMO, Waud Capital Partners</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
