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
    title: "Curious how TikTok marketing can boost your brand? ",
    description: "Explore our strategy and discover how we generate compelling content and utilize the power of TikTok trends to amplify your message, enhance your brand’s visibility, and drive measurable growth. Connect with us today to start your road toward transformative digital marketing success, backed by unique techniques and a deep understanding of TikTok’s dynamic platform. Let us help you transform imagination into conversions.",
    faqs: [{
        question: "What is a TikTok agency? ",
        answer: ["A TikTok Ads agency is an organization that helps businesses attain their goals by exploiting the possibilities of this expanding social platform.  Through establishing specialized ads and tactics, TikTok agencies try to offer optimal ROI and engagement with customers.  By researching consumer patterns and preferences, the finest TikTok firms can build ads that resonate with the target demographic while keeping on-brand.  In addition to building campaigns and developing content creation strategies, several firms offer services such as influencer management and analytics as part of their influencer marketing agency function."]
    }, {
        question: "Why should I advertise on TikTok? ",
        answer: ["TikTok is a famous social media network with over 1 billion users globally, making it a perfect platform for firms to advertise on.  The program offers numerous types of content formats, including short-form films, audio samples, photographs, text, polls, and hashtag challenges, allowing firms to produce enticing adverts that will engage their target audience.  With the appropriate strategy in place, businesses can swiftly raise their visibility, attract customers, and boost brand awareness."]
    }, {
        question: "How do TikTok Ads work? ",
        answer: ["TikTok Ads is a pay-per-view platform that allows advertisers to tailor their message to specific individuals based on age, geography, and interests.  Advertisers can pick between six alternative ad formats—branded hashtag challenges, branded effects, sponsored lens campaigns, in-feed native video advertisements, top view ads, and branded effects carousel—which enable them to engage with their audience in different ways."]
    }, {
        question: "How do I know TikTok is good for my company? ",
        answer: ["The first thing you should evaluate before spending time and money on a TikTok marketing campaign is the demographics of the platform and whether they correspond with your target audience.  It is also vital to evaluate whether your target demographic is already engaged on TikTok and connecting with businesses.  If your competitors are having success on the platform, it may be beneficial for you to join them and take advantage of the same prospects.  If they are not enjoying success, it may be an indicator that a TikTok campaign isn’t suited for your brand at this time, or it could be an opportunity to be the first in your industry on the site."]
    }, {
        question: "Who uses TikTok?",
        answer: ["According to Statista, most TikTok users are between 18 and 24 years old, with 42% of all users falling into this age range.  In addition, 31% of TikTok users are 25-34 years old, 13% are 35-44 years old, 7% are 45-54 years old, and 4% are 55+ years old.  Therefore, it’s apparent that younger generations make up the bulk of users on TikTok.  This data shows TikTok’s popularity among younger audiences, who are essential in influencing trends and engaging with digital content."]
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
