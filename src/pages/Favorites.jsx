import { Card } from "../components/Card/Card";
// import { Cards } from "../components/Cards/Cards";

export const Favorites = ({ items, onAddFavorite }) => {
  return (
    <div className='d-flex flex-column justify-between mb-30'>
      <h1>Мои закладки</h1>
      <ul className='d-flex justify-center'>
        {items.map((item, index) =>
          <Card
            key={index}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
            isLiked={true}
            // onPlus={(card) => {onAddCart(card)}}
            onFavorite={(card) => {onAddFavorite(card)}}
          />
        )}
      </ul>
    </div>
  )
};
