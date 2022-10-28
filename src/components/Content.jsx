
import'./content.css';
import { useContext } from "react";
import MyContext from "../context/MyContext";
import Grafic from "./Grafic";
import { GetPost } from './GetPost';
import Stocks from './Stocks';



const Content = ({
  todaysDate,
 
}) => {

    const context = useContext(MyContext)
    const {data, dataPair, url3data, url5data,setUrl3search} = context;
    
  return (
   
    <div>
      
        <div>
          <h3>{todaysDate}</h3>
         
        </div>
        <div className='container_header2'>
      
      
      <div className="quotesforex1"  >
      <select className='select'
        onChange={(e) => {
          setUrl3search(e.target.value);
          console.log(e.target.value);
        }}
      >
        {dataPair.map((item,i) => (
          <option key={i} value={item.name}>{item.name}</option>
        ))}
      </select>
        
        <div style={{hight:"600px"}}>
        {url3data && url3data.currency[0].fromCurrency}
                
               
                <div className="tocurrback">
                <p className="tocurr" >/{url3data && url3data.currency[0].toCurrency}</p>
                </div>
              
                
                

                
              <div className="bidaskback">
               <p > Ask: {url3data && url3data.currency[0].askPrice}</p>
               <p >Bid: {url3data && url3data.currency[0].bidPrice}</p>
               </div>
               { Math.sign(url3data && url3data.currency[0].percentageChange) < 0 ? (
                  <p className="movimentodia" style={{color:"red"}}>{parseFloat(url3data && url3data.currency[0].percentageChange).toFixed(2)}% <span>&#x2193;</span></p>
                ) : (
                  <p className="movimentodia" style={{color:"green"}}>{parseFloat(url3data && url3data.currency[0].percentageChange).toFixed(2)}% <span>&#8593;</span></p>
                )}
                <div >
               <div className="backhighlow">

               <p style={{color:"green"}} >High {parseFloat(url3data && url3data.currency[0].high).toFixed(3)}</p>
               <p style={{color:"red"}}>Low {parseFloat(url3data && url3data.currency[0].low).toFixed(3)}</p>
               </div>
               <div className="buysell">
               <bottom className= "sell">Sell</bottom>
               <bottom className="buy" > Buy</bottom>
               
               </div>
               
               
               </div>
                
                
                 {/* <p style={{color:"red"}}>{parseFloat(item.percentageChange).toFixed(2)}%</p>
                 
                  
                
               <p style={{color:Math.sign(item.percentageChange) < 0 ? {color:"red" }  : "green"}}> Day &#8593;{parseFloat(item.percentageChange).toFixed(2)  }%</p>  */}
              
               
                </div> 
                </div>
      
      
      

    
    
    
      <p></p>
   
      
      <div className="info">
      <div className="search-box">



</div>
    
        <h2>
       {url5data.map((item,i) => (
          <p key={i}>{item.content.title}</p>
        ))}


       
        </h2>
        <div>
        <div>
        <Grafic/>
          {/* <GetPost/> */}
        </div>
       
        </div>
        
        </div>
        <div>
                  <Stocks/>
                 </div>
      </div>
    </div>
  );

}


       ;
export default Content