import React from 'react';
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import { useAccount, useWallet } from 'hooks';

const Home: React.FC = () => {
  const { openWallet } = useWallet();
  const { account } = useAccount();

  return (
    <Box className="home-page" h="100vh" w="100%">
      <Flex justifyContent="center" alignItems="center" flexDirection="column" h="100%" w="100%">
        <Image src="/images/icons/gaspack-logo.svg" mb="2vh" />
        <Text fontSize="xxl" textStyle="robotoBold">
          Gaspack Frontend
        </Text>
        <Text mb="5vh">Copyright &copy; 2022 Gaspack.xyz</Text>

        <Box className="flex-full-center" flexDirection="column">
          <Text fontSize="xs" mb="2vh" textStyle="robotoItalic" color="primary">
            {account}
          </Text>
          <Button border="2px solid white" onClick={openWallet}>
            {!account ? 'Connect Wallet' : 'Disconnect'}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
