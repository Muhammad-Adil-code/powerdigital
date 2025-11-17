"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import bb4ee48 from '../../images/7bb4ee48-90f0-4e4c-a228-57f1ca398e6d-e1752261316239.png';
import a0b from '../../images/45140a0b-ddac-4e68-958e-d01fcc685658.png';
import mobile from '../../images/mobile-how-often-to-go-to-the-gym.jpg';
import da3cd539 from '../../images/da3cd539-f992-4f2a-873c-addfb4b5dd02.png';
import children from '../../images/children-clothes.png';
import guitar from '../../images/guitar-iconic.png';
import pasta from '../../images/pasta.png';
import better from '../../images/better-4-u-snack-feature-scaled.jpg';

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const posts = [
    {
      title: "Organic Social vs. Paid Social Media: Which You Need",
      author: "Tara Johnson | October 17, 2025",
      image: bb4ee48.src,
      href: "https://powerdigitalmarketing.com/blog/organic-vs-paid-social-media/",
      categories: ["Digital Marketing", "B2B Marketing"],
    },
    {
      title: "10 Winning Conversion Rate Optimization Strategies",
      author: "Tara Johnson | October 17, 2025",
      image: a0b.src,
      href: "https://powerdigitalmarketing.com/blog/conversion-rate-optimization-strategies/",
      categories: ["CRO", "Consumer Product"],
    },
    {
      title: "The Anti-Churn Playbook: How to Keep Customers in a Post-Promo Era",
      author: "Tara Johnson | October 17, 2025",
      image: mobile.src,
      href: "https://powerdigitalmarketing.com/blog/anti-churn-playbook-fashion/",
      categories: ["Consumer Service", "eCommerce"],
    },
    // ...add categories for all posts
  ];
  return (
    <>
     <section className="section-blog section-blog--case">
      <div className="section-blog__filters">
        <div className="list-tags">
          <a className="badge rounded-pill bg-dark" href="/case-studies/">
            Show All
          </a>
        </div>
              <div className="service-list">
  {[
    "B2B Marketing",
    "Consumer Product",
    "Consumer Service",
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
            <input type="hidden" name="post_type" defaultValue="case-studies" />
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
    </>
  )
}
