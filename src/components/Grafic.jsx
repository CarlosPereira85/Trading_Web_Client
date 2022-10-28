import { useEffect, useRef } from "react";
import { createChart} from "lightweight-charts";
import { useContext } from "react";
import MyContext from "../context/MyContext";

import { priceData } from "../helpers/priceData";
// import { areaData } from './areaData';


const Grafic = () => {

    const context = useContext(MyContext);
    const { url3data } = context;

    const datafx1 =  url3data && url3data.currency[0].updatedAtDate ;
    const datafx2 =  url3data && url3data.currency[0].askPrice ;
    console.log("caralho" ,datafx1 + " " + datafx2);
    const datafx3 = datafx1 + " " + datafx2;
    console.log("caralhosss" ,datafx3);

    // console.log("Forex2:", url3data && url3data.currency[0].askPrice);
    
  const chartContainerRef = useRef();
  const chart = useRef();
 

  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
      width: 470,
      height: 250, 
      //"300px", //chartContainerRef.current.clientHeight,
      
    }, []) ;

    console.log(chart.current);

    const lineSeries = chart.current.addLineSeries(
    );

   lineSeries.setData(priceData);



    
  }, []);

  // Resize chart on container resizes.
 

  return (
    <div className="App">
      <div
        ref={chartContainerRef}
        className="chart-container"
        style={{ marginTop:"30px", marginLeft:"30px" }}
      />
      {/* <p>{datafx3}</p> */}
    </div>
  );
}
export default Grafic;