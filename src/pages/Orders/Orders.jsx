import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { AppContext } from "../../utils/context/context";
import styles from "./Orders.module.scss"
import axios from "axios";
import { baseUrl } from "../../utils/constants";
// import { Cards } from "../components/Cards/Cards";

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const { handleAddFavorites, handleAddCart } = useContext(AppContext);

  useEffect(() => {
    try {
      (async() => {
        const { data } = await axios.get(`${baseUrl}/orders`);
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      })()
    } catch (error) {
      alert('Ошибка при запросе заказа');
      console.error(error);
    }
  }, []);

  return (
    <div className='d-flex flex-column justify-between mb-30 p-40'>
      <h1 className={styles.title}>Мои закладки</h1>
      <ul className={`${styles.content} d-flex justify-center`}>
        {(isLoading ? [...Array(8)] : orders).map((item, index) =>
          <Card
            key={index}
            isLoading={isLoading}
            {...item}
          />
        )}
      </ul>
    </div>
  )
};
