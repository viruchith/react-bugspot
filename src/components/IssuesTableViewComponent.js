import React from 'react'
import issuesMockArray from '../mock/issuesMock';
import { Link, useParams } from 'react-router-dom';
import statusColorFormats from '../helpers/statusColorFormats';

function IssuesTableViewComponent() {

    const {projectId} = useParams();

    const issues = issuesMockArray;


  return (
    <table className="table table-striped table-bordered border-dark table-hover table-inverse table-responsive">
      <thead className="thead-inverse">
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Severity</th>
          <th>Status</th>
          <th>Updated At</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {issues.map((issue) => (
          <tr key={issue.id}  className={"table-"+statusColorFormats[issue.status]}>
            <td>{issue.id}</td>
            <td>{issue.category}</td>
            <td>{issue.severity}</td>
            <td>{issue.status}</td>
            <td>{issue.updatedAt}</td>
            <td>
              <Link to={"/projects/"+projectId+"/issues/"+issue.id+"/"} >
                <p>{issue.summary}</p>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default IssuesTableViewComponent