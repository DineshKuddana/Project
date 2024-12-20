"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import MobileSidebar from "../Dashboard/MobileSidebar";
import VerticalStepper from "./VerticalStepper/verticalStepper";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center p-4">
        <MobileSidebar />

        <div className="flex w-full justify-end">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <Container>
        <Box
          
          style={{ padding: "30px 30px 30px 30px" }}
        >
          <VerticalStepper />
        </Box>
      </Container>
    </>
  );
};

export default Navbar;
