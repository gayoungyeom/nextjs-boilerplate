"use client"

import testAtom from "@atom"
import React from "react"
import { useRecoilValue } from "recoil"
import styled from "styled-components"

const Home = () => {
  const test = useRecoilValue(testAtom)
  return <Main>HOME {test}</Main>
}

export default Home

const Main = styled.div`
  background-color: ${(props) => props.theme.color.primary};
`
