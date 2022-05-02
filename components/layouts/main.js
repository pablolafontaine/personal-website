import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";
import { Box, Container, Spacer } from "@chakra-ui/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const Main = ({ children, router }) => {
	return (
		<Box as="main" pb={8}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<title> Pablo Lafontaine</title>
			</Head>
			<Navbar path={router.asPath} />
			<Container maxW="container.md" pt={14}>
				{children}
				<Spacer mt={{ base: 8 }} />
				<Footer />
			</Container>
		</Box>
	);
};

export default Main;
