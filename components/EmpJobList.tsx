import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import { url } from "./config";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

const index = () => {
  const [list, setlist] = useState<any>([]);
  useEffect(() => {
    var user = localStorage.getItem("user");
    if (user) {
      getjobs();
    }
  }, []);

  function getjobs() {
    let requestHeaders: any = {
      "Content-Type": "application/json",
      "x-auth-token": window.localStorage.getItem("token"),
    };

    fetch(url + "/api/jobs", { headers: requestHeaders })
      .then((res) => res.json())
      .then((res) => {
        console.log("res ->> ", res);
        setlist(res);
      });
  }

  function deleteItem(row: any) {
    let requestHeaders: any = {
      "Content-Type": "application/json",
      "x-auth-token": window.localStorage.getItem("token"),
    };
    if (confirm("Do you want to delete this job")) {
      fetch(url + "/api/jobs/" + row._id, {
        method: "DELETE",
        headers: requestHeaders,
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("res ->> ", res);
          if (res.msg) {
            getjobs();
          }
        });
    }
  }

  return (
    <>
      <table className={styles["tables-job"]}>
        <thead>
          <tr>
            <th>Job title</th>
            <th>Summary</th>
            <th>Responsibilites</th>
            <th>Salary</th>
            <th>Skills</th>
            <th>Date posted</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item: any, index: number) => (
            <tr key={index}>
              <td>
                <Link href={"/JobInfo?_id=" + item._id}>{item.jobtitle}</Link>
              </td>
              <td>{item.summary}</td>
              <td>{item.responsibilites}</td>
              <td>{item.salary}</td>
              <td>{item.skills}</td>
              <td>{item.date.slice(0,10)}</td>
              <td>
                <button className='btn btn-primary' onClick={() => deleteItem(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default index;
