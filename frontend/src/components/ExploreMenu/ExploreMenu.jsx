import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';
import { useTranslation } from 'react-i18next'; // Add this line

const ExploreMenu = ({ category, setCategory }) => {
  const { t } = useTranslation(); // Add this line

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>{t('Explore our menu')}</h1> {/* Update this line */}
      <p className='explore-menu-text'>{t('Choose from a devers menu featuring a delectable array of dishes craft with the finest ingriedent and culinary. Our misstion is to satisfy your craving and elevate your dining expensive, one delicous meal at a time')}</p> {/* Update this line */}
      <div className="explore-menu-list">
        {menu_list.map((iteam, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === iteam.menu_name ? "ALL" : iteam.menu_name)} key={index} className="explore-menu-list-iteam">
              <img className={category === iteam.menu_name ? "active" : ""} src={iteam.menu_image} alt="" />
              <p>{iteam.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;