"use server"
// import "../../../css/endrock.styles.css"
// import "./css/endrock.styles.css"  
import ServiceIcon1 from "./images/service-icon-1.svg"
import Layer11 from "./images/Layer_1-1.svg"
import Layer1 from "./images/Layer-1.svg"
import Amazon1 from "./images/Amazon-1.png"
import image1 from "./images/Strategic-Roadmap-768x768.jpg";
import image2 from './images/Amazon-Ads-1-768x768.jpg';
import image3 from './images/Conversion-Rates-768x768.jpg';
import image4 from './images/Optimization-Opportunities-768x768.jpg';
import image5 from './images/Executive-Strategy-768x768.jpg';
import image6 from './images/pr_pdm_image-768x430.png';
import image7 from './images/0_0-1-768x768.jpg';
import Header from '../../../components/consumer/header';
import Cardslider from '../maincomonents/cardslider';
import HeroSection from '../maincomonents/herosection';
import LearnMore from '../maincomonents/learnmore';
import WhySection from '../maincomonents/whysection';
import WorkWith from '../maincomonents/workwith';
import Services from '../maincomonents/Services';

const amazonHeroSectionData = {
  badge: "GROWTH MARKETING",
  title: "Marketing Services for Amazon",
  description: "In today’s fast-moving, algorithm-driven retail landscape, firms that see Amazon in isolation are lagging behind.  At Burac.ai, we recognize that Amazon isn’t a silo – it’s a vital part of a much wider growth ecosystem.  Our team of retail and Amazon intelligence professionals leverage AI-powered analytics and full-funnel strategy to draw the links between DTC, Amazon, and omnichannel retail, ensuring every touchpoint contributes to measurable brand success.",
  buttonText: "Talk to an Amazon Expert.",
  buttonUrl: "/workwithus/",
  image: Amazon1.src,
  imageAlt: "Amazon Marketing Services"
};
// const amazonLearnMoreData = {
//   badge: "Learn more",
//   title: "Learn more about Amazon.",
//   description: "Your Amazon Questions Answered: Optimize, Strategize, and Grow with Burac.ai",
//   faqs: [
//     {
//       question: "What are the advantages of having one partner manage my DTC and Amazon marketing?",
//       answer: [
//         "Burac.ai creates unified, AI-driven strategies across DTC and Amazon to eliminate data silos, improve agility, and ensure consistent brand messaging. With one centralized system, we optimize performance, budget, and insights for scalable growth."
//       ]
//     },
//     {
//       question: "Will growing Amazon sales reduce conversions on my website?",
//       answer: [
//         "Not with the right approach. Amazon is where your customers already shop — the goal is to capture their intent efficiently. Our AI-powered models align both Amazon and DTC channels, ensuring growth complements your ecosystem rather than competes with it.",
//         "Burac.ai strategies unify channel data to maintain healthy margins while driving share growth, visibility, and sustained profitability."
//       ]
//     },
//     {
//       question: "If Amazon margins are lower, why invest in Amazon growth?",
//       answer: [
//         "Amazon offers unmatched scale and audience intent. Burac.ai’s systems analyze SKU-level data to find the profitability sweet spot — balancing visibility, velocity, and margin. The result: predictable ROI and optimized spend efficiency across all channels."
//       ]
//     },
//     {
//       question: "Is paid Amazon advertising essential?",
//       answer: [
//         "Yes. With thousands of new listings daily, visibility requires smart bidding and data modeling. Burac.ai’s adaptive AI bidding engine and predictive signals identify the best opportunities for ROI and growth, keeping you visible and profitable."
//       ]
//     },
//     {
//       question: "What drives organic ranking on Amazon?",
//       answer: [
//         "Burac.ai’s intelligence platform evaluates ranking signals such as CTR, conversion, fulfillment health, and off-Amazon engagement. Our AI maps relationships between external traffic, reviews, and algorithm shifts to continuously optimize your rank and reach."
//       ]
//     },
//     {
//       question: "How does Amazon DSP compare to other display platforms?",
//       answer: [
//         "Burac.ai leverages Amazon’s proprietary first-party data within our programmatic ecosystem, combining DSP’s deep audience intent with our machine learning attribution models. This enables precision targeting, full-funnel measurement, and seamless omnichannel execution."
//       ]
//     },
//     {
//       question: "What is Amazon Marketing Cloud, and how does Burac.ai use it?",
//       answer: [
//         "Amazon Marketing Cloud (AMC) allows privacy-safe, event-level data analysis. Burac.ai integrates AMC with our AI analytics layer to uncover deep insights — understanding customer overlap, lifetime value, and true channel incrementality across Amazon and DTC."
//       ]
//     },
//     {
//       question: "Can I use customer reviews to enhance my marketing strategy?",
//       answer: [
//         "Absolutely. Burac.ai’s natural language processing models analyze sentiment and keywords from customer reviews to improve listings, refine messaging, and guide product development — turning feedback into actionable data for growth."
//       ]
//     },
//     {
//       question: "How can I improve my product’s visibility on Amazon?",
//       answer: [
//         "By combining AI-driven SEO, optimized listings, and predictive ad spend allocation. Burac.ai’s algorithms adapt dynamically to keyword trends, pricing shifts, and competitor performance to maximize organic and paid visibility."
//       ]
//     },
//     {
//       question: "How do I track Amazon marketing performance with Burac.ai?",
//       answer: [
//         "We centralize all Amazon KPIs — from traffic to profitability — in real time. Burac.ai’s dashboards provide actionable insights, predictive forecasts, and automated optimizations so you’re always improving with each iteration."
//       ]
//     }
//   ]
// };

const amazonLearnMoreData = {
  badge: "Learn more",
  title: "Learn more about Amazon.",
  description:
    "Your Amazon Questions Answered: Optimize, Strategize, and Grow with Burac.ai",
  faqs: [
    {
      question:
        "What are the advantages of having one partner manage my DTC and Amazon marketing?",
      answer: [
        "Burac.ai provides unified, AI-driven strategies across DTC and Amazon to eliminate data silos, boost agility, and assure consistent brand message.   With one centralized system, we optimize performance, budget, and analytics for scalable growth.",
      ],
    },
    {
      question:
        "Will increased Amazon sales impact conversions on my website?",
      answer: [
        "Not with the correct approach.   Amazon is where your customers currently shop – the challenge is to capture their intent efficiently.   Our AI-powered models align both Amazon and DTC channels, ensuring growth complements your ecosystem rather than competes with it.",
        "Burac.ai strategies unify channel data to maintain healthy margins while driving share growth, visibility, and sustained profitability.",
      ],
    },
    {
      question:
        "If Amazon margins are lower, why invest in Amazon growth?",
      answer: [
        "Amazon offers unmatched scale and audience intent.   Burac.ai’s tools evaluate SKU-level data to locate the profitability sweet spot – balancing visibility, velocity, and margin.   The result: predictable ROI and optimal expenditure efficiency across all channels.",
      ],
    },
    {
      question: "Is paid Amazon advertising essential?",
      answer: [
        "Yes.   With thousands of new items daily, visibility requires smart bidding and data modeling.   Burac.ai’s adaptive AI bidding engine and predictive signals identify the best opportunities for ROI and growth, keeping you visible and profitable.",
      ],
    },
    {
      question: "What drives organic ranking on Amazon?",
      answer: [
        "Burac.ai’s intelligence platform evaluates ranking signals such as CTR, conversion, fulfillment health, and off-Amazon engagement.   Our AI maps relationships between external traffic, reviews, and algorithm shifts to continuously optimize your rank and reach.",
      ],
    },
    {
      question: "How does Amazon DSP compare to other display platforms?",
      answer: [
        "Burac.ai leverages Amazon’s proprietary first-party data within our programmatic ecosystem, combining DSP’s deep audience intent with our machine learning attribution models.   This enables precision targeting, full-funnel measurement, and seamless omnichannel execution.",
      ],
    },
    {
      question:
        "What is Amazon Marketing Cloud, and how does Burac.ai use it?",
      answer: [
        "Amazon Marketing Cloud (AMC) allows privacy-safe, event-level data analysis.   Burac.ai integrates AMC with our AI analytics layer to uncover deep insights — understanding customer overlap, lifetime value, and true channel incrementality across Amazon and DTC.",
      ],
    },
    {
      question:
        "Can I use customer reviews to enhance my marketing strategy?",
      answer: [
        "Absolutely.   Burac.ai’s natural language processing models analyze sentiment and keywords from customer reviews to improve listings, refine messaging, and guide product development — turning feedback into actionable data for growth.",
      ],
    },
    {
      question: "How can I improve my product’s visibility on Amazon?",
      answer: [
        "By combining AI-driven SEO, optimized listings, and predictive ad spend allocation.   Burac.ai’s algorithms adjust constantly to keyword trends, pricing shifts, and competitor performance to maximize organic and paid visibility.",
      ],
    },
    {
      question:
        "How do I track Amazon marketing performance with Burac.ai?",
      answer: [
        "We consolidate all Amazon KPIs — from traffic to profitability — in real time.   Burac.ai’s dashboards deliver actionable insights, predictive forecasts, and automated optimizations so you’re always improving with each iteration.",
      ],
    },
  ],
};


const amazonWhySectionData = {
  badge: "Why Burac.ai?",
  title: "Our cross-channel specialists and AI platform enable continual optimization for Amazon and entire brand growth. ",
  buttonText: "Get a free performance audit",
  buttonUrl: "/workwithus/",
  introText: "By working with Burac.ai, you gain:",
  contentItems: [
    {
      type: "list" as const,
      content: [
        "<b>Full-service management:</b> From Amazon shops to DSP strategy, Burac.ai automates performance tracking, catalog health, and optimization in one fluid workflow.",
        "<b>Specialized AI-driven teams:</b> Industry experts assisted by machine intelligence that continuously learns and adapts to your brand’s growth signals.",
        "<b>Adaptive marketplace intelligence:</b> Real-time analytics that evolve with your category, competitors, and customer trends."
      ]
    }
  ]
};

const amazonWorkWithData = {
  badge: "Work with Burac.ai",
  title: "Don’t simply grow on Amazon.  Grow through intelligent Amazon performance.",
  paragraphs: [
    "Today’s customers don’t differentiate where they shop — they expect a seamless, frictionless experience.  Burac.ai integrates Amazon, DTC, and retail into one adaptive growth engine.&nbsp;",
    "Traditional agencies treat Amazon as a sales channel; Burac.ai treats it as a data source for predicting growth.  Our integrated environment increases awareness, acquisition, and retention with measurable ROI.",
    "<b>Burac.ai’s Amazon intelligence unites data and activation — creating overall brand growth through omnichannel accuracy.</b>"
  ],
  buttonText: "Get in touch",
  buttonUrl: "/workwithus/",
  cards: [
    {
      icon: ServiceIcon1.src,
      title: "AI-Aligned Brand Experience",
      description: "From Amazon SEO to dynamic creative optimization, Burac.ai guarantees every listing reflects your brand identity and converts in competitive marketplaces. ",
      bgColor: "bg-secondary" as const,
      textColor: "#333333",
      iconColor: "invert(0)",
      alt: "Service Icon 1"
    },
    {
      icon: Layer11.src,
      title: "Full-Funnel Intelligence Strategy",
      description: "We activate every layer of Amazon’s ad tech — from search to DSP — backed by AI learning models that refine targeting, spend, and performance in real time. ",
      bgColor: "bg-primary" as const,
      textColor: "#ffffff",
      iconColor: "invert(1)",
      alt: "Layer 1-1"
    },
    {
      icon: Layer1.src,
      title: "Unified DTC + Amazon Growth",
      description: "Burac.ai unifies data from DTC, Amazon, and retail to demonstrate genuine effect across every channel – providing clarity, growth, and efficiency at scale.",
      bgColor: "bg-dark" as const,
      textColor: "#ffffff",
      iconColor: "invert(1)",
      alt: "Layer 1"
    }
  ]
};

const amazonServicesData = {
  badge: "Our Amazon Services",
  title: " Intelligent growth methods for every retailer.",
  description: "Burac.ai’s AI platform ensures your brand grabs new customers, increases market share, and expands financially across every channel. ",
  showButton: true,
  buttonText: "Request your free audit",
  buttonUrl: "/workwithus/",
  layout: "3-per-row" as const,
  items: [
    {
      title: "01 Analyze & Prioritize",
      description: "AI-powered audits reveal high-impact development opportunities across Amazon and retail.  We map strategies utilizing real-time KPIs, timetables, and trend models to accelerate lucrative outcomes. "
    },
    {
      title: "02 Align & Activate",
      description: "We coordinate your Amazon approach with full-funnel ecommerce goals – harmonizing data, creative, and media execution for seamless, multichannel development. "
    },
    {
      title: "03 Measure, Learn, Evolve",
      description: "Our AI continuously monitors performance signals, adjusts spend, and improves tactics — guaranteeing each campaign succeeds better than the last."
    }
  ]
};

const amazonCardSliderData = [
  {
    id: "catalog-management",
    title: "Catalog Optimization & Organic Intelligence",
    description: "AI-backed systems monitor catalog health, boost organic visibility, and ensure sustainable ranking improvements through predictive optimization.",
    image: image1.src,
    imageAlt: "Catalog Optimization & Organic Intelligence",
    bgColor: "bg-white" as const
  },
  {
    id: "product-page-creative",
    title: "Dynamic Product Experience",
    description: "Burac.ai’s creative engine designs Amazon-optimized visuals and messaging that convert intent into purchase — powered by adaptive testing.",
    image: image2.src,
    imageAlt: "Dynamic Product Experience",
    bgColor: "bg-secondary" as const
  },
  {
    id: "seo-algorithm",
    title: "AI-Powered Amazon SEO",
    description: "Machine learning models identify high-value keywords and content optimizations that maximize product discoverability and conversion.",
    image: image3.src,
    imageAlt: "AI-Powered Amazon SEO",
    bgColor: "bg-primary" as const
  },
  {
    id: "ppc-advertising",
    title: "Intelligent Amazon PPC",
    description: "Adaptive AI bidding automates spend allocation and keyword selection, driving efficiency and incremental sales growth on Amazon.",
    image: image4.src,
    imageAlt: "Intelligent Amazon PPC",
    bgColor: "bg-white" as const
  },
  {
    id: "dsp-advertising",
    title: "Amazon DSP + AI Precision",
    description: "Combining Amazon’s first-party data with Burac.ai’s algorithms, we target high-intent audiences across the funnel for measurable growth.",
    image: image5.src,
    imageAlt: "Amazon DSP + AI Precision",
    bgColor: "bg-secondary" as const
  },
  {
    id: "omnichannel-strategies",
    title: "Omnichannel Growth Intelligence",
    description: "Cross-channel campaigns powered by AI ensure your brand message and spend are optimized across retail, Amazon, and paid media.",
    image: image6.src,
    imageAlt: "Omnichannel Growth Intelligence",
    bgColor: "bg-primary" as const,
    links: [
      {
        text: "Paid Media",
        url: "/services/paid-media/"
      },
      {
        text: "Download the AI Accelerator Guide",
        url: "/resources/amazon-ai-growth-accelerator/"
      }
    ]
  },
  {
    id: "measurement-solutions",
    title: "AI Measurement & Attribution",
    description: "Real-time analytics powered by AI measure impact, test incrementality, and continuously refine campaigns for compounding performance gains.",
    image: image7.src,
    imageAlt: "AI Measurement & Attribution",
    bgColor: "bg-white" as const
  }
];

const AmazonMarketingPage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection data={amazonHeroSectionData} />

        {/* Text Banner */}
        <section className="text-banner bg-light">
          <p>Don’t settle for ordinary.</p>
          <h3>
            Partner with <span>extraordinary.</span>
          </h3>
        </section>

        {/* Work With */}
        <WorkWith data={amazonWorkWithData} />
        <section className="multi-text-section bg-light">
          <Services data={amazonServicesData} />

          <Cardslider data={amazonCardSliderData} />
        </section>
        <WhySection data={amazonWhySectionData} />
        <LearnMore data={amazonLearnMoreData} />
      </main>



    </>
  );
};

export default AmazonMarketingPage;
