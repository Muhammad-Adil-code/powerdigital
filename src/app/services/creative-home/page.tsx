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
  title: "Creative Services Agency",
  description:
    "At Burac AI, we craft creative that connects. By blending data, research, and design expertise, we deliver impactful visuals and campaigns that move your audience to action.",
  buttonText: "Request a consultation",
  buttonUrl: "#",
  image:
    "https://powerdigitalmarketing.com/wp-content/uploads/2025/01/HERO-IMAGE-_-Right.png",
  imageAlt: "Creative Services"
};

const creativeHomeLearnMoreData = {
  badge: "Learn More",
  title: "Understanding Our Creative Services",
  description:
    "Your creative questions, answered. See how we turn strategy and data into designs that drive real results.",
  faqs: [
    {
      question: "What creative strategy services do you offer?",
      answer: [
        "We provide full-service creative strategy — from brand development and campaign ideation to performance-driven content across all digital platforms."
      ]
    },
    {
      question: "How do you make sure your work aligns with our brand?",
      answer: [
        "Every project starts with an in-depth brand and audience discovery. We ensure every creative element reflects your tone, goals, and customer expectations."
      ]
    },
    {
      question: "Can Burac AI handle complex or large-scale projects?",
      answer: [
        "Absolutely. Our creative and strategy teams manage projects of all sizes — from full brand launches to high-volume digital production — with precision and scalability."
      ]
    },
    {
      question: "Why choose Burac AI for creative strategy?",
      answer: [
        "We unite creativity, strategy, and AI-driven insights to deliver measurable results. Burac AI transforms ideas into performance-ready creative built to grow your brand."
      ]
    }
  ]
};

const creativeHomeWhySectionData = {
  badge: "WHY BURAC AI",
  title: "Purposeful Creativity with Strategic Impact",
  buttonText: "Get a free brand audit",
  buttonUrl: "#",
  introText: "",
  contentItems: [
    {
      type: "list" as const,
      content: [
        "<p>At Burac AI, creativity meets intelligence. We merge data, research, and design to craft visuals that connect deeply with your audience and drive measurable impact.</p>",
        "<p>Every great creative tells a story — your story. We help brands build emotional connections that inspire loyalty and long-term advocacy.</p>"
      ]
    }
  ]
};

const creativeHomeWorkWithData = {
  badge: "What We Do",
  title: "Creative That Tells a Story",
  paragraphs: [
    "Our creative is powered by insights. Using audience data and market intelligence, we design assets that speak directly to your customers while protecting and strengthening your brand identity.",
    "We act as an extension of your team, combining creative thinking with analytical precision to deliver work that performs."
  ],
  buttonText: "Get in touch",
  buttonUrl: "#",
  cards: [
    {
      icon: ServiceIcon1.src,
      title: "Brand Obsessed",
      description:
        "We immerse ourselves in your brand to ensure every piece of creative aligns with your vision and values. Consistency and craftsmanship are at the core of what we do.",
      bgColor: "bg-secondary" as const,
      textColor: "#333333",
      iconColor: "invert(0)",
      alt: "Brand Obsessed Icon"
    },
    {
      icon: Layer11.src,
      title: "Data-Driven Decisions",
      description:
        "We leverage insights and analytics to guide creative direction, ensuring every design decision serves a clear strategic purpose.",
      bgColor: "bg-primary" as const,
      textColor: "#ffffff",
      iconColor: "invert(1)",
      alt: "Data Driven Icon"
    },
    {
      icon: Layer1.src,
      title: "Holistic Approach",
      description:
        "From digital to print, we align creative execution across every channel — delivering consistency and impact wherever your brand appears.",
      bgColor: "bg-dark" as const,
      textColor: "#ffffff",
      iconColor: "invert(1)",
      alt: "Holistic Approach Icon"
    }
  ]
};

const creativeHomeServicesData = {
  badge: "OUR CREATIVE SERVICES",
  title: "The Future of Creative Strategy: Insightful, Scalable, and Impact-Driven",
  description:
    "Burac AI delivers connected creative experiences across channels and devices. We use precision targeting and unified storytelling to ensure your brand message resonates everywhere your audience engages.",
  showButton: false,
  buttonText: "",
  buttonUrl: "#",
  layout: "2-per-row" as const,
  items: [
    {
      title: "01 Discovery & Insights",
      description:
        "We analyze your brand and audience data to uncover what resonates — turning insights into creative opportunity."
    },
    {
      title: "02 Custom Strategy",
      description:
        "We build bespoke creative roadmaps that align with your business goals, brand tone, and customer behavior."
    },
    {
      title: "03 Seamless Execution",
      description:
        "From design to delivery, we manage campaigns across every channel — ensuring consistency, agility, and precision."
    },
    {
      title: "04 Optimization & Results",
      description:
        "We continuously monitor performance, refining creative for maximum engagement, conversion, and brand lift."
    }
  ]
};

const creativeHomeCardSliderData = [
  {
    id: "strategy-performance",
    title: "Strategy & Performance",
    description:
      "Concept-to-execution creative packages designed for flexibility and testing across all platforms, ensuring each idea performs at its best.",
    image:
      "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-4.png",
    imageAlt: "Strategy & Performance",
    bgColor: "bg-secondary" as const
  },
  {
    id: "design-brand",
    title: "Design & Brand",
    description:
      "Our design experts ensure your brand identity stays consistent and compelling across every visual and customer touchpoint.",
    image:
      "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Image-4096x2304-1-1-768x432.png",
    imageAlt: "Design & Brand",
    bgColor: "bg-grey" as const
  },
  {
    id: "editing-motion-graphics",
    title: "Editing & Motion Graphics",
    description:
      "From short-form social to long-form video, our motion team brings your brand to life across every screen with polish and personality.",
    image:
      "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-6.png",
    imageAlt: "Editing & Motion Graphics",
    bgColor: "bg-primary" as const
  },
  {
    id: "production-ugc",
    title: "Production & UGC",
    description:
      "We specialize in storytelling through high-impact content and authentic creator-driven production that engages audiences naturally.",
    image:
      "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Rectangle-46-8.png",
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
                    <p>Don’t settle for ordinary.</p>
                    <h3>
                        Partner with <span>extraordinary.</span>
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
                            <h2>A purposeful approach to powerful creative</h2>
                        </div>
                        <div className="paragraph">
                            <p>
                                Our structured process ensures that every creative is strategically
                                designed and flawlessly executed, delivering results that matter.
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
                                        When ready for launch, we work hand in hand with our account
                                        specialists to ensure seamless activation across all channels and
                                        touch points.
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
