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
import { motion } from "framer-motion";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NextLink from "next/link";
import Head from "next/head";
const Page = () => {
  return (
    <>
      <Head>
        <meta content="Pablo Lafontaine" property="og:title" />
        <meta
          content="Hi! I am currently studying computer science in my second year at Toronto Metropolitan University (Ryerson). I love learning, experimenting, and taking on new, exciting, and challenging tasks."
          property="og:description"
        />
        <meta content="https://pablolafontaine.com/" property="og:url" />
        <meta
          content="https://www.pablolafontaine.com/images/pfp.png"
          property="og:image"
        />
        <meta content="#FFFFFF" data-react-helmet="true" name="theme-color" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading as="a1" size="xl" variant="page-title">
                Pablo Lafontaine{" "}
              </Heading>
              <p style={{ fontSize: 20 }}>Developer & Student</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 2, md: 0 }}
              ml={{ md: 5 }}
              align="center"
            >
              <Image
                borderColor={useColorModeValue("black", "white")}
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
            display={{ md: "inline-block" }}
            flexGrow={1}
            mt={{ base: 2, md: 2 }}
          >
            <Heading size="md"> About Me </Heading>
            <Spacer mt={{ base: 2 }} />
            <p>
              Hi! I am currently studying computer science in my second year at{" "}
              <strong>Toronto Metropolitan University</strong> (Ryerson). I love
              learning, experimenting, and taking on new, exciting, and
              challenging tasks. For examples of my works, check out the{" "}
              <NextLink href="/projects" scroll={false}>
                <Link>projects</Link>
              </NextLink>{" "}
              section of this site!
            </p>
            <Spacer mt={{ base: 8 }} />
            <Heading size="md">
              Technology I <FontAwesomeIcon icon={faHeart} />
            </Heading>
            <Spacer mt={{ base: 2 }} />
            <p>
              Languages I am most comfortable and familiar with are{" "}
              <strong>Java</strong>,<strong> C</strong>, <strong>Go</strong>,{" "}
              <strong>Python</strong>, and <strong>Rust</strong>; and from
              those, Rust is my favourite language to use. I absolutely adore
              Unix. I use Vim as my IDE of choice. My{" "}
              <NextLink href="/blog" scroll={false}>
                <Link>blog</Link>
              </NextLink>{" "}
              is used to document my current interests in more depth! Thus,
              check it out if you are interested.
            </p>

            <Spacer mt={{ base: 8 }} />
            <Heading size="md"> Connect With Me </Heading>
            <Spacer mt={{ base: 2 }} />
            <Box display="flex">
              <p>
                <FontAwesomeIcon icon={faTwitter} fixedWidth />
                &ensp;{" "}
              </p>{" "}
              <Link href="https://twitter.com/kouhaidev_">@kouhaidev_</Link>
            </Box>
            <Box display="flex">
              <p>
                <FontAwesomeIcon icon={faGithub} fixedWidth />
                &ensp;{" "}
              </p>{" "}
              <Link href="https://github.com/pablolafontaine">
                @pablolafontaine
              </Link>
            </Box>

            <Box display="flex">
              <p>
                <FontAwesomeIcon icon={faInstagram} fixedWidth />
                &ensp;{" "}
              </p>{" "}
              <Link href="https://instagram.com/pablolafontaine1">
                @pablolafontaine1
              </Link>
            </Box>
            <Box display="flex">
              <p>
                <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                &ensp;{" "}
              </p>{" "}
              <Link href="https://linkedin.com/in/pablo-lafontaine">
                @pablo-lafontaine
              </Link>
            </Box>
            <Box display="flex">
              <p>
                <FontAwesomeIcon icon={faDiscord} fixedWidth />
                &ensp;kouhai#5882
              </p>
            </Box>
            <Box display="flex">
              <p>
                <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                &ensp;pablolafontaine1@gmail.com
              </p>
            </Box>
            <Spacer mt={{ base: 8 }} />
            <Heading size="md"> Other</Heading>
            <Spacer mt={{ base: 2 }} />
            <p>
              Outside of programming, I am a gamer, music producer, caffiene
              addict, 日本語を勉強している人, keyboard enthusiast, and virtual
              reality lover. I also am a huge cat person.
            </p>
          </Box>
        </Container>
      </motion.div>
    </>
  );
};
export default Page;
