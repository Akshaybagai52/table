import React, { useState } from "react";
import Records from "./Data.json";
import { FaSort } from "react-icons/fa";


export default function Table() {
  const [data, setData] = useState(Records);
  const [order, setOrder] = useState("ASC");
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(current => !current)
  }

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
         a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
      
         a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };
  return (
    <>
      <table cellSpacing="0" cellPadding="12">
        <thead>
          <th>
            First_Name <FaSort className="sort-icon" onClick={() => sorting("name")} />
          </th>
          <th>Last_name </th>
          <th>Email Address </th>
          <th>Gender </th>
          <th>Status</th>
        </thead>
        <tbody>
          {data.map((record) => {
            return (
              <tr cellspacing="0" style={{
          backgroundColor: isActive ? 'salmon' : '',
          color: isActive ? 'white' : '',
        }}
        onClick={handleClick}>
                 <td key={record.id} className="first-column">
                  
                  {record.first_name}
                </td> 
                <td key={record.id}>{record.last_name}</td>
                <td key={record.id}>{record.email}</td>
                <td key={record.id}>{record.gender}</td>
                <td key={record.id} style={{
          backgroundColor: record.status==='true' ? 'green' : 'red',
        }}>{record.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
