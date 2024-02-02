import styles from "./Navbar.module.css";
import freeDelivery1 from "../../assets/nav/freedelivery1.gif";
import jumiakenya from "../../assets/nav/jumia.png";
import jumiaIcon from '../../assets/nav/jumiaIcon.png';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbarImage}>
        <img src={freeDelivery1} alt="navbar-gif" />
      </div>
      <div className={styles.iconsContainer}>
        <div className={styles.firstIcon}>
          <a href="/"><img src={jumiaIcon} alt="jumia-icon"/>Sell on Jumia</a>
        </div>
        <div className={styles.search}>
          <div className={styles.innerContainer}>
            <img src={jumiakenya} alt="jumia-kenya" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
