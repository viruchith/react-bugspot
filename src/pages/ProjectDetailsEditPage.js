import React, { useEffect, useState } from 'react'
import ProjectCreateEditForm from '../components/ProjectCreateEditForm'
import userProjectsMockArray from '../mock/userProjectsMock';
import { useParams } from 'react-router-dom';

function ProjectDetailsEditPage(){

    const {projectId} = useParams();
    
    const projectData = userProjectsMockArray.find(p=>p.id==projectId);


    const [project, setProject] = useState({name:"",repoURL:"",description:""});

    const [alertState,setAlertState] =  useState({visible:false,type:"danger",message:""});

    const onSuccessfulSubmitHandler = (formValues)=>{
        setAlertState({visible:false,type:"success",message:""});
        setAlertState({visible:true,type:"success",message:"Project Details updated successfully !"});
        //TODO formvalues PUT
    };

    useEffect(() => {
        //TODO fetch and set project data
      setProject({name:projectData.name,repoURL:projectData.repoURL,description:projectData.description});
    }, [])
    

  return (
    <ProjectCreateEditForm isUpdate={true} title={"Edit Project Details"} project={projectData} alertState={alertState} setAlertState={setAlertState} successfulSubmitHandler={ onSuccessfulSubmitHandler } />
  )
}

export default ProjectDetailsEditPage;