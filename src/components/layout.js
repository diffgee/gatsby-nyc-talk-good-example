import React from "react"
import styled from "styled-components"

export default props => <Layout>{props.children}</Layout>

const Layout = styled.main`
  text-align: center;
  max-width: 1400px;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`
