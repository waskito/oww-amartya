import * as React from 'react';
import { useEthers } from '@usedapp/core';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Icon,
  Img,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { RPC_URLS } from 'utils/connectors';
import WalletConnectProvider from '@walletconnect/web3-provider';

import { useMetaMask } from './useMetamask';
import { useAccount } from './useAccount';

interface WalletContextObject {
  openWallet: () => void;
}

type WalletProviderProps = {
  children?: React.ReactNode;
};

export const WalletContext = React.createContext<WalletContextObject>({} as WalletContextObject);

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenAlert, onOpen: onOpenAlert, onClose: onCloseAlert } = useDisclosure();
  const { activate, deactivate, activateBrowserWallet } = useEthers();
  const { isWeb3Available } = useMetaMask();
  const { account } = useAccount();

  const onWalletConnect = async () => {
    try {
      const provider = new WalletConnectProvider({
        rpc: { 1: RPC_URLS[1], 4: RPC_URLS[5] },
        chainId: process.env.NEXT_PUBLIC_NETWORK ? parseInt(process.env.NEXT_PUBLIC_NETWORK, 10) : 5,
        qrcode: true,
      });
      await provider.enable();
      await activate(provider);
      onClose();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const openWallet = React.useCallback(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <WalletContext.Provider value={{ openWallet }}>
        {children}
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent bg="black">
            <ModalHeader>{account ? 'Disconnect Wallet' : 'Connect Wallet'}</ModalHeader>
            <ModalBody py={8} pt={2}>
              {account ? (
                <Stack>
                  <Button
                    fontSize="sm"
                    width="100%"
                    onClick={() => {
                      deactivate();
                      onClose();
                    }}
                  >
                    Disconnect
                  </Button>
                </Stack>
              ) : (
                <Stack>
                  <Button
                    size="lg"
                    fontSize="sm"
                    justifyContent="space-between"
                    rightIcon={<Img src={`/images/metamask.png`} h="5" alt={`Metamask logo`} />}
                    onClick={() => {
                      if (isWeb3Available) {
                        activateBrowserWallet();
                        onClose();
                      } else {
                        onOpenAlert();
                      }
                    }}
                  >
                    MetaMask
                  </Button>
                  <Button
                    size="lg"
                    fontSize="sm"
                    justifyContent="space-between"
                    rightIcon={<Img src={`/images/icons/walletconnect.svg`} h="4" alt={`WalletConnect logo`} />}
                    onClick={onWalletConnect}
                  >
                    WalletConnect
                  </Button>
                </Stack>
              )}
            </ModalBody>
            <ModalFooter>
              <Text textAlign="center" w="full" size="sm">
                New to Ethereum wallets?{' '}
                <Link colorScheme="blue" href="https://ethereum.org/en/wallets/" isExternal>
                  Learn more
                  <Icon as={ExternalLinkIcon} mx="1" />
                </Link>
              </Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Modal isOpen={isOpenAlert} onClose={onCloseAlert} isCentered>
          <ModalOverlay />
          <ModalContent bg="black">
            <ModalHeader>Warning</ModalHeader>
            <ModalBody py={8} pt={2}>
              <Text size="sm">
                You need to have{' '}
                <Link href="https://metamask.io" isExternal>
                  MetaMask
                  <ExternalLinkIcon mx="2px" />
                </Link>{' '}
                installed, or open in the{' '}
                <Link href={`https://metamask.app.link/dapp/gaspack.xyz`} isExternal>
                  MetaMask Mobile Browser
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </WalletContext.Provider>
    </>
  );
};

WalletProvider.defaultProps = {
  children: undefined,
};

export const useWallet = () => {
  const { openWallet } = React.useContext(WalletContext);
  return { openWallet };
};
