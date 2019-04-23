import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import HeaderLogo from "../components/HeaderLogo";

import HeadingPrimary from "../elements/HeadingPrimary";
import HeadingSecondary from "../elements/HeadingSecondary";
import TextBody from "../elements/TextBody";
import TextDate from "../elements/TextDate";
import avi from "../images/avi.jpeg";

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: 849px) {
    margin-bottom: 15vh;
  }
`;

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;
  @media (max-width: 849px) {
    padding-left: 0;
  }
`;

const aviStyle = {
  padding: "5px",
  borderRadius: "50%",
  height: "200px",
  width: "200px",
  verticalAlign: "middle",
  alignSelf: "flex-start",
  float: "right"
};

function Blog({ data }) {
  return (
    <>
      <SEO title="Blog" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <img src={avi} style={aviStyle} alt="profile" />
          <HeadingPrimary>Peter's Code Blog</HeadingPrimary>
          <TextBody>For my meager writeups</TextBody>
        </Hero>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link key={node.id} to={node.fields.slug}>
            <Post style={{ borderBottom: "1px solid blue" }}>
              <HeadingSecondary>{node.frontmatter.title}</HeadingSecondary>
              <TextBody> Using: {node.frontmatter.subtitle} </TextBody>
              <TextDate style={{ float: "right" }}>
                {node.frontmatter.duration}
              </TextDate>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            subtitle
            duration
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog;
