import fs from "fs";
import matter from "gray-matter";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import {
  Divider,
  Image,
  Heading,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rangeParser from "parse-numeric-range";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faCalendar,
  faPencil,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
export default function Post({
  frontmatter,
  content,
  caption,
  slug,
  readLength,
}) {
  const bgColor = useColorModeValue("rgb(240, 240, 245)", "rgb(40, 44, 52)");
  const { title, date, tags } = frontmatter;
  const syntaxTheme = useColorModeValue(oneLight, oneDark);
  const MarkdownComponents = {
    code({ node, className, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const hasMeta = node?.data?.meta;

      const applyHighlights = (applyHighlights) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, "");
          const strlineNumbers = RE?.test(metadata)
            ? RE?.exec(metadata)[1]
            : "0";
          const highlightLines = rangeParser(strlineNumbers);
          const highlight = highlightLines;
          const data = highlight.includes(applyHighlights) ? "highlight" : null;
          return { data };
        } else {
          return {};
        }
      };
      return match ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={match[1]}
          PreTag="div"
          className="codeStyle"
          showLineNumbers={false}
          wrapLines={hasMeta ? true : false}
          useInlineStyles={true}
          lineProps={applyHighlights}
          customStyle={{
            fontSize: "0.8em",
            backgroundColor: bgColor,
          }}
          codeTagProps={{
            style: {
              padding: "0em",
              fontSize: "inherit",
              backgroundColor: "inherit",
            },
          }}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      );
    },
  };
  const MarkdownStyle = styled.div`
    	line-height: 1.7em;
	font-size: 1.2em;
blockquote{
    	padding: 0.5em;
	margin-left: 10px;
	margin-top: 10px;
	border-left: 10px solid ${useColorModeValue(
    "rgb(225, 225, 230)",
    "rgb(60, 64, 72)"
  )};
	border-radius: 5px;
	background-color: ${useColorModeValue("rgb(240, 240, 245)", "rgb(40, 44, 52)")};

},
ol {
	padding-left: 1em;
	li::marker{
	font-size: 0.8em;
	color: ${useColorModeValue("rgba(0, 0, 0, 0.5)", "rgba(255, 255, 255, 0.5)")};
		content: counter(list-item) "  ";
	},
},
ul {
	padding-left: 2.5em;
}
    ,
img{
	margin-bottom: 1em;
},
    h1 {
	margin-top: 1em;
      font-weight: bold;
      font-size: 2.0em;
    	line-height: 2.0em;
    }
    ,
    h2 {
	margin-top: 1em;
      font-weight: bold;
      font-size: 1.8em;
	line-height: 2.0em;
    }
    ,
    h3 {
	margin-top: 1em;
      font-weight: bold;
      font-size: 1.4em;
    	line-height: 2.0em;
    }
    h4 {
    font-weight: bold;
      font-size: 1.2em;
    	line-height: 2.0em;
    }
    code {
    	padding: 0.25em;
	border-radius: 5px;
	background-color: ${useColorModeValue("rgb(230, 230, 235)", "rgb(50, 54, 62)")};

	font-size: 0.8em;
    },
    a {
	color: ${useColorModeValue("#63b3ed", "#ffe48a")};
    },
    a:link { text-decoration: none; },

a:visited { text-decoration: none; },

a:hover { text-decoration: underline; },

a:active { text-decoration: none; }
},
  `;
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta content={title} property="og:title" />
        <meta content={caption} property="og:description" />
        <meta name="keywords" content={tags} />
        <meta
          content={`https://pablolafontaine.com/blog/${slug}`}
          property="og:url"
        />
        <meta
          content={`https://www.pablolafontaine.com/images/${slug}.png`}
          property="og:image"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <Container maxW="container.xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Heading mb={{ base: 4 }}>{title}</Heading>
            <Image
              borderColor={useColorModeValue("black", "white")}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="75px"
              display="inline-block"
              float="left"
              mr={{ base: 4 }}
              borderRadius="full"
              src="/images/pfp.png"
              alt="Profile Image"
            />
            <div>
              <p>
                <FontAwesomeIcon icon={faPencil} /> Pablo Lafontaine
              </p>
              <p mt={{ base: 2 }}>
                <FontAwesomeIcon icon={faCalendar} /> {date}
                {" • "}
                <FontAwesomeIcon icon={faStopwatch} /> {readLength} minute read
              </p>
              <p mb={{ base: 2 }}>
                <FontAwesomeIcon icon={faTags} /> {tags}
              </p>
            </div>
            <Divider mb={{ base: 2 }} mt={{ base: 4 }} />
            <MarkdownStyle>
              <ReactMarkdown components={MarkdownComponents}>
                {content}
              </ReactMarkdown>
            </MarkdownStyle>
          </motion.div>
        </Container>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("pages/posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`pages/posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  const caption = content
    .substr(0, content.indexOf("&nbsp;"))
    .replace(/\*/g, "");
  let readLength = (content.split(" ").length / 125).toFixed(0);
  if (readLength < 1) {
    readLength = 1;
  }

  return {
    props: {
      slug,
      frontmatter,
      content,
      caption,
      readLength,
    },
  };
}
