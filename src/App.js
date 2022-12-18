import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import SignupPage from "./pages/SignupPage";
import UserProjectsPage from "./pages/UserProjectsPage";
import ProjectViewPage from "./pages/ProjectViewPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import ProjectDetailsEditPage from "./pages/ProjectDetailsEditPage";
import ProjectCreatePage from "./pages/ProjectCreatePage";
import ProjectVersionUpdatePage from "./pages/ProjectVersionUpdatePage";
import ProjectMembersPage from "./pages/ProjectMembersPage";


function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/changepassword" element={<ChangePasswordPage/>}/>
          <Route path="/projects" element={<UserProjectsPage/>} />
          <Route path="/projects/create" element={<ProjectCreatePage/>}/>
          <Route path="/projects/:projectId/" element={<ProjectViewPage/>}/>
          <Route path="/projects/:projectId/edit" element={<ProjectDetailsEditPage/>}/>
          <Route path="/projects/:projectId/versions" element={<ProjectVersionUpdatePage/>}/>
          <Route path="/projects/:projectId/members" element={<ProjectMembersPage/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
