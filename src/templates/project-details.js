import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "@/layouts/primary"
import * as styles from "@/styles/project-details.module.scss"
import { graphql } from "gatsby"

export default function projectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImage } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage
            alt="taco image"
            image={featuredImage.childImageSharp.gatsbyImageData}
          ></GatsbyImage>
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
