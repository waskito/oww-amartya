import React, { useRef, useState, useEffect, useCallback } from "react";
import { NextAppProps } from "interfaces/next";
import ReactAudioPlayer from "react-audio-player";
import { Box } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { getCookie } from "utils/cookies";

import { INTRO_COOKIE_NAME } from "../../../config";
import { useRouter } from "next/router";

const AppLayout = ({ Component, pageProps }: NextAppProps) => {
  const audioRef = useRef(null);
  const router = useRouter();
  const cookieIntro = pageProps.intro
    ? pageProps.intro
    : getCookie(INTRO_COOKIE_NAME);
  const [isWatched, setWatched] = useState(cookieIntro);
  const [isPlayed, setIsPlayed] = useState(false);

  const handleWatched = () => {
    Cookies.set(INTRO_COOKIE_NAME, 1, { expires: 30 });
    setWatched(true);
  };
  const [isMuted, setMuted] = useState(false);
  const getLayout = Component?.layout ?? ((children: JSX.Element) => children);

  const handleMute = () => {
    if (!isPlayed) {
      initPlay();
      return;
    }
    setMuted(!isMuted);
  };

  const onPlayCallback = () => {
    setIsPlayed(true);
  };

  const initPlay = useCallback((): void => {
    const playerEl = audioRef as any;
    const player = playerEl?.current?.audioEl?.current;
    if (player) {
      player.play();
    }
  }, [audioRef]);

  useEffect(() => {
    if (router.pathname === "/") {
      if (isWatched && audioRef) initPlay();
    } else {
      if (audioRef) initPlay();
    }
  }, [router, isWatched, audioRef]);

  const page = getLayout(
    <Box>
      <Component
        {...pageProps}
        handleMute={handleMute}
        isMuted={isMuted || !isPlayed}
        isWatched={isWatched}
        handleWatched={handleWatched}
      />
      <ReactAudioPlayer
        ref={audioRef}
        key={isWatched ? "introWatched" : "introNotWatched"}
        listenInterval={1000}
        src="/images/music.wav"
        controls={false}
        muted={isMuted}
        style={{ visibility: "hidden" }}
        loop={true}
        autoPlay={isWatched}
        onPlay={onPlayCallback}
      />
    </Box>
  );
  return page;
};

export default AppLayout;
