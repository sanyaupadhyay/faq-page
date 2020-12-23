import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";
import styled from "styled-components";

const formContent = styled.div`
  border-radius: 10px 10px 10px 10px;
  position: relative;
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
          <textarea
            id="chat"
            type="text"
            name="chat"
            className="form-input"
            value={values.chat}
            onChange={handleChange}
          />
          {errors.chat && <p>{errors.chat}</p>}
        </FormInputs>
        <button className="form-btn" type="submit">
          Post
        </button>
      </form>
    </formContent>
  );
}
