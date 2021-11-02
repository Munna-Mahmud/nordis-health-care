import React from 'react';
import About from '../../About/About';
import Clients from '../../Clients/Clients';
import Contact from '../../Contact/Contact';
// import Shop from '../../Shop/Shop';
import Team from '../../Team/Team';


import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
        
          <Banner></Banner>
          <Services></Services>
          <About></About>
          <Team></Team>
          <Clients></Clients>
          {/* <Shop></Shop> */}
          <Contact></Contact>
        
        </div>
    );
};

export default Home;