import React, { useContext } from "react";

import { Card } from "../../components/Card/Card";
import { AppContext } from "../../utils/context/context";

import styles from "./Favorites.module.scss"

export const Favorites = () => {
  const { favorites, handleAddFavorites } = useContext(AppContext);

  return (
    <div className='d-flex flex-column justify-between mb-30 p-40'>
      <h1 className={styles.title}>Мои закладки</h1>
      <ul className={`${styles.content} d-flex justify-center`}>
        {favorites.map((item, index) =>
          <Card
            key={index}
            isLiked={true}
            onFavorite={handleAddFavorites}
            {...item}
          />
        )}
      </ul>
    </div>
  )
};
