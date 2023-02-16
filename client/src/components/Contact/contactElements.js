import styled from "styled-components";
import { keyframes } from "styled-components";

export const SendButton = styled.button`
  border: none;
  outline: none;
  width: 150px;
  padding: 10px;
  background-color: #5c7b7d;
  color: #fff;
  position: relative;
  border-radius: 8px;
  font-size: 21px;
  cursor: pointer;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
  &:active {
    transform: translateY(3px);
  }
`;

export const SuccessButton = styled.button`
  border: none;
  outline: none;
  width: 150px;
  padding: 10px;
  background-color: #c1d8d6;
  color: #373f41;
  position: relative;
  border-radius: 8px;
  font-size: 21px;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const SendingButton = styled.button`
  border: none;
  outline: none;
  width: 150px;
  padding: 10px 10px 10px 0;
  padding-left: 15px;
  text-align: left;
  background-color: #82b3a4;
  color: #373f41;
  position: relative;
  border-radius: 8px;
  font-size: 21px;
  box-shadow: 6px 6px 2px 1px rgba(0, 0, 0, 0.2);
`;


export const ContactError = styled.p`
  padding: 2px;
  margin-top: 10px;
  color: red;
  font-size: 16px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;


const DotTypingAnimation = keyframes`
  0% {
    box-shadow: 9984px 0 0 0 #F5F5F5, 9999px 0 0 0 #F5F5F5, 10014px 0 0 0 #F5F5F5;
  }
  16.667% {
    box-shadow: 9984px -5px 0 0 #F5F5F5, 9999px 0 0 0 #F5F5F5, 10014px 0 0 0 #F5F5F5;
  }
  33.333% {
    box-shadow: 9984px 0 0 0 #F5F5F5, 9999px 0 0 0 #F5F5F5, 10014px 0 0 0 #F5F5F5;
  }
  50% {
    box-shadow: 9984px 0 0 0 #F5F5F5, 9999px -5px 0 0 #F5F5F5, 10014px 0 0 0 #F5F5F5;
  }
  66.667% {
    box-shadow: 9984px 0 0 0 #F5F5F5, 9999px 0 0 0 #F5F5F5, 10014px 0 0 0 #F5F5F5;
  }
  83.333% {
    box-shadow: 9984px 0 0 0 #F5F5F5, 9999px 0 0 0 #F5F5F5, 10014px -5px 0 0 #F5F5F5;
  }
  100% {
    box-shadow: 9984px 0 0 0 #F5F5F5, 9999px 0 0 0 #F5F5F5, 10014px 0 0 0 #F5F5F5;
  }
`;

export const DotTyping = styled.div`
  position: relative;
  left: -9982px;
  width: 6px;
  height: 6px;
  border-radius: 5px;
  background-color: #F5F5F5;
  color: #F5F5F5;
  box-shadow: 9984px 0 0 0 #F5F5F5, 9999px 0 0 0 #F5F5F5, 10014px 0 0 0 #F5F5F5;
  animation-name: ${DotTypingAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

export const AnimationWrapper = styled.div`
  position: relative;
  left: 75px;
  bottom: 10px;
  overflow: visible;
`;