import React, { useRef } from "react";
import { Button, Input, TextareaAutosize } from "@mui/material";
import "../components/ContactItem.css";

export function ContactItem() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // You can handle form submission logic here, such as sending data to a server

    // Reset the form fields
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section className="containner">
      <h5>Contact Us</h5>
      <h1>Want to work with Me?</h1>
      <p className="text">
        Complete this form and we will get back to you in 24 hours.
      </p>
      <form ref={formRef} className="form" onSubmit={handleSubmit}>
        <div className="input">
          <Input
            fullWidth
            variant="outlined"
            label="Full Name"
            placeholder="Full Name"
            className="typing"
            style={{ height: "3rem" }}
          />
        </div>
        <div className="input">
          <Input
            fullWidth
            variant="outlined"
            label="Email Address"
            placeholder="Email Address"
            className="typing"
            style={{ height: "3rem" }}
          />
        </div>
        <TextareaAutosize
          className="input"
          minRows={12}
          placeholder="Message"
          style={{ width: "100%" }}
        />

        <Button
          type="submit"
          style={{ height: "4rem" }}
          variant="contained" // Changed from gradient to contained
          size="large"
          fullWidth
        >
          Send Message
        </Button>
      </form>
    </section>
  );
}

export default ContactItem;
