import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import HeaderProduct from "../../components/Header/HeaderProduct";

const title = "Coffee Shop - Product Details";

export class ProductDetails extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <HeaderProduct />
        <main className="relative bg-[#ededed] lg:flex">
          <section className="left-side flex flex-col items-center flex-1 pt-[3.5%]">
            <div className="left-side-tag mb-[8%] lg:mb-[94px]">
              <p className="text-xl text-fontb ">
                Favorite & Promo <span className="tag-name font-bold text-main">Cold Brew</span>
              </p>
            </div>
            <div className="product-img-cont w-[400px] h-[400px] rounded-full overflow-hidden">
              <div className="product-img bg-coldBrew w-[500px] h-[800px] bg-cover -translate-x-[12%] -translate-y-[35%]"></div>
            </div>
            <div className="product-name mt-[6.5%] font-black text-[65px]">
              <h1 className=" font-sans">COLD BREW</h1>
            </div>
            <div className="product-price mb-[7%] font-medium text-[35px]">
              <h3 className=" font-sans">IDR 30.000</h3>
            </div>
            <button className="add-cart w-[95vw] lg:w-[62.5%] h-[85px] bg-main text-white font-sans text-[25px] border-none rounded-[20px]">Add to Cart</button>
            <button className="ask-staff w-[95vw] lg:w-[62.5%] h-[85px] bg-secondary text-main font-sans text-[25px] border-none rounded-[20px] mt-[5%]">Ask a Staff</button>
          </section>

          <section className="right-side flex-1 px-3 mt-[10%] lg:mt-[5%] lg:pl-0 lg:pr-[5%] xl:pr-[10%]">
            <div className="txt-cont flex flex-col pt-[10%] bg-white rounded-[20px] px-3 tabXl:px-[13%]">
              <div className="txt-deliv-details text-center">
                <p className="font-sans text-main text-[25px] font-medium mt-[17%] lg:mt-[5%] mb-[9%]">
                  Delivery only on <span className="deliv-details-bold font-sans text-[26px] font-bold">Monday to friday</span> at <span className="deliv-details-bold">1 - 7 pm</span>
                </p>
              </div>
              <div className="product-details text-[25px] text-main mb-[9%] text-center">
                <p className="font-sans">
                  Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
                </p>
              </div>
              <div className="pick-size font-sans text-[25px] text-center mb-[9%] font-bold">Choose a size</div>
              <div>
                <div className="size-cont flex justify-center items-center gap-8 mb-[12%]">
                  <div className="size w-[70px] h-[70px] bg-secondary rounded-full text-center py-3  font-sans text-3xl font-bold">R</div>
                  <div className="size w-[70px] h-[70px] bg-secondary rounded-full text-center py-3  font-sans text-3xl font-bold">L</div>
                  <div className="size w-[70px] h-[70px] bg-secondary rounded-full text-center py-3  font-sans text-3xl font-bold">XL</div>
                </div>
              </div>
            </div>
            <div className="pick-delivery-cont flex flex-col items-center">
              <div className="pick-delivery font-sans text-xl mt-[9%] mb-[4.3%]">Choose Delivery Methods</div>
              <div className="delivery-cont flex gap-5 mb-[9%]">
                <button className="delivery active-btn h-[49px] bg-main text-white border border-solid border-[#bababa] rounded-xl px-5 shadow-deliveryButton">Dine in</button>
                <button className="delivery h-[49px] bg-[#f4f4f8] text-[#bababa] border border-solid border-[#bababa] rounded-xl px-5 ">Door Delivery</button>
                <button className="delivery h-[49px] bg-[#f4f4f8] text-[#bababa] border border-solid border-[#bababa] rounded-xl px-5 ">Pick up</button>
              </div>
              <div className="time-cont flex gap-7 justify-center pt-[2%] pb-[200px] md:pb-[31%] w-full">
                <label className="font-sans text-xl" htmlFor="time">
                  Set time:{" "}
                </label>
                <input className="text-fonta bg-[#ededed] text-[14px] border-b border-fonta w-[60vw] lg:w-[230px]" type="text" name="time" placeholder="Enter the time you'll arrived" />
              </div>
            </div>
          </section>

          <section className="card-cont absolute bottom-[-6%] md:bottom-[-5%] left-[5%] flex flex-col lg:flex-row justify-center lg:justify-center gap-8 w-[90vw]">
            <div className="card-details-cont lg:w-[63%] flex flex-col md:flex-row md:justify-between items-center bg-white h-[190px] md:h-[168px] pr-[5%] pl-[3.8%] shadow-cardShadow rounded-[20px] gap-6 justify-center">
              <div className="card-product flex items-center gap-11">
                <div className="card-img-cont w-[100px] h-[100px] rounded-full overflow-hidden">
                  <div className="card-img bg-coldBrew w-[220px] h-[255px] bg-cover -translate-x-[27%] -translate-y-[60%]"></div>
                </div>
                <div className="card-details">
                  <div className="card-product-name">
                    <p className="font-sans text-[25px] leading-9 font-bold">COLD BREW</p>
                  </div>
                  <p className="card-size font-sans text-xl leading-9">x1 (Large)</p>
                  <p className="card-size font-sans text-xl leading-9">x1 (Regular)</p>
                </div>
              </div>
              <div className="quantity-cont flex items-center gap-6">
                <button className="w-[40px] h-[40px] bg-[#e7a936] text-main text-[25px] font-sans font-black border-none rounded-full">-</button>
                <p className="quantity">2</p>
                <button className="w-[40px] h-[40px] bg-[#e7a936] text-main text-[25px] font-sans font-black border-none rounded-full">+</button>
              </div>
            </div>
            <button className="check-out lg:w-[23.4%] h-[70px] tabXl:h-[168px] font-sans text-[25px] leading-9 bg-secondary border-none shadow-yellowBtn rounded-[20px]">Checkout</button>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default ProductDetails;
