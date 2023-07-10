import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateDepartment() {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const [departData, setDepartData] = useState([]);

  const initialValues = {
    studentName: "",
    courseName: "",
    specializedIn: "",
    percentage: "",
    department: 0,
  };

  useEffect(() => {
    axios
      .get("http://localhost:9191/getDepartment")
      .then((response) => setDepartData(response.data));
  },[]);

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.studentName) {
      errors.studentName = "Student Name is required!";
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
    if (!values.courseName) {
      errors.courseName = "Course Name is required!";
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
    if (!values.specializedIn) {
      errors.specializedIn = "Specialization is required!";
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
    if (!values.percentage) {
      errors.percentage = "Percentage is required!";
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (isSubmit === true) {
      handleClickSubmit();
    }
  };

  function handleClickSubmit() {
    const body = {
        studentName: formValues.studentName,
        courseName: formValues.courseName,
        specializedIn: formValues.specializedIn,
        percentage: formValues.percentage,
        departId: formValues.department, 
    }
    console.log(body);
    axios
        .post("http://localhost:9191/createStudent", body)
        .then(() =>{
            navigate("/student");
        })
  }

  function handleClickCancel() {
    navigate("/student");
  }
  return (
    <div className="div1">
      <div className="divtitle">
        <h1 className="createtitle">Create Student</h1>
      </div>
      <form >
        <label className="inputStudent">Student Name</label>
        <input
          type="text"
          name="studentName"
          className="inputStudent"
          value={formValues.studentName}
          onChange={handleChange}
          placeholder="Enter the Student name"
        ></input>

        <span
          style={{
            position: "absolute",
            top: " 180px",
            width: "312px",
            fontSize: "13px",
            left: "25%",
          }}
          className="error"
        >
          {formErrors.studentName}
        </span>

        <label className="inputCourse">Course Name</label>
        <input
          type="text"
          name="courseName"
          className="inputCourse"
          value={formValues.courseName}
          onChange={handleChange}
          placeholder="Enter the Course name"
        ></input>
        <span
          style={{
            position: "absolute",
            top: " 280px",
            width: "312px",
            fontSize: "13px",
            left: "25%",
          }}
          className="error"
        >
          {formErrors.courseName}
        </span>

        <label className="inputSpl">Specialized Name</label>
        <input
          type="text"
          name="specializedIn"
          className="inputSpl"
          value={formValues.specializedIn}
          onChange={handleChange}
          placeholder="Enter the Specialized name"
        ></input>
        <span
          style={{
            position: "absolute",
            top: " 380px",
            width: "312px",
            fontSize: "13px",
            left: "25%",
          }}
          className="error"
        >
          {formErrors.specializedIn}
        </span>

        <label className="inputPer">Percentage</label>
        <input
          type="number"
          name="percentage"
          className="inputPer"
          value={formValues.percentage}
          onChange={handleChange}
          placeholder="Enter the Percentage"
        ></input>
        <span
          style={{
            position: "absolute",
            top: " 180px",
            width: "312px",
            fontSize: "13px",
            left: "60%",
          }}
          className="error"
        >
          {formErrors.percentage}
        </span>

        <label className="inputdep">Department</label>
        <select
          className="optiondepartment"
          name="department"
          value={formValues.department}
          onChange={handleChange}
        >
          <option value=""></option>
          {departData.map((option) => (
            <option key={option} value={option.departID}>
              {option.departName}
            </option>
          ))}
        </select>

        <div className="bottombuttonStudent">
          <Button className="cancelButton" onClick={handleClickCancel}>
            Cancel
          </Button>
          <Button className="submitbutton" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
