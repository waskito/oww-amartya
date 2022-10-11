import React from "react";
import NextLink from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Image,
  Box,
  Text,
  Link,
  Flex,
} from "@chakra-ui/react";
import { Discord, Twitter } from "components/Icons";

const DrawerButton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        bg="transparant"
        _focus={{ boxShadow: "transparant" }}
        borderRadius="100%"
        h={90}
        w={90}
        onClick={onOpen}
      >
        <Image src="/images/icons/nav-menu.svg" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xl"
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundImage="url('/images/drawer-bg.jpg')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          p={90}
        >
          <DrawerCloseButton
            bg="black"
            _hover={{ color: "grey" }}
            top={100}
            right={100}
            borderRadius={100}
          />
          <DrawerHeader>
            <Image src="/images/icons/logo-amartya.svg" mb="1vh" />
          </DrawerHeader>

          <DrawerBody>
            <Box color="black" fontWeight={400}>
              <Text
                my="50px"
                fontSize="26px"
                textStyle="PlayfairDisplayMediumItalic"
              >
                An NFT Project by
              </Text>
              <Text fontSize="26px" textStyle="PlayfairDisplayMedium">
                Antonio Reinhard | Vonix
              </Text>
              <Text fontSize="26px" textStyle="PlayfairDisplayMedium">
                Powered by Gaspack
              </Text>
            </Box>
            <Box mt={50} color="black">
              <Flex flexDirection="column" fontSize="26px">
                <NextLink href="#about" passHref>
                  <Link>About</Link>
                </NextLink>
                <NextLink href="/thenineimmortals" passHref>
                  <Link>The Nine Immortals</Link>
                </NextLink>
                <NextLink href="/thejourney" passHref>
                  <Link>The Journeys</Link>
                </NextLink>
                <NextLink href="#mint" passHref>
                  <Link>Mint</Link>
                </NextLink>
                <NextLink href="#team" passHref>
                  <Link>Our Team</Link>
                </NextLink>
              </Flex>
            </Box>
            <Box>
              <Flex mt="20px" flexDirection="row" gap="40px">
                <Link
                  color="black"
                  href="https://discord.gg/amartya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Discord sx={{ width: "40px", height: "40px" }} />
                </Link>
                <Link
                  color="black"
                  href="https://twitter.com/AmartyaNFT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter sx={{ width: "40px", height: "40px" }} />
                </Link>
              </Flex>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button
              h={140}
              w={140}
              onClick={onClose}
              pos="fixed"
              bottom={50}
              right={50}
            >
              <Image src="/images/icons/icon-wave.svg" />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerButton;