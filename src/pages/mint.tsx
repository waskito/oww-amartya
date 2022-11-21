import { useState } from "react";

import { AUDIO_MUTED_KEY } from "../../config";
import { getCookieFromServer } from "utils/cookies";

import { mintStages } from "modules/mint/constants";
import MintMainComponent from "modules/mint";
import Head from "next/head";

interface Props {
  isMuted: boolean;
  handleMute: () => void;
}

const MintPage = ({ handleMute, isMuted }: Props) => {
  const [stage, setStage] = useState(mintStages.countdown);
  return (
    <>
      <Head>
        <title>Mint - Amartya</title>
        <link
          rel="preload"
          as="image"
          href="/images/mint/bg-mint-stage-1.webp"
          key="bg_mint_1"
        />
        <link
          rel="preload"
          as="image"
          href="/images/mint/bg-mint-stage-2.webp"
          key="bg_mint_2"
        />
        <link
          rel="preload"
          as="image"
          href="/images/mint/bg-gate-top-small.webp"
          key="bg_gate_top_small"
        />
        <link
          rel="preload"
          as="image"
          href="/images/mint/bg-gate-top-big.webp"
          key="bg_gate_top_big"
        />
        <link
          rel="preload"
          as="image"
          href="/images/mint/bg-gate-bottom.webp"
          key="bg_gate_bottom"
        />
        <link
          rel="preload"
          as="image"
          href="/images/mint/mint-black-button-288.webp"
          key="bg_black_button"
        />
        <link
          rel="preload"
          as="image"
          href="/images/mint/gateneutral.webp"
          key="gate_neutral"
        />
      </Head>
      <MintMainComponent
        isMuted={isMuted}
        handleMute={handleMute}
        stage={stage}
        setStage={(newStage) => setStage(newStage)}
      />
    </>
  );
};

export async function getServerSideProps({ req }): Promise<any> {
  const muted = Boolean(getCookieFromServer(AUDIO_MUTED_KEY, req));
  return {
    props: {
      muted,
    },
  };
}

export default MintPage;
