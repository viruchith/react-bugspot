import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { validate } from 'validate.js';
import AlertBoxComponent from '../components/AlertBoxComponent';
import FieldErrorsComponent from '../components/FieldErrorsComponent';
import FieldErrorsToStateMapper from '../helpers/FieldErrorsToStateMapper';
import FormContainerComponent from '../components/FormContainerComponent';
import PasswordInputComponent from '../components/PasswordInputComponent';

function SignupPage() {

  const [fieldsErrors, setFieldsErrors] = useState({username:[],email:[],firstName:[],lastName:[],password:[],confirmPassword:[]});

  const [alertState,setAlertState] =  useState({visible:false,type:"danger",message:""});


  const signupFormValidateRules = {
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
    email:{
        presence:true,
        email:true
    },
    firstName:{
        presence:true
    },
    lastName:{
        presence:true
    },
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
      <form action="" method="post" onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <h2>SignUp</h2>
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
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="helpId"
            placeholder=""
          />
          <FieldErrorsComponent errors={fieldsErrors.email} />
        </div>

        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="firstName"
            aria-describedby="helpId"
            placeholder=""
          />
          <FieldErrorsComponent errors={fieldsErrors.firstName} />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            id="lastName"
            aria-describedby="helpId"
            placeholder=""
          />
          <FieldErrorsComponent errors={fieldsErrors.lastName} />
        </div>

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
          SignUp
        </button>
        <br />
        <div className="p-3 mb-3">
          <span>Already have an account ? </span>
          <span>
            <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </form>
    </FormContainerComponent>
  );
}

export default SignupPage