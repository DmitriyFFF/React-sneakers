import React, { useContext } from "react";
import { Card } from "../../components/Card/Card";
import styles from "./Favorites.module.scss"
import { AppContext } from "../../utils/context/context";
// import { Cards } from "../components/Cards/Cards";

export const Favorites = ({ onAddFavorite }) => {
  const { favorites } = useContext(AppContext);
  // console.log(favorites)
  return (
    <div className='d-flex flex-column justify-between mb-30 p-40'>
      <h1 className={styles.title}>Мои закладки</h1>
      <ul className={`${styles.content} d-flex justify-center`}>
        {favorites.map((item, index) =>
          <Card
            key={index}
            isLiked={true}
            // onPlus={(card) => {onAddCart(card)}}
            onFavorite={onAddFavorite}
            {...item}
          />
        )}
      </ul>
    </div>
  )
};
