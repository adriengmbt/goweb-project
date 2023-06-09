import React from 'react';
import image from '../../assets/images/icons8-cercle-64.png';
import SearchBar from '../homePage/Search/SearchBar';
import FunctionStyleMenu from './FunctionStyleMenu';


function Menu() {
  <FunctionStyleMenu />
    return (
      <div className="nav-bar__container">

        <div className="nav-bar__header">

          <div className="nav-bar__header-logo">
            <img className='nav-bar__header-img' src={image} alt="logo" />
          </div>

          <div className="nav-bar__header-name">
            <h2 className='nav-bar__header-title'>Circle Products</h2>
          <SearchBar />
          </div>

        </div>
        <div className="nav-bar__dashboard">
          <ul className='nav-bar__dashboard-list'>
            <li className='nav-bar__dashboard-element'><a className='nav-bar__menu-a' href="../">Dashboard</a></li>            
            <li className='nav-bar__dashboard-element'><a className='nav-bar__menu-a' href="../">Products management</a></li>
            <li className='nav-bar__dashboard-element'><a className='nav-bar__menu-a' href="../">Employees management</a></li>
            <li className='nav-bar__dashboard-element'> <a className='nav-bar__menu-a' href='../' >Logout </a></li>
          </ul>

        </div>
      </div>
    );
  }


export default Menu;