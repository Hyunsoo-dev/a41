import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const MarkdownRenderer = ({ markdown }) => {
  return markdown ? (
    <div>
      <ReactMarkdown
        children={markdown}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter children={String(children).replace(/\n$/, "")} language={match[1]} PreTag="div" {...props} />
            ) : (
              <pre
                style={{
                  color: "black",
                  backgroundColor: "#e5eaee",
                  padding: "2rem",
                  lineHeight: "1.5rem",
                  margin: "2rem auto",
                }}
              >
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          },
        }}
      />
    </div>
  ) : (
    <></>
  );
};

export default MarkdownRenderer;
