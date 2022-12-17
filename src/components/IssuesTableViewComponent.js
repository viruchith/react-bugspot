import React from 'react'

function IssuesTableViewComponent() {
  return (
    <table className="table table-striped table-inverse table-responsive">
        <thead className="thead-inverse">
            <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Severity</th>
                <th>Status</th>
                <th>Created At</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>UI</td>
                    <td>Moderate</td>
                    <td>Opened</td>
                    <td>2022-01-2</td>
                </tr>
                <tr>
                <td>1</td>
                    <td>UI</td>
                    <td>Moderate</td>
                    <td>Resolved</td>
                    <td>2022-01-2</td>
                </tr>
            </tbody>
    </table>
  )
}

export default IssuesTableViewComponent