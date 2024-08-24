import { Cards } from "../../components/Cards/Cards";
import styles from "./Home.module.scss"

export const Home = ({ items, cartItems, handleAddCart, handleAddFavorites }) => {
  return (
    <div className={styles.content}>
      <Cards
        items={items}
        cartItems={cartItems}
        onAddCart={handleAddCart}
        onAddFavorite={handleAddFavorites} />
    </div>
  )
};
