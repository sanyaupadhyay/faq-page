import React from "react";
import Form from "./Form"
import { Ul, Header } from './componentStyles';


function Contact() {
  return (
      <Ul>
        <Header> Contact Us</Header>
        <li>
          <Form />
        </li>
      </Ul>
  );
}
export default Contact;
