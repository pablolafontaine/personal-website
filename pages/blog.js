import { Container, Heading, Box, Spacer } from "@chakra-ui/react";
const Blog = () => {
	return (
		<Container>
			<Box display={"inline-block"} mt={{ base: 4 }}>
				<Heading as="h1" fontSize="20px">
					Blog
				</Heading>
        <Spacer mt={{ base: 8 }} />
			</Box>
		</Container>
	);
};

export default Blog;
