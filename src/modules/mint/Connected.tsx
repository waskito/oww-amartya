import { Text, Container, Flex, Box, Button } from "@chakra-ui/react";
import { add, set } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import enGB from "date-fns/locale/en-GB";

import { truncateMiddle } from "utils/text";

import MintLayout from "./MintLayout";
import { mintStages } from "./constants";

const NFT_AVAILABLE_TO_MINT = 3;
const WALLET_ADDRESS = "0x57B77cd735cEdD50A5E40e72866a2aAD95C99f38";

export default function ConnectedSection({
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
      stage={mintStages.connected}
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
            h="682px"
            bg="url(/images/mint/bg-gate-top-big.webp) no-repeat"
            backgroundSize="cover"
            color="black"
          >
            <Flex flexDir="column" alignItems="center" h="100%" py="70px">
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
                <Text
                  fontSize="18px"
                  textStyle="DidactGothic"
                  w="258px"
                  align="center"
                  mt="16px"
                >
                  YOUR WALLET ARE WHITELISTED! YOU CAN MINT
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
                {NFT_AVAILABLE_TO_MINT}
              </Text>
              <Box w="365px">
                <Text
                  fontSize="18px"
                  textStyle="DidactGothic"
                  align="center"
                  mt="25px"
                >
                  Congrats! You can mint during whitelist sale on <br />
                  {formatInTimeZone(
                    OPEN_DATE,
                    "Europe/London",
                    "d MMMM yyyy, haa zz",
                    {
                      locale: enGB,
                    }
                  )}
                </Text>
              </Box>
              <Button
                sx={{
                  backgroundColor: "transparent",
                  color: "black",
                  width: "237px",
                  height: "64px",
                  marginTop: "41px",
                }}
                bg="url(/images/mint/wallet-address-border.svg) no-repeat"
                backgroundSize="cover"
                _hover={{ backgroundColor: "transparent" }}
                _active={{ backgroundColor: "transparent" }}
                textStyle="DidactGothic"
                fontSize="30px"
                fontWeight="400"
                onClick={() => setStage(mintStages.whitelisted)}
              >
                {truncateMiddle(WALLET_ADDRESS, 13, "...", 4)}
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </MintLayout>
  );
}
