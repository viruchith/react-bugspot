import React from 'react'
import { Link, useParams } from 'react-router-dom'
import issuesMockArray from '../mock/issuesMock';
import { CodeBlock } from 'react-code-blocks';
import statusColorFormats from '../helpers/statusColorFormats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateCommentComponent from '../components/CreateCommentComponent';
import commentsMockArray from '../mock/commentsMock';
import CommentCard from '../components/CommentCard';

function ViewIssuePage() {
    const {projectId,issueId} = useParams();

    const issue = issuesMockArray.find(issu=>issu.id==issueId);
    const comments = commentsMockArray;

    const currentUser = {"id":1,"firstName":"Viruchith","lastName":"Ganesan","email":"v@g.com","username":"viruchith"};

  return (
    <>
      <div className="mt-5 mb-5 d-flex justify-content-center">
        <div className="card p-3 col-sm-8 col-md-6 col-lg-6">
          <h3>{"#" + issue.id + " " + issue.summary}</h3>
          <hr />
          <div className="mb-3">
            <Link
              to={"/projects/" + projectId + "/issues/" + issueId + "/edit"}
              className="btn btn-primary"
            >
              <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
            </Link>
            &nbsp;&nbsp;
            <Link
              to={"/projects/" + projectId + "/issues/" + issueId + "/delete"}
              className="btn btn-danger"
            >
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </Link>
          </div>
          <div className="table-responsive">
            <table
              className="table table-striped
            table-hover	
            table-borderless
            align-middle"
            >
              <thead className="table-light"></thead>
              <tbody className="table-group-divider">
                <tr className="">
                  <td>
                    <strong>ID : </strong>
                  </td>
                  <td>{issue.id}</td>
                </tr>
                <tr className="">
                  <td>
                    <strong>Raised By : </strong>
                  </td>
                  <td>
                    <Link to={"/u/" + issue.creator.username}>
                      <strong>@{issue.creator.username}</strong>
                    </Link>
                  </td>
                </tr>
                <tr className="">
                  <td>
                    <strong>Category : </strong>
                  </td>
                  <td>{issue.category}</td>
                </tr>
                <tr className="">
                  <td>
                    <strong>Priority : </strong>
                  </td>
                  <td>{issue.priority}</td>
                </tr>
                <tr className="">
                  <td>
                    <strong>Severity : </strong>
                  </td>
                  <td>{issue.severity}</td>
                </tr>
                <tr className="">
                  <td>
                    <strong>Status : </strong>
                  </td>
                  <td>
                    <span
                      className={"badge bg-" + statusColorFormats[issue.status]}
                    >
                      <strong>{issue.status}</strong>
                    </span>
                  </td>
                </tr>
                <tr className="">
                  <td>
                    <strong>Reproducibility : </strong>
                  </td>
                  <td>{issue.reproducibility}</td>
                </tr>
                <tr className="">
                  <td>
                    <strong>Summary : </strong>
                  </td>
                  <td>
                    <p>{issue.summary}</p>
                  </td>
                </tr>
                <tr className="">
                  <td>
                    <strong>Description : </strong>
                  </td>
                  <td>
                    <p>{issue.description}</p>
                  </td>
                </tr>
                <tr className="">
                  <td>
                    <strong>Steps To Reproduce : </strong>
                  </td>
                  <td>
                    {issue.stepsToReproduce === null
                      ? "NA"
                      : issue.stepsToReproduce}
                  </td>
                </tr>
                <tr className="">
                  <td>
                    <strong>Additional Information : </strong>
                  </td>
                  <td>
                    {issue.additionalInformation === null
                      ? "NA"
                      : issue.additionalInformation}
                  </td>
                </tr>
                <tr className="">
                  <td>
                    <strong>Source Code : </strong>
                  </td>
                  <td>
                    {issue.sourceCode === null ? (
                      "NA"
                    ) : (
                      <CodeBlock
                        text={issue.sourceCode}
                        language={"text"}
                        wrapLines
                      />
                    )}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Created At</strong>
                  </td>
                  <td>{issue.createdAt}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Last Upated At</strong>
                  </td>
                  <td>{issue.updatedAt}</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div className="mb-3">
          <div className="badge bg-secondary">
            <h3>Comments</h3>
          </div>
        </div>
      </div>
      {commentsMockArray.map((comment) => {
        return (
          <CommentCard
            key={comment.id}
            isEditable={currentUser.id === comment.creator.id}
            comment={comment}
          />
        );
      })}
      <CreateCommentComponent />
    </>
  );
}

export default ViewIssuePage