import React from "react";
import { Box, Flex, Image, Text, Button, Container } from "@chakra-ui/react";
import { Element, Link as ScrollLink } from "react-scroll";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MoreBottom, MoreLeft, MoreRight } from "components/Icons";

function Prev(props) {
  const { onClick } = props;
  return (
    <Button
      bg="transparant"
      pos="absolute"
      borderRadius="100%"
      py="32px"
      zIndex={1}
      left={0}
      onClick={onClick}
      color="black"
    >
      <MoreLeft sx={{ width: "33px", height: "40px" }} />
    </Button>
  );
}

function Next(props) {
  const { onClick } = props;
  return (
    <Button
      bg="transparant"
      pos="absolute"
      borderRadius="100%"
      py="32px"
      zIndex={1}
      right={0}
      onClick={onClick}
      color="black"
    >
      <MoreRight sx={{ width: "33px", height: "40px" }} />
    </Button>
  );
}

const About: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };

  return (
    <Box
      as={Element}
      name="SectionAbout"
      className="section"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      pos="relative"
    >
      <Container
        className="container"
        maxW="1080px"
        py={0}
        pos="relative"
        h="100vh"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          h="100%"
          w="100%"
        >
          <Box bg="transparant" w="1180px" h="600px" pos="relative">
            <Box
              pos="absolute"
              zIndex={0}
              w="1100px"
              h="200px"
              bg="#000"
              top="100px"
              right="auto"
              left="auto"
              filter="auto"
              blur="250px"
              boxShadow="0px 0px 100px #000000"
            />
            <Slider {...settings}>
              <Box p="100px" color="#fff">
                <Box h="350px" pt="50px">
                  <Text
                    textAlign="center"
                    fontSize="26px"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    The Amartyas are in a commotion. These nine Gods who guard
                    the balance of nature did not expect any of them to break a
                    forbidden act. Is that the loving Tara? Or maybe Ishayu the
                    opportunist? Wise smara is definitely impossible. An
                    ambitious Navya may be able to but the quiet Dev and the
                    beautiful Kirana do not go unnoticed. Could it be the cold
                    Sagara or the impulsive Kani? And don't forget, there's
                    always Chandie who likes chaos. It was Kani who did it. He
                    encounters Humans face-to-face and grants them knowledge.
                  </Text>
                </Box>
                <Text
                  mt="0px"
                  textAlign="center"
                  textShadow="0px 0px 50px #000000"
                >
                  1/4
                </Text>
              </Box>

              <Box p="100px" color="#fff">
                <Box h="350px" pt="50px">
                  <Text
                    textAlign="center"
                    fontSize="26px"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    This action, which is intended to help humans, immediately
                    upsets the balance of nature. Humans have learned to exploit
                    nature by exploiting loopholes in the laws of nature for
                    personal gain. Amartya's trial was held.
                  </Text>
                </Box>
                <Text
                  mt="0px"
                  textAlign="center"
                  textShadow="0px 0px 50px #000000"
                >
                  2/4
                </Text>
              </Box>

              <Box p="100px" color="#fff">
                <Box h="350px" pt="50px">
                  <Text
                    textAlign="center"
                    fontSize="26px"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Assemblies of the Amartyas are usually peaceful. The Amartya
                    generally have opinions that are not much different. But
                    this time the congregation gave rise to arguments and even
                    attacks among the brothers and sisters. They were even
                    reminded many times to always try to achieve unity. But as
                    interests and ambitions slowly creep into the veins of the
                    Amartyas, individual voices begin to get louder and louder.
                    Even Navya, one of Amartya's members, plans to coup Smara's
                    leadership.
                  </Text>
                </Box>
                <Text
                  mt="0px"
                  textAlign="center"
                  textShadow="0px 0px 50px #000000"
                >
                  3/4
                </Text>
              </Box>

              <Box p="100px" color="#fff">
                <Box h="350px" pt="50px">
                  <Text
                    textAlign="center"
                    fontSize="26px"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Navya steered the opinion of his brothers and sisters in the
                    meeting. Smara repeatedly reminded that Amartya needed
                    unity. But Navya's intelligence succeeded in forcing a
                    change in the rules for the interaction between humans and
                    Amartya. They need a medium, a funnel to transmit blessings.
                    So the first Vault was revealed in the Bronze Age. With
                    this, a net era of relations between humans and Amartya
                    begins.
                  </Text>
                </Box>
                <Text
                  mt="0px"
                  textAlign="center"
                  textShadow="0px 0px 50px #000000"
                >
                  4/4
                </Text>
              </Box>
            </Slider>
          </Box>

          <Box
            className="flex-full-center"
            flexDirection="column"
            pos="absolute"
            bottom="100px"
          >
            <Box
              as={ScrollLink}
              pos="relative"
              display="flex"
              flexDirection="column"
              gap="20px"
              alignItems="center"
              to="SectionImmortal"
              sx={{ cursor: "pointer" }}
            >
              <MoreBottom sx={{ width: "40px", height: "33px" }} />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
