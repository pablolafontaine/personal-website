import { Container, Heading, Box, Spacer } from "@chakra-ui/react";
const Blog = () => {
	return (
		<Container>
			<Box display={"inline-block"} mt={{ base: 4 }}>
				<Heading as="h1" fontSize="20px">
					Blog
				</Heading>
				<Spacer mt={{ base: 8 }} />
				{/*<Box borderWidth={2} padding={2}>
					<Image
						align="center"
						maxWidth="200px"
						borderRadius="25px"
						src="/images/projects/thumbSite.png"
						alt=""
					/>

					<Divider
						mb={{ base: 1 }}
						mt={{ base: 4 }}
					/>
					<p>Nothing here yet..</p>
				</Box>*/}
			</Box>
		</Container>
	);
};

export default Blog;
