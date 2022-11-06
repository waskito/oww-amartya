import { useCallback, useEffect, useRef, useState } from "react";
import { Text, Container, Flex, Box, Button, Fade } from "@chakra-ui/react";
import clsx from "clsx";
import videojs from "video.js";
import ReactAudioPlayer from "react-audio-player";
import VREPlayer from "videojs-react-enhanced";

import { mintingStages, mintStages } from "./constants";

import MintLayout from "./MintLayout";
import GatesLoading from "./SVG/GatesLoading";
import { Minus, MoreRight, Plus } from "components/Icons";
import sleep from "sleep-promise";

const TRANSITION = "transition";
const groupMinting = [TRANSITION, mintingStages.mint, mintingStages.inProcess];

const CURRENCY = "ETH";
const PRICE = 0.5;

export default function Mint({
  handleMute,
  isMuted,
  setStage,
  setTotal,
}): React.ReactElement {
  const audioRef = useRef(null);
  const [currentState, setCurrentState] = useState(
    mintingStages.connectAllGate
  );
  const [value, setValue] = useState(3);

  const options: VREPlayer.IPlayerOptions = {
    src: "https://user-images.githubusercontent.com/4341116/199644353-36dd8fc6-9eaf-4140-9994-48bff8be9987.mp4",
    controls: false,
    autoplay: "play",
  };

  const videojsOptions = {
    fluid: false,
  };

  const handleMinus = (current) => {
    if (current <= 1) return;
    return setValue(current - 1);
  };

  const handlePlus = (current) => {
    if (current >= 3) return;
    return setValue(current + 1);
  };

  const handleSuccess = useCallback(async (total) => {
    setTotal(total);
    await sleep(5 * 1000);
    setCurrentState(TRANSITION);
    await sleep(0.5 * 1000);
    setCurrentState(mintingStages.video);
  }, []);

  const onWatchedCallback = useCallback(async () => {
    setStage(mintStages.minted);
  }, [currentState]);

  useEffect(() => {
    if (currentState === mintingStages.video) {
      if (!isMuted) handleMute();
    }
    if (currentState === mintingStages.inProcess) {
      handleSuccess(value);
    }
  }, [currentState, value]);

  const handleSelectPoint = () => {
    const playerEl = audioRef as any;
    const player = playerEl?.current?.audioEl?.current;
    if (player) {
      player.pause();
      player.currentTime = 0;
      player.play();
    }
  };

  return (
    <MintLayout
      handleMute={handleMute}
      isMuted={isMuted}
      stage={mintStages.mint}
      isVideo={currentState === mintingStages.video}
    >
      <Container w="100%" maxW="1440px">
        <Flex
          w="876px"
          h="868px"
          pos="relative"
          justifyContent="center"
          alignItems="center"
          className={clsx({
            isHidden: currentState !== mintingStages.connectAllGate,
          })}
          sx={{ "&.isHidden": { display: "none !important" } }}
        >
          <Fade in>
            <Box
              w={{ base: "700px", xl: "876px" }}
              h={{ base: "694px", xl: "868px" }}
              pos="absolute"
              top={{ base: "calc(50% - 350px)", xl: "0" }}
              left={{ base: "calc(50% - 347px)", xl: "0" }}
            >
              <GatesLoading firstGate />
            </Box>
          </Fade>
          <Fade in>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "black",
                width: "108px",
                height: "108px",
              }}
              mt="10px"
              _hover={{ backgroundColor: "transparent" }}
              _active={{ backgroundColor: "transparent" }}
              fontSize="30px"
              fontWeight="400"
              lineHeight="80%"
              onClick={() => setCurrentState(mintingStages.allGateLoading)}
            >
              Connect
              <br />
              All The
              <br />
              Gate
            </Button>
          </Fade>
        </Flex>
        <Flex
          w="876px"
          h="868px"
          pos="relative"
          justifyContent="center"
          alignItems="center"
          className={clsx({
            isHidden: ![
              ...groupMinting,
              mintingStages.allGateLoading,
              mintingStages.video,
            ].includes(currentState),
          })}
          sx={{ "&.isHidden": { display: "none !important" } }}
        >
          <Fade
            in={currentState === mintingStages.allGateLoading}
            unmountOnExit
          >
            <Box
              w={{ base: "700px", xl: "876px" }}
              h={{ base: "694px", xl: "868px" }}
              pos="absolute"
              top={{ base: "calc(50% - 350px)", xl: "0" }}
              left={{ base: "calc(50% - 347px)", xl: "0" }}
            >
              <GatesLoading
                onAnimationFinished={() => setCurrentState(mintingStages.mint)}
                onSelectCallback={handleSelectPoint}
              />
            </Box>
          </Fade>
          <Fade in={groupMinting.includes(currentState)} unmountOnExit>
            <Box
              w={{ base: "700px", xl: "876px" }}
              h={{ base: "694px", xl: "868px" }}
              pos="absolute"
              top={{ base: "calc(50% - 350px)", xl: "0" }}
              left={{ base: "calc(50% - 347px)", xl: "0" }}
            >
              <GatesLoading disableAnim />
            </Box>
          </Fade>
          <Box
            as={Fade}
            in={currentState === mintingStages.video}
            unmountOnExit
            zIndex={99999}
            sx={{
              ".video-js": {
                width: "100vw",
                height: "100vh",
              },
              ".video-js .vjs-tech": {
                objectFit: "cover",
              },
            }}
          >
            <VREPlayer
              playerOptions={options}
              videojsOptions={videojsOptions}
              onEnded={(e, _) => onWatchedCallback()}
            />
            <Button
              bg="transparant"
              borderRadius="100%"
              zIndex={1}
              h={140}
              w={140}
              pos="fixed"
              bottom={50}
              right={50}
              onClick={() => onWatchedCallback()}
            >
              <MoreRight sx={{ height: "32px", width: "32px" }} />
            </Button>
          </Box>
          <Box
            as={Fade}
            in={groupMinting.includes(currentState)}
            unmountOnExit
            zIndex={1}
            w="866px"
            h="682px"
            bg="url(/images/mint/bg-gate-top-big.webp) no-repeat"
            backgroundSize="cover"
            color="black"
            mt="50px"
          >
            {currentState === mintingStages.mint && (
              <Flex flexDir="column" alignItems="center" h="100%" py="64px">
                <Flex flexDir="column" gap="8px" alignItems="center">
                  <Text
                    fontSize="30px"
                    textStyle="DidactGothic"
                    w="228px"
                    align="center"
                    lineHeight="140%"
                    mt="60px"
                  >
                    You can mint
                    <br />3 Citra of Amartya
                  </Text>
                </Flex>
                <Flex flexDir="row" gap="40px" alignItems="center" h="133px">
                  <Button
                    sx={{
                      marginTop: "60px",
                      color: "white",
                      width: "40px",
                      height: "40px",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "50%",
                      backgroundColor: "black",
                      borderWidth: "0px",
                      outline: "0px",
                      lineHeight: 1,
                    }}
                    _hover={{
                      backgroundColor: "black",
                      boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
                    }}
                    _active={{
                      backgroundColor: "black",
                      boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
                    }}
                    onClick={() => handleMinus(value)}
                  >
                    <Minus
                      sx={{
                        width: "32px",
                        height: "32px",
                      }}
                    />
                  </Button>
                  <Text
                    textStyle="PlayfairDisplayMedium"
                    textAlign="center"
                    fontSize="100px"
                    fontWeight="400"
                    lineHeight="1"
                    color="black"
                    mt="30px"
                  >
                    {value}
                  </Text>
                  <Button
                    sx={{
                      marginTop: "60px",
                      color: "white",
                      width: "40px",
                      height: "40px",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      borderRadius: "50%",
                      backgroundColor: "black",
                      borderWidth: "0px",
                      outline: "0px",
                      lineHeight: 1,
                    }}
                    _hover={{
                      backgroundColor: "black",
                      boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
                    }}
                    _active={{
                      backgroundColor: "black",
                      boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.25)",
                    }}
                    onClick={() => handlePlus(value)}
                  >
                    <Plus sx={{ width: "32px", height: "32px" }} />
                  </Button>
                </Flex>
                <Flex w="340px" flexDir="column" mt="8px">
                  <Flex
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    px="24px"
                    py="12px"
                    sx={{ borderBottom: "0.75px solid #000" }}
                    width="100%"
                  >
                    <Text
                      fontSize="18px"
                      fontWeight="400"
                      textStyle="DidactGothic"
                      lineHeight="140%"
                    >
                      Price
                    </Text>
                    <Text
                      fontSize="18px"
                      fontWeight="400"
                      textStyle="DidactGothic"
                      lineHeight="140%"
                    >
                      {PRICE} {CURRENCY}
                    </Text>
                  </Flex>
                  <Flex
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    px="24px"
                    py="12px"
                    width="100%"
                  >
                    <Text
                      fontSize="18px"
                      fontWeight="400"
                      textStyle="DidactGothic"
                      lineHeight="140%"
                    >
                      TOTAL
                    </Text>
                    <Text
                      fontSize="18px"
                      fontWeight="400"
                      textStyle="DidactGothic"
                      lineHeight="140%"
                    >
                      {value * PRICE} {CURRENCY}
                    </Text>
                  </Flex>
                </Flex>
                <Button
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    width: "216px",
                    height: "64px",
                    marginTop: "20px",
                    borderRadius: "0",
                    "&:before": {
                      content: "''",
                      background:
                        "url(/images/mint/btn-mint-border-left.webp) no-repeat",
                      width: "12px",
                      height: "64px",
                      backgroundSize: "cover",
                      position: "absolute",
                      left: "-12px",
                    },
                    "&:after": {
                      content: "''",
                      background:
                        "url(/images/mint/btn-mint-border-right.webp) no-repeat",
                      width: "12px",
                      height: "64px",
                      backgroundSize: "cover",
                      position: "absolute",
                      right: "-12px",
                    },
                  }}
                  backgroundSize="cover"
                  _hover={{ backgroundColor: "black" }}
                  _active={{ backgroundColor: "black" }}
                  textStyle="DidactGothic"
                  fontSize="30px"
                  fontWeight="400"
                  onClick={() => setCurrentState(mintingStages.inProcess)}
                >
                  MINT
                </Button>
              </Flex>
            )}
            {currentState === mintingStages.inProcess && (
              <Flex
                flexDir="column"
                alignItems="center"
                h="90%"
                justifyContent="center"
              >
                <style jsx>{`
                  @keyframes dotFlashing {
                    0% {
                      background-color: #000;
                    }
                    50%,
                    100% {
                      background-color: #6a6a6a;
                    }
                  }
                `}</style>
                <Text
                  w="635px"
                  textStyle="PlayfairDisplayMedium"
                  textAlign="center"
                  fontSize="72px"
                  fontWeight="400"
                  lineHeight="100%"
                  color="black"
                  pos="relative"
                >
                  <span>Transaction in process</span>
                  <Box as="span" px="20px" pos="absolute" bottom="5px">
                    <Box
                      as="span"
                      sx={{
                        position: "relative",
                        width: "10px",
                        height: "10px",
                        borderRadius: "5px",
                        backgroundColor: "#000",
                        color: "#000",
                        display: "block",
                        animation: "dotFlashing 0.6s infinite linear alternate",
                        animationDelay: "0.3s",
                        "&:before, &:after": {
                          content: "''",
                          display: "inline-block",
                          position: "absolute",
                          top: 0,
                        },
                        "&:before": {
                          left: "-15px",
                          width: "10px",
                          height: "10px",
                          borderRadius: "5px",
                          backgroundColor: "#000",
                          color: "#000",
                          animation:
                            "dotFlashing 0.6s infinite linear alternate",
                          animationDelay: "0s",
                        },
                        "&:after": {
                          left: "15px",
                          width: "10px",
                          height: "10px",
                          borderRadius: "5px",
                          backgroundColor: "#000",
                          color: "#000",
                          animation:
                            "dotFlashing 0.6s infinite linear alternate",
                          animationDelay: "0.6s",
                        },
                      }}
                    />
                  </Box>
                </Text>
              </Flex>
            )}
          </Box>
        </Flex>
      </Container>
      <ReactAudioPlayer
        ref={audioRef}
        listenInterval={1000}
        src="/images/match.mp3"
        controls={false}
        style={{ visibility: "hidden" }}
      />
    </MintLayout>
  );
}
