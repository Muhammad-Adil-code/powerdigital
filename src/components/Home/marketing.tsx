import React from 'react'
import Image from "next/image";
import B0993e2fd1220992b536f7a8f7d18d from '../../images/b0993e2fd1220992b536f7a8fd18db2d-small.webp'; // Update path/file name
import MielleOrganics from '../../images/Mielle-Organics-UNMASKED-berkshire-2021-1-1400x787-1.jpeg'; // Update path/file name
import DataworldSvg from '../../images/dataworld.png'; // Update path/file name
export default function marketing() {
  return (
    <>
      <section className="full-image-testimonial bg-dark  section-outer">
        <Image
          className="full-image-testimonial__image"
          src={B0993e2fd1220992b536f7a8f7d18d}
          alt=""
          style={{ maxHeight: "px" }}
        />

        <article className="2 note  is-article-outer z-10">
          <div className="note__text">
            <p>
              Their comprehensive understanding of our goals, workflows, and challenges was exceptional. Burac.ai steered us through a challenging tech landscape and achieved results beyond expectation.
            </p>
          </div>
          <div className="testimonial-person">
            <div className="person-info">
              <div className="person-photo">
                <Image
                  src={MielleOrganics}
                  alt="img"
                />
              </div>
              <div className="person-details">
                <h3 className="person-name interface-small">Kaitlyn Crawford</h3>
                <p className="person-title">VP of Product Innovation @ Data.World</p>
              </div>
            </div>
            <div className="company-logo">
              <Image src={DataworldSvg} alt="" />
            </div>
          </div>
        </article>

      </section>
    </>
  )
}
