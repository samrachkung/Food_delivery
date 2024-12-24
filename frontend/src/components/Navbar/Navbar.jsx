// filepath: /c:/Users/Kun SramRach/Desktop/MVC-EXPRESS-REACT-APP/frontend/src/components/Navbar/Navbar.jsx
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { useTranslation } from 'react-i18next';

const Navbar = ({ setShowlogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalAmount, token, setToken, food_list } = useContext(StoreContext);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query.length > 0) {
      const results = food_list.filter(item =>
        item.name.toLowerCase().includes(query)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };


  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <input
          type="text"
          placeholder="Search food..."
          value={searchQuery}
          onChange={handleSearch}
          className="navbar-search-input"
        />
        <div className="navbar-search-results">
          {searchResults.map((item, index) => (
            <div key={index} className="navbar-search-result-item">
              <Link to={`/food/${item._id}`}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
          <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowlogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorder')}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
       <div className="language-dropdown">
          <button onClick={toggleLanguageDropdown}>
            {i18n.language === 'en' ? 'ENGLISH' : 'KHMER'}
          </button>
          {isLanguageDropdownOpen && (
            <ul className="language-dropdown-menu">
              <li onClick={() => changeLanguage('en')}>ENGLISH</li>
              <li onClick={() => changeLanguage('km')}>KHMER</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;