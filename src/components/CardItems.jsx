import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function CardItems({ image, title, description, link }) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia component="img" height="300" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="medium"
          color="warning"
          style={{ margin: "5px auto" }}
          onClick={() => window.open(link, "_blank")}
        >
          Github
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardItems;
