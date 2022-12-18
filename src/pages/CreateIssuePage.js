import React, { useState } from 'react'
import { CodeBlock } from 'react-code-blocks';
import { validate } from 'validate.js';
import FieldErrorsToStateMapper from '../helpers/FieldErrorsToStateMapper';
import FieldErrorsComponent from '../components/FieldErrorsComponent';
import AlertBoxComponent from '../components/AlertBoxComponent';
import userProjectsMockArray from '../mock/userProjectsMock';
import { useParams } from 'react-router-dom';

function CreateIssuePage() {

    const {projectId} = useParams();


    const project = userProjectsMockArray.find(p=>p.id==projectId);


    const [projectVersions, setprojectVersions] = useState(project.projectVersions);

    const [sourceCode, setSourceCode] = useState("");

    const [fieldsErrors, setFieldsErrors] = useState({category:[],reproducibility:[],severity:[],priority:[],productVersion:[],summary:[],description:[]});
    
    const [alertState,setAlertState] =  useState({visible:false,type:"danger",message:""});




    const createIssueRules = {
        category:{
            presence:true,
            inclusion:['Build','Core','Infrastructure','Tests','User Interface']
        },
        reproducibility:{
            presence:true,
            inclusion:['Always','Sometimes','Random','Unable To Reproduce','NA']
        },
        severity:{
            presence:true,
            inclusion:['Feature','Trivial','Text','Tweak','Minor','Major','Block']
        },
        priority:{
            presence:true,
            inclusion:['Low','Normal','High','Urgent','Immediate']
        },
        summary:{
            presence:true,
            length:{
                maximum:256
            }
        },
        description:{
            presence:true
        },
        productVersion:{
            presence:true
        }
    };


    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setAlertState({visible:false,type:"success",message:""});
        const formValues = validate.collectFormValues(e.target);
        const errors = validate(formValues,createIssueRules);
        FieldErrorsToStateMapper(errors,fieldsErrors,setFieldsErrors);
        if(errors===undefined){
          setAlertState({visible:true,type:"success",message:"Issue created Successfully !"});
          console.log(formValues);
        }
      };



  return (
    <div className="mt-5 mb-5 d-flex justify-content-center">
        <div className="card p-3 col-sm-8 col-md-6 col-lg-6">
            <div className="mb-3">
                <h3>Create New Issue : </h3>
            </div>
            <hr />
            <form action="" method="post" onSubmit={onSubmitHandler}>
            {alertState.visible && <AlertBoxComponent visible={alertState.visible} type={alertState.type} message={alertState.message} />}
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category : </label>
                    <select className="form-select form-select-lg" name="category" id="category">
                        <option value="Build" >Build</option>
                        <option value="Core">Core</option>
                        <option value="Infrastructure">Istanbul</option>
                        <option value="Tests">Jakarta</option>
                        <option value="User Interface">User Interface</option>
                    </select>
                    <FieldErrorsComponent errors={fieldsErrors.category} />
                </div>
                <div className="mb-3">
                    <label htmlFor="reproducibility" className="form-label">Reproducibility : </label>
                    <select className="form-select form-select-lg" name="reproducibility" id="reproducibility">
                        <option value="Always" >Always</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Random">Random</option>
                        <option value="Unable to reproduce">Unable to Reproduce</option>
                        <option value="NA">NA</option>
                    </select>
                    <FieldErrorsComponent errors={fieldsErrors.reproducibility} />
                </div>
                <div className="mb-3">
                    <label htmlFor="severity" className="form-label">Severity : </label>
                    <select className="form-select form-select-lg" name="severity" id="severity">
                        <option value="Feature" >Feature</option>
                        <option value="Trivial">Trivial</option>
                        <option value="Text">Text</option>
                        <option value="Tweak">Tweak</option>
                        <option value="Minor">Minor</option>
                        <option value="Major">Major</option>
                        <option value="Crash">Crash</option>
                        <option value="Block">Block</option>
                    </select>
                    <FieldErrorsComponent errors={fieldsErrors.severity} />
                </div>
                <div className="mb-3">
                    <label htmlFor="priority" className="form-label">Priority : </label>
                    <select className="form-select form-select-lg" name="priority" id="priority">
                        <option value="Low" >Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                        <option value="Urgent">Urgent</option>
                        <option value="Immediate">Immediate</option>
                    </select>
                    <FieldErrorsComponent errors={fieldsErrors.priority} />
                </div>
                <div className="mb-3">
                    <label htmlFor="projectVersion" className="form-label">Project Version : </label>
                    <select className="form-select form-select-lg" name="productVersion" id="projductVersion">
                        <option value="NA">NA</option>
                       {projectVersions.map(version=><option key={version} value={version} >{version}</option>)}
                    </select>
                    <FieldErrorsComponent errors={fieldsErrors.productVersion} />
                </div>
                <div className="mb-3">
                    <label htmlFor="summary" className="form-label">Summary : </label>
                    <input type="text" className="form-control" name='summary' id="summary"  />
                    <FieldErrorsComponent errors={fieldsErrors.summary} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description : </label>
                    <textarea className='form-control' name="description" id="description" cols="30" rows="10"></textarea>
                    <FieldErrorsComponent errors={fieldsErrors.description} />
                </div>
                <div className="mb-3">
                    <label htmlFor="stepsToReproduce" className="form-label">Steps To Reproduce : </label>
                    <textarea className='form-control' name="stepsToReproduce" id="stepsToReproduce" cols="30" rows="10"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Additional Information : </label>
                    <textarea className='form-control' name="additionalInformation" id="additionalInformation" cols="30" rows="10"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="sourceCode" className="form-label">Source Code : </label>
                    {
                     sourceCode!=="" &&   <div className="mb-3">
                            <label htmlFor="">Code Preview :</label>
                            <CodeBlock text={sourceCode} language={"text"} wrapLines />
                        </div>
                    }
                    <textarea className='form-control' name="sourceCode" id="sourceCode" value={sourceCode} onChange={(e)=>{setSourceCode(e.target.value);}} cols="30" rows="10"></textarea>
                </div>
                <div className="mb-3">
                {alertState.visible && <AlertBoxComponent visible={alertState.visible} type={alertState.type} message={alertState.message} />}
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary">Create</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateIssuePage