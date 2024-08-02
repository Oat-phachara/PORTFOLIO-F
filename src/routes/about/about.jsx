import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Grid, IconButton } from "@mui/material";
import { Instagram, Facebook, YouTube } from "@mui/icons-material";
import "./about.css";

// Import images
import image1 from "../../assets/picture/about/image1.jpg";
import image2 from "../../assets/picture/about/image2.png";
import image3 from "../../assets/picture/about/image3.png";
import image4 from "../../assets/picture/about/image4.jpg";
import image5 from "../../assets/picture/about/image5.jpg";
import image6 from "../../assets/picture/about/image6.jpg";
import image7 from "../../assets/picture/about/image7.jpg";
import image8 from "../../assets/picture/about/image8.jpg";
import image9 from "../../assets/picture/about/image9.jpg";

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndexTwo, setCurrentImageIndexTwo] = useState(0);

  const images = [image1, image2, image3, image4];
  const imagesSetTwo = [image5, image6, image7, image8, image9];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexTwo((prevIndex) =>
        prevIndex === imagesSetTwo.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [imagesSetTwo.length]);

  const wavingVariants = {
    initial: { rotate: 0 },
    hover: {
      rotate: [0, 10, -10, 10, -10, 0],
      transition: { duration: 1, repeat: Infinity, repeatType: "loop" },
    },
  };

  return (
    <div className="grid">
      <Grid container>
        <Grid
          item
          xs={6}
          container
          sx={{
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }} // Add relative positioning
        >
          <motion.div
            className="text-head"
            animate={{
              scale: [0, 0, 0, 1, 1],
              rotate: [1, 0, 0, 2, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            style={{ position: "relative" }} // Ensure this div is relative
          >
            <h1
              style={{
                fontSize: "70px",
                width: "500px",
                marginBottom: "-100px",
                marginTop: "100px",
                padding: "20px 70px",
                position: "relative", // Ensure h1 is positioned above
                zIndex: 1,
              }}
            >
              Hi, I'm Oat Phachara
            </h1>
            <motion.div
              initial="initial"
              whileHover="hover"
              variants={wavingVariants}
              className="hand"
              style={{
                position: "absolute",
                top: "50%",
                left: "-120px", // Adjust this value to position it correctly
                transform: "translateY(-50%)",
                height: "200px", // Adjust as needed
                width: "200px", // Adjust as needed
                borderRadius: "50%",
                backgroundColor: "#f0f0f0", // Optional background
                overflow: "hidden",
                zIndex: 0, // Ensure it is behind the h1
              }}
            >
              <h1
                style={{
                  fontSize: "70px",
                  margin: 0, // Adjust margin as needed
                }}
              >
                👋
              </h1>
            </motion.div>
          </motion.div>
          <div className="content">
            <div className="content-text">
              <h3>Frontend Developer</h3>
              <p>
                Born in 1998 in Bangkok, Thailand. I have recently completed a
                Bachelor of Communication Arts, majoring in Broadcasting and
                Streaming Media Production at the University of Thailand. I have
                a passion for all things technology and design, from software
                engineering to UI/UX. In addition to my love of technology and
                design, I am also interested in business, economics, and
                finance. Below are details of some of the projects I have
                developed during my one year of coding experience.
              </p>
            </div>
          </div>
        </Grid>

        <Grid
          item
          xs={6}
          container
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid container spacing={2} sx={{ marginTop: "20px" }}>
            <Grid item xs={16} container sx={{ justifyContent: "center" }}>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 5 },
                  scale: { duration: 2 },
                }}
                className="image-container"
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Rotating image"
                  className="carousel-image"
                />
              </motion.div>
            </Grid>

            <Grid item xs={12} container sx={{ justifyContent: "center" }}>
              <motion.div
                key={currentImageIndexTwo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 5 },
                  scale: { duration: 5 },
                }}
                className="image-container"
              >
                <img
                  src={imagesSetTwo[currentImageIndexTwo]}
                  alt="Rotating image"
                  className="carousel-image"
                />
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", justifyContent: "center" }}
      >
        <Grid item>
          <IconButton
            href="https://www.instagram.com/oat.bun/"
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://www.facebook.com/oat19411"
            target="_blank"
            aria-label="Facebook"
          >
            <Facebook fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            href="https://www.youtube.com"
            target="_blank"
            aria-label="YouTube"
          >
            <YouTube fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
