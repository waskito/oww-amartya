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
    Container,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel
  } from '@chakra-ui/react'

  const JourneyRoute: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} bg="url('/images/star-hold-explore.svg') no-repeat center" h="240px" w="240px"  alignItems="center" justifyContent="center" borderRadius="100%" onClick={onOpen} >
                <Text fontSize="26px" textStyle="PlayfairDisplayMedium" textAlign="center" textShadow='0px 0px 50px #000000' >
                Hold to <br/> explore
                </Text>
        </Button>

        <Drawer
          isOpen={isOpen}
          placement='bottom'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="full"
        >
          <DrawerOverlay />
              
          <DrawerContent 
            bg="black"
            >
              <DrawerCloseButton bg='black' _hover={{color:"grey"}} top={100} right={100} borderRadius={100}/>
                  <DrawerBody mx="auto" w="1440px" display="flex" justifyContent="center" alignItems="end" bg="black"
                              backgroundImage="url('/images/ruangsamasta.png')"
                              backgroundPosition="center"
                              backgroundRepeat="no-repeat"
                              backgroundSize="1850px"
                  >
                    <Container maxW="1280px" w="100%"   >
                      <Box bg="red" w="100%" h="400px" display="flex" justifyContent="center" alignItems="center">


                      <Tabs variant='soft-rounded' colorScheme='blue'>
                        <TabPanels>
                          <TabPanel pos="relative">
                            <Box pos="absolute" ml="0px" bg="black">
                            <p>one!</p>
                          </Box>
                          </TabPanel>
                          
                          <TabPanel pos="relative">
                          <Box pos="absolute" ml="0px" bg="black">
                            <p>two!</p></Box>
                          </TabPanel>
                          
                          <TabPanel pos="relative">
                          <Box pos="absolute" ml="0px" bg="black">
                            <p>three!</p></Box>
                          </TabPanel>
                          
                          <TabPanel pos="relative">
                          <Box pos="absolute" ml="0px" bg="black">
                            <p>four!</p></Box>
                          </TabPanel>
                          
                        </TabPanels>

                          <TabList mt="80px">
                          <Tab><Box h="40px" w="40px" borderRadius="100%" bg="black"></Box></Tab>
                          <Tab><Box h="40px" w="40px" borderRadius="100%" bg="black"></Box></Tab>
                          <Tab><Box h="40px" w="40px" borderRadius="100%" bg="black"></Box></Tab>
                          <Tab><Box h="40px" w="40px" borderRadius="100%" bg="black"></Box></Tab>

                        </TabList>
                        </Tabs>
                        </Box>




                    </Container>
                  </DrawerBody>

          </DrawerContent>
              
        </Drawer>
      </>
    )
  }

export default JourneyRoute