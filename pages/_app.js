import { createGlobalStyle } from "styled-components";

import { DeviceProvider, CmsProvider } from '../contexts'

import { variables, cmsEndpoints } from "../const";

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

export default function App({ Component, pageProps, data }) {
  return (
    <DeviceProvider>
      <CmsProvider initialData={data}>
        <GlobalStyle />
        <Component {...pageProps} />
      </CmsProvider>
    </DeviceProvider>
  );
}

App.getInitialProps = async (ctx) => {

  const path = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}${cmsEndpoints.resumeById("1")}`;
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
  }

  const res = await fetch(path, { headers: headers })
  const json = await res.json();
  return { data: json }
}