import React, { useState } from "react";
import { Box, Button, ScaleFade, Fade, SlideFade } from "@chakra-ui/react";
import sleep from "sleep-promise";

import NavBar from "components/section/navbar";
import Hero from "components/section/hero";
import About from "components/section/about";
import Immortal from "components/section/immortal";
import Journey from "components/section/journey";
import Mint from "components/section/mint";
import Footer from "components/section/footer";
import Founder from "components/section/founder";
import Intro from "modules/intro/intro";
import { Mute, Unmute } from "components/Icons";
interface Props {
  intro: boolean;
  isMuted: boolean;
  handleMute: () => void;
  isWatched: boolean;
  handleWatched: () => void;
}

const HomePage: React.FC<Props> = ({
  intro,
  isMuted,
  handleMute,
  isWatched,
  handleWatched,
}: Props) => {
  const [heroIntro, setHeroIntro] = useState(true);
  const [heroLoop, setHeroLoop] = useState(false);

  const handleKainIntro = async (): Promise<void> => {
    if (heroLoop) return;
    setHeroLoop(true);
    await sleep(3 * 100);
    setHeroIntro(false);
  };

  return (
    <>
      <SlideFade offsetY="-20px" in={isWatched} unmountOnExit>
        <NavBar isMuted={isMuted} handleMute={handleMute} />
      </SlideFade>
      <Box
        className="home-page"
        w="100%"
        pos="relative"
        display="flex"
        flexDirection="column"
      >
        <Box
          pos="fixed"
          w="100vw"
          h="100vh"
          bg="#6A5A33 url('/images/bg-body.webp') repeat-y center/cover"
          objectFit="cover"
        />
        <ScaleFade initialScale={0.7} in={!isWatched} unmountOnExit>
          <Box className="introPage" pos="fixed" zIndex="1" w="100%">
            <Intro onWatchedCallback={handleWatched} />
          </Box>
        </ScaleFade>
        <SlideFade offsetY="100vh" in={isWatched} unmountOnExit>
          <Box className="landingPage" pos="relative" h="100vh" w="100%">
            <Box
              as={Fade}
              in={heroIntro}
              unmountOnExit
              pos="absolute"
              w="100%"
              ml="auto"
              mr="auto"
              zIndex={-2}
            >
              <video
                style={{ marginLeft: "auto", marginRight: "auto" }}
                width="2000px"
                height="auto"
                autoPlay
                muted
                preload="auto"
                onEnded={() => handleKainIntro()}
              >
                <source src="/images/kain-opening.webm" type="video/webm" />
              </video>
            </Box>
            <Box
              as={Fade}
              in={heroLoop}
              unmountOnExit
              pos="absolute"
              w="100%"
              ml="auto"
              mr="auto"
              zIndex={-1}
            >
              <video
                style={{ marginLeft: "auto", marginRight: "auto" }}
                width="2000px"
                height="auto"
                autoPlay
                muted
                preload="auto"
                loop
              >
                <source src="/images/kain-loop.webm" type="video/webm" />
              </video>
            </Box>

            {/* hero */}

            <Hero />

            {/* section about */}
            <About />

            {/* section immortals */}
            <Immortal />

            {/* section the journey */}
            <Journey />

            {/* section mint amartya */}
            {/* <Mint /> */}

            {/* section footer */}
            <Founder />

            {/* section footer */}
            <Footer />
          </Box>
        </SlideFade>
        {isWatched && (
          <Button
            bg="transparant"
            borderRadius="100%"
            zIndex={1}
            h={140}
            w={140}
            pos="fixed"
            bottom={50}
            right={50}
            onClick={handleMute}
          >
            {!isMuted ? (
              <Mute sx={{ width: "100px", height: "100px", color: "black" }} />
            ) : (
              <Unmute
                sx={{ width: "100px", height: "100px", color: "black" }}
              />
            )}
          </Button>
        )}
      </Box>
    </>
  );
};

export default HomePage;
