import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

export default function FetchData(){
    const[data,setData] = useState([]);
    useEffect(() => {
        axios.get("http://192.168.17.105:9632/api/v1/admin").then((response) => {
          setData(response.data.content);
        })
        .catch((err) => {
            console.log(err);
        })
      },[] );
    return(
        <div className="dataset">
            <label>Fetch data through API</label>
            <table className="tableData">
                {data.length
                ? data.map((data) => (
                    <tr key={data.adminName}>
                        <td>{data.clinicName}</td>
                        <td>{data.phoneNumber}</td>
                    </tr>
                ))
            :null}
            </table>
        </div>
    )
}