import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Group from "../../Components/Assests/Group.svg";
import deleteImg from "../../Components/Assests/deleteImg.png";
import { Button } from "@mui/material";
import navBar from "../Dashboard/navBar";

export default function Department(){

    const[departData,setDepartData] = useState([]);

     const navigate = useNavigate();

    const columns = [
        { field: "departID", headerName: "ID", width :200},
        {field: "departName", headerName: "Name",width : 300},
        {
            field: "action",
            headerName: "Edit",
            width: 300,
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
            width: 300,
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
    navigate("/editDepartment", { state: data });
  }

  function handleClickCreate(){
    navigate("/createDepartment");  
  } 

  function handleClickDelete(data){
    axios
    .delete(`http://localhost:9191/deleteDepartment/${data.departID}`)
    .then((response) =>
    console.log(response)
    );
  }

    useEffect(() => {
        axios
        .get("http://localhost:9191/getDepartment")
        .then((response) =>
        setDepartData(response.data));
    },[])

    console.log(departData);

    return(
          <div className="dashboard-table">
          <h1>Department</h1>
          <Button className="createButton" onClick={handleClickCreate}>+ Create</Button>
          <DataGrid
            sx={{ maxHeight: 1200 }}
            rows={departData}
            columns={columns}
            getRowId={(row) => row.departID}
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
    );
}