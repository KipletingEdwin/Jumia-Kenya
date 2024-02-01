import styles from './Navbar.module.css';
// import NavbarGif from '../../assets/nav/navbar.gif'
// import freeDelivery from '../../assets/nav/freeDelivery.gif';
import freeDelivery1 from '../../assets/nav/freedelivery1.gif';

function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.navbarImage}>
          <img src={freeDelivery1} alt='navbar-gif'/>
        </div>
      
    </div>
  )
}

export default Navbar