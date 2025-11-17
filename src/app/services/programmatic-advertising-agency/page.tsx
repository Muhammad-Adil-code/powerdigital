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

const programmaticAdvertisingAgencyHeroSectionData = {
    badge: "AI-POWERED GROWTH",
    title: "Scale awareness and revenue with intelligent programmatic automation.",
    description: "Burac.ai blends automation, data science, and predictive targeting to deliver precise, adaptive, and performance-driven advertising that maximizes ROI.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Programmatic.png",
    imageAlt: "AI-Driven Programmatic Advertising"
};

const programmaticAdvertisingAgencyLearnMoreData = {
    badge: "Learn more",
    title: "Learn more about AI Programmatic Advertising.",
    description: "Discover how Burac.ai’s intelligent automation and predictive analytics connect your brand with the right audience in real time.",
    faqs: [
        {
            question: "What is AI programmatic advertising?",
            answer: [
                "AI programmatic advertising automates ad buying and placement using machine learning, ensuring every impression reaches the right user, at the right time, with the right message."
            ]
        },
        {
            question: "Why choose Burac.ai over traditional agencies?",
            answer: [
                "Burac.ai integrates real-time learning models, predictive targeting, and automation to drive measurable growth. We don’t just advertise — we engineer intelligent performance."
            ]
        },
        {
            question: "Can I track and optimize campaigns in real time?",
            answer: [
                "Yes. Burac.ai provides full transparency with live analytics dashboards, enabling instant adjustments and data-backed decision-making — no waiting for post-campaign reports."
            ]
        },
        {
            question: "Which channels does Burac.ai activate programmatically?",
            answer: [
                "From CTV and DOOH to native, audio, and display, our AI models optimize across all channels with unified intelligence for cohesive performance.",
                "<ul><li>CTV</li><li>Streaming Audio/Podcast</li><li>Digital OOH</li><li>Linear TV</li><li>OLV</li><li>YouTube</li><li>Display</li><li>Native</li><li>Direct Mail</li></ul>"
            ]
        },
        {
            question: "How does AI improve targeting accuracy?",
            answer: [
                "Burac.ai combines behavioral, contextual, and predictive modeling for unmatched targeting precision, ensuring relevance and higher ROI.",
                "<ul><li>Behavioral</li><li>Demographic</li><li>Contextual</li><li>Geographic</li><li>Lookalike</li><li>Competitor Intelligence</li><li>First-Party Data</li><li>Cross-Channel Optimization</li><li>Retargeting</li></ul>"
            ]
        },
        {
            question: "How does Burac.ai ensure brand safety?",
            answer: [
                "Our AI continuously scans and evaluates inventory for quality and safety using smart filters, brand suitability scores, and adaptive exclusion lists that evolve with real-time data."
            ]
        },
        {
            question: "What kind of analytics do you provide?",
            answer: [
                "Burac.ai provides end-to-end, real-time analytics with transparency at every level — impressions, engagement, conversions, and cross-channel attribution — for data-driven growth."
            ]
        },
        {
            question: "How is AI programmatic different from traditional advertising?",
            answer: [
                "AI programmatic uses automation and predictive algorithms to dynamically target audiences, while traditional ads rely on static placements. The result: efficiency, accuracy, and adaptability at scale."
            ]
        },
        {
            question: "Does AI programmatic work for both B2B and B2C brands?",
            answer: [
                "Absolutely. Whether B2C or <a href=\"#\" target=\"_blank\" rel=\"noopener\">B2B digital marketing</a>, Burac.ai customizes AI models to match audience intent, stage, and business goals for measurable outcomes."
            ]
        },
        {
            question: "Do you tailor strategies by industry?",
            answer: [
                "Yes. Burac.ai builds AI models specific to your vertical — e-commerce, healthcare, tech, or finance — aligning automation and data strategy with your industry’s dynamics."
            ]
        }
    ]
};

const programmaticAdvertisingAgencyWhySectionData = {
    badge: "WHY BURAC.AI?",
    title: "Partnering with Burac.ai means smarter, faster, and more adaptive marketing intelligence.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "#",
    introText: "",
    contentItems: [
        {
            type: "bullet_points" as const,
            content: [
                "<b>AI-Driven Insights:</b> Predictive analytics identify the highest-value opportunities for optimal spend efficiency.",
                "<b>Platform Intelligence:</b> We deploy technology that dynamically adjusts to performance patterns in real time.",
                "<b>Transparent Results:</b> Every metric is traceable through live dashboards and full-funnel analytics.",
                "<b>Continuous Optimization:</b> Machine learning models evolve with every campaign to maximize ROI."
            ]
        }
    ]
};

const programmaticAdvertisingAgencyWorkWithData = {
    badge: "WORK WITH BURAC.AI",
    title: "Transformative Growth Through AI-Driven Programmatic Intelligence",
    paragraphs: [
        "Managing cross-platform media can be complex. Burac.ai simplifies it through intelligent automation and adaptive data modeling.",
        "We combine AI technology with marketing expertise to create precision-driven programmatic solutions that deliver measurable results with complete transparency.",
        "Our data-first approach ensures every dollar spent drives incremental growth. By unifying analytics and optimization, we refine your campaigns continuously to maintain performance leadership.",
        "Whether you have existing assets or need AI-enhanced creative, our system optimizes every visual, headline, and placement to engage and convert with precision.",
        "From forecasting to execution, Burac.ai ensures every campaign is smarter, faster, and always improving — so your brand stays ahead of change."
    ],
    buttonText: "Get in touch",
    buttonUrl: "#",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "AI Inventory Prioritization",
            description: "Burac.ai identifies and prioritizes premium inventory using predictive algorithms that match audience intent in real time.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "AI Inventory Icon"
        },
        {
            icon: Layer11.src,
            title: "Adaptive Execution",
            description: "Every campaign is monitored and optimized by AI and human experts working together for the best outcomes.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Adaptive Execution Icon"
        },
        {
            icon: Layer1.src,
            title: "Predictive Growth",
            description: "AI models continuously learn from audience data to maximize engagement, retention, and revenue outcomes.",
            bgColor: "bg-white" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Predictive Growth Icon"
        }
    ]
};

const programmaticAdvertisingAgencyServicesData = {
    badge: "OUR AI PROGRAMMATIC SERVICES",
    title: "The Future of Advertising: Automated, intelligent, and performance-focused.",
    description: "Burac.ai enables cross-channel precision and adaptive targeting powered by AI learning models — delivering synchronized experiences that amplify your brand’s message everywhere it matters.",
    showButton: false,
    buttonText: "",
    buttonUrl: "#",
    layout: "2-per-row" as const,
    items: [
        {
            title: "01 Data Audit & Forecasting",
            description: "We assess your existing campaigns and apply predictive analytics to uncover high-performance opportunities."
        },
        {
            title: "02 Intelligent Strategy Design",
            description: "We craft AI-driven roadmaps aligned with your brand’s goals, blending automation with human expertise for lasting growth."
        },
        {
            title: "03 Automated Execution",
            description: "Burac.ai manages real-time optimization across all channels, adapting strategies instantly for the best possible results."
        },
        {
            title: "04 Real-Time Measurement",
            description: "With integrated analytics, we monitor performance continuously and refine models for compounding growth."
        }
    ]
};

const programmaticAdvertisingAgencyCardSliderData = [
    {
        id: "connected-tv",
        title: "Connected TV (CTV)",
        description: "AI-optimized TV ads that merge storytelling with precise audience targeting on streaming platforms.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/CTV-768x768.jpg",
        imageAlt: "Connected TV (CTV)",
        bgColor: "bg-grey" as const
    },
    {
        id: "streaming-audio",
        title: "Streaming Audio / Podcasts",
        description: "Smart audio ads personalized by listener behavior and intent data for meaningful engagement.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Streaming-Audio-768x768.jpg",
        imageAlt: "Streaming Audio / Podcasts",
        bgColor: "bg-primary" as const
    },
    {
        id: "digital-out-of-home",
        title: "Digital Out Of Home (DOOH)",
        description: "AI-driven outdoor placements that optimize visibility based on foot traffic and contextual relevance.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/DOOH-768x768.jpg",
        imageAlt: "Digital Out Of Home (DOOH)",
        bgColor: "bg-secondary" as const
    },
    {
        id: "display-native",
        title: "Display & Native",
        description: "Adaptive placements powered by AI learning to maximize impressions, CTRs, and conversions.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Display-and-Native-768x768.jpg",
        imageAlt: "Display & Native",
        bgColor: "bg-white" as const
    },
    {
        id: "direct-mail",
        title: "Smart Direct Mail",
        description: "AI-personalized print campaigns integrated with digital insights for cross-channel engagement.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Direct-Mail-768x768.jpg",
        imageAlt: "Direct Mail",
        bgColor: "bg-grey" as const
    },
    {
        id: "instream-outstream-video",
        title: "Instream & Outstream Video",
        description: "Dynamic video ads tailored by AI to engage audiences across YouTube and digital networks.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Instream_Outstream-768x768.jpg",
        imageAlt: "Instream & Outstream Video",
        bgColor: "bg-primary" as const
    },
    {
        id: "linear-tv",
        title: "Linear TV",
        description: "AI-enhanced TV targeting that blends traditional reach with predictive audience analytics.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/10/Omnichannel-Excellence-768x768.jpg",
        imageAlt: "Linear TV",
        bgColor: "bg-white" as const
    },
    {
        id: "cross-channel-media-planning",
        title: "Cross-Channel Strategy & Orchestration",
        description: "AI harmonizes your media mix across every touchpoint, ensuring unified messaging and higher returns.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Cross-Channel-Media-Planning-Strategy-768x768.jpg",
        imageAlt: "Cross-Channel Media Planning & Strategy",
        bgColor: "bg-secondary" as const
    }
];


const ProgrammaticAdvertisingAgencyPage = () => {
    return (
        <>
            <Fullheader />
            <main>
                <HeroSection data={programmaticAdvertisingAgencyHeroSectionData} />

                {/* Text Banner */}
                <section className="text-banner bg-light">
                    <p>Don’t settle for ordinary.</p>
                    <h3>
                        Partner with <span>extraordinary.</span>
                    </h3>
                </section>

                {/* Work With */}
                <WorkWith data={programmaticAdvertisingAgencyWorkWithData} />
                <section className="multi-text-section bg-light">
                    <Services data={programmaticAdvertisingAgencyServicesData} />

                    <Cardslider data={programmaticAdvertisingAgencyCardSliderData} />
                </section>
                <WhySection data={programmaticAdvertisingAgencyWhySectionData} />
                <LearnMore data={programmaticAdvertisingAgencyLearnMoreData} />
            </main>



        </>
    );
};

export default ProgrammaticAdvertisingAgencyPage;
