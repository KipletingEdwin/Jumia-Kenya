import React from 'react';
import styles from './Home.module.css';
import valentine1 from '../../assets/imageSlides/valentine1.gif';
import valentine2 from '../../assets/imageSlides/valentine2.jpg';
import valentine3 from '../../assets/imageSlides/valentine3.jpg';
import valentine4 from '../../assets/imageSlides/valentine4.jpg';
import valentine5 from '../../assets/imageSlides/valentine5.jpg';
import valentine6 from '../../assets/imageSlides/valentine6.jpg';
import valentine7 from '../../assets/imageSlides/valentine7.jpg';
import valentine8 from '../../assets/imageSlides/valentine8.jpg';
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
    faEllipsis
    
  } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <section className={styles.container}>
        <div className={styles.topBar}>
            <div className={styles.menu}>
                <a href='/officailStore'><FontAwesomeIcon icon={faBagShopping} className={styles.fontAwesomeIcon} />Official Stores</a>
                <a href='/phones&tablets'><FontAwesomeIcon icon={faMobile} className={styles.fontAwesomeIcon} />Phones & Tablets</a>
                <a href='/tv&audio'><FontAwesomeIcon icon={faRadio} className={styles.fontAwesomeIcon} />TVs & Audio</a>
                <a href='appliances'><FontAwesomeIcon icon={faGasPump} className={styles.fontAwesomeIcon} />Appliances</a>
                <a href='/Health&Beauty'><FontAwesomeIcon icon={faBottleDroplet} className={styles.fontAwesomeIcon} />Health & Beauty</a>
                <a href='home&office'><FontAwesomeIcon icon={faHotel} className={styles.fontAwesomeIcon} />Home & Office</a>
                <a href='/fashion'><FontAwesomeIcon icon={faShirt} className={styles.fontAwesomeIcon} />Fashion</a>
                <a href='/computing'><FontAwesomeIcon icon={faDesktop} className={styles.fontAwesomeIcon} />Computing</a>
                <a href='/supermarket'><FontAwesomeIcon icon={faAppleWhole} className={styles.fontAwesomeIcon}/>Supermarket</a>
                <a href='/babyproducts'><FontAwesomeIcon icon={faFaceGrinBeamSweat}className={styles.fontAwesomeIcon} />Baby Products</a>
                <a href='/Sporting Goods'><FontAwesomeIcon icon={faDumbbell}className={styles.fontAwesomeIcon} />Sporting Goods</a>
                <a href='/othergoods'><FontAwesomeIcon icon={faEllipsis}className={styles.fontAwesomeIcon} />Other categories</a>
            </div>
        </div>
        <div className={styles.imagesSlider}>
              <div className={styles.sliderContent}>
                <a href='/valentine1'><img src={valentine1} alt='valentine1'/></a>
                <a href='/valentine2'><img src={valentine2} alt='valentine2'/></a>
                <a href='/valentine3'><img src={valentine3} alt='valentine3'/></a>
                <a href='/valentine4'><img src={valentine4} alt='valentine4'/></a>
                <a href='/valentine5'><img src={valentine5} alt='valentine5'/></a>
                <a href='/valentine6'><img src={valentine6} alt='valentine6'/></a>
                <a href='/valentine7'><img src={valentine7} alt='valentine7'/></a>
                <a href='/valentine8'><img src={valentine8} alt='valentine8'/></a>

              </div>

            </div>
    </section>
  )
}

export default Home