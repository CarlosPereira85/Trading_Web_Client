

import Content from "./Content"
import QuoteLiveForex from "./QuoteLiveForex";
import Stocks from "./Stocks";
import { getDate } from "../helpers";
import Clock from "./Clock";
// import { NavLink } from "react-router-dom";


import Grafic from "./Grafic";


import { GetPost } from "./GetPost";


const Home = () => {
  return (
    <>
    <div className="div_isolado"></div>
    <div className="clock">
      
    <Clock todaysDate={getDate()} />
    </div>
    <main className="main">
    
             
             <Content  />
               
   
    
    <article className="article1">
    <section className="section1">
    <QuoteLiveForex/>
    
    </section>
    <section>
    
   
    
    </section>
   
    </article>
    <article>
    
    {/* <Grafic/> */}
              </article>
    </main>
    </>
  )
}
export default Home