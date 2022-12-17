import React, { useEffect, useState } from 'react'
import FormContainerComponent from './FormContainerComponent';
import AlertBoxComponent from './AlertBoxComponent';
import FieldErrorsComponent from './FieldErrorsComponent';
import FieldErrorsToStateMapper from '../helpers/FieldErrorsToStateMapper';
import { validate } from 'validate.js';

function ProjectCreateEditForm({title,project,successfulSubmitHandler,alertState,setAlertState}) {


  const [fieldsErrors, setFieldsErrors] = useState({name:[],repoURL:[],description:[]});

  //field states




  useEffect(() => {
   
  }, [])
  



  const loginFormValidateRules = {
    name:{
      presence: true,
      length:{
        minimum:2,
        maximum:256
      }    
    },
    repoURL:{
        url:true
    },
    description:{
      length:{
        maximum:356
      }
    }
  };



  const onSubmitHandler = (e)=>{
    e.preventDefault();
    setAlertState({visible:false,type:"success",message:""});
    const formValues = validate.collectFormValues(e.target);
    const errors = validate(formValues,loginFormValidateRules);
    FieldErrorsToStateMapper(errors,fieldsErrors,setFieldsErrors);
    if(errors===undefined){
      setAlertState({visible:true,type:"success",message:"Update Successful !"});
      successfulSubmitHandler(formValues);
    }
  };



  return (
    <FormContainerComponent>
        <form action="" method="post" onSubmit={onSubmitHandler}  >
          <div className="mb-3">
            <h2>{title}</h2>
          </div>
          {alertState.visible && <AlertBoxComponent type={alertState.type} message={alertState.message} />}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text"
              className="form-control" name="name" id="name" defaultValue={project.name}  aria-describedby="helpId" placeholder=""/>
              <FieldErrorsComponent errors={fieldsErrors.name} />
          </div>
          <div className="mb-3">
            <label htmlFor="repoURL" className="form-label">Repository URL</label>
            <input type="url"
              className="form-control" name="repoURL" id="repoURL" defaultValue={project.repoURL}  aria-describedby="helpId" placeholder=""/>
              <FieldErrorsComponent errors={fieldsErrors.repoURL} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea name="description" className='form-control' id="description" defaultValue={project.description}  cols="30" rows="10"></textarea>
              <FieldErrorsComponent errors={fieldsErrors.description} />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
          <br />
        </form>
    </FormContainerComponent>
  )
}

export default ProjectCreateEditForm;