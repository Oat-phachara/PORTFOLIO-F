import React, { useState } from "react";
import CardItems from "../../components/CardItems";
import { Grid, Pagination } from "@mui/material";

function Portfolio() {
  const cardData = [
    {
      image: "/src/assets/picture/projecct/hang.PNG",
      title: "Hangman",
      description:
        "Developed a functional Hangman game on a website, including interactive features and a user-friendly interface.",
      link: "https://github.com/Oat-phachara/Hangman",
    },
    {
      image: "/src/assets/picture/projecct/ATHENA CORP.jpg",
      title: "ATHENA CORP",
      description:
        "Developed websites, integrated video features, and fixed various bugs as a freelancer for ATHENA CORP.",
      link: "https://github.com/TIGGERKUB/athena",
    },
    {
      image: "/src/assets/picture/projecct/pogedex.PNG",
      title: "Pokedex",
      description:
        "Worked on a project involving APIs to pull Pokémon data from multiple generations and integrate it into a website.",
      link: "https://github.com/Oat-phachara/Pokedex",
    },
    {
      image: "/src/assets/picture/projecct/Logintest.jpg",
      title: "Log-in Test",
      description: "Login page for frontend Practice.",
      link: "https://github.com/Oat-phachara/login-test",
    },
    {
      image: "/src/assets/picture/projecct/AirBNB.jpg",
      title: "Airbnb",
      description: "Make a website that imitates Airbnb.",
      link: "https://github.com/Oat-phachara/clone-air-bnb",
    },
    {
      image: "/src/assets/picture/projecct/it's my birthday.jpg",
      title: "it's my birthday",
      description: "Countdown to birthday on a website using HTML and CSS.",
      link: "https://github.com/Oat-phachara/it-s-my-birthday",
    },
    {
      image: "/src/assets/picture/projecct/mockup creditcard.jpg",
      title: "CreditCard Mockup ",
      description: "Credit Card Payment Mockup for Fronted Practice ",
      link: "https://github.com/Oat-phachara/Westride-Project",
    },
    {
      image: "/src/assets/picture/projecct/Time.jpg",
      title: "Real-Time Clock with Design",
      description:
        "Create a visually stunning website that displays real-time clock updates. This website will feature a beautifully designed interface that is both engaging and functional.",
      link: "https://github.com/Oat-phachara/Westride-Project",
    },
    {
      image: "/src/assets/picture/projecct/chang apple watch.jpg",
      title: "Apple watch",
      description:
        "Practice using css to change the color of the smartwatch image on the website.",
      link: "https://github.com/Oat-phachara/Westride-Project",
    },
    {
      image: "/src/assets/picture/projecct/practiceBootstrap.jpg",
      title: "Bootstrap Practice",
      description:
        "Learn to use Bootstrap for creating responsive, modern web designs efficiently.",
      link: "https://github.com/Oat-phachara/Test-bootstrap",
    },

    {
      image: "/src/assets/picture/projecct/React-conditional-rendering.jpg",
      title: "To-Do ",
      description: "Practicing conditional rendering to create a to do list.",
      link: "https://github.com/Oat-phachara/React-conditional-rendering",
    },

    {
      image: "/src/assets/picture/projecct/Blog.jpg",
      title: "Blog Workshop",
      description: "Practice React components by building a blog website.",
      link: "https://github.com/Oat-phachara/blog-practice-component",
    },

    // Add more card data as needed
  ];

  const itemsPerPage = 6;
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(cardData.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayedCards = cardData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      <Grid container spacing={3} margin={"13px"}>
        {displayedCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardItems
              image={card.image}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={pageCount}
        page={page}
        onChange={handleChange}
        color="primary"
        size="large"
        style={{ marginTop: "60px", display: "flex", justifyContent: "center" }}
      />
    </div>
  );
}

export default Portfolio;
