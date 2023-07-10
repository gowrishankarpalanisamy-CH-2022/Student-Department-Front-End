import React from "react";
import { Link } from "react-router-dom";

export default function navBar(){

    return(
        <div className="navbarname">
           <label className="navtitle">Kanini - Student Management</label>
           <div className="option">
             <Link className="departmentlink" to={"/departmentdashboard"}>Department</Link>
             <Link className="studentlink" to={"/student"}>Student</Link>
           </div>
        </div>
    );
}