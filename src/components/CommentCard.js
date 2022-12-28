import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { CodeBlock } from 'react-code-blocks'
import { Link } from 'react-router-dom';
import EditCommentComponent from './EditCommentComponent';

function CommentCard({isEditable,comment}) {

  const [editMode, setEditMode] = useState(false);

  return (
    <div className="mt-5 mb-5 d-flex justify-content-center">
      <div className="card border-dark comment-card p-3 col-sm-6 col-md-6 col-lg-6 overflow-y-scroll overflow-x-scroll">
        {(!editMode)?(
          <>
            <div className="row mb-3 bg-info p-2 m-2">
              <div className="col-sm-4 col-md-6 col-lg-6 text-start">
                <strong>Posted By : </strong>{" "}
                <Link
                  to={"/u/" + comment.creator.username}
                  className="badge bg-secondary pill-rounded"
                >
                  <strong>@{comment.creator.username}</strong>
                </Link>
              </div>
              <div className="col-sm-4 col-md-6 col-lg-6 text-end">
                <strong>Updated at : </strong> 2022/12/20
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered border-dark">
                <tbody>
                  <tr className="">
                    <td className="text-nowrap">
                      <strong>Note : </strong>
                    </td>
                    <td>
                      <p className="overflow-x-scroll">{comment.note}</p>
                    </td>
                  </tr>
                  {comment.code !== null && (
                    <tr className="">
                      <td className="text-nowrap">
                        <strong>Code : </strong>
                      </td>
                      <td>
                        <CodeBlock
                          text={comment.code}
                          language={"text"}
                          wrapLines
                        />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {isEditable && (
                <button className="btn btn-primary" onClick={()=>{setEditMode(true)}}>
                  <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                </button>
              )}
            </div>
          </>
        ):<EditCommentComponent comment={comment} setEditMode={setEditMode} />}
      </div>
    </div>
  );
}

export default CommentCard;