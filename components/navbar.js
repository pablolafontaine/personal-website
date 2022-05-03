import Logo from "./logo";
import NextLink from "next/link";
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggle from "./theme-toggle";

const LinkItem = ({ href, path, children }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue("black", "white");
	const activeColor = useColorModeValue("white", "black");
	const activeBackgroundColor = useColorModeValue("#3182ce", "#faf08a");
	return (
		<NextLink href={href}>
			<Link
				borderRadius={4}
				p={2}
				bg={active ? activeBackgroundColor : undefined}
				color={active ? activeColor : inactiveColor}
			>
				{children}
			</Link>
		</NextLink>
	);
};

const Navbar = (props) => {
	const { path } = props;
	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue("#ffffff80", "#20202380")}
			style={{ backdropFilter: "blur(10px)" }}
			zIndex={1}
			{...props}
		>
			<Container
				display="flex"
				p={2}
				maxW="container.md"
				wrap="wrap"
				align="center"
				justify="space-between"
			>
				<Flex align="center" mr={2}>
					<Heading
						as="h1"
						size="lg"
						letterSpacing={"tighter"}
					>
						<Logo />
					</Heading>
				</Flex>
				<Stack
					direction={{
						base: "column",
						md: "row",
					}}
					display={{ base: "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, nmd: 0 }}
				>
					<LinkItem href="/projects" path={path}>
						projects
					</LinkItem>
					<LinkItem href="/blog" path={path}>
						blog
					</LinkItem>
				</Stack>
				<Box flex={1} align="right">
					<ThemeToggle />
					<Box
						ml={2}
						display={{
							base: "inline-block",
							md: "none",
						}}
					>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={
									<HamburgerIcon />
								}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<NextLink
									href="/"
									passHref
								>
									<MenuItem
										as={
											Link
										}
									>
										About
									</MenuItem>
								</NextLink>
								<NextLink
									href="/projects"
									passHref
								>
									<MenuItem
										as={
											Link
										}
									>
										Projects
									</MenuItem>
								</NextLink>
								<NextLink
									href="/blog"
									passHref
								>
									<MenuItem
										as={
											Link
										}
									>
										Blog
									</MenuItem>
								</NextLink>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
