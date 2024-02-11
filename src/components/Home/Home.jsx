import React from 'react';
import styles from './Home.module.css';
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

    </section>
  )
}

export default Home