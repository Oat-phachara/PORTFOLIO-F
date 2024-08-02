import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import "./service/Services.css";

const servicesData = [
  { id: 1, src: "/src/assets/picture/Skill/css.png", description: "CSS" },
  { id: 2, src: "/src/assets/picture/Skill/html.png", description: "HTML" },
  { id: 3, src: "/src/assets/picture/Skill/js.png", description: "JavaScript" },
  {
    id: 4,
    src: "/src/assets/picture/Skill/Typescript.png",
    description: "TypeScript",
  },
  {
    id: 5,
    src: "/src/assets/picture/Skill/node.png",
    description: "Node.js",
  },
  {
    id: 6,
    src: "/src/assets/picture/Skill/react.png",
    description: "React",
  },
  { id: 7, src: "/src/assets/picture/Skill/git.png", description: "Git" },
  {
    id: 8,
    src: "/src/assets/picture/Skill/Github.png",
    description: "Github",
  },
  {
    id: 9,
    src: "/src/assets/picture/Skill/react router.png",
    description: "React Router",
  },
  {
    id: 10,
    src: "/src/assets/picture/Skill/bootstrap.png",
    description: "Bootstrap",
  },
  {
    id: 11,
    src: "/src/assets/picture/Skill/framer motion.webp",
    description: "Framer Motion",
  },
  {
    id: 12,
    src: "/src/assets/picture/Skill/mui.jpg",
    description: "MUI",
  },
  {
    id: 13,
    src: "/src/assets/picture/Skill/tailwinds.png",
    description: "Tailwind CSS",
  },

  {
    id: 14,
    src: "/src/assets/picture/Skill/npm.png",
    description: "NPM",
  },
  {
    id: 15,
    src: "/src/assets/picture/Skill/yarn.png",
    description: "yarn",
  },
  {
    id: 16,
    src: "/src/assets/picture/Skill/photoshop.png",
    description: "Photoshop",
  },
  {
    id: 17,
    src: "/src/assets/picture/Skill/lightroom.png",
    description: "Lightroom",
  },

  {
    id: 18,
    src: "/src/assets/picture/Skill/premiere pro.jpg",
    description: "Premiere Pro",
  },
];

const Services = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(servicesData.length / itemsPerPage);

  const handleNext = () => {
    setPageIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handleBack = () => {
    setPageIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const visibleServices = servicesData.slice(
    pageIndex * itemsPerPage,
    (pageIndex + 1) * itemsPerPage
  );

  const isLastPage = pageIndex === totalPages - 1;

  return (
    <Box marginLeft={"220px"} marginTop={"50px"}>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
        {visibleServices.map((service) => (
          <Card
            key={service.id}
            sx={{
              height: 260,
              width: 200,
              margin: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={service.src}
                alt={service.description}
                className="skill"
                style={{ width: "100%", height: "auto" }}
              />
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  paddingTop: 5,
                  textAlign: "center",
                }}
              >
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        marginTop={10}
        marginLeft={-40}
      >
        <Button
          variant="outlined"
          onClick={isLastPage ? handleBack : handleNext}
          style={{ width: "150px", height: "50px", fontSize: "20px" }}
        >
          {isLastPage ? "Back" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default Services;
