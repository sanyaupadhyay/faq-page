import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  @media (max-width: 769px) {
    margin-right: 5%;
    flex-direction: column;
    flex: 100%;
  }
`;

export const FaqContainer = styled.div`
  box-sizing: border-box;
  margin-left: 7%;
  display: flex;
  margin-top: 5%;
  flex: 60%;
  font-size: 30px;
  padding-bottom: 1px;
  @media (max-width: 769px) {
    margin-left: 0%;
    flex: 100%;
    justify-content: left;
  }
`;
export const Vertical = styled.div`
  box-sizing: border-box;
  display: flex;
  border-left: 1px solid #bcbcbc;
  height: 500px;
  position: absolute;
  margin-left: 63%;
  margin-top: 5%;
  @media (max-width: 769px) {
    border-left: 0px;
  }
`;

export const ContactContainer = styled.div`
  box-sizing: border-box;
  margin-top: 5%;
  margin-left: 5%;
  display: flex;
  flex: 40%;
  @media (max-width: 769px) {
    margin-left: 0%;
    flex: 100%;
    justify-content: left;
  }
`;