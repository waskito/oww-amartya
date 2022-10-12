import * as React from "react";
import dynamic from "next/dynamic";
import get from "lodash/get";
import { NextPage } from "interfaces/next";
import { NextPageContext } from "next";
import { INTRO_COOKIE_NAME } from "../../config";
import { getCookieFromServer } from "utils/cookies";

import LandingPage from "modules/homepage/homepage";

interface Props {
  intro: boolean;
  isMuted: boolean;
  isWatched: boolean;
  handleMute: () => void;
  handleWatched: () => void;
}

const LPage = ({
  intro,
  handleMute,
  isMuted,
  isWatched,
  handleWatched,
}: Props) => (
  <LandingPage
    intro={intro}
    key={intro ? 1 : 0}
    handleMute={handleMute}
    isMuted={isMuted}
    isWatched={isWatched}
    handleWatched={handleWatched}
  />
);

LPage.getInitialProps = async ({ req }: NextPageContext) => {
  const intro = Boolean(getCookieFromServer(INTRO_COOKIE_NAME, req));
  return { intro };
};

export default LPage;
