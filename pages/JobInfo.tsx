import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../components/profile.module.css";
import { withRouter } from "next/router";
import { url } from "./../components/config";
import { WithRouterProps } from "next/dist/client/with-router";

const index = (router: WithRouterProps) => {
  const [info, setinfo] = useState<any>({
    jobtitle: "",
    summary: "",
    responsibilites: "",
    skills: "",
    salary: "",
  });

  useEffect(() => {
    var user = localStorage.getItem("user");
    if (user) {
      getInfo(JSON.parse(user));
    }
  }, []);

  function getInfo(user: any) {
    let requestHeaders: any = {
      "Content-Type": "application/json",
      "x-auth-token": window.localStorage.getItem("token"),
    };
    if (user.isEmployer) {
      fetch(url + "/api/jobs/" + router.router.query._id, {
        headers: requestHeaders,
      })
        .then((res) => res.json())
        .then((res) => {
          setinfo(res);
        });
    } else {
      fetch(url + "/api/viewJobs/" + router.router.query._id, {
        headers: requestHeaders,
      })
        .then((res) => res.json())
        .then((res) => {
          setinfo(res);
        });
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      <div className={styles.bg} >
        <div className={styles["bg-card"]}>
          <h1 style = {{margin:'auto', width: '50%', textAlign: 'center'}}>Job Details </h1>
          <br></br>
          <br></br>
          <p style = {{fontWeight:'bold',fontSize: 'x-large' }}>Job title: {info.jobtitle}</p>
          <p style = {{fontWeight:'bold',fontSize: 'x-large' }}>Summary: {info.summary}</p>
          <p style = {{fontWeight:'bold',fontSize: 'x-large' }}>Responsibilites: {info.responsibilites}</p>
          <p style = {{fontWeight:'bold',fontSize: 'x-large' }}>Skills: {info.skills}</p>
          <p style = {{fontWeight:'bold',fontSize: 'x-large' }}>Salary: {info.salary}</p>
          <p style = {{fontWeight:'bold',fontSize: 'x-large' }}>Date posted: {info.date}</p>
        </div>
      </div>
    </>
  );
};
export default withRouter(index);
