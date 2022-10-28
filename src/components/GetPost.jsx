import { useState } from "react";
import axios from "axios"
import {
    FormControl,
    InputLabel,
    MenuItem,
    FormHelperText,
    Select,
  } from "@mui/material";


export const GetPost = () => {
    const [menu, setMenu] = useState("");
 const [request, setRequest] = useState();
  const [details, setDetails] = useState();
  const [detailsHelp, setDetailsHelp] = useState();
  const [detailsJob, setDetailsJob] = useState();




  const getRequestHandler = async () => {
    const response = await axios.get("http://localhost:5000/getpost");
    console.log(response.data.data);
    setDetails(response.data.data);
    setRequest("GET");
  };

  const getRequestHandlerHelp = async () => {
    const response = await axios.get("http://localhost:5000/memberpage/getpostforex");
    console.log(response.data.data);
    setDetailsHelp(response.data.data);
    setRequest("GET");
  };

  const getRequestHandlerJob = async () => {
    const response = await axios.get("http://localhost:5000/memberpage/getpostbolsa");
    console.log(response.data.data);
    setDetailsJob(response.data.data);
    setRequest("GET");
  };


  return (
    <div className="search" >
      <form >
        <img
          
          alt=""
          src="imgseekerform@2x.png"
        />
        <article >
          <div >
            <div>
              <h5 >
                Find out more!
              </h5>
              <FormControl
                
                sx={{ width: 307 }}
                variant="outlined"
              >
                <InputLabel  color="secondary">Select Here</InputLabel>
                <Select
                  onChange={(e) => setMenu(e.target.value)}
                  color="secondary"
                  size="2x"
                  label="Select Here"
                >
                  <MenuItem  onClick={getRequestHandler} value="post">Trade Ideas</MenuItem>
                  <MenuItem  onClick={getRequestHandlerJob} value="Job">Post Forex</MenuItem>
                  <MenuItem  onClick={getRequestHandlerHelp} value="Helpers">Post Bolsa</MenuItem>

                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div >
              <b >Daily Quote Forex</b>
              
            </div>
          </div>
        </article>
      </form>

      {menu === "post" ? (

        <div>
          <>
            <div >
              <h2 > Trade Ideas</h2>


              {request
                ? details?.map((value) => {
                  return (
                    //  <div className="img_card" >
                    //     <div className="main_container" key={value._id}>
                    //       <div className="img_acc" >   
                    <div  key={value._id}>
                      <div  >
                        <div >
                          <p>contact Person: <span> {value.contactPerson}</span></p>
                          <p>Phone Number: <span> {value.contactNumber}</span> </p>
                          <p>Email: <span>  {value.contactEmail}</span></p>
                        </div>
                        <div>
                          <p>Accommodation Type:<span> {value.accomodationType} </span> </p>
                          <p>Number of Persons:<span>  {value.numberOfPersons}</span></p>
                          <p>Address: <span>{value.address}, {value.city}  </span></p>
                        </div>
                        <div >
                          <p>Available from:<span>  {value.startDate} </span></p>
                          <p>to: <span>  {value.endDate}</span> </p>
                          <p>Status: <span> Available</span>  </p>
                        </div>
                      </div>
                      <div >

                        {

                          value.image.length >= 0 ? (
                            value.image.map((img) =>


                              <img  src={img} alt="" />

                            )
                          ) : "No image"


                        }


                      </div>
                    </div>


                  );
                })
                : ""}
            </div>



          </>
        </div>
      ) : menu === "Helpers" ? (
        <div  >
          <div  >
            <h2   >Helper List:</h2>

            {request
              ? detailsHelp?.map((value) => {
                return (
                    <div   key={value._id}>
                      <div  > 

                      <div >
                      <p>Cooperation type: <span>{value.helpType}</span>  </p>
                      <p>Cooperation City: <span> {value.cityHelp} </span></p>
                      <p>Organization: <span>{value.orgHelp}</span></p>
                      </div> 
                      <div >
                      <p>Language: <span> {value.TypeOfLanguageHelp}</span></p>
                      <p>contact Person:<span> {value.contactPersonHelp}</span></p>
                      <p>Phone Number: <span>{value.contactNumberHelp}</span></p>
                      </div>
                      <div >
                      <p>Email: <span>{value.contactEmailHelp}</span></p>
                      <p> Valid From: <span> {value.startDateHelp}</span> </p>
                      <p> to: <span>{value.endDateHelp} </span> </p>
                      </div>
                    </div>
                  </div>


                );
              })
              : ""}
          </div>

        </div>
      ) : menu === "Job" ? (
<div  >
        <div >
          <h2   >Jobs</h2>
          {request
            ? detailsJob?.map((value) => {
              return (
                  <div   key={value._id}>
                    <div  >
                    <div >
                    <p>Job Title: <span>{value.jobList}</span>  </p>
                    <p>Language: <span> {value.TypeOfLanguageJob}</span></p>
                    <p>Job Location: <span> {value.cityJob} </span></p>
                    <p>Job Provider: <span>{value.jobProvider}</span></p>
                    </div>
                    <div >
                    <p>Job Type:<span> {value.jobType}</span></p>
                    <p>salary Basis: <span>{value.salaryBasisJob}</span></p>
                    <p>Start Date: <span> {value.startDateJob}</span></p>
                    <p>End Date: <span> {value.endDateJob}</span></p>
                    </div>
                    <div >
                    <p>Contact Person: <span>{value.contactPersonJob}</span></p>
                    <p>Contact Number: <span>{value.contactNumberJob}</span></p>
                    <p> Email: <span> {value.contactEmailJob}</span> </p>
                    </div>
                  </div>
                </div>
              );
            })
            : ""}
        </div>
      </div>

      ) : (
        menu == null
      )}

    </div>


  );
};