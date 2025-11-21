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
import image1 from './images/Influencer-Management-768x768.jpg'
import image2 from './images/Full-Image-Rights-768x768.jpg'
import image3 from './images/Legalities-Covered-768x768.jpg'
import image4 from './images/0_3-5-768x768.jpg'
import image5 from './images/Influencer-1.webp'
import image6 from './images/Madison-1.png'

const HeroSectionData = {
    badge: "GROWTH MARKETING",
    title: "Influencer Marketing Agency: Marketing that builds trust and amplifies your brand.",
    description: "Influencer marketing puts your brand in front of a captive audience that already trusts and respects the messenger.",
    buttonText: "Get a Proposal",
    buttonUrl: "/workwithus/",
    image: image1.src,
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
    buttonUrl: "/workwithus/",
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
    buttonUrl: "/workwithus/",
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
        id: "influencer-management",
        title: "Influencer Management",
        description: "Let your dedicated Influencer marketing team sweat the small (and big) stuff for you. We’ll handle it all from start to finish.",
        image: image2.src,
        imageAlt: "Influencer Management",
        bgColor: "bg-white" as const
    },
    {
        id: "performance-influencer",
        title: "Performance Influencer",
        description: "Take your Influencer partnerships to the next level, with ad-optimized content designed to drive measurable results across performance marketing channels.",
        image: image3.src,
        imageAlt: "Performance Influencer",
        bgColor: "bg-secondary" as const
    },
    {
        id: "ambassador",
        title: "Ambassador",
        description: "Mesh your influencer and affiliate strategies, and incentivize your brand evangelists to promote your products, expand your reach, and drive engagement through trusted, real-world endorsements.",
        image: image4.src,
        imageAlt: "Ambassador",
        bgColor: "bg-primary" as const
    },
    {
        id: "influencer-seeding",
        title: "Influencer Seeding",
        description: "Strategically gift products to handpicked influencers, promoting organic sharing, user-generated content creation, and authentic product reviews.",
        image: image5.src,
        imageAlt: "Influencer Seeding",
        bgColor: "bg-white" as const
    },
    {
        id: "influencer-events",
        title: "Influencer Events",
        description: "Facilitate gatherings where brands, creators, and influencers come together to collaborate, showcase products, and engage with their audiences through content creation and social media promotion",
        image: image6.src,
        imageAlt: "Influencer Events",
        bgColor: "bg-secondary" as const
    },
];

const WhySectionData = {
    badge: "Why Burac AI?",
    title: "Our team of experts across all major ecommerce channels takes a customized, iterative, and adaptive approach to your success on Amazon, influencer campaigns, and overall brand growth.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
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
    title: "Deep dive into Affiliate Marketing.",
    description: "Affiliate marketing isn't just about handing out links; it's about building a network of partners who vouch for you. Let's look at how Burac.ai turns these partnerships into a measurable, scalable revenue stream.",
    faqs: [
        {
            question: "What is Affiliate Marketing, really?",
            answer: [
                "Think of it as a partnership where you only pay for results. You team up with external partners—like publishers or creators—and you pay them a commission only when they successfully drive a sale or a specific action. It's low-risk, high-reward."
            ]
        },
        {
            question: "How is Burac.ai's approach different?",
            answer: [
                "We don't just throw spaghetti at the wall. Burac.ai uses a full-funnel approach backed by deep industry data. We analyze trends across huge datasets to tell you exactly *who* to partner with and *how* to scale, ensuring we aren't just guessing, but making decisions based on revenue, ROAS, and real transaction history."
            ]
        },
        {
            question: "How are Affiliate and PR connected?",
            answer: [
                "They're best friends. PR gets your name out there, but Affiliate incentivizes publishers to actually write about you. By combining them, we get your brand featured in top-tier reviews and 'best of' lists because those publishers know they'll earn from the traffic they send your way."
            ]
        },
        {
            question: "How do you measure success?",
            answer: [
                "We look at the numbers that actually pay the bills. While we track clicks and traffic, we obsess over Return on Ad Spend (ROAS), Average Order Value (AOV), and—most importantly—how much net revenue these partners are actually bringing in."
            ]
        },
        {
            question: "What types of partners are involved?",
            answer: [
                "It's a diverse ecosystem. We work with everyone from major media publications and trusted bloggers to content creators and cashback sites. Different partners hit different parts of the funnel, from introducing your brand to closing the final sale."
            ]
        },
        {
            question: "How long does it take to see results?",
            answer: [
                "Real relationships take a little time. While some wins happen quickly, a robust program usually needs a few months to hit its full stride. That time is spent negotiating the best rates, onboarding the right partners, and getting the tracking perfectly dialed in."
            ]
        },
        {
            question: "Can I track the ROI effectively?",
            answer: [
                "100%. That's the beauty of affiliate—it's arguably the most trackable channel. We show you exactly what every dollar spent brought back in revenue, so you never have to wonder if the program is profitable."
            ]
        },
        {
            question: "How do you ensure partners align with my brand?",
            answer: [
                "We are extremely picky. We vet every potential partner to make sure they vibe with your brand's mission and aesthetic. You shouldn't have to sacrifice your brand reputation for a few extra sales, and with us, you won't."
            ]
        },
        {
            question: "What happens if partners aren't performing?",
            answer: [
                "We don't set it and forget it. If a partner isn't pulling their weight, we dig into the data to find out why. We'll either help them optimize their content to convert better or, if necessary, swap them out for partners who will deliver results."
            ]
        },
        {
            question: "Do I have control over who promotes my brand?",
            answer: [
                "Absolutely. It’s your brand. While we do the heavy lifting of finding and managing the network, you always have the final 'yes' or 'no' on who gets to represent you."
            ]
        },
        {
            question: "How do commission structures work?",
            answer: [
                "We customize it to fit your margins. Whether it’s a flat fee or a percentage of the sale, we build a structure that motivates partners to push your product while keeping your profitability healthy."
            ]
        }
    ]
};


const InfluencerMarketingPage = () => {
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

export default InfluencerMarketingPage;
