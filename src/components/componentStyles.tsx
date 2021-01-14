
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

export const Ul = styled.ul`
  margin: 0%;
  width: 100%;
  list-style-type: none;
`;
export const Header = styled.li`
  display: flex;
  padding-bottom: 10%;
  font-size: 30px;
  @media (max-width: 769px) {
    margin-top: 20%;
    padding-bottom: 15%;
  }
`;

//Accordion Styles
export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  border: 1px solid #bcbcbc;
  overflow: hidden;
  border-radius: 5px;
  width: 100%;

  @media (max-width: 769px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
  }
`;
export const Temp = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

export const Wrap = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  border-top: 1px solid #bcbcbc;
  background: white;
  color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  cursor: pointer;
  :first-child {
    border-top: 0px;
  }

  h1,
  p {
    padding: 0.5rem;
    padding-left: 1.5rem;
    font-size: 1rem;
    color:#bcbcbc;
  }

  span {
    margin-right: 1.5rem;
    color: black;
  }
`;

export const Dropdown = styled.div`
  box-sizing: border-box;
  background: white;
  font-size: 1rem;
  padding-left: 2rem;
  padding-right:1rem;
  display: flex;
`;

// Form.tsx styles
export const Text = styled(TextField)`
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

export const FormContent = styled.div`
  border-radius: 10px 10px 10px 10px;
  position: relative;
  @media (max-width: 800px) {
    justify-content: right;
    margin-right: 10%;
  }
`;
export const FormInputs = styled.div`
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

export const FormInput = styled.div`
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


export const PostButton = styled.button`
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