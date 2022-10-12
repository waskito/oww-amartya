import React, { useRef, useState, useEffect, useCallback } from "react";
import { NextAppProps } from "interfaces/next";
import ReactAudioPlayer from "react-audio-player";
import { Box } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { getCookie } from "utils/cookies";

import { INTRO_COOKIE_NAME, AUDIO_MUTED_KEY } from "../../../config";
import { useRouter } from "next/router";
import { cloneDeep } from "lodash";

const AppLayout = ({ Component, pageProps }: NextAppProps) => {
  const audioRef = useRef(null);
  const router = useRouter();
  const cookieIntro = pageProps.intro
    ? pageProps.intro
    : getCookie(INTRO_COOKIE_NAME);
  const cookieMuted = pageProps.muted
    ? pageProps.muted
    : getCookie(AUDIO_MUTED_KEY);
  const [isWatched, setWatched] = useState(cookieIntro);
  const [isPlayed, setIsPlayed] = useState(false);

  const handleWatched = () => {
    Cookies.set(INTRO_COOKIE_NAME, 1, { expires: 30 });
    setWatched(true);
  };
  const [isMuted, setMuted] = useState(cookieMuted);
  const getLayout = Component?.layout ?? ((children: JSX.Element) => children);

  const handleMute = () => {
    if (!isPlayed) {
      initPlay();
    }
    setMuted(!isMuted);
    Cookies.set(AUDIO_MUTED_KEY, !isMuted, { expires: 30 });
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
    setIsPlayed(true);
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
        isMuted={isMuted}
        isWatched={isWatched}
        handleWatched={handleWatched}
      />
      <ReactAudioPlayer
        ref={audioRef}
        key={isWatched ? "watched" : "notWatched"}
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
