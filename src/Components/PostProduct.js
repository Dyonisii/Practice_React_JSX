import React from "react";
import NewsDate from "../data/date.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PostProduct(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={NewsDate.products[props.id].img} />
      <Card.Body>
        <Card.Title>{NewsDate.products[props.id].title}</Card.Title>
        <Card.Text>
          <p>{NewsDate.products[props.id].price}</p>
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}
