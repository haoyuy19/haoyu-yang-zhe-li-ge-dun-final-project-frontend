import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [user, setuser] = useState<any>({});

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    var user = localStorage.getItem("user");
    if (user) {
      setuser(JSON.parse(user));
    }
  }

  function logout() {
    localStorage.clear();
    Router.push("/LandingPage");
    window.location.reload();
  }

  function topage() {
    console.log("user ->> ", user);
    if (user.isEmployer) {
      Router.push("/EmpProfileInfo");
    } else {
      Router.push("/UserProfileInfo");
    }
  }

  return (
    <div>
      {/* <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
            </head> */}
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/LandingPage">
              <a>Main Page</a>
            </Link>
          </li>
          <li>
            <Link href="/AllJobs">
              <a>All Jobs</a>
            </Link>
          </li>

          {(!user.email && (
            <li>
              <Link href='/AnonyRankings'>Ranking</Link>
            </li>
          )) ||
            (user.email && (
              <>
                {(user.isEmployer && (
                  <li>
                    <Link href='/EmpRankings'>Ranking</Link>
                  </li>
                )) ||
                  (!user.isEmployer && (
                    <li>
                      <Link href='/Rankings'>Ranking</Link>
                    </li>
                  ))}
              </>
            ))}
        </ul>

        <ul style={{ marginRight: "60px" }}>
          {!user.email && (
            <>
              <li>
                <Link href="/Register">Register</Link>
              </li>
              <li>
                <Link href="/Login">Login</Link>
              </li>
            </>
          )}

          {user.email && (
            <>
              <li>
                <Link href="/JobList">Premium Jobs</Link>
              </li>
              {user.isEmployer && (
                <li>
                  <Link href="/PostJob">Post a Job</Link>
                </li>
              )}
              <li onClick={topage}>
                <a href="javascript:;">
                  
                  <span>{user.email} </span>
                  <span>'s Profile</span>
                </a>
              </li>
              <li onClick={logout}>
                <a href="javascript:;">
                  <span>Logout</span>
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
