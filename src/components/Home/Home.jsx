import React from 'react';
import styles from './Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBagShopping,
    faMobile,
    faRadio
    
  } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <section className={styles.container}>
        <div className={styles.topBar}>
            <div className={styles.menu}>
                <a href='/officailStore'><FontAwesomeIcon icon={faBagShopping} />Official Stores</a>
                <a href='/phones&tablets'><FontAwesomeIcon icon={faMobile} />Phones & Tablets</a>
                <a href='/tv&audio'><FontAwesomeIcon icon={faRadio} /></a>
                <a href='appliances'>Appliances</a>
                <a href='/Health&Beauty'>Health & Beauty</a>
                <a href='home&office'>Home & Office</a>
                <a href='/fashion'>Fashion</a>
                <a href='/computing'>Computing</a>
                <a href='/supermarket'>Supermarket</a>
                <a href='/babyproducts'>Baby Products</a>
                <a href='/Sporting Goods'>Sporting Goods</a>
                <a href='/othergoods'>Other categories</a>

            </div>

        </div>

    </section>
  )
}

export default Home