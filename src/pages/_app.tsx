/* eslint-disable max-len */
import * as React from "react";
import { Router } from "next/router";

// Hooks, Helper, Interface, etc.
import { NextAppProps } from "interfaces/next";
import { DAppProvider } from "@usedapp/core";
import { WalletProvider } from "hooks";
import config from "config/dappConfiguration";
import NextNProgress from "nextjs-progressbar";
import "video.js/dist/video-js.css";
import "focus-visible/dist/focus-visible";

// Components & Style
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "config/themeConfiguration";
import Fonts from "components/Layout/Fonts";
import AppLayout from "components/Layout/AppLayout";
import WrongNetwork from "components/Common/WrongNetwork";
import Meta from "components/Common/Meta";
// NPProgress

const App = (nextApp: NextAppProps): JSX.Element => {
  React.useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Meta />
      <ChakraProvider theme={theme}>
        <DAppProvider config={config}>
          <WrongNetwork />
          <WalletProvider>
            <Fonts />
            <NextNProgress color="#A67320" />
            <AppLayout {...nextApp} />
          </WalletProvider>
        </DAppProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
