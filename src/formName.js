import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import styled from "styled-components";

const formContent = styled.div`
  border-radius: 10px 10px 10px 10px;
  position: relative;
  @media (max-width: 800px) {
    justify-content: right;
    margin-right: 10%;
  }
`;
const FormInputs = styled.div`
  margin-bottom: 0.7rem;
  width: 100%;

  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
`;
const FormLabel = styled.label`
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 0px;
  color: rgb(19, 18, 18);
`;
const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 3px;
  width: 135%;
  box-sizing: border-box;
  height: 30px;
  box-shadow: none;
  border: none;
  border: 1px solid #bcbcbc;
  :focus {
    border: 1.5px solid rgb(133, 129, 129);
  }
`;
const TextArea = styled.textarea`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 3px;
  width: 135%;
  box-sizing: border-box;
  height: 70px;
  resize: none;
  box-shadow: none;
  border: none;
  border: 1px solid #bcbcbc;
  padding: 10px;
  :focus {
    border: 1.5px solid rgb(133, 129, 129);
  }
`;

const PostButton = styled.button`
  box-sizing: border-box;
  width: 30%;
  height: 30px;
  margin-top: 5px;
  border-radius: 3px;
  background: black;
  outline: none;
  border: none;
  color: #fff;
  font-size: 0.9rem;
  :hover {
    cursor: pointer;
    background: linear-gradient(
      90deg,
      rgb(31, 32, 32) 0%,
      rgb(23, 23, 24) 100%
    );
    transition: all 0.4s ease-out;
  }
`;

export default function FormName() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <formContent>
      <form onSubmit={handleSubmit}>
        <FormInputs>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </FormInputs>
        <FormInputs>
          <FormLabel htmlFor="chat">Chat</FormLabel>
          <TextArea
            id="chat"
            type="text"
            name="chat"
            value={values.chat}
            onChange={handleChange}
          />
          {errors.chat && <p>{errors.chat}</p>}
        </FormInputs>
        <PostButton type="submit">Post</PostButton>
      </form>
    </formContent>
  );
}
