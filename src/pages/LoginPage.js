import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { validate } from 'validate.js';
import AlertBoxComponent from '../components/AlertBoxComponent';
import FieldErrorsComponent from '../components/FieldErrorsComponent';
import FieldErrorsToStateMapper from '../helpers/FieldErrorsToStateMapper';
import FormContainerComponent from '../components/FormContainerComponent';
import PasswordInputComponent from '../components/PasswordInputComponent';

function LoginPage() {

  const [fieldsErrors, setFieldsErrors] = useState({username:[],password:[]});

  const [alertState,setAlertState] =  useState({visible:false,type:"danger",message:""});

  const loginFormValidateRules = {
    username:{
      presence: true,
      format:{
        pattern:/^[a-zA-Z0-9_-]{5,15}$/,
        message:"Can contain only alphabets, numbers , underscore and hyphen !"
      },
      length:{
        minimum:5,
        maximum:15
      }    
    },
    password:{
      presence:true,
      length:{
        minimum:8,
        maximum:100
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
      setAlertState({visible:true,type:"success",message:"Login Successful !"});
    }
  };

  return (
    <FormContainerComponent>
      <form action="" method="post" onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <h2>Login</h2>
        </div>
        {alertState.visible && (
          <AlertBoxComponent
            type={alertState.type}
            message={alertState.message}
          />
        )}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            aria-describedby="helpId"
            placeholder=""
          />
          <FieldErrorsComponent errors={fieldsErrors.username} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password <span className="text-danger">*</span>
          </label>
          <PasswordInputComponent name={"password"} id={"password"} />
          <FieldErrorsComponent errors={fieldsErrors.password} />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <br />
        <div className="p-3 mb-3">
          <span>Don't have an account ? </span>
          <span>
            <Link to={"/signup"}>SignUp</Link>
          </span>
        </div>
      </form>
    </FormContainerComponent>
  );
}

export default LoginPage