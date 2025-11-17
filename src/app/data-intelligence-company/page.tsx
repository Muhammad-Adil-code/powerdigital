"use client"
import Image from "next/image";
import homeImage from "./images/Home-Image.png";
import linkedinIcon from "./images/Service_SocialMedia_LinkedIn_100.png";
import layerIcon from "./images/Layer_1-1.svg";
import icon14 from "./images/icon-14.svg";
import fullWidthImage from "./images/R4kK6j.png";
import FullHeader from "../../components/consumer/header";

export default function DataIntelligenceCompany() {
    return (
        <>
            <FullHeader />
            <div className="wp-singular page-template page-template-approach-template page-template-approach-template-php page page-id-8901 wp-theme-pdm-theme">
                <main>
                    <section className="single-hero bg-light  ">
                        <div className="single-hero__text">
                            <span className="badge rounded-pill bg-dark">DATA INTELLIGENCE</span>
                            <div className="title">
                                <h2>
                                    Stop wasting
                                    <span className="highlighted">millions on</span> ineffective ad spend.
                                </h2>
                            </div>
                            <div className="text">
                                <p style={{ fontSize: "1rem" }}>
                                    We help growing brands ($10m+ annual revenue) uncover:
                                </p>
                                <ul style={{ paddingLeft: "2rem" }}>
                                    <li style={{ fontSize: "1rem", marginBottom: 0, paddingLeft: 0 }}>
                                    True ROI of every marketing dollar
                                    </li>
                                    <li style={{ fontSize: "1rem", marginBottom: 0, paddingLeft: 0 }}>
                                        Performance across channels and tactics
                                    </li>
                                    <li style={{ fontSize: "1rem", marginBottom: 0, paddingLeft: 0 }}>
                                        Advanced customer insights (LTV:CAC, cohorts, and more)
                                    </li>
                                </ul>
                            </div>
                            <a
                                href="https://powerdigitalmarketing.com/work-with-us/"
                                className="btn btn-secondary"
                            >
                                <div className="icon">
                                    <span>Get in touch</span>
                                    <i className="icon-arrow-up-right" />
                                </div>
                            </a>
                        </div>
                        <div className="single-hero__image">
                            <div className="single-badge"></div>
                            <Image src={homeImage} alt="" width={500} height={400} />
                        </div>
                    </section>{" "}
                    <section className="multi-cards-section bg-dark py-4">
                        <div className="intro-twos-columns ">
                            <div className="intro-twos-columns__col">
                                <div className="intro-twos-columns__title">
                                    <span className="badge rounded-pill bg-secondary">
                                        Our Approach
                                    </span>
                                    <h2>Data In. Dollars Out.</h2>
                                </div>
                                <div className="intro-twos-columns__text">
                                    <p>
                                        Our approach blends the power of our proprietary software, with the expertise of dedicated marketing scientists—giving you the speed of technology with the strategic insight of human experts.
                                    </p>
                                    <p>
                                        Marketing or business leaders looking to justify ad spend or grow revenue profitably can schedule a free consultation today.
                                    </p>
                                    <a
                                        href="https://powerdigitalmarketing.com/contact/"
                                        className="btn btn-secondary"
                                    >
                                        <div className="icon">
                                            <span>Request a consultation</span>
                                            <i className="icon-arrow-up-right" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="multi-cards-section__cards  ">
                            <div className="three-card bg-light">
                                <div className="icon">
                                    <Image src={linkedinIcon} alt="" width={100} height={100} />
                                </div>
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            Agile media mix models (<strong>MMM</strong>) derived through
                                            machine learning.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="three-card bg-primary">
                                <div className="icon">
                                    <Image src={layerIcon} alt="" width={100} height={100} />
                                </div>
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            <strong>Incrementality</strong> experiments that calibrate and
                                            validate the model.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="three-card bg-light">
                                <div className="icon">
                                    <Image src={icon14} alt="" width={100} height={100} />
                                </div>
                                <div className="text">
                                    <div className="description">
                                        <p>
                                            When and how to use platform or third party attribution tools.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{" "}
                    <section className="full-width-image">
                        <Image src={fullWidthImage} alt="" />
                    </section>{" "}
                    <section className="service-category  bg-light">
                        <ul className="service-category__list">
                            <li className="service-category__item position-relative">
                                <div className="service-category__item-content">
                                    <div className="title">
                                        <h3>Marketing Measurement + Incrementality</h3>
                                    </div>
                                    <div className="description">
                                        <p>
                                            Reduce ad waste and understand the real impact of your marketing spend.
                                        </p>
                                    </div>
                                </div>
                                <div className="service-category__item-arrow">
                                    <a
                                        href="https://powerdigitalmarketing.com/vertical/consumer-product-b2c/"
                                        className="btn btn--round btn-sm btn-outline-dark stretched-link"
                                        style={{}}
                                    >
                                        <div className="icon">
                                            <i className="icon-arrow-up-right" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className="service-category__item position-relative">
                                <div className="service-category__item-content">
                                    <div className="title">
                                        <h3>Marketing Mix Modeling + Data Science</h3>
                                    </div>
                                    <div className="description">
                                        <p>
                                            Advanced analytics and expert insight to drive smarter decisions.
                                        </p>
                                    </div>
                                </div>
                                <div className="service-category__item-arrow">
                                    <a
                                        href="https://powerdigitalmarketing.com/vertical/b2b-marketing/"
                                        className="btn btn--round btn-sm btn-outline-dark stretched-link"
                                        style={{}}
                                    >
                                        <div className="icon">
                                            <i className="icon-arrow-up-right" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className="service-category__item position-relative">
                                <div className="service-category__item-content">
                                    <div className="title">
                                        <h3>Data Infrastructures + CDPs</h3>
                                    </div>
                                    <div className="description">
                                        <p>
                                            Streamline data management, ensure quality, and enable actionable insights.
                                        </p>
                                    </div>
                                </div>
                                <div className="service-category__item-arrow">
                                    <a
                                        href="https://powerdigitalmarketing.com/vertical/consumer-services/"
                                        className="btn btn--round btn-sm btn-outline-dark stretched-link"
                                        style={{}}
                                    >
                                        <div className="icon">
                                            <i className="icon-arrow-up-right" />
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n  .service-category__item:hover {\n    background-color: rgba(43, 42, 41, 1);\n  }\n"
                        }}
                    />
                </main>
            </div>
        </>
    );
}
