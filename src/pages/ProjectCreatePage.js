import React, { useState } from 'react'
import FormContainerComponent from '../components/FormContainerComponent';
import AlertBoxComponent from '../components/AlertBoxComponent';
import FieldErrorsComponent from '../components/FieldErrorsComponent';
import { validate } from 'validate.js';
import FieldErrorsToStateMapper from '../helpers/FieldErrorsToStateMapper';
import { Link, useParams } from 'react-router-dom';
import ProjectCreateEditForm from '../components/ProjectCreateEditForm';
import userProjectsMockArray from '../mock/userProjectsMock';

function ProjectCreatePage() {


    const {projectId} = useParams();
    
    const projectData = {name:"",repoURL:"",description:""};

    const [alertState,setAlertState] =  useState({visible:false,type:"danger",message:""});

    const onSuccessfulSubmitHandler = (formValues)=>{
        setAlertState({visible:false,type:"success",message:""});
        setAlertState({visible:true,type:"success",message:"Project Created successfully !"});
        //TODO POST form VALUES
    };

    

  return (
    <ProjectCreateEditForm title={"Create New Project"} project={projectData} alertState={alertState} setAlertState={setAlertState} successfulSubmitHandler={ onSuccessfulSubmitHandler } />
  )
}

export default ProjectCreatePage