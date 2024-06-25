import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";

type LinkCardProps = {
  name: string;
  imgSrc: string;
  url: string;
};

const LinkCard: React.FC<LinkCardProps> = ({ name, imgSrc, url }) => {
  return (
    <Card
      sx={{
        width: 197,
        height: 143,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "8px",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <a
        href={url}
        style={{
          color: "inherit",
          textDecoration: "none",
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ position: "relative", paddingBottom: "100%", height: 0 }}>
          <CardMedia
            component="img"
            image={imgSrc}
            alt={name}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 1,
            }}
          />
        </Box>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: "16px", padding: "10px 0", textAlign: "center" }}
        >
          {name}
        </Typography>
      </a>
    </Card>
  );
};

export default LinkCard;
