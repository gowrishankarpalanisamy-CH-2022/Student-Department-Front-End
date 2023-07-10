import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Group from "../../Components/Assests/Group.svg";
import deleteImg from "../../Components/Assests/deleteImg.png";
import { Button } from "@mui/material";

export default function Student()
{
    const[studentData,setStudentData] = useState([]);
    
    const navigate = useNavigate();

    const columns = [
        { field: "stu_id", headerName: "ID", width :200},
        {field: "stu_name", headerName: "Name",width : 200},
        {field: "course", headerName: "Course",width : 200},
        {field: "specialization", headerName: "Specialized",width : 200},
        {field: "percentage", headerName: "Percentage",width : 200},
        {field: "depart_name", headerName: "Department",width : 200},
        {
            field: "action",
            headerName: "Edit",
            width: 150,
            renderCell: (cellValues) => {
              return (
                <div className="gridButton">
                  <img
                    className="editIcon"
                    src={Group}
                    alt="editImg"
                    onClick={() => handleClickEdit(cellValues.row)}
                  />
                </div>
              );
            },
          },
          {
            field: "delete",
            headerName: "Delete",
            width: 200,
            renderCell: (cellValues) => {
              return (
                <div className="gridButton">
                  <img
                    className="deleteIcon"
                    src={deleteImg}
                    alt="delete"
                    onClick={() => handleClickDelete(cellValues.row)}
                    />
                </div>
              )
            }
          }
    ]

    function handleClickEdit(data) {
        console.log(data);
        navigate("/editStudent", { state: data });
      }
    
      function handleClickCreate(){
        navigate("/addStudent");
      }
    
      function handleClickDelete(data){
        axios
        .delete(`http://localhost:9191/deleteStudent/${data.stu_id}`)
        .then((response) =>
        console.log(response)
        );
      }

      useEffect(() => {
        axios
        .get("http://localhost:9191/getStudent")
        .then((response) =>
        setStudentData(response.data));
    },[studentData])


    return(
        <div className="dashboard-table-student">
            <h1>Student Details</h1>
          <Button className="createButtonStudent" onClick={handleClickCreate}>+ Create</Button>
          <DataGrid
            sx={{ maxHeight: 1200 }}
            rows={studentData}
            columns={columns}
            getRowId={(row) => row.stu_id}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 15]}
            disableColumnSelector={true}
            disableRowSelectionOnClick={true}
            rowSelection={false}
          />
        </div>
    )
}