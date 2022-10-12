import * as React from "react";

import { AUDIO_MUTED_KEY } from "../../config";
import { getCookieFromServer } from "utils/cookies";
import Thenineimmortals from "modules/homepage/thenineimmortals";

interface Props {
  isMuted: boolean;
  handleMute: () => void;
}

const TheNineImmortalsPage = ({ handleMute, isMuted }: Props) => (
  <Thenineimmortals handleMute={handleMute} isMuted={isMuted} />
);

export async function getServerSideProps({ req }): Promise<any> {
  const muted = Boolean(getCookieFromServer(AUDIO_MUTED_KEY, req));
  return {
    props: {
      muted,
    },
  };
}

export default TheNineImmortalsPage;
