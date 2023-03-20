import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";

const title = "Forgot Password?";

export class ForgotPassword extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <main className="bg-forgotPwdBg bg-cover px-3">
          <section className="head text-center text-white ">
            <h1 className="title pt-10 tabXl:pt-40 font-sans text-[60px]">Forgot your Password?</h1>
            <p className="title-desc font-sans text-2xl">Dont worry, we got your back!</p>
          </section>
          <section className="form flex flex-col tabXl:flex-row justify-center items-center gap-7 mt-14 md:mt-24">
            <input className="w-full tabXl:w-[60%] h-[129px] text-xl tabXl:text-3xl pl-9 border-none rounded-[20px] font-sans" id="user-email" type="email" placeholder="Enter your email adress to get link" />
            <button className="send-btn w-full tabXl:w-[18%] h-[129px] text-3xl bg-secondary text-main border-none shadow-yellowBtn rounded-[20px] font-sans">Send</button>
          </section>
          <div id="reset-link" className="mt-[1%] text-xl"></div>
          <p className="alert mt-[50px] md:mt-[100px] text-center text-white text-3xl font-sans">Click here if you didnt receive any link in</p>
          <p className="alert-1 text-center text-white text-3xl font-sans">2 minutes</p>
          <section className="center-btn flex justify-center items-center mt-5">
            <button className="resend-btn w-full tabXl:w-[38.5%] h-[129px] bg-main text-white text-3xl border-none shadow-resendBtn rounded-[20px] font-sans">Resend link</button>
          </section>
          <p className="time mt-5 pb-24 text-center text-white text-3xl font-sans">01:54</p>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default ForgotPassword;
