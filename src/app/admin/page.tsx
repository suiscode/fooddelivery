import { Stack, Typography } from "@mui/material";
import React from "react";
import LeftPage from "./leftpage/LeftPage";
import RightPage from "./rightpage/RightPage";

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
      <RightPage/>
    </Stack>
  );
}

export default AdminPage;



// const checkIfAdmin=async()=>{
//   const response = await axios.post('/api/user')
// }

// if(requestedUrl.pathname === '/admin'){
//   checkIfAdmin()
// }
