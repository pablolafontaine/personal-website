import {
  Container,
  Heading,
  Box,
  Spacer,
  Image,
  Link,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Head from "next/head";
const Project = ({ caption, imgPath, projectPath }) => {
  const ProjectBox = styled.span`
    img {
      height: 100%;
      width: 100%;
      transition: filter 250ms ease, transform 250ms ease;
    }
    p {
      letter-spacing: auto;
      transition: letter-spacing 250ms ease;
    }
    &:hover img {
      filter: brightness(120%);
      transform: scale(1.04);
    }
    &:hover p {
      letter-spacing: 4px;
    }
  `;
  return (
    <a href={projectPath}>
      <Box align="center">
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
            <Divider mb={{ base: 8 }} />
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
        <meta content="#FFFFFF" data-react-helmet="true" name="theme-color" />
      </Head>
      <Container>
        <Box display={"inline-block"} mt={{ base: 4 }}>
          <Heading as="h1" fontSize="20px">
            Projects
          </Heading>
          <Spacer mt={{ base: 8 }} />
          <Container align="center">
            <Project
              caption="Todoli - Todo List CLI Tool"
              imgPath="/images/projects/thumbTodoli.png"
              projectPath="https://github.com/pablolafontaine/todoli"
            />
            <Project
              caption="Portfolio Website"
              imgPath="/images/projects/thumbSite.png"
              projectPath="https://github.com/pablolafontaine/personal-website"
            />
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default Projects;
