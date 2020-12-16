import React from 'react';

import Axios from 'axios';

import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-dynamic-charts/dist/index.css';
import { url } from '../components/config';

var la = [];
var da = [];

function getData() {
  var ranks;
  Axios.get(url + '/api/rank').then(response => {
    this.setState({ ranks: response.data });
    if (ranks != null && ranks.length > 0) {
      ranks.map(item => {
        la.push(item.company.toString());
        da.push(item.count);
      });
    }
    this.setState({
      dataPie: {
        labels: la,
        data: da
      }
    });

    //console.log(da.length);
  });
}
class Stat extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      ranks: [],
      da: [],
      la: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    //this.setState({ranks: Axios.get(HOST)});
    Axios.get(url + '/api/rank', {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': window.localStorage.getItem('token')
      }
    }).then(response => {
      this.setState({ ranks: response.data });
      if (this.state.ranks != null && this.state.ranks.length > 0) {
        this.state.ranks.map(item => {
          la.push(item.company.toString());
          da.push(item.count);
        });
      }
    });

    //console.log(da.length);
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <div className='d-flex justify-content-center'>
          <h3>You have voted</h3>
          <Table className='table table-sm' striped bordered hover>
            <thead className='thead-dark'>
              <tr>
                <th scope='col'>Company Name</th>
                <th scope='col'>Number of Votes</th>
              </tr>
            </thead>
            <tbody>
              {this.state.ranks.map(item => (
                // eslint-disable-next-line react/jsx-key
                <tr>
                  <th scope='row'>{item.company}</th>
                  <td>{item.count}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Stat;
