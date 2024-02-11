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
                <a href='/officailStore'><FontAwesomeIcon icon={faBagShopping} />Official Stores</a>
                <a href='/phones&tablets'><FontAwesomeIcon icon={faMobile} />Phones & Tablets</a>
                <a href='/tv&audio'><FontAwesomeIcon icon={faRadio} /></a>
                <a href='appliances'><FontAwesomeIcon icon={faGasPump} />Appliances</a>
                <a href='/Health&Beauty'><FontAwesomeIcon icon={faBottleDroplet} />Health & Beauty</a>
                <a href='home&office'><FontAwesomeIcon icon={faHotel} />Home & Office</a>
                <a href='/fashion'><FontAwesomeIcon icon={faShirt} />Fashion</a>
                <a href='/computing'><FontAwesomeIcon icon={faDesktop} />Computing</a>
                <a href='/supermarket'><FontAwesomeIcon icon={faAppleWhole} />Supermarket</a>
                <a href='/babyproducts'><FontAwesomeIcon icon={faFaceGrinBeamSweat} />Baby Products</a>
                <a href='/Sporting Goods'><FontAwesomeIcon icon={faDumbbell} />Sporting Goods</a>
                <a href='/othergoods'><FontAwesomeIcon icon={faEllipsis} />Other categories</a>

            </div>

        </div>

    </section>
  )
}

export default Home