import * as React from "react";
import dynamic from "next/dynamic";
import { NextPage } from "interfaces/next";

import TheJourney from "modules/homepage/thejourney";

interface Props {
  isMuted: boolean;
  handleMute: () => void;
}

const TheJourneyPage = ({ handleMute, isMuted }: Props) => (
  <TheJourney handleMute={handleMute} isMuted={isMuted} />
);

export default TheJourneyPage;
