import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {MainHeader} from '../components/MainHeader';
import Home from '../components/Home'
import Footer from '../components/Footer'
import QuotesLive from '../components/QuotesLive';
import QuoteLiveForex from '../components/QuoteLiveForex';
// import News from "../components/News";
import {LoginSignInPopUp} from '../components/LoginSignInPopUp';
import TradersCommunity from '../components/TradersCommunity';

import {LoginSignUpPopUp} from '../components/LoginSignUpPopUp';


import Memberprofile from '../components/Memberprofile';








const Routings = () => (
   
    

    <Router>
   <QuotesLive/>
  
 <MainHeader/>
 
        <Routes>
       
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<LoginSignUpPopUp />} />
          <Route path="/memberprofile" element={<Memberprofile />} />
          <Route path="/traderscommunity" element={<TradersCommunity />} />
          {/* <Route path="/news" element={<News />} /> */}
          <Route path="/login" element={<LoginSignInPopUp />} />
          
        
          
        
          
     
          
        
      
        </Routes>
        
 
 <Footer/>
 
    </Router>
    
)
    
 export default Routings