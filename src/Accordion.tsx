import React, { useState } from "react";
import styled from "styled-components";
import { Data } from "./faq-data";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
  //position: relative;
  border: 1px solid #bcbcbc;
  overflow: hidden;
  border-radius: 5px;
  //margin-top: 5%;
  width: 100%;

  @media (max-width: 769px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
  }
`;
const Temp = styled.div`
  //position: absolute;
  box-sizing: border-box;
  //display: flexbox;
  //top: 30%;
  width: 100%;
`;

const Wrap = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  border-top: 1px solid #bcbcbc;
  background: white;
  color: gray;
  display: flex;
  //width: 200%;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  cursor: pointer;
  :first-child {
    border-top: 0px;
  }

  h1,
  p {
    padding: 0.5rem;
    padding-left: 1.5rem;
    font-size: 1rem;
    color:#bcbcbc;
  }

  span {
    margin-right: 1.5rem;
    color: black;
  }
`;

const Dropdown = styled.div`
  box-sizing: border-box;
  background: white;
  font-size: 1rem;
  //padding: 0.5rem;
  //padding-top: 0.25rem;
  padding-left: 2rem;
  padding-right:1rem;
  display: flex;
`;
interface Props {
}
function Accordion (props:Props) {
  const [clicked, setClicked] = useState(-1);
  const toggle = (index:any) => {
    if (clicked === index) {
      return setClicked(-1);
    }

    return setClicked(index);
  };

  return (
    <Container>
      <Temp>
        {Data.map((item, index) => {
          return (
            <>
              <Wrap onClick={() => toggle(index)} key={index}>
                <h1>{item.question}</h1>
                <span>{clicked === index ? " - " : "+"}</span>
              </Wrap>
              {clicked === index ? (
                <Dropdown>
                  <p>{item.ansewer}</p>
                </Dropdown>
              ) : null}
            </>
          );
        })}
      </Temp>
    </Container>
  );
}

export default Accordion;
