import React, { useState } from "react";
import { Button, Box, Text, Container } from "@chakra-ui/react";
import clsx from "clsx";

import { Mute, Unmute } from "components/Icons";

import NavbarMint from "components/section/NavbarMint";
import { mintStages } from "./constants";

const greenBackgroundStages = [
  mintStages.countdown,
  mintStages.available,
  mintStages.connected,
  mintStages.whitelisted,
  mintStages.minted,
  mintStages.mintFailed,
  mintStages.soldOut,
  mintStages.onPause,
];

const redBackgroundStages = [
  mintStages.connectAllGate,
  mintStages.allGateLoading,
  mintStages.mint,
  mintStages.inProcess,
];

interface Props {
  isMuted: boolean;
  handleMute: () => void;
  children: React.ReactNode;
  stage: string;
}

const MintLayout: React.FC<Props> = ({
  isMuted,
  handleMute,
  children,
  stage,
}: Props) => {
  const btnRef = React.useRef();

  const [state, setState] = useState("type1");

  const toggle = (value) => {
    setState(value);
  };

  return (
    <Box>
      <NavbarMint isMuted={isMuted} handleMute={handleMute} />

      <Box
        mx="auto"
        w="100%"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="black"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="100% 100%"
      >
        <Box
          pos="absolute"
          h="100%"
          w="100%"
          bg="url(/images/mint/bg-mint-stage-1.png) no-repeat"
          backgroundSize="cover"
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={clsx({
            isHidden: !greenBackgroundStages.includes(stage),
          })}
          sx={{ "&.isHidden": { display: "none !important" } }}
        >
          <Box
            bg="url(/images/mint/tara-gate.png) no-repeat"
            backgroundSize="cover"
            h="828px"
            w="535px"
          />
        </Box>
        <Box
          pos="absolute"
          h="100%"
          w="100%"
          bg="url(/images/mint/bg-mint-stage-2.png) no-repeat"
          backgroundSize="cover"
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={clsx({
            isHidden: !redBackgroundStages.includes(stage),
          })}
          sx={{ "&.isHidden": { display: "none !important" } }}
        >
          <Box
            pos="absolute"
            w="80%"
            h="80%"
            bg="#000"
            top="20%"
            left="20%"
            filter="auto"
            opacity={0.52}
            blur="200px"
            boxShadow="0px 0px 500px #000000"
          />
        </Box>
        <Box zIndex={1}>{children}</Box>
      </Box>

      <Button
        bg="transparant"
        borderRadius="100%"
        zIndex={1}
        h="auto"
        w="auto"
        pos="fixed"
        bottom={"10px"}
        right={"10px"}
        onClick={handleMute}
        p="15px"
        _focus={{ boxShadow: "transparant" }}
      >
        {!isMuted ? (
          <Mute sx={{ width: "100px", height: "100px", color: "black" }} />
        ) : (
          <Unmute sx={{ width: "100px", height: "100px", color: "black" }} />
        )}
      </Button>
    </Box>
  );
};

export default MintLayout;
