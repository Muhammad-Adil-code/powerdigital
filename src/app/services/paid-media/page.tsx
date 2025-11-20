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
import image1 from "./images/Paid-Search.webp"
import image2 from "./images/Bing-Ads-768x768.jpg"
import image3 from "./images/Local-Services-768x768.jpg"
import image4 from "./images/Local-Services-768x768.jpg"
import image5 from './images/Amazon-Ads-768x430.jpg'
import image6 from './images/Performance-Max-768x768.jpg'
import image7 from './images/Standard-Shopping-768x768.jpg'
import image8 from './images/Programmatic-Advertising-768x768.jpg'
import image9 from './images/Remarketing-Strategy-768x768 (1).jpg'
import image10 from './images/Remarketing-Strategy-768x768.jpg'

const HeroSectionData = {
    badge: "GROWTH MARKETING",
    title: "Paid Media Agency That Eliminates Wasted Spend and Maximizes ROI",
    description: "We design and manage PPC campaigns engineered for measurable, sustainable growth.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: image1.src,
    imageAlt: "Amazon Marketing Services"
};

const WorkWithData = {
    badge: "Work with Power",
    title: "Strategic PPC Management Services",
    paragraphs: [
        "With over a decade of PPC experience serving 300+ clients across diverse industries, our data-driven strategies deliver results at every stage of the customer journey, from awareness to conversion."
    ],
    buttonText: "Get in touch",
    buttonUrl: " /workwithus/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Attract High-Intent Customers",
            description: "Using precise targeting and high-quality creatives, we drive qualified traffic to your site, improving conversion rates and ensuring every marketing dollar works harder for you.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Service Icon 1"
        },
        {
            icon: Layer11.src,
            title: "Optimize Costs & Maximize ROI",
            description: "We reduce inefficiencies and focus your budget on campaigns and channels that consistently deliver results, improving overall ROI while minimizing wasted spend.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Layer 1-1"
        },
        {
            icon: Layer1.src,
            title: "Grow Revenue While Lowering Acquisition Costs",
            description: "By combining analytics-driven insights with tactical campaign management, we attract new customers while optimizing retention, driving long-term business growth.",
            bgColor: "bg-white" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Layer 1"
        }
    ]
};

const ServicesData = {
    badge: "Our Approach",
    title: "Messaging that resonates with every audience at every stage of the journey",
    description: "Comprehensive PPC strategies under one roof, from planning to performance optimization.",
    showButton: false,
    buttonText: "Get a free marketing audit",
    buttonUrl: " /workwithus/",
    layout: "2-per-row" as const,
    items: [
        {
            title: "Analysis",
            description: "We start by auditing your business and campaigns. You receive a thorough report highlighting strengths, weaknesses, and opportunities for profitable growth."
        },
        {
            title: "Strategy",
            description: "Based on the audit, we develop a comprehensive PPC strategy tailored to your business goals, mapping campaigns across channels to maximize impact and ROI."
        },
        {
            title: "Implementation",
            description: "We launch campaigns and continuously optimize them through iterative testing, ensuring each adjustment drives measurable improvements."
        },
        {
            title: "Results, Rinse, Repeat",
            description: "As data informs adjustments to targeting, ad copy, and placements, we continually refine your campaigns to deliver higher performance and sustainable revenue growth."
        }
    ]
};

const CardSliderData = [
    {
        id: "paid-search",
        title: "Paid Search (Google Ads)",
        description: "Capture high-intent search traffic, maximize visibility for top keywords, and drive visitors to your most important pages.",
        image: image10.src,
        imageAlt: "Paid Search (Google Ads)",
        bgColor: "bg-white" as const
    },
    {
        id: "google-shopping",
        title: "Google Shopping",
        description: "Showcase the right products to the right customers, boosting visibility and purchase intent through targeted ad placements.",
        image: image7.src,
        imageAlt: "Standard shopping (Google Shopping)",
        bgColor: "bg-secondary" as const
    },
    {
        id: "performance-max",
        title: "Performance Max Ads",
        description: "Guide users across the full journey, reaching them across multiple Google networks to increase conversions and revenue.",
        image: image6.src,
        imageAlt: "Performance Max Ads",
        bgColor: "bg-primary" as const
    },
    {
        id: "local-service-ads",
        title: "Local Service Ads",
        description: "Get in front of local customers searching for your services, build trust through verified reviews, and drive instant bookings.",
        image: image4.src,
        imageAlt: "Local Service Ads",
        bgColor: "bg-white" as const
    },
    {
        id: "bing-ads",
        title: "Bing Ads",
        description: "Reach additional audiences with less competition and lower CPC, diversifying your paid media strategy for incremental results.",
        image: image2.src,
        imageAlt: "Bing Ads",
        bgColor: "bg-secondary" as const
    },
    {
        id: "youtube-advertising",
        title: "YouTube Advertising",
        description: "Leverage video content to engage viewers, capturing attention and driving conversions with precise audience targeting.",
        image: image8.src,
        imageAlt: "YouTube advertising",
        bgColor: "bg-primary" as const,
        links: [
            {
                text: "Learn more about YouTube advertising",
                url: " /services/paid-media-youtube-advertising/"
            }
        ]
    },
    {
        id: "display-ads",
        title: "Display Ads",
        description: "Increase brand awareness using visually compelling creatives that reach relevant audiences across websites and apps.",
        image: image3.src,
        imageAlt: "Display ads",
        bgColor: "bg-white" as const
    },
    {
        id: "remarketing-strategy",
        title: "Remarketing Strategy",
        description: "Reengage potential customers with personalized messaging that addresses their needs, boosting conversion and recall.",
        image: image9.src,
        imageAlt: "Remarketing strategy",
        bgColor: "bg-secondary" as const
    },
    {
        id: "programmatic-advertising",
        title: "Programmatic Advertising",
        description: "Gain precise, real-time control over ad placements using algorithmic optimization to maximize ROI and audience engagement.",
        image: image5.src,
        imageAlt: "Programmatic advertising",
        bgColor: "bg-primary" as const
    },
    {
        id: "amazon-advertising",
        title: "Amazon Advertising",
        description: "Increase visibility and purchase intent on Amazon through targeted campaigns that reach shoppers at the right time.",
        image: image10.src,
        imageAlt: "Amazon advertising",
        bgColor: "bg-white" as const,
        links: [
            {
                text: "Amazon marketing services",
                url: " /services/amazon-marketing/"
            }
        ]
    }
];

const WhySectionData = {
    badge: "Why Power?",
    title: "By partnering with us, you get:",
    buttonText: "Get a free marketing audit",
    buttonUrl: " /workwithus/",
    introText: "",
    contentItems: [
        {
            type: "bullet_points" as const,
            content: [
                "Paid media powered by our proprietary Nova platform, enabling data-driven PPC strategies, precise targeting, and smarter budget allocation to maximize ROI.",
                "Focus on growth and revenue rather than the complexity of PPC, providing clear strategies that directly impact your bottom line.",
                "Expertise in emerging channels like <a href=\" /services/programmatic-advertising-agency/\" target=\"_blank\" rel=\"noopener\">programmatic advertising</a> and connected TV to stay ahead of competitors.",
                "Strategic optimization using <a href=\" /services/cro-conversion-rate-optimization/\" target=\"_blank\" rel=\"noopener\">conversion rate optimization</a> from experienced digital leaders.",
                "Agility to pivot as audience behavior changes, ensuring campaigns stay effective and your business remains competitive."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Learn more about Paid Media",
    description: "Discover how Burac.ai ’s integrated PPC strategies reduce wasted spend, increase conversions, and maximize your overall ROI.",
    faqs: [
        {
            question: "What is a PPC Audit?",
            answer: [
                "A PPC audit reviews your campaigns to identify wasted spend, missed opportunities, keyword performance, ad copy, account structure, and match types. Burac.ai  uses this analysis to create a robust strategic plan to improve campaign performance and ROI."
            ]
        },
        {
            question: "What platforms do you run PPC ads on?",
            answer: [
                "We run PPC campaigns on major platforms like Google Ads, Bing Ads, and the Google Display Network, using precise targeting to reach customers wherever they are online."
            ]
        },
        {
            question: "What is paid search advertising?",
            answer: [
                "Paid search advertising allows your website to appear in the sponsored sections of search engine results for targeted keywords. Higher bids combined with relevance increase visibility and click-through rates."
            ]
        },
        {
            question: "What are Google Shopping campaigns?",
            answer: [
                "Google Shopping campaigns display rich product information including images, prices, and merchant name, helping products rank for relevant search terms and driving qualified traffic to your listings."
            ]
        },
        {
            question: "What is remarketing?",
            answer: [
                "Remarketing targets visitors who previously engaged with your site or app, showing customized ads to encourage conversions and increase brand recall."
            ]
        },
        {
            question: "How does paid media amplify brand presence?",
            answer: [
                "Paid media boosts visibility and engagement across digital channels. Through strategic targeting, creatives, and platforms like <a href=\" /services/paid-social-media/\">paid social media</a>, we drive brand awareness, engagement, and measurable growth.",
                "Unlock Your Most Profitable Customer Segments. <a href=\" /resources/who-are-your-most-profitable-customers/?utm_campaign__c=2025_Content_PC_HS&content_download_tag=PC_HS_2025\">Get the guide</a>"
            ]
        },
        {
            question: "What are the benefits of partnering with a paid media agency?",
            answer: [
                "Partnering with a paid media agency ensures campaigns are expertly managed, optimized, and aligned to business goals. Burac.ai  creates data-driven strategies to maximize ROI and deliver measurable growth across multiple platforms."
            ]
        },
        {
            question: "What is programmatic advertising?",
            answer: [
                "Programmatic advertising automates the buying and placement of ads using data and technology. Burac.ai  monitors and optimizes campaigns to ensure maximum efficiency and ROI."
            ]
        },
        {
            question: "How much does PPC cost?",
            answer: [
                "PPC costs vary by business, goals, and competition. After reviewing your campaigns, Burac.ai  provides a customized strategy and cost estimate to maximize ROI."
            ]
        },
        {
            question: "What is display advertising?",
            answer: [
                "Display ads use images or video to promote your brand on relevant websites, reaching potential customers outside of search results for increased awareness and engagement."
            ]
        },
        {
            question: "How can a paid media agency maximize returns on media investments?",
            answer: [
                "A paid media agency optimizes campaigns using data, targeting, and iterative testing to reduce costs and improve performance, ensuring higher ROI and long-term growth."
            ]
        }
    ]
};


const PaidMediaPage = () => {
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

export default PaidMediaPage;
