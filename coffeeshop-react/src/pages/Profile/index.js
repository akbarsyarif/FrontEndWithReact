import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import HeaderProfile from "../../components/Header/HeaderProfile";

const title = "Profile Page";

export class Profile extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <HeaderProfile />
        <main className="grid">
          <section className="head">
            <h1>User Profile</h1>
          </section>
          <section className="user-wrap">
            <div className="user">
              <div className="edit-photo">
                <div className="edit-btn-profile">
                  <img src="./images/edit-btn.svg" alt="edit-btn.svg" />
                </div>
              </div>
              <div className="user-pic"></div>
            </div>
            <p className="profile-name">Zulaikha</p>
            <p className="profile-email">zulaikha17@gmail.com</p>
            <p className="profile-detail">Has been ordered 15 products</p>
            <div className="bottom-line"></div>
          </section>

          <section className="contact-wrap">
            <div className="contact">
              <h2>Contacts</h2>
              <div className="edit-btn">
                <img src="./images/edit-btn.svg" alt="edit-btn.svg" />
              </div>
            </div>
            <div className="email-mobile-wrap">
              <div className="form email">
                <label id="email-alert" htmlFor="email">
                  Email Adress :
                </label>
                <input id="email" type="email" name="email" value="zulaikha17@gmail.com" />
              </div>
              <div className="form phone-number">
                <label id="mobile-alert" htmlFor="phone-number">
                  Mobile Number :
                </label>
                <input id="phone-number" type="text" name="phone-number" value="081345678212" />
              </div>
            </div>
            <div className="form user-adress">
              <label id="adress-alert" htmlFor="user-adress">
                Delivery Adress :
              </label>
              <textarea id="adress" name="user-adress" rows="2">
                Iskandar Street no. 67 Block A Near Bus Stop
              </textarea>
            </div>
            <div className="bottom-line"></div>
          </section>

          <section className="details">
            <div className="details-wrap">
              <h2>Details</h2>
              <div className="edit-btn">
                <img src="./images/edit-btn.svg" alt="edit-btn.svg" />
              </div>
            </div>
            <div className="displayname-birth-wrap">
              <div className="form display-name">
                <label htmlFor="display-name">Display name :</label>
                <input type="text" name="display-name" value="Zulaikha" />
              </div>
              <div className="form birth">
                <label htmlFor="birth">DD/MM/YY :</label>
                <input type="date" name="birth" value="1990-04-03" />
              </div>
            </div>
            <div className="fname-gender-wrap">
              <div className="form fname">
                <label htmlFor="first-name">First name :</label>
                <input type="text" name="first-name" value="Zulaikha" />
              </div>
              <div className="gender">
                <input type="radio" name="male" />
                <label htmlFor="male">Male</label>
                <br />
                <input type="radio" name="female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <div className="form lname">
              <label htmlFor="last-name">Last name :</label>
              <input type="text" name="last-name" value="Nirmala" />
            </div>
            <div className="bottom-line"></div>
          </section>

          <section className="profile-btn">
            <h3>Do you want to save the change?</h3>
            <button className="save">Save Change</button>
            <button className="cancel">Cancel</button>
          </section>
          <section className="log-out">
            <button>
              Edit Password <img src="./images/arrow-right.svg" alt="arrow-right.svg" />
            </button>
            <button>
              Log out <img src="./images/arrow-right.svg" alt="arrow-right.svg" />
            </button>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Profile;
