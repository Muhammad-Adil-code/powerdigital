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
import image1 from "../amazon-marketing/images/Strategic-Roadmap-768x768.jpg";
import image2 from '../amazon-marketing/images/Amazon-Ads-1-768x768.jpg';
import image3 from '../amazon-marketing/images/Conversion-Rates-768x768.jpg';
import image4 from '../amazon-marketing/images/Optimization-Opportunities-768x768.jpg';
import image5 from '../amazon-marketing/images/Executive-Strategy-768x768.jpg';
import image6 from '../amazon-marketing/images/pr_pdm_image-768x430.png';
import image7 from '../amazon-marketing/images/0_0-1-768x768.jpg';

// const HeroSectionData = {
//     badge: "GROWTH MARKETING",
//     title: "Supercharge revenue with an award-winning affiliate digital marketing agency",
//     description: "With a dedicated team of affiliate experts, Burac AI has what it takes to take your business to the next level. Explore our robust affiliate marketing offerings to support your overall business strategy.",
//     buttonText: "Get a Proposal",
//     buttonUrl: "#",
//     image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Affiliate.png",
//     imageAlt: "Amazon Marketing Services"
// };

// const WorkWithData = {
//     badge: "Work with Burac AI",
//     title: "Strategic Amazon & DTC Marketing Services",
//     paragraphs: [
//         "Today's customer doesn't distinguish between buying online, on Amazon, or at a physical store. What matters is a frictionless, convenient, and accessible shopping experience, regardless of time and place.",
//         "For many brands, orchestrating a true customer-centric experience from digital awareness through conversion is challenging. DTC and retail divisions often operate in silos, and most retail marketing partners only cover a slice of the journey.",
//         "<b>Burac AI unifies retail and DTC digital marketing under one roof, driving brand awareness and profitable sales growth across channels and tactics.</b>"
//     ],
//     buttonText: "Get in touch",
//     buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
//     cards: [
//         {
//             icon: ServiceIcon1.src,
//             title: "Authentic Brand Experience Across Touchpoints",
//             description: "Product mix consulting, product page optimization & Amazon SEO, Brand Store optimization & more – we ensure your Amazon presence is true to your brand, and converts in a crowded marketplace.",
//             bgColor: "bg-secondary" as const,
//             textColor: "#333333",
//             iconColor: "invert(0)",
//             alt: "Service Icon 1"
//         },
//         {
//             icon: Layer11.src,
//             title: "Full-Funnel Media Strategy",
//             description: "We employ Amazon's full advertising arsenal across search, DSP and Amazon Marketing Cloud to fuel growth. From media planning & ongoing optimization to advanced measurement capabilities that continuously calibrate.",
//             bgColor: "bg-primary" as const,
//             textColor: "#ffffff",
//             iconColor: "invert(1)",
//             alt: "Layer 1-1"
//         },
//         {
//             icon: Layer1.src,
//             title: "Strategic DTC and Amazon Alignment",
//             description: "Holistic strategies that connect the dots between channels and uncover the true impact of your marketing across DTC, Amazon, and retail revenue streams.",
//             bgColor: "bg-dark" as const,
//             textColor: "#ffffff",
//             iconColor: "invert(1)",
//             alt: "Layer 1"
//         }
//     ]
// };

// const ServicesData = {
//     badge: "Our Amazon Services",
//     title: "Customized growth strategies for every storefront.",
//     description: "Our strategies ensure your company is acquiring new customers, capturing market share, and positioned properly for long-term growth.",
//     showButton: true,
//     buttonText: "Get a free marketing audit",
//     buttonUrl: "/workwithus/",
//     layout: "3-per-row" as const,
//     items: [
//         {
//             title: "01 Prioritize & Plan",
//             description: "Identify the highest impact Amazon and retail marketing strategies based on audit results & brand goals. Using KPIs, timeline, and industry trends, we outline the most efficient path and navigate the competitive landscape."
//         },
//         {
//             title: "02 Align & Grow",
//             description: "Synchronize your Amazon marketing strategy with your brand's holistic ecommerce and/or B&M strategy, from product mix to media activation. Implement synergistic cross-channel strategies & omnichannel measurement techniques to drive overall brand growth."
//         },
//         {
//             title: "03 Measure, Iterate, Repeat",
//             description: "With advanced measurement and in-depth analytics, we assess the impact of each strategy, pivot with marketplace & competitive changes, and capitalize on new opportunities."
//         }
//     ]
// };

// const CardSliderData = [
//     {
//         id: "catalog-management",
//         title: "Catalog Management & Organic Strategy",
//         description: "Experts on your side to keep your account healthy, products live, and pull all organic visibility levers to build & maintain a strong foundation for sustained growth.",
//         image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Strategic-Roadmap-768x768.jpg",
//         imageAlt: "Catalog Management & Organic Strategy",
//         bgColor: "bg-white" as const
//     },
//     {
//         id: "product-page-creative",
//         title: "Product Page & Storefront Creative",
//         description: "Conversion-driving, Amazon-optimized assets from the product image carousel to the Amazon Brand Store that turn browsers into buyers.",
//         image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Amazon-Ads-1-768x768.jpg",
//         imageAlt: "Product Page & Storefront Creative",
//         bgColor: "bg-secondary" as const
//     },
//     {
//         id: "seo-algorithm",
//         title: "SEO - Tuned to the Amazon Algorithm",
//         description: "Written content on the frontend and backend of your listings that maximizes product discoverability on the marketplace.",
//         image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Conversion-Rates-768x768.jpg",
//         imageAlt: "SEO - Tuned to the Amazon Algorithm",
//         bgColor: "bg-primary" as const
//     },
//     {
//         id: "ppc-advertising",
//         title: "Amazon PPC Search Advertising",
//         description: "Acquire & retain Amazon customers with adaptive search advertising strategy that puts business & bottom line impact first.",
//         image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Optimization-Opportunities-768x768.jpg",
//         imageAlt: "Amazon PPC Search Advertising",
//         bgColor: "bg-white" as const
//     },
//     {
//         id: "dsp-advertising",
//         title: "Amazon DSP Advertising",
//         description: "Fuel the funnel for continuous growth with Amazon's powerful first-party customer data in the hands of seasoned programmatic display experts.",
//         image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Executive-Strategy-768x768.jpg",
//         imageAlt: "Amazon DSP Advertising",
//         bgColor: "bg-secondary" as const
//     },
//     {
//         id: "omnichannel-strategies",
//         title: "Cutting-Edge Omnichannel Strategies",
//         description: "Customized cross-channel advertising that aligns your digital strategy with your customer's journey and leverages non-Amazon channels to grow Amazon revenue.",
//         image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/pr_pdm_image-768x430.png",
//         imageAlt: "Cutting-Edge Omnichannel Strategies",
//         bgColor: "bg-primary" as const,
//         links: [
//             {
//                 text: "paid media",
//                 url: "https://powerdigitalmarketing.com/services/paid-media/"
//             },
//             {
//                 text: "Download the Accelerator Guide",
//                 url: "https://powerdigitalmarketing.com/resources/retail-media-networks-roi-accelerator/?utm_campaign__c=2025_Content_MROI&content_download_tag=MROI_2025"
//             }
//         ]
//     },
//     {
//         id: "measurement-solutions",
//         title: "Advanced Measurement Solutions",
//         description: "Amazon Marketing Cloud analytics and data science-backed incrementality testing to assess the true impact of Amazon marketing strategy and continuously iterate.",
//         image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_0-1-768x768.jpg",
//         imageAlt: "Advanced Measurement Solutions",
//         bgColor: "bg-white" as const
//     }
// ];

// const WhySectionData = {
//     badge: "Why Burac AI?",
//     title: "Our team of experts across all major ecommerce channels takes a customized, iterative, and adaptive approach to your success on Amazon and overall brand growth.",
//     buttonText: "Get a free marketing audit",
//     buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
//     introText: "By partnering with us, you get:",
//     contentItems: [
//         {
//             type: "list" as const,
//             content: [
//                 "<b>Full-service management:</b> Amazon storefront, Amazon DSP, & product mix consulting, catalog management, troubleshooting, and more handled for you.",
//                 "<b>A dedicated team of experts:</b> Hyper-focused SMEs with deep knowledge and robust experience in their specific online retail discipline.",
//                 "<b>Adaptive Amazon marketplace strategies:</b> Continuous monitoring, measuring, and adapting to changes in your unique Amazon landscape."
//             ]
//         }
//     ]
// };

// const LearnMoreData = {
//     badge: "Learn more",
//     title: "Learn more about Amazon.",
//     description: "Your Amazon Questions Answered: Optimize, Strategize, and Grow",
//     faqs: [
//         {
//             question: "What are the advantages of having 1 agency manage my DTC and Amazon marketing (vs. specialized shops)?",
//             answer: [
//                 "Cohesive & complementary strategies (1 agency focused on overall success vs. sales channel success), brand image & messaging consistency, budget flexibility, agility during peak periods, and efficiency of a single point of contact backed by a full team."
//             ]
//         },
//         {
//             question: "Will focusing on Amazon growth cannibalize sales from my website?",
//             answer: [
//                 "Amazon accounts for nearly half of all ecommerce transactions in the US. Customers will continue to buy on Amazon, whether your products or a competitor's. With intentional, coordinated strategies, you can avoid cannibalization and drive overall brand growth. Burac AI specializes in growing Amazon sales & market share while complementing DTC efforts."
//             ]
//         },
//         {
//             question: "If Amazon sales are less profitable than my DTC sales, why invest in Amazon?",
//             answer: [
//                 "Amazon provides access to high-intent customers at scale. Burac AI evaluates profitability first and balances revenue growth with margin optimization, often at the product level."
//             ]
//         },
//         {
//             question: "Is paid Amazon advertising necessary?",
//             answer: [
//                 "With thousands of new sellers daily, just listing products isn’t enough. Burac AI takes a holistic approach to Amazon advertising, combining search, DSP, and cross-channel strategies to drive traffic and conversions."
//             ]
//         },
//         {
//             question: "What drives organic ranking on Amazon?",
//             answer: [
//                 "Organic ranking is influenced by keyword relevancy, sales velocity, fulfillment, reviews, and external traffic. Burac AI integrates operational, creative, and advertising strategies to maximize rankings."
//             ]
//         },
//         {
//             question: "What are the advantages of Amazon DSP compared to other programmatic platforms?",
//             answer: [
//                 "DSP provides access to Amazon’s first-party data, exclusive inventory (Twitch, Prime Video), closed-loop attribution, and evolving in-store capabilities."
//             ]
//         },
//         {
//             question: "What is Amazon Marketing Cloud?",
//             answer: [
//                 "AMC is a privacy-safe clean room solution allowing custom analytics across Amazon and external data sources. Burac AI uses AMC to generate actionable insights for customer understanding and marketing optimization."
//             ]
//         },
//         {
//             question: "Can I use Amazon Customer Reviews to improve strategy?",
//             answer: [
//                 "Yes, positive reviews improve credibility and ranking. Burac AI leverages reviews to optimize listings, messaging, and product development."
//             ]
//         },
//         {
//             question: "How do I improve product visibility on Amazon?",
//             answer: [
//                 "Optimize listings, leverage Amazon Ads, and follow SEO best practices. Burac AI identifies the right keywords, images, and ad strategies to boost visibility."
//             ]
//         },
//         {
//             question: "How can I track Amazon marketing performance?",
//             answer: [
//                 "Burac AI analyzes sales, conversion, and advertising metrics to continuously optimize strategies and improve results."
//             ]
//         }
//     ]
// };
const HeroSectionData = {
    badge: "GROWTH MARKETING",
    title: "Supercharge income with an award-winning affiliate digital marketing agency",
    description: "With a dedicated team of affiliate professionals, Burac AI has what it takes to take your business to the next level.   Explore our broad affiliate marketing options to support your overall business strategy.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Affiliate.png",
    imageAlt: "Amazon Marketing Services"
};
const WorkWithData = {
    badge: "Work with Burac AI",
    title: "Strategic Amazon & DTC Marketing Services",
    paragraphs: ["Today's customer doesn't distinguish between shopping online, on Amazon, or at a physical store.   What matters is a frictionless, convenient, and accessible buying experience, regardless of time and place.", "For many organizations, creating a real customer-centric experience from digital awareness through conversion is challenging.   DTC and retail divisions generally work in silos, and most retail marketing partners only cover a slice of the journey.", "<b>Burac AI combines retail and DTC digital marketing under one roof, delivering brand awareness and profitable sales growth across channels and methods. </b>"],
    buttonText: "Get in touch",
    buttonUrl: "/workwithus/",
    cards: [{
        icon: ServiceIcon1.src,
        title: "Authentic Brand Experience Across Touchpoints",
        description: "Product mix consulting, product page optimization & Amazon SEO, Brand Store optimization & more – we ensure your Amazon presence is true to your brand, and converts in a crowded marketplace.",
        bgColor: "bg-secondary" as const,
        textColor: "#333333",
        iconColor: "invert(0)",
        alt: "Service Icon 1"
    }, {
        icon: Layer11.src,
        title: "Full-Funnel Media Strategy",
        description: "We leverage Amazon's full advertising arsenal across search, DSP and Amazon Marketing Cloud to fuel growth.   From media planning & ongoing optimization to advanced measurement capabilities that continuously calibrate.",
        bgColor: "bg-primary" as const,
        textColor: "#ffffff",
        iconColor: "invert(1)",
        alt: "Layer 1-1"
    }, {
        icon: Layer1.src,
        title: "Strategic DTC and Amazon Alignment",
        description: "Holistic strategies that connect the dots between channels and uncover the true impact of your marketing across DTC, Amazon, and retail revenue streams.",
        bgColor: "bg-dark" as const,
        textColor: "#ffffff",
        iconColor: "invert(1)",
        alt: "Layer 1"
    }]
};
const ServicesData = {
    badge: "Our Amazon Services",
    title: "Customized growth strategies for every storefront.",
    description: "Our strategies ensure your company is acquiring new customers, capturing market share, and positioned properly for long-term growth.",
    displayButton: true,
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    layout: "3-per-row" as const,
    items: [{
        title: "01 Prioritize & Plan",
        description: "Identify the highest impact Amazon and retail marketing initiatives based on audit results & brand goals.   Using KPIs, timeline, and industry trends, we outline the most efficient path and navigate the competitive landscape."
    }, {
        title: "02 Align & Grow",
        description: "Synchronize your Amazon marketing strategy with your brand's holistic ecommerce and/or B&M strategy, from product mix to media activation.   Implement synergistic cross-channel strategies & omnichannel measurement techniques to drive overall brand growth."
    }, {
        title: "03 Measure, Iterate, Repeat",
        description: "With advanced measurement and in-depth analytics, we assess the impact of each strategy, pivot with marketplace & competitive changes, and capitalize on new opportunities."
    }]
};
const CardSliderData = [{
    id: "catalog-management",
    title: "Catalog Management & Organic Strategy",
    description: "Experts on your side to keep your account healthy, products live, and pull all organic visibility levers to build & maintain a strong foundation for sustained growth.",
    image: image1.src,
    imageAlt: "Catalog Management & Organic Strategy",
    bgColor: "bg-white" as const
}, {
    id: "product-page-creative",
    title: "Product Page & Storefront Creative",
    description: "Conversion-driving, Amazon-optimized assets from the product image carousel to the Amazon Brand Store that turn browsers into buyers.",
    image: image2.src,
    imageAlt: "Product Page & Storefront Creative",
    bgColor: "bg-secondary" as const
}, {
    id: "seo-algorithm",
    title: "SEO - Tuned to the Amazon Algorithm",
    description: "Written content on the frontend and backend of your listings that maximizes product discoverability on the marketplace.",
    image: image3.src,
    imageAlt: "SEO - Tuned to the Amazon Algorithm",
    bgColor: "bg-primary" as const
}, {
    id: "ppc-advertising",
    title: "Amazon PPC Search Advertising",
    description: "Acquire & retain Amazon customers with adaptive search advertising strategy that puts business & bottom line impact first.",
    image: image4.src,
    imageAlt: "Amazon PPC Search Advertising",
    bgColor: "bg-white" as const
}, {
    id: "dsp-advertising",
    title: "Amazon DSP Advertising",
    description: "Fuel the funnel for continuous growth with Amazon's powerful first-party customer data in the hands of seasoned programmatic display experts.",
    image: image5.src,
    imageAlt: "Amazon DSP Advertising",
    bgColor: "bg-secondary" as const
}, {
    id: "omnichannel-strategies",
    title: "Cutting-Edge Omnichannel Strategies",
    description: "Customized cross-channel advertising that aligns your digital strategy with your customer's journey and leverages non-Amazon channels to grow Amazon revenue.",
    image: image6.src,
    imageAlt: "Cutting-Edge Omnichannel Strategies",
    bgColor: "bg-primary" as const,
    links: [{
        text: "paid media",
        url: "/services/paid-media/"
    }, {
        text: "Download the Accelerator Guide",
        url: "/resources/retail-media-networks-roi-accelerator/?utm_campaign__c=2025_Content_MROI&content_download_tag=MROI_2025"
    }]
}, {
    id: "measurement-solutions",
    title: "Advanced Measurement Solutions",
    description: "Amazon Marketing Cloud analytics and data science-backed incrementality testing to assess the true impact of Amazon marketing strategy and continuously iterate.",
    image: image7.src,
    imageAlt: "Advanced Measurement Solutions",
    bgColor: "bg-white" as const
}];
const WhySectionData = {
    badge: "Why Burac AI?",
    title: "Our team of experts across all major ecommerce channels takes a customized, iterative, and adaptive approach to your success on Amazon and overall brand growth.",
    buttonText: "Get a free marketing audit",
    buttonUrl: "/workwithus/",
    introText: "By partnering with us, you get:",
    contentItems: [{
        type: "list" as const,
        content: ["<b> Full-service management:</b> Amazon storefront, Amazon DSP, & product mix consulting, catalog management, troubleshooting, and more handled for you.", "<b>A dedicated team of experts:</b> Hyper-focused SMEs with deep knowledge and robust experience in their specific online retail discipline.", "<b>Adaptive Amazon marketplace strategies:</b> Continuous monitoring, measuring, and adapting to changes in your unique Amazon landscape."]
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





const AffiliateMarketingPage = () => {
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

export default AffiliateMarketingPage;
