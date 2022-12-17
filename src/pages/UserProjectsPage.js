import React from 'react'
import { Link } from 'react-router-dom';
import loggedinUserMockObject from '../mock/loggedinUserMock';
import userProjectsMockArray from '../mock/userProjectsMock';

function UserProjectsPage() {

  return (
    <div className='d-flex justify-content-center' >
        <div className="mt-5 mb-5 p-3 card col-md-6 col-sm-8">
          <h3>Your Projects :</h3>
          <br />
          <small>You are part of {userProjectsMockArray.length} projects.</small>
          <br />
          <div className="mb-3 p-2">
            <Link className="btn btn-primary" to={"/projects/create"} >New Project&nbsp;<i class="fa-solid fa-briefcase"></i></Link>
          </div>
          <hr />
          <div className="mb-3 p-2">
          {userProjectsMockArray.map(project=>{
            return <div key={project.id} className="card shadow p-3 mb-3 bg-body rounded">
          <Link style={{"textDecoration":"none"}} to={"/projects/"+project.id}>
             <div>
             <span><strong>{"ID : #"+project.id+""}</strong></span>
              <span><h5>{project.name}</h5></span>
              <span><span className={"badge "+((project.owner.id===loggedinUserMockObject.id)?"bg-warning text-dark":"bg-secondary")} >Owner : <strong>{"@"+project.owner.username}</strong></span></span>
             </div>
             </Link>
            </div>;
          })}
          </div>
        </div>
    </div>
  )
}

export default UserProjectsPage;