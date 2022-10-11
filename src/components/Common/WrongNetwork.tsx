import * as React from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton, useDisclosure } from '@chakra-ui/react';
import { useAccount } from 'hooks';

export const getNetworkName = (network: number) => {
  const networkName = {
    1: 'Mainnet',
    3: 'Ropsten',
    4: 'Rinkeby',
    5: 'Goerli',
    42: 'Kovan',
  };
  return networkName[network];
};

const WrongNetwork: React.FC = () => {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const { isWrongNetwork, deploymentNetwork } = useAccount();

  if (isWrongNetwork && isOpen) {
    return (
        <Alert status="warning" position="fixed" variant="solid" zIndex={1000} color="#000">
          <AlertIcon />
          <AlertTitle mr={2}>You are on the wrong network.</AlertTitle>
          <AlertDescription>Please connect to the {getNetworkName(deploymentNetwork)} network</AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
        </Alert>
    );
  }

  return null;
};

export default WrongNetwork;
