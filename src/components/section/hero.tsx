import React from "react";
import { Box, Flex, Image, Text, Button, Container } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

import { MoreBottom } from "components/Icons";

const Hero: React.FC = () => {
  return (
    <Box
      className="section"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      pos="relative"
    >
      ˝
      <Container
        className="container"
        maxW="1080px"
        py={0}
        pos="relative"
        h="100vh"
      >
        <Flex
          pos="absolute"
          zIndex={1}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          h="100%"
          w="100%"
        >
          <Text
            textShadow="0px 20px 50px #000000"
            fontSize="xxl"
            textStyle="PlayfairDisplayMedium"
            zIndex={2}
          >
            The Story Begins
          </Text>

          <Box
            className="flex-full-center"
            flexDirection="column"
            pos="absolute"
            bottom="100px"
          >
            <Box
              pos="absolute"
              zIndex={0}
              w="1100px"
              h="200px"
              bg="#000"
              top="auto"
              right="auto"
              left="auto"
              filter="auto"
              blur="250px"
              boxShadow="0px 0px 100px #000000"
            ></Box>
            <Box
              as={ScrollLink}
              pos="relative"
              display="flex"
              flexDirection="column"
              gap="20px"
              alignItems="center"
              to="SectionAbout"
              sx={{ cursor: "pointer" }}
            >
              <Text
                w="130px"
                textAlign="center"
                textStyle="DidactGothic"
                textShadow="0px 0px 80px #000000"
                fontWeight={400}
                fontSize="30px"
                lineHeight="30px"
                mt={170}
              >
                Discover more
              </Text>
              <MoreBottom sx={{ width: "40px", height: "33px" }} />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
