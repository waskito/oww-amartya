import { Text, Container, Flex, Box, Button } from "@chakra-ui/react";

import { mintStages } from "./constants";

import MintLayout from "./MintLayout";

export default function MintedSection({
  total,
  handleMute,
  isMuted,
  setStage,
}): React.ReactElement {
  return (
    <MintLayout
      handleMute={handleMute}
      isMuted={isMuted}
      stage={mintStages.minted}
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
            <Flex
              flexDir="column"
              alignItems="center"
              h="100%"
              py="70px"
              gap="40px"
            >
              <Text
                fontSize="30px"
                textStyle="DidactGothic"
                w="258px"
                align="center"
                lineHeight="140%"
                mt="69px"
              >
                Congratulations!
              </Text>
              <Flex flexDir="column" gap="20px">
                <Text
                  textStyle="PlayfairDisplayMedium"
                  textAlign="center"
                  fontSize="56px"
                  fontWeight="400"
                  lineHeight={1}
                  color="black"
                >
                  {total} Amartya Minted
                </Text>
                <Text fontSize="18px" textStyle="DidactGothic" align="center">
                  Stay tuned to reveal your Amartyas
                </Text>
              </Flex>
              <Flex
                flexDir="row"
                alignItems="center"
                gap="32px"
                justifyContent="center"
                mt="18px"
              >
                <Button
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    width: "216px",
                    height: "64px",
                    marginTop: "20px",
                    borderRadius: "0",
                    "&:before": {
                      content: "''",
                      background:
                        "url(/images/mint/btn-mint-border-left.webp) no-repeat",
                      width: "12px",
                      height: "64px",
                      backgroundSize: "cover",
                      position: "absolute",
                      left: "-12px",
                    },
                    "&:after": {
                      content: "''",
                      background:
                        "url(/images/mint/btn-mint-border-right.webp) no-repeat",
                      width: "12px",
                      height: "64px",
                      backgroundSize: "cover",
                      position: "absolute",
                      right: "-12px",
                    },
                  }}
                  backgroundSize="cover"
                  _hover={{ backgroundColor: "black" }}
                  _active={{ backgroundColor: "black" }}
                  textStyle="DidactGothic"
                  fontSize="30px"
                  fontWeight="400"
                  onClick={() => setStage(mintStages.mintFailed)}
                >
                  MINT AGAIN
                </Button>
                <Button
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    width: "216px",
                    height: "64px",
                    marginTop: "20px",
                    borderRadius: "0",
                    "&:before": {
                      content: "''",
                      background:
                        "url(/images/mint/btn-mint-border-left.webp) no-repeat",
                      width: "12px",
                      height: "64px",
                      backgroundSize: "cover",
                      position: "absolute",
                      left: "-12px",
                    },
                    "&:after": {
                      content: "''",
                      background:
                        "url(/images/mint/btn-mint-border-right.webp) no-repeat",
                      width: "12px",
                      height: "64px",
                      backgroundSize: "cover",
                      position: "absolute",
                      right: "-12px",
                    },
                  }}
                  backgroundSize="cover"
                  _hover={{ backgroundColor: "black" }}
                  _active={{ backgroundColor: "black" }}
                  textStyle="DidactGothic"
                  fontSize="30px"
                  fontWeight="400"
                  onClick={() => setStage(mintStages.mintFailed)}
                >
                  OPENSEA
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </MintLayout>
  );
}
