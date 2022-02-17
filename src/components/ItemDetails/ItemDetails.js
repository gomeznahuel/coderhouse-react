import React from "react";
import "./ItemDetails.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ItemDetails = ({ product }) => {
  const onAdd = (count) => {
    console.log(`Se agregaron ${count} "${product.name}" al carrito!`);
  };

  return (
    <div className="itemDetails">
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>

      <ItemCount stock={5} initial={1} onAdd={onAdd} />

      <Link to="/products">
        <Button margin=".6rem 0 0 0" name="Go back!" />
      </Link>
    </div>
  );
};

export default ItemDetails;
