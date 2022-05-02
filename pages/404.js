import { Heading, Container, Link, Divider } from "@chakra-ui/react";
import NextLink from "next/link";
const NotFound = () => {
	return (
		<Container>
			<Heading as="h1"> Not Found</Heading>
			<p>
				The page you&#39;re looking for couldn&#39;t be
				found.
			</p>
			<Divider mb={{ base: 2 }} mt={{ base: 1 }} />
			<p>
				Would you like to return to the{" "}
				<NextLink href="/" scroll={false}>
					<Link>home</Link>
				</NextLink>{" "}
				page?
			</p>
		</Container>
	);
};

export default NotFound;
