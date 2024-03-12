import React from "react";
import styles from "./TrackOrder.module.css";
import YouTube from "react-youtube";
import loginImage from "../../assets/track/login.png";
import stepTwoImage from "../../assets/track/stepTwo.png";
import stepThree from "../../assets/track/stepThree.png";
import stepFour from "../../assets/track/stepFour.png";

function TrackOrder() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <section className={styles.container}>
      {/* How to track your package */}

      <div className={styles.stepZero}>
        <h2> How to track your package </h2>
        <p>
          Tracking your order on Jumia is easy and simple. Here's how to do it:
        </p>
        <ul>
          <li>
            <span> Step 1: </span> Log in to your account
          </li>
          <li>
            <span> Step 2: </span> Click on the "Orders" tab in your account
            dashboard.
          </li>
          <li>
            <span> Step 3: </span> Find the order you want to track and click on
            "See Details."
          </li>
        </ul>

        <YouTube
          videoId="UyY7Zf9n4W0"
          opts={opts}
          className={styles.videoContainer}
        />
      </div>

      {/* Step One */}
      <div className={styles.stepOne}>
        <ul>
          <li>
            {" "}
            <span> Step 1:</span> Log in to your Jumia account{" "}
          </li>
        </ul>
        <p>
          {" "}
          Access the <a href="/">JUMIA WEBSITE </a>and log in to your account.{" "}
        </p>
        <img src={loginImage} alt="order" />
      </div>

      {/* Step Two */}
      <div className={styles.stepTwo}>
        <p>
          {" "}
          <span> Step 2: </span> Click on the "Orders" tab in your account
          dashboard{" "}
        </p>
        <p> On your My Account area, access the Order tab. </p>
        <img src={stepTwoImage} alt="order" />
      </div>

      {/* Step Three */}

      <div className={styles.stepThree}>
        <p>
          {" "}
          <span> Step 3:</span> Find the order you want to track and click on
          "See Details”{" "}
        </p>
        <p>
          {" "}
          On the order details page, you can view the current status and a
          complete tracking history, including a link to track the status live.
        </p>
        <img src={stepThree} />
      </div>

      {/* Step Four */}

      <div className={styles.stepFour}>
        <p>
          {" "}
          <span> Step 4: </span> On the order details page, click on track my
          item to view the current status and a complete tracking history.
        </p>
        <img src={stepFour} />
        <p>
          {" "}
          Alternatively, you can also track your order by using your package
          number provided in your shipping confirmation email. Simply enter the
          package number into Jumia's <a href="/">PACKAGE TRACKING PAGE</a> to
          view the latest updates on your package.
        </p>
        <p>
          {" "}
          Stay updated on the status of your Jumia order and enjoy a seamless
          shopping experience by following these simple steps.
        </p>
      </div>

      {/* Delivery Times */}

      <div className={styles.delivery}>
        <h3> Delivery Times </h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>JUMIA EXPRESS</th>
              <th>STANDARD SHIPPING</th>
              <th>SHIPPED FROM OVERSEAS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                #Nairobi #Kiambu Town #Thika Town #Syokimau/#Mlolongo/#Athi
                River
              </td>
              <td>1 BUSINESS DAY(S)</td>
              <td>2 - 3 BUSINESS DAY(S)</td>
              <td>11 - 14 BUSINESS DAY(S)</td>
            </tr>
            <tr>
              <td>#Mombasa #Naivasha #Eldoret #Kisumu</td>
              <td>2 - 3 BUSINESS DAY(S)</td>
              <td>2 - 3 BUSINESS DAY(S)</td>
              <td>12 - 14 BUSINESS DAY(S)</td>
            </tr>
            <tr>
              <td>#Bungoma #Busia #Kilifi #Kisii</td>
              <td>2 - 4 BUSINESS DAY(S)</td>
              <td>3 - 4 BUSINESS DAY(S)</td>
              <td>12 - 15 BUSINESS DAY(S)</td>
            </tr>
            <tr>
              <td>#Kakamega #Kericho #Siaya #Turkana #Isiolo</td>
              <td>2 - 4 BUSINESS DAY(S)</td>
              <td>3 - 5 BUSINESS DAY(S)</td>
              <td>12 - 16 BUSINESS DAY(S)</td>
            </tr>
          </tbody>
        </table>
        <h6> We hope this guide has been helpful. Happy shopping! </h6>
      </div>
    </section>
  );
}

export default TrackOrder;
