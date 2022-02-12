
import styled from "styled-components";
import { BrowserRouter, Route } from 'react-router-dom';
import './Workspage.css';




const Wrapper = styled.div`
    width: 1400px;
    height: 580px;
    margin: 0 30px;
    color: black;

    display: flex;
    text-align: center;
    margin: auto;

    position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
    
`;

const Caption = styled.div`
    padding: 150px;
`;




const Days = styled.div`
    font-size: 16px;
    border-bottom: 3px solid black;
    line-height: 24px;
    text-align: right;
    font-family: Cormorant Garamond;
`;

const Number = styled.div`
    font-size: 127px;
    border-bottom: 1px solid black;
    line-height: 100px;
    text-align: left;
    font-family: Cormorant Garamond;
`;


const TitleText = styled.div`
    font-size: 16px;
    border-bottom: 1px solid black;
    line-height: 32px;
    text-align: left;
    font-family: Prompt light;
`;

const Contents = styled.div`
    font-size: 12px;
    margin-top: 10px;
    text-align: left;
    font-family: Cormorant Garamond;
`;


const Photo = styled.img`
    width: 100%;
    margin-top: 20px;
`;





const Workspage = ()=>{
    return(

        <Wrapper > 
            <Photo src = 'http://drive.google.com/uc?export=view&id=1a6CrszIBDLYnKAWdW6qmV--yyuL-Xlyy' />
            <Caption>
                <Days>2022.00.00</Days>
                <Number>01</Number>
                {/* <Title>title</Title> */}
                <TitleText>2022.00.00</TitleText>
                <Contents>A tradition loved by the community. A culture of value. A meaningful initiative. A brand that conveys them. Many things in this world are filled with feelings. Many things in this worlA tradition loved by the community. A culture of value. A meaningful initiative. A brand that conveys them. Many things in this world are filled with feelings. Many things in this worA tradition loved by the community. A culture of value. A meaningful initiative. A brand that conveys them. Many things in this world are filled with feelings. Many things in this worlA tradition loved by the commu</Contents> 

                <BrowserRouter>
                    <a href="/" >Top</a> 
                </BrowserRouter>
            </Caption>
        </Wrapper>


    )
};

export default Workspage;