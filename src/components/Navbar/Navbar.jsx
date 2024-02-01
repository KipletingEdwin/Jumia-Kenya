import styles from './Navbar.module.css';
import NavbarGif from '../../assets/nav/navbar.gif'

function Navbar() {
  return (
    <div className={styles.NavbarContainer}>
        <div className={styles.navbarImage}>
          <img src={NavbarGif} alt='navbar-gif'/>
        </div>
      
    </div>
  )
}

export default Navbar