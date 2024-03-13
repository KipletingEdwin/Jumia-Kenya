import React from 'react'
import styles from './Footer,module.css';
import appstore from '../../assets/footer/appstore.png';
import playstore from '../../assets/footer/playstore.png';

function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.jumiaContainer}>
        <div className={styles.leftContainer}>
            <img src={} alt='jumia' />
        </div>

        <div className={styles.new}>
            <h6>NEW TO JUMIA?</h6>
            <p> Subscribe to our newsletter to get updates on our latest offers! </p>
            <div className={styles.mailContainer}>
            <input type='Email' name='Email' placeholder='Enter E-Mail Address'/>
            <button>MALE</button>
            <button>FEMALE</button>
            </div>
            <div className={styles.radioType}>
                <input type="checkbox" name='checkbox' />
                <div>
                    <p> I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time. </p>
                    <a href='https://www.jumia.co.ke/sp-privacy/'> I accept the Legal Terms </a>
                </div>

            </div>
        </div>

        <div className={styles.download}>
            <div className={styles.firstOne}>
                <img src={} alt='jumia' />
            </div>
            <div className={styles.description}>
                <h6> DOWNLOAD JUMIA FREE APP </h6>
                <p> DOWNLOAD JUMIA FREE APP </p>
            </div>
        </div>
        <div className={styles.appStore}>
            <a href='https://itunes.apple.com/us/app/jumia-online-shopping/id925015459?mt=8'><img src={appstore} alt='apstore'/></a>
            <a href='https://play.google.com/store/apps/details?id=com.jumia.android&referrer=adjust_reftag%3Dc05WiGKiLDtaY'><img src={playstore} alt='playstore'/></a>
        </div>
        </div>

        {/* HELP CONTAINER */}

        <div className={styles.helpContainer}>
            <div className={styles.needHelp}>
                <div className={styles.topContainer}>
                <h6> NEED HELP? </h6>
                <ul>
                    <li><a href=''>Chat with us</a></li>
                    <li><a href='/helpCenter'>Help Center</a></li>
                    <li><a href=''>Contact Us</a></li>
                </ul>
                </div>
                <div className={styles.bottomContainer}>
                    <ul>
                        <li><a href='https://www.jumia.co.ke/sp-place-track-order/'> Track Your Order </a></li>
                        <li> <a href='https://www.jumia.co.ke/delivery-timelines/'>Shipping and delivery </a></li>
                        <li><a href='https://www.jumia.co.ke/return-policy/'>Return Policy </a></li>
                        <li><a href='https://www.jumia.co.ke/sp-how-to/'> How to Order? </a></li>
                        <li><a href='https://www.jumia.co.ke/sp-dispute-resolution-policy/'> Dispute Resolution Policy </a></li>
                        <li><a href='https://www.jumia.co.ke/jumia-corporate/'> Corporate and Bulk Purchase </a></li>
                        <li><a href='https://www.jumia.co.ke/sp-jumia-advertising/'> Advertise with Jumia </a></li>
                        <li><a href='https://forms-prod2.sprinklr.com/guided-workflows/64351818df46305b9c8ba24e?gwId=65264ff2645a674786de59da&viewType=FULL_PAGE'> Report a Product </a></li>
                        <li><a href='https://www.jumia.co.ke/sp-Payment-Information-Guidelines/'>Jumia Payment Information Guidelines</a> </li>
                    </ul>
                </div>
            </div>

            {/* ABOUT JUMIA */}

            <div className={styles.aboutJumia}>
                <h6> ABOUT JUMIA </h6>
                <ul>
                    <li>  About Us</li>
                    <li>  Returns and Refunds Policy </li>
                    <li>  Jumia Careers </li>
                    <li>  Jumia Express </li>
                    <li>  Terms and Conditions </li>
                    <li>  Store Credit Terms and Conditions </li>
                    <li>  Privacy Notice </li>
                    <li>  Cookies Notice </li>
                    <li>  Flash Sales </li>
                    <li>  Jumia Global </li>
                </ul>
            </div>

            <div className={styles.makeMoney}>
                <h6> MAKE MONEY WITH JUMIA </h6>
                <ul>
                    <li>  Sell on Jumia </li>
                    <li>  Vendor Hub </li>
                    <li>  Become a Sales Consultant </li>
                    <li>  Become a Logistics Service Partner </li>
                    <li>  Jumia City Partner Program </li>
                </ul>
            </div>

            <div className={styles.jumiaInternational}>
                <div className={styles.firstCountries}>
                    <ul>
                        <li> Algeria </li>
                        <li> Ivory Coast </li>
                        <li> Egypt </li>
                        <li> Ghana </li>
                        <li> Morocco </li>
                    </ul>
                </div>
                <div className={styles.secondCountries}>
                    <ul>
                        <li>  Nigeria  </li>
                        <li> Senegal  </li>
                        <li>  Tunisia  </li>
                        <li>  Uganda </li>
                        <li>  Zando </li>
                    </ul>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Footer