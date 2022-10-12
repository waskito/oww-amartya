import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  Container,
  SimpleGrid,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Twitter } from "components/Icons";
import Linkedin from "components/Icons/Linkedin";
import Globe from "components/Icons/Globe";

const Founder: React.FC = () => {
  return (
    <Box
      className="section"
      id="founder"
      w="100%"
      py="100px"
      bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, #000000 100%)"
    >
      <Container className="section" maxW="1080px">
        <Flex
          mt="100px"
          mb="100px"
          pos="relative"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          h="100%"
          w="100%"
        >
          <Box
            pos="absolute"
            zIndex={-1}
            w="1280px"
            h="900px"
            bg="#000"
            top="-50%"
            right="0%"
            filter="auto"
            opacity={0.52}
            blur="200px"
            boxShadow="0px 0px 500px #000000"
          ></Box>
          <Image
            src="/images/logo-amartya-white.svg"
            sx={{ maxWidth: "240px" }}
          />
          <Text
            mt="65px"
            mb="32px"
            fontSize="26px"
            textStyle="PlayfairDisplayMediumItalic"
            textShadow="0px 0px 50px #000000"
          >
            An NFT Project by
          </Text>
          <Text
            fontSize="26px"
            textStyle="PlayfairDisplayMedium"
            textShadow="0px 0px 50px #000000"
          >
            Antonio Reinhard | Vonix
          </Text>
          <Text
            fontSize="26px"
            textStyle="PlayfairDisplayMedium"
            textShadow="0px 0px 50px #000000"
          >
            Powered by Gaspack
          </Text>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          h="100%"
          w="100%"
        >
          <Box className="flex-full-center" flexDirection="column" my={100}>
            <Flex
              h="300px"
              w="auto"
              bg="url('/images/star-founder.svg') no-repeat center"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                fontSize="xxl"
                w="515px"
                textStyle="PlayfairDisplayMedium"
                textAlign="center"
                textShadow="0px 0px 50px #000000"
              >
                The Founder
              </Text>
            </Flex>
          </Box>

          <Wrap
            justify={["flex-start", "center"]}
            align="top"
            spacing="100px"
            direction={["column", "row"]}
          >
            <WrapItem
              color="white"
              width={["80vw", "24%"]}
              fontWeight={400}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src="/images/image-founder-03.png"
                sx={{ maxWidth: "240px" }}
              />
              <Text
                mb="8px"
                mt="32px"
                fontSize="32px"
                textAlign="center"
                textStyle="PlayfairDisplayMedium"
              >
                Antonio Reinhard
              </Text>
              <Text
                fontSize="18px"
                textAlign="center"
                textStyle="DidactGothic"
                my={2}
              >
                Artist
              </Text>
              <Text fontSize="18px" textAlign="center" textStyle="DidactGothic">
                Antonio Reinhard is known for his elaborate, ornate artworks
                featuring subjects dressed in beautiful flowing garments and in
                atmospheric environments. Through his art, Toni aims to share
                his ideas and tell stories through in-depth, believable
                characters and intricate world-building.
              </Text>
              <Flex
                flexDirection="row"
                alignItems="center"
                gap="32px"
                mt="33px"
              >
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="18px"
                  textAlign="center"
                >
                  <Twitter sx={{ width: "30px", height: "30px" }} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="18px"
                  textAlign="center"
                >
                  <Linkedin sx={{ width: "30px", height: "30px" }} />
                </Link>
              </Flex>
            </WrapItem>

            <WrapItem
              color="white"
              width={["80%", "24%"]}
              justifyContent="flex-start"
              fontWeight={400}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src="/images/image-founder-02.png"
                sx={{ maxWidth: "240px" }}
              />
              <Text
                mb="8px"
                mt="32px"
                fontSize="32px"
                textAlign="center"
                textStyle="PlayfairDisplayMedium"
              >
                Ariel Indra
              </Text>
              <Text
                fontSize="18px"
                textAlign="center"
                textStyle="DidactGothic"
                my={2}
              >
                Batik Storyteller
              </Text>
              <Text fontSize="18px" textAlign="center" textStyle="DidactGothic">
                Ariel has worked in the investing space for over 8 years, and is
                an avid enthusiast of Indonesian classic patterns.
              </Text>
              <Flex
                flexDirection="row"
                alignItems="center"
                gap="32px"
                mt="33px"
              >
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="18px"
                  textAlign="center"
                >
                  <Twitter sx={{ width: "30px", height: "30px" }} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="18px"
                  textAlign="center"
                >
                  <Linkedin sx={{ width: "30px", height: "30px" }} />
                </Link>
              </Flex>
            </WrapItem>

            <WrapItem
              color="white"
              width={["80%", "24%"]}
              justifyContent="flex-start"
              fontWeight={400}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src="/images/image-founder-01.png"
                sx={{ maxWidth: "240px" }}
              />
              <Text
                mb="8px"
                mt="32px"
                fontSize="32px"
                textAlign="center"
                textStyle="PlayfairDisplayMedium"
              >
                Betari Putri
              </Text>
              <Text
                fontSize="18px"
                textAlign="center"
                textStyle="DidactGothic"
                my={2}
              >
                Producer
              </Text>
              <Text fontSize="18px" textAlign="center" textStyle="DidactGothic">
                Tari has been working in various startups in Indonesia, ranging
                from entertainment to financial industries. She is now
                representing Vonix, an Exchange for cryptocurrency that is based
                in Indonesia.
              </Text>
              <Flex
                flexDirection="row"
                alignItems="center"
                gap="32px"
                mt="33px"
              >
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="18px"
                  textAlign="center"
                >
                  <Twitter sx={{ width: "30px", height: "30px" }} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="18px"
                  textAlign="center"
                >
                  <Linkedin sx={{ width: "30px", height: "30px" }} />
                </Link>
              </Flex>
            </WrapItem>
            <WrapItem
              width={["80%", "24%"]}
              justifyContent="flex-start"
              mt="30px"
              color="white"
              fontWeight={400}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src="/images/image-founder-05.png"
                sx={{ maxWidth: "240px" }}
              />
              <Text
                mb="8px"
                mt="32px"
                fontSize="32px"
                textAlign="center"
                textStyle="PlayfairDisplayMedium"
              >
                Vonix
              </Text>
              <Text
                fontSize="18px"
                textAlign="center"
                textStyle="DidactGothic"
                my={2}
              >
                Exchange Partner
              </Text>
              <Flex
                flexDirection="row"
                alignItems="center"
                gap="32px"
                mt="33px"
              >
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="18px"
                  textAlign="center"
                >
                  <Twitter sx={{ width: "30px", height: "30px" }} />
                </Link>
                <Link
                  href="https://vonix.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="18px"
                  textAlign="center"
                >
                  <Globe sx={{ width: "30px", height: "30px" }} />
                </Link>
              </Flex>
            </WrapItem>

            <WrapItem
              width={["80%", "24%"]}
              justifyContent="flex-start"
              mt="30px"
              color="white"
              fontWeight={400}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src="/images/image-founder-04.png"
                sx={{ maxWidth: "240px" }}
              />
              <Text
                mb="8px"
                mt="32px"
                fontSize="32px"
                textAlign="center"
                textStyle="PlayfairDisplayMedium"
              >
                Gaspack
              </Text>
              <Text
                fontSize="18px"
                textAlign="center"
                textStyle="DidactGothic"
                my={2}
              >
                Launch Partner
              </Text>
              <Flex
                flexDirection="row"
                alignItems="center"
                gap="32px"
                mt="33px"
              >
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="18px"
                  textAlign="center"
                >
                  <Twitter sx={{ width: "30px", height: "30px" }} />
                </Link>
                <Link
                  href="https://gaspack.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  fontSize="18px"
                  textAlign="center"
                >
                  <Globe sx={{ width: "30px", height: "30px" }} />
                </Link>
              </Flex>
            </WrapItem>
          </Wrap>
        </Flex>
      </Container>
    </Box>
  );
};

export default Founder;
