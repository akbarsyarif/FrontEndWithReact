import React, { Component } from "react";

import Coffee from "../../assets/images/coffee.png";
import MenuIcon from "../../assets/images/menu-icon.svg";
import search from "../../assets/images/search-icon.svg";
import notif from "../../assets/images/notif.webp";

import { Link } from "react-router-dom";

export class HeaderProduct extends Component {
  state = { clicked: false };

  toggleNav = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <header className="flex justify-between mobileXl:px-10 md:px-16 xl:px-36 lg:flex pt-14 pb-10">
        <section className="coffee-cont flex justify-center items-center gap-4">
          <img className="coffee w-8 h-8" src={Coffee} alt="coffee.png" />
          <p className="text-xl font-bold text-fontc">Coffee Shop</p>
        </section>
        <img src={MenuIcon} alt="menu-icon.svg" className="hamburger tabXl:hidden w-8 h-8" />
        <nav className="nav-bar hidden tabXl:flex justify-center items-center gap-10">
          <Link to="/">
            <p className="text-base font-normal text-fontb">Home</p>
          </Link>
          <Link to="/product-cust">
            <p className="active-page font-bold text-main">Product</p>
          </Link>
          <p className="text-base font-normal text-fontb">Your Cart</p>
          <Link to="/history">
            <p className="text-base font-normal text-fontb">History</p>
          </Link>
        </nav>
        <section className="profile-wrapper hidden tabXl:flex items-center gap-8">
          <img className="search-icon w-8 h-8" src={search} alt="search-icon.svg" />
          <div className="notif-cont relative before:content-['1'] before:absolute before:top-[-7px] before:left-[-7px] before:flex before:justify-center before:items-center before:w-[15px] before:h-[15px] before:text-[8px] before:text-white before:bg-main before:rounded-full">
            <img className="notif w-8 h-8" src={notif} alt="notif.webp" />
          </div>
          <p className="notif-text hidden">Notification</p>
          <Link to="/profile">
            <div className="profile">
              <div className="profile-pic bg-profile w-9 h-9 bg-cover rounded-full"></div>
            </div>
          </Link>
        </section>
      </header>
    );
  }
}

export default HeaderProduct;
