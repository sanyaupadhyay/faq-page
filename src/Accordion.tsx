import React, { useState } from "react";
import styled from "styled-components";
import { Data } from "./faq-data";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  border: 1px solid #bcbcbc;
  overflow: hidden;
  border-radius: 5px;
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
  box-sizing: border-box;
  width: 100%;
`;

const Wrap = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  border-top: 1px solid #bcbcbc;
  background: white;
  color: gray;
  display: flex;
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
  padding-left: 2rem;
  padding-right:1rem;
  display: flex;
`;

function Accordion () {
  const [clicked, setClicked] = useState(-1);
  const toggle = (index:number) => {
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
