import React from "react";
import { Box, Flex, Image, Container, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import DrawerButton from "components/section/drawer";

interface Props {
  isMuted: boolean;
  handleMute: () => void;
}

const NavbarMint: React.FC<Props> = ({ isMuted, handleMute }: Props) => {
  return (
    <>
      <Box pos="fixed" top={0} w="100%" zIndex={1}>
        <Container maxW={4000} w="100%" px={50}>
          <Flex mt="25px" justifyContent="space-between" alignItems="center">
            <NextLink href="/" passHref>
              <a>
                <Image
                  id="logo"
                  src="/images/logo-amartya-white-intro.png"
                  width={140}
                  height={140}
                />
              </a>
            </NextLink>
            <DrawerButton isMuted={isMuted} handleMute={handleMute} />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default NavbarMint;
