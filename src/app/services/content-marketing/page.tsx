"use server"
// import "../../../css/endrock.styles.css"
// import "./css/endrock.styles.css"  
import ServiceIcon1 from "../amazon-marketing/images/service-icon-1.svg"
import Layer11 from "../amazon-marketing/images/Layer_1-1.svg"
import Layer1 from "../amazon-marketing/images/Layer-1.svg"
import Fullheader from '../../../components/consumer/header';
import Cardslider from '../maincomonents/cardslider';
import HeroSection from '../maincomonents/herosection';
import LearnMore from '../maincomonents/learnmore';
import WhySection from '../maincomonents/whysection';
import WorkWith from '../maincomonents/workwith';
import Services from '../maincomonents/Services';

import ContentMarketing from "./images/Content_Marketing.webp"
import InteractiveContent from "./images/Interactive-Content-768x768.jpg"
import Infographic from "./images/Infographic-768x768.jpg"
import BlogPostCreation from "./images/Blog-Post-Creation-768x768.jpg"
import ContentCreation from "./images/0_3-5-768x768.jpg"


const HeroSectionData = {
    badge: "GROWTH MARKETING",
    title: "Content marketing services that grow your brand awareness (and bottom line).",
    description: "Attract and inspire your audience with tailored, high-impact content. When the value is clear, choosing your brand just makes sense.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: ContentMarketing.src,
    imageAlt: "Content Marketing Services"
};

const WorkWithData = {
    badge: "Work with Burac AI",
    title: "Strategic PPC & Content Marketing Services",
    paragraphs: [
        "Today's customer doesn't distinguish between buying online, on Amazon, or at a physical store. What matters is a frictionless, convenient and accessible shopping experience, regardless of time and place.",
        "For many brands, orchestrating a true customer-centric experience from digital awareness through conversion is challenging. DTC and retail divisions often operate in silos, and most retail marketing partners only cover a slice of the journey.",
        "<b>Burac AI unifies retail, DTC, and Amazon digital marketing under one roof, driving brand awareness and profitable sales growth across channels and tactics.</b>"
    ],
    buttonText: "Get in touch",
    buttonUrl: "/workwithus/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Authentic Brand Experience Across Touchpoints",
            description: "Product mix consulting, product page optimization & Amazon SEO, Brand Store optimization & more – we ensure your Amazon presence is true to your brand and converts in a crowded marketplace.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Service Icon 1"
        },
        {
            icon: Layer11.src,
            title: "Full-Funnel Media Strategy",
            description: "We employ Amazon's full advertising arsenal across search, DSP and Amazon Marketing Cloud to fuel growth. From media planning & ongoing optimization to advanced measurement capabilities that continuously calibrate.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Layer 1-1"
        },
        {
            icon: Layer1.src,
            title: "Strategic DTC and Amazon Alignment",
            description: "Holistic strategies that connect the dots between channels and uncover the true impact of your marketing across DTC, Amazon, and retail revenue streams.",
            bgColor: "bg-dark" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Layer 1"
        }
    ]
};

const ServicesData = {
    badge: "Our Content & Amazon Services",
    title: "Customized growth strategies for every storefront.",
    description: "Our strategies ensure your company is acquiring new customers, capturing market share, and positioned properly for long-term growth.",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Prioritize & Plan",
            description: "Identify the highest impact content, Amazon, and retail marketing strategies to implement based on audit results & brand goals. Once we've identified your final destination, we calculate turn-by-turn directions. Using your KPIs, timeline, and industry trends, we'll outline the most efficient path and navigate the competitive landscape."
        },
        {
            title: "02 Align & Grow",
            description: "Synchronize your Amazon and content marketing strategy with your brand's holistic ecommerce and/or B&M strategy, from product mix to media activation. Implement synergistic cross-channel strategies & omnichannel measurement techniques to drive overall brand growth."
        },
        {
            title: "03 Measure, Iterate, Repeat",
            description: "With advanced measurement and in-depth analytics, we consider the true impact of each strategy, pivoting with marketplace & competitive landscape changes, and capitalizing on new opportunities."
        }
    ]
};

const CardSliderData = [
    {
        id: "blog-post-creation",
        title: "Blog Post Creation",
        description: "Long and short-form articles written, pitched and published for you.",
        image: BlogPostCreation.src,
        imageAlt: "Blog Post Creation",
        bgColor: "bg-white" as const
    },
    {
        id: "premium-content-creation",
        title: "Premium Content Creation",
        description: "High-value assets such as lead magnets, whitepapers, and more, tailored to provide actionable insights for your target audience in impactful, data-driven formats.",
        image: ContentCreation.src,
        imageAlt: "Premium Content Creation",
        bgColor: "bg-secondary" as const
    },
    {
        id: "infographic-copy-design",
        title: "Infographic Copy and Design",
        description: "Visually compelling and easy-to-digest infographics designed to simplify complex ideas and encourage sharing.",
        image: Infographic.src,
        imageAlt: "Infographic Copy and Design",
        bgColor: "bg-primary" as const
    },
    {
        id: "customer-journey-maps",
        title: "Customer Journey Content Maps",
        description: "Strategic frameworks that map your customer journey through audience insights and data. These tools enable tailored content delivery with precise, high-level topics designed to address specific problem-solution pairs, fostering meaningful engagement and measurable results.",
        image: InteractiveContent.src,
        imageAlt: "Customer Journey Content Maps",
        bgColor: "bg-white" as const
    }
];

const LearnMoreData = {
    badge: "Learn more",
    title: "Deep dive into Content Marketing.",
    description: "Content isn't just filler text; it's the voice of your brand and the fuel for your SEO. Let's explore how Burac.ai turns words and visuals into measurable assets that drive traffic and trust.",
    faqs: [
        {
            question: "What is a content audit?",
            answer: [
                "Think of a content audit as a spring cleaning for your website. Burac.ai reviews everything you've ever published to see what's working, what's outdated, and what's missing. We analyze your blogs, landing pages, and conversion points to build a strategy that cuts the fluff and focuses on performance."
            ]
        },
        {
            question: "What is an infographic?",
            answer: [
                "An infographic is a shortcut for the brain. Since people process visuals 60,000 times faster than text, we use infographics to turn complex data or boring statistics into vibrant, easy-to-digest visual stories. They are highly shareable, making them perfect for boosting brand awareness on social media."
            ]
        },
        {
            question: "What is the difference between long-form and short-form?",
            answer: [
                "It comes down to intent. Long-form content (1,200+ words) is the heavy lifter for SEO—it proves to Google that you are an authority on a topic. Short-form content (around 700 words) is punchier, designed for quick engagement on social media or email. You need a healthy mix of both to succeed."
            ]
        },
        {
            question: "What is a content calendar?",
            answer: [
                "A content calendar is your sanity saver. It prevents the panic of 'what do we post today?' Burac.ai builds a roadmap that aligns with your product launches, seasonality, and customer personas, ensuring you are consistently publishing the right message at the right time without missing a beat."
            ]
        },
        {
            question: "How does content marketing actually work?",
            answer: [
                "Traditional ads interrupt; content marketing attracts. It works by giving value first—educating or entertaining your audience so they trust you. When they trust you, they buy from you. It’s the long game of building a relationship that turns casual readers into loyal revenue generators."
            ]
        }
    ]
};


const WhySectionData = {
    badge: "Why Burac AI?",
    title: "Our team of experts across all major ecommerce channels take a customized, iterative and adaptive approach to your success on Amazon and overall growth as a brand.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    introText: "By partnering with us, you get:",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<b>Full-service management:</b> Amazon storefront, Amazon DSP, & product mix consulting, catalog management, troubleshooting, content marketing, and more taken off your hands.",
                "<b>A dedicated team of experts:</b> Hyper-focused SMEs with deep knowledge and robust experience in their specific online retail discipline.",
                "<b>Adaptive Amazon marketplace strategies:</b> Continuous monitoring, measuring, and adapting to changes in your unique Amazon landscape."
            ]
        }
    ]
};


const ContentMarketingPage = () => {
    return (
        <>
            <Fullheader />
            <main>
                <HeroSection data={HeroSectionData} />

                {/* Text Banner */}
                <section className="text-banner bg-light">
                    <p>Don’t settle for ordinary.</p>
                    <h3>
                        Partner with <span>extraordinary.</span>
                    </h3>
                </section>

                {/* Work With */}
                <WorkWith data={WorkWithData} />
                <section className="multi-text-section bg-light">
                    <Services data={ServicesData} />

                    <Cardslider data={CardSliderData} />
                </section>
                <WhySection data={WhySectionData} />
                <LearnMore data={LearnMoreData} />
            </main>



        </>
    );
};

export default ContentMarketingPage;
