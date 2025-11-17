import Header from '../../components/consumer/header';
import HomeImage from './images/Home.png';
import Clientlogo from '../strategic-consulting/clientlogo';
import Image from 'next/image';

export default function StrategicConsulting() {
    return (
        <>
            <Header />
            <div className="wp-singular page-template page-template-global-template page-template-global-template-php page page-id-7208 wp-theme-pdm-theme">
                <main>
                    <section className="single-hero">
                        <div className="single-hero__text">
                            <span className="badge rounded-pill bg-light">Consulting</span>
                            <div className="title">
                                <h1>Go-to-Market Strategy Consulting</h1>
                            </div>
                            <div className="text">
                                <p>
                                    <span style={{ fontWeight: 400 }}>
                                        We’ve seen countless brands arrive at Burac AI with beautiful creative, solid media plans, and strong funding — yet they still can’t unlock consistent growth.
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
                            <div className="single-badge" />
                            <Image src={HomeImage} alt="Strategic Consulting Hero" />
                        </div>
                    </section>
                    <section className="case-study-section bg-light">
                        <div className="case-study-section__content">
                            <div className="item">
                                <div className="tags">
                                    <span className="badge rounded-pill bg-primary">Our Approach</span>
                                </div>
                                <div className="content-text">
                                    <div className="title">
                                        <h2>The most common reason brands struggle to grow?</h2>
                                    </div>
                                    <div className="text content-post">
                                        <p>
                                            They haven’t truly defined how their product delivers unique, differentiated value to their customer. The key words are differentiated and value. To fix that, we help brands understand:
                                        </p>
                                        <ul>
                                            <li>The market landscape and competitive dynamics</li>
                                            <li>Who their customer really is, and what drives their decisions</li>
                                            <li>How to communicate in a way that connects and converts</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="tags">
                                    <span className="badge rounded-pill bg-primary">Our Framework</span>
                                </div>
                                <div className="content-text">
                                    <div className="title">
                                        <h2>Your comprehensive, AI-driven go-to-market strategy</h2>
                                    </div>
                                    <div className="text content-post">
                                        <p>
                                            If your product and messaging look identical to your competitors’, your odds of success are slim. Or worse — if your ideal customer is actually Dolly Parton but you’re marketing to Selena Gomez, you’re wasting serious ad spend.
                                        </p>
                                        <p>
                                            <strong>
                                                That’s why you need a comprehensive, data-backed, AI-powered go-to-market strategy.
                                            </strong>
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>A Deep Business Audit</strong>
                                                <br />
                                                We’ll feed your financial, customer, and marketing data into Nova Intelligence, Burac AI’s proprietary analytics engine.
Our AI growth analysts diagnose key pain points, assess your unit economics, benchmark LTV:CAC ratios, and pinpoint the metrics that truly move the needle.
                                            </li>
                                            <li>
                                                <strong>Customer Insights + Persona</strong>
                                                <br />
                                                We’ll analyze who you think your customer is versus who they actually are.
Our persona development isn’t guesswork — it’s grounded in verified behavioral data, purchase patterns, and psychographic analysis to uncover what genuinely drives buying intent.
                                            </li>
                                            <li>
                                                <strong>Market Research</strong>
                                                <br />
                                                We’ll evaluate your competitive space and total addressable market (TAM):
Is the category saturated or emerging?

Does it require customer education?

Where are the gaps and hidden opportunities?

You’ll get a full picture of market maturity, competitive advantage, and growth potential — complete with risk factors and quick wins.
                                            </li>
                                            <li>
                                                <strong>Media Plan</strong>
                                                <br />
                                                Once we understand your customer, market, and economics, we’ll architect a precise investment roadmap:
When to spend, where to spend, how much, and through which channels — all to maximize your marketing ROI.
                                            </li>
                                        </ul>
                                        <p>
                                            And that’s just the start.
Depending on what we uncover, we’ll also provide insights on your tech stack, internal processes, customer sentiment, management efficiency, and ROI measurement framework.
                                        </p>
                                        <p>
                                            Experience the advantage of working with a Big 4-level consultancy, powered by AI intelligence, without the seven-figure price tag.
And honestly? We think Burac AI delivers smarter, faster, and better results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Clientlogo />
                </main>
            </div>


        </>
    )
}

