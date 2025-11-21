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

import image1 from './images/GROWTH-MARKETING-_-Right.webp'

const HeroSectionData = {
    badge: "GROWTH MARKETING",
    title: "Award-Winning SEO Marketing Agency",
    description: "We’ve helped top and developing brands scale their traffic and revenue organically for over a decade with our knowledge in seo consultancy.",
    buttonText: "Talk to an SEO Expert",
    buttonUrl: "/workwithus/",
    image: image1.src,
    imageAlt: "SEO Marketing Services"
};

const WorkWithData = {
    badge: "Work with Burac AI",
    title: "Strategic PPC & SEO Management Services",
    paragraphs: [
        "Today's customer doesn't distinguish between shopping online, on Amazon, or at a real store.  What matters is a frictionless, convenient and accessible buying experience, regardless of time and place.",
        "For many organizations, creating a real customer-centric experience from digital awareness to conversion is challenging.  DTC and retail divisions generally work in silos, and most retail marketing partners only cover a portion of the trip. ",
        "<b>Burac AI unites retail, DTC, and Amazon digital marketing under one roof, boosting brand awareness and lucrative sales growth across channels and methods. </b>"
    ],
    buttonText: "Get in touch",
    buttonUrl: "/workwithus/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Authentic Brand Experience Across Touchpoints",
            description: "Product mix consultancy, product page optimization & Amazon SEO, Brand Store optimization & more - we ensure your Amazon presence is true to your brand and converts in a congested marketplace. ",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Service Icon 1"
        },
        {
            icon: Layer11.src,
            title: "Full-Funnel Media Strategy",
            description: "We leverage Amazon's full advertising arsenal across search, DSP and Amazon Marketing Cloud to accelerate growth.  From media planning & ongoing optimization to advanced measurement capabilities that continuously calibrate. ",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Layer 1-1"
        },
        {
            icon: Layer1.src,
            title: "Strategic DTC and Amazon Alignment",
            description: "Holistic tactics that connect the dots between channels and identify the full impact of your marketing across DTC, Amazon, and retail revenue streams.",
            bgColor: "bg-dark" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Layer 1"
        }
    ]
};

const ServicesData = {
    badge: "Our Amazon Services",
    title: "Customized growth plans for every storefront.",
    description: "Our strategies ensure your firm is attracting new consumers, capturing market share, and positioned properly for long-term success. ",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Prioritize & Plan",
            description: "Identify the most impact Amazon and retail marketing strategies to adopt based on audit results & brand goals.  Once we've determined your final location, we calculate turn-by-turn directions.  Using your KPIs, timetable, and market trends, we'll create the most efficient approach and navigate the competitive landscape. "
        },
        {
            title: "02 Align & Grow",
            description: "Synchronize your Amazon marketing approach with your brand's holistic ecommerce and/or B&M strategy, from product mix to media activation.  Implement synergistic cross-channel strategy & omnichannel measuring tools to drive overall brand growth. "
        },
        {
            title: "03 Measure, Iterate, Repeat",
            description: "With advanced measurement and in-depth analytics, we consider the true impact of each strategy, pivoting with marketplace & competitive landscape changes, and capitalizing on new opportunities."
        }
    ]
};

const CardSliderData = [
    {
        id: "catalog-management",
        title: "Catalog Management & Organic Strategy",
        description: "Experts on your side to keep your account healthy, products live, and pull all organic visibility levers available to build & maintain a strong foundation for sustained growth.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Strategic-Roadmap-768x768.jpg",
        imageAlt: "Catalog Management & Organic Strategy",
        bgColor: "bg-white" as const,
        actionUrl: "#"
    },
    {
        id: "product-page-creative",
        title: "Product Page & Storefront Creative",
        description: "Conversion-driving, Amazon-optimized assets from the product image carousel to the Amazon Brand Store that turn browsers into buyers.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Amazon-Ads-1-768x768.jpg",
        imageAlt: "Product Page & Storefront Creative",
        bgColor: "bg-secondary" as const,
        actionUrl: "#"
    },
    {
        id: "seo-algorithm",
        title: "SEO - Tuned to the Amazon Algorithm",
        description: "Written content on the frontend and backend of your listings that maximizes product discoverability on the marketplace.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Conversion-Rates-768x768.jpg",
        imageAlt: "SEO - Tuned to the Amazon Algorithm",
        bgColor: "bg-primary" as const,
        actionUrl: "#"
    },
    {
        id: "ppc-advertising",
        title: "Amazon PPC Search Advertising",
        description: "Acquire & retain Amazon customers with adaptive search advertising strategy that puts business & bottom line impact first.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Optimization-Opportunities-768x768.jpg",
        imageAlt: "Amazon PPC Search Advertising",
        bgColor: "bg-white" as const,
        actionUrl: "#"
    },
    {
        id: "dsp-advertising",
        title: "Amazon DSP Advertising",
        description: "Fuel the funnel for continuous growth with Amazon's powerful first-party customer data in the hands of seasoned programmatic display experts.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Executive-Strategy-768x768.jpg",
        imageAlt: "Amazon DSP Advertising",
        bgColor: "bg-secondary" as const,
        actionUrl: "#"
    },
    {
        id: "omnichannel-strategies",
        title: "Cutting-Edge Omnichannel Strategies",
        description: "Customized cross-channel advertising that aligns your digital strategy with your customer's unique journey and leverages non-Amazon channels to grow revenue.",
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
        ],
        actionUrl: "#"
    },
    {
        id: "measurement-solutions",
        title: "Advanced Measurement Solutions",
        description: "Amazon Marketing Cloud analytics and data science-backed incrementality testing to assess the true impact of Amazon marketing strategy and continuously iterate.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_0-1-768x768.jpg",
        imageAlt: "Advanced Measurement Solutions",
        bgColor: "bg-white" as const,
        actionUrl: "#"
    }
];

const WhySectionData = {
    badge: "Why Burac AI?",
    title: "Our team of professionals across all key ecommerce channels take a tailored, iterative and adaptive approach to your success on Amazon and overall growth as a business. ",
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    introText: "By collaborating with us, you get:",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<b>Full-service management:</b> Amazon storefront, Amazon DSP, & product mix consultancy, catalog management, troubleshooting, and more taken off your hands.",
                "<b>A committed team of experts:</b> Hyper-focused SMEs with profound knowledge and robust experience in their unique online retail discipline.",
                "<b>Adaptive Amazon marketplace strategies:</b> Continuous monitoring, measuring, and adjusting to changes in your specific Amazon landscape."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Deep dive into SEO.",
    description: "SEO isn't magic; it's engineering. Let's break down how Burac.ai helps you own your search real estate and stop renting audience attention.",
    faqs: [
        {
            question: "What is an SEO audit?",
            answer: [
                "Think of an SEO audit as a full-body X-ray for your website. At Burac.ai, we don't guess; we look under the hood. We analyze your technical setup, content, metadata, and backlink profile to see exactly what is holding you back from the top spot, then we build a roadmap to fix it."
            ]
        },
        {
            question: "How long does SEO take?",
            answer: [
                "SEO is a marathon, not a sprint. Unlike paid ads where you turn a tap on and off, SEO typically takes 3 to 6 months to gain serious momentum. But once that flywheel starts spinning, the results are cumulative, compounding, and long-lasting."
            ]
        },
        {
            question: "What are SEO keywords?",
            answer: [
                "Keywords are the bridge between what people are asking and what you are offering. It's not just about stuffing words onto a page; it's about understanding user intent. We help you speak the specific language your customers are typing into Google so you show up as the answer to their problems."
            ]
        },
        {
            question: "What are SEO backlinks?",
            answer: [
                "Think of a backlink as a vote of confidence from another website. If a reputable site links to you, it tells Google, 'Hey, these guys know their stuff.' The more high-quality 'votes' you get, the more authority you build, and the higher you rank."
            ]
        },
        {
            question: "What SEO tools do you use?",
            answer: [
                "We don't rely on intuition; we rely on data. We use a heavy-hitting tech stack including GA4, Semrush, Ahrefs, Moz, and Google Search Console. These tools give us the hard numbers on your competitors and your performance, allowing us to make surgical adjustments to your strategy."
            ]
        },
        {
            question: "How much does SEO cost?",
            answer: [
                "There's no sticker price because every website has different obstacles. A local business needs a different strategy than a global e-commerce brand. We audit your current standing first, then give you a transparent price based on exactly what you need to grow—no fluff, no hidden fees."
            ]
        },
        {
            question: "What is Local SEO?",
            answer: [
                "If you have a physical storefront, Local SEO is your lifeline. It’s the difference between showing up when someone searches 'near me' or being invisible. We optimize your listings and reputation to ensure you own your local neighborhood, digitally speaking."
            ]
        },
        {
            question: "Is SEO worth it?",
            answer: [
                "100%. Paid ads stop working the second you stop paying. SEO is an investment in digital real estate that you own. It builds long-term equity, driving organic traffic that doesn't cost you a cent per click, creating a sustainable foundation for your business."
            ]
        }
    ]
};


const SeoPage = () => {
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

export default SeoPage;
