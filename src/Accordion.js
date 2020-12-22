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
  width: 550%;
  @media (max-width: 769px) {
    width: 500%;
  }
  @media (max-width: 768px) {
    width: 200%;
  }
`;

const Container = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  width: 100%;
  border: 2px solid gray;
  border-top: 0.8px solid gray;
  overflow: hidden;
  border-radius: 5px;
`;

const Wrap = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  border: 0.1px solid gray;
  border-left: 0px;
  border-bottom: 0px;
  border-right: 0px;
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
    font-size: 1rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  font-size: 1rem;
  padding: 0.5rem;
  padding-left: 2.5rem;
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
