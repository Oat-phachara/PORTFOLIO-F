import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import Face5Icon from "@mui/icons-material/Face5";

function Homepage() {
  return (
    <>
      <div className="wallpaper">
        <AppBar position="static" className="appbar">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Face5Icon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{ flexGrow: 1 }}
              marginTop={"20px"}
            >
              <h1 className="topic">PHACHARA</h1>
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid
            item
            xs={10}
            md={8}
            lg={6}
            className="content"
            marginLeft={"1000px"}
          >
            <Typography variant="h1" color="primary">
              <h>
                PORTFOLIO <br />
                INTRODUCTION
              </h>
            </Typography>
            <Typography variant="body1">
              While my informal coding experience may span only one year, my
              passion for technology extends far beyond the classroom. I am a
              self-motivated learner, constantly seeking new challenges and
              opportunities to push my boundaries. This portfolio serves as a
              testament to my dedication, showcasing projects that represent my
              growth and diverse skill set.
              <br /> <br />
              As you navigate through this portfolio, you will encounter
              projects that reflect my diverse skill set:
            </Typography>
            <div className="button-container">
              <Link
                to="/root/About"
                style={{
                  color: "white",
                  textDecoration: "none",
                  width: "100px",
                  height: "30px",
                }}
              >
                {" "}
                <Button
                  variant="contained"
                  className="button"
                  style={{ fontSize: "15px" }}
                >
                  Click here !!!
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Homepage;
