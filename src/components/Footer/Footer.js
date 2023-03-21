import React, { Component } from "react";
import coffee from "../../assets/images/coffee.png";
import facebook from "../../assets/images/Facebook.svg";
import twitter from "../../assets/images/Twitter.svg";
import instagram from "../../assets/images/Instagram.svg";

export class Footer extends Component {
  render() {
    return (
      <footer className="mobileXl:flex-col md:flex md:flex-row pt-44 pb-24 xl:pl-36 xl:pr-32 pl-16 pr-16 leading-10 bg-bgfooter gap-40">
        <section className="bio flex-1">
          <section className="coffee-cont flex justify-start items-center gap-4">
            <img className="coffee w-8 h-8" src={coffee} alt="coffe.png" />
            <p className="footer-title text-xl font-bold text-fontc">Coffee Shop</p>
          </section>
          <p className="bio-desc mt-4 font-medium text-base text-footertext">
            Coffee Shop is a store that sells some good <br />
            meals, and especially coffee. We provide <br />
            high quality beans
          </p>
          <section className="social-media mt-5 flex">
            <img className="FB" src={facebook} alt="Facebook.svg" />
            <img className="TWT" src={twitter} alt="Twitter.svg" />
            <img className="IG" src={instagram} alt="Instagram.svg" />
          </section>
          <p className="trademarks text-trademarks font-normal text-base">©2020CoffeeStore</p>
        </section>
        <section className="flex gap-28 justify-between pt-6 md:pt-0">
          <section className="product">
            <p className="footer-title font-bold">Product</p>
            <p className="footer-desc">Download</p>
            <p className="footer-desc">Pricing</p>
            <p className="footer-desc">Locations</p>
            <p className="footer-desc">Countries</p>
            <p className="footer-desc">Blog</p>
          </section>
          <section className="engage">
            <p className="footer-title font-bold">Engage</p>
            <p className="footer-desc">Coffee Shop ?</p>
            <p className="footer-desc">FAQ</p>
            <p className="footer-desc">About Us</p>
            <p className="footer-desc">Privacy Policy</p>
            <p className="footer-desc">Terms of Service</p>
          </section>
        </section>
      </footer>
    );
  }
}

export default Footer;
