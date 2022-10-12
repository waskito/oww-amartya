import React, { useState, useEffect, useRef } from "react";
import NextLink from "next/link";
import {
  useDisclosure,
  Image,
  Box,
  Text,
  Flex,
  Container,
  Button,
} from "@chakra-ui/react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBarPage from "components/section/navbar-page";
import { Mute, Unmute } from "components/Icons";

function Prev(props) {
  const { onClick } = props;
  return (
    <Button
      bg="transparent"
      pos="absolute"
      borderRadius="100%"
      py="32px"
      ml="50px"
      mt="120px"
      zIndex={5}
      left={0}
      onClick={onClick}
    >
      <Image src="/images/icons/icon-prev-white.svg" />
    </Button>
  );
}

function Next(props) {
  const { onClick } = props;
  return (
    <Button
      bg="transparent"
      pos="absolute"
      borderRadius="100%"
      py="32px"
      mr="50px"
      mt="120px"
      zIndex={5}
      right={0}
      onClick={onClick}
    >
      <Image src="/images/icons/icon-next-white.svg" />
    </Button>
  );
}

const slickactive = {
  backgroundColor: "#000",
};

interface Props {
  isMuted: boolean;
  handleMute: () => void;
}

const Thenineimmortals: React.FC<Props> = ({ isMuted, handleMute }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 2000,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            margin: "0px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          {dots}
          <li className="slick-active"></li>
        </ul>
      </div>
    ),
  };

  return (
    <Box h="100vh" w="100vw" sx={{ overflow: "hidden" }}>
      <Container
        maxW="100vw"
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pos="relative"
      >
        <Box
          pos="absolute"
          zIndex={-2}
          w="100%"
          h="100vh"
          bg="#000"
          opacity="0.75"
          filter="auto"
          blur="200px"
          boxShadow="0px 0px 100px #000000"
        ></Box>
        <NavBarPage />

        <Box w="100%" maxW="100vw" h="100vh !important" pos="relative">
          <Slider {...settings}>
            {/* 1 */}
            <Flex
              display="flex !important"
              justifyContent="center"
              alignItems="flex-start"
              width="100%"
              h="100vh"
            >
              <Box pos="absolute" top="0px" h="100%" zIndex={0}>
                <Box
                  pos="absolute"
                  zIndex={1}
                  w="100%"
                  h="100vh"
                  bg="#000"
                  filter="auto"
                  opacity="0.5"
                  blur="0px"
                  boxShadow="0px 0px 100px #000000"
                ></Box>
                <Image
                  w="auto"
                  h="100%"
                  id="image"
                  src="/images/img-immortal-09.webp"
                />
              </Box>

              <Flex
                h="60vh"
                flexDirection="row"
                zIndex={2}
                justifyContent="space-between"
                alignItems="flex-start"
                width="100%"
                maxW="2000px"
                pr="4vw"
                pl="10vw"
                pt="160px"
              >
                <Flex flexDirection="column">
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Tara
                  </Text>
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Narawanta
                  </Text>
                  <Text
                    fontSize="30px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    (Tara)
                  </Text>
                </Flex>

                <Flex flexDirection="column" maxW="300px" w="100%">
                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Elements
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Stars, sun, universe, girl.
                    </Text>
                  </Box>

                  <Box my="24px">
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Personality
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Warm, polite, friendly.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Ideology
                    </Text>
                    <Text
                      w="300px"
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Believe that humans can change themselves to be better.
                      Will guide the human with full support and love.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
            {/* 2 */}
            <Flex
              display="flex !important"
              justifyContent="center"
              alignItems="flex-start"
              width="100%"
              h="100vh"
            >
              <Box pos="absolute" top="0px" h="100%" zIndex={0}>
                <Box
                  pos="absolute"
                  zIndex={1}
                  w="100%"
                  h="100vh"
                  bg="#000"
                  filter="auto"
                  opacity="0.5"
                  blur="90px"
                  boxShadow="0px 0px 100px #000000"
                ></Box>
                <Image
                  w="auto"
                  h="100%"
                  id="image"
                  src="/images/img-immortal-08.webp"
                />
              </Box>

              <Flex
                h="60vh"
                flexDirection="row"
                zIndex={2}
                justifyContent="space-between"
                alignItems="flex-start"
                width="100%"
                maxW="2000px"
                pr="4vw"
                pl="10vw"
                pt="160px"
              >
                <Flex flexDirection="column">
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Ishayu
                  </Text>
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Gaura
                  </Text>
                  <Text
                    fontSize="30px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    (Isha/Hayu)
                  </Text>
                </Flex>
                <Flex flexDirection="column" maxW="300px" w="100%">
                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Elements
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Two faces, wings, eyes.
                    </Text>
                  </Box>

                  <Box my="24px">
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Personality
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Antihero, selfish, sly, cunning, troublemaker.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Ideology
                    </Text>
                    <Text
                      w="300px"
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Will help human if there are benefits for Isha.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>

            {/* 3 */}
            <Flex
              display="flex !important"
              justifyContent="center"
              alignItems="flex-start"
              width="100%"
              h="100vh"
            >
              <Box pos="absolute" top="0px" h="100%" zIndex={0}>
                <Box
                  pos="absolute"
                  zIndex={1}
                  w="100%"
                  h="100vh"
                  bg="#000"
                  filter="auto"
                  opacity="0.5"
                  blur="90px"
                  boxShadow="0px 0px 100px #000000"
                ></Box>
                <Image
                  w="auto"
                  h="100%"
                  id="image"
                  src="/images/img-immortal-07.webp"
                />
              </Box>

              <Flex
                h="60vh"
                flexDirection="row"
                zIndex={2}
                justifyContent="space-between"
                alignItems="flex-start"
                width="100%"
                maxW="2000px"
                pr="4vw"
                pl="10vw"
                pt="160px"
              >
                <Flex flexDirection="column">
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Chandie
                  </Text>
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Minara
                  </Text>
                  <Text
                    fontSize="30px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    (Mina)
                  </Text>
                </Flex>
                <Flex flexDirection="column" maxW="300px" w="100%">
                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Elements
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Light, fire, burned, war, leeches, eel.
                    </Text>
                  </Box>

                  <Box my="24px">
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Personality
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Chaos, like to watch the world burn, strategist.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Ideology
                    </Text>
                    <Text
                      w="300px"
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      All the imbalance is the faults of humankind. I‘m just
                      here to watch them fail.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
            {/* 4 */}
            <Flex
              display="flex !important"
              justifyContent="center"
              alignItems="flex-start"
              width="100%"
              h="100vh"
            >
              <Box pos="absolute" top="0px" h="100%" zIndex={0}>
                <Box
                  pos="absolute"
                  zIndex={1}
                  w="100%"
                  h="100vh"
                  bg="#000"
                  filter="auto"
                  opacity="0.5"
                  blur="90px"
                  boxShadow="0px 0px 100px #000000"
                ></Box>
                <Image
                  w="auto"
                  h="100%"
                  id="image"
                  src="/images/img-immortal-06.webp"
                />
              </Box>

              <Flex
                h="60vh"
                flexDirection="row"
                zIndex={2}
                justifyContent="space-between"
                alignItems="flex-start"
                width="100%"
                maxW="2000px"
                pr="4vw"
                pl="10vw"
                pt="160px"
              >
                <Flex flexDirection="column">
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Sagara
                  </Text>
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Sakuntala
                  </Text>
                  <Text
                    fontSize="30px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    (Sagara)
                  </Text>
                </Flex>
                <Flex flexDirection="column" maxW="300px" w="100%">
                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Elements
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Water, cold, fog, rain, mountain, poetry.
                    </Text>
                  </Box>

                  <Box my="24px">
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Personality
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Cold heart, smart.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Ideology
                    </Text>
                    <Text
                      w="300px"
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Looks down on humans, but still did her job to deliver her
                      duty.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>

            {/* 5 */}
            <Flex
              display="flex !important"
              justifyContent="center"
              alignItems="flex-start"
              width="100%"
              h="100vh"
            >
              <Box pos="absolute" top="0px" h="100%" zIndex={0}>
                <Box
                  pos="absolute"
                  zIndex={1}
                  w="100%"
                  h="100vh"
                  bg="#000"
                  filter="auto"
                  opacity="0.5"
                  blur="90px"
                  boxShadow="0px 0px 100px #000000"
                ></Box>
                <Image
                  w="auto"
                  h="100%"
                  id="image"
                  src="/images/img-immortal-05.webp"
                />
              </Box>

              <Flex
                h="60vh"
                flexDirection="row"
                zIndex={2}
                justifyContent="space-between"
                alignItems="flex-start"
                width="100%"
                maxW="2000px"
                pr="4vw"
                pl="10vw"
                pt="160px"
              >
                <Flex flexDirection="column">
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Smaradahana
                  </Text>
                  <Text
                    fontSize="30px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    (Smara)
                  </Text>
                </Flex>
                <Flex flexDirection="column" maxW="300px" w="100%">
                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Elements
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Wind, whisper, heart/feeling.
                    </Text>
                  </Box>

                  <Box my="24px">
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Personality
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Righteous, assertive, OCD, wise, straight.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Ideology
                    </Text>
                    <Text
                      w="300px"
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      There are no right and wrong. I’m here to restore the
                      balance.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>

            {/* 6 */}
            <Flex
              display="flex !important"
              justifyContent="center"
              alignItems="flex-start"
              width="100%"
              h="100vh"
            >
              <Box pos="absolute" top="0px" h="100%" zIndex={0}>
                <Box
                  pos="absolute"
                  zIndex={1}
                  w="100%"
                  h="100vh"
                  bg="#000"
                  filter="auto"
                  opacity="0.5"
                  blur="90px"
                  boxShadow="0px 0px 100px #000000"
                ></Box>
                <Image
                  w="auto"
                  h="100%"
                  id="image"
                  src="/images/img-immortal-04.webp"
                />
              </Box>

              <Flex
                h="60vh"
                flexDirection="row"
                zIndex={2}
                justifyContent="space-between"
                alignItems="flex-start"
                width="100%"
                maxW="2000px"
                pr="4vw"
                pl="10vw"
                pt="160px"
              >
                <Flex flexDirection="column">
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Kanigara
                  </Text>
                  <Text
                    fontSize="30px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    (Kani)
                  </Text>
                </Flex>
                <Flex flexDirection="column" maxW="300px" w="100%">
                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Elements
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Bee, taste (bitter, sweet, sour, “sepet”).
                    </Text>
                  </Box>

                  <Box my="24px">
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Personality
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Childish, impulsive, fun.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Ideology
                    </Text>
                    <Text
                      w="300px"
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      They love humans but in a wrong way. They made conflict
                      within the Amartyas.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
            {/* 7 */}
            <Flex
              display="flex !important"
              justifyContent="center"
              alignItems="flex-start"
              width="100%"
              h="100vh"
            >
              <Box pos="absolute" top="0px" h="100%" zIndex={0}>
                <Box
                  pos="absolute"
                  zIndex={1}
                  w="100%"
                  h="100vh"
                  bg="#000"
                  filter="auto"
                  opacity="0.5"
                  blur="90px"
                  boxShadow="0px 0px 100px #000000"
                ></Box>
                <Image
                  w="auto"
                  h="100%"
                  id="image"
                  src="/images/img-immortal-03.webp"
                />
              </Box>

              <Flex
                h="60vh"
                flexDirection="row"
                zIndex={2}
                justifyContent="space-between"
                alignItems="flex-start"
                width="100%"
                maxW="2000px"
                pr="4vw"
                pl="10vw"
                pt="160px"
              >
                <Flex flexDirection="column">
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Navya
                  </Text>
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Bhumidhara
                  </Text>
                  <Text
                    fontSize="30px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    (Navya)
                  </Text>
                </Flex>
                <Flex flexDirection="column" maxW="300px" w="100%">
                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Elements
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Mountain, guidance, horse.
                    </Text>
                  </Box>

                  <Box my="24px">
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Personality
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Conservative, ambisius.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Ideology
                    </Text>
                    <Text
                      w="300px"
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Imbalance is natural, and it‘s a part of the universe. We
                      cannot change how the universe works.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>

            {/* 8 */}
            <Flex
              display="flex !important"
              justifyContent="center"
              alignItems="flex-start"
              width="100%"
              h="100vh"
            >
              <Box pos="absolute" top="0px" h="100%" zIndex={0}>
                <Box
                  pos="absolute"
                  zIndex={1}
                  w="100%"
                  h="100vh"
                  bg="#000"
                  filter="auto"
                  opacity="0.5"
                  blur="90px"
                  boxShadow="0px 0px 100px #000000"
                ></Box>
                <Image
                  w="auto"
                  h="100%"
                  id="image"
                  src="/images/img-immortal-02.webp"
                />
              </Box>

              <Flex
                h="60vh"
                flexDirection="row"
                zIndex={2}
                justifyContent="space-between"
                alignItems="flex-start"
                width="100%"
                maxW="2000px"
                pr="4vw"
                pl="10vw"
                pt="160px"
              >
                <Flex flexDirection="column">
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Devnada
                  </Text>
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Helmuri
                  </Text>
                  <Text
                    fontSize="30px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    (Dev)
                  </Text>
                </Flex>
                <Flex flexDirection="column" maxW="300px" w="100%">
                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Elements
                    </Text>
                    <Text
                      fontSize="16px"
                      w="300px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Elephant, snake king, chameleon, gecko, poet/brahmana.
                    </Text>
                  </Box>

                  <Box my="24px">
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Personality
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Sturdy, tough, quiet.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Ideology
                    </Text>
                    <Text
                      w="300px"
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      The universe is made for humans. Humans are the one who
                      control the balance of the universe.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>

            {/* 9 */}
            <Flex
              display="flex !important"
              justifyContent="center"
              alignItems="flex-start"
              width="100%"
              h="100vh"
            >
              <Box pos="absolute" top="0px" h="100%" zIndex={0}>
                <Box
                  pos="absolute"
                  zIndex={1}
                  w="100%"
                  h="100vh"
                  bg="#000"
                  filter="auto"
                  opacity="0.5"
                  blur="90px"
                  boxShadow="0px 0px 100px #000000"
                ></Box>
                <Image
                  w="auto"
                  h="100%"
                  id="image"
                  src="/images/img-immortal-01.webp"
                />
              </Box>

              <Flex
                h="60vh"
                flexDirection="row"
                zIndex={2}
                justifyContent="space-between"
                alignItems="flex-start"
                width="100%"
                maxW="2000px"
                pr="4vw"
                pl="10vw"
                pt="160px"
              >
                <Flex flexDirection="column">
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Kirana
                  </Text>
                  <Text
                    fontSize="72px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Denallie
                  </Text>
                  <Text
                    fontSize="30px"
                    lineHeight="120%"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    (Kira)
                  </Text>
                </Flex>
                <Flex flexDirection="column" maxW="300px" w="100%">
                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Elements
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Fragrant, beauty, flower, cave, woman.
                    </Text>
                  </Box>

                  <Box my="24px">
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Personality
                    </Text>
                    <Text
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      Narcissistic, cold, explicit, apathetic.
                    </Text>
                  </Box>

                  <Box>
                    <Text
                      fontSize="18px"
                      textStyle="DidactGothic"
                      textShadow="0px 0px 50px #000000"
                    >
                      Ideology
                    </Text>
                    <Text
                      w="300px"
                      fontSize="16px"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      The universe doesn’t need humans in it. Humans just made
                      the universe more ugly.
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Slider>

          <Button
            bg="transparant"
            borderRadius="100%"
            zIndex={1}
            h="auto"
            w="auto"
            pos="fixed"
            bottom={50}
            right={50}
            onClick={handleMute}
            p="15px"
            _focus={{ boxShadow: "transparant" }}
          >
            {!isMuted ? (
              <Mute sx={{ width: "100px", height: "100px", color: "white" }} />
            ) : (
              <Unmute
                sx={{ width: "100px", height: "100px", color: "white" }}
              />
            )}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Thenineimmortals;
