import React from "react";

import Link from "next/link";

import { Avatar } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div
      style={{
        background: "black",
        display: "flex",
        gap: "1000px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          marginLeft: "20px",
          gap: "50px",
        }}
      >
        <h3 href="/">RAJAT AGRAWAL</h3>

        <Link href="">
          <h3>PROJECTS</h3>
        </Link>

        <h3>EXPERIENCE</h3>
      </div>

      <div
        style={{
          gap: "10px",
          display: "flex",
        }}
      >
        <Avatar
          w={60}
          borderRadius={50}
          name="RAJAT AGRAWAL"
          src="https://avatars.githubusercontent.com/u/77153888?v=4"
        />
      </div>
    </div>
  );
};

export default Navbar;
