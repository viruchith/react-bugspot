import React from 'react'
import { useParams } from 'react-router-dom'
import usersMockArray from '../mock/usersMock';

function UserDetailsPage() {
    const {username} = useParams();
    
    const user = usersMockArray.find(u=>u.username===username);


  return  (
    <div className="mt-3 mb-5 d-flex justify-content-center">
    <div className="card p-3 col-sm-6 col-md-4 col-lg-4">
        <div className="mb-3"><h3>User Details :</h3></div>
        <hr />
        <div className="mb-3">
            <h5><strong>ID</strong> : {user.id}</h5>
        </div>
        <div className="mb-3">
            <h5><strong>Username</strong> : @{user.username}</h5>
        </div>
        <div className="mb-3">
            <h5><strong>Email</strong> : <a href={"mailto:"+user.email}>{user.email}</a></h5>
        </div>
        <div className="mb-3">
            <h5><strong>First Name</strong> : {user.firstName}</h5>
        </div>
        <div className="mb-3">
            <h5><strong>Last Name</strong> : {user.lastName}</h5>
        </div>
    </div>
  </div>  );
}

export default UserDetailsPage