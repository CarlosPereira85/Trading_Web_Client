
import { useContext } from "react"
import MyContext from "../context/MyContext"
import "./quoteslive.css"

const Stocks = () => {
    const context = useContext(MyContext)
    const{data, handleSubmit,setSearch,dataStock} = context;

  return (
   
   
   
   <div className="quotecontainer">
   
    
<form  className="form_quotes" onSubmit={handleSubmit}>
<input  type="text" className="search-bar" placeholder="PETR4" />
 
  {/* <button onClick={handleSubmit}>Submit</button> */}
  <select
        onChange={(e) => {
          setSearch(e.target.value);
          console.log(e.target.value);
        }}
      >
        {dataStock.map((item,i) => (
          <option key={i} value={item.stock}>{item}</option>
        ))}
      </select>

 
</form>
<div className="stocks_container" >
  
  <h4 className="title_quote">
        {data && data.results[0].longName}
        </h4>
        <p className="stocks_border">
       <span className="info_quotes"> regularMarketChangePercent:</span> {parseFloat(data && data.results[0].regularMarketChangePercent).toFixed(2)}%
        
        </p>



        <p className="stocks_border">
        <span className="info_quotes"> regularMarketPrice: </span> R${data && data.results[0].regularMarketPrice}
       
        </p>
        <p className="stocks_border">
        <span className="info_quotes"> regularMarketChange:  </span>{data && data.results[0].regularMarketChange}
        {data && data.results[0].regularMarketPreviousClose}
        </p>

      <p className="stocks_border">
      <span className="info_quotes">  fiftyTwoWeekLowChange:</span>
        {data && data.results[0].fiftyTwoWeekLowChange}
        </p>
      <p className="stocks_border">
      <span className="info_quotes"> fiftyTwoWeekLowChangePercent: </span> 
        {data && data.results[0].fiftyTwoWeekLowChangePercent}
        </p>
      <p className="stocks_border">
      <span className="info_quotes"> fiftyTwoWeekRange: </span>
        {data && data.results[0].fiftyTwoWeekRange}
        </p>
        
      <div className="stocks_border">
        
      <span className="info_quotes">regularMarketDayHigh:</span>
        <p>{data && data.results[0].regularMarketDayHigh}</p>
        </div>
        
      <div className="stocks_border">
      <span className="info_quotes">regularMarketDayLow:</span>
        <p>{data && data.results[0].regularMarketDayLow} </p>
        </div>
        
      <div className="stocks_border">
      <span className="info_quotes">regularMarketDayRange: </span>

        <p>{data && data.results[0].regularMarketDayRange}</p>
        </div>
        
      <div className="stocks_border">
      <span className="info_quotes"> regularMarketDayRange: </span>
        <p>{data && data.results[0].regularMarketVolume}</p>
        </div>
      <div className="stocks_border">
      <span className="info_quotes"> regularMarketVolume: </span>
       <p> {data && data.results[0].regularMarketVolume} </p>
        </div>
        
        
    </div>
</div>
  )
}
export default Stocks