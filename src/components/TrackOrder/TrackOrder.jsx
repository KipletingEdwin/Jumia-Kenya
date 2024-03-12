import React from "react";
import styles from "./TrackOrder.module.css";
import YouTube from 'react-youtube';

function TrackOrder() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <section className={styles.container}>
      {/* How to track your package */}

      <div className={styles.stepOne}>
        <h5> How to track your package </h5>
        <p>
          {" "}
          Tracking your order on Jumia is easy and simple. Here's how to do it:{" "}
        </p>
        <ul>
          <li>
            <span> Step 1: </span> Log in to your account{" "}
          </li>
          <li>
            {" "}
            <span> Step 2: </span> Click on the "Orders" tab in your account
            dashboard.{" "}
          </li>
          <li>
            {" "}
            <span> Step 3: </span> Find the order you want to track and click on
            "See Details."{" "}
          </li>
        </ul>

        <YouTube
          videoId="UyY7Zf9n4W0" 
          opts={opts}
        />
      </div>
    </section>
  );
}

export default TrackOrder;
