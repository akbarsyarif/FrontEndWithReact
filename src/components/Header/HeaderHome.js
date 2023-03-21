import React, { Component } from "react";
import Coffee from "../../assets/images/coffee.png";
import MenuIcon from "../../assets/images/menu-icon.svg";
import "./HeaderHome.css";
import { Link } from "react-router-dom";

export class HeaderHome extends Component {
  state = { clicked: false };

  toggleNav = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <header className="mobileXl:flex justify-between mobileXl:px-10 md:px-16 xl:px-36 lg:flex pt-14 pb-10">
        <Link to="/">
          <section className="coffee-cont flex justify-center items-center gap-4">
            <img className="coffee w-8 h-8" src={Coffee} alt="coffee.png" />
            <p className="text-xl font-bold text-fontc">Coffee Shop</p>
          </section>
        </Link>
        <img src={MenuIcon} alt="menu-icon.svg" className="hamburger w-8 h-8 tabXl:hidden" onClick={this.toggleNav} />
        {/* onclick="toggleNavHome();return false" */}
        <nav className={this.state.clicked ? "active" : "inactive"}>
          {/* // className="nav-bar mobileXl:hidden tabXl:flex justify-center items-center gap-10 " */}
          <p className="active-page font-bold text-main">Home</p>
          <Link to="/product-cust">
            <p className="text-base font-normal text-fontb">Product</p>
          </Link>
          <p className="text-base font-normal text-fontb">Your Cart</p>
          <Link to="/history">
            <p className="text-base font-normal text-fontb">History</p>
          </Link>
        </nav>
        <section className={this.state.clicked ? "active" : "inactive"} id="account">
          {/* className="account mobileXl:hidden tabXl:flex items-center gap-10" */}
          <Link to="/login">
            <p className="login font-medium text-fontc">Login</p>
          </Link>
          <Link to="/signup">
            <button className="sign-up w-[75vw] tabXl:w-36 h-11 bg-secondary text-main font-medium border-none rounded-full drop-shadow-yellowBtn">Sign Up</button>
          </Link>
        </section>
      </header>
    );
  }
}

// const toggleNavHome = () => {
//   let nav = document.querySelector(".nav-bar");
//   let account = document.querySelector(".account");

//   nav.classList.toggle("active");
//   account.classList.toggle("active");
// };

export default HeaderHome;
