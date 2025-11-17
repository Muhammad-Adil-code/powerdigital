"use server"

import ServiceIcon1 from "../amazon-marketing/images/service-icon-1.svg"
import Layer11 from "../amazon-marketing/images/Layer_1-1.svg"
import Layer1 from "../amazon-marketing/images/Layer-1.svg"
import Fullheader from '../../../components/consumer/header';
import Cardslider from '../maincomonents/cardslider';
import HeroSection from '../maincomonents/herosection';
import LearnMore from '../maincomonents/learnmore';
import WhySection from '../maincomonents/whysection';
import WorkWith from '../maincomonents/workwith';
import BackgroundImageSection from './backgroundimagesection';
const creativeHomeHeroSectionData = {
    badge: "Creative",
    title: "Creative Strategy Agency",
    description: "At Burac AI, we’re not just strategists — we design creative that drives results. By combining data-driven insights with creative expertise, we craft strategies and testing frameworks that elevate brands and deliver measurable impact.",
    buttonText: "Request a consultation",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Hero-Image-Right-2-small.png",
    imageAlt: "Creative Services"
};

const creativeHomeLearnMoreData = {
    badge: "Learn More",
    title: "Understanding Our Creative Services",
    description: "Your questions, answered.\n\nSee how Burac AI turns insights into creative strategies that connect and convert.",
    faqs: [
        {
            question: "What creative strategy services do you offer?",
            answer: [
                "We offer a full suite of services including campaign ideation, brand strategy, performance creative, and omnichannel execution — tailored to your brand and objectives."
            ]
        },
        {
            question: "How do you ensure the strategies align with our brand?",
            answer: [
                "Every project starts with a deep understanding of your brand, audience, and goals. This ensures our creative solutions are both visually compelling and strategically aligned."
            ]
        },
        {
            question: "Can you handle large-scale creative projects?",
            answer: [
                "Absolutely. Our team manages projects of any size, from brand strategies to large-scale video productions, ensuring seamless execution and consistency."
            ]
        },
        {
            question: "Why choose Burac AI for creative strategy?",
            answer: [
                "Burac AI combines creativity, data, and strategy to deliver impactful results. Our team crafts innovative solutions designed to grow your brand and engage your audience."
            ]
        }
    ]
};

const creativeHomeWhySectionData = {
    badge: "WHY BURAC AI",
    title: "Purposeful Creatives with Strategic Impact",
    buttonText: "Get a free brand audit",
    buttonUrl: "#",
    introText: "",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<p>At Burac AI, we merge data and design to create purposeful creative that resonates and drives measurable results.</p>",
                "<p>Every great creative tells a story — your story. We help brands connect deeply with audiences and inspire loyalty.</p>"
            ]
        }
    ]
};

const creativeHomeWorkWithData = {
    badge: "What We Do",
    title: "Bridging Brand Identity with Performance",
    paragraphs: [
        "We start with a brand audit to uncover insights that shape impactful campaigns.",
        "Then, we design comprehensive plans that align your brand identity with performance-focused marketing tactics."
    ],
    buttonText: "Get in touch",
    buttonUrl: "#",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Brand Obsessed",
            description: "We ensure all creative reflects your brand identity. Consistency, quality, and attention to detail are at the core of everything we produce.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Brand Obsessed Icon"
        },
        {
            icon: Layer11.src,
            title: "Data-Driven Decisions",
            description: "Every creative decision is backed by data and insights, ensuring strategies are innovative and results-focused.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Data Driven Icon"
        },
        {
            icon: Layer1.src,
            title: "Holistic Approach",
            description: "We craft creative that is aligned across all channels, ensuring cohesive messaging and maximum impact.",
            bgColor: "bg-dark" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Holistic Approach Icon"
        }
    ]
};

const creativeHomeCardSliderData = [
    {
        id: "strategy-performance",
        title: "Strategy",
        description: "We provide creative concepts that perform across platforms, leveraging insights to stay ahead of trends and optimize impact.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-4.png",
        imageAlt: "Strategy & Performance",
        bgColor: "bg-secondary" as const
    },
    {
        id: "design-brand",
        title: "Campaigns",
        description: "Our campaigns are crafted to connect, inspire, and perform. We combine brand storytelling with performance creativity across all channels.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Image-4096x2304-1-1-768x432.png",
        imageAlt: "Design & Brand",
        bgColor: "bg-grey" as const
    },
    {
        id: "editing-motion-graphics",
        title: "Brand",
        description: "We translate brand strategy into compelling stories, ensuring creative consistency across every touchpoint.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-6.png",
        imageAlt: "Editing & Motion Graphics",
        bgColor: "bg-primary" as const
    },
    {
        id: "production-ugc",
        title: "Testing Roadmaps",
        description: "Our creative process is guided by testing roadmaps to answer key questions and ensure each asset is intentional and performance-driven.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-8.png",
        imageAlt: "Production & UGC",
        bgColor: "bg-white" as const
    }
];


const CreativeHomePage = () => {
    return (
        <>
            <style>
                {`
                .digital-marketing-overview__carousel {
                    padding-top: 40px !important;
                }
                section.single-hero.bg-light span.badge.rounded-pill.bg-dark {
                    color: black;
                    background-color: transparent !important;
                }
            `}
            </style>
            <Fullheader />
            <main>
                <HeroSection data={creativeHomeHeroSectionData} />

                <section className="text-banner bg-light">
                    <p>Purposefully developed creative with</p>
                    <h3>
                        intentional  <span>strategies.</span>
                    </h3>
                </section>
                <WorkWith data={creativeHomeWorkWithData} />

                <section className="video-full-width">
                    <div className="video-full-width__title">
                        <h2 />
                    </div>
                    <video
                        playsInline={true as boolean}
                        autoPlay={true as boolean}
                        muted={true as boolean}
                        controls={true as boolean}
                        loop={true as boolean}
                        preload="auto"
                    >
                        <source
                            src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Production-Sizzle-2024-Social-Use-1080p.mp4"
                            type="video/mp4"
                        />
                    </video>
                </section>


                <section className="multi-text-section bg-light">
                    <div className="multi-text-section__text">
                        <div className="title">
                            <span className="badge rounded-pill bg-dark">Our Approach</span>
                            <h2>From audit to activation, we cover it all</h2>
                        </div>
                        <div className="paragraph">
                            <p>
                                Our structured process ensures that every campaign is strategically designed and flawlessly executed, delivering results that matter.
                            </p>
                            <p>
                                We eliminate the guesswork and uncertainty with Nova, a proprietary
                                technology that analyzes business growth opportunities, builds a plan to
                                execute on them, and accurately tracks progress and results.
                            </p>
                        </div>
                    </div>
                    <div className="multi-text-section__items-text">
                        {/* Primera fila con los primeros 3 items */}
                        <div className="multi-text-section__row">
                            <div className="item">
                                <div className="text">
                                    <h3>01 Audit</h3>
                                    <p>
                                        We start with a comprehensive brand audit to understand your needs,
                                        audience, and goals. Pulling creative across your landscape to place
                                        you among the competition.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>02 Strategy</h3>
                                    <p>
                                        The audit provides a foundation for the strategy to be built from.
                                        We then craft a brand strategy that forms the framework of a
                                        performance-driven campaign.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>03 Creative Ideation</h3>
                                    <p>
                                        With an intentional strategy, Creative Ideation is designed to
                                        support brands in brand campaigns and big ideas meant to disrupt.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Segunda fila con los items restantes */}
                        <div className="multi-text-section__row">
                            <div className="item">
                                <div className="text">
                                    <h3>04 Execution</h3>
                                    <p>
                                        Bringing those strategies across all touch points requires a team of
                                        experts who specialize in the brand and format types. Our team
                                        structure ensures your brand gets a dedicated expert for all
                                        creative services.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>05 Activation</h3>
                                    <p>
                                    When ready for launch we work hand in hand with our account specialists to ensure seamless activation across all channels and touch points.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="badge rounded-pill mt-5 bg-light">OUR CREATIVE SERVICES</span>

                    <Cardslider data={creativeHomeCardSliderData} />
                </section>


                <section className="single-hero bg-light  ">
                    <div className="single-hero__text">
                        <span className="badge rounded-pill bg-light">Creative Affinity</span>
                        <div className="title">
                            <h2>The Future of Creative Services</h2>
                        </div>
                        <div className="text">
                            <p>
                                <b>&nbsp;</b>
                                <span style={{ fontWeight: 400 }}>
                                    Powered by our nova Intelligence platform, Creative Affinity takes
                                    your brand’s creative to the next level by marrying cutting-edge
                                    technology with advanced data analytics. Recognized by Meta for its
                                    groundbreaking potential, this tool is setting new benchmarks in
                                    creative targeting and optimization, ensuring your campaigns are more
                                    impactful than ever.
                                </span>
                            </p>
                        </div>
                        <a
                            href="https://powerdigitalmarketing.com/nova-intelligence/"
                            className="btn btn-secondary"
                        >
                            <div className="icon">
                                <span>Tell me more</span>
                                <i className="icon-arrow-up-right" />
                            </div>
                        </a>
                    </div>
                    <div className="single-hero__image">
                        <div className="single-badge"></div>
                        <img
                            src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Hero-Image-Right-1.png"
                            alt=""
                        />
                    </div>
                </section>
                <WhySection data={creativeHomeWhySectionData} />
                <BackgroundImageSection />
                <LearnMore data={creativeHomeLearnMoreData} />
            </main>



        </>
    );
};

export default CreativeHomePage;
