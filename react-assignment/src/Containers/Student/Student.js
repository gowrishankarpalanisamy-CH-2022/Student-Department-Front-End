import React from "react";
import Student from "../../Components/Student/Student";
import NavBar from "../../Components/Dashboard/navBar";

export default function StudentDashboard(){
    return(
        <div className="navDepartment">
            <NavBar/>
            <div className="studentcontainerdashboard">
                <Student/>
            </div>
        </div>
    )
}