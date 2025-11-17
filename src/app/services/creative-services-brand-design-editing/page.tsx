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
import Results from './results';
const creativeHomeHeroSectionData = {
    badge: "Creative",
    title: "Brand Design Agency",
    description: "At Burac AI, we’re more than strategists — we’re your creative partners. Our team of designers and editors works as an extension of your brand to ensure cohesion, consistency, and elevated aesthetics that drive impact across all touchpoints.",
    buttonText: "Request a consultation",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Hero-Image-Right-3-small.png",
    imageAlt: "Creative Services"
};

const creativeHomeLearnMoreData = {
    badge: "LEARN MORE",
    title: "Explore Our Creative Services",
    description: "Your questions answered.\n\nDiscover how Burac AI creates designs that connect, convert, and elevate your brand.",
    faqs: [
        {
            question: "What types of design services do you provide?",
            answer: [
                "We offer a wide range of design services including social media graphics, email campaigns, landing pages, banners, and marketplace assets — all tailored to your brand’s goals."
            ]
        },
        {
            question: "How do you ensure designs align with our brand?",
            answer: [
                "We start by understanding your brand, audience, and objectives. This ensures all creative solutions are visually compelling and aligned with your brand strategy."
            ]
        },
        {
            question: "Can you handle large-scale projects?",
            answer: [
                "Yes! From complete brand strategies to high-volume production, our team ensures flawless execution at any scale."
            ]
        },
        {
            question: "Why choose Burac AI for creative services?",
            answer: [
                "We combine creativity, strategy, and data-driven insights to deliver impactful, brand-aligned creative solutions designed to grow your business."
            ]
        }
    ]
};

const creativeHomeWhySectionData = {
    badge: "WHY BURAC AI",
    title: "Purposeful Creativity with Measurable Impact",
    buttonText: "Get a free brand audit",
    buttonUrl: "#",
    introText: "",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<p>At Burac AI, we merge data and design to craft creative that resonates and drives results.</p>",
                "<p>We tell your brand’s story with intentional design, fostering stronger connections and loyal customers.</p>"
            ]
        }
    ]
};

const creativeHomeWorkWithData = {
    badge: "What We Do",
    title: "Creative That Performs Across Platforms",
    paragraphs: [
        "We create strategies that amplify your brand across every channel. From engaging social media graphics to conversion-focused landing pages, our team brings creativity and expertise to every asset."
    ],
    buttonText: "Get in touch",
    buttonUrl: "#",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Dedicated Experts",
            description: "A creative team fully dedicated to your brand, acting as an extension of your team to drive innovation and maintain brand consistency.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Dedicated Experts Icon"
        },
        {
            icon: Layer11.src,
            title: "Data-Backed Creative",
            description: "All creative is informed by data and insights, ensuring every asset is innovative, strategic, and performance-focused.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Data-Backed Creative Icon"
        },
        {
            icon: Layer1.src,
            title: "Holistic Approach",
            description: "We ensure creative is aligned across channels and platforms for maximum impact and cohesive brand storytelling.",
            bgColor: "bg-dark" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Holistic Approach Icon"
        }
    ]
};

const creativeHomeCardSliderData = [
    {
        id: "performance-creative",
        title: "Performance Creative",
        description: "Visually compelling content designed for brand impact and measurable performance across all platforms.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-4.png",
        imageAlt: "Performance Creative",
        bgColor: "bg-secondary" as const
    },
    {
        id: "email-landing-pages",
        title: "Email & Landing Pages",
        description: "On-brand emails and landing pages that capture attention, improve engagement, and drive conversions.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Image-4096x3072-1-1-768x576.png",
        imageAlt: "Email & Landing Pages",
        bgColor: "bg-grey" as const
    },
    {
        id: "brand-development",
        title: "Brand Development",
        description: "Building authentic brand identities based on data-driven insights, storytelling, and strategic design principles.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Figma-Image-1828x841-1-768x353.png",
        imageAlt: "Brand Development",
        bgColor: "bg-primary" as const
    },
    {
        id: "design-motion-graphics",
        title: "Design & Motion Graphics",
        description: "Innovative design and motion graphics crafted across video and digital assets, enhanced with AI tools for efficiency and impact.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-9.png",
        imageAlt: "Design & Motion Graphics",
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
                    <p>A purposeful approach to</p>
                    <h3>
                        powerful  <span>creative.</span>
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
                            <h2>Our intentional process designed to drive success</h2>
                        </div>
                        <div className="paragraph">
                            <p>
                                Our intentional process ensures that every creative is strategically designed and flawlessly executed, delivering results that matter. From social media graphics, email designs, or complete brand overhauls, we have the expertise, data, and drive to drive impact across all channels.
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
                                    <h3>01 Let’s Connect</h3>
                                    <p>
                                        We start by understanding your brand, goals, and audience to ensure our designs hit the mark.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>02 Design with Purpose</h3>
                                    <p>
                                        Our team creates designs that not only look great but also serve a strategic purpose, whether it’s driving engagement, conversions, or brand awareness.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>03 Motion that evokes emotion</h3>
                                    <p>
                                        With an intentional strategy Creative Ideation is designed to support brands in brand campaigns and big ideas meant to disrupt.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Segunda fila con los items restantes */}
                        <div className="multi-text-section__row">
                            <div className="item">
                                <div className="text">
                                    <h3>04 Review and Refine</h3>
                                    <p>
                                        We collaborate with you every step of the way, refining the designs until they’re perfect.
                                    </p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="text">
                                    <h3>05 Final Touches</h3>
                                    <p>
                                        Once approved, we prepare the final files for all platforms, ensuring your designs are ready to make an impact.
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
                <Results />
                <WhySection data={creativeHomeWhySectionData} />
                <BackgroundImageSection />
                <LearnMore data={creativeHomeLearnMoreData} />
            </main>



        </>
    );
};

export default CreativeHomePage;
