"use server"

import ServiceIcon1 from "../services/amazon-marketing/images/service-icon-1.svg"
import Layer11 from "../services/amazon-marketing/images/Layer_1-1.svg"
import Layer1 from "../services/amazon-marketing/images/Layer-1.svg"
import Amazon1 from "../services/amazon-marketing/images/Amazon-1.png"
import Header from '../../components/consumer/header';
import Cardslider from '../services/maincomonents/cardslider';
import HeroSection from '../services/maincomonents/herosection';
import LearnMore from '../services/maincomonents/learnmore';
import WhySection from '../services/maincomonents/whysection';
import WorkWith from '../services/maincomonents/workwith';
import Services from '../services/maincomonents/Services';


const optimizeAdvertisingWorkWithData = {
  badge: "STRATEGY",
  title: "Optimize Advertising",
  paragraphs: [
    "Maximize the impact of every marketing dollar with accurate, actionable data and insights.",
    "<b>Burac.ai  can design and manage your modern data stack</b> - enabling precise measurement, secure data handling, and activation across your first-party datasets tailored to your business needs."
  ],
  buttonText: "Get in touch",
  buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
  cards: [
    {
      icon: ServiceIcon1.src,
      title: "Performance",
      description: "Minimize data signal loss and improve ad platform effectiveness. Platforms like Meta, TikTok, and Google perform better when server-to-server feedback loops are implemented, boosting incrementality and ROI.",
      bgColor: "bg-secondary" as const,
      textColor: "#333333",
      iconColor: "invert(0)",
      alt: "Performance Icon"
    },
    {
      icon: Layer11.src,
      title: "Future-Proofing",
      description: "Build a cookieless, first-party data infrastructure designed to adapt to future privacy changes and evolving platform requirements.",
      bgColor: "bg-primary" as const,
      textColor: "#ffffff",
      iconColor: "invert(1)",
      alt: "Future-Proofing Icon"
    },
    {
      icon: Layer1.src,
      title: "Privacy",
      description: "Ensure compliance with GDPR, CCPA, and other privacy regulations. Safely advertise to new and existing customers while respecting evolving data privacy standards.",
      bgColor: "bg-white" as const,
      textColor: "#333333",
      iconColor: "invert(0)",
      alt: "Privacy Icon"
    }
  ]
};

const dataChallengesServicesData = {
  badge: "ANALYSIS",
  title: "Overcome Data Challenges",
  description: "",
  showButton: true,
  buttonText: "How we work",
  buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
  layout: "2-per-row" as const,
  items: [
    {
      title: "Data Volume",
      description: "Simplify and integrate large, complex datasets from multiple channels and revenue streams. Our infrastructure solutions help your business scale while keeping data manageable and actionable."
    },
    {
      title: "Compliance",
      description: "Navigate GDPR, CCPA, and other data regulations with confidence. Avoid performance risks, audits, or fines by implementing compliant and secure systems."
    },
    {
      title: "Data Quality",
      description: "Maintain accurate, up-to-date data with rigorous QA protocols. Ensure all business decisions are based on high-quality, reliable information."
    },
    {
      title: "Integration",
      description: "Connect and centralize your data into a single source of truth. Align teams with consistent definitions, KPIs, and metrics across your organization."
    }
  ]
};

const dataStackCardSliderData = [
  {
    id: "scalable-infrastructure",
    title: "Scalable Infrastructure",
    description: "A robust foundation that grows with your business. Build long-lasting data architecture to support goals like expansion, IPOs, or multi-figure revenue growth.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/05/6e5a3c9229d015405348b2616b9f3db89d16f7f3-768x362.jpg",
    imageAlt: "Scalable Infrastructure",
    bgColor: "bg-grey" as const
  },
  {
    id: "data-ownership",
    title: "Data Ownership",
    description: "Take full control of your first-party data to grow recurring revenue and make smarter business decisions. Proper organization of customer data enables scalable growth.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/05/58a79107a03cfbe6d079080a4978ec99caa94223-768x432.jpg",
    imageAlt: "Data Ownership",
    bgColor: "bg-primary" as const
  },
  {
    id: "etl",
    title: "ETL",
    description: "Centralized cloud-native warehouse solutions using Google Cloud or Snowflake. We help you select and implement the best solution for your business needs.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/05/e9a993a2e6c60d71b41ce237400e2207110be60c-768x504.jpg",
    imageAlt: "ETL",
    bgColor: "bg-white" as const
  },
  {
    id: "data-transformation-pipelines",
    title: "Data Transformation and Pipelines",
    description: "Transform and organize your data with dbt to create actionable, reliable insights that drive smarter marketing and business decisions.",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/05/e0d9272cafe5686a499ad84b6d625f5c6f55dc93-768x276.jpg",
    imageAlt: "Data Transformation and Pipelines",
    bgColor: "bg-secondary" as const
  }
];


const AmazonMarketingPage = () => {
  return (
    <>
      <style>
        {`
        .intro-twos-columns__col .btn.btn-secondary{
        display: none;
        }
      `}
      </style>
      <Header />
      <main>
        <section className="single-hero bg-light  bordered-section ">
          <div className="single-hero__text">
            <span className="badge rounded-pill bg-light">Data Infrastructure + CDPs</span>

            <div className="title">
              <h1>Making smart decisions requires <span className="highlighted">accurate and accessible data.</span>  </h1>
            </div>
            <div className="text">
              <p>We build and manage modern data stacks that simplify your data management, integrate all of your different sources, and create actionable insights that lead to smart decisions.</p>

            </div>
            <a href="https://powerdigitalmarketing.com/work-with-us/" className="btn btn-secondary">
              <div className="icon">
                <span>Request a consultation</span>
                <i className="icon-arrow-up-right"></i>
              </div>
            </a>
          </div>

          <div className="single-hero__image">
            <div className="single-badge">
            </div>

            <img src="https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Data-Infrastructure-CDPs.png" alt="" />
          </div>
        </section>

        <section className="multi-text-section bg-light">
          <Services data={dataChallengesServicesData} />
        </section>

        <section className="multi-text-section bg-dark">
          <div className="multi-text-section__text">
            <div className="title">
              <span className="badge rounded-pill bg-light">data</span>
              <h2>Build a Modern Data Stack</h2>

            </div>
            <div className="paragraph">

            </div>
          </div>
          <Cardslider data={dataStackCardSliderData} />
        </section>

        <WorkWith data={optimizeAdvertisingWorkWithData} />
      </main>



    </>
  );
};

export default AmazonMarketingPage;
