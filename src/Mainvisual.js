
import styled from "styled-components";


const Wrapper = styled.div`
    max-width: 1400px;
    margin: auto;
`;

const Main = styled.div`
    font-size: 450px;
    font-family: Prompt SemiBold;
    line-height: 430px;
    margin-top: 80px;
`;

const Whywrapper = styled.div`
    max-width: 1400px;
    display: flex;
`;

const Why = styled.div`
    font-size: 110px;
    font-family: Cormorant Garamond;
    line-height: 75px;
    margin: 0 25px;
`;

const Whytext = styled.div`
    max-width: 650px;
    font-size: 16px;
    font-family: Cormorant Garamond;
`;

const Purpose = styled.div`
    margin-top: 80px;
    margin-left: 20px;
    font-size: 16px;
    font-family: Prompt;
`;


const PurposeText = styled.div`
    margin-left: 20px;
    margin-bottom: 200px;
    font-size: 60px;
    font-family: Cormorant Garamond;
`;




const Mainvisual = ()=>{
    return(
        <Wrapper>
            <Main>EMOT</Main>
                <Whywrapper>
                    <Why>WHY ME?</Why>
                    <Whytext>A tradition loved by the community. A culture of value. A meaningful initiative. A brand that conveys them. Many things in this world are filled with feelings. Many things in this world have meaning but are not being communicated or have sense but do not have the power to be transmitted loudly. EMOT aims to be the voice of the world, the one that speaks out loud on behalf of those people. </Whytext>
                </Whywrapper>
                <Purpose>PURPOSE</Purpose>
                <PurposeText>We aim to give a loud voice to what is valuable.</PurposeText>       
        </Wrapper>

    )
}

export default Mainvisual;