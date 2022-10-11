import React, { useState, useRef, useEffect } from "react";
import { Box, Button, ScaleFade, SlideFade } from "@chakra-ui/react";
import Cookies from "js-cookie";
import ReactAudioPlayer from "react-audio-player";

import NavBar from "components/section/navbar";
import Hero from "components/section/hero";
import About from "components/section/about";
import Immortal from "components/section/immortal";
import Journey from "components/section/journey";
import Mint from "components/section/mint";
import Footer from "components/section/footer";
import Founder from "components/section/founder";
import Intro from "modules/intro/intro";
import { INTRO_COOKIE_NAME } from "../../../config";
import { getCookie } from "utils/cookies";
import { Mute, Unmute } from "components/Icons";

interface Props {
  intro: boolean;
}

const HomePage: React.FC<Props> = ({ intro }: Props) => {
  const audioRef = useRef(null);
  const cookieIntro = intro ? intro : getCookie(INTRO_COOKIE_NAME);
  const [isWatched, setWatched] = useState(cookieIntro);
  const [isMuted, setMuted] = useState(false);

  const handleWatched = () => {
    Cookies.set(INTRO_COOKIE_NAME, 1, { expires: 30 });
    setWatched(true);
  };

  useEffect(() => {
    if (isWatched) {
      const playerEl = audioRef as any;
      const player = playerEl?.current?.audioEl?.current;
      if (player) player.play();
    }
  }, [audioRef, isWatched]);

  const handleMute = () => {
    setMuted(!isMuted);
  };

  return (
    <>
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
          bg="#6A5A33 url('/images/bg-body-0.5.webp') repeat-y center/cover"
          objectFit="cover"
        />
        <ScaleFade initialScale={0.7} in={!isWatched} unmountOnExit>
          <Box className="introPage" pos="fixed" zIndex="1" w="100%">
            <Intro onWatchedCallback={handleWatched} />
          </Box>
        </ScaleFade>
        <SlideFade offsetY="100vh" in={isWatched} unmountOnExit>
          <Box className="landingPage" pos="relative" h="100vh" w="100%">
            <Box pos="absolute" w="100%" ml="auto" mr="auto" zIndex={-2}>
              <video
                style={{ marginLeft: "auto", marginRight: "auto" }}
                width="2000px"
                height="auto"
                autoPlay
                muted
                preload="auto"
                loop
              >
                <source src="images/kain loop_8mb.webm" type="video/webm" />
              </video>
            </Box>

            {/* hero */}
            <NavBar />
            <Hero />

            {/* section about */}
            <About />

            {/* section immortals */}
            <Immortal />

            {/* section the journey */}
            <Journey />

            {/* section mint amartya */}
            <Mint />

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
              <Mute sx={{ width: 140, height: 140, color: "black" }} />
            ) : (
              <Unmute sx={{ width: 140, height: 140, color: "black" }} />
            )}
            <ReactAudioPlayer
              ref={audioRef}
              key={isWatched ? "a" : "b"}
              src="/images/music.wav"
              controls={false}
              muted={isMuted}
              style={{ visibility: "hidden" }}
            />
          </Button>
        )}
      </Box>
    </>
  );
};

export default HomePage;
