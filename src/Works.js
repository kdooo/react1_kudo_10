
import styled from "styled-components";
import { BrowserRouter,Link, Route } from 'react-router-dom';
import Workspage from './Workspage';


const Wrapper = styled.div`
    width: 300px;
    height: 580px;
    margin: 0 30px;
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





const Works = (props) => {


    return (
        <Wrapper type="button" > 
            <Days>{props.days}</Days>
            <Number>{props.number}</Number>
            {/* <Title>title</Title> */}
            <TitleText>{props.title} </TitleText>
            <Contents>{props.contents} </Contents> 
            <Photo src = {props.photo}/>
            <BrowserRouter>
                {/* <Link to="/Workspage">Workspage</Link> */}
                <a href="/Workspage" >Workspage</a> 
            </BrowserRouter>
        </Wrapper>

    )

};

export default Works;


// const Button = ({title}) => {
//     return <B>{title}</B>;
//   };
  
  
//   export default Button;