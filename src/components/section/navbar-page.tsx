import React from "react";
import { Box, Flex, Image, Container, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import DrawerButton from "components/section/drawer";

const NavBar: React.FC = () => {
  return (
    <>
      <Box pos="fixed" top={0} w="100%" zIndex={2}>
        <Container maxW={4000} w="100%" px={50}>
          <Flex mt="25px" justifyContent="space-between" alignItems="center">
            <NextLink href="/" passHref>
              <Link>
                <Image id="logo" src="/images/icons/logo-white-amartya.svg" />
              </Link>
            </NextLink>
            <DrawerButton />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default NavBar;
