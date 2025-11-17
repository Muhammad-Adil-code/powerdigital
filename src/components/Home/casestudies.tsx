import React from 'react'
import FadeUp from './FadeUp';

export default function casestudies() {
  return (
    <>
    <section className="case-studies bg-dark">
      <div className="separator">
        <FadeUp>
        <div className="separator__title">
          <h2>
            <span className="heading-xxl fade-up">Case</span>
            <span className="heading-xxl fade-up">Studies</span>
          </h2>
        </div>
        </FadeUp>
        <hr />
        <div className="separator__text">
          <span>BURAC.AI</span>
          <div>
            <span className="separator__number">03</span>
            <span>OUR CLIENTS</span>
          </div>
        </div>
      </div>
      <div className="case-studies__content">
        <div className="case-studies__filters">
          <a href="#" className="btn btn-sm btn-outline-dark block">
            Case studies
          </a>
          <a href="/case-studies" className="btn btn-sm btn-secondary">
            View all
          </a>
        </div>
        <ul className="case-studies__list">
          <li className="case-studies__item position-relative">
            <div className="case-studies__item-number">
              <span>01</span>
            </div>
            <div className="case-studies__item-content">
              <h3 className="title">Nucleus4D</h3>
              <p className="industry">Immersive Tech / Web Platform</p>
              <p className="service">
                From insight to innovation: Burac.ai’s 4D platform redefined spatial experiences, connecting digital precision with real-world architecture.
              </p>
            </div>
            <div className="case-studies__item-arrow">
              <a
                href="#"
                className="btn btn--round btn-sm btn-outline-dark stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </li>
          <li className="case-studies__item position-relative">
            <div className="case-studies__item-number">
              <span>02</span>
            </div>
            <div className="case-studies__item-content">
              <h3 className="title">Flakex</h3>
              <p className="industry">Sports / Mobile App</p>
              <p className="service">
                See how Burac.ai’s smart UX and automation tools helped Flakex boost engagement and build loyal sports communities across Spain.
              </p>
            </div>
            <div className="case-studies__item-arrow">
              <a
                href="#"
                className="btn btn--round btn-sm btn-outline-dark stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </li>
          <li className="case-studies__item position-relative">
            <div className="case-studies__item-number">
              <span>03</span>
            </div>
            <div className="case-studies__item-content">
              <h3 className="title">Vertify Analytics</h3>
              <p className="industry">Engineering / Web Platform</p>
              <p className="service">
                Discover how Burac.ai empowered Vertify to streamline remote inspections with AI analytics, improving accuracy while cutting project time.
              </p>
            </div>
            <div className="case-studies__item-arrow">
              <a
                href="#"
                className="btn btn--round btn-sm btn-outline-dark stretched-link"
              >
                <div className="icon">
                  <i className="icon-arrow-up-right" />
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>{" "}
    </>
  )
}
