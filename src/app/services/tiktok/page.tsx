"use server"
import Fullheader from '../../../components/consumer/header';
import Cardslider from '../maincomonents/cardslider';
import HeroSection from '../maincomonents/herosection';
import LearnMore from '../maincomonents/learnmore';
import WhySection from '../maincomonents/whysection';
import Services from '../maincomonents/Services';
import TiktokWorkWith from './tiktokWorkWith';

import image1 from "./images/TikTok-2.webp";
import image2 from './images/Amazon-Ads-768x430.jpg';
import image3 from './images/Building-Connections-768x768.jpg';
import image4 from './images/Direct-Mail-768x768.jpg';
import image5 from './images/Thoughtful-Virality-768x768.jpg';
import image6 from './images/UGC-768x768.jpg';

const HeroSectionData = {
    badge: "AI-DRIVEN GROWTH",
    title: "AI-Powered Marketing Intelligence",
    description: "Transform how your brand grows using Burac.ai’s advanced automation, data intelligence, and predictive marketing tools for measurable performance.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: image1.src,
    imageAlt: "AI Marketing Solutions"
};
const ServicesData = {
    badge: "Our AI Services",
    title: "Tailored growth intelligence for every digital channel.",
    description: "Our AI frameworks help your brand attract the right audience, optimize spend, and scale sustainably across all marketing platforms.",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    layout: "3-per-row" as const,
    items: [{
        title: "01 Analyze & Predict",
        description: "Leverage Burac.ai’s deep learning algorithms to analyze user data, forecast trends, and identify the most impactful marketing opportunities for your brand."
    }, {
        title: "02 Automate & Optimize",
        description: "Synchronize your marketing ecosystem through intelligent automation.   From content to campaign optimization, we connect every channel to drive unified growth."
    }, {
        title: "03 Measure, Learn, Improve",
        description: "Use real-time AI analytics to track impact, uncover insights, and adapt dynamically — ensuring your campaigns evolve faster than the market."
    }]
};
const CardSliderData = [{
    id: "thoughtful-virality",
    title: "Thoughtful Virality",
    description: "We stay on top of trends so you don’t have to, maximizing on your products and packaging for peak recognition.",
    image: image2.src,
    imageAlt: "Thoughtful Virality",
    bgColor: "bg-white" as const
}, {
    id: "strategic-production",
    title: "Strategic Production",
    description: "Our strategists provide in-depth concept planning for each video, ensuring real content that’s on brand, too.",
    image: image3.src,
    imageAlt: "Strategic Production",
    bgColor: "bg-secondary" as const
}, {
    id: "unique-creative",
    title: "Unique Creative",
    description: "Our team of creators develop assets that are true to the brand and relatable for our target consumers—think UGC, but we own the story.",
    image: image4.src,
    imageAlt: "Unique Creative",
    bgColor: "bg-primary" as const
}, {
    id: "building-connections",
    title: "Building Connections",
    description: "By inspiring activity and conversations, we support building unique relationships on the platform with other brands, customers, and followers.",
    image: image5.src,
    imageAlt: "Building Connections",
    bgColor: "bg-white" as const
}, {
    id: "full-suite",
    title: "Full Suite of Services",
    description: "From Marketing Strategy, Analytics, and Media Buying to Content Creation and Influencer Marketing—we help you plant your brand’s flag.",
    image: image6.src,
    imageAlt: "Full Suite of Services",
    bgColor: "bg-secondary" as const
},];
const WhySectionData = {
    badge: "Why Burac.ai?",
    title: "Our AI-driven marketing systems adapt, learn, and evolve — giving your brand a continuous edge in performance and growth.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    introText: "By partnering with us, you get:",
    contentItems: [{
        type: "list" as const,
        content: ["<b> Full-service automation:</b> From AI content generation to campaign orchestration, everything runs intelligently with minimal manual effort.", "<b>Dedicated AI specialists:</b> Experts in machine learning, data science, and performance marketing that bring measurable impact to your brand.", "<b>Adaptive intelligence:</b> Systems that learn from every click, campaign, and conversion to make smarter, faster decisions."]
    }]
};
const LearnMoreData = {
    badge: "Learn more",
    title: "Learn more about Burac.ai",
    description: "Your AI Marketing Questions Answered: Automate, Analyze, and Accelerate.",
    faqs: [{
        question: "Why use Burac.ai over traditional agencies?",
        answer: ["Burac.ai integrates automation, predictive modeling, and AI learning — allowing your brand to move faster, spend smarter, and scale sustainably."]
    }, {
        question: "Can AI replace human creativity?",
        answer: ["Not replace — enhance.   Our AI technologies magnify creative approach, identifying what works and expanding it smartly for optimal performance."]
    }, {
        question: "How does AI improve ad performance?",
        answer: ["Our platform analyzes millions of data points in real time to optimize bids, audiences, and creatives — ensuring your ROI improves continuously."]
    }, {
        question: "Can Burac.ai connect to my existing tools?",
        answer: ["Yes.   Burac.ai integrates seamlessly with major platforms — from Google Ads to Meta and Amazon — to unify your marketing performance data."]
    }, {
        question: "What kind of reporting do I get?",
        answer: ["You’ll get live dashboards powered by Burac.ai’s analytics layer, delivering transparent, real-time insight into performance, spend, and growth metrics."]
    }]
};



const TiktokPage = () => {
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

                <TiktokWorkWith />

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

export default TiktokPage;
