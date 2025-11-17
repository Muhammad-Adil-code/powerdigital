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


const HeroSectionData = {
    badge: "GROWTH MARKETING",
    title: "Influencer Marketing Agency: Marketing that builds trust and amplifies your brand.",
    description: "Influencer marketing puts your brand in front of a captive audience that already trusts and respects the messenger.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Influencer-1.png",
    imageAlt: "Influencer Marketing Services"
};

const WorkWithData = {
    badge: "Work with Burac AI",
    title: "Strategic PPC & Influencer Marketing Services",
    paragraphs: [
        "Today's customer doesn't distinguish between buying online, on Amazon, or at a physical store. What matters is a frictionless, convenient, and accessible shopping experience, regardless of time and place.",
        "For many brands, orchestrating a true customer-centric experience from digital awareness through conversion is challenging. DTC and retail divisions often operate in silos, and most retail marketing partners only cover a slice of the journey.",
        "<b>Burac AI unifies retail, DTC, and influencer marketing under one roof, driving brand awareness and profitable sales growth across channels and tactics.</b>"
    ],
    buttonText: "Get in touch",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Authentic Brand Experience Across Touchpoints",
            description: "Product mix consulting, product page optimization & Amazon SEO, Brand Store optimization & more – we ensure your presence is true to your brand, and converts in a crowded marketplace.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Service Icon 1"
        },
        {
            icon: Layer11.src,
            title: "Full-Funnel Media Strategy",
            description: "We employ Amazon's full advertising arsenal across search, DSP and Amazon Marketing Cloud, combined with influencer strategies, to fuel growth. From media planning & ongoing optimization to advanced measurement capabilities that continuously calibrate.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Layer 1-1"
        },
        {
            icon: Layer1.src,
            title: "Strategic DTC, Amazon & Influencer Alignment",
            description: "Holistic strategies that connect the dots between channels and uncover the true impact of your marketing across DTC, Amazon, retail revenue streams, and influencer campaigns.",
            bgColor: "bg-dark" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Layer 1"
        }
    ]
};

const ServicesData = {
    badge: "Our Services",
    title: "Customized growth strategies for every storefront and platform.",
    description: "Our strategies ensure your company is acquiring new customers, capturing market share, and positioned properly for long-term growth.",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Prioritize & Plan",
            description: "Identify the highest impact Amazon, retail, and influencer marketing strategies based on audit results & brand goals. Using KPIs, timeline, and industry trends, we outline the most efficient path and navigate the competitive landscape."
        },
        {
            title: "02 Align & Grow",
            description: "Synchronize your marketing strategy across Amazon, DTC, and influencer channels. Implement cross-channel strategies & measurement techniques to drive overall brand growth."
        },
        {
            title: "03 Measure, Iterate, Repeat",
            description: "With advanced measurement and in-depth analytics, we assess the impact of each strategy, pivot with marketplace & competitive changes, and capitalize on new opportunities."
        }
    ]
};

const CardSliderData = [
    {
        id: "catalog-management",
        title: "Catalog Management & Organic Strategy",
        description: "Experts on your side to keep your account healthy, products live, and pull all organic visibility levers to build & maintain a strong foundation for sustained growth.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Strategic-Roadmap-768x768.jpg",
        imageAlt: "Catalog Management & Organic Strategy",
        bgColor: "bg-white" as const
    },
    {
        id: "product-page-creative",
        title: "Product Page & Storefront Creative",
        description: "Conversion-driving, Amazon-optimized and influencer-aligned assets that turn browsers into buyers.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Amazon-Ads-1-768x768.jpg",
        imageAlt: "Product Page & Storefront Creative",
        bgColor: "bg-secondary" as const
    },
    {
        id: "seo-algorithm",
        title: "SEO - Tuned to the Amazon Algorithm",
        description: "Written content on the frontend and backend of your listings that maximizes product discoverability on the marketplace.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Conversion-Rates-768x768.jpg",
        imageAlt: "SEO - Tuned to the Amazon Algorithm",
        bgColor: "bg-primary" as const
    },
    {
        id: "ppc-advertising",
        title: "Amazon PPC Search Advertising",
        description: "Acquire & retain Amazon customers with adaptive search advertising strategy that puts business & bottom line impact first.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Optimization-Opportunities-768x768.jpg",
        imageAlt: "Amazon PPC Search Advertising",
        bgColor: "bg-white" as const
    },
    {
        id: "dsp-advertising",
        title: "Amazon DSP Advertising",
        description: "Fuel the funnel for continuous growth with Amazon's first-party data in the hands of seasoned programmatic display experts.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Executive-Strategy-768x768.jpg",
        imageAlt: "Amazon DSP Advertising",
        bgColor: "bg-secondary" as const
    },
    {
        id: "omnichannel-strategies",
        title: "Cutting-Edge Omnichannel Strategies",
        description: "Customized cross-channel advertising that aligns your digital strategy with your customer's unique journey and leverages non-Amazon channels, including influencer campaigns, to grow revenue.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/pr_pdm_image-768x430.png",
        imageAlt: "Cutting-Edge Omnichannel Strategies",
        bgColor: "bg-primary" as const,
        links: [
            {
                text: "paid media",
                url: "https://powerdigitalmarketing.com/services/paid-media/"
            },
            {
                text: "Download the Accelerator Guide",
                url: "https://powerdigitalmarketing.com/resources/retail-media-networks-roi-accelerator/?utm_campaign__c=2025_Content_MROI&content_download_tag=MROI_2025"
            }
        ]
    },
    {
        id: "measurement-solutions",
        title: "Advanced Measurement Solutions",
        description: "Amazon Marketing Cloud analytics and data science-backed incrementality testing to assess the true impact of Amazon and influencer marketing strategies and continuously iterate.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_0-1-768x768.jpg",
        imageAlt: "Advanced Measurement Solutions",
        bgColor: "bg-white" as const
    }
];

const WhySectionData = {
    badge: "Why Burac AI?",
    title: "Our team of experts across all major ecommerce channels takes a customized, iterative, and adaptive approach to your success on Amazon, influencer campaigns, and overall brand growth.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    introText: "By partnering with us, you get:",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<b>Full-service management:</b> Amazon storefront, Amazon DSP, influencer campaigns, product mix consulting, catalog management, troubleshooting, and more handled for you.",
                "<b>A dedicated team of experts:</b> Hyper-focused SMEs with deep knowledge and robust experience in their specific online retail discipline.",
                "<b>Adaptive marketplace strategies:</b> Continuous monitoring, measuring, and adapting to changes in your unique landscape."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Learn more about Amazon & Influencer Marketing.",
    description: "Your Questions Answered: Optimize, Strategize, and Grow",
    faqs: [
        {
            question: "What are the advantages of having 1 agency manage my DTC, Amazon, and influencer marketing?",
            answer: [
                "Cohesive & complementary strategies (1 agency focused on overall success vs. sales channel success), brand image & messaging consistency, budget flexibility, agility during peak periods, and efficiency of a single point of contact backed by a full team."
            ]
        },
        {
            question: "Will focusing on Amazon and influencer marketing cannibalize sales from my website?",
            answer: [
                "Amazon accounts for nearly half of all ecommerce transactions in the US. Customers will continue to buy on Amazon. With intentional, coordinated strategies, you can avoid cannibalization and drive overall brand growth. Burac AI specializes in growing Amazon sales, influencer-driven revenue, and market share while complementing DTC efforts."
            ]
        },
        {
            question: "If Amazon and influencer sales are less profitable than my DTC sales, why invest?",
            answer: [
                "Amazon and influencer campaigns provide access to high-intent audiences at scale. Burac AI evaluates profitability first and balances revenue growth with margin optimization, often at the product or campaign level."
            ]
        },
        {
            question: "Is paid Amazon or influencer advertising necessary?",
            answer: [
                "With thousands of new sellers and content creators daily, just listing products or posting content isn’t enough. Burac AI takes a holistic approach combining search, DSP, and influencer strategies to drive traffic and conversions."
            ]
        }
        // Remaining FAQs can be updated similarly...
    ]
};


const InfluencerMarketingPage = () => {
    return (
        <>
            <Fullheader  />
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

export default InfluencerMarketingPage;
