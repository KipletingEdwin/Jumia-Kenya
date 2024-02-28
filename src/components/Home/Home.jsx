import React from "react";
import styles from "./Home.module.css";
import valentines from '../../Data/Images.json';
import helpCentreGif from "../../assets/helpCentre/helpCentre.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMobile,
  faRadio,
  faDesktop,
  faShirt,
  faAppleWhole,
  faFaceGrinBeamSweat,
  faDumbbell,
  faGasPump,
  faBottleDroplet,
  faHotel,
  faEllipsis,
  faCircleQuestion,
  faArrowsRotate,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.menu}>
          <a href="/officailStore">
            <FontAwesomeIcon
              icon={faBagShopping}
              className={styles.fontAwesomeIcon}
            />
            Official Stores
          </a>
          <a href="/phones&tablets">
            <FontAwesomeIcon
              icon={faMobile}
              className={styles.fontAwesomeIcon}
            />
            Phones & Tablets
          </a>
          <a href="/tv&audio">
            <FontAwesomeIcon
              icon={faRadio}
              className={styles.fontAwesomeIcon}
            />
            TVs & Audio
          </a>
          <a href="appliances">
            <FontAwesomeIcon
              icon={faGasPump}
              className={styles.fontAwesomeIcon}
            />
            Appliances
          </a>
          <a href="/Health&Beauty">
            <FontAwesomeIcon
              icon={faBottleDroplet}
              className={styles.fontAwesomeIcon}
            />
            Health & Beauty
          </a>
          <a href="home&office">
            <FontAwesomeIcon
              icon={faHotel}
              className={styles.fontAwesomeIcon}
            />
            Home & Office
          </a>
          <a href="/fashion">
            <FontAwesomeIcon
              icon={faShirt}
              className={styles.fontAwesomeIcon}
            />
            Fashion
          </a>
          <a href="/computing">
            <FontAwesomeIcon
              icon={faDesktop}
              className={styles.fontAwesomeIcon}
            />
            Computing
          </a>
          <a href="/supermarket">
            <FontAwesomeIcon
              icon={faAppleWhole}
              className={styles.fontAwesomeIcon}
            />
            Supermarket
          </a>
          <a href="/babyproducts">
            <FontAwesomeIcon
              icon={faFaceGrinBeamSweat}
              className={styles.fontAwesomeIcon}
            />
            Baby Products
          </a>
          <a href="/Sporting Goods">
            <FontAwesomeIcon
              icon={faDumbbell}
              className={styles.fontAwesomeIcon}
            />
            Sporting Goods
          </a>
          <a href="/othergoods">
            <FontAwesomeIcon
              icon={faEllipsis}
              className={styles.fontAwesomeIcon}
            />
            Other categories
          </a>
        </div>
      </div>
      <div className={styles.imagesSlider}>
        <div className={styles.sliderContent}>

        {
  valentines.map((valentine, index) => {
    return (
      <div className={styles.sliderContent} key={index}> 
        <a href="/valentine1">
          <img src={valentine.imageSrc} alt={valentine.name}/>
        </a>
      </div>
    );
  })
}

        </div>
      </div>

      <div className={styles.helpCentre}>
        <div className={styles.TopHelpCentre}>
          <div className={styles.items}>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className={styles.itemsListIcons}
            />
            <div className={styles.itemsList}>
              <a href="/helpcentre">HELP CENTER</a>
              <p>Guide To Customer Care</p>
            </div>
          </div>
          <div className={styles.items}>
            <FontAwesomeIcon
              icon={faArrowsRotate}
              className={styles.itemsListIcons}
            />
            <div className={styles.itemsList}>
              <a href="/easyreturn">EASY RETURN</a>
              <p>Quick refund</p>
            </div>
          </div>
          <div className={styles.items}>
            <FontAwesomeIcon
              icon={faMoneyBill1Wave}
              className={styles.itemsListIcons}
            />
            <div className={styles.itemsList}>
              <a href="/sellOnJumia">SELL ON JUMIA</a>
              <p>Millions of Visitors</p>
            </div>
          </div>
        </div>
        <div className={styles.bottomHelpCentre}>
          <img src={helpCentreGif} alt="helpCentreGif" />
        </div>
      </div>
    </section>
  );
}

export default Home;
