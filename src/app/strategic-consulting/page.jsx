"use client"

import Header from '../../components/consumer/header';
import Image from 'next/image';
import HomeImage from './images/Home.png';
import Clientlogo from './clientlogo';
import { useState } from 'react';

export default function StrategicConsulting() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <Header />
            <div className="wp-singular page-template page-template-global-template page-template-global-template-php page page-id-7207 wp-theme-pdm-theme">
                <main>
                    <section className="single-hero   ">
                        <div className="single-hero__text">
                            <span className="badge rounded-pill bg-light" />
                            <div className="title">
                                <h1>
                                    <span>Digital Marketing Consultancy: The Future Is Here</span>
                                </h1>
                            </div>
                            <div className="text">
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        <strong>
                                            At Burac AI, we guide hundreds of brands through the core pillars of growth product, customer, and market.
                                        </strong>
                                    </span>
                                </p>
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        Even the most creative marketing campaigns fall flat if they aren’t aligned with a solid business strategy. That’s why we connect every marketing decision directly to measurable business outcomes.&nbsp;{" "}
                                    </span>
                                </p>
                            </div>
                            <a
                                href="https://powerdigitalmarketing.com/work-with-us/"
                                className="btn btn-secondary"
                            >
                                <div className="icon">
                                    <span>Request a Consultation</span>
                                    <i className="icon-arrow-up-right" />
                                </div>
                            </a>
                        </div>
                        <div className="single-hero__image">
                            <div className="single-badge"></div>
                            <Image src={HomeImage} alt="Strategic Consulting Hero" />
                        </div>
                    </section>{" "}
                    <section className="case-study-section bg-light">
                        <div className="case-study-section__content">
                            <div className="item">
                                <div className="tags">
                                    <span className="badge rounded-pill bg-primary">Our Framework</span>
                                </div>
                                <div className="content-text">
                                    <div className="title">
                                        <h2>After thousands of business appraisals...</h2>
                                    </div>
                                    <div className="text content-post">
                                        <p>
                                            After conducting thousands of business appraisals for both brand operators and investment firms, we’ve refined a proven framework to help businesses achieve predictable and scalable results.
                                        </p>
                                        <ul>
                                            <li>Deeply understand your customer</li>
                                            <li>Develop an actually valuable product</li>
                                            <li>Clearly communicate that value proposition</li>
                                            <li>Engage customers with precision and relevance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="tags">
                                    <span className="badge rounded-pill bg-primary">What We Do</span>
                                </div>
                                <div className="content-text">
                                    <div className="title">
                                        <h2>We help ambitious brands grow an average of 24% year over year. </h2>
                                    </div>
                                    <div className="text content-post">
                                        <p>
                                            Our team builds comprehensive go-to-market strategies, creates optimized media plans, and designs data-driven customer understanding using advanced AI analytics.
                                        </p>
                                        <p><br/></p>
                                        <p>
                                            “Strategy is how a company creates and captures differentiated value.”
                                            <br />
                                            <strong>Alex MH Smith</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{" "}
                    <section className="services-overview-tags bg-light">
                        <div className="intro-twos-columns">
                            <div className="intro-twos-columns__col">
                                <div className="intro-twos-columns__title">
                                    <h2>Our Services</h2>
                                </div>
                                <div className="intro-twos-columns__text">
                                    <p>
                                        <span style={{ fontWeight: 400 }}>
                                            Transform your business with AI-powered consulting that drives real impact. we go beyond traditional metrics — turning your data into actionable growth systems.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ul className="services-overview-tags__list">
                            <div className="services-list">
                                <div className="text">
                                    <div className="title">
                                        <span className="number-index">01</span>
                                        <h2>Consulting</h2>
                                    </div>
                                    <div className="text__description">
                                        <p>
                                            Supercharge your <a href="https://fusepointinsights.com/service/measurement/">
                                                marketing performance consulting
                                            </a>{" "} that doesn’t just measure results — it creates them. Leveraging Burac AI’s technology, we design tailored strategies that make your growth not just possible, but inevitable.
                                            Supercharge your business with{" "}
                                            
                                        </p>
                                    </div>
                                    <div className="content-tab" style={{ display: 'block', minHeight: '50px' }}>
                                        <div className="description">
                                            {activeTab === 0 && (
                                                <p>
                                                    <span style={{ fontWeight: 400 }}>
                                                        Unlock growth with a comprehensive, data-driven{" "}
                                                    </span>
                                                    <span style={{ fontWeight: 400 }}>GTM </span>
                                                    <span style={{ fontWeight: 400 }}>digital</span>
                                                    <span style={{ fontWeight: 400 }}> strategy</span>
                                                    <span style={{ fontWeight: 400 }}>.</span>
                                                </p>
                                            )}
                                            {activeTab === 1 && (
                                                <p>
                                                    <span style={{ fontWeight: 400 }}>
                                                        Optimize ad spend with comprehensive media planning and
                                                        data-driven forecasting.
                                                    </span>
                                                </p>
                                            )}
                                            {activeTab === 2 && (
                                                <p>
                                                    <span style={{ fontWeight: 400 }}>
                                                        We’ve helped clients achieve measurable, AI-backed growth — consistently turning insights into scalable success.
                                                    </span>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="column-tags">
                                    <div className="title">
                                        <span className="number-index">01</span>
                                        <h2>Consulting</h2>
                                    </div>
                                    <ul className="services-overview__list">
                                        <li>
                                            <a
                                                href="https://powerdigitalmarketing.com/strategic-consulting-go-to-market-strategy/"
                                                className={`badge rounded-pill shadowed-hover ${activeTab === 0 ? 'active' : ''}`}
                                                onMouseEnter={() => setActiveTab(0)}
                                            >
                                                Full Go To Market Strategy
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://powerdigitalmarketing.com/strategic-consulting-media-planning-forecasting/"
                                                className={`badge rounded-pill shadowed-hover ${activeTab === 1 ? 'active' : ''}`}
                                                onMouseEnter={() => setActiveTab(1)}
                                            >
                                                Media Planning/Scenarios
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://powerdigitalmarketing.com/strategic-consulting-persona-development/"
                                                className={`badge rounded-pill shadowed-hover ${activeTab === 2 ? 'active' : ''}`}
                                                onMouseEnter={() => setActiveTab(2)}
                                            >
                                                Persona Development
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </section>{" "}
                    <Clientlogo />
                </main>
            </div>

        </>
    )
}

