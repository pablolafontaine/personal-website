import {
	Spacer,
	Container,
	Box,
	Link,
	Image,
	useColorModeValue,
	Heading,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faGithub,
	faTwitter,
	faLinkedin,
	faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
const Page = () => {
	return (
		<Container>
			<Box display={{ md: "flex" }}>
				<Box flexGrow={1}>
					<Heading
						as="a1"
						size="xl"
						variant="page-title"
					>
						Pablo Lafontaine{" "}
					</Heading>
					<p style={{ fontSize: 20 }}>
						Developer & Student
					</p>
				</Box>
				<Box
					flexShrink={0}
					mt={{ base: 2, md: 0 }}
					ml={{ md: 5 }}
					align="center"
				>
					<Image
						borderColor={useColorModeValue(
							"black",
							"white"
						)}
						borderWidth={2}
						borderStyle="solid"
						maxWidth="100px"
						display="inline-block"
						borderRadius="full"
						src="/images/pfp.png"
						alt="Profile Image"
					/>
				</Box>
			</Box>
			<Box
				display="inline-block"
				flexGrow={1}
				mt={{ base: 2, md: 2 }}
			>
				<Heading size="md"> About Me </Heading>
				<Spacer />
				<p align="justify">
					Hi! I am currently studying computer
					science in my second year at{" "}
					<strong>
						Toronto Metropolitan University
					</strong>{" "}
					(Ryerson). I love learning,
					experimenting, and taking on new,
					exciting, and challenging tasks. For
					examples of my works, check the projects
					section of this site!
				</p>
				<Spacer mt={{ base: 6 }} />
				<Heading size="md">
					Technology I <FontAwesomeIcon icon={faHeart} />
				</Heading>
				<Spacer />
				<p></p>

				<Spacer mt={{ base: 6 }} />
				<Heading size="md"> On the Web</Heading>
				<Spacer />
				<Box display="flex">
					<p>
						<FontAwesomeIcon
							icon={faTwitter}
							fixedWidth
						/>
						&ensp;{" "}
					</p>{" "}
						<Link href="https://twitter.com">
							@pablolafontaine
						</Link>
				</Box>
				<Box display="flex">
					<p>
						<FontAwesomeIcon
							icon={faGithub}
							fixedWidth
						/>
						&ensp;{" "}
					</p>{" "}
						<Link href="https://twitter.com">
							@pablolafontaine
						</Link>
				</Box>
				
				<Box display="flex">
					<p>
						<FontAwesomeIcon
							icon={faInstagram}
							fixedWidth
						/>
						&ensp;{" "}
					</p>{" "}
						<Link href="https://twitter.com">
							@pablolafontaine1
						</Link>
				</Box>
				<Box display="flex">
					<p>
						<FontAwesomeIcon
							icon={faLinkedin}
							fixedWidth
						/>
						&ensp;{" "}
					</p>{" "}
						<Link href="https://twitter.com">
							pablo-lafontaine
						</Link>
				</Box>
				<Box display="flex">
					<p>
						<FontAwesomeIcon
							icon={faDiscord}
							fixedWidth
						/>
						&ensp;{" "}
					</p>{" "}
						<Link href="https://twitter.com">
							kouhai#5882
						</Link>
				</Box>
				<Spacer mt={{ base: 6 }} />
				<Heading size="md"> Other</Heading>
				<Spacer />
				<p>Outside of programming, </p>
			</Box>
		</Container>
	);
};
export default Page;
