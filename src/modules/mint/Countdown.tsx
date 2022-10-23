import { Text, Container, Flex, Box, Button } from "@chakra-ui/react";
import { add, set } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import enGB from "date-fns/locale/en-GB";

import Countdown from "react-countdown";
import { mintStages } from "./constants";

import MintLayout from "./MintLayout";

export default function CountdownSection({
  handleMute,
  isMuted,
  setStage,
}): React.ReactElement {
  const currentDate = new Date();
  const OPEN_DATE = set(add(currentDate, { days: 7 }), {
    hours: 18,
    minutes: 0,
  });
  return (
    <MintLayout
      handleMute={handleMute}
      isMuted={isMuted}
      stage={mintStages.countdown}
    >
      <Container w="100%" maxW="1440px">
        <Flex
          flexDir="column"
          gap="51px"
          w="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w="866px"
            h="502px"
            bg="url(/images/mint/bg-gate-top-small.png) no-repeat"
            backgroundSize="cover"
            py="70px"
            color="black"
          >
            <Flex flexDir="column" alignItems="center">
              <Flex flexDir="column" gap="8px" alignItems="center">
                <Text fontSize="30px" textStyle="DidactGothic">
                  Gate Open
                </Text>
                <Text fontSize="18px" textStyle="DidactGothic">
                  {formatInTimeZone(
                    OPEN_DATE,
                    "Europe/London",
                    "MMMM d, haa zz",
                    {
                      locale: enGB,
                    }
                  )}
                </Text>
              </Flex>
              <Text
                textStyle="PlayfairDisplayMedium"
                textAlign="center"
                color="black"
                fontSize="100px"
                fontWeight={400}
                lineHeight="133px"
              >
                <Countdown
                  date={OPEN_DATE}
                  renderer={({ days, completed }) => {
                    if (completed) {
                      setStage(mintStages.available);
                    } else {
                      return <span>{days} Days</span>;
                    }
                  }}
                />
              </Text>
              <Box w="200px">
                <Text
                  fontSize="18px"
                  textStyle="DidactGothic"
                  align="center"
                  mt="20px"
                >
                  <Countdown
                    date={OPEN_DATE}
                    renderer={({ hours, minutes, seconds, completed }) => (
                      <span>
                        {hours} hours {minutes} minutes <br />
                        {seconds} seconds
                      </span>
                    )}
                  />
                </Text>
              </Box>
            </Flex>
          </Box>
          <Flex
            w="646px"
            h="240px"
            bg="url(/images/mint/bg-gate-bottom.png) no-repeat"
            backgroundSize="cover"
            py="57px"
            flexDirection="column"
            gap="20px"
            alignItems="center"
          >
            <Text
              fontSize="30px"
              textStyle="DidactGothic"
              align="center"
              color="white"
            >
              Connect your wallet to check eligibility
            </Text>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "black",
                width: "237px",
                height: "64px",
              }}
              bg="url(/images/mint/bg-button.svg) no-repeat"
              backgroundSize="cover"
              _hover={{ backgroundColor: "transparent" }}
              _active={{ backgroundColor: "transparent" }}
              textStyle="DidactGothic"
              fontSize="30px"
              fontWeight="400"
              onClick={() => setStage(mintStages.available)}
            >
              Connect Wallet
            </Button>
          </Flex>
        </Flex>
      </Container>
    </MintLayout>
  );
}
