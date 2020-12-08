import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Job from './Job'
import Axios from 'axios'


var des;
var loc;
const BASE_URL = 'http://localhost:8010/proxy/positions.json'
var real = 'jobs.github.com/positions.json'
//positions?description=python&location=new+york
class App extends React.Component {
    constructor() {
        super();
        this.state = {

            jobs: [],
            description:"",
            location: "",
        }
        this.componentWillMount = this.componentWillMount.bind(this);
        
    }
    myChangeHandlerfordes = event => {
        des = event.target.value;
        
        this.setState({ description: des});
        // console.log(this.state.description);
    };

    myChangeHandlerforloc = event => {
        loc = event.target.value;
        this.setState({ location: loc });
    };

    handleClick = () => {
        var url = BASE_URL;
        
        
        if (loc != null) {
            this.setState({ location: loc });
        }
        if (des != null) {
            // console.log(des);
            this.setState({ description: des });
            // console.log(this.state.description);
        }
        url += "&description=" + this.state.description + "&location=" + this.state.location
        real += "?description=" + this.state.description + "&location=" + this.state.location
        console.log(real);
        Axios.get(url)
        
        .then(response => {
            this.setState({jobs:response.data});
            // console.log(response.data);
        })
        

    }
    componentWillMount() {
        var url = BASE_URL;
        
        Axios.get(url)
        
        .then(response => {
            this.setState({jobs:response.data});
            // console.log(response.data);
        })
    
    }


    render() {
        console.log("Again");
        return (
            <div>
        <form className="mb-4">
      <Form.Row className="align-items">
        <Col sm = {5} className = "my-1">
          <Form.Label style={{ marginLeft: '15px' }}>Description</Form.Label>
          <Form.Control  style={{ marginLeft: '15px' }} placeholder = "description" onChange={this.myChangeHandlerfordes} name="description" type="text" />
          </Col>
          <Col sm = {5} className = "my-1">
          <Form.Label style={{ marginLeft: '15px' }}>Location</Form.Label>
          <Form.Control style={{ marginLeft: '15px' }} onChange={this.myChangeHandlerforloc} name="location" type="text" />
        </Col>
        <button style={{ marginLeft: '15px' }} type="button" class="btn btn-primary" onClick={this.handleClick}>
                    Search
                </button>
        {/* <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" className="mb-2" />
        </Form.Group> */}
      </Form.Row>
      
    </form>
            {/* <Pagination page={page} setPage={setPage}></Pagination> */}
            {this.state.jobs.map(
                (job) => {
                    return <Job key={job.id} job={job} />
                }
            )}
            {/* <Pagination page={page} setPage={setPage}></Pagination> */}
            </div>
            
            )
        
        }
    
}


export default App;
