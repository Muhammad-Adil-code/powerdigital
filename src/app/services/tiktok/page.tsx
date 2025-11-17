"use server"


import Fullheader from '../../../components/consumer/header';
import Cardslider from '../maincomonents/cardslider';
import HeroSection from '../maincomonents/herosection';
import LearnMore from '../maincomonents/learnmore';
import WhySection from '../maincomonents/whysection';
import Services from '../maincomonents/Services';
import TiktokWorkWith from './tiktokWorkWith';


const HeroSectionData = {
    badge: "AI-DRIVEN GROWTH",
    title: "AI-Powered Marketing Intelligence",
    description: "Transform how your brand grows using Burac.ai’s advanced automation, data intelligence, and predictive marketing tools for measurable performance.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/TikTok-2.png",
    imageAlt: "AI Marketing Solutions"
};

const ServicesData = {
    badge: "Our AI Services",
    title: "Tailored growth intelligence for every digital channel.",
    description: "Our AI frameworks help your brand attract the right audience, optimize spend, and scale sustainably across all marketing platforms.",
    showButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Analyze & Predict",
            description: "Leverage Burac.ai’s deep learning algorithms to analyze user data, forecast trends, and identify the most impactful marketing opportunities for your brand."
        },
        {
            title: "02 Automate & Optimize",
            description: "Synchronize your marketing ecosystem through intelligent automation. From content to campaign optimization, we connect every channel to drive unified growth."
        },
        {
            title: "03 Measure, Learn, Improve",
            description: "Use real-time AI analytics to track impact, uncover insights, and adapt dynamically — ensuring your campaigns evolve faster than the market."
        }
    ]
};

const CardSliderData = [
    {
        id: "data-intelligence",
        title: "Data Intelligence & Automation",
        description: "Keep your marketing engine healthy with predictive analytics, automated optimization, and AI-powered insights that continuously enhance performance.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Strategic-Roadmap-768x768.jpg",
        imageAlt: "Data Intelligence & Automation",
        bgColor: "bg-white" as const
    },
    {
        id: "creative-optimization",
        title: "Creative Optimization",
        description: "AI-enhanced visuals and content designed to increase engagement, improve conversion rates, and deliver authentic brand experiences at scale.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Amazon-Ads-1-768x768.jpg",
        imageAlt: "Creative Optimization",
        bgColor: "bg-secondary" as const
    },
    {
        id: "ai-seo",
        title: "AI-Powered SEO",
        description: "AI-driven keyword and intent modeling that maximizes your visibility, discoverability, and ranking across all major platforms.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Conversion-Rates-768x768.jpg",
        imageAlt: "AI-Powered SEO",
        bgColor: "bg-primary" as const
    },
    {
        id: "adaptive-ads",
        title: "Adaptive Paid Media",
        description: "Automated ad strategies that learn from data in real-time, boosting ROI while maintaining creative precision and audience relevance.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Optimization-Opportunities-768x768.jpg",
        imageAlt: "Adaptive Paid Media",
        bgColor: "bg-white" as const
    },
    {
        id: "predictive-ads",
        title: "Predictive Programmatic Advertising",
        description: "Harness AI and first-party data to anticipate audience behavior and deliver the right message at the perfect time — automatically.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Executive-Strategy-768x768.jpg",
        imageAlt: "Predictive Programmatic Advertising",
        bgColor: "bg-secondary" as const
    },
    {
        id: "omnichannel-ai",
        title: "Omnichannel Intelligence",
        description: "AI-powered cross-channel strategies that unify digital touchpoints, aligning your marketing journey with customer intent for higher conversion.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/pr_pdm_image-768x430.png",
        imageAlt: "Omnichannel Intelligence",
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
        id: "ai-measurement",
        title: "AI Measurement & Insights",
        description: "Use machine learning analytics and multi-source data integration to understand the true impact of your campaigns and continuously improve outcomes.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_0-1-768x768.jpg",
        imageAlt: "AI Measurement & Insights",
        bgColor: "bg-white" as const
    }
];

const WhySectionData = {
    badge: "Why Burac.ai?",
    title: "Our AI-driven marketing systems adapt, learn, and evolve — giving your brand a continuous edge in performance and growth.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    introText: "By partnering with us, you get:",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "<b>Full-service automation:</b> From AI content generation to campaign orchestration, everything runs intelligently with minimal manual effort.",
                "<b>Dedicated AI specialists:</b> Experts in machine learning, data science, and performance marketing that bring measurable impact to your brand.",
                "<b>Adaptive intelligence:</b> Systems that learn from every click, campaign, and conversion to make smarter, faster decisions."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Learn more about Burac.ai",
    description: "Your AI Marketing Questions Answered: Automate, Analyze, and Accelerate.",
    faqs: [
        {
            question: "Why use Burac.ai over traditional agencies?",
            answer: [
                "Burac.ai integrates automation, predictive modeling, and AI learning — allowing your brand to move faster, spend smarter, and scale sustainably."
            ]
        },
        {
            question: "Can AI replace human creativity?",
            answer: [
                "Not replace — enhance. Our AI tools amplify creative strategy, identifying what works and scaling it intelligently for maximum performance."
            ]
        },
        {
            question: "How does AI improve ad performance?",
            answer: [
                "Our platform analyzes millions of data points in real time to optimize bids, audiences, and creatives — ensuring your ROI improves continuously."
            ]
        },
        {
            question: "Can Burac.ai connect to my existing tools?",
            answer: [
                "Yes. Burac.ai integrates seamlessly with major platforms — from Google Ads to Meta and Amazon — to unify your marketing performance data."
            ]
        },
        {
            question: "What kind of reporting do I get?",
            answer: [
                "You’ll get live dashboards powered by Burac.ai’s analytics layer, delivering transparent, real-time insight into performance, spend, and growth metrics."
            ]
        }
    ]
};



const TiktokPage = () => {
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
