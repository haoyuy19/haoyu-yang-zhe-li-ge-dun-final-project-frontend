import React from 'react';
import styles from '../components/Register.module.css';
import Navbar from '../components/Navbar';

// Reference : https://cssdeck.com/labs/sleek-sign-up

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.landing}>
        <div className={styles.darkoverlay}>
          <div className={styles.landinginner}>
            <div class={styles.container}>
              <form class={styles.signup}>
                <div class={styles.header}>
                  <h3>Sign Up</h3>
                </div>
                <div class={styles.sep}></div>
                <div class={styles.inputs}>
                  <input
                    class={styles.emailinput}
                    type='email'
                    placeholder='e-mail'
                    autofocus
                  />
                  <input
                    class={styles.passwordinput}
                    type='password'
                    placeholder='Password'
                  />

                  <div class={styles.checkboxy}>
                    <input name='cecky' id='checky' value='1' type='checkbox' />
                    <label class={styles.usertype}>I am an employer</label>
                  </div>
                  <a className={styles.submit} href='#'>
                    SIGN UP NOW
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
