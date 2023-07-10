import React from "react";
import Department from "../../Components/Department/Department";
import NavBar from "../../Components/Dashboard/navBar";

export default function DepartmentDashboard(){
    return(
        <div className="navDepartment">
            <NavBar/>
            <div className="departcontainer">
                <Department/>
            </div>
        </div>
    )
}