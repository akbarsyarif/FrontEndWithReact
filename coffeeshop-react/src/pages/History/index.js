import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import HeaderHistory from "../../components/Header/HeaderHistory";

const title = "History";

export class History extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <HeaderHistory />
        <main className="px-3 py-10 md:px-10 md:py-20 xl:pt-28 xl:pb-24 xl:px-32 bg-bghistory bg-cover bg-center">
          <h2 className="title text-center text-2,5 text-white leading-10 drop-shadow-title">Lets see what you have bought!</h2>
          <p className="title-desc text-center mt-4 mb-20 text-xl text-white drop-shadow-title">Long press to delete them</p>
          <section className="card-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-6">
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered To Table 4</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered To Table 5</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered To Table 6</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered To Table 7</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered To Table 8</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered To Table 9</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered To Table 10</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered To Table 11</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered To Table 12</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered To Table 13</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered To Table 14</p>
                </div>
              </section>
            </section>
            <section className="product-card-cont relative">
              <div id="delete-option">
                <span id="delete-btn"> </span>
                <span id="cross-btn"> </span>
              </div>
              <section className="product-card flex items-center w-96 gap-4 py-4 pl-6 bg-white drop-shadow-title rounded-2xl">
                <div className="product-wrap overflow-hidden rounded-full w-20 h-20">
                  <div className="product-photo bg-veggieTomatoMix w-32 h-32 bg-cover bg-left-bottom transform -translate-x-6"></div>
                </div>
                <div className="product-desc">
                  <p className="product-name font-sans text-2xl font-bold">Veggie tomato mix</p>
                  <p className="product-price font-sans text-xl font-normal text-fontd">IDR 34.000</p>
                  <p className="product-details font-sans text-xl font-normal text-main">Delivered To Table 15</p>
                </div>
              </section>
            </section>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default History;
