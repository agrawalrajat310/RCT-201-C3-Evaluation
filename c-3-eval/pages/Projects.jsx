import React from "react";

import Head from "next/head";
import Link from "next/link";

import { Text } from "@chakra-ui/react";

const Projects = ({ gets }) => {
  return (
    <>
      <Head>
        <title>PROJECTS</title>
      </Head>

      <main>
        <div className="project_main">
          {gets?.map((el) => (
            <div key={el.id}>
              <Link href={`${el.html_url}`}>
                <Text>{el.name}</Text>
                <div
                  style={{
                    display: "flex",
                    marginTop: "-20px",
                  }}
                >
                  <Text>{el.stargazers_count}</Text>
                  <Text>{el.forks}</Text>
                  <Text>{el.language}</Text>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  let res = await fetch(
    `https://api.github.com/search/repositories?q=user:agrawalrajat310+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await res.json();
  let arr = [];
  arr.push(data);
  return {
    props: {
      gets: data.items,
    },
  };
}

export default Projects;
