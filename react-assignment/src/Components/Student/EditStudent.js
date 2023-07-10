import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function EditStudent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [editData, setEditData] = useState(location.state);
  const [departData, setDepartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9191/getDepartment")
      .then((response) => setDepartData(response.data));
  }, [departData]);

  function handleClickSubmit() {
    const body = {
      studentId : editData.stu_id,
      studentName: editData.stu_name,
      courseName: editData.course,
      specializedIn: editData.specialization,
      percentage: editData.percentage,
      departId: editData.depart_id,
    };

    axios.put("http://localhost:9191/updateStudent", body).then(() => {
      navigate("/student");
    });
  }

  function handleClickCancel() {
    navigate("/student");
  }

  const handleStudentName = (e) => {
    const copyData = { ...editData };
    copyData.stu_name = e.target.value;
    setEditData(copyData);
  };

  const handleCourseName = (e) => {
    const copyData = { ...editData };
    copyData.course = e.target.value;
    setEditData(copyData);
  };

  const handlesplName = (e) => {
    const copyData = { ...editData };
    copyData.specialization = e.target.value;
    setEditData(copyData);
  };

  const handleper = (e) => {
    const copyData = { ...editData };
    copyData.percentage = e.target.value;
    setEditData(copyData);
  };

  const handleDepart = (e) => {
    const copyData = { ...editData };
    copyData.depart_id = e.target.value;
    setEditData(copyData);
  };
  
  return (
    <div className="div1">
      <div className="divtitle">
        <h1 className="createtitle">Edit Student</h1>
      </div>
      <form>
        <label className="inputStudent">Student Name</label>
        <input
          type="text"
          name="studentName"
          className="inputStudent"
          value={editData.stu_name}
          onChange={handleStudentName}
        ></input>

        <label className="inputCourse">Course Name</label>
        <input
          type="text"
          name="courseName"
          className="inputCourse"
          value={editData.course}
          onChange={handleCourseName}
        ></input>

        <label className="inputSpl">Specialized Name</label>
        <input
          type="text"
          name="specializedIn"
          className="inputSpl"
          value={editData.specialization}
          onChange={handlesplName}
        ></input>

        <label className="inputPer">Percentage</label>
        <input
          type="number"
          name="percentage"
          className="inputPer"
          value={editData.percentage}
          onChange={handleper}
        ></input>
        <label className="inputdep">Department</label>
        <select
          className="optiondepartment"
          name="departId"
          value={editData.depart_id}
          onChange={handleDepart}
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
          <Button className="submitbutton" onClick={handleClickSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
