import { createGlobalStyle } from "styled-components";

import { DeviceProvider, CmsProvider } from '../contexts'

import { variables } from "../const";


const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    min-height:100%;
    position: relative;
  }
  body {
    margin: 0;
    color: ${variables.colors.details};
    background-color: ${variables.colors.secondary};
  }
  section {
    scroll-margin-top: 5rem;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb{
    background: ${variables.colors.details};
    border-radius: 0px;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <DeviceProvider>
      <CmsProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </CmsProvider>
    </DeviceProvider>
  );
}
