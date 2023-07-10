import React from "react";
import Student from "../../Components/Student/EditStudent";
import NavBar from "../../Components/Dashboard/navBar";

export default function StudentDashboard(){
    return(
        <div className="navDepartment">
            <NavBar/>
            <div className="studentcontainer">
                <Student/>
            </div>
        </div>
    )
}