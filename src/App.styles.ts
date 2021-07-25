import styled, { createGlobalStyle } from "styled-components";
import QuizBG from "./images/quiz-1.jpg";

export const GlobalStyle = createGlobalStyle`
html{ 
    height: 100%;
}

body{
    background-image: url(${QuizBG});
    background-size: 85%;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

*{
    box-sizing: border-box;
    font-family: 'Fira Sans Extra Condensed', sans-serif;
}

`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #408ec6;
  }
  .score {
    color: #0d1137;
    font-size: 2rem;
    padding: 5px;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #0d1137, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;

export const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
  }
`;
