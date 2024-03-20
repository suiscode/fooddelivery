"use client";
import { Alert, Box, Modal, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../context/Context";

function AddToCart({ item, openModal, handleClose }: any) {
  const { modalInfo } = useGlobalContext();

  const imageURL = `https://res.cloudinary.com/deifnil5n/image/upload/v1710223136/${modalInfo.foodImage}.jpg`;

  const [amount, setAmount] = useState(1);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };

  interface CartInfo {
    id: string;
    amount: number;
  }

  const handleCart = () => {
    
    const existingCartItemsJSON = localStorage.getItem("cartItems");
    const existingCartItems: any[] = existingCartItemsJSON
      ? JSON.parse(existingCartItemsJSON)
      : [];
    existingCartItems.push({ ...modalInfo, amount: amount });
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    handleClose();
  };

  const handleDec = () => {
    if (amount == 1) return;
    setAmount((prev) => prev - 1);
  };

  const handleInc = () => {
    setAmount((prev) => prev + 1);
  };

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="flex flex-row gap-5">
        <Stack className=" flex border-2 p-2 relative w-[500px] h-[500px]">
          <Image
            src={imageURL}
            alt="food"
            fill
            style={{ objectFit: "cover" }}
          />
        </Stack>
        <Stack className="flex-1 gap-10">
          <CloseIcon
            onClick={() => handleClose()}
            className="cursor-pointer self-end"
          />
          <Stack spacing={-1}>
            <Typography fontSize={"28px"} fontWeight={"700"}>
              {modalInfo.foodName}
            </Typography>
            <Typography variant="h6" className="text-[#18BA51]">
              {modalInfo.foodOnSale
                ? modalInfo.foodSalePrice
                : modalInfo.foodPrice}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h6" fontWeight={"700"}>
              Orts
            </Typography>
            <Typography className="bg-[#F6F6F6] text-[#767676] rounded-lg p-2">
              {modalInfo.foodRecipe}
            </Typography>
          </Stack>
          <Typography variant="h6" fontWeight={"700"}>
            Too
          </Typography>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <button
              onClick={handleDec}
              className="bg-[#18BA51] text-white text-2xl px-3 rounded-lg text-center"
            >
              -
            </button>
            <Typography>{amount}</Typography>
            <button
              onClick={handleInc}
              className="bg-[#18BA51] text-white text-2xl px-3 rounded-lg text-center"
            >
              +
            </button>
          </Stack>
          <button
            onClick={handleCart}
            className="bg-[#18BA51] py-2 rounded-lg text-white"
          >
            Сагслах
          </button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default AddToCart;
