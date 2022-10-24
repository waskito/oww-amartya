import { Text, Container, Flex, Box } from "@chakra-ui/react";
import { mintStages } from "./constants";

import MintLayout from "./MintLayout";

export default function SoldOutSection({
  handleMute,
  isMuted,
  setStage,
}): React.ReactElement {
  return (
    <MintLayout
      handleMute={handleMute}
      isMuted={isMuted}
      stage={mintStages.soldOut}
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
            bg="url(/images/mint/bg-gate-top-small.webp) no-repeat"
            backgroundSize="cover"
            py="70px"
            color="black"
            onClick={() => setStage(mintStages.countdown)}
          >
            <Flex
              flexDir="column"
              alignItems="center"
              gap="20px"
              height="90%"
              justifyContent="center"
            >
              <Text
                textStyle="PlayfairDisplayMedium"
                textAlign="center"
                color="black"
                fontSize="100px"
                fontWeight={400}
                lineHeight="133px"
              >
                Sold Out
              </Text>
              <Text fontSize="18px" textStyle="DidactGothic" align="center">
                Gate Closed
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </MintLayout>
  );
}
