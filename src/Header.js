import React from 'react'
import amazon from './images/amazon.png'
import flag from './images/flag.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RoomIcon from '@material-ui/icons/Room';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Header() {
  return (
    <div>
      <div className="Header_" id="header">
        {/*  */}
        <MenuIcon className="hamburger"/>
        <div className="logo">
        <img className="amazon_logo" src={amazon} alt=""/>
        <span className="in">.in</span>
        </div>
        {/*  */}
        <div className="Header_search">
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="search" className="header_Search_Input" name="search" id=" "/>
          <SearchIcon className="Header_search_icon"/>
        </div>
        <div className="flag-icon">
          <img src={flag} alt=""/>
          <ArrowDropDownIcon className="dropdown-icon"/>
        </div>
        {/*  */}
        <div className="header_nav">
          <div className="header_nav-item">
            <label htmlFor="">Hello, Signin</label>
            <div style={{display:"flex",alignItems:"center"}}>
            <label htmlFor="">Accounts &amp; Lists
              </label>
            <ArrowDropDownIcon className="dropdown-icon"/>

            </div>

            </div>
          <div className="header_nav-item">
            <label htmlFor="">Returns</label>
            <label htmlFor=""> &amp; Orders</label>
            </div>
            <div className="header_nav-item">
            <label htmlFor="">
              Your
              </label>
              <div style={{display:"flex",alignItems:"center"}}>
            <label htmlFor="">Prime
              </label>
            <ArrowDropDownIcon className="dropdown-icon"/>

            </div>
            </div>
          </div>
          {/*  */}
          <div className="header_cart">
            <ShoppingCartOutlinedIcon fontSize="large" className="header_cart_icon"/>
            <div className="header_cart_text">
            <span>0</span>
            <span>Cart</span>
            </div>
          </div>
          </div>
          <div className="header-bookmarks">
            <div className="location-selection">
            <RoomIcon className="location-icon"/>
            <div className="location">
              <span>Hello</span>
              <span>Select your address</span>
            </div>
            </div>
            <div className="bookmark-items">
            <span>Gift cards</span>
            <span>Best sellers</span>
            <span>Mobiles</span>
            <span>Today's Deals</span>
            <span>New Releases</span>
            <span>Electronics</span>
            <span>Computers</span>
            </div>
            <div className="mirzapur-image">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Mirzapurs2/nobranding/400x39-SWM_With-Disclaimer_np._CB415424805_.jpg" alt=""/>
            </div>
          </div>
        </div>
  )
}

export default Header
