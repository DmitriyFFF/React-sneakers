import styles from './Sidebar.module.scss';

export const Sidebar = ({onClose}) => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={`${styles.content} d-flex flex-column`}>
          <h2 className={`${styles.title} d-flex justify-between align-center mb-30`}>Корзина
            <img className='cu-p' src="./img/removeBtn.svg" alt="Close" onClick={onClose}/>
          </h2>
          <ul className={styles.cartItems}>
            <li className={`${styles.cartItem} d-flex align-center mb-20`}>
              <img className={styles.image} src="./img/sneakers/sn1.jpg" alt="" />
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b className={styles.itemPrice}>12 999 руб.</b>
              </div>
              <button className={styles.removeButton}>
                <img className={styles.btnImage} src="./img/removeBtn.svg" alt="Remove" />
              </button>
            </li>
            <li className={`${styles.cartItem} d-flex align-center mb-20`}>
              <img className={styles.image}src="./img/sneakers/sn2.jpg" alt="" />
              <div className={styles.itemInfo}>
                <p className={styles.itemName}>Мужские Кроссовки Nike Air Max 270</p>
                <b className={styles.itemPrice}>8 499 руб.</b>
              </div>
              <button className={styles.removeButton}>
                <img className={styles.btnImage} src="./img/removeBtn.svg" alt="Remove" />
              </button>
            </li>
          </ul>
          <div>
            <ul className='mb-25'>
              <li className={`${styles.orderItem} d-flex justify-between mt-20`}>
                <p className='opacity-5'>Итого:</p>
                <p>21 498 руб.</p>
              </li>
              <li className={`${styles.orderItem} d-flex justify-between mt-20`}>
                <p className='opacity-5'>Налог 5%:</p>
                <p>1074 руб.</p>
              </li>
            </ul>
            <button className={`${styles.submitBtn} d-flex justify-center align-center`}>Оформить заказ
              <img className={styles.arrow} src="./img/arrow.svg" alt="Arrow"/>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
