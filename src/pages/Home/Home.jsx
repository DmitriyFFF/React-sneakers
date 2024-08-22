import { Cards } from "../../components/Cards/Cards";
import styles from "./Home.module.scss"

export const Home = ({ items, handleAddCart, handleAddFavorites }) => {
  return (
    <div className={styles.content}>
      <Cards
        items={items}
        onAddCart={handleAddCart}
        onAddFavorite={handleAddFavorites} />
    </div>
  )
};
