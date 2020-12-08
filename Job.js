import React from 'react'
import { ReactComponent } from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

var jo;
export default function Job({ job }) {
    jo = job.how_to_apply;
    var apply = job.how_to_apply.split("<p>");

    // console.log(jo);

    return (
        <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
            <a href={job.company_url}>{job.title}</a>
            </Card.Title>
            <Card.Subtitle>
              {new Date(job.created_at).toLocaleDateString()}
                - from <span className="Warning">{job.company}</span>
            </Card.Subtitle>
            <Badge variant="success" className="mr-2">{job.type}</Badge>
            <Badge variant="primary">{job.location}</Badge>
            <div style = {{wordBreak: 'break-all'}}>
               {apply}
            </div>
          </div>
          <img height="60" alt={job.company} src={job.company_logo} />
        </div>
        
      </Card.Body>
    </Card>
    )
    
}