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
					Technology I{" "}
					<FontAwesomeIcon icon={faHeart} />
				</Heading>
				<Spacer />
				<p align="justify">
					Languages I am most comforatable and
					familiar with are Java, C, C#, Python,
					and Rust; and from those, Rust is my
					favourite language to use. I absolutely
					adore Unix. I use Vim as my IDE of
					choice. My blog is used to a document my
					current interests in more depth! Thus,
					check it out if you are interested.
				</p>

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
					<Link href="https://twitter.com/kouhaidev_">
						@kouhaidev_
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
					<Link href="https://github.com/pablolafontaine">
						pablolafontaine
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
					<Link href="https://instagram.com/pablolafontaine1">
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
					<Link href="https://linkedin.com/in/pablo-lafontaine">
						pablo-lafontaine
					</Link>
				</Box>
				<Box display="flex">
					<p>
						<FontAwesomeIcon
							icon={faDiscord}
							fixedWidth
						/>
						&ensp;kouhai#5882
					</p>
				</Box>
				<Spacer mt={{ base: 6 }} />
				<Heading size="md"> Other</Heading>
				<Spacer />
				<p>
					Outside of programming, I am a gamer,
					music producer, caffiene addict,
					日本語を勉強している人, and anime-lover.{" "}
				</p>
			</Box>
		</Container>
	);
};
export default Page;
