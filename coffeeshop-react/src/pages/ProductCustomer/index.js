import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/HeaderProduct";
import Footer from "../../components/Footer/Footer";
import withSearchParams from "../../helpers/wrapper/withSearchParams";
import { getProducts } from "../../helpers/https/product";

import arrowDown from "../../assets/images/arrow-down-black.svg";

const title = "Coffee Shop - Products";

export class ProductCustomer extends Component {
  constructor() {
    super();
    this.state = {};
    this.controller = new AbortController();
  }

  componentDidMount() {
    getProducts(this.controller)
      .then((res) =>
        this.setState({
          res,
          // console.log(res.data);
        })
      )
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    // console.log(this.props.searchParams);
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header />
        <main className="border-t border-black lg:flex lg:border-[#9f9f9f]">
          <aside className="left-side flex flex-col items-center flex-1 tabXl:border-r tabXl:border-solid tabXl:border-[#9f9f9f]">
            <h1 className="mt-7 mb-12 text-center font-bold text-[25px] text-main">Promo for you</h1>
            <p className=" text-center text-xs font-sans">
              Coupons will be updated every weeks. <br />
              check them out!
            </p>
            <div className="page-1 relative w-[285px] h-[525px] bg-[#ffcb65] mt-12 mb-11 rounded-[20px] pt-[53px]">
              <div className="promo-product-cont w-[128px] h-[128px] overflow-hidden rounded-full m-auto">
                <div className="promo-product bg-beefSpaghetti w-[248px] h-[350px] bg-cover -translate-x-[20%] -translate-y-[54%]">
                  <img src="" alt="" />
                </div>
              </div>
              <p className="food-name-promo mt-4 text-center text-[22px] font-bold font-sans">
                Beef Spaghetti <br />
                20% OFF
              </p>
              <p className="promo-desc text-center text-[14px] border-b border-dashed border-black pb-7 font-sans">
                Buy 1 Choco Oreo and get 20% <br />
                off for Beef Spaghetti
              </p>
              <p className="coupon mt-7 text-center font-sans">COUPON CODE</p>
              <p className="coupon-code mt-4 text-center text-[33px] font-sans font-bold">FNPR15RG</p>
              <p className="coupon-date mt-5 text-center text-xs font-sans">valid until October 10th 2020</p>
            </div>
            <button className="btn mt-[45px] mb-[112px] w-[284px] h-[64px] bg-main text-white border-none rounded-[20px] font-sans font-bold">Apply Coupon</button>
            <div className="tnc-cont mb-16">
              <p className="tnc text-xs font-bold text-fontb">Terms and Condition</p>
              <p className="tnc-detail text-xs text-fontb">
                1. You can only apply 1 coupon per day <br />
                2. It only for dine in <br />
                3. Buy 1 get 1 only for new user <br />
                4. Should make member card to apply coupon
              </p>
            </div>
          </aside>
          {/* LEFTSIDE 

       RIGHTSIDE  */}
          <section className="right-side border-t border-black py-8 flex-[2.3] xl:flex-[2] lg:px-[8%] lg:border-none ">
            <section className="head-right-side flex justify-center lg:justify-between">
              <div className="active-cont">
                <p className="active-product px-4 text-xl font-bold text-main">Favorite Product</p>
                <div className="underline mt-[3%] w-full border-b-2 border-solid border-main shadow-resendBtn"></div>
              </div>
              <img className="arrow lg:hidden" src={arrowDown} alt="arrow-down-black.svg" />
              <p className="no-active-product hidden lg:block text-xl text-[#9f9f9f]">Coffee</p>
              <p className="no-active-product hidden lg:block text-xl text-[#9f9f9f]">Non Coffee</p>
              <p className="no-active-product hidden lg:block text-xl text-[#9f9f9f]">Foods</p>
              <p className="no-active-product hidden lg:block text-xl text-[#9f9f9f]">Add-on</p>
            </section>
            <section className="product-list mt-28 grid grid-cols-2 md:grid-cols-3 tabXl:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-x-[35px] gap-y-[75px]">
              <div className="product-wrapper w-[156px] h-[213px] shadow-productCard rounded-[30px]">
                <div className="product-cont w-[129px] h-[129px] overflow-hidden rounded-full m-auto -translate-y-[30%]">
                  <div className="product-1 bg-veggieTomatoMix w-[230px] h-[244px] bg-cover -translate-x-[20%] -translate-y-[40%]">
                    <img src="" alt="" />
                  </div>
                </div>
                <p className="product-name -mt-[30px] text-[22px] font-black font-sans text-center">Veggie tomato mix</p>
                <p className="price text-[17px] text-main text-center font-bold font-sans">IDR 34.000</p>
              </div>
              <div className="product-wrapper w-[156px] h-[213px] shadow-productCard rounded-[30px]">
                <div className="product-cont w-[129px] h-[129px] overflow-hidden rounded-full m-auto -translate-y-[30%]">
                  <div className="product-2 bg-hazelnutLatte w-[230px] h-[259px] bg-cover -translate-x-[25%] -translate-y-[50%]">
                    <img src="" alt="" />
                  </div>
                </div>
                <p className="product-name -mt-[30px] text-[22px] font-black font-sans text-center">
                  Hazelnut <br />
                  Latte
                </p>
                <p className="price text-[17px] text-main text-center font-bold font-sans">IDR 25.000</p>
              </div>
              <div className="product-wrapper w-[156px] h-[213px] shadow-productCard rounded-[30px]">
                <div className="product-cont w-[129px] h-[129px] overflow-hidden rounded-full m-auto -translate-y-[30%]">
                  <div className="product-3 bg-summerFriedRice w-[178px] h-[215px] bg-cover -translate-x-[25%] -translate-y-[20%]">
                    <img src="" alt="" />
                  </div>
                </div>
                <p className="product-name -mt-[30px] text-[22px] font-black font-sans text-center">
                  Summer <br />
                  Fried rice
                </p>
                <p className="price text-[17px] text-main text-center font-bold font-sans">IDR 32.000</p>
              </div>
              <div className="product-wrapper w-[156px] h-[213px] shadow-productCard rounded-[30px]">
                <div className="product-cont w-[129px] h-[129px] overflow-hidden rounded-full m-auto -translate-y-[30%]">
                  <div className="product-4 bg-hazelnutLatte w-[230px] h-[259px] bg-cover -translate-x-[25%] -translate-y-[50%]">
                    <img src="" alt="" />
                  </div>
                </div>
                <p className="product-name -mt-[30px] text-[22px] font-black font-sans text-center">Creamy Ice Latte</p>
                <p className="price text-[17px] text-main text-center font-bold font-sans">IDR 27.000</p>
              </div>
              <div className="product-wrapper w-[156px] h-[213px] shadow-productCard rounded-[30px]">
                <div className="product-cont w-[129px] h-[129px] overflow-hidden rounded-full m-auto -translate-y-[30%]">
                  <div className="product-5 bg-drumSticks w-[217px] h-[144px] bg-cover -translate-x-[13%] -translate-y-[5%]">
                    <img src="" alt="" />
                  </div>
                </div>
                <p className="product-name -mt-[30px] text-[22px] font-black font-sans text-center">Drum Sticks</p>
                <p className="price text-[17px] text-main text-center font-bold font-sans">IDR 30.000</p>
              </div>
              <div className="product-wrapper w-[156px] h-[213px] shadow-productCard rounded-[30px]">
                <div className="product-cont w-[129px] h-[129px] overflow-hidden rounded-full m-auto -translate-y-[30%]">
                  <div className="product-6 bg-saltyRice w-[217px] h-[144px] bg-cover -translate-x-[27%] -translate-y-[8%]">
                    <img src="" alt="" />
                  </div>
                </div>
                <p className="product-name -mt-[30px] text-[22px] font-black font-sans text-center">Salty Rice</p>
                <p className="price text-[17px] text-main text-center font-bold font-sans">IDR 20.000</p>
              </div>
              <div className="product-wrapper w-[156px] h-[213px] shadow-productCard rounded-[30px]">
                <div className="product-cont w-[129px] h-[129px] overflow-hidden rounded-full m-auto -translate-y-[30%]">
                  <div className="product-3 bg-summerFriedRice w-[178px] h-[215px] bg-cover -translate-x-[25%] -translate-y-[20%]">
                    <img src="" alt="" />
                  </div>
                </div>
                <p className="product-name -mt-[30px] text-[22px] font-black font-sans text-center">
                  Summer <br />
                  Fried rice
                </p>
                <p className="price text-[17px] text-main text-center font-bold font-sans">IDR 32.000</p>
              </div>
              <div className="product-wrapper w-[156px] h-[213px] shadow-productCard rounded-[30px]">
                <div className="product-cont w-[129px] h-[129px] overflow-hidden rounded-full m-auto -translate-y-[30%]">
                  <div className="product-4 bg-hazelnutLatte w-[230px] h-[259px] bg-cover -translate-x-[25%] -translate-y-[50%]">
                    <img src="" alt="" />
                  </div>
                </div>
                <p className="product-name -mt-[30px] text-[22px] font-black font-sans text-center">Creamy Ice Latte</p>
                <p className="price text-[17px] text-main text-center font-bold font-sans">IDR 27.000</p>
              </div>
              <div className="product-wrapper w-[156px] h-[213px] shadow-productCard rounded-[30px]">
                <div className="product-cont w-[129px] h-[129px] overflow-hidden rounded-full m-auto -translate-y-[30%]">
                  <div className="product-1 bg-veggieTomatoMix w-[230px] h-[244px] bg-cover -translate-x-[20%] -translate-y-[40%]">
                    <img src="" alt="" />
                  </div>
                </div>
                <p className="product-name -mt-[30px] text-[22px] font-black font-sans text-center">Veggie tomato mix</p>
                <p className="price text-[17px] text-main text-center font-bold font-sans">IDR 34.000</p>
              </div>
              <div className="product-wrapper w-[156px] h-[213px] shadow-productCard rounded-[30px]">
                <div className="product-cont w-[129px] h-[129px] overflow-hidden rounded-full m-auto -translate-y-[30%]">
                  <div className="product-2 bg-hazelnutLatte w-[230px] h-[259px] bg-cover -translate-x-[25%] -translate-y-[50%]">
                    <img src="" alt="" />
                  </div>
                </div>
                <p className="product-name -mt-[30px] text-[22px] font-black font-sans text-center">
                  Hazelnut <br />
                  Latte
                </p>
                <p className="price text-[17px] text-main text-center font-bold font-sans">IDR 25.000</p>
              </div>
              <div className="product-wrapper w-[156px] h-[213px] shadow-productCard rounded-[30px]">
                <div className="product-cont w-[129px] h-[129px] overflow-hidden rounded-full m-auto -translate-y-[30%]">
                  <div className="product-3 bg-summerFriedRice w-[178px] h-[215px] bg-cover -translate-x-[25%] -translate-y-[20%]">
                    <img src="" alt="" />
                  </div>
                </div>
                <p className="product-name -mt-[30px] text-[22px] font-black font-sans text-center">
                  Summer <br />
                  Fried rice
                </p>
                <p className="price text-[17px] text-main text-center font-bold font-sans">IDR 32.000</p>
              </div>
              <div className="product-wrapper w-[156px] h-[213px] shadow-productCard rounded-[30px]">
                <div className="product-cont w-[129px] h-[129px] overflow-hidden rounded-full m-auto -translate-y-[30%]">
                  <div className="product-4 bg-hazelnutLatte w-[230px] h-[259px] bg-cover -translate-x-[25%] -translate-y-[50%]">
                    <img src="" alt="" />
                  </div>
                </div>
                <p className="product-name -mt-[30px] text-[22px] font-black font-sans text-center">Creamy Ice Latte</p>
                <p className="price text-[17px] text-main text-center font-bold font-sans">IDR 27.000</p>
              </div>
            </section>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default withSearchParams(ProductCustomer);
