import React from "react";
import { CardDeck } from "react-bootstrap";
import PostProduct from "../Components/PostProduct";
import NewsDate from "../data/date.json";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <CardDeck>
        {NewsDate.products.map((products, index) => {
          return <PostProduct id={index} />;
        })}
      </CardDeck>
    </div>
  );
}
