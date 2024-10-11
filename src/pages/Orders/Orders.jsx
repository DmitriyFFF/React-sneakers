import React, { useEffect, useState } from "react";
import axios from "axios";

import { Card } from "../../components/Card/Card";
import { baseUrl } from "../../utils/constants";

import styles from "./Orders.module.scss"

export const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      (async() => {
        const { data } = await axios.get(`${baseUrl}/orders`);
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      })();
    } catch (error) {
      alert('Ошибка при запросе заказа');
      console.error(error);
    }
  }, []);

  return (
    <div className='d-flex flex-column justify-between mb-30 p-40'>
      <h1 className={styles.title}>Мои заказы</h1>
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
