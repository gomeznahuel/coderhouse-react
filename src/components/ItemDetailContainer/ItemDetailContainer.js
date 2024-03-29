import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

import { getDoc, doc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase/firebase";

import { useNotificationServices } from '../../services/notification/NotificationServices'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const setNotification = useNotificationServices()

  useEffect(() => {
    setLoading(true);
    getDoc(doc(firestoreDb, `products/${id}`))
      .then((response) => {
        const product = { id: response.id, ...response.data() };
        setProduct(product);
      })
      .catch((error) => {
        setNotification('error',`Error buscando producto: ${error}`)
      }) 
      .finally(() => {
        setLoading(false);
        setShowDetails(true);
      });
  }, [id]); // eslint-disable-line

  return (
    <div className="itemDetailContainer">
      {showDetails && <ItemDetail product={product} />}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ItemDetailContainer;
