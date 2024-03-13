import React from 'react'
import styles from './Footer.module.css';
import appstore from '../../assets/footer/appstore.png';
import playstore from '../../assets/footer/goggleplay.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import { TextField } from '@mui/material';

import jumiaIcon from '../../assets/footer/jumiaIcon.png';
import hand from '../../assets/footer/hand.png';
import jumiaPay from '../../assets/footer/jumiaPay.png';
import visa from '../../assets/footer/visa.png';
import star from '../../assets/footer/star.png';
import mastercard from '../../assets/footer/mastercard.png';



function Footer() {
  return (
    <section className={styles.container}>
      <div className={styles.jumiaContainer}>
        <div className={styles.leftContainer}>
            <img src={jumiaIcon} alt='jumia' />
        </div>

        <div className={styles.new}>
            <div className={styles.jumiaDescription}>
            <h6>NEW TO JUMIA?</h6>
            <p> Subscribe to our newsletter to get updates on our latest offers! </p>
            </div>
    
            <div className={styles.mailContainer}>
            <TextField
            className={styles.myInput}
                    type='email'
                    name='email'
                    placeholder='Enter E-Mail Address'
                    InputProps={{
                        startAdornment: (
                            <EmailIcon className={styles.emailIcon} />
                        ),
                    }}
                />
            <button>MALE</button>
            <button>FEMALE</button>
            </div>
            <div className={styles.radioType}>
                <input type="checkbox" name='checkbox' className={styles.checkbox}/>
                <div className={styles.privacy}>
                    <p> I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time. </p>
                    <a href='https://www.jumia.co.ke/sp-privacy/'> I accept the Legal Terms </a>
                </div>
            </div>
        </div>



        <div className={styles.download}>
            <div className={styles.firstOne}>
               <div className={styles.iconImageContainer}>
               <img src={star} alt='jumia' />
               </div>
            <div className={styles.description}>
                <h6> DOWNLOAD JUMIA FREE APP </h6>
                <p> Get access to exclusive offers! </p>
            </div>
            </div>
            <div className={styles.appStore}>
            <a href='https://itunes.apple.com/us/app/jumia-online-shopping/id925015459?mt=8'><img src={appstore} alt='apstore'/></a>
            <a href='https://play.google.com/store/apps/details?id=com.jumia.android&referrer=adjust_reftag%3Dc05WiGKiLDtaY'><img src={playstore} alt='playstore'/></a>
        </div>
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
                    <li> <a href='/'> About Us</a></li>
                    <li><a href='https://www.jumia.co.ke/sp-returns-and-refunds-policy/'>  Returns and Refunds Policy </a></li>
                    <li> <a href='https://www.jumia.co.ke/careers/'> Jumia Careers </a></li>
                    <li> <a href='https://www.jumia.co.ke/sp-jumia-express/'> Jumia Express </a></li>
                    <li><a href='https://www.jumia.co.ke/terms-and-conditions/'>  Terms and Conditions </a></li>
                    <li> <a href='https://www.jumia.co.ke/sp-store-credit-TCs/'> Store Credit Terms and Conditions</a> </li>
                    <li> <a href='https://www.jumia.co.ke/privacy/'> Privacy Notice </a></li>
                    <li><a href='https://www.jumia.co.ke/sp-cookie-notice/'>  Cookies Notice </a></li>
                    <li> <a href='https://www.jumia.co.ke/flash-sales/'> Flash Sales</a> </li>
                    <li> <a href='https://www.jumia.co.ke/mlp-jumia-global/'> Jumia Global </a></li>
                </ul>
            </div>

            <div className={styles.makeMoney}>
                <h6> MAKE MONEY WITH JUMIA </h6>
                <ul>
                    <li><a href='https://www.jumia.co.ke/sp-sell/'>  Sell on Jumia </a></li>
                    <li> <a href='https://vendorhub.jumia.co.ke/'> Vendor Hub</a> </li>
                    <li><a href='https://www.jumia.co.ke/mlp-jforce/'>  Become a Sales Consultant </a></li>
                    <li><a href='https://jumia_form.formstack.com/forms/3pl_interest_registration_en'>  Become a Logistics Service Partner</a> </li>
                    <li><a href='https://forms.gle/WmYEPeQJbqgQD3Da8'>  Jumia City Partner Program </a></li>
                </ul>
            </div>






            <div className={styles.jumiaInternationalContainer}>
            <h6> JUMIA INTERNATIONAL </h6>
            <div className={styles.jumiaInternational}>
                <div className={styles.firstCountries}>
                    <ul>
                        <li><a href='https://www.jumia.com.dz/'> Algeria </a></li>
                        <li><a href='https://www.jumia.ci/'> Ivory Coast </a></li>
                        <li><a href='https://www.jumia.com.eg/'>Egypt</a></li>
                        <li><a href='https://www.jumia.com.gh/'> Ghana </a></li>
                        <li><a href='https://www.jumia.ma/'> Morocco </a></li>
                    </ul>
                </div>
                <div className={styles.secondCountries}>
                    <ul>
                        <li> <a href='https://www.jumia.com.ng/'> Nigeria </a> </li>
                        <li><a href='https://www.jumia.sn/'> Senegal  </a></li>
                        <li> <a href='https://www.jumia.com.tn/'> Tunisia  </a></li>
                        <li> <a href='https://www.jumia.ug/'> Uganda</a> </li>
                        <li><a href='https://www.zando.co.za/'>  Zando </a></li>
                    </ul>

                </div>
             </div>
             </div>




            </div>

            {/* JOIN US NOW */}

            <div className={styles.joinContainer}>
                <div className={styles.joinUsOn}>
                    <h6> JOIN US ON </h6>
                    <div className={styles.joinImages}>
                        <FacebookIcon/>
                        <InstagramIcon />
                        <YouTubeIcon />
                    </div>
                </div>

                <div className={styles.paymentMethods}>
                   <img src={hand} alt='pay-on-delivery'/>
                   <img src={visa} alt='visa'/>
                   <img src={mastercard} alt='mastercard'/>
                   <img src={jumiaPay} alt='jumia-pay'/>
                </div>
            </div>

            <div className={styles.linksContainer}>
                <div className={styles.first}>
                    <ul>
                        <li><a href='https://www.jumia.co.ke/adidas/'>   Adidas   </a></li>
                        <li><a href='https://www.jumia.co.ke/ailyons/'>   AILYONS  </a></li>
                        <li><a href='https://www.jumia.co.ke/apple/'>   Apple   </a></li>
                        <li><a href='https://www.jumia.co.ke/brand-asus/'>   Asus   </a></li>
                        <li><a href='https://www.jumia.co.ke/bruhm/'>   Bruhm  </a></li>
                        <li><a href='https://www.jumia.co.ke/canon/'>   Canon  </a></li>
                    </ul>
                </div>

                <div className={styles.second}>
                    <ul>
                        <li><a href='https://www.jumia.co.ke/cantu/'>   Cantu  </a></li>
                        <li><a href='https://www.jumia.co.ke/coke/'>   Coke  </a></li>
                        <li><a href='https://www.jumia.co.ke/dell/'>   DELL  </a></li>
                        <li><a href='https://www.jumia.co.ke/dove1/'>   Dove  </a></li>
                        <li><a href='https://www.jumia.co.ke/dr-rashel/'>   Dr. Rashel  </a></li>
                    </ul>
                </div>

                <div className={styles.third}>
                    <ul>
                        <li><a href='https://www.jumia.co.ke/epson/'>   Epson  </a></li>
                        <li><a href='https://www.jumia.co.ke/garnier/'>   Garnier  </a></li>
                        <li><a href='https://www.jumia.co.ke/hisense/'>   Hisense  </a></li>
                        <li><a href='https://www.jumia.co.ke/hp/'>   HP  </a></li>
                        <li><a href='https://www.jumia.co.ke/infinix/'>   Infinix  </a></li>
                    </ul>
                </div>

                <div className={styles.fouth}>
                    <ul>
                        <li><a href='https://www.jumia.co.ke/itel/'>   Itel  </a></li>
                        <li><a href='https://www.jumia.co.ke/jameson/'>   Jameson  </a></li>
                        <li><a href='https://www.jumia.co.ke/loreal-paris/'>   L'Oréal Paris </a></li>
                        <li><a href='https://www.jumia.co.ke/lenovo/'>   Lenovo  </a></li>
                        <li><a href='https://www.jumia.co.ke/logitech/'>   Logitech  </a></li>
                    </ul>
                </div>

                <div className={styles.fifth}>
                    <ul>
                        <li><a href='https://www.jumia.co.ke/maybelline/'>   Maybelline  </a></li>
                        <li><a href='https://www.jumia.co.ke/brand-mika/'>  Mika </a></li>
                        <li><a href='https://www.jumia.co.ke/nivea/'>   NIVEA </a></li>
                        <li><a href='https://www.jumia.co.ke/nunix/'>   Nunix  </a></li>
                        <li><a href='https://www.jumia.co.ke/oppo/'>   Oppo  </a></li>
                    </ul>
                </div>

                <div className={styles.sixth}>
                    <ul>
                        <li><a href='https://www.jumia.co.ke/ramtons/'>   Ramtons  </a></li>
                        <li><a href='https://www.jumia.co.ke/roch/'>  Roch </a></li>
                        <li><a href='https://www.jumia.co.ke/samsung/'>   Samsung </a></li>
                        <li><a href='https://www.jumia.co.ke/sandisk/'>   Sandisk  </a></li>
                        <li><a href='https://www.jumia.co.ke/skyworth/'>   Skyworth  </a></li>
                    </ul>
                </div>

                <div className={styles.seventh}>
                    <ul>
                        <li><a href='https://www.jumia.co.ke/sony/'>   Sony </a></li>
                        <li><a href='https://www.jumia.co.ke/tcl/'>  TCL </a></li>
                        <li><a href='https://www.jumia.co.ke/tecno/'>   Tecno </a></li>
                        <li><a href='https://www.jumia.co.ke/transcend/'>   Transcend </a></li>
                        <li><a href='https://www.jumia.co.ke/tusker/'>   Tusker  </a></li>
                    </ul>
                </div>

                <div className={styles.seventh}>
                    <ul>
                        <li><a href='https://www.jumia.co.ke/usn/'>   USN </a></li>
                        <li><a href='https://www.jumia.co.ke/vision-plus/'>  Vision Plus </a></li>
                        <li><a href='https://www.jumia.co.ke/vitron/'>   Vitron </a></li>
                        <li><a href='https://www.jumia.co.ke/von/'>   VON </a></li>
                        <li><a href='https://www.jumia.co.ke/xiaomi/'>   XIAOMI  </a></li>
                    </ul>
                </div>

            </div>

       

    </section>
  )
}

export default Footer