import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { validate } from 'validate.js';
import AlertBoxComponent from './AlertBoxComponent';
import FieldErrorsComponent from './FieldErrorsComponent';
import FieldErrorsToStateMapper from '../helpers/FieldErrorsToStateMapper';
import FormContainerComponent from './FormContainerComponent';
import PasswordInputComponent from './PasswordInputComponent';

function ChangePasswordComponent() {
    const [fieldsErrors, setFieldsErrors] = useState({password:[],confirmPassword:[]});

    const [alertState,setAlertState] =  useState({visible:false,type:"danger",message:""});
  
    const changePasswordFormValidateRules = {
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
      const errors = validate(formValues,changePasswordFormValidateRules);
      FieldErrorsToStateMapper(errors,fieldsErrors,setFieldsErrors);
      if(errors===undefined){
        setAlertState({visible:true,type:"success",message:"Password updated Successfully !"});
      }
    };
  
  
  
    return (
      <FormContainerComponent>
        <form action="" method="post" onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <h2>Change Password</h2>
          </div>
          {alertState.visible && (
            <AlertBoxComponent
              type={alertState.type}
              message={alertState.message}
            />
          )}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <PasswordInputComponent name={"password"} id={"password"} />
            <FieldErrorsComponent errors={fieldsErrors.password} />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password <span className="text-danger">*</span>
            </label>
            <PasswordInputComponent
              name={"confirmPassword"}
              id={"confirmPassword"}
            />
            <FieldErrorsComponent errors={fieldsErrors.confirmPassword} />
          </div>
          <button type="submit" className="btn btn-primary">
            Change
          </button>
        </form>
      </FormContainerComponent>
    );
}

export default ChangePasswordComponent