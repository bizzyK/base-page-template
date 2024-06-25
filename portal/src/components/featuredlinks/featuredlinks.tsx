// portal/src/components/featuredlinks/featuredlinks.tsx
import React from "react";
import { Grid, Typography } from "@mui/material";
import LinkCard from "../linkCard/linkCard";
import { FeaturedLinksData } from "./types";

const FeaturedLinks: React.FC<{ data: FeaturedLinksData }> = ({ data }) => {
  return (
    <div style={{ backgroundColor: "#1a1a1a", padding: "20px" }}>
      <Typography
        variant="h6"
        style={{ color: "#e74c3c", fontWeight: "bold", fontSize: "28px" }}
      >
        Featured Links
      </Typography>
      <Grid container spacing={2} style={{ marginTop: "10px" }}>
        {data.links.map((link, index) => (
          <Grid item xs={2} key={index}>
            <LinkCard name={link.name} imgSrc={link.imageUrl} url={link.url} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedLinks;
