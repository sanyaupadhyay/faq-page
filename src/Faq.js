import React from "react";
import Accordion from "./Accordion";
import styled from "styled-components";

const Ul = styled.ul`
  margin: 0%;
  list-style-type: none;
`;
function Faq() {
  return (
    <>
      <Ul>
        <li>FAQs</li>
        <li>
          <Accordion />
        </li>
      </Ul>
    </>
  );
}
export default Faq;
