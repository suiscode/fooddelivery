"use client";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  FormControl,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Label } from "@mui/icons-material";
import axios from "axios";
import { useGlobalContext } from "@/app/context/Context";

function CreateNewFood({ setOpen, refetch, open, setRefetch }: any) {
  const { refresh, setRefresh } = useGlobalContext();
  const handleClose = () => setOpen(false);
  const [error, setError] = useState("");
  const [foodInputs, setFoodInputs] = useState({
    foodName: "",
    foodCategory: "",
    foodRecipe: "",
    foodPrice: "",
    foodOnSale: false,
    foodSalePrice: "",
    foodImage: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    const res = await axios.get("/api/category");
    setCategories(res.data);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setFoodInputs((prev) => ({ ...prev, foodCategory: event.target.value }));
  };

  const handleFoodInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFoodInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  let foodUrl = foodInputs.foodImage
    ? `https://res.cloudinary.com/deifnil5n/image/upload/v1710216945/${foodInputs.foodImage}.png`
    : "";

  const handleContinue = async () => {
    console.log(foodInputs);
    if (!foodInputs.foodCategory) {
      setError("Choose category");
      return;
    }
    try {
      const res = await axios.post("/api/food", foodInputs);
      setRefresh(!refresh);
      handleClose();
      setError("");
      setRefetch(!refetch);
    } catch (e: any) {
      setError(e.response.data);
    }
  };

  async function handleFileUpload(event: any) {
    const cloudinaryConfig = {
      cloud_name: "deifnil5n",
      api_key: "534983861781594",
      api_secret: "6qzroYr2gOFRNtgQt-tSNERmsH4",
      uploadPreset: "tuguldur",
    };
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinaryConfig.uploadPreset);
    const url = `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloud_name}/image/upload`;
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });
      console.log(response);
      setFoodInputs((prev) => ({
        ...prev,
        foodImage: response.data.public_id,
      }));
    } catch (e) {
      console.log(e);
    }
  }

  interface Category {
    _id: string;
    name: string;
  }

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 587,
    bgcolor: "background.paper",
    border: "1px solid gray",
    boxShadow: 24,
    borderRadius: "20px",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack sx={style} spacing={4}>
        <Stack
          pt={4}
          px={4}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <CloseIcon onClick={() => handleClose()} className="cursor-pointer" />
          <Typography fontWeight={"600"} variant="h5">
            Create new food
          </Typography>
          <Typography marginLeft={"30px"}></Typography>
        </Stack>
        <Stack
          spacing={2}
          p={4}
          borderTop={1}
          borderBottom={1}
          borderColor={"gray"}
          paddingBlock={"30px"}
        >
          <Stack spacing={1}>
            <Typography>Food Name</Typography>
            <TextField
              name="foodName"
              placeholder="Enter food name"
              variant="outlined"
              value={foodInputs.foodName}
              onChange={handleFoodInputChange}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography>Food Name</Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={foodInputs.foodCategory}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Category</em>
                </MenuItem>
                {categories.map((category: Category, index: number) => (
                  <MenuItem key={index} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack spacing={1}>
            <Typography>Food Recipe</Typography>
            <TextField
              name="foodRecipe"
              placeholder="Enter food recipe"
              variant="outlined"
              value={foodInputs.foodRecipe}
              onChange={handleFoodInputChange}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography>Food Price</Typography>
            <TextField
              name="foodPrice"
              placeholder="Enter food price"
              variant="outlined"
              value={foodInputs.foodPrice}
              onChange={handleFoodInputChange}
            />
          </Stack>
          <Stack spacing={1}>
            <Stack direction={"row"} alignItems={"center"}>
              <Switch
                checked={foodInputs.foodOnSale}
                onChange={(e) =>
                  setFoodInputs((prev) => ({
                    ...prev,
                    foodOnSale: e.target.checked,
                  }))
                }
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography>Хямдралтай эсэх</Typography>
            </Stack>
            <TextField
              name="foodSalePrice"
              placeholder="Enter food price"
              variant="outlined"
              value={foodInputs.foodSalePrice}
              onChange={handleFoodInputChange}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography>Хоолны зураг</Typography>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack
                spacing={1}
                border={"2px dashed #D6D7DC"}
                borderRadius={"10px"}
                bgcolor={"#F4F4F4"}
                p={2}
                alignItems={"center"}
              >
                <Typography fontWeight={600}>Add image for the food</Typography>

                <label className="custom-file-upload">
                  <input type="file" onChange={handleFileUpload} />
                  <div
                    className={`bg-[#393939] cursor-pointer text-white px-4 py-2 rounded-xl font-semibold`}
                  >
                    Add image
                  </div>
                </label>
              </Stack>
              <Stack
                borderRadius={"10px"}
                width={"50%"}
                sx={{
                  backgroundImage: `url(${foodUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></Stack>
            </Stack>
          </Stack>

          {/* {error && (
            <Typography color={"red"} pl={1}>
              {error}
            </Typography>
          )} */}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"end"}
          px={4}
          pb={4}
          spacing={2}
        >
          <Button
            variant="text"
            sx={{ color: "#3F4145" }}
            // onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            variant="contained"
            sx={{ color: "#393939", "&:hover": { color: "white" } }}
            onClick={() => handleContinue()}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default CreateNewFood;
