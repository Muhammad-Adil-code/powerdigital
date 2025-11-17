import React from 'react'
import Image from 'next/image'
import image1  from '../../images/Social-Banner.webp'

export default function testominalimage() {
  return (
    <>
        <section className="full-image-testimonial bg-light  section-inner">
      <Image
        className="full-image-testimonial__image"
        src={image1}
        alt=""
        style={{ maxHeight: "px" }}
      />
      <article className="1 note note--manual fade-up is-article-inner ">
        <div className="note__text">
          <p>
            <span style={{ fontWeight: 400 }}>
              &nbsp;“With Burac.ai, I finally had the confidence to go to leadership and say: here’s what we need to invest in, here’s the expected outcome, and here’s why it’s worth it.”
            </span>
          </p>
        </div>
        <div className="testimonial-person">
          <div className="person-info">
            <div className="person-photo">
              <img src="Image" alt=""  />
            </div>
            <div className="person-details">
              <h3 className="person-name interface-small">Koia</h3>
              <p className="person-title">Sr. Director of Marketing</p>
            </div>
          </div>
        </div>
      </article>
    </section>
    </>
  )
}
