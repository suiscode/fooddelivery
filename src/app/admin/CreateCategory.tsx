import { Button, Modal, Stack, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function CreateCategory({ open, setOpen }: any) {
  const textFieldRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState("");

  const handleClose = () => {
    console.log("Closing modal...");
    setOpen(false);
  };

  const handleContinue = () => {
    if (!textFieldRef.current?.value) {
      setError("Field is empty");
      return;
    }
    const categoryValue = textFieldRef.current?.value || "";
    console.log("Category Name:", categoryValue);
    handleClose();
  };

  const handleClear = () => {
    if (textFieldRef.current) {
      textFieldRef.current.value = "";
    }
  };

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
            Create new category
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
          <TextField
            inputRef={textFieldRef}
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="category name"
            variant="outlined"
          />
          {error && <Typography color={'red'} pl={1}>{error}</Typography>}
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
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button
            onClick={handleContinue}
            variant="contained"
            sx={{ backgroundColor: "black", color: "#3F4145" }}
          >
            Continue
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default CreateCategory;
