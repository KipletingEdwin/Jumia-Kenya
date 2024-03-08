import React from "react";
import styles from "./HelpCentre.module.css";
import OrdersData from "../../Data/helpcentre.json";

function HelpCentre() {
  return (
    <section className={styles.container}>
      <div className={styles.helpCentreContainer}>
        
        <div className={styles.helpCentre}>
          <h4>Help Center</h4>
          <h3> Hi, how can we help you?</h3>
        </div>

        <div className={styles.help}>
          {OrdersData.map((order, id) => (
            <div key={id} className={styles.orders}>
              <h3>{order.title}</h3>
              <img src={order.helpCentreImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HelpCentre;
