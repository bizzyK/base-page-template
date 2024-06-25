import React from "react";
import { Typography, Card, CardMedia } from "@mui/material";

type LinkCardProps = {
  name: string;
  imgSrc: string;
};

const LinkCard: React.FC<LinkCardProps> = ({ name, imgSrc }) => {
  return (
    <Card
      sx={{
        width: "calc(100% / 6 - 24px)",
        height: 150,
        backgroundColor: "#333",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        position: "relative",
        marginBottom: 2,
        "&:hover": { backgroundColor: "#444" },
      }}
    >
      <CardMedia
        component="img"
        image={imgSrc}
        alt={name}
        sx={{ width: "80%", height: "auto" }}
      />
      <Typography
        variant="body1"
        sx={{ color: "#fff", position: "absolute", bottom: 10 }}
      >
        {name}
      </Typography>
    </Card>
  );
};

export default LinkCard;
