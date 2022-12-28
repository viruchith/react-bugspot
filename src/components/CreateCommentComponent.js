import React, { useState } from 'react'
import FormContainerComponent from './FormContainerComponent'
import { CodeBlock } from 'react-code-blocks';
import { collectFormValues, validate } from 'validate.js';

import FieldErrorsToStateMapper from '../helpers/FieldErrorsToStateMapper';

function CreateCommentComponent() {

   const [sourceCode, setSourceCode] = useState("");

   const [fieldsErrors, setFieldsErrors] = useState({password:[],confirmPassword:[]});
    const [alertState,setAlertState] =  useState({visible:false,type:"danger",message:""});


   const addCommentValidateRules = {
    note:{
        presence:true
    }
   };

   const addCommentSubmitHandler = (e)=>{
    e.preventDefault();

    const formValues = collectFormValues(e.target);
    
    const errors = validate(formValues,addCommentValidateRules);
    FieldErrorsToStateMapper(errors,fieldsErrors,setFieldsErrors);

    console.log(formValues);

    if (errors === undefined) {
      setAlertState({
        visible: true,
        type: "success",
        message: "Comment added successfully",
      });
    }
   }

  return (
    <div className="mt-5 mb-5 d-flex justify-content-center">
      <div className="card p-3 col-sm-8 col-md-6 col-lg-6">
        <form action="" method="post" onSubmit={addCommentSubmitHandler} >
          <h3>Add a comment :</h3>
          <div className="mb-3">
            <label htmlFor="note">
              Note <span className="text-danger">*</span> :
            </label>
            <textarea className="form-control" name="note" id="note"></textarea>
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
              name="code"
              id="code"
            ></textarea>
          </div>
          <button type="submit" className='btn btn-primary' >Add Comment</button>
        </form>
      </div>
    </div>
  );
}

export default CreateCommentComponent