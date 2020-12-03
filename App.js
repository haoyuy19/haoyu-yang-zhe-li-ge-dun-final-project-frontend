import React, { useState } from 'react';
import { Container } from 'react-bootstrap'
import useFetchJobs from './useFetchJobs'
import Job from './Job'

function App() {
    const [params, setParams] = useState()
    const [page, setPage] = useState()
    const{jobs, loading} = useFetchJobs(params, page)
  return (
      <Container>
          {loading && <h1> loading... </h1>}
          {/* {error && <h1> Error </h1>} */}
          {jobs.map(job => {
              return <Job key = {job.id} job = {job}></Job>
          })}
          {jobs.length}
      </Container>
  )
}

export default App;
