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
    title: "Content marketing services that grow your brand awareness (and bottom line).",
    description: "Attract and inspire your audience with tailored, high-impact content. When the value is clear, choosing your brand just makes sense.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Content_Marketing.png",
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
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
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
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
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
        id: "catalog-management",
        title: "Catalog Management & Organic Strategy",
        description: "Experts on your side to keep your account healthy, products live, and pull all organic visibility levers available to build & maintain a strong foundation for sustained growth.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Strategic-Roadmap-768x768.jpg",
        imageAlt: "Catalog Management & Organic Strategy",
        bgColor: "bg-white" as const
    },
    {
        id: "product-page-creative",
        title: "Product Page & Storefront Creative",
        description: "Conversion-driving, Amazon-optimized assets from the product image carousel to the Amazon Brand Store that turn browsers into buyers.",
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
        description: "Fuel the funnel for continuous growth with Amazon's powerful first-party customer data in the hands of seasoned Amazon programmatic display experts.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Executive-Strategy-768x768.jpg",
        imageAlt: "Amazon DSP Advertising",
        bgColor: "bg-secondary" as const
    },
    {
        id: "omnichannel-strategies",
        title: "Cutting-Edge Omnichannel Strategies",
        description: "Customized cross-channel advertising that aligns your digital strategy with your customer's unique journey and leverages the strengths of non-Amazon channels, like our paid media marketing services, to grow Amazon revenue.",
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
        description: "Amazon Marketing Cloud analytics and data science-backed incrementality testing to assess the true impact of Amazon marketing strategy and continuously iterate.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_0-1-768x768.jpg",
        imageAlt: "Advanced Measurement Solutions",
        bgColor: "bg-white" as const
    }
];

const LearnMoreData = {
    badge: "Learn more",
    title: "Learn more about Content Marketing & Ecommerce.",
    description: "Your Questions Answered: Optimize, Strategize, and Grow Your Brand",
    faqs: [
        {
            question: "What are the advantages of having 1 agency manage my DTC and content marketing (vs. specialized shops)?",
            answer: [
                "Cohesive & complementary strategies (1 agency focused on overall brand success vs. channel success), brand image & messaging consistency, budget fluidity, nimbleness / agility – especially during critical periods, and efficiency / ease of having a single point of contact with a team behind them."
            ]
        },
        {
            question: "Will focusing on content marketing cannibalize sales from my existing channels?",
            answer: [
                "Content marketing complements rather than cannibalizes existing sales channels. By creating targeted, high-value content, you can drive more traffic to your website, Amazon, or retail channels, and increase overall brand growth.",
                "With the right coordinated strategies in place, Burac AI ensures that content supports all sales channels, amplifying reach, conversions, and customer engagement."
            ]
        },
        {
            question: "If some channels are less profitable, why should I invest in content marketing?",
            answer: [
                "Content marketing builds long-term brand equity and drives high-intent customers, which can improve profitability over time. Strategic content investments balance traffic, engagement, and conversions with ROI, often measured at the campaign or product level."
            ]
        },
        {
            question: "Is paid promotion necessary for content marketing? Can't I just post content organically?",
            answer: [
                "Organic content alone often lacks reach due to competition and algorithmic limitations. Paid promotion amplifies visibility, ensuring your content reaches the right audience at the right time.",
                "Burac AI combines organic content strategy with targeted paid campaigns to maximize reach, engagement, and conversions, creating a holistic growth approach."
            ]
        },
        {
            question: "What drives content performance and engagement?",
            answer: [
                "Content performance is driven by relevance, value, timing, and distribution strategy. Optimized visuals, compelling messaging, proper SEO, and cross-channel amplification all contribute to engagement.",
                "Burac AI continuously analyzes performance metrics to refine content, ensuring it resonates with your audience and drives measurable results."
            ]
        },
        {
            question: "Can I leverage customer feedback and reviews for content strategy?",
            answer: [
                "Absolutely. Customer feedback provides valuable insights into preferences, pain points, and brand perception. Using these insights, you can create targeted content that builds trust, enhances credibility, and strengthens brand loyalty."
            ]
        },
        {
            question: "How can I track the effectiveness of content marketing?",
            answer: [
                "Content marketing performance can be tracked through metrics such as website traffic, lead generation, social engagement, conversions, and ROI.",
                "Burac AI uses advanced analytics and reporting to measure content performance, optimize campaigns in real-time, and ensure consistent growth across channels."
            ]
        }
    ]
};


const WhySectionData = {
    badge: "Why Burac AI?",
    title: "Our team of experts across all major ecommerce channels take a customized, iterative and adaptive approach to your success on Amazon and overall growth as a brand.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
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
