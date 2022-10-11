import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Container,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Element, Link as ScrollLink } from "react-scroll";

import { MoreBottom, MoreRight } from "components/Icons";

const Immortal: React.FC = () => {
  return (
    <Box
      as={Element}
      name="SectionImmortal"
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
          <Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
            >
              <Box pt="5vh" mr="80px"></Box>

              <Box w="100%" maxW="1370px" px="30px">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Flex
                    pos="relative"
                    h="296px"
                    bg="url('/images/start.svg') no-repeat center"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text
                      fontSize="xxl"
                      textStyle="PlayfairDisplayMedium"
                      textShadow="0px 0px 50px #000000"
                    >
                      The Nine Immortals
                    </Text>
                    <Box
                      pos="absolute"
                      zIndex={-1}
                      w="1100px"
                      h="200px"
                      bg="#000"
                      top="auto"
                      left="auto"
                      right="auto"
                      filter="auto"
                      blur="250px"
                      boxShadow="0px 0px 100px #000000"
                    ></Box>
                  </Flex>

                  <Text
                    mt="60px"
                    textAlign="center"
                    fontSize="26px"
                    textStyle="PlayfairDisplayMedium"
                    textShadow="0px 0px 50px #000000"
                  >
                    Amartya is the deity that have the only purpose to restore
                    balance of the universe to reach ”Nawasena”. Each of the
                    Amartya is guarding a vault of sacred pattern. The 9
                    characters are based on traditional Java’s numbering for
                    Candrasengkala calendar and the elements that number
                    represent in the universe.
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Box className="flex-full-center" flexDirection="column" mt={100}>
            <Box
              as={ScrollLink}
              pos="relative"
              display="flex"
              flexDirection="column"
              gap="20px"
              alignItems="center"
              to="SectionJourney"
              sx={{ cursor: "pointer" }}
            >
              <MoreBottom sx={{ width: "40px", height: "33px" }} />
            </Box>
          </Box>
        </Flex>
      </Container>
      <Box position="absolute" right="124px">
        <Button
          bg="transparant"
          borderRadius="50%"
          py="32px"
          height="60px"
          width="60px"
          minWidth="0"
        >
          <NextLink href="/thenineimmortals" passHref>
            <Link color="black">
              <MoreRight sx={{ width: "33px", height: "40px" }} />
            </Link>
          </NextLink>
        </Button>
        {/* <NineChar/> */}
      </Box>
    </Box>
  );
};

export default Immortal;
