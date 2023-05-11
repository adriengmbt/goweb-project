import React from 'react';
import image from '../assets/images/icons8-cercle-64.png';
import SearchBar from './homePage/Search/SearchBar';

function Menu() {
    return (
      <div className="nav-bar__container">

        <div className="nav-bar__container__header">

          <div className="nav-bar__container__logo">
            <img src={image} alt="logo" />
          </div>

          <div className="nav-bar__container__name">
            <h2>Circle Products</h2>
          <SearchBar />
          </div>

        </div>

        <div className="nav-bar__container__menu">
          <ul>
            <li><a href="../">Dashboard</a></li>            
            <li><a href="../">Products management</a></li>
            <li><a href="../">Employees management</a></li>
            <li> <a href='../' >Logout </a></li>

          </ul>

        </div>
      </div>
    );
  }


export default Menu;