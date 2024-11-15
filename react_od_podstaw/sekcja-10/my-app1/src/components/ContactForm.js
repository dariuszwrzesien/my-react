import { Typography } from "@mui/material";
import { SubmitButton, Textarea } from "./ContactForm.styles";
import { useState } from "react";
import { useBlocker } from "react-router-dom";
import Confirm from "./Confirm";

const ContactForm = () => {
  const [isDirty, setIsDirty] = useState(false);
  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    console.log(currentLocation.pathname);
    console.log("isDirty", isDirty);
    return isDirty === true && "/contact" !== nextLocation.pathname;
  });

  const handleChange = () => {
    setIsDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDirty(false);
  };

  return (
    <>
      <div>
        <Typography variant="body1" align="justify" padding={2}>
          If you have any questions or need further information, please do not
          hesitate to contact us.
          <br />
          Fill out the form below with your message, and we will get back to you
          as soon as possible.
        </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <Textarea
          minRows={10}
          placeholder="Wpisz coś"
          onChange={handleChange}
        />
        <br />
        <SubmitButton type="submit">Wyślij</SubmitButton>
      </form>
      {blocker.state === "blocked" ? (
        <Confirm
          message={"Are you sure you want to leave?"}
          onConfirm={blocker.proceed}
          onCancel={blocker.reset}
        />
      ) : null}
    </>
  );
};

export default ContactForm;
