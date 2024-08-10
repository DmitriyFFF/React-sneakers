import { Cards } from "../components/Cards/Cards";

export const Home = ({ items, handleAddCart, handleAddFavorites }) => {
  return (
    <>
      <Cards
        items={items}
        onAddCart={handleAddCart}
        onAddFavorite={handleAddFavorites} />
    </>
  )
};
