import React from 'react'
import { Link, useParams } from 'react-router-dom';
import IssuesTableViewComponent from '../components/IssuesTableViewComponent';
import userProjectsMockArray from '../mock/userProjectsMock';

function ProjectViewPage() {
    const {projectId} = useParams();


    const project = userProjectsMockArray.find(p=>p.id==projectId);

    
    return  <div className="d-flex justify-content-center">
    <div className="mt-5 mb-5 p-3 card col-md-6 col-sm-8">
        {(project!==undefined)?(<div className='p-3'>
            <span className='h3'><strong>{project.name}</strong> <Link to={"/projects/"+projectId+"/edit"} className="btn btn-primary"><i className="fa-solid fa-pen-to-square"></i></Link>&nbsp;</span>
            <hr />
            <h5><strong>ID : </strong>#{project.id}</h5>
            <h5><strong>Owner : </strong><Link className='badge bg-warning text-dark pill-rounded' >@{project.owner.username}&nbsp;<i className="fa-solid fa-crown"></i></Link></h5>
            <div className="mb-3">
                <h5><strong>Description : &nbsp;<i className="fa-sharp fa-solid fa-circle-info"></i></strong></h5>
                <p>{project.description}</p>
            </div>
            <div className="p-3">
            <Link className='btn btn-info'>View Members&nbsp;<i className="fa-solid fa-people-group"></i></Link>
            &nbsp;
            <Link className='btn btn-danger'>Report Issue&nbsp;<i className="fa-solid fa-bug"></i></Link>
            &nbsp;
            <Link className='btn btn-success'>Versions&nbsp;<i className="fa-solid fa-code-compare"></i></Link>
            </div>
            <hr />
            <h3><strong>Issues : </strong></h3>
            <div className="mb-3">
                <IssuesTableViewComponent/>
            </div>
            </div>):
            (<h3>Project Not Found !</h3>)}
    </div>
</div>
}

export default ProjectViewPage;