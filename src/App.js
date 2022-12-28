import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import SignupPage from "./pages/SignupPage";
import UserProjectsPage from "./pages/UserProjectsPage";
import ProjectViewPage from "./pages/ProjectViewPage";
import ChangePasswordComponent from "./components/ChangePasswordComponent";
import ProjectDetailsEditPage from "./pages/ProjectDetailsEditPage";
import ProjectCreatePage from "./pages/ProjectCreatePage";
import ProjectVersionUpdatePage from "./pages/ProjectVersionUpdatePage";
import ProjectMembersPage from "./pages/ProjectMembersPage";
import CreateIssuePage from "./pages/CreateIssuePage";
import UserAccountPage from "./pages/UserAccountPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import ViewIssuePage from "./pages/ViewIssuePage";
import ProjectDeletePage from "./pages/ProjectDeletePage";
import EditIssuePage from "./pages/EditIssuePage";
import DeleteIssuePage from "./pages/DeleteIssuePage";



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account" element={<UserAccountPage />} />
          <Route path="/projects" element={<UserProjectsPage />} />
          <Route path="/projects/create" element={<ProjectCreatePage />} />
          <Route path="/projects/:projectId/" element={<ProjectViewPage />} />
          <Route
            path="/projects/:projectId/edit"
            element={<ProjectDetailsEditPage />}
          />
          <Route
            path="/projects/:projectId/delete"
            element={<ProjectDeletePage />}
          />
          <Route
            path="/projects/:projectId/versions"
            element={<ProjectVersionUpdatePage />}
          />
          <Route
            path="/projects/:projectId/members"
            element={<ProjectMembersPage />}
          />
          <Route
            path="/projects/:projectId/issues/create"
            element={<CreateIssuePage />}
          />
          <Route
            path="/projects/:projectId/issues/:issueId/"
            element={<ViewIssuePage />}
          />
          <Route
            path="/projects/:projectId/issues/:issueId/edit"
            element={<EditIssuePage />}
          />
          <Route
            path="/projects/:projectId/issues/:issueId/delete"
            element={<DeleteIssuePage />}
          />
          <Route path="/u/:username/" element={<UserDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
