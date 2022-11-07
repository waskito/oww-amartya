import { Text, Container, Flex, Box, Button } from "@chakra-ui/react";

import MintLayout from "./MintLayout";
import { mintStages } from "./constants";

const AVAILABLE_NFT = 2764;

export default function AvailableSection({
  handleMute,
  isMuted,
  setStage,
}): React.ReactElement {
  return (
    <MintLayout
      handleMute={handleMute}
      isMuted={isMuted}
      stage={mintStages.available}
    >
      <Container w="100%" maxW="1440px">
        <Flex
          flexDir="column"
          gap={{ base: "16px", xl: "51px" }}
          w="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w="866px"
            h="502px"
            bg="url(/images/mint/bg-gate-top-small.webp) no-repeat"
            backgroundSize="cover"
            pt="140px"
            color="black"
          >
            <Flex flexDir="column" alignItems="center">
              <Text
                textStyle="PlayfairDisplayMedium"
                textAlign="center"
                color="black"
                fontSize="100px"
                fontWeight={400}
                lineHeight="133px"
              >
                {AVAILABLE_NFT}
              </Text>
              <Box w="200px">
                <Text
                  fontSize="18px"
                  textStyle="DidactGothic"
                  align="center"
                  mt="20px"
                >
                  Amartya’s Citra Left
                </Text>
              </Box>
            </Flex>
          </Box>
          <Flex
            w="646px"
            h="240px"
            bg="url(/images/mint/bg-gate-bottom.webp) no-repeat"
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
              onClick={() => setStage(mintStages.connected)}
            >
              Connect Wallet
            </Button>
          </Flex>
        </Flex>
      </Container>
    </MintLayout>
  );
}
