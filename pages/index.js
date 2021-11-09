import Head from 'next/head';
import React, { useState,useEffect } from "react";
import LoaderModule from '../modules/LoaderModule';

import { StyledAppContainer, StyledMainModuleOverlay } from './styled';

const Home = () => {

  const [appIsReady, setAplicationReady] = useState(false);

  const [overlayState, toggleOverlay] = useState(false);

  useEffect(() => {
    if(appIsReady) toggleOverlay(true);
    return () => toggleOverlay(false);
  },[,appIsReady])

  return (
    <div>
      <Head>
        <title>sekula dev</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </Head>
        <StyledAppContainer>
          <LoaderModule setAppAsReady={setAplicationReady}/>
        </StyledAppContainer>
    </div>
  )
}


export default Home;