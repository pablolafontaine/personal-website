import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
	global: (props) => ({
		body: {
			bg: mode("#fcfcfc", "#202023")(props),
		},
	}),
};

const components = {
	Heading: {
		variants: {
			"section-title": {
				textDecoration: "underline",
				fontSize: 30,
				textUnderlineOffset: 6,
				textDecorationColor: "#525252",
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4,
			},
		},
	},
	Link: {
		baseStyle: (props) => ({
			color: mode("#63b3ed", "#ffe48a")(props),
			textUnderlineOffset: 3,
		}),
	},
};

const fonts = {
	heading: "'Open Sans'",
};
const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	styles,
	components,
	fonts,
});

export default theme;
