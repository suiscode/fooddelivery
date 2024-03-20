"use client";
import { Stack } from "@mui/material";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import React from "react";

function DeliveryPage() {
  const position = { lat: 47.915, lng: 106.91 };
  return (
    <APIProvider apiKey="AIzaSyA7Bm_2t30YlxIXMBk5SJhlhFWqZQo8-WY">
      <Stack className="h-[616px] w-[1200px]">
        <Map zoom={13.5} center={position} mapId={'deaf9f06a3955c7'}></Map>
      </Stack>
    </APIProvider>
  );
}

export default DeliveryPage;
