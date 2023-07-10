import React from "react";
import Department from "../../Components/Department/createDepartment";
import NavBar from "../../Components/Dashboard/navBar";

export default function DepartmentDashboard(){
    return(
        <div className="navDepartment">
            <NavBar/>
            <div className="add-departcontainer">
                <Department/>
            </div>
        </div>
    )
}