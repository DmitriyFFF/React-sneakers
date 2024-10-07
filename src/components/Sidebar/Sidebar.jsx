import { useContext, useState } from 'react';
import axios from 'axios';

import { SidebarInfo } from '../SidebarInfo/SidebarInfo';
// import { AppContext } from '../../utils/context/context';

import styles from './Sidebar.module.scss';
import { baseUrl, delay } from '../../utils/constants';
import { useCartPrice } from '../../utils/hooks/useCartPrice';

export const Sidebar = ({onClose, onRemove, items = []}) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems, setCartItems, totalPrice } = useCartPrice();
  // const { cartItems, setCartItems } = useContext(AppContext);

  const handleClickOrder = async () => {
    // axios.post('https://66abc54ff009b9d5c73049f1.mockapi.io/orders', cartItems); //отправка заказа на сервер
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${baseUrl}/orders`, {
        items: cartItems
      });
      setOrderId(data.id)
      setIsOrdered(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`${baseUrl}/cart/${item.id}`);
        await delay(1000);
      }
    } catch (error) {
      alert('Не удалось оформить заказ!');
      console.log(error);
    }
    setIsLoading(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={`${styles.content} d-flex flex-column`}>
          <h2 className={`${styles.title} d-flex justify-between align-center mb-30`}>Корзина
            <img className='cu-p' src="./img/removeBtn.svg" alt="Закрыть" onClick={onClose}/>
          </h2>
          {items.length > 0 ?
            <>
              <ul className={styles.cartItems}>
                {items.map(item => (
                  <li className={`${styles.cartItem} d-flex align-center mb-20`} key={item.id}>
                    <img className={styles.image} src={item.imageUrl} alt="Кроссовки" />
                    <div className={styles.itemInfo}>
                      <p className={styles.itemName}>{item.name}</p>
                      <b className={styles.itemPrice}>{item.price} руб.</b>
                    </div>
                    <button className={styles.removeButton}>
                      <img
                        className={styles.btnImage}
                        onClick={() => onRemove(item.id)}
                        src="./img/removeBtn.svg"
                        alt="Remove" />
                    </button>
                  </li>
                ))}
              </ul>
              <div>
                <ul className='mb-25'>
                  <li className={`${styles.orderItem} d-flex justify-between mt-20`}>
                    <p className='opacity-5'>Итого:</p>
                    <p>{totalPrice} руб.</p>
                  </li>
                  <li className={`${styles.orderItem} d-flex justify-between mt-20`}>
                    <p className='opacity-5'>Налог 5%:</p>
                    <p>{totalPrice / 100 * 5} руб.</p>
                  </li>
                </ul>
                <button
                  className={`${styles.submitBtn} d-flex justify-center align-center`}
                  onClick={handleClickOrder}
                  disabled={isLoading}>Оформить заказ
                  <img className={styles.arrow} src="./img/arrow.svg" alt="Стрелка"/>
                </button>
              </div>
            </>
            :
            <SidebarInfo
              title={isOrdered ? "Заказ оформлен!" : "Корзина пустая"}
              image={isOrdered ? "./img/order_completed.svg" : "./img/empty_cart.svg"}
              description={isOrdered ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
            />
          }
        </div>
      </div>
    </div>
  );
}
