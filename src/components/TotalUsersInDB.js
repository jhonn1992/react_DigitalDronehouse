import React from "react";
import { useState, useEffect } from 'react';

function TotalUsersInDB() {
  const [cantUsers, setCantUsers] = useState([]);  
  useEffect(() => {
    fetch('http://localhost:5000/api/users')
    .then(response => response.json())
    .then(data => {
      let totalDataUsers = data.length;
      console.log(data.length);
      setCantUsers(totalDataUsers)
    }).catch(error => console.log(error));
}, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Total Users in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div style={{textAlign: "center"}} className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">{ cantUsers }</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalUsersInDB;