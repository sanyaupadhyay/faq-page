import React, { useState } from "react";
import styled from "styled-components";
import { Data } from "./faq-data";

const AccordionSection = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  position: relative;
  width: 500%;
  @media (max-width: 769px) {
    width: 500%;
  }
  @media (max-width: 768px) {
    width: 200%;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  width: 100%;
  border: 1px solid #bcbcbc;
  border-top: 1px solid gray;
  overflow: hidden;
  border-radius: 5px;
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

  h1,
  p {
    padding: 0.5rem;
    padding-left: 1.5rem;
    font-size: 1rem;
  }

  span {
    margin-right: 1.5rem;
    color: black;
  }
`;

const Dropdown = styled.div`
  font-size: 1rem;
  padding: 0.5rem;
  padding-left: 3.5rem;
  display: flex;
`;

function Accordion(props) {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    return setClicked(index);
  };

  return (
    <AccordionSection>
      <Container>
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
      </Container>
    </AccordionSection>
  );
}

export default Accordion;
