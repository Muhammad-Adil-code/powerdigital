"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import OrganicSocialvsPaidSocialMedia from '../../images/8_Organic-Social-vs.-Paid-Social-Media.png';
import ConversionRateOptimizationStrategies from '../../images/7_10-Winning-Conversion-Rate-Optimization-Strategies.jpg';
import AntiChurnPlaybook from '../../images/The-Anti-Churn-Playbook.png';
import WhyYourPreviousAgency from '../../images/Why-Your-Previous-Agency.png';
import enlgishdeni from '../../images/enlgishdeni.png';
import f008e1 from '../../images/49f008e1-86c3-4b30-badc-6cb561c3a69f.png';
import e994a11 from '../../images/6e994a11-f604-4610-9c7f-b1b40c577772.png';
import q4review from '../../images/q4-review.png';
import wastedad from '../../images/wastedad.png';
import holidayshop from '../../images/holidayshop-1024x683.jpg';
import b6bc2835 from '../../images/b6bc2835-dd5e-42f4-aab4-0f1283492d0b.png';
import foodbeverage from '../../images/food-beverage.png';
import FashionTariffSqueeze from '../../images/Fashion-Brands-Are-Starting.png';

export default function View() {
const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const posts = [
  {
    title: "Organic Social vs. Paid Social Media: Which You Need",
    author: "Tara Johnson | October 17, 2025",
    image: OrganicSocialvsPaidSocialMedia.src,
    href: "https://powerdigitalmarketing.com/blog/organic-vs-paid-social-media/",
    categories: ["Digital Marketing", "Social Media"],
  },
  {
    title: "10 Winning Conversion Rate Optimization Strategies",
    author: "Tara Johnson | October 17, 2025",
    image: ConversionRateOptimizationStrategies.src,
    href: "https://powerdigitalmarketing.com/blog/conversion-rate-optimization-strategies/",
    categories: ["CRO", "Digital Marketing"],
  },
  {
    title: "The Anti-Churn Playbook: How to Keep Customers in a Post-Promo Era",
    author: "Tara Johnson | October 17, 2025",
    image: AntiChurnPlaybook.src,
    href: "https://powerdigitalmarketing.com/blog/anti-churn-playbook-fashion/",
    categories: ["Customer Retention", "eCommerce"],
  },
  // ...add categories for all posts
];


  return (
<>
<section className="section-blog">
      <div className="section-blog__filters">
        <div className="list-tags">
          <a className="badge rounded-pill " href="/blog/">
            Show All
          </a>
          <a className="badge rounded-pill " href="/blog/category/press/">
            Press
          </a>
          <a className="badge rounded-pill " href="/blog/category/blog-post/">
            Blog Post
          </a>
        </div>
        <div className="service-list">
  {[
    "All",
    "Affiliate Marketing",
    "AI",
    "Amazon Marketing",
    "B2B",
    "Brand Building",
    "Content Marketing",
    "CRO",
    "Customer Retention",
    "Design",
    "Digital Marketing",
    "eCommerce",
    "Email Marketing",
    "Marketing",
    "Measurement",
    "SEO",
    "Social Media",
    "Web Development",
  ].map((category) => (
    <a
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`category-btn ${
        selectedCategory === category ? "active" : ""
      }`}
    >
      {category}
    </a>
  ))}
</div>

      </div>
      <div className="section-blog__posts-area">
        <div className="section-blog__search">
          <form
            role="search"
            method="get"
            className="ajax-search-form"
            action=""
          >
            <input
              type="search"
              name="posts_search"
              placeholder="Search for posts..."
              className="search-field"
            />
            <input type="hidden" name="post_type" defaultValue="post" />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="section-blog__posts">
  {posts
    .filter((post) =>
      selectedCategory === "All"
        ? true
        : post.categories.includes(selectedCategory)
    )
    .map((post) => (
      <article key={post.href} className="article-card">
        <div className="article-card__content">
          <div className="tags">{post.categories.join(", ")}</div>
          <h3 className="title">{post.title}</h3>
          <p className="autor">{post.author}</p>
        </div>
        <div className="article-card__image">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={675}
          />
        </div>
        <div className="article-card__action">
          <a
            href={post.href}
            className="btn btn--round btn-light stretched-link"
          >
            <div className="icon">
              <i className="icon-arrow-up-right" />
            </div>
          </a>
        </div>
      </article>
    ))}
</div>

        <div className="view-more-btn w-100 text-center">
          <a href="" className="btn btn-secondary more-articles">
            <div className="icon">
              <span>View more</span>
            </div>
          </a>
        </div>
      </div>
    </section>
</>  )
}
