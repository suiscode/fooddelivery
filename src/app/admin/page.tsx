import { Stack, Typography } from "@mui/material";
import React from "react";
import LeftPage from "./LeftPage";

function AdminPage() {
  return (
    <Stack
      direction={"row"}
      border={"2px solid black"}
      width={"100%"}
      minHeight={"1000px"}
      paddingInline={"120px"}
      paddingBlock={"30px"}
    >
      <LeftPage />
      <Stack width={"80%"} border={"2px solid green"}>
        Hello
      </Stack>
    </Stack>
  );
}

export default AdminPage;



// const checkIfAdmin=async()=>{
//   const response = await axios.post('/api/user')
//   console.log(response);
// }

// if(requestedUrl.pathname === '/admin'){
//   checkIfAdmin()
// }
