import { Button } from "@mui/material";
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Department(){
    
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);

    const initialValues = {
        departName : ""
    }

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
      };
    
      const validate = (values) => {
        const errors = {};
    
        if (!values.departName) {
          errors.departName = "Department Name is required!";
          setIsSubmit(false);
        }
        else {
          setIsSubmit(true);
        }
      return errors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if (isSubmit === true) {
          handleClickSubmit();
        }
      };

    function handleClickSubmit(){
        const body = {
            departName : formValues.departName
        };

        axios
        .post("http://localhost:9191/addDepartment", body)
        .then(() =>{
            navigate("/departmentdashboard");
        })
    }

    function handleClickCancel(){
        navigate("/departmentdashboard")
    }
    return(
        <div className="div1">
            <div className="divtitle">
                <h1 className="createtitle">Create Department</h1>
            </div>
            <form >
            <label className="inputLabel">Department Name</label>
            <input
             type="text"
             name="departName"
             className="inputDepartment"
             value={formValues.departName}
             onChange={handleChange}
             placeholder="Enter the Department name">
             </input>

             <span
             style={{
                position: "absolute",
                top: " 180px",
                width: "312px",
                fontSize: "13px",
                left: "28%",
              }}
              className="error">
                {formErrors.departName}
             </span>

             <div className="bottombutton">
             <Button className="cancelButton" onClick={handleClickCancel}>Cancel</Button>
             <Button className="submitbutton" onClick={handleSubmit}>Submit</Button>
             </div>
             </form>
        </div>
    );
}