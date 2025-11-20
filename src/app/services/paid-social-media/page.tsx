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
import image1 from './images/Paid-Social-Ad-Copy-768x768.jpg'
import image2 from './images/Paid-Social-Lead-Journey-768x768.jpg'
import image3 from './images/Paid-Social-Technical-Setup-768x430.jpg'
import image4 from './images/Paid_Social.webp'



const HeroSectionData = {
    badge: "AI COMMERCE AUTOMATION",
    title: "AI-Powered Social & Retail Media Intelligence",
    description: "Activate data-driven precision across paid social and retail platforms. Burac.ai’s adaptive algorithms optimize your ad spend, engagement, and ROI through real-time learning and automated optimization.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: image4.src,
    imageAlt: "AI Retail Marketing Services"
};

const WorkWithData = {
    badge: "Work with Burac.ai",
    title: "Intelligent Marketplace & PPC Optimization",
    paragraphs: [
        "Modern shoppers expect frictionless commerce across every touchpoint — online, in-store, and in-app. Burac.ai connects them seamlessly using AI-driven insight and omnichannel automation.",
        "For many brands, integrating DTC, Amazon, and retail strategies remains a challenge. Burac.ai’s unified platform bridges these silos with smart learning systems and cross-channel intelligence.",
        "<b>Our AI marketing engine aligns retail and DTC performance under one adaptive framework — accelerating awareness, conversion, and sustained growth.</b>"
    ],
    buttonText: "Get in touch",
    buttonUrl: " /work-with-us/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Unified Brand Intelligence",
            description: "From storefront optimization to AI-driven catalog management, we ensure your retail identity remains consistent and conversion-focused across every channel.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Unified Brand Intelligence Icon"
        },
        {
            icon: Layer11.src,
            title: "Omnichannel Media Automation",
            description: "Using AI-powered insights across search, DSP, and Amazon Marketing Cloud, Burac.ai continuously optimizes ad performance and full-funnel efficiency.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Omnichannel Media Automation Icon"
        },
        {
            icon: Layer1.src,
            title: "Connected DTC & Retail Growth",
            description: "Our AI platform harmonizes DTC and retail data to uncover performance gaps, amplify customer reach, and scale revenue intelligently.",
            bgColor: "bg-dark" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Connected DTC Growth Icon"
        }
    ]
};

const ServicesData = {
    badge: "Our AI Commerce Services",
    title: "Adaptive growth strategies powered by intelligent automation.",
    description: "Burac.ai unites retail, Amazon, and DTC ecosystems using predictive analytics to capture share, acquire customers, and drive long-term profitability.",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: " /workwithus/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Discover & Map",
            description: "AI audits your retail and digital footprint to identify the highest-value growth paths. Using your data and goals, we chart a precise roadmap for scalable results."
        },
        {
            title: "02 Integrate & Activate",
            description: "Align retail, social, and ecommerce under one intelligent system. Our AI synchronizes messaging, product strategy, and audience targeting for unified performance."
        },
        {
            title: "03 Measure & Evolve",
            description: "With continuous learning and advanced analytics, our system adapts to market shifts — refining strategies that keep your brand ahead of competition."
        }
    ]
};

const CardSliderData = [
    {
        id: "catalog-management",
        title: "AI Catalog Intelligence",
        description: "Our system maintains listing health, optimizes organic visibility, and applies algorithmic adjustments for long-term growth stability.",
        image: image1.src,
        imageAlt: "Catalog Management & Organic Strategy",
        bgColor: "bg-white" as const
    },
    {
        id: "product-page-creative",
        title: "Smart Storefront Design",
        description: "AI-optimized visuals and messaging that transform browsers into buyers — from product pages to your full retail storefront.",
        image: image2.src,
        imageAlt: "Product Page & Storefront Creative",
        bgColor: "bg-secondary" as const
    },
    {
        id: "seo-algorithm",
        title: "Algorithmic SEO Optimization",
        description: "Intelligent keyword and metadata tuning designed to maximize marketplace discoverability and organic ranking performance.",
        image: image3.src,
        imageAlt: "SEO - Tuned to the Amazon Algorithm",
        bgColor: "bg-primary" as const
    }
];

const WhySectionData = {
    badge: "Why Burac.ai?",
    title: "Our AI-powered retail experts integrate automation, data, and creativity to amplify marketplace growth and brand visibility.",
    buttonText: "Get a free marketing audit",
    buttonUrl: " /work-with-us/",
    introText: "Partnering with Burac.ai gives you:",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<b>Full-service automation:</b> From AI-driven DSP and catalog optimization to SEO and creative alignment — managed under one system.",
                "<b>Specialized AI experts:</b> A team of data scientists and ecommerce strategists optimizing performance across every retail channel.",
                "<b>Adaptive marketplace intelligence:</b> Continuous machine learning models that evolve with algorithm and consumer shifts."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Learn more about AI Commerce Intelligence.",
    description: "Your Marketplace Questions Answered: Automate, Optimize, and Scale.",
    faqs: [
        {
            question: "Why unify DTC and retail marketing under one AI system?",
            answer: [
                "Centralized AI strategy drives unified performance, improves efficiency, and maintains consistent branding. One adaptive system ensures seamless data sharing and smarter optimization across channels."
            ]
        },
        {
            question: "Will AI-driven retail growth affect DTC performance?",
            answer: [
                "No. Burac.ai’s unified intelligence aligns both to complement each other, avoiding overlap and ensuring both platforms grow sustainably through cross-channel learning."
            ]
        },
        {
            question: "If margins are tighter on retail channels, why invest there?",
            answer: [
                "AI automation allows Burac.ai to identify high-intent, high-margin segments. We prioritize ROI by balancing scale and profitability through predictive growth mapping."
            ]
        },
        {
            question: "Is paid advertising still necessary with AI optimization?",
            answer: [
                "Absolutely. AI amplifies performance by ensuring every paid impression learns from the last — reducing waste, improving conversions, and maximizing returns across channels."
            ]
        },
        {
            question: "What drives organic ranking in intelligent marketplaces?",
            answer: [
                "AI evaluates keyword relevancy, behavioral data, and external traffic to improve visibility. Integrated models enhance ranking performance using multi-channel influence data."
            ]
        },
        {
            question: "How is AI retail DSP different from standard programmatic?",
            answer: [
                "Unlike traditional DSP, Burac.ai leverages real-time learning, intent modeling, and closed-loop attribution to predict performance and scale results efficiently. Exclusive datasets enhance targeting precision."
            ]
        },
        {
            question: "What is Burac.ai’s Data Cloud and how does it work?",
            answer: [
                "Our Data Cloud connects multiple ad ecosystems — including DSP, DTC, and retail platforms — enabling deeper cross-channel analytics and predictive insights for smarter decision-making."
            ]
        },
        {
            question: "Can customer reviews improve AI models?",
            answer: [
                "Yes. Reviews feed sentiment and quality signals into Burac.ai’s learning systems, helping refine content, messaging, and ad strategies for stronger brand trust and conversion performance."
            ]
        },
        {
            question: "How do I improve visibility using AI insights?",
            answer: [
                "Burac.ai uses predictive analytics to identify untapped keyword, category, and placement opportunities, boosting visibility and improving your competitive advantage."
            ]
        },
        {
            question: "How can I track and measure AI-driven performance?",
            answer: [
                "Our real-time dashboard tracks engagement, conversion, and predictive ROI across every retail touchpoint, ensuring transparency and continual improvement."
            ]
        }
    ]
};



const PaidSocialMediaPage = () => {
    return (
        <>
            <style>
                {`
                .swiper-scrollbar.swiper-scrollbar-horizontal {
                    display: none;
                }
            
                @media (max-width: 1330px) {
                    .swiper-scrollbar.swiper-scrollbar-horizontal {
                        display: block;
                    }
                }
            `}
            </style>
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

export default PaidSocialMediaPage;
