import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Button, Image, Box, Text, Container } from "@chakra-ui/react";

import { Mute, Unmute } from "components/Icons";

import NavBarPage from "components/section/navbar-page";

const TheJourney: React.FC = () => {
  const btnRef = React.useRef();
  const [isMuted, setMuted] = useState(false);

  const handleMute = () => {
    setMuted(!isMuted);
  };

  const [state, setState] = useState("type1");

  const toggle = (value) => {
    setState(value);
  };

  return (
    <Box>
      <NavBarPage />

      <Box
        mx="auto"
        w="100%"
        h="100vh"
        display="flex"
        justifyContent="center"
        alignItems="end"
        bg="black"
        backgroundImage="url('/images/journey-bg.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="100% 100%"
      >
        <Container w="100%" maxW="100vw" h="100vh">
          <Box
            w="100%"
            h="100vh"
            ml="0px"
            display="flex"
            justifyContent="center"
            alignItems="end"
          >
            <Box w="100vw" overflowX="auto" pb="140px">
              <Box
                display="flex"
                ml="10vw"
                flexDirection="row"
                w="100vw"
                justifyItems="center"
                alignItems="center"
              >
                <Box
                  h="623px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box w="420px" h="600px">
                    <Box
                      pos="absolute"
                      display="flex"
                      flexDirection="column"
                      justifyItems="start"
                      bottom={280}
                      zIndex="0"
                    >
                      <Text fontSize="72px" lineHeight="120%">
                        The
                      </Text>
                      <Text fontSize="72px" lineHeight="120%">
                        Journey
                      </Text>
                    </Box>
                  </Box>

                  <Box
                    pos="relative"
                    zIndex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    maxW="100vw"
                    w="100%"
                  >
                    <Box
                      pos="absolute"
                      ml="0px"
                      zIndex="-1"
                      bg="white"
                      h="2px"
                      w="100%"
                    ></Box>
                    <Box
                      h="32px"
                      w="32px"
                      bg={"white"}
                      borderRadius="100%"
                    ></Box>
                    <Box
                      h="10px"
                      w="10px"
                      bg={"transparent"}
                      border="3px solid transparent"
                      borderRadius="100%"
                    ></Box>
                  </Box>
                </Box>

                <Box
                  h="623px"
                  pos="relative"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="start"
                >
                  <Box pos="relative" w="420px" h="500px" mx="10px">
                    {state === "type1" && (
                      <Box
                        pos="relative"
                        px="70px"
                        py="90px"
                        w="420px"
                        h="600px"
                        backgroundImage="url('/images/tab-bg.png')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                      >
                        <Text
                          fontSize="18px"
                          textStyle="DidactGothic"
                          textShadow="0px 0px 50px #000000"
                        >
                          1st Collection:
                        </Text>
                        <Text
                          fontSize="32px"
                          textStyle="PlayfairDisplayMedium"
                          mt="8px"
                          mb="16px"
                          textShadow="0px 0px 50px #000000"
                        >
                          The Amartya
                        </Text>
                        <Text mb="10px">
                          “The Amartyas are in a commotion. These nine Gods who
                          guard the balance of nature did not expect any of them
                          to break a forbidden act.”
                        </Text>
                        <Text>
                          The first collection consists of 9 main traits, the
                          Amartya themselves with sacred patterns as the
                          elements of these characters.
                        </Text>
                      </Box>
                    )}
                  </Box>

                  <Box
                    pos="relative"
                    zIndex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    maxW="100vw"
                    w="100%"
                  >
                    <Box
                      pos="absolute"
                      ml="0px"
                      zIndex="-1"
                      bg="white"
                      h="2px"
                      w="100%"
                    ></Box>
                    {/* <Box h="32px" w="32px" bg={"transparent"} borderRadius="100%"></Box> */}
                    <Box
                      h="10px"
                      w="10px"
                      bg={"transparent"}
                      border="3px solid transparent"
                      borderRadius="100%"
                    ></Box>
                    <Button
                      onClick={() => toggle("type1")}
                      h="32px"
                      w="32px"
                      p="0"
                      borderRadius="100%"
                      _focus={{ boxShadow: "transparant" }}
                      _hover={{
                        bg: "url('/images/icons/_selected-journey.svg') no-repeat center",
                      }}
                    >
                      {state === "type1" ? (
                        <Box
                          h="32px"
                          w="32px"
                          bg="url('/images/icons/_selected-journey.svg') no-repeat center"
                          borderRadius="100%"
                        ></Box>
                      ) : (
                        <Box
                          h="10px"
                          w="10px"
                          bg={"transparent"}
                          border="3px solid white"
                          borderRadius="100%"
                        ></Box>
                      )}
                    </Button>
                  </Box>
                </Box>

                <Box
                  h="623px"
                  pos="relative"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box pos="relative" w="420px" h="500px" mx="10px">
                    {state === "type2" && (
                      <Box
                        pos="relative"
                        px="70px"
                        py="90px"
                        w="420px"
                        h="600px"
                        backgroundImage="url('/images/tab-bg.png')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                      >
                        <Text
                          fontSize="18px"
                          textStyle="DidactGothic"
                          textShadow="0px 0px 50px #000000"
                        >
                          2st Collection:
                        </Text>
                        <Text
                          fontSize="32px"
                          textStyle="PlayfairDisplayMedium"
                          mt="8px"
                          mb="16px"
                          textShadow="0px 0px 50px #000000"
                        >
                          The Sacred Pattern
                        </Text>
                        <Text mb="10px">
                          “The descent of the vault impacted human lives. A
                          different time, a different vault, and another Amartya
                          appears to intervene with their own unique elements.”
                        </Text>
                        <Text>
                          Holders of the first collection can claim the second
                          collection. Second collection will be the sacred
                          patterns that have the Amartya’s elements its pattern.{" "}
                        </Text>
                      </Box>
                    )}
                  </Box>

                  <Box
                    pos="relative"
                    zIndex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    maxW="100vw"
                    w="100%"
                  >
                    <Box
                      pos="absolute"
                      ml="0px"
                      zIndex="-1"
                      bg="white"
                      h="2px"
                      w="100%"
                    ></Box>
                    {/* <Box h="32px" w="32px" bg={"transparent"} borderRadius="100%"></Box> */}
                    <Box
                      h="10px"
                      w="10px"
                      bg={"transparent"}
                      border="3px solid transparent"
                      borderRadius="100%"
                    ></Box>
                    <Button
                      onClick={() => toggle("type2")}
                      h="32px"
                      w="32px"
                      p="0"
                      borderRadius="100%"
                      _focus={{ boxShadow: "transparant" }}
                      _hover={{
                        bg: "url('/images/icons/_selected-journey.svg') no-repeat center",
                      }}
                    >
                      {state === "type2" ? (
                        <Box
                          h="32px"
                          w="32px"
                          bg="url('/images/icons/_selected-journey.svg') no-repeat center"
                          borderRadius="100%"
                        ></Box>
                      ) : (
                        <Box
                          h="10px"
                          w="10px"
                          bg={"transparent"}
                          border="3px solid white"
                          borderRadius="100%"
                        ></Box>
                      )}
                    </Button>
                  </Box>
                </Box>

                <Box
                  h="623px"
                  pos="relative"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box pos="relative" w="540px" h="500px" mx="10px">
                    {state === "type3" && (
                      <Box
                        pos="relative"
                        px="70px"
                        py="60px"
                        w="540px"
                        h="556px"
                        backgroundImage="url('/images/vault-bg.png')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                      >
                        <Text
                          fontSize="18px"
                          textStyle="DidactGothic"
                          textShadow="0px 0px 50px #000000"
                        >
                          Special Collection:
                        </Text>
                        <Text
                          fontSize="32px"
                          textStyle="PlayfairDisplayMedium"
                          mt="8px"
                          mb="16px"
                          textShadow="0px 0px 50px #000000"
                        >
                          Vault Gate is Now Open
                        </Text>
                        <Text mb="10px">
                          “The Amartya continues to observe the way humans deal
                          with the sacred patterns. Amartyas who side with
                          humans, believe that their good judgement will prevail
                          and that they will continue on the right path.
                          Meanwhile, Amartyas who lack faith in humans and side
                          with nature believe that in time all will be
                          exploited.”
                        </Text>
                        <Text>
                          We will release an NFT series in collaboration with
                          fellow web3 artists. Holders of Amartya project will
                          get the chance to claim this collaboration.
                        </Text>
                      </Box>
                    )}
                  </Box>

                  <Box
                    pos="relative"
                    zIndex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    maxW="100vw"
                    w="100%"
                  >
                    <Box
                      pos="absolute"
                      ml="0px"
                      zIndex="-1"
                      bg="white"
                      h="2px"
                      w="100%"
                    ></Box>
                    {/* <Box h="32px" w="32px" bg={"transparent"} borderRadius="100%"></Box> */}
                    <Box
                      h="10px"
                      w="10px"
                      bg={"transparent"}
                      border="3px solid transparent"
                      borderRadius="100%"
                    ></Box>
                    <Button
                      onClick={() => toggle("type3")}
                      h="32px"
                      w="32px"
                      p="0"
                      borderRadius="100%"
                      _focus={{ boxShadow: "transparant" }}
                      _hover={{
                        bg: "url('/images/icons/_selected-journey.svg') no-repeat center",
                      }}
                    >
                      {state === "type3" ? (
                        <Box
                          h="32px"
                          w="32px"
                          bg="url('/images/icons/_selected-journey.svg') no-repeat center"
                          borderRadius="100%"
                        ></Box>
                      ) : (
                        <Box
                          h="10px"
                          w="10px"
                          bg={"transparent"}
                          border="3px solid white"
                          borderRadius="100%"
                        ></Box>
                      )}
                    </Button>
                  </Box>
                </Box>

                <Box
                  h="623px"
                  pos="relative"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box pos="relative" w="420px" h="500px" mx="10px">
                    {state === "type4" && (
                      <Box
                        pos="relative"
                        px="70px"
                        py="90px"
                        w="399px"
                        h="399px"
                        backgroundImage="url('/images/vault-bg.png')"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                      >
                        <Text
                          fontSize="18px"
                          textStyle="DidactGothic"
                          textShadow="0px 0px 50px #000000"
                        >
                          Next step:
                        </Text>
                        <Text
                          fontSize="32px"
                          textStyle="PlayfairDisplayMedium"
                          mt="8px"
                          mb="16px"
                          textShadow="0px 0px 50px #000000"
                        >
                          Expanding Amartya
                        </Text>
                        <Text>
                          Expanding Amartya lore to other media like comic,
                          animation, and other medium.
                        </Text>
                      </Box>
                    )}
                  </Box>

                  <Box
                    pos="relative"
                    zIndex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    maxW="100vw"
                    w="100%"
                  >
                    <Box
                      pos="absolute"
                      ml="0px"
                      zIndex="-1"
                      bg="white"
                      h="2px"
                      w="100%"
                    ></Box>

                    <Box
                      h="10px"
                      w="10px"
                      bg={"transparent"}
                      border="3px solid transparent"
                      borderRadius="100%"
                    ></Box>
                    <Button
                      onClick={() => toggle("type4")}
                      h="32px"
                      w="32px"
                      p="0"
                      borderRadius="100%"
                      _focus={{ boxShadow: "transparant" }}
                      _hover={{
                        bg: "url('/images/icons/_selected-journey.svg') no-repeat center",
                      }}
                    >
                      {state === "type4" ? (
                        <Box
                          h="32px"
                          w="32px"
                          bg="url('/images/icons/_selected-journey.svg') no-repeat center"
                          borderRadius="100%"
                        ></Box>
                      ) : (
                        <Box
                          h="10px"
                          w="10px"
                          bg={"transparent"}
                          border="3px solid white"
                          borderRadius="100%"
                        ></Box>
                      )}
                    </Button>
                  </Box>
                </Box>

                <Box
                  h="590px"
                  pos="relative"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box pos="relative" w="420px" h="600px"></Box>
                  <Box
                    pos="relative"
                    zIndex="1"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    maxW="100vw"
                    w="100%"
                  >
                    <Box
                      pos="absolute"
                      ml="0px"
                      zIndex="-1"
                      bg="white"
                      h="2px"
                      w="100%"
                    ></Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Button
        bg="transparant"
        borderRadius="100%"
        zIndex={1}
        h="auto"
        w="auto"
        pos="fixed"
        bottom={"10px"}
        right={"10px"}
        onClick={handleMute}
        p="15px"
        _focus={{ boxShadow: "transparant" }}
      >
        {!isMuted ? (
          <Mute sx={{ width: 140, height: 140, color: "white" }} />
        ) : (
          <Unmute sx={{ width: 140, height: 140, color: "white" }} />
        )}
        {/* <Image h="auto" w='60px' src="/images/icons/white-wave.svg" /> */}
        <ReactAudioPlayer
          src="/images/music.wav"
          autoPlay
          controls={false}
          muted={isMuted}
          style={{ visibility: "hidden" }}
        />
      </Button>
    </Box>
  );
};

export default TheJourney;
