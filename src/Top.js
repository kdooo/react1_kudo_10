// import logo from './logo.svg';
// import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './App.css';
import Mainvisual from "./Mainvisual";
import Works from "./Works";
import styled from "styled-components";
// import Workspage from "./Workspage";




const WorksWrapper = styled.div`
  max-width: 1400px;
  display: flex;
  text-align: center;
  margin: 50px auto;
`;



const Top =()=> {


  return (
    
    
    
    <div className="App">


          <Mainvisual />

          <WorksWrapper>
            <Works 
              days = '2022.00.00'
              number = '01'
              title = 'A tradition loved by the community.'
              contents = 'A tradition loved by the community. A culture of value. A meaningful initiative. A brand that conveys them. Many things in this world are filled with feelings. Many things in this world '
              photo = 'http://drive.google.com/uc?export=view&id=1a6CrszIBDLYnKAWdW6qmV--yyuL-Xlyy'         
            />

            <Works
              days = '2022.00.00'
              number = '02'
              title = 'A tradition loved by the community.'
              contents = 'A tradition loved by the community. A culture of value. A meaningful initiative. A brand that conveys them. Many things in this world are filled with feelings. Many things in this world '
              photo = 'http://drive.google.com/uc?export=view&id=1DdOChKZkUowopS2D9v-XIWP9EGvUsyME'
            />

            <Works
              days = '2022.00.00'
              number = '03'
              title = 'A tradition loved by the community.'
              contents = 'A tradition loved by the community. A culture of value. A meaningful initiative. A brand that conveys them. Many things in this world are filled with feelings. Many things in this world '
              photo = 'http://drive.google.com/uc?export=view&id=1o4L3oJbQBWZAjyVQEYolcQ_F1cytRC7-'
            />

            <Works
              days = '2022.00.00'
              number = '04'
              title = 'A tradition loved by the community.'
              contents = 'A tradition loved by the community. A culture of value. A meaningful initiative. A brand that conveys them. Many things in this world are filled with feelings. Many things in this world '
              photo = 'http://drive.google.com/uc?export=view&id=1Z7ytBACPX2Hf2j0HRWAEpUNlpEvhHGSH'
            />
            
          </WorksWrapper>

          <WorksWrapper>
            <Works
              days = '2022.00.00'
              number = '05'
              title = 'A tradition loved by the community.'
              contents = 'A tradition loved by the community. A culture of value. A meaningful initiative. A brand that conveys them. Many things in this world are filled with feelings. Many things in this world '
              photo = 'http://drive.google.com/uc?export=view&id=1AAs0ydpotFZxuB2SeaTIaet6yxn1ATk6'
            />

            <Works
              days = '2022.00.00'
              number = '06'
              title = 'A tradition loved by the community.'
              contents = 'A tradition loved by the community. A culture of value. A meaningful initiative. A brand that conveys them. Many things in this world are filled with feelings. Many things in this world '
              photo = 'http://drive.google.com/uc?export=view&id=1yEMC-0mIWBgwq3OxugpLkLx7_aKEbfdr'
            />

            <Works
              days = '2022.00.00'
              number = '07'
              title = 'A tradition loved by the community.'
              contents = 'A tradition loved by the community. A culture of value. A meaningful initiative. A brand that conveys them. Many things in this world are filled with feelings. Many things in this world '
              photo = 'http://drive.google.com/uc?export=view&id=1BD8w7v-L8dysfJR9BWhRFnChOG0R2nFq'
            />

            <Works
              days = '2022.00.00'
              number = '08'
              title = 'A tradition loved by the community.'
              contents = 'A tradition loved by the community. A culture of value. A meaningful initiative. A brand that conveys them. Many things in this world are filled with feelings. Many things in this world '
              photo = 'http://drive.google.com/uc?export=view&id=1csKNTqerMCjXG1V8xmEXhqeCe8zAIgcu'
            />
            
          </WorksWrapper>


    </div>
  );
}

export default Top;


