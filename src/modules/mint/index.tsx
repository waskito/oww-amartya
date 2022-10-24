import { useState } from "react";

import { AUDIO_MUTED_KEY } from "../../../config";
import { getCookieFromServer } from "utils/cookies";
import Countdown from "modules/mint/Countdown";

import { mintStages } from "modules/mint/constants";
import AvailableSection from "modules/mint/Available";
import ConnectedSection from "modules/mint/Connected";
import WhitelistedSection from "modules/mint/Whitelisted";
import Mint from "modules/mint/Mint";
import MintedSection from "./Minted";
import MintFailedSection from "./MintFailed";
import SoldOutSection from "./SoldOut";
import OnPauseSection from "./OnPause";

interface Props {
  isMuted: boolean;
  stage: string;
  handleMute: () => void;
  setStage: (newStage) => void;
}

const MintMainComponent = ({ stage, setStage, handleMute, isMuted }: Props) => {
  const [total, setTotal] = useState(3);
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
    case mintStages.mint:
      return (
        <Mint
          handleMute={handleMute}
          isMuted={isMuted}
          setStage={setStage}
          setTotal={setTotal}
        />
      );
    case mintStages.minted:
      return (
        <MintedSection
          handleMute={handleMute}
          isMuted={isMuted}
          setStage={setStage}
          total={total}
        />
      );
    case mintStages.mintFailed:
      return (
        <MintFailedSection
          handleMute={handleMute}
          isMuted={isMuted}
          setStage={setStage}
        />
      );
    case mintStages.soldOut:
      return (
        <SoldOutSection
          handleMute={handleMute}
          isMuted={isMuted}
          setStage={setStage}
        />
      );
    case mintStages.onPause:
      return (
        <OnPauseSection
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
