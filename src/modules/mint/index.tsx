import { useState } from "react";

import { AUDIO_MUTED_KEY } from "../../../config";
import { getCookieFromServer } from "utils/cookies";
import Countdown from "modules/mint/Countdown";

import { mintStages } from "modules/mint/constants";
import AvailableSection from "modules/mint/Available";
import ConnectedSection from "modules/mint/Connected";
import WhitelistedSection from "modules/mint/Whitelisted";
import ConnectAllTheGate from "modules/mint/ConnectAllTheGate";

interface Props {
  isMuted: boolean;
  stage: string;
  handleMute: () => void;
  setStage: (newStage) => void;
}

const MintMainComponent = ({ stage, setStage, handleMute, isMuted }: Props) => {
  switch (stage) {
    case mintStages.available:
      return (
        <AvailableSection
          handleMute={handleMute}
          isMuted={isMuted}
          setStage={setStage}
        />
      );
    case mintStages.connected:
      return (
        <ConnectedSection
          handleMute={handleMute}
          isMuted={isMuted}
          setStage={setStage}
        />
      );
    case mintStages.whitelisted:
      return (
        <WhitelistedSection
          handleMute={handleMute}
          isMuted={isMuted}
          setStage={setStage}
        />
      );
    case mintStages.connectAllGate:
      return (
        <ConnectAllTheGate
          handleMute={handleMute}
          isMuted={isMuted}
          setStage={setStage}
        />
      );
    default:
      return (
        <Countdown
          handleMute={handleMute}
          isMuted={isMuted}
          setStage={setStage}
        />
      );
  }
};

export default MintMainComponent;
