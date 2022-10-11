import React from "react";
import { Box, Flex, Image, Text, Button, Container } from "@chakra-ui/react";
import Link from "next/link";
import { Element } from "react-scroll";

const Journey: React.FC = () => {
  return (
    <Box
      as={Element}
      name="SectionJourney"
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
          <Text
            fontSize="xxl"
            textStyle="PlayfairDisplayMedium"
            textShadow="0px 0px 50px #000000"
          >
            The Journey
          </Text>

          <Box className="flex-full-center" flexDirection="column" my={100}>
            <Box
              pos="absolute"
              zIndex={-1}
              w="1100px"
              h="200px"
              bg="#000"
              top="auto"
              right="auto"
              left="auto"
              filter="auto"
              blur="250px"
              boxShadow="0px 0px 100px #000000"
            />
            <Button
              bg="url('/images/star-hold-explore.svg') no-repeat center"
              h="240px"
              w="240px"
              alignItems="center"
              justifyContent="center"
              borderRadius="100%"
              data-group
              _hover={{
                background:
                  'url("images/star-hold-explore-hovered.svg") no-repeat center',
                color: "black !important",
              }}
              _groupHover={{
                background:
                  'url("images/star-hold-explore-hovered.svg") no-repeat center',
              }}
            >
              <Link href="/thejourney">
                <Text
                  fontSize="26px"
                  textStyle="PlayfairDisplayMedium"
                  textAlign="center"
                  textShadow="0px 0px 50px #000000"
                >
                  Hold to <br /> explore
                </Text>
              </Link>
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Journey;
