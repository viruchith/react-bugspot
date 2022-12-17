import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { validate } from 'validate.js';
import AlertBoxComponent from '../components/AlertBoxComponent';
import FieldErrorsComponent from '../components/FieldErrorsComponent';
import FieldErrorsToStateMapper from '../helpers/FieldErrorsToStateMapper';
import FormContainerComponent from '../components/FormContainerComponent';

function ChangePasswordPage() {
    const [fieldsErrors, setFieldsErrors] = useState({password:[],confirmPassword:[]});

    const [alertState,setAlertState] =  useState({visible:false,type:"danger",message:""});
  
  
    const signupFormValidateRules = {
      password:{
        presence:true,
        length:{
          minimum:8,
          maximum:100
        }
      },
      confirmPassword:{
          presence:true,
          equality:"password"
      }
    };
  
  
    const onSubmitHandler = (e)=>{
      e.preventDefault();
      setAlertState({visible:false,type:"success",message:""});
      const formValues = validate.collectFormValues(e.target);
      const errors = validate(formValues,signupFormValidateRules);
      FieldErrorsToStateMapper(errors,fieldsErrors,setFieldsErrors);
      if(errors===undefined){
        setAlertState({visible:true,type:"success",message:"SignUp Successful !"});
      }
    };
  
  
  
    return (
    <FormContainerComponent>
          <form action="" method="post" onSubmit={onSubmitHandler}  >
            <div className="mb-3">
              <h2>Change Password</h2>
            </div>
            {alertState.visible && <AlertBoxComponent type={alertState.type} message={alertState.message} />}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Current Password</label>
              <input type="password"
                className="form-control" name="password" id="password" aria-describedby="helpId" placeholder=""/>
                <FieldErrorsComponent errors={fieldsErrors.password} />
            </div>
  
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" aria-describedby="helpId" placeholder=""/>
                <FieldErrorsComponent errors={fieldsErrors.confirmPassword} />
            </div>
            <button type="submit" className="btn btn-primary">Change</button>
          </form>
    </FormContainerComponent>)
}

export default ChangePasswordPage