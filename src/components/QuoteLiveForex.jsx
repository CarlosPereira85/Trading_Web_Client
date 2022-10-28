import { useContext } from "react";
import MyContext from "../context/MyContext";
import'./quoteliveforex.css'



const QuoteLiveForex = () => {
  const context = useContext(MyContext);
  const { dataFXL } = context;

  return (

  <div className="container_quotes_forex">
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
      
          
            {dataFXL && dataFXL.currency.map((item,i) => (
              
                <div className="quotesforex"  key={i}>{item.fromCurrency}
                
               
                <div className="tocurrback">
                <p className="tocurr" >/{item.toCurrency}</p>
                </div>
              
                
                

                
              <div className="bidaskback">
               <p > Ask: {parseFloat(item.askPrice).toFixed(3) }</p>
               <p >Bid: {parseFloat(item.bidPrice).toFixed(3)}</p>
               </div>
               { Math.sign(item.percentageChange) < 0 ? (
                  <p className="movimentodia" style={{color:"red"}}>{parseFloat(item.percentageChange).toFixed(2)}% <span>&#x2193;</span></p>
                ) : (
                  <p className="movimentodia" style={{color:"green"}}>{parseFloat(item.percentageChange).toFixed(2)}% <span>&#8593;</span></p>
                )}
                <div>
               <div className="backhighlow">

               <p style={{color:"green"}} >High {parseFloat(item.high).toFixed(3)}</p>
               <p style={{color:"red"}}>Low {parseFloat(item.low).toFixed(3)}</p>
               </div>
               <div className="buysell">
               <bottom className= "sell">Sell</bottom>
               <bottom className="buy" > Buy</bottom>
               </div>
               </div>
                 
                
                 {/* <p style={{color:"red"}}>{parseFloat(item.percentageChange).toFixed(2)}%</p>
                 
                  
                
               <p style={{color:Math.sign(item.percentageChange) < 0 ? {color:"red" }  : "green"}}> Day &#8593;{parseFloat(item.percentageChange).toFixed(2)  }%</p>  */}
              
               
                </div> 
                
                
               
                
            ))}
        </div>  
        
   
  
  );
};
export default QuoteLiveForex;
