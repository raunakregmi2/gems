import { Box, Container,Flex,Text } from "@chakra-ui/react"
import Navlinks from "./Navlinks"

function Nav() {
  return (
    <Container maxW={"container.lg"}>
    <Flex>
       <Box>
           <Text>Logo</Text>
       </Box>
        <Flex>
            <Navlinks navLink={"Home"} />
            <Navlinks navLink={"About"} />
            <Navlinks navLink={"Notices"} />
            <Navlinks navLink={"Gallery"} />
            <Navlinks navLink={"Contact"} />
        </Flex>
    </Flex>
    </Container>
  )
}

export default Nav