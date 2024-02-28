import React from "react";
import styles from "./Home.module.css";
import valentines from '../../Data/Images.json';
import helpCentreGif from "../../assets/helpCentre/helpCentre.gif";
import IconsData from '../../Data/Icons.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconsMapping } from "../iconsMapping";

import {
  faCircleQuestion,
  faArrowsRotate,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";

console.log(IconsData);

function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.menu}>
          
          {IconsData.map((Icon, index) => {
            const iconObject = iconsMapping[Icon.icon];
            return (
              <div key={index} className={styles.menu}>
                <a href={Icon.href}>
                  <FontAwesomeIcon 
                    icon={iconObject}
                    className={styles.fontAwesomeIcon}
                  />
                  {Icon.name}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.imagesSlider}>
        <div className={styles.sliderContent}>
          {valentines.map((valentine, index) => (
            <div className={styles.sliderContent} key={index}> 
              <a href="/valentine1">
                <img src={valentine.imageSrc} alt={valentine.name}/>
              </a>
            </div>
          ))}
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
