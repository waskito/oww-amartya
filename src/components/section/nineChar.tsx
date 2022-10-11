import React from 'react'
import NextLink from "next/link"
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
    Container
  } from '@chakra-ui/react'

  const NineChar: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        {/* <Button ref={btnRef} bg="transparant" borderRadius="100%" h={140} w={140} onClick={onOpen}  >
            <Image src="/images/icons/icon-menu-nav.svg" />
        </Button> */}
        <Button ref={btnRef} bg="transparant" borderRadius="100%" py="32px" onClick={onOpen} >
            <Image src="/images/icons/icon-more-white.svg" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="full"
        >
          <DrawerOverlay />
              
          <DrawerContent 
            bg="white"
            >
              <DrawerCloseButton bg='black' _hover={{color:"grey"}} top={100} right={100} borderRadius={100}/>
                  <DrawerBody mx="auto" w="1440px" bg="black" 
                  backgroundImage="url('/images/new-bg-body.svg')"
                  backgroundPosition="center"
                  backgroundRepeat="repeat" >
                    <Container mt={100} maxW="1280px" w="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" pos="relative"  >
                        <Flex w= '100%'justifyContent="start" alignItems="center">
                        <Image id='logo' src="/images/nav-logo-amartya.svg" />
                        </Flex>

                        
                      <Box pos="absolute" top="-150px"  zIndex={1} >
                        <Image w="900px" h="1152px" id='logo' src="/images/Amartya-1-Tara.png" />
                      </Box>
                      <Box w="100%" h="400px" pos="relative" zIndex={2} display="flex" flexDirection="row" justifyContent="space-between" alignItems="start">
                        <Text fontSize="72px" textStyle="PlayfairDisplayMedium" textShadow='0px 0px 50px #000000'>
                        Tara Narawanta <br/> (Tara)
                        </Text>
                        <Box>

                          <Box>
                            <Text fontSize="16px" textStyle="PlayfairDisplayMedium" textShadow='0px 0px 50px #000000'>
                            Elements
                            </Text>
                            <Text fontSize="16px" textStyle="PlayfairDisplayMedium" textShadow='0px 0px 50px #000000'>
                            Stars, sun, universe, girl.
                            </Text>
                          </Box>

                          <Box my="24px">
                            <Text fontSize="16px" textStyle="PlayfairDisplayMedium" textShadow='0px 0px 50px #000000'>
                            Personality
                            </Text>
                            <Text fontSize="16px" textStyle="PlayfairDisplayMedium" textShadow='0px 0px 50px #000000'>
                            Warm, polite, friendly.
                            </Text>
                          </Box>

                          <Box>
                            <Text fontSize="16px" textStyle="PlayfairDisplayMedium" textShadow='0px 0px 50px #000000'>
                            Ideology
                            </Text>
                            <Text w="300px" fontSize="16px" textStyle="PlayfairDisplayMedium" textShadow='0px 0px 50px #000000'>
                            Believe that humans can change themselves to be better. Will guide the human with full support and love.
                            </Text>
                          </Box>

                        </Box>

                      </Box>

                    </Container>
                  </DrawerBody>

          </DrawerContent>
              
        </Drawer>
      </>
    )
  }

export default NineChar