import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import DepartmentDashboard from './Containers/Department/Department';
import UserDashboard from "./Containers/Department/CreateDepartment";
import EditDashboard from "./Containers/Department/EditDepartment";
import UserCreate from "./Containers/Student/CreateStudent";
import User from "./Containers/Student/Student";
import UserEdit from "./Containers/Student/EditStudent";

function App() {
  return (
    <div className='app'>
      <Routes>
      <Route path="/" element={<Navigate to="/departmentdashboard" />}></Route>
      <Route path= "/student" element={<User/>}/>
      <Route path= "/addStudent" element={<UserCreate/>}/>
      <Route path= "/editStudent" element={<UserEdit/>}/>
      <Route path= "/departmentdashboard" element={<DepartmentDashboard/>}/>
      <Route path= "/createDepartment"  element={<UserDashboard/>}/>
      <Route path= "/editDepartment" element={<EditDashboard/>} />
      </Routes>
    </div>
  );
}

export default App;