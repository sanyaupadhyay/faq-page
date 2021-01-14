import React from "react";
import Accordion from "./Accordion";
import { Ul, Header } from './componentStyles';

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
