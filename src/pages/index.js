import React from "react"
import Layout from "@/layouts/primary"
import * as styles from "@/styles/home.module.scss"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
  console.log(
    "data.file.childImageSharp.gatsbyImageData: ",
    data.file.childImageSharp.gatsbyImageData
  )
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Los Angeles</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage
          alt="taco image"
          image={data.file.childImageSharp.gatsbyImageData}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "taco.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
