import Head from "next/head";
import { Header } from "./header/Header";
import Sidebar from "./main/sidebar/Sidebar";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [height, setHeight] = useState();

  useEffect(() => {
    const headerHeight = document.querySelector("header").offsetHeight;

    setHeight(headerHeight);
  });
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main
        className={`relative lg:w-9/12 mx-auto px-4`}
        style={{ paddingTop: height }}
      >
        <Sidebar />
        <div className="md:pl-[13rem]">{children}</div>
      </main>
    </>
  );
};

export default Layout;
