import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
// Utils
import formValidation from "../../utils/formValidation.js";
// Styling
import {
  SendButton,
  SuccessButton,
  SendingButton,
  ContactError,
  DotTyping,
  AnimationWrapper,
} from "./contactElements";
import "./contact.css";
// Icons & Images
import { BsCheckLg } from "react-icons/bs";
import contactBackground from "../../assets/contactBackground.jpeg";

const Contact = () => {
  // Buttons to be displayed based on action and state
  const conditionalButtons = [
    <SendButton
      onClick={(e) => {
        e.preventDefault();
        setHandleSubmit(true);
      }}
    >
      Send
    </SendButton>,
    <SendingButton onClick={(e) => e.preventDefault()}>
      Sending{" "}
      <AnimationWrapper>
        <DotTyping />
      </AnimationWrapper>
    </SendingButton>,
    <SuccessButton onClick={(e) => e.preventDefault()}>
      Sent
      <BsCheckLg style={{ transform: "translateY(4px)", marginLeft: "8px" }} />
    </SuccessButton>,
  ];
  /*** State values ***/
  // Form values
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Form validation
  const [canSubmit, setCanSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  // Button state
  const [currentButton, setCurrentButton] = useState(conditionalButtons[0]);
  // Form submission
  const [handleSubmit, setHandleSubmit] = useState(false);
  const [canSend, setCanSend] = useState(false);
  // Error handling
  const [mailError, setMailError] = useState("");

  // STEP 1: When Send button is clicked, triggers handleSend
  useEffect(() => {
    if (handleSubmit) {
      setTimeout(() => {
        setHandleSubmit(false);
      }, 500);
      handleSend();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSubmit]);

  // Step 2: Method to begin form submission
  const handleSend = useCallback(() => {
    let errors = formValidation(email, message);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setCanSend(true);
    }
  }, [email, message]);

  // STEP 3: When canSend is true
  useEffect(() => {
    if (canSend === true) {
      setCurrentButton(conditionalButtons[1]);
      sendMessage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canSend]);

  // STEP 4: Method to send form data to server
  const sendMessage = () => {
    let body = {
      message: `${message}`,
      email: `${email}`,
    };
    axios
      .post("/contact", body)
      .then((res) => {
        setCurrentButton(conditionalButtons[2]);
      })
      .catch((err) => {
        setMailError(err.message);
        setCurrentButton(conditionalButtons[0]);
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="contactLeft">
        <img
          src={contactBackground}
          alt="iphone image"
          className="contactImg"
        />
      </div>
      <div className="contactRight">
        <h2 className="contactTitle">Contact</h2>
        <form className="contactForm">
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email ? (
            <span className="formErrors">{formErrors.email}</span>
          ) : null}
          <textarea
            name="message"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
          {formErrors.message ? (
            <span className="formErrors">{formErrors.message}</span>
          ) : null}
          {currentButton}
          {mailError ? (
            <ContactError>
              There was a problem sending your message
            </ContactError>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Contact;
