import React, { useState } from 'react'
import { CodeBlock } from 'react-code-blocks';
import FieldErrorsToStateMapper from '../helpers/FieldErrorsToStateMapper';
import { collectFormValues, validate } from 'validate.js';
import AlertBoxComponent from './AlertBoxComponent';

function EditCommentComponent({comment,setEditMode}) {


     const [sourceCode, setSourceCode] = useState((comment.code==null)?"":comment.code);

     const [fieldsErrors, setFieldsErrors] = useState({
       password: [],
       confirmPassword: [],
     });
     const [alertState, setAlertState] = useState({
       visible: false,
       type: "danger",
       message: "",
     });

     const addCommentValidateRules = {
       note: {
         presence: true,
       },
     };

     const updateCommentSubmitHandler = (e) => {
       e.preventDefault();

       const formValues = collectFormValues(e.target);

       const errors = validate(formValues, addCommentValidateRules);
       FieldErrorsToStateMapper(errors, fieldsErrors, setFieldsErrors);


       if (errors === undefined) {
         setAlertState({
           visible: true,
           type: "success",
           message: "Comment updated successfully",
         });
       }
     };


    
  return (
    <form action="" method="post" onSubmit={updateCommentSubmitHandler}>
      <h3>Edit comment :</h3>
      {alertState.visible && (
        <AlertBoxComponent
          type={alertState.type}
          message={alertState.message}
        />
      )}
      <div className="mb-3">
        <label htmlFor="note">
          Note <span className="text-danger">*</span> :
        </label>
        <textarea
          className="form-control"
          name="note"
          id="note"
          defaultValue={comment.note}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="note">Code :</label>
        {sourceCode !== "" && (
          <div className="mb-3">
            <label htmlFor="">Code Preview :</label>
            <CodeBlock text={sourceCode} language={"text"} wrapLines />
          </div>
        )}
        <textarea
          className="form-control"
          value={sourceCode}
          onChange={(e) => {
            setSourceCode(e.target.value);
          }}
          defaultValue={comment.sourceCode}
          name="code"
          id="code"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Update
      </button>
      &nbsp;
      <button className="btn btn-secondary" onClick={() => setEditMode(false)}>
        Cancel
      </button>
    </form>
  );
}

export default EditCommentComponent