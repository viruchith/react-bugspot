import React, { useState, version } from 'react'
import FormContainerComponent from '../components/FormContainerComponent'
import { useParams } from 'react-router-dom';
import userProjectsMockArray from '../mock/userProjectsMock';

function ProjectVersionUpdatePage() {

    const {projectId} = useParams();


    const project = userProjectsMockArray.find(p=>p.id==projectId);

    const [projectVersions, setProjectVersions] = useState(project.projectVersions);

    const deletionHandler = (version)=>{
            setProjectVersions(projectVersions.filter(projectVersion=>projectVersion!==version));
    };


    const [version, setVersion] = useState('');

    const addVersionHandler = ()=>{
        if(/(\d+\.)?(\d+\.)?(\*|\d+)/.test(version)){
            setProjectVersions(prev=>[version,...prev]);
        }else{
            alert('Enter a valid version !');
        }
    };


  return (
    <FormContainerComponent>
        <h3>Update Project Versions</h3>
        <hr />
        <div className="mb-3">
            <div className="input-group mb-3">
              <input type="text" className="form-control" name="version" onChange={(e)=>setVersion(e.target.value)} id="" aria-describedby="helpId" placeholder=""/>
              <button className="btn btn-primary" onClick={addVersionHandler} >add&nbsp;<i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
        <hr />
        <div className="table-responsive">
            <table className="table table-striped
            table-hover	
            table-primary
            align-middle">
                <thead className="table-light">
                    <tr>
                        <th>Versions</th>
                        <th>#</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {projectVersions.map((version)=>{
                            return (
                        <tr key={version} className="table-primary" >
                            <td>{version}</td>
                            <td><button title='Delete' onClick={()=>{deletionHandler(version)}} className="btn btn-danger"><i className="fa-solid fa-delete-left"></i></button></td>
                        </tr>);
                        })}
                    </tbody>
                    <tfoot>
                        
                    </tfoot>
            </table>
        </div>
        
    </FormContainerComponent>
  );
}

export default ProjectVersionUpdatePage;