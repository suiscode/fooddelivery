"use client";
import React, { useState } from "react";
import CreateNewFood from "./CreateNewFood";

function CreateButton({ category }: any) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };
  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-[#18BA51] text-white rounded-md px-3 py-2 hover:bg-opacity-90"
      >
        Add new food
      </button>
      <CreateNewFood setOpen={setOpen} open={open} categories={category} />
    </>
  );
}

export default CreateButton;
