import MyContext from "./MyContext";

import { useState } from "react";
import { useEffect } from "react";

const MyProvider = ({ children }) => {
  // const te = tradingeconomics();

  // te.login('h0jwpre53rz0gcq:9vra8mi7xx364qt')

  const [dataStock, setDataStock] = useState([]);
  const [search, setSearch] = useState("FNAM11");
  const [data, setData] = useState(null);

  const [dataPair, setDataPair] = useState([]);
  const [url3search, setUrl3search] = useState("USD-BRL");
  const [url3data, setUrl3data] = useState(null);

  const [dataPetr4, dataSetPetr4] = useState(null);
  const [dataPETR4Search, dataSetPETR4Search] = useState("PETR4");

  const [dataFXL, dataSetFXL] = useState(null);
  const [dataFXLSearch, dataSetFXLSearch] = useState("USD-BRL");

  const [searchNews, setSearchNews] = useState("NUBR33");
  const [url5data, setUrl5data] = useState([]);

  const [newsData, setNewsData] = useState(""); 

  
  
  

  const URL = `https://brapi.dev/api/quote/${search}`;
  const URLPETR4 = `https://brapi.dev/api/quote/PETR4%2CMGLU3%2CNUBR33%2CVALE3%2CITUB4%2CSUZB3%2CJBSS3%2CPRIO3%2CPRIO3%2CPRIO3%2CPRIO3%2CPRIO3`;
  const URL2 = `https://brapi.dev/api/v2/currency/available`;
  const FXLURL =
    "https://brapi.dev/api/v2/currency?currency=USD-BRL%2CEUR-USD%2CUSD-GBP%2CEUR-USD%2CBRL-EUR%2CAUD-EUR%2CUSD-CHF";
  const URL3 = `https://brapi.dev/api/v2/currency?currency=${url3search}`;
  const URL4 = `https://brapi.dev/api/available?search`;
  const URL5 = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=PG5OIN5LW2MYSKTP`;
  const URLstatus = `https://localhost:5000/postitem/id:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMwMDk3OWQ5MGE1NzZhMWJmYTVhZWE2In0sImlhdCI6MTY2MTA1MjAyNiwiZXhwIjoxNjYxMDU1NjI2fQ.EXLr0MOrnDDh4Zz_R0XYhyCqsUqGWnM7vpFluAJqBk8`;	
  

 
  const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
  params: {q: 'tesla', region: 'ES'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    
  }
};
useEffect(() => {

axios.request(options).then(function (response) {
  setNewsData(response.data);
	
  
}).catch(function (error) {
	console.error(error);
});

}, []);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("URL", data.results[0]);
      });
    fetch(URLPETR4)
      .then((res) => res.json())
      .then((data) => {
        dataSetPetr4(data);
        console.log("URLPE", data);
      });

    fetch(FXLURL)
      .then((res) => res.json())
      .then((data) => {
        dataSetFXL(data);
        console.log("FXL", data);
      });

    fetch(URL2)
      .then((res) => res.json())
      .then((data) => {
        // setDataPair(dataPair.currency[0].name);
        setDataPair(data.currencies);
        console.log("URL2", data.currencies);
      });
    fetch(URL3)
      .then((res) => res.json())
      .then((data) => {
        setUrl3data(data);
        console.log("URL3", data);
      });
    fetch(URL4)
      .then((res) => res.json())
      .then((data) => {
        setDataStock(data.stocks);
        console.log("URL4", data.stocks);
      });
    fetch(URLstatus)
    .then((res) => res.json())
    .then((data) => {
      
      console.log("status" , data);
    });

    fetch(URL5)
      .then((res) => res.json())
      .then((data) => {
        // (data);
        //  console.log(data.data.main.stream[0]);
        // setUrl5data(data.data.main.stream)
        console.log("URL5", data);
      });
  }, [URL, URL2, URL3, URL5, URLPETR4, URL4, FXLURL, URLstatus]);


  // const handleStatus = (e) => {
  //   e.preventDefault();
    
  //   setLike(like + 1);
  //   // console.log(search);
  //   console.log(setLike);
  // };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.firstChild.value);
    // console.log(search);
  };
  const handleSubmitNews = (e) => {
    e.preventDefault();
   setNewsData()
  };
 

  return (
    <MyContext.Provider
      value={{
        // handleStatus,
       
newsData,
setNewsData,
        setUrl3data,
        setUrl3search,
        setSearch,
        setSearchNews,
        data,
        dataPair,
        url3data,
        url5data,
        handleSubmit,
        handleSubmitNews,
        dataStock,
        setDataStock,
        dataPetr4,
        dataFXL,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
