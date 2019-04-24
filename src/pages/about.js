import React from "react";
// import { graphql } from "gatsby";
// import Img from "gatsby-image";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import HeaderBack from "../components/HeaderBack";

import HeadingPrimary from "../elements/HeadingPrimary";
import TextBody from "../elements/TextBody";
import Button from "../elements/Button";
import aboutImg from "../images/about.jpg";

const ImgDiv = styled.div`
  margin: 0 5% 5vh 5%;

  @media (max-width: 849px) {
    margin: 0 0 5vh 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10vh;

  @media (max-width: 849px) {
    flex-direction: column;
  }
`;

const aboutStyle = {
  height: "100%",
  width: "100%"
};

function Info({ data }) {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingPrimary>About</HeadingPrimary>
        <ImgDiv>
          <img src={aboutImg} style={aboutStyle} alt="AboutFace" />
        </ImgDiv>
        <TextBody>
          Hi! My name is Peter, I'm a student at Virginia Tech, studying
          Computer Science. On the weekends, I'm a Major League Hacking Coach,
          which means at any given time I'm probably at a hackathon, or at least
          en route to the next one.
          <br />
          <br />
          I made this code blog to share the meager writeups I have to offer to
          the community and as an ongoing effort to learn React.
          <br />
          <br />
        </TextBody>
        <ButtonWrapper>
          <a href="mailto:petersmurphy7@gmail.com">
            <Button>Report an issue</Button>
          </a>
        </ButtonWrapper>
      </Layout>
    </>
  );
}

export default Info;

// export const query = graphql`
//   query {
//     RandomPhoto: file(relativePath: { eq: "about.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1200) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `;
