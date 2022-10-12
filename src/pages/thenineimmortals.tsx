import * as React from "react";
import dynamic from "next/dynamic";
import { NextPage } from "interfaces/next";

import Thenineimmortals from "modules/homepage/thenineimmortals";

interface Props {
  isMuted: boolean;
  handleMute: () => void;
}

const TheNineImmortalsPage = ({ handleMute, isMuted }: Props) => (
  <Thenineimmortals handleMute={handleMute} isMuted={isMuted} />
);

export default TheNineImmortalsPage;
