import * as React from "react";

import { AUDIO_MUTED_KEY } from "../../config";
import { getCookieFromServer } from "utils/cookies";
import TheJourney from "modules/homepage/thejourney";

interface Props {
  isMuted: boolean;
  handleMute: () => void;
}

const TheJourneyPage = ({ handleMute, isMuted }: Props) => (
  <TheJourney handleMute={handleMute} isMuted={isMuted} />
);

export async function getServerSideProps({ req }): Promise<any> {
  const muted = Boolean(getCookieFromServer(AUDIO_MUTED_KEY, req));
  return {
    props: {
      muted,
    },
  };
}

export default TheJourneyPage;
