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
import image1 from './images/Paid-Social-Ad-Copy-768x768.jpg'
import image2 from './images/Paid-Social-Lead-Journey-768x768.jpg'
import image3 from './images/Paid-Social-Technical-Setup-768x430.jpg'
import image4 from './images/Paid_Social.webp'



const HeroSectionData = {
    badge: "AI COMMERCE AUTOMATION",
    title: "AI-Powered Social & Retail Media Intelligence",
    description: "Activate data-driven precision across paid social and retail platforms. Burac.ai’s adaptive algorithms optimize your ad spend, engagement, and ROI through real-time learning and automated optimization.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: image4.src,
    imageAlt: "AI Retail Marketing Services"
};

const WorkWithData = {
    badge: "Work with Burac.ai",
    title: "Burac.ai paid social media advertising and marketing techniques help brands to unlock revenue.",
    paragraphs: [
        "From Facebook and Instagram to TikTok and YouTube, your customers spend hours on social media.  But algorithms, rivals and content saturation all stand between you and incremental money. ",
        "An skilled social media marketing agency like Burac.ai has the skills to target, engage and persuade your market, taking the guesswork out of sponsored social marketing. ",
        "<b>You’ll not only get your ads seen, but also get your target audience to care and buy - without emptying ad money.</b>"
    ],
    buttonText: "Get in touch",
    buttonUrl: " /work-with-us/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Acquire new customers ",
            description: "Expand your consumer base with precision-targeted ads that reach the right people at the right time.  Our paid social tactics are designed to find and engage new prospects, turning them into loyal customers that create continuous growth for your organization. ",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Unified Brand Intelligence Icon"
        },
        {
            icon: Layer11.src,
            title: "Run effective retention strategies ",
            description: "Keep your existing clients coming back with retention methods that resonate.  We develop targeted programs that re-engage your audience, nurture client relationships, and stimulate repeat purchases, helping you optimize the lifetime value of each customer. ",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Omnichannel Media Automation Icon"
        },
        {
            icon: Layer1.src,
            title: "Lower ad expenses ",
            description: "Maximize your IROAS by cutting ad cost without compromising on outcomes.  Our approach to paid social emphasizes on efficiency, ensuring that every dollar you spend works better to reach your goals.  We continuously refine your efforts to decrease costs while driving real outcomes.",
            bgColor: "bg-dark" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Connected DTC Growth Icon"
        }
    ]
};

const ServicesData = {
    badge: "Our Paid Social Services ",
    title: "Take a look at what’s possible when you partner with Burac.ai for paid social media management and advertising. ",
    description: " Everything you need for a successful Paid Social Media marketing strategy-under one roof.",
    showButton: true,
    buttonText: "Get a free audit",
    buttonUrl: " /workwithus/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Analysis ",
            description: "Before a contract is ever signed, we dig into your firm with a complete appraisal.  You get an in-depth report on what’s working, what’s not, and what opportunities we’ve found for serious, profitable growth. "
        },
        {
            title: "02 Implementation ",
            description: "We consider your current paid efforts, competitive landscape, and audience segmentation opportunities while mapping out your customer journey.  From this, our social media agency curates a bespoke, multi-channel paid social approach. "
        },
        {
            title: "03 Results, Rinse, Repeat ",
            description: "As you begin witnessing new business and a rise in customer lifetime value, our digital marketing firm continues making modifications.  Nothing is safe from tests and optimization; strategy, social media content, and targeting are all regularly changed to your specific target demographic and unique market behavior. "
        }
    ]
};

const CardSliderData = [
    {
        id: "catalog-management",
        title: "Lead journey optimization ",
        description: "Identify your consumer journey and make the path to buy straightforward.",
        image: image1.src,
        imageAlt: "Lead journey optimization",
        bgColor: "bg-white" as const
    },
    {
        id: "product-page-creative",
        title: "Ad copy and marketing strategy creation",
        description: "Nail the correct narrative and feed it to audiences likely to convert. ",
        image: image2.src,
        imageAlt: "Ad copy and marketing strategy creation",
        bgColor: "bg-secondary" as const
    },
    {
        id: "seo-algorithm",
        title: "Technical setup and maintenance ",
        description: "Track activity, retarget and segment with pixels put up across social media channels.",
        image: image3.src,
        imageAlt: "Technical setup and maintenance",
        bgColor: "bg-primary" as const
    }
];

const WhySectionData = {
    badge: "Why Burac.ai?",
    title: "By working with our social media agency, you get:",
    buttonText: "Get a free audit",
    buttonUrl: " /work-with-us/",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "Paid social enabled by our digital agency’s proprietary technology, nova, to design intelligent and scalable paid social marketing campaigns backed by data. ",
                "Accurate targeting, innovative interaction and social media content creation that resonates to boost your relevance and stretch your social ad spending. ",
                "Rigorous A/B testing to constantly improve and gain the most significant outcomes. ",
                "Commitment to optimization and revenue growth, from ad text modifications to digital strategy realignments.  ",
                "A unique technique to catch client attention at every step of their journey utilizing pixel tracking and segmentation."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Deep dive into Paid Social Media.",
    description: "Ready to elevate your paid social game? Let's dive into how custom strategies can hit your goals—whether that's finding new customers or making every ad dollar count. See how Burac.ai streamlines your campaigns to drive actual results, not just vanity metrics.",
    faqs: [
        {
            question: "What is a paid social audit?",
            answer: [
                "Think of a paid social audit as a health checkup for your ads. At Burac.ai, we dig deep into everything you're currently running to see what's working and what isn't. We look at your customer journey, technical tracking, audience targeting, and creative assets. We take those insights and build a roadmap to stop wasted spend and start scaling your growth."
            ]
        },
        {
            question: "What social platforms do you advertise on?",
            answer: [
                "We work with the platforms where your customers actually spend their time. Whether that's TikTok, Facebook, Instagram, Pinterest, or LinkedIn, we handle it all. But just because you *can* be everywhere doesn't mean you *should* be. We help you figure out exactly which networks will give you the best return on investment so you aren't shouting into the void."
            ]
        },
        {
            question: "What is retargeting?",
            answer: [
                "Retargeting is essentially a second chance at a first impression. Most people leave a website without buying anything on their first visit. Retargeting allows you to gently remind those visitors—through ads on their social feeds—about the cool stuff they looked at. It’s about bringing them back to finish what they started."
            ]
        },
        {
            question: "What is Facebook advertising?",
            answer: [
                "Facebook is still a juggernaut for reaching people. Advertising there lets you put your brand in front of highly specific groups based on interests, location, and behavior. However, their tools have gotten incredibly complex over the years. That’s where we come in—we navigate the backend technicalities to ensure you're targeting the right people without burning through your budget."
            ]
        },
        {
            question: "What is LinkedIn advertising?",
            answer: [
                "If you're in the B2B space, LinkedIn is the place to be. It puts your message directly in front of decision-makers and professionals. While anyone can set up an ad account, doing it *profitably* is tricky because costs can be higher. We manage the strategy to ensure you're generating high-quality leads, not just expensive clicks."
            ]
        },
        {
            question: "What do you test in your social advertising?",
            answer: [
                "We test everything, because assumptions kill budgets. At Burac.ai, we experiment with different headlines, images, video styles, and audience segments. We watch the data—clicks, engagement, and conversions—to see what resonates. Then, we double down on the winners and cut the losers."
            ]
        },
        {
            question: "Will you design social ad creative for my brand?",
            answer: [
                "Absolutely. If you work with us on paid social, we handle the creative heavy lifting. We design visuals that look great and align with your brand voice across every platform. Consistency is key to building trust, so we make sure your ads look like *you*, whether they're on Instagram or LinkedIn."
            ]
        },
        {
            question: "What is the difference between paid social and organic social?",
            answer: [
                "It comes down to 'pay-to-play' versus 'community building.' Paid social involves spending money to guarantee your posts reach specific new audiences. Organic social is about posting content for free to nurture your existing followers. Paid fuels growth and acquisition; organic builds loyalty and brand personality. You usually need a mix of both to win."
            ]
        },
        {
            question: "How much should I spend on paid social advertising?",
            answer: [
                "There’s no one-size-fits-all answer here—it really depends on your industry and your goals. However, you don't need to guess. During our initial audit, we look at your competitive landscape and tell you exactly what kind of budget you need to be competitive. We build a plan that respects your wallet while maximizing your results."
            ]
        }
    ]
};


const PaidSocialMediaPage = () => {
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

export default PaidSocialMediaPage;
