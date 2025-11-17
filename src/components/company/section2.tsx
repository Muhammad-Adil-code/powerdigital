"use client";
import React, { useEffect } from "react";
import image1 from "../../images/service-icon-2.svg";
import image2 from "../../images/service-icon-3.svg";
import image3 from "../../images/EDIT-Services_PublicRelations_100-01-1.svg";
import image4 from "../../images/service-icon-4.svg";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
// import { Navigation, Pagination } from "swiper/modules";

export default function Section2() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      new Swiper(".swiper-carousel", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000, // slide every 3s
          disableOnInteraction: false,
        },
        speed: 800,
      });
    }
  }, []);


  return (
    <>
      <section className="text-banner bg-light">
        <p>Your partner for</p>
        <h3>
          Making profit <span>predictable.</span>
        </h3>
      </section>

      <section className="carousel-company bg-dark">
        <div className="carousel-company__desktop">
          <div className="carousel-company__title">
            <span className="badge rounded-pill bg-light">why us</span>
            <h2>How is working with burac different?</h2>
          </div>

          {/* 👇 Your original structure — unchanged */}
          <div className="swiper swiper-carousel">
            <div className="swiper-wrapper">
              <div
                id="maxcontent"
                className="three-card swiper-slide"
                style={{
                  backgroundColor: "rgb(175,170,249)",
                  color: "rgb(43,42,41)",
                }}
              >
                <div className="icon">
                  <Image src={image1 } alt="" />
                </div>
                <div className="text">
                  <h4>A Customized Strategy</h4>
<p>Every business is unique — our approach is built to match yours.</p>

                </div>
              </div>

              <div
                className="three-card swiper-slide"
                style={{
                  backgroundColor: "rgb(171,171,171)",
                  color: "rgb(43,42,41)",
                  width: "auto",
                }}
              >
                <div className="icon">
                  <Image src={image2 } alt="" />
                </div>
                <div className="text">
                 <h3>Business Outcomes Over Vanity Metrics</h3>
<p>Clicks and likes are meaningless without measurable impact on your revenue and growth.</p>

                </div>
              </div>

              <div
                className="three-card swiper-slide"
                style={{
                  backgroundColor: "rgb(119,86,255)",
                  color: "rgb(245,245,245)",
                  width: "auto",
                }}
              >
                <div className="icon">
                  <Image src={image3 } alt="" />
                </div>
                <div className="text">
                  <h3>Radical Transparency</h3>
                  <p>
                    Power is a glass box that shows you everything and hides
                    nothing.
                  </p>
                </div>
              </div>

              <div
                className="three-card swiper-slide"
                style={{
                  backgroundColor: "rgb(245,245,245)",
                  color: "rgb(43,42,41)",
                  width: "auto",
                }}
              >
                <div className="icon">
                  <Image src={image4 } alt="" />
                </div>
                <div className="text">
                  <h3>Proven to Outperform</h3>
<p>Our results speak for themselves — backed by real data and measurable impact.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
