import React from "react";
import FormName from "./formName";
import styled from "styled-components";

const Ul = styled.ul`
  margin: 0%;
  list-style-type: none;
`;
const Header = styled.li`
  display: flex;
  padding-bottom: 30%;
  font-size: 30px;
  @media (max-width: 769px) {
    margin-top: 20%;
    padding-bottom: 15%;
  }
`;

function Contact() {
  return (
    <>
      <Ul>
        <Header> Contact Us</Header>
        <li>
          <FormName />
        </li>
      </Ul>
    </>
  );
}
export default Contact;
