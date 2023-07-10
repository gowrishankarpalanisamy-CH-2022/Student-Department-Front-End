import { Button } from "@mui/material";
import React, { useState} from "react";
import { useNavigate , useLocation} from "react-router-dom";
import axios from "axios";

export default function EditDepartment(){
    const navigate = useNavigate();
    const location = useLocation();
    const [editData, setEditData] = useState(location.state);
    const [name, setterName] = useState(false);

    function handleClickSubmit(){
        axios
        .put("http://localhost:9191/updateDepartment", editData)
        .then(() =>{
            navigate("/departmentdashboard");
        })
    }

    const handleDepartName = (e) => {
        const copyData = { ...editData };
        copyData.departName = e.target.value;
        setEditData(copyData);
    
        let value = e.target.value;
        if (value.length > 1) {
          setterName(true);
        }
      };

    function handleClickCancel(){
        navigate("/departmentdashboard")
    }
    return(
        <div className="div1">
            <div className="divtitle">
                <h1 className="createtitle">Edit Department</h1>
            </div>
            <form >
            <label className="inputLabel">Department Name</label>
            <input
             type="text"
             name="departName"
             className="inputDepartment"
             value={editData.departName}
             onChange={handleDepartName}
             placeholder="Enter the Department name">
             </input>

             <div className="bottombutton">
             <Button className="cancelButton" onClick={handleClickCancel}>Cancel</Button>
             <Button className="submitbutton" onClick={handleClickSubmit}>Submit</Button>
             </div>
             </form>
        </div>
    )
}