import React from "react";
import Student from "../../Components/Student/CreateStudent";
import NavBar from "../../Components/Dashboard/navBar";

export default function CreateStudent(){
    return(
        <div className="navDepartment">
            <NavBar/>
            <div className="studentcontainer">
                <Student/>
            </div>
        </div>
    )
}