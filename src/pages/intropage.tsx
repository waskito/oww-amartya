import * as React from "react";
import dynamic from "next/dynamic";
import { NextPage } from "interfaces/next";

const IntroPage = dynamic(() => import("modules/intro/intro"));

const Intro: NextPage = () => <IntroPage onWatchedCallback={() => false} />;

export default Intro;
