import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  color : red;
`
const Index: React.FunctionComponent = () => {
  return (
    <Layout title="Home">
      <StyledH1>Hello Next.js 👋</StyledH1>
    </Layout>
  )
}
export default Index