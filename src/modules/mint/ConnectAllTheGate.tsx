import { Text, Container, Flex, Box, Button, Fade } from "@chakra-ui/react";

import { mintStages } from "./constants";

import MintLayout from "./MintLayout";
import Gates from "./SVG/Gates";

export default function ConnectAllTheGate({
  handleMute,
  isMuted,
  setStage,
}): React.ReactElement {
  return (
    <MintLayout
      handleMute={handleMute}
      isMuted={isMuted}
      stage={mintStages.connectAllGate}
    >
      <Container w="100%" maxW="1440px">
        <Flex
          w="754px"
          h="746px"
          pos="relative"
          justifyContent="center"
          alignItems="center"
        >
          <Fade in>
            <Box w="754px" h="746px" pos="absolute" top="0" left="0">
              <Gates />
            </Box>
          </Fade>
          <Fade in>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "black",
                width: "108px",
                height: "108px",
              }}
              mt="10px"
              _hover={{ backgroundColor: "transparent" }}
              _active={{ backgroundColor: "transparent" }}
              fontSize="30px"
              fontWeight="400"
              lineHeight="80%"
              onClick={() => setStage(mintStages.allGateLoading)}
            >
              Connect
              <br />
              All The
              <br />
              Gate
            </Button>
          </Fade>
        </Flex>
      </Container>
    </MintLayout>
  );
}
