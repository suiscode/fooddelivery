"use client";
import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "next/link";
import axios from "axios";
import { useGlobalContext } from "@/app/context/Context";
import { useSearchParams } from "next/navigation";

function Category({ category }: any) {
  const { setRefresh, refresh } = useGlobalContext();
  const options = ["Edit name", "Delete Category"];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = async () => {
    const res = await axios.put("/api/category", {
      id: category._id,
    });
    handleClose();
    setRefresh(!refresh);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const searchParams = useSearchParams();
  const queryParam = searchParams.get("category");

  return (
    <Link href={`/admin?category=${category.name}`}>
      <Stack
        border={1}
        direction={"row"}
        alignItems={"center"}
        borderRadius={"10px"}
        paddingInline={"10px"}
        justifyContent={"space-between"}
        className="cursor-pointer"
        style={
          category.name === queryParam ? { backgroundColor: "#18BA51" } : {}
        }
      >
        <Typography
          fontWeight={"500"}
          style={
            category.name === queryParam
              ? { color: "white" }
              : { color: "black" }
          }
        >
          {category.name}
        </Typography>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon
            style={
              category.name === queryParam
                ? { color: "white" }
                : { color: "black" }
            }
          />
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
          <MenuItem key={"Edit"} onClick={handleClose}>
            Edit name
          </MenuItem>
          <MenuItem key={"Delete"} onClick={handleDelete} sx={{ color: "red" }}>
            Delete Category
          </MenuItem>
        </Menu>
      </Stack>
    </Link>
  );
}

export default Category;
