import { Text, Container, Flex, Box, Button } from "@chakra-ui/react";

import { mintStages } from "./constants";

import MintLayout from "./MintLayout";

export default function WhitelistedSection({
  handleMute,
  isMuted,
  setStage,
}): React.ReactElement {
  return (
    <MintLayout
      handleMute={handleMute}
      isMuted={isMuted}
      stage={mintStages.whitelisted}
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
                <Text
                  fontSize="18px"
                  textStyle="DidactGothic"
                  w="258px"
                  align="center"
                  lineHeight="140%"
                  mt="60px"
                >
                  Your Wallet are
                </Text>
              </Flex>
              <Text
                textStyle="PlayfairDisplayMedium"
                textAlign="center"
                fontSize="100px"
                fontWeight="400"
                lineHeight="133px"
                color="black"
                mt="30px"
              >
                Whitelisted
              </Text>
              <Text fontSize="24px" textStyle="DidactGothic" align="center">
                Congrats! You can mint now!
              </Text>
              <Button
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  width: "388px",
                  height: "64px",
                  marginTop: "60px",
                }}
                bg="url(/images/mint/mint-black-button-288.png) no-repeat"
                backgroundSize="cover"
                _hover={{ backgroundColor: "transparent" }}
                _active={{ backgroundColor: "transparent" }}
                textStyle="DidactGothic"
                fontSize="30px"
                fontWeight="400"
                onClick={() => setStage(mintStages.mint)}
              >
                TRANSCEND TO THE VAULT
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </MintLayout>
  );
}
