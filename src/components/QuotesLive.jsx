import { useContext } from "react";
import MyContext from "../context/MyContext";
import "./quoteslive.css";
const QuotesLive = () => {
  const context = useContext(MyContext);
  const { url3data, dataPetr4 } = context;
  console.log("Forex:", url3data);
  return (
    <div className="container_quotes">
      {/* <div className="quoteslive">
        <h5 className="textquotes">
          {dataPetr4 && dataPetr4.results[0].symbol}
        </h5>

        <h5 className="textquotes">
          R$
          {dataPetr4 && dataPetr4.results[0].regularMarketPrice}
        </h5>
        <h5 className="textquotes">
          {parseFloat(
            dataPetr4 && dataPetr4.results[0].regularMarketChangePercent
          ).toFixed(2)}
        </h5>
        
     
        
        </div> */}
     
        <div className="quoteslive">
            {dataPetr4 && dataPetr4.results.map((item,i) => (
             
                <h5 key={i}>{item.symbol}
               
                <p> <span style={{
                  marginRight: "2px",
                }}> R$</span>{item.regularMarketPrice}</p>
               <p style={{color:Math.sign(item.regularMarketChangePercent) < 0 ? "red": "green"}}> {parseFloat(item.regularMarketChangePercent).toFixed(2)  }%</p>
               <div style={{marginLeft: "10%", width:"40px", borderLeft: "2px solid white"}}></div>
                </h5> 
                
                
              
                 

                
            ))}
        </div>
        
      </div>
  
  );
};
export default QuotesLive;
