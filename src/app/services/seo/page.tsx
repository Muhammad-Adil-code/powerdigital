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
    title: "Award-Winning SEO Marketing Agency",
    description: "We’ve helped leading and emerging brands scale their traffic and revenue organically for over a decade with our experience in SEO consulting.",
    buttonText: "Talk to an SEO Expert",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/10/GROWTH-MARKETING-_-Right.png",
    imageAlt: "SEO Marketing Services"
};

const WorkWithData = {
    badge: "Work with Burac AI",
    title: "Strategic PPC & SEO Management Services",
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
    badge: "Our Amazon Services",
    title: "Customized growth strategies for every storefront.",
    description: "Our strategies ensure your company is acquiring new customers, capturing market share, and positioned properly for long-term growth.",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Prioritize & Plan",
            description: "Identify the highest impact Amazon and retail marketing strategies to implement based on audit results & brand goals. Once we've identified your final destination, we calculate turn-by-turn directions. Using your KPIs, timeline, and industry trends, we'll outline the most efficient path and navigate the competitive landscape."
        },
        {
            title: "02 Align & Grow",
            description: "Synchronize your Amazon marketing strategy with your brand's holistic ecommerce and/or B&M strategy, from product mix to media activation. Implement synergistic cross-channel strategies & omnichannel measurement techniques to drive overall brand growth."
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
    title: "Our team of experts across all major ecommerce channels take a customized, iterative and adaptive approach to your success on Amazon and overall growth as a brand.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    introText: "By partnering with us, you get:",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<b>Full-service management:</b> Amazon storefront, Amazon DSP, & product mix consulting, catalog management, troubleshooting, and more taken off your hands.",
                "<b>A dedicated team of experts:</b> Hyper-focused SMEs with deep knowledge and robust experience in their specific online retail discipline.",
                "<b>Adaptive Amazon marketplace strategies:</b> Continuous monitoring, measuring, and adapting to changes in your unique Amazon landscape."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Learn more about Amazon.",
    description: "Your Amazon Questions Answered: Optimize, Strategize, and Grow",
    faqs: [
        {
            question: "What are the advantages of having 1 agency manage my DTC and Amazon marketing (vs. specialized shops)?",
            answer: [
                "Cohesive & complementary strategies (1 agency goaled on overall success vs. sales channel success), brand image & messaging consistency, budget fluidity, nimbleness / agility – especially during critical periods like Q4, efficiency / ease of 1 go-to POC with a team behind them."
            ]
        },
        {
            question: "Will focusing on Amazon growth cannibalize sales from my website?",
            answer: [
                "Amazon accounts for nearly half of all ecommerce transactions in the US. Customers will continue to buy on Amazon, whether they end up purchasing your product or a competitor's. If your products aren't available where your customers want to shop, you're missing out on revenue.",
                "With the right intentional, coordinated strategies in place, you can avoid cannibalization and drive overall brand growth. Burac AI specializes in growing Amazon sales & market share while deploying strategies that complement, instead of detract from, DTC efforts. Our team is goaled on overall brand success vs. retailer success."
            ]
        },
        {
            question: "If Amazon sales are less profitable than my DTC sales, why would I invest to grow Amazon?",
            answer: [
                "Amazon offers a sizable volume of high-intent customers to acquire – there's a high ceiling for revenue. That said, the fees charged for access to these customers often impacts profitability for brands.",
                "Profitability is a key consideration at Burac AI when tailoring Amazon strategy for brands. We first evaluate strategies to improve profitability, then take a next-best-dollar approach, balancing higher traffic and conversion on Amazon with margin, often at the product level."
            ]
        },
        {
            question: "Is paid Amazon advertising necessary? Can't I just list my products to capture that revenue?",
            answer: [
                "With 2,000+ new sellers joining Amazon every day, simply listing products isn't enough. Just like brick & mortar retail, nobody will buy your products if they can't find them on the shelves.",
                "Burac AI takes a holistic approach to advertising for growth of your Amazon store, with strategies like search advertising to get in front of & convert interested shoppers in the digital aisle, combined with a full suite of digital marketing services to build brand intent before shoppers arrive at the online store."
            ]
        }
        // Additional FAQs can be updated similarly
    ]
};


const SeoPage = () => {
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

export default SeoPage;
