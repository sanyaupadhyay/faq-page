import React, { useState } from "react";
import { Data } from "./faq-data";
import { Container , Temp, Wrap, Dropdown} from './componentStyles';

function Accordion () {
  const [clicked, setClicked] = useState(-1);
  const toggle = (index:number) => {
    if (clicked == index) {
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
