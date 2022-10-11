import React, { useEffect, useState } from "react";
import sleep from "sleep-promise";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Container,
  TagLeftIcon,
  ScaleFade,
  SlideFade,
  Fade,
} from "@chakra-ui/react";
import { useAccount, useWallet } from "hooks";
import { motion } from "framer-motion";
import videojs from "video.js";
import VREPlayer from "videojs-react-enhanced";
import CountUp from "react-countup";

// section
import NavBar from "components/section/navbar";

// import Kain from '../../../public/images/kain-full-loop-at-3s.mp4';

const HEROES = {
  BUTTON: "BUTTON",
  TEXT: "TEXT",
  TEXT_TITLE: "TEXT_TITLE",
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
};

interface Props {
  onWatchedCallback: () => void;
}

const IntroPage: React.FC<Props> = ({ onWatchedCallback }: Props) => {
  // const { openWallet } = useWallet();
  // const { account } = useAccount();
  const [currentHero, setCurrentHero] = useState(HEROES.BUTTON);
  const [isLoaded, setLoaded] = useState(false);

  const options: VREPlayer.IPlayerOptions = {
    src: "https://user-images.githubusercontent.com/4341116/194508188-9af74b13-0c8b-40b9-b941-ded924510acc.mp4",
    controls: false,
    autoplay: "play",
  };

  const videojsOptions = {
    fluid: false,
  };

  const handleEnterRealm = async () => {
    setCurrentHero(HEROES.TEXT);
    await sleep(1 * 1000);
    setCurrentHero(HEROES.TEXT_TITLE);
    await sleep(4 * 1000);
    setCurrentHero(HEROES.IMAGE);
    await sleep(3 * 1000);
    setCurrentHero(HEROES.VIDEO);
  };

  return (
    <>
      <Box
        pos="relative"
        className="intro-page"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100vh"
        w="100vw"
        style={{
          background:
            currentHero === HEROES.IMAGE
              ? "url('/images/bg-hero-image.webp') no-repeat cover"
              : "url('/images/bg-body-0.5.webp') repeat-y cover",
        }}
      >
        <Flex
          id="container"
          pos="absolute"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <ScaleFade
            initialScale={0.6}
            in={currentHero === HEROES.BUTTON}
            unmountOnExit
          >
            <Flex
              h="280px"
              w="610px"
              bg="url('/images/ornament-mint.svg') no-repeat center"
              alignItems="center"
              justifyContent="center"
              pos="relative"
            >
              <Box
                pos="absolute"
                w="840px"
                h="840px"
                bg="url('/images/star-ornament.svg') no-repeat center"
                opacity={0.25}
                top="auto"
                right="auto"
                left="auto"
              />
              <Button
                disabled={!isLoaded}
                h="75px"
                w="410px"
                bg="transparant"
                _active={{
                  boxShadow: "transparant",
                  background: "transparent",
                }}
                _focus={{ boxShadow: "transparant", background: "transparent" }}
                _hover={{
                  background: "transparant",
                }}
                _disabled={{
                  color: "white",
                  opacity: 1,
                  cursor: "not-allowed",
                }}
                onClick={() => handleEnterRealm()}
              >
                <Text
                  fontSize="xxl"
                  textStyle="PlayfairDisplayMedium"
                  textShadow="0px 0px 50px #000000"
                >
                  {isLoaded ? (
                    "Enter Realm"
                  ) : (
                    <Flex
                      alignItems="center"
                      flexDirection="row"
                      justifyContent="flex-end"
                      gap="8px"
                      w="168px"
                    >
                      <CountUp
                        start={0}
                        end={100}
                        duration={7}
                        onEnd={() => setLoaded(true)}
                      />
                      <span>%</span>
                    </Flex>
                  )}
                </Text>
              </Button>
            </Flex>
          </ScaleFade>

          <ScaleFade
            initialScale={0.6}
            in={[HEROES.TEXT, HEROES.TEXT_TITLE].includes(currentHero)}
            unmountOnExit
          >
            <Flex alignItems="center" justifyContent="center" pos="relative">
              <Box
                pos="absolute"
                w="840px"
                h="840px"
                bg="url('/images/star-ornament.svg') no-repeat center"
                opacity={0.25}
                top="calc(50% - 420px)"
                left="calc(50% - 420px)"
                right="auto"
              />
              <SlideFade
                offsetY={"30px"}
                in={currentHero === HEROES.TEXT_TITLE}
              >
                <Text
                  fontSize="xxl"
                  textStyle="PlayfairDisplayMedium"
                  textAlign="center"
                  textShadow="0px 0px 50px #000000"
                  zIndex={10}
                >
                  Sura Dira Jayaningrat Lebur dening Pangastuti
                </Text>
              </SlideFade>
            </Flex>
          </ScaleFade>
          <ScaleFade
            initialScale={0.6}
            in={currentHero === HEROES.IMAGE}
            unmountOnExit
          >
            <Flex
              pos="absolute"
              bg="black"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              h="100%"
              w="100%"
            >
              <Flex pos="absolute" alignItems="center" justifyContent="center">
                <Box
                  pos="absolute"
                  w="800px"
                  h="800px"
                  bg="url('/images/logo-amartya-white-intro.png') no-repeat center"
                  top="auto"
                  left="auto"
                />
              </Flex>
            </Flex>
          </ScaleFade>
        </Flex>
        {currentHero === HEROES.VIDEO && (
          //   <Flex
          //     pos="absolute"
          //     justifyContent="center"
          //     alignItems="center"
          //     flexDirection="column"
          //     h="100%"
          //     w="100%"
          //   >
          <Box
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
              //   onReady={(player) => console.log(player)}
              //   onPlay={(e, _, second) => console.log("Play!")}
              //   onPause={(e, _, second) => console.log("Pause!")}
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
              <Image mt="10px" src="/images/icons/icon-more.svg" />
            </Button>
          </Box>
          //   </Flex>
        )}
      </Box>
    </>
  );
};

export default IntroPage;
