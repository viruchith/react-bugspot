import React, { useState } from 'react'
import userProjectsMockArray from '../mock/userProjectsMock';
import { useParams } from 'react-router-dom';
import usersMockArray from '../mock/usersMock';
import AlertBoxComponent from '../components/AlertBoxComponent';

function ProjectMembersPage() {

    const {projectId} = useParams();


    const project = userProjectsMockArray.find(p=>p.id==projectId);

    const [alertState,setAlertState] =  useState({visible:false,type:"danger",message:""});

    const [users, setUsers] = useState([]);

    const [members,setMembers] = useState(project.members);

    const searchUsersByUsername = (username)=>{
        if(username===undefined || username===""){
            setUsers([]);
        }else{
            setUsers(usersMockArray.filter(user=>user.username.includes(username)));
        }
    };

    const addMemberClickHandler = (user)=>{
        setAlertState({visible:false,type:"danger",message:""});
        setMembers((prev)=>[user,...prev]);
        setAlertState({visible:true,type:"success",message:"@"+user.username+" was added successfully !"});

    };

    const removeMemberClickHandler = (user)=>{
        setAlertState({visible:false,type:"danger",message:""});
        setMembers(members.filter((member=>member.id!==user.id)));
        setAlertState({visible:true,type:"success",message:"@"+user.username+" was removed successfully !"});
    }


  return (
    <div className="mt-5 mb-5 d-flex justify-content-center">
    <div className="card p-3 col-sm-8 col-md-6 col-lg-6">
        <div className="mb-3">
            <h3>Edit Project Members : </h3>
        </div>
        <hr />
        <div className="mb-3">
            <div className="mb-e">
                {alertState.visible && <AlertBoxComponent visible={alertState.visible} type={alertState.type} message={alertState.message} />}
            </div>
            <div className="mb-3">
                <input type="text" name='search' onKeyUp={(e)=>{searchUsersByUsername(e.target.value)}} id='search' placeholder='Search by username' className="form-control" />
            </div>
            <div className="mb-3">
            <ul class="list-group">
                {users.map(user=><li key={user.id} class="list-group-item list-group-item-action"><span><button onClick={()=>{addMemberClickHandler(user)}} className="badge bg-primary pill-rounded">@{user.username}</button></span>&nbsp;{user.firstName+" "+user.lastName} </li>)}
            </ul>
            </div>
        </div>
        <hr />
        <div className="mb-3">
            <h3>Project Members :</h3>
            <small>{members.length}&nbsp;members.</small>
            <div className="table-responsive">
                <table className="table table-striped
                table-hover	
                table-primary
                align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>#</th>
                        </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {members.map((member)=>{
                                return (
                                <tr key={member.id}>
                                    <td>{member.id}</td>
                                    <td>{member.username}</td>
                                    <td>{member.email}</td>
                                    <td>{member.firstName}</td>
                                    <td>{member.lastName}</td>
                                    <td><button className="btn btn-danger" onClick={()=>{removeMemberClickHandler(member);}} title='delete' ><i className="fa-solid fa-trash"></i></button></td>
                                </tr>);
                            })}
                        </tbody>
                        <tfoot>
                            
                        </tfoot>
                </table>
            </div>
            
        </div>
    </div>
  </div>
  )
}

export default ProjectMembersPage