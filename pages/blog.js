import {
  Divider,
  Container,
  Link,
  Heading,
  Box,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faCalendar } from "@fortawesome/free-solid-svg-icons";
import matter from "gray-matter";
import fs from "fs";
import Head from "next/head";
const BlogBox = styled.span`
  #headline {
    text-decoration: none;
    transition: opacity 250ms ease;
    opacity: 0.7;
  }
  &:hover #headline {
    opacity: 1;
  }
`;
const BlogPost = ({ headline, readLength, caption, date }) => {
  return (
    <BlogBox>
      <Box align="left">
        <Box>
          <Heading size="lg" id="headline">
            {headline}
          </Heading>
        </Box>
        <Box opacity="80%" mb={{ base: 1 }} mt={{ base: 1 }}>
          <p>
            <FontAwesomeIcon icon={faCalendar} /> {date}
            {" • "}
            <FontAwesomeIcon icon={faStopwatch} /> {readLength} minute read
          </p>
        </Box>
        <Box
          color={useColorModeValue("#000000", "#ffffff")}
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
        >
          <p mt={{ base: 6 }}>{caption}</p>
        </Box>
        <Divider mb={{ base: 6 }} />
      </Box>
    </BlogBox>
  );
};
export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title> Blog </title>
        <meta content="Pablo Lafontaine - Blog" property="og:title" />
        <meta
          content="My blog where I talk about things in tech."
          property="og:description"
        />
        <meta name="keywords" content="Blog, Markdown, Pablo" />
        <meta content="https://pablolafontaine.com/blog" property="og:url" />
        <meta
          content="https://pablolafontaine.com/images/pfp.png"
          property="og:image"
        />
        <meta content="#FFFFFF" data-react-helmet="true" name="theme-color" />
      </Head>
      <main>
        <Container>
          <Box mt={{ base: 4 }}>
            <Heading as="h1" fontSize="20px">
              Blog
            </Heading>
            <Spacer mt={{ base: 8 }} />
            {posts.map((post) => {
              const { slug, frontmatter, readLength, caption } = post;
              const { title, date } = frontmatter;
              return (
                <article key={title}>
                  <Link
                    key={title}
                    style={{ textDecoration: "none" }}
                    href={`/blog/${slug}`}
                  >
                    <BlogPost
                      headline={title}
                      readLength={readLength}
                      date={date}
                      caption={caption}
                    />
                  </Link>
                </article>
              );
            })}
          </Box>
        </Container>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("pages/posts/");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`pages/posts/${fileName}`);
    const { data: frontmatter, content } = matter(readFile);
    const caption = content.substr(0, 200).replace(/\*/g, "").concat("...");
    let readLength = (content.split(" ").length / 125).toFixed(0);
    if (readLength < 1) {
      readLength = 1;
    }
    return {
      slug,
      frontmatter,
      readLength,
      caption,
    };
  });
  return {
    props: {
      posts,
    },
  };
}
