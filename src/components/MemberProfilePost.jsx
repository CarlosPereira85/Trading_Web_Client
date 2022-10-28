import React, { useState } from "react";
import axios from "axios";

import FileBase64 from "react-file-base64";


const Memberprofile = () => {
  const [address, setAddress] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  // const [image, setImage] = useState("");
  const [city, setCity] = useState("Berlin");
  const [postType, setPostType] = useState(1);
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const [message, setMessage] = useState(false);
  const [image, setImage] = useState([]);
   
    // const [request, setRequest] = useState(false);

    const createPost = async () => {
      const data = { image,address, contactPerson, contactNumber, contactEmail, postType, numberOfPersons, city, startDate, endDate };
  
      const API = axios.create({ baseURL: "http://localhost:5000"});
  
      API.interceptors.request.use((req) => {
        if (localStorage.getItem("profile")) {
          req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token 
            }`;
        }
        return req;
      });
      console.log(createPost);
  
  
      await API.post("/memberprofile/postpost", data);
  
      setAddress("");
      setContactPerson("");
      setContactNumber("");
      setContactEmail("");
      // setImage("");
      setCity("");
      setPostType("");
      setNumberOfPersons("");
      setStartDate("");
      setEndDate("");
      setImage([]);
  
  
      // setMessage(true);
  
    };

    const user = JSON.parse(localStorage.getItem("profile"));

    if (!user?.token) {
      return <div>You are not logged in</div>;
  
    };
  
  // const userName =  JSON.parse(localStorage.getItem("profile")).userName;

  return (
    <>
    <form  >
    <input
      onChange={(e) => setContactPerson(e.target.value)}
      
      type="text"
      placeholder="Name"
    />
    <input
      onChange={(e) => setContactNumber(e.target.value)}
     
      type="string"
      placeholder="Phone Number"
    />
    <input
      onChange={(e) => setContactEmail(e.target.value)}
      
      type="email"
      placeholder=" Email"
    />
    <div >
      <div >City</div>
      <div >Address</div>
      <select
        onChange={(e) => setCity(e.target.value)}
       
      >
        <option selected >Berlin</option>
        <option >Brandenburg</option>
      </select>
      <input
        onChange={(e) => setAddress(e.target.value)}
       
        type="text"
        placeholder="Address"
      />
    </div>
    <div >
      <div >Type of Accommodation</div>
      <div >Number of Persons</div>
      <select
        onChange={(e) => setPostType(e.target.value)}

       >
        <option>Hotel</option>
        <option>House</option>
        <option>Apartment</option>
        <option>Guest House</option>
        <option>Hostel</option>
        <option>Chalet</option>
        <option>Garage</option>
        <option>Flat</option>
      </select>
      <select
        onChange={(e) => setNumberOfPersons(e.target.value)}
        >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
    </div>
    <div >
      <div > Available from</div>
      <div > to</div>
      <input
        
        onChange={(e) => setStartDate(e.target.value)}
        
        type="date"
        name="date"
        id="date"
      />
      <input
        
        onChange={(e) => setEndDate(e.target.value)}
        
        type="date"
        name="date"
        id="date"
      />
    </div>
    {/* <div className={styles.accommodationSelectDiv}>
   <div className={styles.accommodationTitles}> contact person available from</div>
   <div className={styles.accommodationTitles}> to</div>
     <input
       className={styles.accommodationStreetDate}
       type="time"
       name="time"
       id="time"
     />
     <input
       className={styles.ContactPersonAvailable}
       type="time"
       name="time"
       id="time"
     />
   </div>  */}
    <div>
      <div>
        <h6 style={{fontWeight:600}}>Accommodation Photos</h6> 
    <FileBase64
    
multiple={true}
onDone={(files ) => {
setImage(files.map((file) => file.base64));
}}
/>
</div>
    </div>
    <div  style={{marginLeft:"70%",marginTop:"50px"}} >
                  <input   type="checkbox" />{" "}
                  <p  style={{fontSize:"13px",}} >
                      I am agree with terms of use
                    </p>
                 
                </div>
                <div >
                  <button onClick={createPost} > Submit </button>
                </div>
               
              </form>
              </>
  );
};


    


            
  
   
export default Memberprofile