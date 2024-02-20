import React from 'react';
import styles from './SignIn.module.css';
import jumia from '../../assets/nav/jumia.png';
import jumiaIcon  from '../../assets/nav/jumiaIcon.png';

function SignIn() {
  return (
    <section className={styles.container}>
        <div className={styles.welcome}>
            <img src={jumiaIcon} alt='jumia-icon'/>
            <h3> Welcome to Jumia </h3>
            <p> Type your e-mail or phone number to log in or create a Jumia account.</p>
            <form>
                <input type='text'
                 placeholder='Email or Mobile Number*'
                 name='email'
                 />
                 <button> Continue </button>
                 <p>By continuing you agree to Jumia’s<span>Terms and Conditions</span></p>
                 <button>Login with Passkeys</button>
                 <div className={styles.login}>
                    <button>Log in with Facebook</button>
                    <p> For further support, you may visit the Help Center
                         or contact our customer service team. </p>
                         <img src={jumia} alt='jumia-image'/>

                 </div>
            </form>

        </div>
    </section>
  )
}

export default SignIn