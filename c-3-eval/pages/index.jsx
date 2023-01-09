import Head from "next/head";

import React from "react";

import Link from "next/link";

import { Button, Image, Text } from "@chakra-ui/react";

import Projects from "./Projects";

import Navbar from "./Navbar";

const Home = ({ github }) => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <Navbar />
        <div style={{}}>
          {github.map((el) => (
            <div key={el.id}>
              <Image
                borderRadius={100}
                w={180}
                src={el.avatar_url}
                alt="git error"
              ></Image>
              <h1>{el.name}</h1>

              <Text>{el.login}</Text>

              {/* <Text>{el.bio}</Text>
RESUME LINK */}
              <Link href="https://drive.google.com/drive/folders/1Qhuokjf6yM6Jmzq8knDuPahDe1Cm9J61?usp=sharing">
                <Button>RESUME</Button>
              </Link>
              {/* FOLLOW LINK */}
              <Link href="https://github.com/agrawalrajat310">
                <Button>FOLLOW</Button>
              </Link>
              <div>
                <h3 align="left">TECH STACK</h3>

                <p>
                  MONGODB EXPRESS JS REACT.JS NODE.JS <br />
                  POSTGRESQL GIT REACT NATIVE
                  <br />
                  CHAKRA-UI CSS AND TAILWIND
                </p>
              </div>
              <h1>{el.company}</h1>
            </div>
          ))}
          <div>
            <Projects />
          </div>
        </div>
      </main>
    </>
  );
};
