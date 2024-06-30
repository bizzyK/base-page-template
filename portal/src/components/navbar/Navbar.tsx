"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Import the desired icon
import NavbarDataFetcher from "./datafetcher";
import { NavbarData, NavbarQuery } from "./types";
import { getPortalConfig } from "@/lib/portalconfig";

const Navbar: React.FC<{ query: NavbarQuery }> = ({ query }) => {
  const [data, setData] = useState<NavbarData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dataFetcher = new NavbarDataFetcher();
      try {
        const result = await dataFetcher.fetch(query);
        setData(result);
      } catch (error) {
        console.error("Error fetching navbar data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error loading data</div>;
  }

  // Split the links into two groups
  const leftLinks = data.links.slice(0, Math.ceil(data.links.length / 2));
  const rightLinks = data.links.slice(Math.ceil(data.links.length / 2));

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#303030", height: "72px" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 24px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "48px" }}>
          {leftLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#e4e2e3", fontSize: "14px" }}
              >
                {link.name}
              </Typography>
            </a>
          ))}
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image src={data.logo} alt={data.logoAlt} width={280.7} height={24} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "48px" }}>
          {rightLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#e4e2e3", fontSize: "14px" }}
              >
                {link.name}
              </Typography>
            </a>
          ))}
          <IconButton sx={{ color: "#e4e2e3" }}>
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ color: "#e4e2e3" }}>
            <Badge badgeContent={data.notificationsCount} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "#e4e2e3" }}>
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
