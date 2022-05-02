import { Box } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box align="center" opacity={0.5} fontSize="sm">
			&copy; {new Date().getFullYear()} Pablo Lafontaine. Made
			with Next.js.
		</Box>
	);
};

export default Footer;
