import React, { useRef, useState } from 'react'
import userProjectsMockArray from '../mock/userProjectsMock';
import { useParams } from 'react-router-dom';
import FormContainerComponent from '../components/FormContainerComponent';
import AlertBoxComponent from '../components/AlertBoxComponent';
import issuesMockArray from '../mock/issuesMock';

function DeleteIssuePage() {


     const { projectId,issueId } = useParams();

     const [alertState, setAlertState] = useState({
       visible: false,
       type: "danger",
       message: "",
     });

     const confirmRef = useRef();

     const project = userProjectsMockArray.find((p) => p.id == projectId);

     const issue = issuesMockArray.find((iss)=>iss.id==issueId);

     const onDeleteHandler = () => {
       setAlertState({
         visible: false,
         type: "success",
         message: "",
       });

       if (confirmRef.current.value.trim() === "CONFIRM") {
         setAlertState({
           visible: true,
           type: "success",
           message: "Deletion successfull !",
         });
       } else {
         setAlertState({
           visible: true,
           type: "warning",
           message: 'Enter "CONFIRM" in the dialog to delete !',
         });
       }
     };



  return (
    <FormContainerComponent>
      <div className="mb-3">
        <h3>
          Delete Issue "#{issue.id} {issue.summary}"
        </h3>
      </div>
      <hr />
      <div className="mb-3">
        {alertState.visible && (
          <AlertBoxComponent
            type={alertState.type}
            message={alertState.message}
          />
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="confirm" className="form-label">
          Type "<strong>CONFIRM</strong>" to delete the Issue.
        </label>
        <input
          type="text"
          className="form-control"
          name="confirm"
          id="confirm"
          aria-describedby="helpId"
          placeholder="CONFIRM"
          ref={confirmRef}
        />
      </div>
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-danger"
          onClick={onDeleteHandler}
        >
          Delete
        </button>
      </div>
    </FormContainerComponent>
  );
}

export default DeleteIssuePage