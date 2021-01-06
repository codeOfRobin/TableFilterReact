import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import OurTable from "../components/OurTable"
import Search from "../components/search"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Search />

    <OurTable />
  </Layout>
)

export default IndexPage
