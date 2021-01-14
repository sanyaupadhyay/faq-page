import React from "react";
import useForm from "./useForm";
import {Text, FormContent, FormInputs, FormInput, PostButton} from './componentStyles'; 

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
