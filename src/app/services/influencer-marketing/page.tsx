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
    badge: "Influencer Marketing Services",
    title: "Gain the interest and trust of a new audience quickly and simply.",
    paragraphs: [
        "Your clients all have someone they respect, look up to, and idolize. With our specialized approach to recruiting and screening top-tier personnel through widespread contacts and our usage of databases, we break down the traditional obstacles to finding the appropriate partner.",
        "Get these heavyweight social influencers battling in your ring without sacrificing your soul or giving up creative control.",
        "<b>And unlike traditional media, you’ll have access to measurable results: track how many people viewed it, shared it, and double-tapped it.</b>"
    ],
    buttonText: "Get in touch",
    buttonUrl: "/workwithus/",
    cards: [{
        icon: ServiceIcon1.src,
        title: "Reach New Audiences",
        description: "Break into uncharted markets by working with influencers who resonate with your target demographic. Our firm thoughtfully manages these relationships from A-Z to guarantee your brand’s message reaches new audiences while keeping a consistent, authentic presence.",
        bgColor: "bg-secondary" as const,
        textColor: "#333333",
        iconColor: "invert(0)",
        alt: "Reach New Audiences Icon"
    }, {
        icon: Layer11.src,
        title: "Gain Brand Trust and Authority",
        description: "We match your brand with influencers and content creators who have gained respect within their communities. By connecting with these renowned voices, your company becomes a leader in your sector, boosting trust and generating engagement and conversions.",
        bgColor: "bg-primary" as const,
        textColor: "#ffffff",
        iconColor: "invert(1)",
        alt: "Brand Trust Icon"
    }, {
        icon: Layer1.src,
        title: "Influence Action",
        description: "Our programs do more than drive awareness—they encourage action. We work together with influencers to develop compelling content that helps their audience through the buyer’s journey, transforming followers into devoted consumers ready to engage with your company.",
        bgColor: "bg-dark" as const,
        textColor: "#ffffff",
        iconColor: "invert(1)",
        alt: "Influence Action Icon"
    }]
};

const ServicesData = {
    badge: "Our Influencer Services",
    title: "Turn-key influencer outreach that nails every aspect, every time.",
    description: "Influencers already get the undivided attention of your audience. With influencer marketing, that attention becomes yours.",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    layout: "3-per-row" as const,
    items: [{
        title: "01 Analysis",
        description: "Before a contract is ever signed, we pop the hood on your firm with a complete audit. You get an in-depth, data driven analysis on what’s working, what’s not, and what chances we’ve uncovered for substantial growth."
    }, {
        title: "02 Strategy",
        description: "We build a bespoke influencer strategy targeted to match your goals. We’ll go deep into your audience, brand, and product to design a plan that assures harmony between influencers, platforms, and your brand messaging."
    }, {
        title: "03 Results, Rinse, Repeat",
        description: "Revel in your improved brand exposure, new consumers, and important new marketing assets. But our job isn’t over yet. We regularly adjust our plan depending on performance, incorporate feedback, and gear up for your next campaign to achieve even bigger outcomes."
    }]
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
    title: "We take smart initiatives to present your brand to hundreds of thousands of new prospects.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    introText: "By partnering with us, you get:",
    contentItems: [{
        type: "list" as const,
        content: [
            "<b>Competitive Analysis:</b> We research competitors to detect trends, find gaps, and design a strategy that provides your brand a competitive edge.",
            "<b>Intentional Influencer Selection:</b> We carefully connect you with suitable influencers, guaranteeing alignment with your digital marketing goals for optimum impact.",
            "<b>Influencer Testing:</b> We analyze influencers’ voices and styles to ensure their authenticity aligns with your brand’s message and values.",
            "<b>Analysis of Past Partnerships and Campaigns:</b> We evaluate previous influencer collaborations to see what worked (and what didn’t).",
            "<b>Legal Requirements + Brand Protection:</b> We manage all legal aspects, ensuring that your influencer agreements conform with general and industry-specific requirements."
        ]
    }]
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
