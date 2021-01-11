import React from "react";
import Accordion from "./Accordion";
import styled from "styled-components";

const Ul = styled.ul`
  margin: 0%;
  width: 100%;
  list-style-type: none;
`;
const Header = styled.li`
  display: flex;
  padding-bottom: 5%;
  font-size: 30px;
  @media (max-width: 769px) {
    margin-top: 20%;
    padding-bottom: 15%;
  }
`;

function Faq() {
  return (
      <Ul>
        <Header>FAQs</Header>
        <li>
          <Accordion />
        </li>
      </Ul>
  );
}
export default Faq;
