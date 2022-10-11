import React from "react";
import { Box, Flex, Image, Text, Button, Container } from "@chakra-ui/react";

const Mint: React.FC = () => {
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
      {/* <Box className='section' w="100%" bg= "#6A5A33 url('/images/bg-body-0.5.webp') repeat-y center/cover" display="flex" justifyContent="center" alignItems="center" h="100vh" pos="relative">
    <Box pos="absolute" h="100%" ml="auto" mr="auto" top="0" zIndex={0}  >
      <video style={{marginLeft: 'auto', marginRight: 'auto', height: '100%', maxWidth: "none" }} autoPlay muted preload='auto' loop>
        <source src="images/kain loop_crop5_VP9.webm" type='video/webm' />
      </video>
    </Box> */}
      <Container
        className="container"
        maxW="1080px"
        py={0}
        pos="relative"
        h="100vh"
      >
        <Flex
          justifyContent="center"
          mt="100px"
          alignItems="center"
          flexDirection="column"
          h="100%"
          w="100%"
        >
          <Flex
            zIndex="1"
            h="280px"
            w="610px"
            bg="url('/images/ornament-mint.svg') no-repeat center"
            alignItems="center"
            justifyContent="center"
            pos="relative"
          >
            <Text
              pos="absolute"
              fontSize="xxl"
              textStyle="PlayfairDisplayMedium"
              textShadow="0px 0px 50px #000000"
            >
              Mint Amartya
            </Text>
          </Flex>
          <Box
            pos="absolute"
            zIndex={0}
            w="840px"
            h="840px"
            bg="url('/images/star-ornament.svg') no-repeat center"
            top="0"
            right="auto"
            left="auto"
          ></Box>

          <Box
            className="flex-full-center"
            flexDirection="column"
            mt="100px"
            pos="relative"
          >
            <Box
              pos="absolute"
              zIndex={-1}
              w="1100px"
              h="600px"
              bg="#000"
              top="auto"
              right="auto"
              left="auto"
              filter="auto"
              blur="250px"
              boxShadow="0px 0px 100px #000000"
            ></Box>
            <Text
              w="425px"
              textAlign="center"
              fontSize="26px"
              textStyle="PlayfairDisplayMedium"
              textShadow="0px 0px 50px #000000"
            >
              Total supply: 2.727 Amartyas Remaining Amartyas:
            </Text>
            <Text
              mt="0px"
              fontSize="xxl"
              textStyle="PlayfairDisplayMedium"
              textShadow="0px 0px 50px #000000"
            >
              2.727
            </Text>
          </Box>
        </Flex>
        {/* <Flex mt="500px" pos="relative" justifyContent="center" alignItems="center" flexDirection="column" h="100%" w="100%">
            <Box pos="absolute" zIndex={-1} w="1280px" h="900px" bg="#000" top="-50%" right="0%" filter='auto' blur='200px' boxShadow='0px 0px 500px #000000' ></Box>
              <Image src="/images/logo-amartya-white.svg" />
              <Text mt="65px" mb="32px" fontSize="26px" textStyle="PlayfairDisplayMediumItalic" textShadow='0px 0px 50px #000000'>
                An NFT Project by
              </Text>
              <Text fontSize="26px" textStyle="PlayfairDisplayMedium" textShadow='0px 0px 50px #000000'>
                Antonio Reinhard | Vonix 
              </Text>
              <Text fontSize="26px" textStyle="PlayfairDisplayMedium" textShadow='0px 0px 50px #000000'>
                Powered by Gaspack
              </Text>
            </Flex> */}
      </Container>
    </Box>
  );
};

export default Mint;
