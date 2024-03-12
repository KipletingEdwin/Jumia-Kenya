import React from "react";
import styles from "./PlaceOrder.module.css";
import browseImage from "../../assets/order/browse.png";
import product1 from "../../assets/order/addProductToCart.png";
import product2 from "../../assets/order/addProductToCart2.png";
import product3 from "../../assets/order/addProductToCart3.png";
import complete1 from "../../assets/order/complete1.png";
import confirm1 from "../../assets/order/confirm1.png";
import confirm2 from "../../assets/order/confirm2.png";
import track1 from "../../assets/order/track1.png";

function PlaceOrder() {
  return (
    <section className={styles.container}>
      <div className={styles.placeOrder}>
        <h6> How to place an order</h6>
        <p> Step 1: Browse and choose your product</p>
        <p> Step 2: Add product to cart</p>
        <p> Step 3: Complete the checkout</p>
        <p> Step 4: Confirm and pay</p>
        <p> Step 5: Track your order</p>
        <iframe
        //   width="560"
        //   height="314"
          src="https://www.youtube.com/embed/XyUwkOvzqCA"
          title="How to place an order"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.browse}>
        <h6>Step 1: Browse and choose your product </h6>
        <ul>
          <li>
            Browse the JUMIA WEBSITE or use the search bar to find the product
            you want to order.{" "}
          </li>
          <li> Click on the product to view more information and details. </li>
        </ul>
        <img src={browseImage} alt="Browse-Image" />
      </div>



      <div className={styles.addProduct}>
        <h6>Step 2: Add product to cart</h6>
        <ul>
          <li>
            Select the desired quantity of the product and click on the “Add to
            Cart” button.
          </li>
          <li> Review the contents of your cart and proceed to checkout.</li>
        </ul>
        <img src={product1} alt="product-one" />
        <img src={product2} alt="product-two" />
        <img src={product3} alt="product-three" />
      </div>



      <div className={styles.complete}>
        <h6> Step 3: Complete the checkout</h6>
        <ul>
          <li> Fill in your delivery address and choose a payment method.</li>
          <li>
            Review your order information and click on the “Place Order” button.
          </li>
        </ul>
        <img src={complete1} alt="complete-image" />
      </div>

            {/* CONFIRM CONTAINER*/}

      <div className={styles.confirm}>
        <h6> Step 4: Confirm and pay </h6>
        <ul>
          <li>
            Confirm the payment details and complete the payment process.
          </li>
        </ul>
        <div className={styles.ImagesContainer}>
        <img className={styles.firstImage} src={confirm1} alt="confirm-image" />
        <img className={styles.secondImage}  src={confirm2} alt="confirm-image" />
        </div>
      </div>


                    {/* TRACK ORDER */}

      <div className={styles.trackOrder}>
        <h6> Step 5: Track your order </h6>
        <ul>
          <li>
            You will receive an email with your order confirmation and a
            tracking link when your package is shipped.{" "}
          </li>
          <li>
            You can also track your order by logging into your{" "}
            <a href="/account">JUMIA ACCOUNT</a> and clicking on the “My Orders”
            tab.
          </li>
        </ul>
        <img src={track1} alt="track-one" />
      </div>



      <div className={styles.description}>
        <p>
          <span className={styles.boldedDescription}>
            Need help placing an order? Reach out to our customer sales team on
            0711011011 . We are available from Monday to Friday between 8am to
            8pm Weekends and public holidays 8am-7pm
          </span>
          Note: To ensure a smooth order process, please make sure to provide
          accurate and complete delivery information, and choose a payment
          method that is available in your location. We hope this guide has been
          helpful. Happy shopping!
        </p>
      </div>
    </section>
  );
}

export default PlaceOrder;
