"use server"

import ServiceIcon1 from "./amazon-marketing/images/service-icon-1.svg"

import Layer1 from "./amazon-marketing/images/Layer-1.svg"
import Fullheader from '../../components/consumer/header';
import HeroSection from './maincomonents/herosection';
import LearnMore from './maincomonents/learnmore';
import WorkWith from './maincomonents/workwith';
import ServicesComponent from './servicescomps/services';
import FadeAnimation from './servicescomps/fadeanimaion';
import Clientlogo from "../strategic-consulting/clientlogo";
import Difference from './servicescomps/difference';
import image1 from "./images/CTV-768x768.jpg"
import image2 from "./images/Cross-Channel-Media-Planning-Strategy-768x768.jpg"
import image3 from "./images/Display-and-Native-768x768.jpg"
import image4 from "./images/DOOH-768x768.jpg"
import image5 from "./images/Direct-Mail-768x768.jpg"
import image6 from "./images/Instream_Outstream-768x768.jpg"
import image7 from "./images/Omnichannel-Excellence-768x768.jpg"


const servicesHeroSectionData = {
    badge: "GROWTH MARKETING",
    title: "Smarter digital marketing. Less guesswork, more real results.",
    description:
        "At Burac AI, we deliver full-funnel digital marketing solutions built on data, automation, and creativity. Our team helps you overcome complex business challenges and unlock scalable growth. Together, we’ll drive measurable ROI with precision and clarity — proving that great marketing isn’t guesswork, it’s strategy in action.",
    buttonText: "Request a Consultation",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Services.png",
    imageAlt: "Programmatic Advertising Services"
};

const servicesLearnMoreData = {
    badge: "FAQ",
    title: "Frequently asked questions",
    description: "",
    faqs: [
        {
            question: "1. How can digital marketing help my business grow?",
            answer: [
                "Digital marketing helps you reach the right audience at the right time. By improving visibility, targeting precisely, and optimizing campaigns through data insights, Burac AI ensures your brand connects effectively, drives engagement, and increases conversions."
            ]
        },
        {
            question: "2. How do I choose the right digital marketing services for my business?",
            answer: [
                "The best strategy starts with your business goals. Whether you want to build awareness, capture leads, or retain customers, Burac AI tailors a plan based on data, industry insights, and your audience’s behavior to ensure lasting growth."
            ]
        },
        {
            question: "3. How do I know if my marketing efforts are working?",
            answer: [
                "We focus on metrics that matter. Our data dashboards track KPIs like revenue impact, engagement, and acquisition cost — helping you see exactly how your campaigns contribute to business outcomes."
            ]
        },
        {
            question: "4. How does an integrated marketing strategy improve performance?",
            answer: [
                "By aligning SEO, content, ads, and social efforts, Burac AI builds a consistent customer journey across every channel. This integration increases efficiency, strengthens brand recall, and drives higher ROI."
            ]
        },
        {
            question: "5. How can I ensure my marketing channels work together effectively?",
            answer: [
                "Cohesion is key. Burac AI unites creative, analytics, and media strategies to deliver seamless messaging across all platforms — ensuring every piece of your marketing ecosystem amplifies the others."
            ]
        }
    ]
};

const servicesWhySectionData = {
    badge: "WHY BURAC AI?",
    title: "Partnering with Burac AI means",
    buttonText: "Get a free marketing audit",
    buttonUrl: "#",
    introText: "",
    contentItems: [
        {
            type: "bullet_points" as const,
            content: [
                "<b>Data-Led Strategy:</b> Every decision is powered by analytics to maximize impact and ROI.",
                "<b>Technology Neutral:</b> We choose the right tools and platforms based on performance, not preference.",
                "<b>Transparent Insights:</b> You get clear, real-time visibility into every campaign and outcome.",
                "<b>Continuous Innovation:</b> We constantly test, optimize, and refine to keep you ahead of the competition."
            ]
        }
    ]
};

const servicesWorkWithData = {
    badge: "SPECIALIZATION",
    title: "Diverse expertise. Unified by results.",
    paragraphs: [
        "Burac AI offers full-spectrum digital marketing services — from performance ads and SEO to creative strategy and web design. Our approach blends broad capability with sharp specialization to deliver measurable results that scale.",
        "Experience the agility of a data-first digital partner without the overhead of in-house hiring."
    ],
    buttonText: "Get in touch",
    buttonUrl: "#",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Custom Growth Strategy",
            description:
                "We build tailored digital strategies focused on your brand’s growth potential. From audience targeting to creative execution, our process bridges data, storytelling, and innovation to create meaningful customer connections.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Custom Digital Marketing Strategy Icon"
        },
        {
            icon: ServiceIcon1.src,
            title: "Specialized Teams",
            description:
                "Each Burac AI client gets a dedicated team of marketing experts, strategists, and project leads. We act as your in-house growth partners — aligning every effort with your goals and ensuring speed, precision, and creativity.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Dedicated Teams Icon"
        },
        {
            icon: Layer1.src,
            title: "ROI-Driven Execution",
            description:
                "We focus on what matters most — growth. Our integrated approach uses AI insights and automation to optimize every customer interaction and maximize return across all digital touchpoints.",
            bgColor: "bg-white" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Driven by ROI Icon"
        }
    ]
};

const servicesServicesData = {
    badge: "OUR PROGRAMMATIC SERVICES",
    title: "The Future of Programmatic Advertising: Transparent. Scalable. Intelligent.",
    description:
        "Burac AI connects your campaigns across channels and devices for precision targeting and full-funnel impact. By uniting data, automation, and AI, we create synchronized engagement that amplifies awareness, boosts conversions, and drives measurable business growth.",
    showButton: false,
    buttonText: "",
    buttonUrl: "#",
    layout: "2-per-row" as const,
    items: [
        {
            title: "01 Insight & Analysis",
            description:
                "We begin with a deep dive into your current performance, identifying what works and uncovering hidden growth opportunities through advanced analytics."
        },
        {
            title: "02 Custom Strategy",
            description:
                "Our tailored programmatic framework aligns with your audience, brand, and goals — ensuring every impression contributes to your ROI."
        },
        {
            title: "03 Agile Execution",
            description:
                "We manage and optimize your campaigns in real time, adjusting bids, creatives, and placements to ensure peak performance."
        },
        {
            title: "04 Continuous Optimization",
            description:
                "Burac AI’s data-driven feedback loop ensures your campaigns evolve constantly, maintaining efficiency and consistent revenue growth."
        }
    ]
};

const servicesCardSliderData = [
    {
        id: "connected-tv",
        title: "Connected TV (CTV)",
        description: "AI-optimized TV ads that merge storytelling with precise audience targeting on streaming platforms.",
        image: image1.src,
        imageAlt: "Connected TV (CTV)",
        bgColor: "bg-grey" as const
    },
    {
        id: "streaming-audio",
        title: "Streaming Audio / Podcasts",
        description: "Smart audio ads personalized by listener behavior and intent data for meaningful engagement.",
        image: image2.src,
        imageAlt: "Streaming Audio / Podcasts",
        bgColor: "bg-primary" as const
    },
    {
        id: "digital-out-of-home",
        title: "Digital Out Of Home (DOOH)",
        description: "AI-driven outdoor placements that optimize visibility based on foot traffic and contextual relevance.",
        image: image4.src,
        imageAlt: "Digital Out Of Home (DOOH)",
        bgColor: "bg-secondary" as const
    },
    {
        id: "display-native",
        title: "Display & Native",
        description: "Adaptive placements powered by AI learning to maximize impressions, CTRs, and conversions.",
        image: image3.src,
        imageAlt: "Display & Native",
        bgColor: "bg-white" as const
    },
    {
        id: "direct-mail",
        title: "Smart Direct Mail",
        description: "AI-personalized print campaigns integrated with digital insights for cross-channel engagement.",
        image: image5.src,
        imageAlt: "Direct Mail",
        bgColor: "bg-grey" as const
    },
    {
        id: "instream-outstream-video",
        title: "Instream & Outstream Video",
        description: "Dynamic video ads tailored by AI to engage audiences across YouTube and digital networks.",
        image: image6.src,
        imageAlt: "Instream & Outstream Video",
        bgColor: "bg-primary" as const
    },
    {
        id: "linear-tv",
        title: "Linear TV",
        description: "AI-enhanced TV targeting that blends traditional reach with predictive audience analytics.",
        image: image7.src,
        imageAlt: "Linear TV",
        bgColor: "bg-white" as const
    },
];

const ServicesPage = () => {
    return (
        <>
            <style>
                {`
                section.multi-cards-section.bg-light {
                    background-color: #2b2a29 !important;
                }
                    section.multi-cards-section.bg-light span.badge.rounded-pill.bg-dark {
                    background-color: #7756ff !important;
                    border-color: #7756ff !important;
                }
                    section.multi-cards-section.bg-light h2 {
                    color: white;
                }
                    section.multi-cards-section.bg-light p {
                    color: white;
                }
                    section.multi-cards-section.bg-light a.btn.btn-secondary {
                    display: none;
                }
                section.multi-cards-section.bg-light .intro-twos-columns {
                    border-bottom: 1px solid white;
                }
}
            `}
            </style>
            <Fullheader />
            <main>
                <HeroSection data={servicesHeroSectionData} />

                <section className="text-banner bg-light">
                    <p>Don’t settle for ordinary.</p>
                    <h3>
                        Partner with <span>extraordinary.</span>
                    </h3>
                </section>

                <WorkWith data={servicesWorkWithData} />
                <ServicesComponent />
                <FadeAnimation />
                <Clientlogo />
                <Difference />
                <LearnMore data={servicesLearnMoreData} />
            </main>



        </>
    );
};

export default ServicesPage;
