import React from "react";
import useForm from "./useForm";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

const Text = styled(TextField)`
  border: 0;
  color: black;
  width: 100%;
  label.focused {
    color: gray; 
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #bcbcbc; 
    }
    &:hover fieldset {
      border-color:gray; 
    }
    &.Mui-focused fieldset {
      border-color:gray;
      font:gray; 
    }
  }
`;

const FormContent = styled.div`
  border-radius: 10px 10px 10px 10px;
  position: relative;
  @media (max-width: 800px) {
    justify-content: right;
    margin-right: 10%;
  }
`;
const FormInputs = styled.div`
  margin-bottom: 0.7rem;
  width: 60%;

  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }
   
  @media ( max-width: 769px) {
    width:50%;
    margin-right: 10%;
  }
  @media (max-width: 767px) {
    width:100%;
    margin-right: 10%;
  }
`;

const FormInput = styled.div`
  display: block;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  box-shadow: none;
  border: none;
  :focus {
    border: 1.5px solid rgb(133, 129, 129);
  }
`;


const PostButton = styled.button`
  box-sizing: border-box;
  padding:1px;
  width: 10%;
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
  @media (max-width: 1200px) {
    width:15%;
    margin-right: 10%;
  }
  @media (max-width: 767px) {
    width:20%;
    margin-right: 10%;
  }
`;

export default function Form() {
  const { handleChange, values, handleSubmit} = useForm();

  return (
    <FormContent>
      <form onSubmit={() =>handleSubmit}>
        <FormInputs>
          {/* <FormLabel htmlFor="email">Email</FormLabel> */}
          <FormInput>
          <Text 
          id="outlined-search" 
          label="Email" 
          type="email"
          variant="outlined" 
          name="email"
          value={values.email}
          onChange={handleChange}/></FormInput>

          {/* {errors.email && <p>{errors.email}</p>} */}
        </FormInputs>
        <FormInputs>
        <Text
           id="outlined-search" 
           label="Name" 
           type="text"
           variant="outlined" 
           name="name"
           value={values.name}
           onChange={handleChange}/>
          {/* /* <FormLabel htmlFor="name">Name</FormLabel>*/ }

          {/* {errors.name && <p>{errors.name}</p>} */}
        </FormInputs>
        <FormInputs>
        <Text
           id="outlined-search" 
           label="Chat" 
           type="text"
           multiline
           rows={4}
           variant="outlined" 
           name="chat"
           value={values.chat}
           onChange={handleChange}/>
          {/* <FormLabel htmlFor="chat">Chat</FormLabel>*/}
          {/* {errors.chat && <p>{errors.chat}</p>} */}
        </FormInputs>
        <PostButton type="submit">POST</PostButton>
      </form>
    </FormContent>
  );
}
