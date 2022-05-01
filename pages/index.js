import { Spacer, Container, Box, Image, useColorModeValue, Heading } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'
const Page = () => {
  return (
    <Container>
        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as="a1" size='xl' variant="page-title">
		    Pablo Lafontaine </Heading> 
		  <p style={{fontSize: 20}}>Developer & Student
		  </p> 
              
              </Box>
		<Box flexShrink={0}
		mt={{base: 2, md: 0}} 
		ml={{ md: 5 }}
		align="center"
		>
		<Image 
		borderColor={ useColorModeValue('black', 'white') }
		borderWidth={2}
		borderStyle="solid"
		maxWidth="100px"
		display='inline-block'
		borderRadius="full" 
		src="/images/pfp.png" 
		alt="Profile Image"/>
		</Box>
        </Box>
	<Box display ="inline-block" flexGrow={1} mt={{base: 2, md: 2}} >
		<Heading size="md"> About Me </Heading>
		<Spacer />
		<p align="justify">Hi! I am currently studying computer science at <strong>Toronto Metropolitan University</strong> (Ryerson). I love learning, experimenting, and taking on challenging tasks. For examples of my works, check the projects section of this site!</p>
		<Spacer mt={{base: 6}} />
		<Heading size="md"> Technology I &lt;3</Heading>
		<Spacer />
		<p></p>
			
		<Spacer mt={{base: 6}} />
		<Heading size="md"> On the Web</Heading>
		<Spacer />
		<p><FontAwesomeIcon icon={ faTwitter } fixedWidth/>&ensp;@pablolafontaine<br /> <FontAwesomeIcon icon={ faGithub } fixedWidth/>&ensp;@pablolafontaine <br /><FontAwesomeIcon icon={ faLinkedin} fixedWidth/>&ensp;pablo-lafontaine<br /><FontAwesomeIcon icon={ faDiscord } fixedWidth/>&ensp;kouhai#5882<br /></p>
		
		<Spacer mt={{base: 6}} />
		<Heading size="md"> Other</Heading>
		<Spacer />
		<p>Outside of programming, I am a gamer, music producer, and caffiene addict.</p>

	</Box>
		    
  </Container>
  )
}
export default Page

