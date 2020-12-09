import Navbar from '../components/Navbar';
import axios from 'axios';
import Job from '../components/Jobs';
import LandingPage from './LandingPage';
// import AllJobs from './AllJobs';

const base_url =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
// const jobs = axios.get(base_url);

const main = () => (
  //var dat = Array.from(props.bpi);

  <div>
    {/* <Navbar/> */}
    {/* {jobs.map(job => {
            return <Job key = {job.id} job = {job} />
        })} */}
    {/* {props.job} */}
    <LandingPage></LandingPage>
    {/* <AllJobs></AllJobs> */}
  </div>
);

// const fet = () => {
//     console.log("LLL");
//     fetch(base_url)
//        .then(response => response.json())
//        //.then(data => console.log(data));
// }
// fet();

// main.getInitialProps = () => {
//     fetch(base_url)
//   .then(response => response.json())
//   .then(data => console.log(data));

//     // const res = fetch(base_url);
//     // //const data = res.json();
//     // console.log(res + "LLLLLLLL")
//     // return {
//     //     job:res.title

//     // }
// }

// function makeGetRequest(path) {
//     axios.get(path).then(
//         (response) => {
//             var result = response.data;
//             console.log(result);
//         },
//         (error) => {
//             console.log(error);
//         }
//     );
// }
// makeGetRequest(base_url);

export default main;
