import Head from "next/head";
import React, { useState, useEffect } from "react";
import { LoaderModule, MainModule } from "../modules";

import { StyledAppContainer, StyledMainModuleOverlay } from "../utils/indexStyled";
import fonts from "../utils/fonts";

const Home = () => {
  const [appIsReady, setAplicationReady] = useState(false);

  const [overlayState, toggleOverlay] = useState(false);

  const setCustomHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setCustomHeight();

    if (appIsReady) toggleOverlay(true);
    return () => toggleOverlay(false);
  }, [, appIsReady]);

  return (
    <>
      <Head>
        <title>DEVELAPP</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <style>
            {fonts}
        </style>
      </Head>
      <StyledAppContainer>
        {appIsReady ? (
          <>
            <StyledMainModuleOverlay toggleOverlay={overlayState} />
            <MainModule />
          </>
        ) : (
          <LoaderModule setAppAsReady={setAplicationReady} />
        )}
      </StyledAppContainer>
    </>
  );
};

export default Home;
