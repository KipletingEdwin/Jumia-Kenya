import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLarge, faChevronDown, faChevronUp, faHeart, faBox, faCircleQuestion, faMessage, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import freeDelivery1 from "../../assets/nav/freedelivery1.gif";
import jumiakenya from "../../assets/nav/jumia.png";
import jumiaIcon from "../../assets/nav/jumiaIcon.png";
import pay from "../../assets/nav/pay.png";
// import { Link } from "react-router-dom";

function Navbar() {
  // State to manage the visibility of additional account items
  const [isChevronDown, setIsChevronDown] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen); //Toggle chevron state
  };

  const handleChevronClick = () => {
    setIsChevronDown(!isChevronDown);
  };

  return (
    <section className={styles.container}>
      {/* The first div containing Free delivery gifs  */}

      <div className={styles.navbarImage}>
        <img src={freeDelivery1} alt="navbar-gif" />
      </div>

      {/* The second div containing Sell on Jumia,Jumia and Pay */}
      <div className={styles.iconsContainer}>
        <div className={styles.firstIcon}>
          <div className={styles.iconsStore}>
            <a href="/">
              <img
                src={jumiaIcon}
                alt="jumia-icon"
                className={styles.jumiaIcon1}
              />
              Sell on Jumia
            </a>
            <img
              src={jumiakenya}
              alt="jumiaIcon"
              className={styles.jumiaIcon2}
            />
            <img src={pay} alt="pay-png" className={styles.pay} />
          </div>
        </div>

        {/* The third div containing the search section */}
        <div className={styles.search}>
          <div className={styles.innerContainer}>
            <img src={jumiakenya} alt="jumia-kenya" />

            <div className={styles.searchBar}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles.searchbarIcon}
              />
              <input
                type="text"
                name="search"
                placeholder="Search products,brands and categories"
              />
            </div>
            <button className={styles.searchButton}>SEARCH</button>

            {/* ACCOUNT ICON */}


            <div
              className={`${styles.account} ${
                isChevronDown ? "" : styles.upHover
              }`}
              onClick={handleChevronClick}
            >
              <FontAwesomeIcon
                icon={faUserLarge}
                className={styles.faUserLarge}
              />
              <p className={styles.accountParagraph}>Account</p>
              <FontAwesomeIcon
                icon={isChevronDown ? faChevronDown : faChevronUp}
                className={styles.faChevronDown}
              />


              {!isChevronDown && (
                <div className={styles.additionalItems}>
                  {/* Use Link component for navigation */}
                  <a href="/signIn" className={styles.signIn}>
                    SIGN IN
                  </a>
                  <a to="/myAccount" className={styles.myAccount}>
                    <FontAwesomeIcon
                      icon={faUserLarge}
                      className={styles.faUserLargeA}
                    />
                    My Account
                  </a>
                  <a to="/orders" className={styles.myAccount}>
                    <FontAwesomeIcon icon={faBox} className={styles.faBox} />
                    Orders
                  </a>
                  <a to="/saved" className={styles.myAccount}>
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={styles.faHeart}
                    />
                    Saved Items
                  </a>
                </div>
              )}
            </div>



            {/* HELP BUTTON */}
            <div
              className={`${styles.helpContainer} ${
                isDropdownOpen ? "" : styles.isDropdownOpen
              }`}
              onClick={handleDropdownClick}
            >
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className={styles.faCircleQuestion}
              />
              <p className={styles.accountParagraph}>Help</p>
              <FontAwesomeIcon
                icon={isDropdownOpen ? faChevronDown : faChevronUp}
                className={styles.chevron}
              />

              {!isDropdownOpen && (
                <div className={styles.additionalHelpContainer}>
                  <a href="/helpCenter"> Help Center</a>
                  <a href="/placeOrder"> Place an Order</a>
                  <a href="/trackOrder"> Track an Order</a>
                  <a href="/orderCancellation">Order Cancellation</a>
                  <a href="/returnsRefunds"> Returns & Refunds</a>
                  <a href="/payment"> Payment & Jumia Account</a>
                  <button>
                    <FontAwesomeIcon
                      icon={faMessage}
                      className={styles.liveChatFaMessage}
                    />
                    LIVE CHAT
                  </button>
                </div>
              )}
            </div>


            {/* CART BUTTON */}

            <div className={styles.cart}>
              <FontAwesomeIcon icon={faCartShopping} />
              <a href="/myCart">Cart</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
