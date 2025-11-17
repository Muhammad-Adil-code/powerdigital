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
    title: "Conversion Rate Optimization to turn visitors into loyal customers.",
    description: "Maximize your website's potential with our data-driven CRO strategies. We test, optimize, and refine every element of the user journey to increase engagement, improve UX, and drive higher conversions—turning casual visitors into repeat buyers.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/CRO.png",
    imageAlt: "Amazon Marketing Services"
};

const WorkWithData = {
    badge: "Work with Power",
    title: "Strategic PPC & CRO Services",
    paragraphs: [
        "Customers expect seamless experiences across every channel—online, on Amazon, or in-store. Frictionless journeys drive engagement and conversion.",
        "Many brands struggle to connect the full customer journey from awareness to purchase. Siloed teams and fragmented partners often miss opportunities to optimize.",
        "<b>We unify DTC and retail marketing under one roof, creating consistent, conversion-driven experiences that boost awareness and grow revenue.</b>"
    ],
    buttonText: "Get in touch",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Seamless Brand Experiences",
            description: "From product mix consulting to Amazon SEO and Brand Store optimization, we ensure your online presence is consistent, compelling, and built to convert.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Service Icon 1"
        },
        {
            icon: Layer11.src,
            title: "Full-Funnel Media Optimization",
            description: "We leverage Amazon’s full advertising ecosystem—including search, DSP, and Marketing Cloud—while continuously measuring and optimizing performance for maximum ROI.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Layer 1-1"
        },
        {
            icon: Layer1.src,
            title: "Aligned DTC & Amazon Strategies",
            description: "Our holistic approach connects marketing efforts across channels, ensuring campaigns are cohesive, measurable, and impactful on both DTC and Amazon sales.",
            bgColor: "bg-dark" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Layer 1"
        }
    ]
};

const ServicesData = {
    badge: "Our Amazon Services",
    title: "Tailored Growth Strategies for Every Storefront",
    description: "We focus on acquiring new customers, capturing market share, and positioning your brand for sustainable growth using CRO, PPC, and advanced analytics.",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Prioritize & Plan",
            description: "We identify high-impact CRO and Amazon strategies based on audit results and brand goals, creating a roadmap that aligns with KPIs, timelines, and market trends."
        },
        {
            title: "02 Align & Grow",
            description: "Our team synchronizes Amazon strategies with your overall ecommerce plan, implementing cross-channel campaigns and omnichannel measurement to accelerate growth."
        },
        {
            title: "03 Measure, Iterate, Repeat",
            description: "We continuously test, analyze, and optimize, adapting strategies to market changes and uncovering new opportunities to maximize conversions and ROI."
        }
    ]
};

const CardSliderData = [
    {
        id: "catalog-management",
        title: "Catalog Management & Organic Strategy",
        description: "We keep your catalog healthy, products live, and optimize organic visibility to maintain a strong foundation for long-term growth.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Strategic-Roadmap-768x768.jpg",
        imageAlt: "Catalog Management & Organic Strategy",
        bgColor: "bg-white" as const
    },
    {
        id: "product-page-creative",
        title: "Product Page & Storefront Creative",
        description: "High-converting, Amazon-optimized creative—from product images to Brand Store layouts—that turn visitors into buyers.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Amazon-Ads-1-768x768.jpg",
        imageAlt: "Product Page & Storefront Creative",
        bgColor: "bg-secondary" as const
    },
    {
        id: "seo-algorithm",
        title: "SEO Optimized for Amazon",
        description: "Content structured for search visibility and discoverability, maximizing organic reach across the marketplace.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Conversion-Rates-768x768.jpg",
        imageAlt: "SEO - Tuned to the Amazon Algorithm",
        bgColor: "bg-primary" as const
    },
    {
        id: "ppc-advertising",
        title: "Amazon PPC Search Advertising",
        description: "Targeted campaigns designed to acquire and retain customers while maximizing ROI and sales impact.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Optimization-Opportunities-768x768.jpg",
        imageAlt: "Amazon PPC Search Advertising",
        bgColor: "bg-white" as const
    },
    {
        id: "dsp-advertising",
        title: "Amazon DSP Advertising",
        description: "Programmatic display campaigns using first-party Amazon data to reach high-intent audiences and fuel continuous growth.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Executive-Strategy-768x768.jpg",
        imageAlt: "Amazon DSP Advertising",
        bgColor: "bg-secondary" as const
    },
    {
        id: "omnichannel-strategies",
        title: "Omnichannel Advertising",
        description: "Cross-channel campaigns that integrate Amazon and non-Amazon channels to grow revenue and improve customer journey continuity.",
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
        title: "Advanced Measurement & Analytics",
        description: "Data-driven insights and incrementality testing to measure the true impact of campaigns and continuously optimize performance.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_0-1-768x768.jpg",
        imageAlt: "Advanced Measurement Solutions",
        bgColor: "bg-white" as const
    }
];

const WhySectionData = {
    badge: "Why Power?",
    title: "Experts Across Ecommerce Channels Driving Growth",
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    introText: "By partnering with us, you get:",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<b>Full-service management:</b> From Amazon storefronts to DSP campaigns, catalog management, and troubleshooting—handled end-to-end.",
                "<b>Dedicated team of experts:</b> Specialists with deep knowledge in online retail, paid media, and CRO to maximize your performance.",
                "<b>Adaptive strategies:</b> Continuous monitoring, testing, and optimization to align with changing marketplace trends and customer behavior."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Learn more about Amazon marketing.",
    description: "Answers to your key questions about optimizing Amazon presence, driving conversions, and growing revenue through data-driven strategies.",
    faqs: [
        {
            question: "What are the advantages of having 1 agency manage my DTC and Amazon marketing (vs. specialized shops)?",
            answer: [
                "A single agency ensures cohesive strategies across channels, consistent branding, and efficient budget allocation. One point of contact streamlines execution and reporting, especially during critical periods like Q4."
            ]
        },
        {
            question: "Will focusing on Amazon growth cannibalize sales from my website?",
            answer: [
                "Amazon accounts for nearly half of US ecommerce. Properly coordinated strategies can grow Amazon sales without hurting DTC, driving overall brand growth instead of splitting revenue."
            ]
        },
        {
            question: "If Amazon sales are less profitable than my DTC sales, why invest to grow Amazon?",
            answer: [
                "Amazon offers high-intent audiences and scale. We optimize strategies to balance volume, conversion, and margin—maximizing revenue while preserving profitability."
            ]
        },
        {
            question: "Is paid Amazon advertising necessary?",
            answer: [
                "Yes. Organic visibility alone is insufficient in a competitive marketplace. Paid campaigns ensure your products are seen and purchased by the right customers."
            ]
        },
        {
            question: "What drives organic ranking on Amazon?",
            answer: [
                "Organic ranking depends on keyword relevance, sales velocity, availability, reviews, and increasingly, external traffic. Optimizing all these factors improves discoverability."
            ]
        },
        {
            question: "How do I measure Amazon marketing performance?",
            answer: [
                "Metrics like sales, conversion rates, and ad performance provide insights. Continuous analysis and testing allow for optimization and stronger results."
            ]
        }
    ]
};



const CROConversionRateOptimizationPage = () => {
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

export default CROConversionRateOptimizationPage ;
