import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import Fooditeam from '../FoodIteam/Fooditeam';
import { useTranslation } from 'react-i18next'; // Add this line

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const { t } = useTranslation(); // Add this line

  return (
    <div className='food-display' id='food-display'>
      <h2>{t('Top dishes near you')}</h2> {/* Update this line */}
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "ALL" || category === item.category) {
            return (
              <Fooditeam
                key={index}
                id={item._id}
                name={item.name} // Use translated name
                price={item.price}
                description={item.description} // Use translated description
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;