"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slidesData = [
    {
        title: "Business level data.",
        bgColor: "rgb(175,170,249)",
        textColor: "#1f2937",
        iconSrc: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/icon-6.svg",
        iconText: "Icon 1",
        fallbackColor: "6366f1",
    },
    {
        title: "True scientific incrementality experiments.",
        bgColor: "rgb(119,86,255)",
        textColor: "rgb(255,255,255)",
        iconSrc: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/icon-2.svg",
        iconText: "Icon 2",
        fallbackColor: "4f46e5",
    },
    {
        title: "Rigorous and ML-enabled media mix modeling.",
        bgColor: "rgb(255,255,255)",
        textColor: "#1f2937",
        iconSrc: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/icon-3.svg",
        iconText: "Icon 3",
        fallbackColor: "e5e7eb",
    },
    {
        title: "Knowledge of when and how to use platform attribution.",
        bgColor: "rgb(0,0,0)",
        textColor: "rgb(255,255,255)",
        iconSrc: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/icon8.png",
        iconText: "Icon 4",
        fallbackColor: "1f2937",
    },
];

export default function Section2() {
    useEffect(() => {
        if (typeof window !== "undefined" && window.innerWidth >= 768) {
            new Swiper(".swiper-carousel", {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 3000,
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
                        <h2>How is working with Burac.ai  different?</h2>
                    </div>

                    <div className="swiper swiper-carousel">
                        <div className="swiper-wrapper">
  {slidesData.map((slide, index) => (
    <div
      key={index}
      className={`three-card swiper-slide flex-slide `}
      style={{
        backgroundColor: slide.bgColor,
        color: slide.textColor,
      }}
    >
      <div className="icon">
        <img src={slide.iconSrc} alt={slide.iconText} />
      </div>
      <div className="text">
        <h3>{slide.title}</h3>
      </div>
    </div>
  ))}
</div>

                    </div>
                </div>
            </section>
        </>
    );
}
