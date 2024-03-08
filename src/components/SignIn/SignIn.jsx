import React from "react";
import styles from "./SignIn.module.css";
import jumia from "../../assets/nav/jumia.png";
import jumiaIcon from "../../assets/nav/jumiaIcon.png";

function SignIn() {
  return (
    <section className={styles.container}>
      <div className={styles.welcome}>
        <img src={jumiaIcon} alt="jumia-icon" />
        <h3> Welcome to Jumia </h3>
        <p>
          {" "}
          Type your e-mail or phone number to log in or create a Jumia account.
        </p>
        <form className={styles.login}>
          <input
            type="text"
            placeholder="Email or Mobile Number*"
            name="email"
          />
          <button className={styles.continue}> Continue </button>
        </form>
        <p className={styles.agree}>
          By continuing you agree to Jumia’s   <a href="/">Terms and Conditions</a>
        </p>
        <button className={styles.passKeys}>Login with Passkeys</button>
        <div className={styles.loginPasskeys}>
          <button className={styles.loginButton}>Log in with Facebook</button>
          <p>
            {" "}
            For further support, you may visit the Help Center or contact our
            customer service team.{" "}
          </p>
          <img src={jumia} alt="jumia-image" />
        </div>
      </div>
    </section>
  );
}

export default SignIn;
