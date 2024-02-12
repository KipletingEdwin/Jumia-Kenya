import React, { useState } from "react";
import styles from "./Home.module.css";
import valentine1 from "../../assets/imageSlides/valentine1.gif";
import valentine2 from "../../assets/imageSlides/valentine2.jpg";
import valentine3 from "../../assets/imageSlides/valentine3.jpg";
import valentine4 from "../../assets/imageSlides/valentine4.jpg";
import valentine5 from "../../assets/imageSlides/valentine5.jpg";
import valentine6 from "../../assets/imageSlides/valentine6.jpg";
import valentine7 from "../../assets/imageSlides/valentine7.jpg";
import valentine8 from "../../assets/imageSlides/valentine8.jpg";
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    valentine1,
    valentine2,
    valentine3,
    valentine4,
    valentine5,
    valentine6,
    valentine7,
    valentine8
  ];
  const handlePrevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
  };

  const handleDotClick = () => {
    setCurrentSlide(index);
  };

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
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.side} ${
              index === currentSlide ? styles.activeSlide : ""
            }`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}

        <div className={styles.navigation}>
          <button onClick={handlePrevSlide}>Previous</button>
          <button onClick={handleNextSlide}>Next</button>
        </div>

        <div className={styles.dots}>
          {slides.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentSlide ? styles.activeDot : ""
              }`}
            >
              onClick={() => handleDotClick(index)}
            </span>
          ))}
        </div>
        {/* <div className={styles.sliderContent}>
          <a href="/valentine1">
            <img src={valentine1} alt="valentine1" />
          </a>
          <a href="/valentine2">
            <img src={valentine2} alt="valentine2" />
          </a>
          <a href="/valentine3">
            <img src={valentine3} alt="valentine3" />
          </a>
          <a href="/valentine4">
            <img src={valentine4} alt="valentine4" />
          </a>
          <a href="/valentine5">
            <img src={valentine5} alt="valentine5" />
          </a>
          <a href="/valentine6">
            <img src={valentine6} alt="valentine6" />
          </a>
          <a href="/valentine7">
            <img src={valentine7} alt="valentine7" />
          </a>
          <a href="/valentine8">
            <img src={valentine8} alt="valentine8" />
          </a>
        </div> */}
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
