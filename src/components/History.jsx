
  import React, { useState } from "react";
  import axios from "axios";
  
  const History = () => {
    const [request, setRequest] = useState();
    const [details, setDetals] = useState([]);
  
    const getRequestHandler = async () => {
      const response = await axios.getUser("http://localhost:5000/user");
      console.log(response);
      setDetals(response.data.details);
      setRequest("GET");
    };
  
    const removeUser = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/${id}`);
        console.log("USer deleted! ", id);
        getRequestHandler();
      } catch (error) {
        alert(error);
      }
    };
  
    return (
      <div>
        <h1>Click the button to get all users</h1>
        <button onClick={getRequestHandler}>GET</button>
        {request === "GET"
          ? details.map((value) => {
              return (
                <div key={value._id}>
                  <h3>
                    Name: {value.firstName} | E-mail: {value.email}
                  </h3>
                  <div style={{ display: "inline" }}>
                    <small onClick={() => removeUser(value._id)}>Delete</small>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    );
  };
  
  export default History;
  