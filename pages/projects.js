import {
  Container,
  Heading,
  Box,
  Spacer,
  Image,
  Link,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Head from "next/head";
const Project = ({ caption, imgPath, projectPath }) => {
  const ProjectBox = styled.span`
    img {
      height: 100%;
      width: 100%;
      transition: filter 250ms ease, transform 250ms ease;
    }
    &:hover img {
      filter: brightness(120%);
      transform: scale(1.04);
    }
  `;
  return (
    <a href={projectPath}>
      <Box align="center" w="100%">
        <Link color={useColorModeValue("#000000", "#ffffff")}>
          <ProjectBox>
            <Image
              mb={{ base: 4 }}
              align="center"
              maxWidth="600px"
              borderStyle="solid"
              borderWidth={2}
              borderRadius="25px"
              borderColor={useColorModeValue("black", "white")}
              src={imgPath}
              alt="Project Image"
            />
            <p mt={{ base: 6 }}>{caption}</p>
          </ProjectBox>
        </Link>
      </Box>
    </a>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title> Projects </title>
        <meta content="Pablo Lafontaine - Projects" property="og:title" />
        <meta
          content="List of projects I've worked on. Check them out on GitHub!"
          property="og:description"
        />
        <meta name="keywords" content="Projects, Git, Pablo" />
        <meta
          content="https://pablolafontaine.com/projects"
          property="og:url"
        />
        <meta
          content="https://pablolafontaine.com/images/pfp.png"
          property="og:image"
        />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <Box mt={{ base: 4 }}>
            <Heading as="h1" fontSize="20px">
              Projects
            </Heading>
            <Spacer mt={{ base: 8 }} />
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
              <Project
                caption="todoli"
                imgPath="/images/projects/thumbTodoli.png"
                projectPath="https://github.com/pablolafontaine/todoli"
              />
              <Project
                caption="Portfolio Website"
                imgPath="/images/projects/thumbSite.png"
                projectPath="https://github.com/pablolafontaine/personal-website"
              />
            </SimpleGrid>
          </Box>
        </Container>
      </motion.div>
    </>
  );
};

export default Projects;
