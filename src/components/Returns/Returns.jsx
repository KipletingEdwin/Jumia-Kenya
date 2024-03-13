import React from "react";
import styles from "./Returns.module.css";
import YouTube from "react-youtube";
import stepOne from "../../assets/returns/Returnstep1.png";
import stepTwo from "../../assets/returns/Returnstep2.png";
import stepThree from "../../assets/returns/Returnstep3.png";
import stepFour from "../../assets/returns/Returnstep4.png";
import stepFive from "../../assets/returns/Returnstep5.png";
import stepSix from "../../assets/returns/Returnstep6.png";
import stepSeven from "../../assets/returns/Returnstep7.png";
import stepEight from "../../assets/returns/Returnstep8.png";
import stepNine from "../../assets/returns/Returnstep9.png";

function Returns() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <section className={styles.container}>
      <div className={styles.return}>
        <p> How to create a return </p>
        <YouTube
          videoId="UyY7Zf9n4W0"
          opts={opts}
          className={styles.videoContainer}
        />
        <h6> Return Policy and Guidelines: </h6>
        <ul>
          <li> You can initiate a return within 10 days after delivery. </li>
          <li>
            {" "}
            For wrong, damaged and counterfeit items raise or create a return
            immediately.{" "}
          </li>
          <li>
            {" "}
            When returning an item, keep all seals, tags, accessories intact and
            ensure the item is in its original packaging.
          </li>
          <li>
            {" "}
            Remove any passwords from devices being returned, otherwise the
            return will be invalid.{" "}
          </li>
        </ul>
        <h6>
          {" "}
          Please note that items must meet Jumia's return policy guidelines to
          be eligible for a refund.{" "}
        </h6>
        <h5> Once the return is created, please note that: </h5>
        <p>
          {" "}
          If you have chosen to return your item(s) to a Jumia pickup station:{" "}
        </p>
        <ul>
          <li>
            {" "}
            Please drop off your item(s) as soon as possible. Your return
            request will be canceled if the package is not dropped off within 4
            days following the return creation.
          </li>
          <li>
            {" "}
            If you have chosen to have our delivery agent pick up your return
            item(s) from your delivery address: please be aware that our agent
            will contact you within one business day to schedule a pickup. If
            the items are not picked up within two attempts, your return request
            will be canceled.
          </li>
        </ul>
        <p>
          {" "}
          If your return request is validated, our refund timelines will be as
          follows:{" "}
        </p>
        <ul>
          <li>
            If you paid with Mobile Money , the refund will be issued back to
            your Mobile Money account. It may take up to 48 working hours for
            the refund to reflect in your account.
          </li>
          <li>
            {" "}
            If you paid via bank card, you will receive the refund back to your
            bank card within 3 - 5 business days.{" "}
          </li>
          <li>
            {" "}
            If you have chosen a voucher as your refund method, your refund
            voucher will be processed immediately and you will receive an e-mail
            with your voucher code.{" "}
          </li>
        </ul>
      </div>

      {/* STEP ONE */}

      <div className={styles.stepOne}>
        <span> How to create a return request </span>
        <p>
          {" "}
          <span> Step 1: </span> Log in to your Jumia account and click on
          "ORDERS".
        </p>
        <img src={stepOne} alt="step-one" />
      </div>

      {/* STEP TWO */}

      <div className={styles.stepTwo}>
        <p>
          {" "}
          <span> Step 2: </span> Choose the item you want to return and Click on
          "See Details".{" "}
        </p>
        <img src={stepTwo} alt="step-two" />
      </div>

      {/* STEP THREE */}

      <div className={styles.stepThree}>
        <p>
          {" "}
          <span> Step 3:</span> Proceed to click on "request a return".{" "}
        </p>
        <img src={stepThree} alt="step-three" />
      </div>

      {/* STEP FOUR */}

      <div className={styles.stepFour}>
        <p>
          {" "}
          <span> Step 4: </span>Select the quantity and return reason. Give more
          details to help us understand the issue and proceed to click on
          "Next".
        </p>
        <img src={stepFour} alt="step-four" />
      </div>

      {/* STEP FIVE */}

      <div className={styles.stepFive}>
        <p>
          {" "}
          <span> Step 5: </span> Select whether you would like to personally
          drop off the returned item or have Jumia pick it up. Proceed to click
          on "Next".{" "}
        </p>
        <img src={stepFive} alt="step-five" />
      </div>

      {/* STEP SIX */}

      <div className={styles.stepSix}>
        <p>
          {" "}
          <span> Step 6: </span> If you have more than one delivery address,
          ensure you select the preferred address for pickup.{" "}
        </p>
        <img src={stepSix} alt="step-six" />
      </div>

      {/* STEP SEVEN */}

      <div className={styles.stepSeven}>
        <p>
          {" "}
          <span> Step 7: </span> Select your refund method and fill in your
          account details.{" "}
        </p>
        <img src={stepSeven} alt="step-seven" />
      </div>

      {/* STEP EIGHT */}

      <div className={styles.stepEight}>
        <p>
          {" "}
          <span> Step 8: </span> Review your information and submit your return
          request.{" "}
        </p>
        <img src={stepEight} alt="step-eight" />
        <img src={stepNine} alt="step-nine" />
      </div>
    </section>
  );
}

export default Returns;
