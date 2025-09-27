import React from "react";
import ProductCard from "../components/ProductCard";
import './Home.css'

export default function Home({ products = [] }) {
  return (
    <div className="home-container">
      {/* بنر خوش‌آمدگویی */}
      <section className="home-banner">
        <h1> !به فروشگاه ما خوش آمدید</h1>
        <p>جدیدترین محصولات و پیشنهادهای ویژه را اینجا ببینید.</p>
      </section>

      {/* جستجو */}
      <section className="home-search">
        <input type="text" placeholder="جستجوی محصول..." />
        <button>جستجو</button>
      </section>

      {/* محصولات ویژه */}
      <section className="home-products">
        <h2>محصولات ویژه</h2>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}