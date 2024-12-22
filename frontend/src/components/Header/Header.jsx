import React from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next'; // Add this line

const Header = () => {
  const { t } = useTranslation(); // Add this line

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>{t('Orders your favourite foods here')}</h2> {/* Update this line */}
        <p>{t('Choose from a devers menu featuring a delectable array of dishes craft with the finest ingriedent and culinary. Our misstion is to satisfy your craving and elevate your dining expensive, one delicous meal at a time')}</p> {/* Update this line */}
        <button>{t('View Menu')}</button> {/* Update this line */}
      </div>
    </div>
  );
};

export default Header;
