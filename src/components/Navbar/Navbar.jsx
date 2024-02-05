import React, {useState} from 'react';
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLarge, faChevronDown, faChevronUp, faHeart,faBox, faCircleQuestion, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import freeDelivery1 from "../../assets/nav/freedelivery1.gif";
import jumiakenya from "../../assets/nav/jumia.png";
import jumiaIcon from "../../assets/nav/jumiaIcon.png";
import pay from "../../assets/nav/pay.png";
import searchIcon from "../../assets/nav/searchIcon.png";

function Navbar() {
  // State to manage the visibility of additional account items
  const [isChevronDown, setIsChevronDown] = useState(true);


  return (
    <div className={styles.container}>
      {/* The first div containing Free delivery gifs  */}

      <div className={styles.navbarImage}>
        <img src={freeDelivery1} alt="navbar-gif" />
      </div>

      {/* The second div containing Sell on Jumia,Jumia and Pay */}
      <div className={styles.iconsContainer}>
        <div className={styles.firstIcon}>
          <a href="/">
            <img
              src={jumiaIcon}
              alt="jumia-icon"
              className={styles.jumiaIcon1}
            />
            Sell on Jumia
          </a>
          <img src={jumiakenya} alt="jumiaIcon" className={styles.jumiaIcon2} />
          <img src={pay} alt="pay-png" className={styles.pay} />
        </div>

        {/* The third div containing the search section */}
        <div className={styles.search}>
          <div className={styles.innerContainer}>
            <img src={jumiakenya} alt="jumia-kenya" />

            <div className={styles.searchBar}>
              <img
                src={searchIcon}
                alt="search-icon"
                className={styles.searchbarIcon}
              />
              <input
                type="text"
                name="search"
                placeholder="Search products,brands and categories"
              />
            </div>
            <button className={styles.searchButton}>SEARCH</button>

            {/* Account icon */}
            <div className={`${styles.account} ${isChevronDown ? '': styles.upHover}`} onClick={() =>setIsChevronDown(!isChevronDown)}>
            <FontAwesomeIcon icon={faUserLarge} className={styles.faUserLarge} />
            <p className={styles.accountParagraph}>Account</p>
            <FontAwesomeIcon icon={isChevronDown ? faChevronDown : faChevronUp} className={styles.faChevronDown} />
            {!isChevronDown && (
              <div className={styles.additionalItems}>
                <a href='/signIn' className={styles.signIn}>SIGN IN</a>
                <a href='/myAccount' className={styles.myAccount} ><FontAwesomeIcon icon={faUserLarge} />My Account</a>
                <a href='/orders'className={styles.myAccount} ><FontAwesomeIcon icon={faBox} /><p>Orders</p></a>
                <a href='/saved'className={styles.myAccount} ><FontAwesomeIcon icon={faHeart} />Saved Items</a>

              </div>
            )}


            {/* <FontAwesomeIcon icon={faCircleQuestion} /> */}
            {/* <FontAwesomeIcon icon={faChevronDown} /> */}
            {/* <FontAwesomeIcon icon={faCartShopping} /> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
