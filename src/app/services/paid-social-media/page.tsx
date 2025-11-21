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
    title: "Deep dive into Paid Social Media.",
    description: "Ready to elevate your paid social game? Let's dive into how custom strategies can hit your goals—whether that's finding new customers or making every ad dollar count. See how Burac.ai streamlines your campaigns to drive actual results, not just vanity metrics.",
    faqs: [
        {
            question: "What is a paid social audit?",
            answer: [
                "Think of a paid social audit as a health checkup for your ads. At Burac.ai, we dig deep into everything you're currently running to see what's working and what isn't. We look at your customer journey, technical tracking, audience targeting, and creative assets. We take those insights and build a roadmap to stop wasted spend and start scaling your growth."
            ]
        },
        {
            question: "What social platforms do you advertise on?",
            answer: [
                "We work with the platforms where your customers actually spend their time. Whether that's TikTok, Facebook, Instagram, Pinterest, or LinkedIn, we handle it all. But just because you *can* be everywhere doesn't mean you *should* be. We help you figure out exactly which networks will give you the best return on investment so you aren't shouting into the void."
            ]
        },
        {
            question: "What is retargeting?",
            answer: [
                "Retargeting is essentially a second chance at a first impression. Most people leave a website without buying anything on their first visit. Retargeting allows you to gently remind those visitors—through ads on their social feeds—about the cool stuff they looked at. It’s about bringing them back to finish what they started."
            ]
        },
        {
            question: "What is Facebook advertising?",
            answer: [
                "Facebook is still a juggernaut for reaching people. Advertising there lets you put your brand in front of highly specific groups based on interests, location, and behavior. However, their tools have gotten incredibly complex over the years. That’s where we come in—we navigate the backend technicalities to ensure you're targeting the right people without burning through your budget."
            ]
        },
        {
            question: "What is LinkedIn advertising?",
            answer: [
                "If you're in the B2B space, LinkedIn is the place to be. It puts your message directly in front of decision-makers and professionals. While anyone can set up an ad account, doing it *profitably* is tricky because costs can be higher. We manage the strategy to ensure you're generating high-quality leads, not just expensive clicks."
            ]
        },
        {
            question: "What do you test in your social advertising?",
            answer: [
                "We test everything, because assumptions kill budgets. At Burac.ai, we experiment with different headlines, images, video styles, and audience segments. We watch the data—clicks, engagement, and conversions—to see what resonates. Then, we double down on the winners and cut the losers."
            ]
        },
        {
            question: "Will you design social ad creative for my brand?",
            answer: [
                "Absolutely. If you work with us on paid social, we handle the creative heavy lifting. We design visuals that look great and align with your brand voice across every platform. Consistency is key to building trust, so we make sure your ads look like *you*, whether they're on Instagram or LinkedIn."
            ]
        },
        {
            question: "What is the difference between paid social and organic social?",
            answer: [
                "It comes down to 'pay-to-play' versus 'community building.' Paid social involves spending money to guarantee your posts reach specific new audiences. Organic social is about posting content for free to nurture your existing followers. Paid fuels growth and acquisition; organic builds loyalty and brand personality. You usually need a mix of both to win."
            ]
        },
        {
            question: "How much should I spend on paid social advertising?",
            answer: [
                "There’s no one-size-fits-all answer here—it really depends on your industry and your goals. However, you don't need to guess. During our initial audit, we look at your competitive landscape and tell you exactly what kind of budget you need to be competitive. We build a plan that respects your wallet while maximizing your results."
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
