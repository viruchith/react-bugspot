import React, { useRef, useState } from 'react'
import FormContainerComponent from '../components/FormContainerComponent'
import { useParams } from 'react-router-dom'
import userProjectsMockArray from '../mock/userProjectsMock';
import AlertBoxComponent from '../components/AlertBoxComponent';

function ProjectDeletePage() {
    const {projectId} = useParams();

      const [alertState, setAlertState] = useState({
        visible: false,
        type: "danger",
        message: "",
      });


    const confirmRef = useRef();

    const project = userProjectsMockArray.find(p=>p.id==projectId);

    const onDeleteHandler = ()=>{

         setAlertState({
           visible: false,
           type: "success",
           message: "",
         });

        if(confirmRef.current.value.trim()==="CONFIRM"){
      setAlertState({
        visible: true,
        type: "success",
        message: "Deletion successfull !",
      });
        }else{
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
          Delete Project "#{project.id} {project.name}"
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
          Type "<strong>CONFIRM</strong>" to delete the project.
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

export default ProjectDeletePage