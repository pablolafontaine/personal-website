import fs from "fs";
import matter from "gray-matter";
import styled from "@emotion/styled";
import {
  Divider,
  Heading,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import rangeParser from "parse-numeric-range";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faCalendar,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
export default function Post({ frontmatter, content }) {
  const bgColor = useColorModeValue("rgb(240, 240, 245)", "rgb(40, 44, 52)");
  const { title, readLength, date, tags } = frontmatter;
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
    h1 {
      font-weight: bold;
      font-size: 1.6em;
    }
    ,
    h2 {
      font-weight: bold;
      font-size: 1.4em;
    }
    ,
    h3 {
      font-weight: bold;
      font-size: 1.2em;
    }
    h4 {
      font-size: 1em;
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
ol {
	padding-left: 2em;
},
ul {
	padding-left: 2em;
}
    ,
  `;
  return (
    <main>
      <Container>
        <Heading>{title}</Heading>
        <p>
          <FontAwesomeIcon icon={faCalendar} /> {date}
          {" • "}
          <FontAwesomeIcon icon={faStopwatch} /> {readLength} minute read
        </p>
        <p>
          <FontAwesomeIcon icon={faTags} /> {tags}
        </p>
        <Divider mb={{ base: 2 }} />
        <MarkdownStyle>
          <ReactMarkdown components={MarkdownComponents}>
            {content}
          </ReactMarkdown>
        </MarkdownStyle>
      </Container>
    </main>
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
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
