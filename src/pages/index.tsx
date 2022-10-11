import * as React from "react";
import dynamic from "next/dynamic";
import get from "lodash/get";
import { NextPage } from "interfaces/next";
import { NextPageContext } from "next";
import { INTRO_COOKIE_NAME } from "../../config";
import { getCookieFromServer } from "utils/cookies";

const LandingPage = dynamic(() => import("modules/homepage/homepage"));

interface Props {
  intro: boolean;
}

const LPage = ({ intro }: Props) => (
  <LandingPage intro={intro} key={intro ? 1 : 0} />
);

LPage.getInitialProps = async ({ req }: NextPageContext) => {
  const intro = Boolean(getCookieFromServer(INTRO_COOKIE_NAME, req));
  return { intro };
};

export default LPage;
