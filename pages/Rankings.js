import React from 'react';
import styles from '../components/Register.module.css';
import Navbar from '../components/Navbar';

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.landing}>
        <div className={styles.darkoverlay}>
          <div className={styles.landinginner}>Ranking Page</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
