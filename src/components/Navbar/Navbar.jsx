import styles from "./Navbar.module.css";
import freeDelivery1 from "../../assets/nav/freedelivery1.gif";
import jumiakenya from "../../assets/nav/jumia.png";
import jumiaIcon from "../../assets/nav/jumiaIcon.png";
import pay from "../../assets/nav/pay.png";
import searchIcon from "../../assets/nav/searchIcon.png";

function Navbar() {
  return (
    <div className={styles.container}>
      {/* The first div containing Free delivery gifs  */}

      <div className={styles.navbarImage}>
        <img src={freeDelivery1} alt="navbar-gif" />
      </div>

      {/* The second div containing Sell on Jumia,Jumia and Pay */}
      <div className={styles.iconsContainer}>
        <div className={styles.firstIcon}>
          <a href="/">
            <img
              src={jumiaIcon}
              alt="jumia-icon"
              className={styles.jumiaIcon1}
            />
            Sell on Jumia
          </a>
          <img src={jumiakenya} alt="jumiaIcon" className={styles.jumiaIcon2} />
          <img src={pay} alt="pay-png" className={styles.pay} />
        </div>

        {/* The third div containing the search section */}
        <div className={styles.search}>
          <div className={styles.innerContainer}>
            <img src={jumiakenya} alt="jumia-kenya" />

            <div className={styles.searchBar}>
              <img
                src={searchIcon}
                alt="search-icon"
                className={styles.searchbarIcon}
              />
              <input
                type="text"
                name="search"
                placeholder="Search products,brands and categories"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
