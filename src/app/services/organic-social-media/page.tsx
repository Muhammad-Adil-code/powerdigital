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
    title: "Organic social media marketing services that make your audience want to follow & engage with your brand.",
    description: "Build authentic connections with your followers, and they’ll keep coming back for more.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Organic-Social-1.png",
    imageAlt: "Amazon Marketing Services"
};

const WorkWithData = {
    badge: "Work with Power",
    title: "Elevate Your Digital Presence Strategically",
    paragraphs: [
        "Your customers expect a seamless experience, whether they interact with you online, on Amazon, or in-store.",
        "Many brands struggle to orchestrate a fully integrated, customer-centric journey. DTC and retail teams often work in silos, leaving gaps in strategy.",
        "<b>We unify retail and DTC digital marketing to drive meaningful engagement, brand awareness, and measurable growth across all channels</b>"
    ],
    buttonText: "Get in touch",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Authentic Brand Experience Across Touchpoints",
            description: "Ensure every interaction reflects your brand’s values, from product pages to Amazon SEO and Brand Store optimization.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Service Icon 1"
        },
        {
            icon: Layer11.src,
            title: "Full-Funnel Media Strategy",
            description: "Leverage all Amazon advertising tools and data insights to fuel growth, optimize campaigns, and measure results effectively.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Layer 1-1"
        },
        {
            icon: Layer1.src,
            title: "Strategic DTC and Amazon Alignment",
            description: "Connect marketing efforts across all channels to understand impact and drive long-term revenue growth.",
            bgColor: "bg-dark" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Layer 1"
        }
    ]
};

const ServicesData = {
    badge: "Our Amazon Services",
    title: "Tailored strategies to accelerate growth across every storefront.",
    description: "We help brands attract new customers, capture market share, and scale sustainably.",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Prioritize & Plan",
            description: "Identify top-priority strategies based on audit insights, brand goals, and market trends. Chart the most efficient path to growth using your KPIs and timeline."
        },
        {
            title: "02 Align & Grow",
            description: "Integrate Amazon strategies with your broader DTC and retail marketing. Implement cross-channel campaigns to maximize growth and ROI."
        },
        {
            title: "03 Measure, Iterate, Repeat",
            description: "Continuously analyze results, adapt strategies to market changes, and seize new opportunities to scale performance."
        }
    ]
};

const CardSliderData = [
    {
        id: "catalog-management",
        title: "Catalog Management & Organic Strategy",
        description: "Keep your products visible, accounts healthy, and leverage every organic growth opportunity for long-term success.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Strategic-Roadmap-768x768.jpg",
        imageAlt: "Catalog Management & Organic Strategy",
        bgColor: "bg-white" as const
    },
    {
        id: "product-page-creative",
        title: "Product Page & Storefront Creative",
        description: "Create high-converting Amazon pages and Brand Store assets that turn visitors into loyal customers.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Amazon-Ads-1-768x768.jpg",
        imageAlt: "Product Page & Storefront Creative",
        bgColor: "bg-secondary" as const
    },
    {
        id: "seo-algorithm",
        title: "SEO - Tuned to the Amazon Algorithm",
        description: "Optimize listings to maximize search visibility, discoverability, and sales performance on Amazon.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Conversion-Rates-768x768.jpg",
        imageAlt: "SEO - Tuned to the Amazon Algorithm",
        bgColor: "bg-primary" as const
    },
    {
        id: "ppc-advertising",
        title: "Amazon PPC Search Advertising",
        description: "Drive targeted traffic and increase conversions with intelligent search ad campaigns tailored for your goals.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Optimization-Opportunities-768x768.jpg",
        imageAlt: "Amazon PPC Search Advertising",
        bgColor: "bg-white" as const
    },
    {
        id: "dsp-advertising",
        title: "Amazon DSP Advertising",
        description: "Reach high-intent audiences across the web using Amazon’s first-party data for continuous revenue growth.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Executive-Strategy-768x768.jpg",
        imageAlt: "Amazon DSP Advertising",
        bgColor: "bg-secondary" as const
    },
    {
        id: "omnichannel-strategies",
        title: "Cutting-Edge Omnichannel Strategies",
        description: "Implement cohesive cross-channel campaigns that enhance customer journeys and drive Amazon sales alongside other channels.",
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
        description: "Use data-driven insights from Amazon Marketing Cloud and analytics to measure, optimize, and scale your strategies.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_0-1-768x768.jpg",
        imageAlt: "Advanced Measurement Solutions",
        bgColor: "bg-white" as const
    }
];

const WhySectionData = {
    badge: "Why Power?",
    title: "Experts across all major ecommerce channels delivering customized, adaptive strategies to grow your brand.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    introText: "Partnering with us gives you:",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<b>Full-service management:</b> Amazon storefront, DSP, catalog consulting, troubleshooting, and more handled by our team.",
                "<b>A dedicated team of experts:</b> Specialists with deep experience in every facet of online retail marketing.",
                "<b>Adaptive Amazon marketplace strategies:</b> Continuous monitoring, measuring, and adjusting to ensure optimal performance."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Everything you need to know about Amazon marketing.",
    description: "Answers, insights, and strategies to optimize your Amazon presence and drive growth.",
    faqs: [
        {
            question: "Why use a single agency for both DTC and Amazon marketing?",
            answer: [
                "A single agency ensures cohesive strategies, consistent brand messaging, budget flexibility, and a streamlined point of contact, especially during peak periods."
            ]
        },
        {
            question: "Will Amazon sales hurt my website revenue?",
            answer: [
                "Amazon sales complement your other channels. Properly coordinated strategies prevent cannibalization and drive overall brand growth."
            ]
        },
        {
            question: "If Amazon sales are less profitable, why invest?",
            answer: [
                "Amazon provides high-intent customers and significant volume. Profitability is carefully balanced through strategic planning to maximize overall ROI."
            ]
        },
        {
            question: "Is paid advertising on Amazon necessary?",
            answer: [
                "Yes. Paid ads ensure visibility in a highly competitive marketplace, driving traffic and conversions that organic listings alone can’t achieve."
            ]
        },
        {
            question: "What drives organic ranking on Amazon?",
            answer: [
                "Ranking depends on keyword relevance, sales velocity, fulfillment, reviews, and external traffic. Holistic strategies ensure strong organic performance."
            ]
        },
        {
            question: "What is Amazon DSP?",
            answer: [
                "Amazon DSP uses first-party data to reach high-intent audiences programmatically, offering exclusive inventory, closed-loop attribution, and advanced targeting."
            ]
        },
        {
            question: "What is Amazon Marketing Cloud (AMC)?",
            answer: [
                "AMC is a privacy-safe data clean room that allows cross-channel analytics and custom insights to improve decision-making and marketing performance."
            ]
        },
        {
            question: "How can customer reviews improve my strategy?",
            answer: [
                "Reviews influence credibility and organic ranking. Use them to refine listings, enhance messaging, and improve product development."
            ]
        },
        {
            question: "How do I improve visibility on Amazon?",
            answer: [
                "Optimize listings, leverage ads, and use SEO best practices to ensure your products reach the right audience effectively."
            ]
        },
        {
            question: "How can I track my Amazon marketing performance?",
            answer: [
                "Monitor sales data, conversion rates, and ad performance. Analyze insights continuously to optimize your strategy."
            ]
        }
    ]
};


const OrganicSocialMediaPage = () => {
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

export default OrganicSocialMediaPage ;
