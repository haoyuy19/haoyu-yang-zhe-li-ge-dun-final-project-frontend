import React, { ChangeEvent, useState } from "react";
import Navbar from "../components/Navbar";
import Router from "next/router";
import { Form, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { url } from "../components/config";
import styles from "../components/profile.module.css";

const index = () => {
  const [info, setinfo] = useState<any>({
    jobtitle: "",
    summary: "",
    responsibilites: "",
    skills: "",
    salary: "",
  });

  function valChange(val: string, type: string) {
    var od = { ...info, [type]: val };
    setinfo(od);
  }

  function submit() {
    var data = info;

    if (data.jobtitle === undefined) {
      alert("Jobtitle is required");
      return;
    }
    if (data.skills === undefined) {
      alert("Skills is required");
      return;
    }
    if (data.summary === undefined) {
      alert("Summary is required");
      return;
    }

    let requestHeaders: any = {
      "Content-Type": "application/json",
      "x-auth-token": window.localStorage.getItem("token"),
    };
    fetch(url + "/api/jobs", {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res ->> ", res);
        if (res.msg) {
          alert(res.msg);
        }
        Router.push("/JobList");
      });
  }

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.bg}>
        <div className={styles["bg-card"]}>
        <h1 style = {{margin:'auto', width: '50%', textAlign: 'center'}}>Post a Job</h1>
        <br></br>
        <br></br>
        <Form className='mb-4' style = {{margin:'auto', width: '50%', }}>
          <Form.Row className='align-items'>
            <Col sm={5} className='my-1'>
              <Form.Control
                style={{ marginLeft: '15px' }}
                placeholder='Job Title'
                type="text"
              value={info.jobtitle}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "jobtitle")}
              />
            </Col>
            <Col sm={5} className='my-1'>
              <Form.Control
                style={{ marginLeft: '85px' }}
                placeholder='Salary'
                type="text"
              value={info.salary}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "salary")
              }
              />



            </Col>


            <Form.Control
                style={{ marginTop: '30px', marginLeft: '20px'}}
                placeholder='Skills'
                type="text"
              value={info.skills}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "skills")}
              />

              <br></br>

            <Form.Control 
                as="textarea" rows={2} 
                style={{ marginLeft: '20px' }}
                placeholder='Responsibility'
                type="text"
              value={info.responsibilites}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "responsibilites")}
            />

            <br></br>

            <Form.Control 
                as="textarea" rows={3} 
                style={{ marginLeft: '20px' }}
                placeholder='Summary'
                type="text"
              value={info.summary}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                valChange(e.target.value, "summary")}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button
              style={{ width: '50%', margin: 'auto' }}
              type='button'
              className='btn btn-primary'
              onClick={submit}

            >
              Submit
            </button>
          </Form.Row>
        </Form>
        </div>
    </div>
    </>
  );
};
export default index;
