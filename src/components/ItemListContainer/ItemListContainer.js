import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../Api";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting = "Hello" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="itemListContainer">
      <h1>{greeting}</h1>
      <ItemList products={products} />
      {loading && <p>Loading products...</p>}
    </div>
  );
};

export default ItemListContainer;
