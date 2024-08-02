import Navbar from "../../components/Navbar";
import ContactItem from "../../components/ContactItem";
import { AppBar, IconButton, Typography, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

function contact() {
  return (
    <>
      <Navbar />
      <ContactItem />
    </>
  );
}

export default contact;
