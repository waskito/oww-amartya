import React from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Container,
  Link,
} from "@chakra-ui/react";
import { Discord, Twitter } from "components/Icons";

const Footer: React.FC = () => {
  return (
    <Box w="100%" py="80px" bg="#fff" color="#000">
      <Container maxW={4000} px={76}>
        <Flex
          justifyContent="space-between"
          alignItems="top"
          flexDirection="row"
          h="100%"
          w="100%"
        >
          <Box flexDirection="column">
            <Text fontSize="32px">Amartya</Text>
            <Text
              fontSize="30px"
              w="620px"
              mt="8px"
              mb="49px"
              textStyle="DidactGothic"
            >
              An art-based NFT project which lore is inspired by Indonesia’s
              Sacred Pattern Collection.
            </Text>
            <Text fontSize="18px" w="620px" textStyle="DidactGothic">
              Amartya is a registered trademark of Amartya Inc. All Rights
              Reserved. Amartya All logos are registered trademarks of their
              respective owners. All contents of this document, unless otherwise
              credited, are copyright © 2022 Amartya.
            </Text>
          </Box>

          <Flex
            flexDirection="row"
            gap="24px"
            fontSize="24px"
            justifySelf="flex-end"
          >
            <Link
              href="https://discord.gg/amartya"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ opacity: 0.7 }}
            >
              <Discord />
            </Link>
            <Link
              href="https://twitter.com/AmartyaNFT"
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ opacity: 0.7 }}
            >
              <Twitter />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
