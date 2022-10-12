import React from "react";
import { Box, Flex, Image, Container, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import DrawerButton from "components/section/drawer";

const NavBarPage: React.FC = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const btnRef = React.useRef()

  return (
    <Box pos="fixed" top={0} w="100%" zIndex={2}>
      <Container maxW={4000} w="100%" px={50}>
        <Flex mt="25px" justifyContent="space-between" alignItems="center">
          <NextLink href="/" passHref>
            <a>
              <Image
                w="140px"
                h="auto"
                id="logo"
                src="/images/nav-logo-amartya.svg"
                alt="Amartya"
              />
            </a>
          </NextLink>
          <DrawerButton />
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBarPage;
