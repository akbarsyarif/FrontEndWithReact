import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";

import aside from "../../assets/images/gambarsamping.jpg";
import coffeeLogo from "../../assets/images/coffee.png";
import googleSign from "../../assets/images/googlesign.png";

import { Link } from "react-router-dom";

const title = "Signup Page";

export class Signup extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <main className="tabXl:flex relative">
          <section className="transparent absolute w-[100vw] h-[1180px] bg-gray-200 opacity-40 -z-10 tabXl:hidden"></section>
          <aside>
            <img className="big-pic absolute w-full h-[1180px] -z-20 tabXl:static tabXl:z-0 tabXl:flex-1" src={aside} alt="photos" />
          </aside>
          <section className="right-side px-3 pt-7 pb-52 tabXl:flex-1 tabXl:px[12%]">
            <section className="head-right-side flex items-center justify-between tabXl:mt-14 lg:px-[10%]">
              <Link to="/">
                <section className="coffee-cont flex items-center gap-4">
                  <img className="coffee w-[30px] h-[30px]" src={coffeeLogo} alt="coffee" />
                  <p className=" text-xl text-[#0b132a] font-bold">Coffee shop</p>
                </section>
              </Link>
              <Link to="/login">
                <button className="btn-signup bg-secondary w-[150px] h-11 border-none rounded-[50px] font-bold">Login</button>
              </Link>
            </section>
            <section className="title flex mt-3 justify-center">
              <h3 className="text-4xl font-bold text-main mt-24 mb-14">Sign Up</h3>
            </section>
            <section className="form flex justify-center items-center">
              <form action="" className="text-xl text-fontb font-bold">
                <label htmlFor="email">Email Adress :</label>
                <input className="flex mt-3 mb-8 w-[95vw] tabXl:w-[505px] h-[75px] text-xl rounded-[20px] border-[1px] border-solid border-fontb pl-[30px]" id="email" type="email" name="email" placeholder="Enter your email adress" />
                <label htmlFor="pwd">Password :</label>
                <input className="flex mt-3 mb-8 w-[95vw] tabXl:w-[505px] h-[75px] text-xl rounded-[20px] border-[1px] border-solid border-fontb pl-[30px]" id="password" type="password" name="pwd" placeholder="Enter your password" />
                <label htmlFor="pwd">Phone Number :</label>
                <input className="flex mt-3 mb-8 w-[95vw] tabXl:w-[505px] h-[75px] text-xl rounded-[20px] border-[1px] border-solid border-fontb pl-[30px]" id="password" type="password" name="pwd" placeholder="Enter your phone number" />
                <div id="wrong-account" className="mt-[5%] pl-[1%] text-red-600"></div>
                <button className="btn-login tabXl:w-[505px] flex justify-center items-center mt-3 w-[95vw] h-[75px] text-xl text-main font-bold bg-secondary border-none rounded-[20px] shadow-yellowBtn">Login</button> <br />
                <button className="g-login tabXl:w-[505px] flex justify-center items-center mt-3 gap-4 w-[95vw] h-[75px] font-sans text-[17px] font-bold bg-white border-none rounded-[20px] shadow-cardShadow">
                  <img className="google-sign w-[30px] h-[30px]" src={googleSign} alt="Google-sign.png" /> Login with Google
                </button>
              </form>
            </section>
          </section>
          <section className="card absolute py-8 bottom-[-10%] tabXl:bottom-[-120px] left-[7%] w-[88vw] h-[233px] leading-10 flex flex-col tabXl:flex-row justify-between items-center rounded-xl shadow-cardShadow bg-white">
            <section className="card-txt tabXl:ml-[70px]">
              <h3 className="card-title text-4xl text-[#0b132a] font-bold text-center tabXl:text-start">
                Get your member <br />
                card now!
              </h3>
              <p className="card-desc text-fontb text-center tabXl:text-start">Lets join with our member and enjoy the deals.</p>
            </section>
            <button className="btn w-[250px] h-[60px] tabXl:mr-[70px] bg-secondary font-bold text-main border-none rounded-xl shadow-yellowBtn mt-6 tabXl:mt-0">Create Now</button>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Signup;
