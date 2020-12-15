import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../components/LandingPage.module.css";

const LandingPage = () => {
  const [islogin, setislogin] = useState(false);

  useEffect(() => {
    isLogin();
  }, []);

  function isLogin() {
    var token = window.localStorage.getItem("token");
    if (token) {
      setislogin(true);
    }
  }

  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      <Navbar />
      <div className={styles.landing}>
        <div className={styles.darkoverlay}>
          <div className={styles.landinginner}>
            <h1 className={styles.xlarge}>Searching For Jobs</h1>
            <p className={styles.lead}>Search For Your Dream Jobs!</p>

            {!islogin && (
              <div className={styles.buttons}>
                <Link href="/Register">Sign Up</Link>
                <Link href="/Login">Login</Link>
              </div>
            )}

            {islogin && (
              <div className={styles.buttons}>
                <span
                  style={{ cursor: "pointer", color: "#0072ffc9" }}
                  onClick={logout}
                >
                  Logout
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
