"use client";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "next/link";

function Category() {
  const options = ["Edit name", "Delete Category"];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const categoryName = 'food'

  return (
    <Link href={`/admin?category=${categoryName}`}>
      <Stack
        border={1}
        direction={"row"}
        alignItems={"center"}
        borderRadius={"10px"}
        paddingInline={"10px"}
        justifyContent={"space-between"}
        className="cursor-pointer"
      >
        <Typography fontWeight={"500"}>{categoryName}</Typography>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon sx={{ color: "black" }} />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
    </Link>
  );
}

export default Category;
