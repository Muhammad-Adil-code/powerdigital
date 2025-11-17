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

const HeroSectionData = {
    badge: "GROWTH MARKETING",
    title: "Cool factor isn’t accidental—it’s engineered. Strategized. Executed.",
    description: "With decades of experience launching the most disruptive brands, we know what it takes to create buzz, build lasting recognition, and turn customers into evangelists—all without compromise.",
    buttonText: "Get a Proposal",
    buttonUrl: "#",
    image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Public_Relations.png",
    imageAlt: "Amazon Marketing Services"
};

const WorkWithData = {
    badge: "Work with Burac.ai ",
    title: "Our PR team makes your brand the star of the show.",
    paragraphs: [
        "Burac.ai  public relations division is your all-in-one solution for strategic brand awareness and product recognition. Our approach combines analytics with creativity, delivering measurable results across multiple platforms.",
        "From top-tier outlets like The New York Times and Forbes to trendsetting publications such as Vogue and Food & Wine, we cultivate relationships that amplify your brand. With strong connections to media, affiliates, influencers, brand teams, and celebrity management, we create stories that resonate, cross platforms, and build lasting impact."
    ],
    buttonText: "Get in touch",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    cards: [
        {
            icon: ServiceIcon1.src,
            title: "Data-Driven PR",
            description: "We leverage proprietary technology and analytics no other agency has to maximize media impact and results.",
            bgColor: "bg-primary" as const,
            textColor: "#ffffff",
            iconColor: "invert(1)",
            alt: "Service Icon 1"
        },
        {
            icon: Layer11.src,
            title: "Strategic Expertise",
            description: "From traditional media relations to <a href=\"https://powerdigitalmarketing.com/services/affiliate-marketing/\" target=\"_blank\" rel=\"noopener\">affiliate marketing</a>, celebrity collaborations, and creative activations, we design integrated campaigns aligned with your broader marketing goals.",
            bgColor: "bg-secondary" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Layer 1-1"
        },
        {
            icon: Layer1.src,
            title: "Elite Storytelling",
            description: "We craft compelling narratives and leverage decades of media relationships to amplify your brand’s voice. Need guidance refining your story? We’ve got you covered.",
            bgColor: "bg-white" as const,
            textColor: "#333333",
            iconColor: "invert(0)",
            alt: "Layer 1"
        }
    ]
};

const ServicesData = {
    badge: "Our PR Services",
    title: "We examine every angle of your marketing to deliver strategic recommendations that elevate your brand.",
    description: "Effective PR goes beyond traditional media—it’s about connecting with your audience repeatedly across digital and in-person touchpoints.",
    description2: "Our holistic approach integrates PR, affiliate, influencer, and marketing tactics to generate ongoing buzz and brand evangelism.",
    showButton: false,
    buttonText: "Get a free marketing audit",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    layout: "3-per-row" as const,
    items: [
        {
            title: "01 Strategy",
            description: "We develop data-informed PR strategies that merge proven tactics with measurable outcomes."
        },
        {
            title: "02 360° Storytelling",
            description: "We dig deep into your brand to craft narratives that capture attention, whether it’s a feature placement or a shoppable holiday guide."
        },
        {
            title: "03 Opening Doors",
            description: "We create brand-to-brand and celebrity partnerships that expand your reach and unlock new audiences."
        },
        {
            title: "04 Experiential Impact",
            description: "From activations to conferences and live events, we ensure your brand captivates audiences in person."
        },
        {
            title: "05 Idea Shop",
            description: "Our creative hub develops impactful ideas that resonate across paid, earned, and social channels, ensuring your brand makes waves at every touchpoint."
        },
        {
            title: "06 Thought Leadership",
            description: "We elevate executives and founders through media features, speaking engagements, awards, podcasts, and media training to amplify credibility and influence."
        }
    ]
};

const CardSliderData = [
    {
        id: "media-relations",
        title: "Media Relations",
        description: "We craft compelling stories and secure the placements that make lasting impressions.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Event-Opportunities-768x768.jpg",
        imageAlt: "Media Relations",
        bgColor: "bg-white" as const
    },
    {
        id: "campaigns-activations",
        title: "Campaigns + Activations",
        description: "Showstopping stunts, memorable live experiences, and viral moments that drive brand conversations.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Possible-Story-Angles-768x768.jpg",
        imageAlt: "Campaigns + Activations",
        bgColor: "bg-secondary" as const
    },
    {
        id: "thought-leadership",
        title: "Thought Leadership",
        description: "Boost your brand’s authority through interviews, op-eds, speaking opportunities, and strategic features.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Best-Media-Matches1-768x768.jpg",
        imageAlt: "Thought Leadership",
        bgColor: "bg-primary" as const
    },
    {
        id: "partnerships",
        title: "Partnerships",
        description: "Strategic collaborations across brands and categories that grow reach and enhance marketing impact.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/01/0_1-2-768x768.jpg",
        imageAlt: "Partnerships",
        bgColor: "bg-white" as const
    },
    {
        id: "award-submissions",
        title: "Award Submissions",
        description: "We identify the best opportunities for your brand to gain recognition and credibility through awards.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/11/Display-and-Native-768x768.jpg",
        imageAlt: "Award Submissions",
        bgColor: "bg-secondary" as const
    },
    {
        id: "affiliate-marketing",
        title: "Affiliate Marketing",
        description: "Strategic integration with PR ensures top-of-funnel opportunities are maximized across consumer media.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2025/01/0_3-5-768x768.jpg",
        imageAlt: "Affiliate Marketing",
        bgColor: "bg-primary" as const
    },
    {
        id: "corporate-crisis-communications",
        title: "Corporate + Crisis Communications",
        description: "Expert guidance and messaging support to navigate challenging situations and protect your brand’s reputation.",
        image: "https://powerdigitalmarketing.com/wp-content/uploads/2024/12/0_2-1-768x768.jpg",
        imageAlt: "Corporate + Crisis Communications",
        bgColor: "bg-white" as const
    }
];

const WhySectionData = {
    badge: "Why Burac.ai ?",
    title: "Discover how Burac.ai PR elevates your brand.",
    buttonText: "Learn more about our Idea Shop",
    buttonUrl: "https://powerdigitalmarketing.com/work-with-us/",
    introText: "",
    contentItems: [
        {
            type: "list" as const,
            content: [
                "We stay at the forefront of the evolving PR landscape, building brand voice, awareness, and credibility across the media your customers consume daily.",
                "Our PR team specializes in CPG, beauty, lifestyle, health & wellness, hospitality, celebrity partnerships, affiliate marketing, and B2B. We help your brand break through the noise, strengthen reputation, and drive tangible business growth."
            ]
        }
    ]
};

const LearnMoreData = {
    badge: "Learn more",
    title: "Learn More About PR",
    description: "",
    faqs: [
        {
            question: "The state of PR",
            answer: [
                "PR has evolved dramatically—media landscapes have shifted, paid and earned lines are blurred, and competition is intense.",
                "Burac.ai  leverages this landscape to create PR strategies that work across the full marketing funnel. We combine data-driven insights with creativity to cultivate relationships, build credibility, and secure impactful press for our clients."
            ]
        },
        {
            question: "What type of press can you expect?",
            answer: [
                "Coverage depends on your brand and goals. We secure placements in top-tier publications, digital outlets, trade media, print magazines, broadcast, and podcasts, from product features to founder profiles."
            ]
        },
        {
            question: "Our approach to media relations",
            answer: [
                "We maintain authentic relationships with media across verticals, from freelancers to editors-in-chief, segment producers, and social media editors. We know who wants to tell your story—and how to get it done."
            ]
        },
        {
            question: "How does Burac.ai  measure PR ROI?",
            answer: [
                "We combine qualitative and quantitative metrics, including placements, impressions, VIP engagement, awards, partnerships, and coverage visibility. Qualitative goals like securing page-one newspaper features or celebrity product exposure are also considered to align with your business objectives."
            ]
        },
        {
            question: "What is Performance PR?",
            answer: [
                "Performance PR blends traditional PR with affiliate strategies to maximize top-of-funnel brand exposure and consumer media opportunities."
            ]
        },
        {
            question: "How much does PR cost?",
            answer: [
                "PR strategies are customized to your brand’s unique needs and goals. Contact us for a consultation and tailored plan."
            ]
        },
        {
            question: "Why does my brand need PR?",
            answer: [
                "PR shapes and maintains brand reputation, crafts key narratives, and connects with target audiences. Strategic PR builds credibility, trust, and long-term brand value."
            ]
        },
        {
            question: "What is influencer and tastemaker outreach, and how can it benefit my brand?",
            answer: [
                "We collaborate with influencers and tastemakers whose audiences align with your target market. These partnerships increase brand awareness, foster authentic connections, and drive engagement both online and offline."
            ]
        },
        {
            question: "What types of brands benefit most from PR?",
            answer: [
                "Brands of all sizes and industries can benefit from PR—whether launching a new product, increasing awareness, or reshaping a brand narrative."
            ]
        },
        {
            question: "How can PR help during a product launch?",
            answer: [
                "PR drives awareness for product launches by securing media coverage, leveraging <a href=\"https://powerdigitalmarketing.com/services/influencer-marketing/\">influencer marketing</a>, activating partnerships, and creating buzz through events and experiences."
            ]
        },
        {
            question: "What is the difference between earned, owned, and paid media?",
            answer: [
                "Earned media is organic coverage, owned media is content you control, and paid media is advertising. Integrated strategies using all three deliver maximum impact."
            ]
        },
        {
            question: "How does PR differ from traditional advertising?",
            answer: [
                "PR focuses on earned media, storytelling, and relationship-building to generate credibility and authentic engagement, while advertising relies on paid placements."
            ]
        },
        {
            question: "What is crisis communication?",
            answer: [
                "Crisis communication manages negative events or publicity through strategic messaging to protect reputation, maintain transparency, and rebuild trust."
            ]
        }
    ]
};



const PublicRelationsPage = () => {
    return (
        <>
            <Fullheader/>
            <main>
                <HeroSection data={HeroSectionData} />

                {/* Text Banner */}
                <section className="text-banner bg-light">
                    <p>Burac.ai PR hits different.</p>
                    <h3>
                       Where <span>art + science meet.</span>
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

export default PublicRelationsPage;
