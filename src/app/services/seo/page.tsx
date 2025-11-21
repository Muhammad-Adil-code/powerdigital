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
    title: "What is the benefit of hiring an SEO agency?",
    paragraphs: [
        "Standing out online is no simple feat. Climbing in SEO keyword rankings in a highly competitive sector and changing algorithms require a personalized SEO approach that is unique to your goals and business.",
        "In order to compete, you need a proven partner that knows how to produce outcomes."
    ],
    buttonText: "Get in touch",
    buttonUrl: "/workwithus/",
    cards: [{
        icon: ServiceIcon1.src,
        title: "Amplify brand visibility",
        description: "Establish brand visibility and trust in the market via increased organic keyword rankings in the search results",
        bgColor: "bg-secondary" as const,
        textColor: "#333333",
        iconColor: "invert(0)",
        alt: "Amplify Brand Visibility Icon"
    }, {
        icon: Layer11.src,
        title: "Optimize marketing and design spend",
        description: "Reduce acquisition expenses through full-funnel SEO optimizations",
        bgColor: "bg-primary" as const,
        textColor: "#ffffff",
        iconColor: "invert(1)",
        alt: "Optimize Marketing Spend Icon"
    }, {
        icon: Layer1.src,
        title: "Grow your audience",
        description: "Attract new potential clients to your website by growing website traffic and generating relevant quality content people are genuinely seeking for (+reading)",
        bgColor: "bg-dark" as const,
        textColor: "#ffffff",
        iconColor: "invert(1)",
        alt: "Grow Audience Icon"
    }]
};

const ServicesData = {
    badge: "Our Approach",
    title: "Here’s how we position your brand for optimum visibility and impact:",
    description: "Navigating the competitive digital landscape takes precision and understanding. We employ cutting-edge technology and machine learning to find growth possibilities, target significant gaps, and develop strategies that produce measurable results. Our patented systems continuously learn and adapt, ensuring your SEO efforts stay ahead of evolving trends and algorithms.",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    layout: "3-per-row" as const,
    items: [{
        title: "01 Analysis",
        description: "Before a contract is ever signed, we probe into your firm with a full nova evaluation. Our SEO agency develops an in-depth analysis on what’s working in your SEO approach, what’s not, and what chances we’ve uncovered for lucrative revenue growth."
    }, {
        title: "02 Strategy",
        description: "Once the assessment is done, we’ll develop an assault plan based on the evaluation of the website structure and a comparative analysis of the industry. Our marketing agency’s SEO experience and knowledge within your area of specialization create the foundation for this approach."
    }, {
        title: "03 Results, Rinse, Repeat",
        description: "We don’t believe in rinse and repeat. Instead, we continuously examine outcomes, test new techniques, and enhance efforts to unleash ongoing growth. Watch as qualified traffic grows and your earning potential expands."
    }]
};

const CardSliderData = [{
    id: "seo-audit",
    title: "SEO Audit",
    description: "A full examination of your present performance, technical site health, SEO opportunities, competitor analysis and content recommendations from our team of SEO specialists. We identify critical areas for improvement and build a bespoke action plan that corresponds with your business goals, creating a strong foundation for sustainable SEO performance.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Strategic-Roadmap-768x768.jpg",
    imageAlt: "SEO Audit",
    bgColor: "bg-white" as const,
    actionUrl: "#"
}, {
    id: "technical-seo",
    title: "Technical SEO",
    description: "Behind-the-scenes technological recommended practices that boost your site’s crawlability. We focus on optimizing site speed, mobile usability, and enhancing the technological infrastructure to ensure a seamless user experience and search engine crawlability.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Amazon-Ads-1-768x768.jpg",
    imageAlt: "Technical SEO",
    bgColor: "bg-secondary" as const,
    actionUrl: "#"
}, {
    id: "local-seo",
    title: "Local SEO",
    description: "For hyper-local, retail or small enterprises that need assistance with Google Business Profile (GBP) listing(s), reviews and location maintenance. We boost local visibility by ensuring your business is appropriately listed, maintaining reviews, and targeting location-specific keywords to drive foot traffic and local leads.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Conversion-Rates-768x768.jpg",
    imageAlt: "Local SEO",
    bgColor: "bg-primary" as const,
    actionUrl: "#"
}, {
    id: "content-marketing",
    title: "Content Marketing",
    description: "Our team of SEO specialists and content developers develop relevant quality material designed to enhance rankings in search results and qualified website visitors. We develop data-driven content strategies that connect with user intent and SEO best practices, eventually delivering increased engagement and conversions.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Optimization-Opportunities-768x768.jpg",
    imageAlt: "Content Marketing",
    bgColor: "bg-white" as const,
    actionUrl: "#"
}, {
    id: "seo-migrations",
    title: "SEO Migrations",
    description: "Protect your visitors and rankings with SEO migration services. Our agency enables smooth transitions during website migrations, eliminating any risks of losing rankings, traffic, or user experience.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Executive-Strategy-768x768.jpg",
    imageAlt: "SEO Migrations",
    bgColor: "bg-secondary" as const,
    actionUrl: "#"
}, {
    id: "link-building",
    title: "Link Building",
    description: "Outreach that enhances your authority and visibility across the web, enhancing keyword ranks in search engine results. We specialize on getting high-quality backlinks from reputable sites in your field, which directly improves your site’s trustworthiness and search engine results.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/pr_pdm_image-768x430.png",
    imageAlt: "Link Building",
    bgColor: "bg-primary" as const,
    actionUrl: "#"
}, {
    id: "ecommerce-seo",
    title: "eCommerce SEO",
    description: "Set your online store up for success by ranking on top search words, educating around products and boosting conversions. We optimize your product pages, improve on-site search functionality, and employ rich snippets to promote visibility and drive higher sales through organic search.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_0-1-768x768.jpg",
    imageAlt: "eCommerce SEO",
    bgColor: "bg-white" as const,
    actionUrl: "#"
}];

const WhySectionData = {
    badge: "Why Burac AI?",
    title: "Our holistic SEO strategy goes beyond rankings to create impactful business results.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    introText: "SEO at Burac AI begins with an in-depth audit that checks every part of your search engine performance—metadata, backlinks, technical SEO, content quality, and more. By collaborating with us, you get:",
    contentItems: [{
        type: "list" as const,
        content: [
            "<b>A committed, highly specialized team:</b> From Technical SEO experts to on-page and off-page leads, every area of your SEO foundation is led by specialists.",
            "<b>Tailored strategies:</b> We ensure your Organic Search strategy is specially tailored for your organization's unique needs.",
            "<b>A comprehensive growth engine:</b> We connect with your larger marketing efforts—content, CRO, PR, and paid media—to maximize visibility and profitability."
        ]
    }]
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
