import React from "react";
import { useParams } from "react-router-dom";
import products from "./Products";
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p>محصول پیدا نشد</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="detail-info">
        <h1>{product.title}</h1>
        <p className="price">{product.price.toLocaleString()} تومان</p>
        <p>توضیحات این محصول در این بخش قرار می‌گیرد.</p>
        <button>افزودن به سبد خرید</button>
      </div>
    </div>
  );
}