import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/HeaderHome";

import UserSvg from "../../assets/images/user.svg";
import LocationSvg from "../../assets/images/location.svg";
import HeartSvg from "../../assets/images/heart.svg";
import teamwork from "../../assets/images/teamwork.svg";
import map from "../../assets/images/map.svg";
import review1 from "../../assets/images/viezh-robert.webp";
import review2 from "../../assets/images/yessica-christy.webp";
import review3 from "../../assets/images/kim-young-jo.webp";
import reviewStar from "../../assets/images/star.svg";
import back from "../../assets/images/back.svg";
import next from "../../assets/images/next.svg";

const title = "Coffee Shop";

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header />
        <main>
          <section className="bg-homeBg bg-cover flex flex-col items-center tabXl:px-16 tabXl:relative tabXl:bg-center xl:px-36">
            <section className="hero flex flex-col-reverse items-center tabXl:flex-row tabXl:items-start ">
              <div className="txt-hero flex flex-col items-center tabXl:flex-1 tabXl:items-start tabXl:mt-14 tabXl:mb-56">
                <h1 className="hero-title text-5xl font-bold text-white text-center leading-normal tabXl:text-start">Start Your Day with Coffee and Good Meals</h1>
                <p className="hero-desc text-xl mt-4 px-2 text-white text-center leading-7 font-bold tabXl:text-start">
                  We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!
                </p>
                <button className="get-started mt-5 w-64 h-16 bg-secondary text-main rounded-xl">Get Started</button>
              </div>
              <div className="search-cont tabXl:flex tabXl:flex-1 tabXl:justify-end">
                <input type="text" placeholder="Search" className="search w-56 h-14 my-6 pl-16 font-sans text-lg font-black rounded-full bg-searchIcon bg-no-repeat bg-searchIconPos xl:w-80" />
              </div>
            </section>
            <div className="card-1 flex flex-col items-center my-2 w-11/12 h-64 bg-white rounded-xl drop-shadow-cardShadow tabXl:flex-row tabXl:h-52 tabXl:absolute tabXl:-bottom-28 tabXl:py-9 xl:w-4/5">
              <div className="card-1-cont flex items-center my-4 gap-4 tabXl:flex-1 tabXl:justify-center">
                <img src={UserSvg} alt="user.svg" />
                <div className="card-1-txt">
                  <p className="number text-fontc text-2xl">90+</p>
                  <p className="text-fontb text-lg font-normal">Staff</p>
                </div>
              </div>
              <div className="card-1-cont flex mb-2 gap-4 border-t border-b py-4 tabXl:flex-1 tabXl:justify-center tabXl:border-none">
                <img src={LocationSvg} alt="location.svg" />
                <div className="card-1-txt">
                  <p className="number text-fontc text-2xl">30+</p>
                  <p className="text-fontb text-lg font-normal">Stores</p>
                </div>
              </div>
              <div className="card-1-cont flex gap-4 pl-10 tabXl:flex-1 tabXl:justify-center tabXl:p-0">
                <div className="heart-cont flex justify-center items-center h-14 w-14 bg-secondary rounded-full">
                  <img src={HeartSvg} alt="heart.svg" />
                </div>
                <div className="card-1-txt">
                  <p className="number text-fontc text-2xl">800+</p>
                  <p className="text-fontb text-lg font-normal">Customers</p>
                </div>
              </div>
            </div>
          </section>

          <section className="teamwork flex flex-col px-3 mb-20 lg:flex-row lg:mt-48 lg:px-16 xl:px-36">
            <img src={teamwork} alt="teamwork.svg" className="lg:w-1/2 h-1/2 xl:w-ful xl:h-full" />
            <div className="teamwork-txt lg:ml-12 xl:ml-32 xl:mt-14">
              <h2 className="teamwork-title text-4xl font-medium text-fontc mb-5 text-center lg:text-start">We Provide Good Coffee and Healthy Meals</h2>
              <p className="teamwork-desc leading-8 text-fontb mb-5 text-center lg:text-start">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
              <ul>
                <li className="before:inline-block before:w-5 before:h-5 before:bg-greenTickRound before:mr-3 before:translate-y-1 text-sm leading-8">Healthy meals, you can request the ingredients</li>
                <li className="before:inline-block before:w-5 before:h-5 before:bg-greenTickRound before:mr-3 before:translate-y-1 text-sm leading-8">Chat with our staff to get better wxperience for ordering</li>
                <li className="before:inline-block before:w-5 before:h-5 before:bg-greenTickRound before:mr-3 before:translate-y-1 text-sm leading-8">Free member card with a minimum purchase of IDR 200.000.</li>
                <li className="before:inline-block before:w-5 before:h-5 before:bg-greenTickRound before:mr-3 before:translate-y-1 text-sm leading-8">High quality beans</li>
              </ul>
            </div>
          </section>

          <section className="favorite-bg bg-[#fcfcfc] px-3 xl:px-36">
            <div className="favorite py-20">
              <h2 className="fav-head text-4xl font-medium text-fontc text-center mb-5">Here is Peoples Favorite</h2>
              <p className="fav-details text-xs leading-8 text-fontb text-center mb-4">Lets choose and have a bit taste of peoples favorite. It might be yours too!</p>
              <div className="fav-product-cont flex justify-center tabXl:justify-evenly">
                <div className="product-card w-[325px] h-[720px] flex flex-col items-center border-2 border-solid border-[#dddddd] rounded-[20px] px-14 bg-white">
                  <div className="product-cont mt-16 w-[129px] h-[129px] rounded-full overflow-hidden">
                    <div className="hazelnut-img bg-hazelnutLatte bg-cover w-[170px] h-[230px] -translate-x-[17%] -translate-y-[40%]"></div>
                  </div>
                  <p className="fav-product-name mt-16 mb-6 text-[18px] font-medium leading-8 text-fontc">Hazelnut Latte</p>
                  <ul>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Hazelnut Syrup</li>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Vanilla Whipped Cream</li>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Ice / Hot</li>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Sliced Banana on Top</li>
                  </ul>
                  <p className="price mb-5 mt-auto font-medium text-2xl leading-7 text-fontc">IDR 25.000</p>
                  <button className="order bg-white w-[104%] h-11 text-main border-2 border-solid border-secondary rounded-[50px] mb-12">Order Now</button>
                </div>

                <div className="product-card hidden tabXl:w-[325px] tabXl:h-[720px] tabXl:flex flex-col items-center border-2 border-solid border-[#dddddd] rounded-[20px] px-14 bg-white">
                  <div className="product-cont mt-16 w-[129px] h-[129px] rounded-full overflow-hidden">
                    <div className="pinky-img bg-pinkyPromise bg-cover w-[170px] h-[230px] -translate-x-[9%] -translate-y-[13%]"></div>
                  </div>
                  <p className="fav-product-name mt-16 mb-6 text-[18px] font-medium leading-8 text-fontc">Pinky Promise</p>
                  <ul>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">1 Shot of Coffee</li>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Vanilla Whipped Cream</li>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Chocolate Biscuits</li>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Strawberry Syrup</li>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Sliced Strawberry on Top</li>
                  </ul>
                  <p className="price mb-5 mt-auto font-medium text-2xl leading-7 text-fontc">IDR 30.000</p>
                  <button className="order bg-white w-[104%] h-11 text-main border-2 border-solid border-secondary rounded-[50px] mb-12">Select</button>
                </div>

                <div className="product-card hidden tabXl:w-[325px] tabXl:h-[720px] tabXl:flex flex-col items-center border-2 border-solid border-[#dddddd] rounded-[20px] px-14 bg-white">
                  <div className="product-cont mt-16 w-[129px] h-[129px] rounded-full overflow-hidden">
                    <div className="chicken-img  bg-chickenWings bg-cover w-[170px] h-[230px] -translate-x-[15%] -translate-y-[25%]"></div>
                  </div>
                  <p className="fav-product-name mt-16 mb-6 text-[18px] font-medium leading-8 text-fontc">Chicken Wings</p>
                  <ul>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Wings</li>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Drum Sticks</li>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Mayonaise and Lemon</li>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Hot Fried</li>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Secret Recipe</li>
                    <li className="before:inline-block before:h-[9px] before:w-3 before:mr-6 before:bg-greenTick text-[14px] leading-7 text-fontb">Buy 1 Get 1 only for Dine in</li>
                  </ul>
                  <p className="price mb-5 mt-auto font-medium text-2xl leading-7 text-fontc">IDR 40.000</p>
                  <button className="select bg-secondary w-[104%] h-11 text-main border-2 border-solid border-secondary rounded-[50px] mb-12 shadow-yellowBtn">Select</button>
                </div>
              </div>
            </div>
          </section>

          <section className="visit-bg bg-[#fcfcfc] pt-36 px-3 lg:px-16 xl:px-36">
            <div className="visit flex flex-col items-center ">
              <div className="visit-txt-cont mb-28  md:px-[25%]">
                <h2 className="visit-head text-center text-4xl font-medium text-fontc mb-5">Visit Our Store in the Spot on the Map Below</h2>
                <p className="visit-desc text-center leading-7 text-fontb">See our store in every city on the spot and spend your good day there. See you soon!</p>
              </div>
              <img src={map} alt="map.svg" className="map-pic" />
            </div>
          </section>

          <section className="partner-bg bg-[#fcfcfc] pt-11 pb-24 px-3 lg:px-16 xl:px-36">
            <div className="partner flex flex-col">
              <h2 className="text-4xl font-medium text-center mb-14">Our Partner</h2>
              <div className="partner-cont flex flex-col items-center gap-7 tabXl:flex-row tabXl:flex-wrap tabXl:justify-between">
                <div className="partner-img w-[190px] h-[60px] overflow-hidden">
                  <div className="netflix-img bg-netflix w-52 h-28 bg-cover -translate-y-[23%] grayscale opacity-30"></div>
                </div>
                <div className="partner-img w-[190px] h-[60px] overflow-hidden">
                  <div className="reddit-img bg-reddit w-44 h-14 bg-cover translate-x-[7%] translate-y-[3%] grayscale opacity-30"></div>
                </div>
                <div className="partner-img w-[190px] h-[60px] overflow-hidden">
                  <div className="amazon-img bg-amazon w-[277px] h-52 bg-cover -translate-x-[14%] -translate-y-[35%] grayscale opacity-30"></div>
                </div>
                <div className="partner-img w-[190px] h-[60px] overflow-hidden">
                  <div className="discord-img bg-discord w-[187px] h-14 bg-cover translate-x-[5%] grayscale opacity-30"></div>
                </div>
                <div className="partner-img w-[190px] h-[60px] overflow-hidden">
                  <div className="spotify-img bg-spotify w-[180px] h-[54px] bg-cover translate-x-[5%] translate-y-[4%] grayscale opacity-30"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="review-bg bg-[#fcfcfc] relative pb-32 md:pb-[11%]">
            <div className="review px-3 lg:px-16 xl:px-36">
              <div className="review-txt md:px-[29%]">
                <h2 className="review-head text-4xl font-medium text-fontc text-center mb-5">Loved by Thousands of Happy Customer</h2>
                <p className="review-details leading-8 text-fontb text-center mb-14">These are stories of our customers who have visited us with great pleasure.</p>
              </div>
              <div className="review-wrap flex">
                <div className="review-card border-2 border-solid border-[#dddddd] rounded-xl p-[2.6%] mx-[1.8%] flex-1">
                  <div className="review-head flex justify-between items-center">
                    <div className="review-profile flex gap-5">
                      <img src={review1} alt="viezh-robert.svg" className="review-img w-[50px] h-[50px] rounded-full" />
                      <div className="name-location-wrap">
                        <p className="review-name text-[18px] font-medium leading-8 text-fontc">Viezh Robert</p>
                        <p className="review-location text-[14px] text-fontb">Warsaw, Poland</p>
                      </div>
                    </div>
                    <p className="review-rating leading-8 text-fontc">
                      4.5{" "}
                      <span>
                        <img src={reviewStar} alt="star.svg" className="review-star" />
                      </span>
                    </p>
                  </div>
                  <p className="customer-review mt-[6%] leading-8 text-fontc">“Wow... I am very happy to spend my whole day here. the wi-fi is good, and the coffee and meals tho. I like it here! Very recommended!</p>
                </div>
                <div className="review-card hidden md:block border-2 border-solid border-[#dddddd] rounded-xl p-[2.6%] mx-[1.8%] flex-1">
                  <div className="review-head flex justify-between items-center">
                    <div className="review-profile flex gap-5">
                      <img src={review2} alt="yessica-christy.svg" className="review-img w-[50px] h-[50px] rounded-full" />
                      <div className="name-location-wrap">
                        <p className="review-name text-[18px] font-medium leading-8 text-fontc">Yessica Christy</p>
                        <p className="review-location text-[14px] text-fontb">Shanxi, China</p>
                      </div>
                    </div>
                    <p className="review-rating leading-8 text-fontc">
                      4.5
                      <span>
                        <img src={reviewStar} alt="star.svg" className="review-star" />
                      </span>
                    </p>
                  </div>
                  <p className="customer-review mt-[6%] leading-8 text-fontc">“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte</p>
                </div>
                <div className="review-card hidden lg:block border-2 border-solid border-[#dddddd] rounded-xl p-[2.6%] mx-[1.8%] flex-1">
                  <div className="review-head flex justify-between items-center">
                    <div className="review-profile flex gap-5">
                      <img src={review3} alt="kim-young-jo.svg" className="review-img w-[50px] h-[50px] rounded-full" />
                      <div className="name-location-wrap">
                        <p className="review-name text-[18px] font-medium leading-8 text-fontc">Kim Young Jo</p>
                        <p className="review-location text-[14px] text-fontb">Seoul, South Korea</p>
                      </div>
                    </div>
                    <p className="review-rating leading-8 text-fontc">
                      4.5
                      <span>
                        <img src={reviewStar} alt="star.svg" className="review-star" />
                      </span>
                    </p>
                  </div>
                  <p className="customer-review mt-[6%] leading-8 text-fontc">“This is very unusual for my taste, I havent liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</p>
                </div>
              </div>
              <div className="scroll mt-[5.3%] flex justify-between items-center">
                <div className="page flex gap-4">
                  <div className="active-page w-11 h-4 bg-main rounded-[20px]"></div>
                  <div className="inactive-page w-4 h-4 bg-[#dde0e4] rounded-full"></div>
                  <div className="inactive-page w-4 h-4 bg-[#dde0e4] rounded-full"></div>
                  <div className="inactive-page w-4 h-4 bg-[#dde0e4] rounded-full"></div>
                </div>
                <div className="arrow flex gap-5">
                  <div className="back flex justify-center items-center w-[60px] h-[60px] border-2 border-solid border-main rounded-full">
                    <img src={back} alt="back.svg" className="arrow-img w-[20px] h-[17.5px]" />
                  </div>
                  <div className="next flex justify-center items-center w-[60px] h-[60px] bg-main rounded-full">
                    <img src={next} alt="next.svg" className="arrow-img w-[20px] h-[17.5px]" />
                  </div>
                </div>
              </div>
              <div className="promo-card absolute bottom-[-20%] flex justify-between items-center w-[94%] md:w-[96%] md:bottom-[-23%] lg:w-[87.2%] lg:bottom-[-18%] xl:w-[79.2%] xl:bottom-[-15%] h-[233px] px-[4.9%] bg-white rounded-xl shadow-cardShadow">
                <div className="promo-txt">
                  <h2 className="promo-head text-4xl font-medium text-fontc">Check our promo today!</h2>
                  <p className="promo-details leading-8 text-fontb">Lets see the deals and pick yours!</p>
                </div>
                <button className="see-promo w-[250px] h-[60px] font-bold leading-6 text-main bg-secondary border-none rounded-xl shadow-yellowBtn">See Promo</button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
