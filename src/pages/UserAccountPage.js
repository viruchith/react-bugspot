import React, { useState } from 'react'
import FormContainerComponent from '../components/FormContainerComponent'
import FieldErrorsComponent from '../components/FieldErrorsComponent'
import FieldErrorsToStateMapper from '../helpers/FieldErrorsToStateMapper';
import { validate } from 'validate.js';
import AlertBoxComponent from '../components/AlertBoxComponent';
import ChangePasswordComponent from '../components/ChangePasswordComponent';
import usersMockArray from '../mock/usersMock';

function UserAccountPage() {

    const [fieldsErrors, setFieldsErrors] = useState({username:[],email:[],firstName:[],lastName:[]});

    const [alertState,setAlertState] =  useState({visible:false,type:"danger",message:""});
  
    const [userData, setUserData] = useState({id:1,username:"viruchith",email:"v@g.com",firstName:"Viruchith",lastName:"Ganesan"});

    const [usernameAvail, setUsernameAvail] = useState({visible:false,message:"",valid:true});

  
    const userDetailsEditFormValidateRules = {
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
    };
  
  

    const usernameAvailabilityCheck = (username)=>{
        console.log(username);
        if(username!==undefined && username.length>=5){
            const t =  usersMockArray.find(u=>u.username===username);
            if(t && t.id!=userData.id){
                setUsernameAvail({visible:true,message:"username not available !",valid:false});
            }else{
                setUsernameAvail({visible:true,message:"username available !",valid:true});
            }
        }
    };

    const onSubmitHandler = (e)=>{
      e.preventDefault();
      setAlertState({visible:false,type:"success",message:""});
      const formValues = validate.collectFormValues(e.target);
      const errors = validate(formValues,userDetailsEditFormValidateRules);
      FieldErrorsToStateMapper(errors,fieldsErrors,setFieldsErrors);
      if(errors===undefined){
        setUserData(formValues);
        setAlertState({visible:true,type:"success",message:"SignUp Successful !"});
      }
    };
  


  return (
    <>
    <FormContainerComponent>
        <div className="mb-3">
        <form action="" method="post" onSubmit={onSubmitHandler}  >
        <div className="mb-3">
            <h3>Edit Account Details</h3>
        </div>
          {alertState.visible && <AlertBoxComponent type={alertState.type} message={alertState.message} />}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text"
              className="form-control" name="username" id="username" defaultValue={userData.username} onKeyUp={(e)=>{usernameAvailabilityCheck(e.target.value)}} aria-describedby="helpId" placeholder=""/>
              {usernameAvail.visible&& <div className={(usernameAvail.valid)?'text-success':'text-danger'} >{usernameAvail.message}</div>}
              <FieldErrorsComponent errors={fieldsErrors.username} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text"
              className="form-control" name="email" id="email" defaultValue={userData.email} aria-describedby="helpId" placeholder=""/>
              <FieldErrorsComponent errors={fieldsErrors.email} />
          </div>

          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text"
              className="form-control" name="firstName" id="firstName" defaultValue={userData.firstName} aria-describedby="helpId" placeholder=""/>
              <FieldErrorsComponent errors={fieldsErrors.firstName} />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text"
              className="form-control" name="lastName" id="lastName" defaultValue={userData.lastName} aria-describedby="helpId" placeholder=""/>
              <FieldErrorsComponent errors={fieldsErrors.lastName} />
          </div>
          <button type="submit" className="btn btn-primary" disabled={!usernameAvail.valid} >Update</button>
          <br />
        </form>
        </div>
    </FormContainerComponent>
    <br />
    <ChangePasswordComponent/>
    </>
  )
}

export default UserAccountPage