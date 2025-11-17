"use server"

import Header from '../../components/consumer/header';
import MixModeling from "./images/Mix-modeling.png"
import AdobeStock199592631 from "./images/AdobeStock_19959263-1.png"
import Icon16 from "./images/icon-16.svg"
import Icon6 from "./images/icon6.png"
import Icon14 from "./images/icon-14.svg"
import Icon9 from "./images/icon-9.svg"
import Graph from "./images/graph.png"
import Computer from "./images/computer.png"
import Conference from "./images/conference.png"
import ManualChart from "./images/manual-chart.png"
import CurveUp from "./images/curve-up.png"

const MarketingMixModelingDataSciencePage = () => {
    return (
        <>
            <Header />
            <div
                className="wp-singular page-template page-template-approach-template page-template-approach-template-php page page-id-9050 wp-theme-pdm-theme"
            >
                <main>
                    <section className="single-hero bg-light  ">
                        <div className="single-hero__text">
                            <span className="badge rounded-pill bg-light">
                                Marketing Measurement + Incrementality
                            </span>
                            <div className="title">
                                <h1>
                                    Marketing Mix Modeling (MMM) is {" "}
                                    <span className="highlighted">Making a Comeback</span>{" "}
                                </h1>
                            </div>
                            <div className="text">
                                <p>
                                    With attribution challenges on the rise, machine learning advancements, and open-source tools like Robyn and Meridian now widely available, Marketing Mix Modeling has regained the spotlight as a reliable approach for measuring marketing effectiveness.
                                </p>
                            </div>
                            <a
                                href="https://powerdigitalmarketing.com/work-with-us/"
                                className="btn btn-secondary"
                            >
                                <div className="icon">
                                    <span>Request a consultation</span>
                                    <i className="icon-arrow-up-right" />
                                </div>
                            </a>
                        </div>
                        <div className="single-hero__image">
                            <div className="single-badge"></div>
                            <img src={MixModeling.src} alt="" />
                        </div>
                    </section>{" "}
                    <section className="multi-cards-section bg-dark py-4">
                        <div className="intro-twos-columns ">
                            <div className="intro-twos-columns__col">
                                <div className="intro-twos-columns__title">
                                    <span className="badge rounded-pill bg-light">Accuracy</span>
                                    <h2>Inaccurate MMM Models Cost More Than They Reveal.</h2>
                                </div>
                                <div className="intro-twos-columns__text">
                                    <p>
                                        Inexperienced practitioners often misattribute performance, assigning too much credit to channels or tactics that have{" "}
                                        <strong>little real incremental impact.</strong>
                                    </p>
                                    <p>
                                        Many open-source or automated software models tend to prioritize low error rates and<strong> perfect model fit</strong>  rather than the true goal: accurately predicting and forecasting revenue outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="multi-cards-section__cards multi-cards-section__cards--two-columns multi-cards-section__cards--carousel">
                            <div className="three-card bg-secondary">
                                <div className="icon">
                                    <img src={Icon16.src} alt="" />
                                </div>
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            Understanding the<strong> business context.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="three-card bg-primary">
                                <div className="icon">
                                    <img src={Icon6.src} alt="" />
                                </div>
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            Factoring in <strong>relevant</strong> variables.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="three-card bg-grey">
                                <div className="icon">
                                    <img src={Icon14.src} alt="" />
                                </div>
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            <strong>Comparing</strong> different methods.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="three-card bg-light">
                                <div className="icon">
                                    <img src={Icon9.src} alt="" />
                                </div>
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            Model validation through{" "}
                                            <strong>incrementality experiments</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{" "}
                    <section className="flexible-bootstrap-section bg-light pt-0">
                        <div className="container">
                            <div className="row justify-content-center align-items-center mb-0">
                                <div className="col-lg-6">
                                    <div className="d-flex justify-content-center align-align-items-stretch mb-4 position-relative image-quote">
                                        <img
                                            className="position-absolute image-quote__image"
                                            src={AdobeStock199592631.src}
                                            alt=""
                                        />
                                        <div className="rounded-3 position-absolute bottom-0 end-0 image-quote__text p-2 bg-dark">
                                            Solving these challenges requires{" "}
                                            <span>technical expertise</span>.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h2 className="pe-3 mb-2">Turning Uncertainty into Clarity.</h2>
                                    <div className="mb-2">
                                        <p>
                                            At Burac AI, our Data Intelligence team combines advanced analytics with deep strategic experience — refined through thousands of model builds across billions in ad spend and tens of billions in revenue.
                                        </p>
                                    </div>
                                    <a
                                        href="https://powerdigitalmarketing.com/work-with-us/"
                                        className="btn btn-secondary mb-2"
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
                    <section className="flexible-bootstrap-section bg-light pt-1">
                        <div className="container">
                            <div className="row justify-content-center align-items-center mb-0">
                                <div className="col-lg-6">
                                    <h2 className="pe-3 mb-2">We Deploy Modern, Outcome-Driven Models</h2>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mb-3">
                                        <p>
                                            Burac AI’s Data Intelligence team operates under five core principles, in collaboration with our technology division to deliver our proprietary Nova Intelligence Platform.<br />
                                            This blend of cutting-edge software and expert human oversight allows us to deliver speed, scale, and precision unmatched in the analytics space.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <hr className="border-liner my-1 " />
                                </div>
                            </div>
                            <div className="row justify-content-center align-items-center mb-3">
                                <div className="col-lg-6">
                                    <div className="rounded-4 overflow-hidden mb-1">
                                        <div
                                            className="card-body"
                                            style={{ backgroundImage: 'url("' + Graph.src + '")' }}
                                        />
                                        <h4 className="card-title px-3 bg-primary">
                                            Based in business outcomes
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="rounded-4 overflow-hidden mb-1">
                                        <div
                                            className="card-body"
                                            style={{ backgroundImage: 'url("' + Computer.src + '")' }}
                                        />
                                        <h4 className="card-title px-3 bg-grey">
                                            Validated for true impact
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="rounded-4 overflow-hidden mb-1">
                                        <div
                                            className="card-body"
                                            style={{ backgroundImage: 'url("' + Conference.src + '")' }}
                                        />
                                        <h4 className="card-title px-3 bg-dark">
                                            Easily understood by media teams
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="rounded-4 overflow-hidden mb-1">
                                        <div
                                            className="card-body"
                                            style={{ backgroundImage: 'url("' + ManualChart.src + '")' }}
                                        />
                                        <h4 className="card-title px-3 bg-white">
                                            Agile and updated frequently
                                        </h4>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="rounded-4 overflow-hidden mb-1">
                                        <div
                                            className="card-body"
                                            style={{ backgroundImage: 'url("' + CurveUp.src + '")' }}
                                        />
                                        <h4 className="card-title px-3 bg-secondary">
                                            Predictive and enable forecasting
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </>
    )
}

export default MarketingMixModelingDataSciencePage;