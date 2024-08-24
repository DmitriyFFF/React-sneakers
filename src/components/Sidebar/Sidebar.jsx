import styles from './Sidebar.module.scss';

export const Sidebar = ({onClose, onRemove, items = []}) => {
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
                    <p>21 498 руб.</p>
                  </li>
                  <li className={`${styles.orderItem} d-flex justify-between mt-20`}>
                    <p className='opacity-5'>Налог 5%:</p>
                    <p>1074 руб.</p>
                  </li>
                </ul>
                <button className={`${styles.submitBtn} d-flex justify-center align-center`}>Оформить заказ
                  <img className={styles.arrow} src="./img/arrow.svg" alt="Стрелка"/>
                </button>
              </div>
            </>
            :
            <div className='d-flex flex-column justify-center align-center flex'>
              <img className={`${styles.emptyCartImage} mb-20`} src="./img/empty_cart.svg" alt="Пустая коробка" />
              <h3 className={styles.emptyCartTitle}>Корзина пустая</h3>
              <p className={`${styles.emptyCartText} opacity-5`}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              <button
                className={`${styles.btnBack} d-flex justify-center align-center mt-40`}
                onClick={onClose}
              >Вернуться назад
                <img className={styles.arrowBack} src="./img/arrow.svg" alt="Стрелка"/>
              </button>
            </div>
          }






        </div>
      </div>

    </div>
  );
}
