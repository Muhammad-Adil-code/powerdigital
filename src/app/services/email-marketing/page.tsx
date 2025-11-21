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

import Email1 from "./images/Email-1.webp"
import Email2 from "./images/Fully-Stacked-Email-Campaigns-768x768.jpg"
import Email3 from "./images/Strategic-Campaign-Development-768x768.jpg"
import Email4 from "./images/Turnkey-Marketing-Automation-768x768.jpg"

const HeroSectionData = {
    badge: "GROWTH MARKETING",
    title: "Email marketing services to increase sales from your list.",
    description: "Get full-service email marketing strategy and implementation that regularly and reliably churns out ROI.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: Email1.src,
    imageAlt: "Email Marketing Services"
};

const WorkWithData = {
    badge: "Work with Burac AI",
    title: "Strategic PPC & Email Marketing Services",
    paragraphs: [
        "Today's client doesn't distinguish between shopping online, on Amazon, or at a physical store.   What counts is a frictionless, convenient and accessible shopping experience, regardless of time and place.",
        "For many organizations, coordinating a real customer-centric experience from digital awareness through conversion is challenging.   DTC and retail divisions generally work in silos, and most retail marketing partners only cover a piece of the journey.",
        "<b>Burac AI combines retail, DTC, and Amazon digital marketing under one roof, boosting brand awareness and profitable sales growth across channels and approaches. </b>"
    ],

    buttonText: "Get in touch",
    buttonUrl: "/workwithus/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Authentic Brand Experience Across Touchpoints",
            description: "Product mix consultancy, product page optimization & Amazon SEO, Brand Store optimization & more – we ensure your Amazon presence is true to your brand and converts in a congested marketplace.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Service Icon 1"
        },
        {
            icon: Layer11.src,
            title: "Full-Funnel Media Strategy",
            description: "We leverage Amazon's full advertising arsenal across search, DSP and Amazon Marketing Cloud to accelerate growth.  From media planning & ongoing optimization to advanced measurement capabilities that continuously calibrate.",
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
    badge: "Our Email & Amazon Services",
    title: "Customized growth plans for every storefront.",
    description: "Our strategies ensure your firm is attracting new consumers, capturing market share, and positioned properly for long-term success.",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Prioritize & Plan",
            description: "Identify the greatest impact email, Amazon, and retail marketing techniques to adopt based on audit results & brand goals.  Once we've determined your final location, we calculate turn-by-turn directions.  Using your KPIs, timetable, and market trends, we'll create the most efficient approach and navigate the competitive landscape."
        },
        {
            title: "02 Align & Grow",
            description: "Synchronize your Amazon and email marketing approach with your brand's holistic ecommerce and/or B&M strategy, from product mix to media activation.  Implement synergistic cross-channel strategy & omnichannel measuring tools to drive overall brand growth."
        },
        {
            title: "03 Measure, Iterate, Repeat",
            description: "With comprehensive measurement and in-depth analytics, we consider the genuine impact of each plan, pivoting with marketplace & competitive landscape changes, and capitalizing on new opportunities."
        }
    ]
};

const CardSliderData = [
    {
        id: "email-campaign-creation",
        title: "Fully Stacked Email Campaign Creation",
        description: "Targeted copy, polished design, and seamless coding.",
        image: Email2.src,
        imageAlt: "Fully Stacked Email Campaign Creation",
        bgColor: "bg-white" as const
    },
    {
        id: "strategic-campaign-development",
        title: "Strategic Campaign Development",
        description: "Carefully crafted strategic roadmaps that get results.",
        image: Email3.src,
        imageAlt: "Strategic Campaign Development",
        bgColor: "bg-secondary" as const
    },
    {
        id: "turnkey-marketing-automation",
        title: "Turnkey Marketing Automation",
        description: "Campaigns that nurture and segment your list on autopilot.",
        image: Email4.src,
        imageAlt: "Turnkey Marketing Automation",
        bgColor: "bg-primary" as const
    }
];

const WhySectionData = {
    badge: "Why Burac AI?",
    title: "Our team of professionals across all key ecommerce channels take a tailored, iterative and adaptive approach to your success on Amazon and overall growth as a business.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    introText: "By collaborating with us, you get:",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<b>Full-service management:</b> Amazon shop, Amazon DSP, email strategy, product mix consulting, catalog management, troubleshooting, and more taken off your hands.",
                "<b>A committed team of experts:</b> Hyper-focused SMEs with profound knowledge and robust experience in their unique online retail discipline.",
                "<b>Adaptive Amazon marketplace strategies:</b> Continuous monitoring, measuring, and adjusting to changes in your specific Amazon landscape."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Deep dive into Email Marketing.",
    description: "Email isn't just about hitting 'send'; it's about sending the *right* message at the *perfect* moment. Let's explore how Burac.ai turns your subscriber list into your most profitable revenue channel through smart automation and strategy.",
    faqs: [
        {
            question: "What is an email audit?",
            answer: [
                "Think of it as a full diagnostic check under the hood. Burac.ai analyzes your past campaigns, design, copy, and automation triggers to see what's working and what's wasting money. We identify gaps in your strategy and find immediate opportunities to squeeze more revenue out of every subscriber."
            ]
        },
        {
            question: "What is an ESP (Email Service Provider)?",
            answer: [
                "An ESP is the engine behind your campaigns—tools like Klaviyo or HubSpot. It handles the sending, tracking, and management of your lists. Choosing the wrong one can limit your growth, so we help you select the platform that actually fits your specific business scale and goals."
            ]
        },
        {
            question: "Which platforms do you work with?",
            answer: [
                "We are platform-agnostic but have our favorites for a reason. We frequently work with Klaviyo, Attentive, HubSpot, and Braze because they offer superior automation features. Whether you're a scrappy startup or a global enterprise, we integrate seamlessly with your tech stack."
            ]
        },
        {
            question: "What is automated email?",
            answer: [
                "This is how you make money while you sleep. Instead of manually sending every email, we set up triggers based on user behavior—like a 'hey, you forgot this' email when someone abandons a cart, or a welcome series for new signups. It’s personalized, timely, and highly effective."
            ]
        },
        {
            question: "What is a broadcast email?",
            answer: [
                "These are your 'megaphones'—one-off announcements sent to your whole list (or a segment) for things like Black Friday sales or product drops. While many brands treat these as spam, we craft ours with high-value content and design so your customers actually look forward to opening them."
            ]
        },
        {
            question: "What does 'list hygiene' mean?",
            answer: [
                "Quality over quantity. List hygiene means regularly scrubbing your list of invalid emails or users who never open your messages. It sounds counterintuitive to delete contacts, but it actually protects your sender reputation and ensures your emails land in the Primary inbox, not the Spam folder."
            ]
        },
        {
            question: "Do you buy email lists?",
            answer: [
                "Absolutely not. Buying lists is the fastest way to destroy your brand's reputation and get your domain blacklisted. We focus strictly on organic, consent-based growth strategies. We want to build you an audience of people who *actually* want to buy from you."
            ]
        },
        {
            question: "What metrics do you track?",
            answer: [
                "We track the numbers that impact your bank account. While we monitor vanity metrics like Open Rates and Click Rates, our obsession is on Revenue Generated, Average Order Value (AOV), and Deliverability. We use this hard data to constantly refine your strategy."
            ]
        }
    ]
};


const EmailMarketingPage = () => {
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

export default EmailMarketingPage;
