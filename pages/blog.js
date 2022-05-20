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
const BlogBox = styled.span`
  #headline {
    text-decoration: none;
  }
  &:hover #headline {
    text-decoration: underline;
    text-decorationthickness: 1px;
  }
`;
const BlogPost = ({ headline, readLength, caption, date }) => {
  return (
    <BlogBox>
      <Box align="left">
        <Box>
          <Heading id="headline">{headline}</Heading>
        </Box>
        <Box opacity="80%">
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
          <p mt={{ base: 4 }}>{caption}</p>
        </Box>
        <Divider mb={{ base: 6 }} />
      </Box>
    </BlogBox>
  );
};
export default function Blog({ posts }) {
  return (
    <main>
      <Container>
        <Box mt={{ base: 4 }}>
          <Heading as="h1" fontSize="20px">
            Blog
          </Heading>
          <Spacer mt={{ base: 8 }} />
          {posts.map((post) => {
            const { slug, frontmatter } = post;
            const {
              title,
              date,
              caption,
              tags,
              category,
              blogImage,
              readLength,
            } = frontmatter;
            return (
              <article key={title}>
                <Link style={{ textDecoration: "none" }} href={`/blog/${slug}`}>
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
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("pages/posts/");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`pages/posts/${fileName}`);
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}
