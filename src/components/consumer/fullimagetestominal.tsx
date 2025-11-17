import RenewalByAndersen from '../../images/Renewal-By-Andersen.avif';
import React from 'react'
import Image from 'next/image'
export default function fullimagetestominal() {
  return (
     <section className="full-image-testimonial bg-dark  section-inner">
          <Image
            className="full-image-testimonial__image"
            src={RenewalByAndersen}
            alt=""
            style={{ maxHeight: "px" }}
          />
          <article className="2 note fade-up is-article-inner ">
            <div className="note__text">
              <p>
                <em>
                  “Since partnering with Burac.ai, our pipeline performance has skyrocketed. Their deep understanding of our workflows and customer journey elevated leads, conversion, and operational efficiency to new heights. Burac.ai truly invests in our success.”
                </em>
              </p>
            </div>
            <div className="testimonial-person">
              <div className="person-info">
                <div className="person-photo">
                  <img src="image" alt="hh" />
                </div>
                <div className="person-details">
                  <h3 className="person-name interface-small">Jason Troupin </h3>
                  <p className="person-title">
                    Digital Marketing Supervisor @ Renewal by Andersen
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
  )
}
